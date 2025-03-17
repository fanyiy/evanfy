import { XmpEditor } from "@/components/tools/xmp-editor"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "XMP Editor - Apply Presets to Images",
  description: "Upload an XMP preset file and apply it to your images using Adobe Lightroom API",
}

export default function XmpEditorPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">XMP Editor</h1>
        <p className="mb-8 text-muted-foreground">
          Upload an XMP preset file and an image to apply the preset using Adobe Lightroom API.
        </p>
        <XmpEditor />
      </div>
    </div>
  )
} 