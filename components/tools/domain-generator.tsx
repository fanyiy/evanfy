"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { z } from "zod"
import { ArrowUpRight, EyeOff, Loader } from "lucide-react"
import { generateDomains } from "@/actions/generate-domains"
import { checkDomains } from "@/actions/check-domain-availability"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"

const domainSchema = z.object({
  suggestions: z.array(z.object({
    name: z.string(),
    explanation: z.string()
  }))
})

interface DomainSuggestion {
  name: string
  explanation: string
  available?: boolean
}

export function DomainGenerator() {
  const [query, setQuery] = useState("")
  const [domains, setDomains] = useState<DomainSuggestion[]>([])
  const [isChecking, setIsChecking] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [hasMoreDomains, setHasMoreDomains] = useState(true)
  const [hideUnavailable, setHideUnavailable] = useState(false)
  const [attemptCount, setAttemptCount] = useState(0)

  async function fetchDomains(count: number, append = false) {
    const loadingState = append ? setIsLoadingMore : setIsChecking
    loadingState(true)
    try {
      // Request more domains than needed to account for potential duplicates
      const result = await generateDomains(query, count + (append ? 5 : 0))
      const parsed = domainSchema.parse(result)
      const updatedDomains = await checkDomainAvailability(parsed.suggestions)
      
      if (append) {
        // Filter out duplicates when appending
        const existingNames = new Set(domains.map(d => d.name.toLowerCase()))
        const uniqueNewDomains = updatedDomains.filter(d => !existingNames.has(d.name.toLowerCase()))
        
        if (uniqueNewDomains.length === 0) {
          // If all results were duplicates and we haven't tried too many times
          if (attemptCount < 2) {
            setAttemptCount(prev => prev + 1)
            await fetchDomains(count, append)
            return
          }
          // If we've tried multiple times and still get duplicates, assume no more unique domains
          setHasMoreDomains(false)
        } else {
          setDomains(prev => [...prev, ...uniqueNewDomains.slice(0, count)])
          setAttemptCount(0)
        }
      } else {
        setDomains(updatedDomains)
        setAttemptCount(0)
      }

      // Check if we should hide the "Generate More" button
      if (updatedDomains.length < count || attemptCount >= 2) {
        setHasMoreDomains(false)
      }
    } catch (error) {
      console.error("Failed to fetch domains:", error)
      setHasMoreDomains(false)
    } finally {
      loadingState(false)
    }
  }

  async function checkDomainAvailability(suggestions: DomainSuggestion[]) {
    // Updated to use checkDomains with an array of domain names
    const domainNames = suggestions.map(domain => domain.name)
    const results = await checkDomains(domainNames)

    const updatedDomains = suggestions.map((domain, index) => ({
      ...domain,
      available: results[index].available,
    }))

    return updatedDomains
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!query.trim()) return
    if (domains.length > 0) setDomains([])
    setHasMoreDomains(true)
    setAttemptCount(0)
    fetchDomains(10)
  }

  async function handleLoadMore() {
    if (isLoadingMore || isChecking) return
    await fetchDomains(10, true)
  }

  const filteredDomains = hideUnavailable 
    ? domains.filter(domain => domain.available) 
    : domains

  return (
    <div className="w-full space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Describe your idea..."
          className="flex-1 px-4 h-12 rounded-xl focus-visible:ring-0"
        />
        <button
          type="submit"
          disabled={isChecking}
          className={`h-12 w-24 rounded-xl border border-border font-medium flex items-center justify-center ${!isChecking ? "hover:bg-primary/10 transition-colors" : ""}`}
        >
          {isChecking ? (
            <Loader className="h-4 w-4 animate-spin text-muted-foreground" />
          ) : (
            <span className="text-sm">Generate</span>
          )}
        </button>
      </form>

      {domains.length > 0 && (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Available
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-600" />
                Unavailable
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Switch
                checked={hideUnavailable}
                onCheckedChange={setHideUnavailable}
              />
              <span>Hide Unavailable</span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredDomains.map((domain, i) => (
              <Card key={`${domain.name}-${i}`} className="p-4">
                <h3 className="text-lg font-semibold flex items-center ">
                  {domain.name}
                  <span className={`ml-2 h-2 w-2 rounded-full ${domain.available ? "bg-green-600" : "bg-red-600"}`} />
                </h3>
                <p className="text-sm text-muted-foreground">{domain.explanation}</p>
                {domain.available && (
                  <a
                    href={`https://www.namecheap.com/domains/registration/results/?domain=${domain.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-xs border border-border hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    Register on Namecheap
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </Card>
            ))}
          </div>
          {hasMoreDomains && !isLoadingMore && (
            <div className="flex justify-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore || isChecking}
                className="px-6 py-2 text-sm rounded-xl border border-border font-medium flex items-center justify-center hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Generate More
              </button>
            </div>
          )}
        </>
      )}

      {(isChecking || isLoadingMore) && (
        <div className="grid gap-4 md:grid-cols-2">
          {[...Array(10)].map((_, i) => (
            <Card key={i} className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full" />
              <div className="mt-2">
                <Skeleton className="h-4 w-1/4" />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}