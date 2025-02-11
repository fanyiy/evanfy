import { MarkdownPreview } from "@/components/tools/markdown-preview"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Markdown Preview | Evan Yang",
  description: "A real-time markdown previewer with a clean, modern interface",
}

export default function MarkdownPreviewPage() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-12 py-12 sm:py-24 px-6 sm:px-0">
      <Link href="/">
        <Image src="/images/signature-2.png" alt="Evan" width={80} height={80} className="dark:invert" />
      </Link>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl sm:text-2xl font-bold">Markdown Preview</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          A real-time markdown preview with syntax highlighting and a clean interface
        </p>
      </div>

      <MarkdownPreview />
    </div>
  )
} 