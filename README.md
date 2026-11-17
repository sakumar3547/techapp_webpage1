# techapp_webpage1

Tech app Universe web page prototype 1: a one-page site for custom AI automation, workflows and software, built with Next.js, TypeScript and Tailwind CSS, using the glass folder card component.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things are

- `lib/site.ts`: all the site's wording and contact details
- `app/page.tsx`: the page layout
- `components/ui/glass-folder-cards.tsx`: the folder component
- `components/site/`: hero folder, services, contact form
- `app/api/contact/route.ts` and `google-sheet/Code.gs`: the contact form's Google Sheet link

## Contact form setup

Copy `.env.example` to `.env.local` and set `GOOGLE_SHEET_WEBHOOK_URL` to the web app URL from the Apps Script deployment in `google-sheet/Code.gs`. Until it is set, the form shows a "not connected" message.
