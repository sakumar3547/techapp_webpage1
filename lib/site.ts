import type { FolderArt, FolderFile } from "@/components/ui/glass-folder-cards"

/** Everything the site says lives here. */
export const site = {
  name: "Tech app Universe",
  role: "Custom AI Automation, Workflows & Software",
  description:
    "Tech app Universe builds custom AI automation, business workflows and software that take the repetitive work off your team.",
  email: "techappuniverse@gmail.com",
  phone: "+91 98848 34637",
  phoneHref: "tel:+919884834637",
  /** Your public site address, e.g. "https://example.com". Left empty, the row is hidden. */
  website: "",
  bookingUrl: "mailto:techappuniverse@gmail.com?subject=Let%27s%20automate%20my%20business",
  location: "India · working with teams worldwide",
}

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Solutions", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export const principles = ["Custom-built, never templated", "Humans stay in control", "You own everything we build"]

/** The strip under the hero: the everyday work we take off people's plates. */
export const automates = [
  "Invoice processing",
  "Lead follow-up",
  "Customer support",
  "Data entry",
  "Daily reports",
  "Approvals",
  "Client onboarding",
  "Stock alerts",
  "Appointment booking",
  "Document filing",
]

export const about = [
  "Tech app Universe is a studio of builders obsessed with one thing: getting the boring work off your plate. We design custom AI automation, wire up the workflows that connect your tools, and build the software that off-the-shelf products can't give you.",
  "No templates and no bloated retainers. We learn how your business actually runs, automate what a machine does better, and hand you something that works on day one and keeps getting better after it.",
]

export type Deliverable = FolderFile & { detail: string }

export type Service = {
  id: string
  label: string
  summary: string
  art: FolderArt
  seed: number
  deliverables: Deliverable[]
}

export const services: Service[] = [
  {
    id: "ai-automation",
    label: "AI Automation",
    summary: "AI agents that read, decide and act, so the work that eats your team's day gets done while they sleep.",
    art: "aurora",
    seed: 3,
    deliverables: [
      {
        name: "Document AI",
        meta: "Read & extract",
        art: "dusk",
        detail: "Invoices, forms, contracts and emails read, understood and filed in seconds. Copy-paste is over.",
      },
      {
        name: "Support copilot",
        meta: "24 / 7",
        detail: "Answers customers instantly from your own knowledge, and hands over to a person the moment it should.",
      },
      {
        name: "Sales assistant",
        meta: "Never forgets",
        detail: "Qualifies every lead, drafts the reply and follows up on time, every time. No enquiry goes cold.",
      },
      {
        name: "Custom AI agents",
        meta: "Built for you",
        art: "ember",
        detail: "Purpose-built agents plugged into your tools and trained on the way your business does things.",
      },
    ],
  },
  {
    id: "workflows",
    label: "Workflows",
    summary: "Connect the apps you already pay for and let work move by itself, from first click to final sign-off.",
    art: "glacier",
    seed: 7,
    deliverables: [
      {
        name: "App integrations",
        meta: "Everything talks",
        art: "glacier",
        detail: "CRM, accounting, spreadsheets, email and chat finally sharing data, with nobody retyping a thing.",
      },
      {
        name: "Approval flows",
        meta: "One tap",
        detail: "Requests land with the right person, with the context attached, and get signed off in a tap.",
      },
      {
        name: "Alerts & reports",
        meta: "Automatic",
        art: "ember",
        detail: "The numbers that matter, delivered to the people who need them before they think to ask.",
      },
      {
        name: "End-to-end autopilot",
        meta: "Start to finish",
        detail: "Whole processes, like enquiry to invoice or order to delivery, running without a manual hand-off.",
      },
    ],
  },
  {
    id: "software",
    label: "Software",
    summary: "When off-the-shelf doesn't fit, we build exactly what you need: fast, polished and entirely yours.",
    art: "verdant",
    seed: 5,
    deliverables: [
      {
        name: "Web apps",
        meta: "Any scale",
        art: "verdant",
        detail: "Customer portals, platforms and SaaS products that load fast and feel effortless to use.",
      },
      {
        name: "Mobile apps",
        meta: "iOS & Android",
        detail: "Apps your customers and field teams actually open, built for both stores from one codebase.",
      },
      {
        name: "Internal tools",
        meta: "Dashboards",
        detail: "The admin panels and live dashboards your team wishes it had, shaped around how they work.",
      },
      {
        name: "APIs & integrations",
        meta: "Backend",
        art: "dusk",
        detail: "Solid, secure backends that connect your product to payments, partners and everything else.",
      },
    ],
  },
]

export const process = [
  {
    step: "01",
    title: "Discover",
    length: "Map",
    body: "You show us where the hours go. We pinpoint the work worth automating first and what it will take.",
  },
  {
    step: "02",
    title: "Design",
    length: "Plan",
    body: "A clear blueprint and a fixed scope, in plain language. You know what you get before we build a thing.",
  },
  {
    step: "03",
    title: "Build",
    length: "Ship",
    body: "Working software in your hands early and often. You see progress you can click, not status reports.",
  },
  {
    step: "04",
    title: "Launch & grow",
    length: "Scale",
    body: "We go live, train your team and stay on call. Then we line up the next thing to automate.",
  },
]

export type CaseStudy = {
  label: string
  sector: string
  art: FolderArt
  seed: number
  title: string
  outcome: string
  files: FolderFile[]
}

// Examples of what we build, not client case studies.
export const work: CaseStudy[] = [
  {
    label: "Lead to invoice",
    sector: "Sales",
    art: "ember",
    seed: 11,
    title: "A sales pipeline that runs itself",
    outcome:
      "Every enquiry captured, qualified, quoted and invoiced automatically. Your team steps in only for the decisions that need a human.",
    files: [
      { name: "Lead capture", meta: "AI agent", art: "verdant" },
      { name: "Quote builder", meta: "Workflow" },
      { name: "Invoice sync", meta: "Integration", art: "aurora" },
    ],
  },
  {
    label: "Support desk",
    sector: "Customer service",
    art: "dusk",
    seed: 4,
    title: "Answers in seconds, at any hour",
    outcome:
      "An AI copilot replies from your own documents, books the follow-up and passes the hard cases to your team with the full story attached.",
    files: [
      { name: "Knowledge base", meta: "Document AI", art: "glacier" },
      { name: "Chat copilot", meta: "AI agent" },
      { name: "Escalations", meta: "Workflow", art: "ember" },
    ],
  },
  {
    label: "Control room",
    sector: "Operations",
    art: "verdant",
    seed: 9,
    title: "Your whole business on one screen",
    outcome:
      "Orders, stock and finance pulled into one live dashboard that alerts the right person before a small problem becomes a big one.",
    files: [
      { name: "Live dashboard", meta: "Web app", art: "dusk" },
      { name: "Data sync", meta: "Integration" },
      { name: "Smart alerts", meta: "Workflow", art: "verdant" },
    ],
  },
]

export const capabilities = [
  { area: "AI automation", items: "Custom agents and assistants for documents, support, sales and reporting" },
  { area: "Workflows", items: "Approvals, hand-offs and integrations across the tools you already use" },
  { area: "Software", items: "Web apps, mobile apps, internal tools, APIs and dashboards, built to order" },
  { area: "Consulting", items: "Finding the right use cases, solution architecture, model and platform choice" },
  { area: "Quality", items: "Tested, monitored and secured from the first release" },
  { area: "Support", items: "Maintenance, training and new features long after launch" },
]
