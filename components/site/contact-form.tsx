"use client"

import * as React from "react"
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react"
import { services, site } from "@/lib/site"

const INTERESTS = [...services.map((s) => s.label), "Not sure yet"]

const field =
  "h-12 w-full rounded-xl border border-input bg-card px-4 text-[15px] text-foreground placeholder:text-muted-foreground/70 transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
const label = "mb-2 block text-sm font-medium"

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string }

/** The customer enquiry form. Posts to /api/contact, which appends a row to the Google Sheet. */
export function ContactForm() {
  const [status, setStatus] = React.useState<Status>({ state: "idle" })
  const [name, setName] = React.useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus({ state: "sending" })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const body = (await res.json().catch(() => null)) as { error?: string } | null
      if (!res.ok) throw new Error(body?.error || "Something went wrong. Please try again.")
      setName(String(data.name).trim().split(/\s+/)[0])
      setStatus({ state: "sent" })
      form.reset()
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." })
    }
  }

  if (status.state === "sent") {
    return (
      <div
        role="status"
        className="flex w-full flex-col items-center rounded-3xl border border-input bg-card/80 px-6 py-14 text-center backdrop-blur"
      >
        <span className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
          <Check className="size-5" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl font-medium tracking-[-0.02em]">Thanks, {name}. We&rsquo;ve got it.</h3>
        <p className="mt-3 max-w-[26rem] text-[15px] leading-relaxed text-muted-foreground">
          We will get back to you shortly. If it is urgent, call us on{" "}
          <a href={site.phoneHref} className="font-medium text-foreground underline underline-offset-4">
            {site.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-8 cursor-pointer text-sm font-medium underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  const sending = status.state === "sending"

  return (
    <form
      onSubmit={onSubmit}
      className="w-full rounded-3xl border border-input bg-card/80 p-6 text-left shadow-[0_30px_60px_-30px_rgba(10,12,20,0.25)] backdrop-blur sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            Your name
          </label>
          <input id="cf-name" name="name" required maxLength={100} autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-company" className={label}>
            Company <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input id="cf-company" name="company" maxLength={120} autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            maxLength={160}
            autoComplete="email"
            placeholder="you@company.com"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>
            Mobile number
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            maxLength={30}
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={field}
          />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className={label}>What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((item, i) => (
            <label key={item} className="cursor-pointer">
              <input type="radio" name="service" value={item} defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-flex h-10 items-center rounded-full border border-input bg-card px-4 text-sm transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-ring">
                {item}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor="cf-message" className={label}>
          What would you like to automate or build?
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          maxLength={2000}
          placeholder="Tell us about the task or the idea, in a few lines."
          className={field + " h-auto resize-y py-3 leading-relaxed"}
        />
      </div>

      {/* left empty by people, filled in by bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-website">Leave this field empty</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">We only use your details to reply to this enquiry.</p>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex h-12 flex-none cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-7 text-[15px] font-medium text-primary-foreground transition-transform hover:-translate-y-px disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {sending ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              Send enquiry
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>

      {status.state === "error" ? (
        <p role="alert" className="mt-5 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {status.message}
        </p>
      ) : null}
    </form>
  )
}
