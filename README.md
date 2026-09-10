# Sindhu & Suman — Wedding Invitation

EventKompany-style digital wedding invite (dark / gold, mobile-first card).

## Events

| Event | When |
| --- | --- |
| Haldi | 17 Oct 2026 · 10:00 AM |
| Reception | 17 Oct 2026 · 6:30 PM |
| Muhurtham | 18 Oct 2026 · 6:40–7:40 AM |

**Venue:** Sri Kanaka Convention Hall, Ganagalu Road, Hoskote, Bengaluru Rural — 562114

## Develop

```bash
npm install
npm run dev
```

## Deploy on Netlify

Config is in [`netlify.toml`](netlify.toml):

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node:** 22

### Option A — Connect GitHub (recommended)

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
2. Choose GitHub → select `sumankn-udc/sindhu-suman-site`
3. Netlify reads `netlify.toml` automatically — confirm:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify login
netlify init
# or production deploy of an existing site:
netlify deploy --prod --dir=dist
```

After deploy, set a custom domain under **Site configuration → Domain management** if you want.

## Customize

- Copy & Kannada strings: `src/content.ts`
- WhatsApp number: `rsvpWhatsApp` in `src/content.ts`
- Replace portrait/gallery placeholders with real photos in `Couple` / `Gallery`
