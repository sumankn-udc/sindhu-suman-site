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

### Google Analytics (Netlify env)

1. Create a **GA4** property at [analytics.google.com](https://analytics.google.com/) and copy the Measurement ID (`G-XXXXXXXXXX`).
2. In Netlify → **Site configuration → Environment variables**, add:
   - **Key:** `VITE_GA_MEASUREMENT_ID`
   - **Value:** your `G-XXXXXXXXXX` id
   - Scopes: **Production** (and Preview if you want)
3. **Trigger a new deploy** so Vite can bake the key into the build.

Tracked automatically when the env key is set:

| Event | What it counts |
| --- | --- |
| `page_view` | Site opens / page loads |
| `invite_open` | Guest taps to open the invite |
| `share_image_click` | Clicks on the WhatsApp share preview image |
| `share_whatsapp` | Taps **Share Invite** |

Locally you can copy `.env.example` → `.env` and set the same key.

## Customize

- Copy & Kannada strings: `src/content.ts`
- WhatsApp number: `rsvpWhatsApp` in `src/content.ts`
- Replace portrait/gallery placeholders with real photos in `Couple` / `Gallery`
