"use client"

import type { FolderFile } from "@/components/ui/glass-folder-cards"
import { ResponsiveFolder } from "@/components/site/responsive-folder"

const FILES: FolderFile[] = [
  { name: "AI agent", meta: "Automation", art: "dusk", href: "#services" },
  { name: "Workflow", meta: "Autopilot", href: "#services" },
  { name: "Custom app", meta: "Software", art: "ember", href: "#services" },
]

/** The hero folder: the three things we build. Click it to open. */
export function HeroFolder() {
  return (
    <ResponsiveFolder
      maxWidth={440}
      label="Your next build"
      art="aurora"
      seed={3}
      files={FILES}
      action="none"
    />
  )
}
