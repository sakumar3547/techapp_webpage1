"use client"

import * as React from "react"
import { ResponsiveFolder } from "@/components/site/responsive-folder"
import { services, type Service } from "@/lib/site"
import { cn } from "@/lib/utils"

function ServiceColumn({ service, delay }: { service: Service; delay: number }) {
  const [active, setActive] = React.useState(0)

  return (
    <div className="flex w-full max-w-[380px] flex-col">
      <ResponsiveFolder
        maxWidth={340}
        label={service.label}
        meta={service.deliverables.length + " solutions"}
        art={service.art}
        seed={service.seed}
        action="none"
        appearDelay={delay}
        files={service.deliverables.map(({ name, meta, art }) => ({ name, meta, art }))}
        onFileSelect={(_, index) => setActive(index)}
      />
      <p className="mt-8 text-[17px] leading-snug text-foreground">{service.summary}</p>
      <ul className="mt-5 border-t border-border">
        {service.deliverables.map((d, i) => {
          const on = i === active
          return (
            <li key={d.name} className="border-b border-border">
              <button
                type="button"
                aria-expanded={on}
                onClick={() => setActive(i)}
                className="flex w-full cursor-pointer items-baseline justify-between gap-4 py-3 text-left"
              >
                <span className={cn("text-[15px] transition-colors", on ? "font-medium text-foreground" : "text-muted-foreground")}>
                  {d.name}
                </span>
                <span className="font-mono text-[11px] tracking-wide text-muted-foreground">{d.meta}</span>
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                  on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                  <span className="block pb-4">{d.detail}</span>
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function Services() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-x-12 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
      {services.map((s, i) => (
        <ServiceColumn key={s.id} service={s} delay={i * 140} />
      ))}
    </div>
  )
}
