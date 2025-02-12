import { DomainGenerator } from "@/components/tools/domain-generator"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Domain Name Generator | Evan Yang",
  description: "Generate creative domain name suggestions for your idea"
}

export default function DomainGeneratorPage() {
  return (
    <div className="max-w-xl mx-auto flex flex-col gap-8 py-12 sm:py-24 px-6 sm:px-0">
      <Link href="/">
        <Image src="/images/signature-2.png" alt="Evan" width={80} height={80} className="dark:invert" priority />
      </Link>

      <div className="flex flex-col gap-2">
        <h1 className="text-xl sm:text-2xl font-bold">Domain Name Generator</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Enter a description of your idea, and I&apos;ll generate creative domain name suggestions
          and check their availability.
        </p>
      </div>
      <DomainGenerator />
    </div>
  )
} 