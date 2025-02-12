"use client"

import { getCalApi } from "@calcom/embed-react"
import { ArrowRight } from "lucide-react"
import { useEffect } from "react"

export default function BookingForm() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "talk-to-evan" })
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" })
    })()
  }, [])

  return (
    <button
      data-cal-namespace="talk-to-evan"
      data-cal-link="evanyang/talk-to-evan"
      data-cal-config='{"layout":"month_view"}'
      className="px-4 py-2 rounded-lg border border-border hover:border-foreground/20 transition-colors font-medium flex items-center gap-2 group"
    >
      Let's chat!
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </button>
  )
}
