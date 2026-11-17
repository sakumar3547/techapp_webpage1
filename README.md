# Tech app Universe

A one-page website for **Tech app Universe**, a studio that builds custom AI automation, business workflows and software. Built with Next.js, TypeScript and Tailwind CSS, and styled around a frosted-glass folder component.

## What's on the page

| Section | What it shows |
| --- | --- |
| Hero | "Put your busywork on autopilot" headline, calls to action and an interactive glass folder |
| Automation strip | A sliding band of everyday tasks the studio automates |
| Services | Three folders: AI Automation, Workflows and Software, each with four offerings |
| Process | Discover, Design, Build, Launch & grow |
| Solutions | Three example builds shown in smoked-glass folders |
| About us | Who we are and what we do |
| Contact us | An enquiry form that saves to Google Sheets, plus email and mobile |

## Tech stack

- [Next.js](https://nextjs.org) (App Router) with React and TypeScript
- Tailwind CSS v4
- shadcn project structure (`components.json`, `components/ui`, `lib/utils.ts`)
- [lucide-react](https://lucide.dev) icons
- Google Apps Script to write form enquiries into a Google Sheet

## Getting started

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other commands:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # check the code
```

## Project structure

```text
app/
  page.tsx                  the page layout
  layout.tsx                fonts and page metadata
  globals.css               theme colours and the sliding strip
  api/contact/route.ts      receives the contact form
  demo/page.tsx             demo of the folder component
components/
  ui/glass-folder-cards.tsx the glass folder component
  site/                     hero folder, services, contact form
lib/
  site.ts                   all the website's wording and contact details
  utils.ts                  shadcn class helper
google-sheet/Code.gs        Google Apps Script for the enquiry sheet
```

## Changing the content

Almost all the wording lives in [`lib/site.ts`](lib/site.ts): company name, contact details, services, process steps and the example builds. Edit it there and the page updates.

To show a website address in the Contact us section, fill in the `website` field in the same file. It stays hidden while empty.

## Connecting the contact form to Google Sheets

The form posts to `/api/contact`, which passes each enquiry to a Google Apps Script that adds a row to your sheet.

1. Create a new Google Sheet.
2. Open **Extensions → Apps Script** and paste in the contents of [`google-sheet/Code.gs`](google-sheet/Code.gs).
3. Choose **Deploy → New deployment → Web app**, set **Execute as** to *Me* and **Who has access** to *Anyone*, then deploy and approve the permissions.
4. Copy the web app URL (it ends in `/exec`).
5. Copy `.env.example` to `.env.local` and set the URL:

```bash
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
GOOGLE_SHEET_SECRET=
```

6. Restart `npm run dev`.

Each enquiry becomes a row with: Received, Name, Company, Email, Mobile, Service and Message. Until the URL is set, the form shows a "not connected" message.

`GOOGLE_SHEET_SECRET` is optional. If you set it, set the same value as `SECRET` in `Code.gs` so that only this website can add rows. Never commit `.env.local`; it is already git-ignored.

## The glass folder component

[`components/ui/glass-folder-cards.tsx`](components/ui/glass-folder-cards.tsx) is self-contained: React is its only import. Its artwork is generated in the browser, so there are no image files to manage. See `/demo` for an example of its options (tone, artwork, files, menu and label placement).

## Deploying

The easiest route is [Vercel](https://vercel.com): import this repository and add `GOOGLE_SHEET_WEBHOOK_URL` (and `GOOGLE_SHEET_SECRET` if used) as environment variables.
