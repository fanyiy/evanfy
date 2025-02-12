import Link from "next/link"
import Image from "next/image"

const tools = [
  {
    href: "/tools/domain-generator",
    title: "Domain Name Generator",
    description: "Generate domain name ideas for your idea"
  },
  {
    href: "/tools/markdown-preview",
    title: "Markdown Preview",
    description: "Preview your markdown code in real-time"
  }
]

export default function ToolsPage() {
  return (
    <div className="max-w-xl mx-auto flex flex-col gap-8 py-12 sm:py-24 px-6 sm:px-0">
      <Link href="/">
        <Image src="/images/signature-2.png" alt="Evan" width={80} height={80} className="dark:invert" priority />
      </Link>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Tools</h1>
        <p className="text-sm text-muted-foreground">
          A collection of free tools I built
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map(({ href, title, description }) => (
          <Link
            key={href}
            href={href}
            className="p-6 rounded-2xl border border-border hover:border-foreground/20 transition-colors"
          >
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm text-muted-foreground mt-2">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}