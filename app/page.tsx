import { ArrowDown, ArrowUpRight, Globe, Mail, Phone } from "lucide-react"
import { ContactForm } from "@/components/site/contact-form"
import { HeroFolder } from "@/components/site/hero-folder"
import { ResponsiveFolder } from "@/components/site/responsive-folder"
import { Services } from "@/components/site/services"
import { about, automates, capabilities, nav, principles, process, site, work } from "@/lib/site"

const contactRows = [
  { label: "Email", value: site.email, href: "mailto:" + site.email, icon: Mail },
  { label: "Mobile", value: site.phone, href: site.phoneHref, icon: Phone },
  ...(site.website
    ? [{ label: "Website", value: site.website.replace(/^https?:\/\//, ""), href: site.website, icon: Globe }]
    : []),
]

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={"font-mono text-[11px] tracking-[0.18em] uppercase " + className}>{children}</p>
}

function Dots({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={"desk-dots pointer-events-none absolute inset-0 " + className} />
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-6 px-6">
          <a href="#top" className="flex items-baseline gap-2.5">
            <span className="text-[17px] font-medium tracking-tight">{site.name}</span>
            <span className="hidden font-mono text-[11px] tracking-[0.08em] text-muted-foreground sm:inline">
              AI · automation · software
            </span>
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-px"
          >
            Book a call
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* ---- hero ---------------------------------------------------------- */}
        <section className="relative overflow-hidden">
          <Dots className="text-foreground opacity-[0.13]" />
          <div className="relative mx-auto grid max-w-[1180px] items-center gap-x-12 gap-y-14 px-6 pt-16 pb-20 lg:grid-cols-[1.1fr_1fr] lg:pt-24 lg:pb-28">
            <div>
              <Eyebrow className="text-muted-foreground">{site.role}</Eyebrow>
              <h1 className="mt-6 text-[clamp(2.6rem,6.4vw,4.75rem)] leading-[0.98] font-medium tracking-[-0.035em] text-balance">
                Put your busywork on <em className="font-serif font-normal tracking-[-0.02em]">autopilot.</em>
              </h1>
              <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-muted-foreground">
                We build custom AI agents, automated workflows and software that take the repetitive work off your
                team, so your business moves faster while you get on with growing it.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-[15px] font-medium text-primary-foreground transition-transform hover:-translate-y-px"
                >
                  Start your project
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-input bg-card/60 px-6 text-[15px] font-medium backdrop-blur transition-colors hover:bg-card"
                >
                  See what we build
                  <ArrowDown className="size-4" aria-hidden="true" />
                </a>
              </div>
              <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2">
                {principles.map((p) => (
                  <li key={p} className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center pt-10 lg:pt-6">
              <HeroFolder />
              <Eyebrow className="mt-8 text-center text-muted-foreground">Click to open</Eyebrow>
            </div>
          </div>
        </section>

        {/* ---- what we automate: a strip that slides past ---------------------- */}
        <div className="marquee overflow-hidden bg-ink py-4 text-ink-foreground">
          <p className="sr-only">We automate: {automates.join(", ")}.</p>
          <div className="marquee-track" aria-hidden="true">
            {[...automates, ...automates].map((item, i) => (
              <span key={i} className="flex items-center gap-8 pr-8 text-[15px] whitespace-nowrap">
                <span className="size-1.5 rounded-full bg-accent" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ---- services ------------------------------------------------------ */}
        <section id="services" className="scroll-mt-16">
          <div className="mx-auto max-w-[1180px] px-6 py-24 lg:py-32">
            <div className="max-w-[40rem]">
              <Eyebrow className="text-muted-foreground">Services</Eyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.04] font-medium tracking-[-0.03em] text-balance">
                Three ways we <em className="font-serif font-normal">give you your time back.</em>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Smart agents, connected tools and software made to measure. Open a folder and pick a file to see what
                it does for you.
              </p>
            </div>
            <div className="mt-20">
              <Services />
            </div>
          </div>
        </section>

        {/* ---- process ------------------------------------------------------- */}
        <section id="process" className="scroll-mt-16 border-t border-border bg-card">
          <div className="mx-auto max-w-[1180px] px-6 py-24 lg:py-32">
            <div className="max-w-[40rem]">
              <Eyebrow className="text-muted-foreground">Process</Eyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.04] font-medium tracking-[-0.03em] text-balance">
                From idea to live <em className="font-serif font-normal">in four moves.</em>
              </h2>
            </div>
            <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p) => (
                <li key={p.step} className="border-t border-foreground pt-5">
                  <div className="flex items-baseline justify-between font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
                    <span>{p.step}</span>
                    <span>{p.length}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-medium tracking-[-0.02em]">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---- work: the smoked-glass band ----------------------------------- */}
        <section id="work" className="relative scroll-mt-16 overflow-hidden bg-ink text-ink-foreground">
          <Dots className="text-white opacity-[0.09]" />
          <div className="relative mx-auto max-w-[1180px] px-6 py-24 lg:py-32">
            <div className="max-w-[40rem]">
              <Eyebrow className="text-ink-muted">What we can build for you</Eyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.04] font-medium tracking-[-0.03em] text-balance">
                Imagine this <em className="font-serif font-normal">running in your business.</em>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                Three examples of what our services become once they are put together.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 justify-items-center gap-x-12 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
              {work.map((c, i) => (
                <article key={c.label} className="flex w-full max-w-[380px] flex-col">
                  <ResponsiveFolder
                    maxWidth={340}
                    tone="dark"
                    label={c.label}
                    meta={c.sector}
                    art={c.art}
                    seed={c.seed}
                    action="none"
                    labelPlacement="top-right"
                    appearDelay={i * 140}
                    files={c.files}
                  />
                  <Eyebrow className="mt-8 text-ink-muted">{c.sector}</Eyebrow>
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.02em]">{c.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{c.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- about --------------------------------------------------------- */}
        <section id="about" className="scroll-mt-16">
          <div className="mx-auto grid max-w-[1180px] gap-x-16 gap-y-14 px-6 py-24 lg:grid-cols-[1fr_1.15fr] lg:py-32">
            <div>
              <Eyebrow className="text-muted-foreground">About us</Eyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.04] font-medium tracking-[-0.03em] text-balance">
                Small team. <em className="font-serif font-normal">Serious firepower.</em>
              </h2>
              {about.map((p, i) => (
                <p key={i} className={(i ? "mt-4" : "mt-6") + " text-lg leading-relaxed text-muted-foreground"}>
                  {p}
                </p>
              ))}
            </div>
            <dl className="self-end border-t border-border">
              {capabilities.map((c) => (
                <div key={c.area} className="grid gap-1 border-b border-border py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="font-mono text-[11px] leading-6 tracking-[0.12em] text-muted-foreground uppercase">
                    {c.area}
                  </dt>
                  <dd className="text-[15px] leading-6">{c.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---- contact ------------------------------------------------------- */}
        <section id="contact" className="relative scroll-mt-16 overflow-hidden border-t border-border">
          <Dots className="text-foreground opacity-[0.13]" />
          <div className="relative mx-auto flex max-w-[1180px] flex-col items-center px-6 py-28 text-center lg:py-36">
            <Eyebrow className="text-muted-foreground">Contact us</Eyebrow>
            <h2 className="mt-6 max-w-[18ch] text-[clamp(2.4rem,6vw,4.5rem)] leading-[1] font-medium tracking-[-0.035em] text-balance">
              Tell us what slows you down. <em className="font-serif font-normal">We&rsquo;ll automate it.</em>
            </h2>
            <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted-foreground">
              Thirty minutes, no jargon. Name the task your team dreads most and we will show you how we would make it
              disappear.
            </p>
            <div className="mt-12 w-full max-w-[44rem]">
              <ContactForm />
            </div>
            <p className="mt-12 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Or reach us directly
            </p>
            <ul className="mt-5 flex w-full max-w-[52rem] flex-col gap-3 sm:flex-row sm:justify-center">
              {contactRows.map((row) => (
                <li key={row.label} className="sm:min-w-0 sm:flex-1">
                  <a
                    href={row.href}
                    className="flex items-center gap-4 rounded-2xl border border-input bg-card/70 px-5 py-4 text-left backdrop-blur transition-colors hover:bg-card"
                  >
                    <span className="grid size-10 flex-none place-items-center rounded-xl bg-primary text-primary-foreground">
                      <row.icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                        {row.label}
                      </span>
                      <span className="mt-0.5 block text-[15px] font-medium break-words">{row.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-6 py-8 font-mono text-[11px] tracking-[0.08em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {site.name} · {site.role}
          </span>
          <span>{site.location}</span>
        </div>
      </footer>
    </>
  )
}
