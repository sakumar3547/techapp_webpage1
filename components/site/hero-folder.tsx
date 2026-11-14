"use client"

import type { FolderFile } from "@/components/ui/glass-folder-cards"
import { ResponsiveFolder } from "@/components/site/responsive-folder"

const FILES: FolderFile[] = [
  { name: "AI agent", meta: "Automation", art: "dusk", href: "#services" },
  { name: "Workflow", meta: "Autopilot", href: "#services" },
  { name: "Custom app", meta: "Software", art: "ember", href: "#services" },
]

/** The hero folder: what an engagement leaves behind. `+` drops your project in. */
export function HeroFolder() {
  return (
    <ResponsiveFolder
      maxWidth={440}
      label="Your next build"
      art="aurora"
      seed={3}
      files={FILES}
      onAdd={(files) => ({
        name: files.some((f) => f.name === "Your project") ? "Another idea" : "Your project",
        meta: "Start here",
        href: "#contact",
      })}
    />
  )
}
