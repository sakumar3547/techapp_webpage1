/**
 * Receives the customer form and appends a row to the Google Sheet.
 *
 * The sheet is reached through a Google Apps Script web app (see
 * google-sheet/Code.gs). Its URL lives in GOOGLE_SHEET_WEBHOOK_URL so it never
 * reaches the browser.
 */

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "")

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 })
  }

  // the hidden field: a person never fills it, so pretend it worked and store nothing
  if (clean(body.website, 200)) return Response.json({ ok: true })

  const entry = {
    name: clean(body.name, 100),
    company: clean(body.company, 120),
    email: clean(body.email, 160),
    phone: clean(body.phone, 30),
    service: clean(body.service, 60),
    message: clean(body.message, 2000),
  }

  if (!entry.name || !entry.message) {
    return Response.json({ error: "Please fill in your name and a short message." }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 })
  }
  if (entry.phone.replace(/\D/g, "").length < 7) {
    return Response.json({ error: "Please enter a valid mobile number." }, { status: 400 })
  }

  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL
  if (!url) {
    return Response.json(
      { error: "This form is not connected to a Google Sheet yet. Please email or call us instead." },
      { status: 503 },
    )
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...entry, secret: process.env.GOOGLE_SHEET_SECRET ?? "" }),
      signal: AbortSignal.timeout(15000),
    })
    const result = (await res.json().catch(() => null)) as { ok?: boolean } | null
    if (!res.ok || !result?.ok) throw new Error("Sheet rejected the row")
  } catch (err) {
    console.error("contact form: could not write to the sheet", err)
    return Response.json(
      { error: "We could not save your enquiry. Please try again, or email or call us instead." },
      { status: 502 },
    )
  }

  return Response.json({ ok: true })
}
