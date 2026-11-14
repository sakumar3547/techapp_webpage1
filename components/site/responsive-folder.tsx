"use client"

import * as React from "react"
import GlassFolder, { type GlassFolderProps } from "@/components/ui/glass-folder-cards"

/**
 * GlassFolder takes a width in px. This measures the column it sits in and
 * hands the folder a width that fits, up to `maxWidth`, so it never overflows
 * a phone. The folder mounts once the width is known, so its art paints once.
 */
export function ResponsiveFolder({ maxWidth = 340, ...props }: GlassFolderProps & { maxWidth?: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [width, setWidth] = React.useState<number | null>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    // step in 20px so dragging a window edge doesn't repaint the art every pixel
    const measure = () => {
      if (!el.clientWidth) return
      const fit = Math.min(maxWidth, Math.floor(el.clientWidth / 20) * 20)
      setWidth(Math.max(240, fit))
    }
    // measure now as well: a ResizeObserver only reports while the page is being painted
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [maxWidth])

  return (
    <div ref={ref} className="flex w-full justify-center">
      {width ? (
        <GlassFolder {...props} width={width} />
      ) : (
        <div aria-hidden="true" style={{ width: "100%", maxWidth, aspectRatio: "340 / 326" }} />
      )}
    </div>
  )
}
