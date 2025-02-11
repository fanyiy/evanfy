'use client'

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Resizable } from 're-resizable'
import { cn } from '@/lib/utils'
import { Maximize2, Minimize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface MarkdownPreviewProps {
  className?: string
}

const DEFAULT_MARKDOWN = `# Hello World

This is a live markdown previewer. Start typing on the left to see the preview on the right.

## Features

- Real-time preview
- Split pane layout
- Syntax highlighting
- Responsive design

### Code Example

\`\`\`typescript
function greet(name: string) {
  return \`Hello, \${name}!\`
}
\`\`\`

### Lists

1. First item
2. Second item
3. Third item

- Unordered list
- Another item
  - Nested item
  - Another nested item

### Links and Images

[Visit my website](https://evanfy.com)

![Sample Image](https://images.unsplash.com/photo-1738444515789-0a1a4c4982dc?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
`

export function MarkdownPreview({ className }: MarkdownPreviewProps) {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && isFullscreen)
        setIsFullscreen(false)
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isFullscreen])

  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        bounce: 0.15,
        duration: 0.5
      }}
      className={cn(
        "relative flex rounded-xl border border-border overflow-hidden",
        isFullscreen ? "fixed inset-0 z-50 bg-background" : "h-[calc(100vh-26rem)]",
        className
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-50"
        onClick={() => setIsFullscreen(!isFullscreen)}
      >
        {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
      </Button>

      <Resizable
        defaultSize={{ width: '50%', height: '100%' }}
        minWidth="30%"
        maxWidth="70%"
        enable={{ right: !isFullscreen }}
      >
        <div className="h-full border-r border-border">
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full h-full p-4 resize-none focus:outline-none bg-background text-sm font-mono"
            placeholder="Enter markdown here..."
          />
        </div>
      </Resizable>

      <div className="flex-1 overflow-auto p-4 prose prose-sm dark:prose-invert max-w-none">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </motion.div>
  )
} 