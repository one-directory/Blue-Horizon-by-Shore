# Blue Horizon by Shore

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Lucide icons.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Filling in the placeholders
Everything that is still unknown lives in **`src/config/site.ts`** and is marked `TODO:`
(phone, WhatsApp, email, address, Google Maps link + embed, geo, owner name, socials,
house rules, production URL). Fill them in and the header, contact section, WhatsApp
links, map and schema.org data update automatically. Unfilled placeholders are shown
with a dashed gold underline on the page and are left out of the structured data.

`src/config/explore.ts` lists the places, food and culture shown in the Explore section (photos live in `public/<category>/<place>/`).
