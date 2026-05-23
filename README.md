# Your Mali Guides

Astro and Tailwind CSS v4 rebuild for Your Mali Guides, focused on Djibril Kassogue as an official local guide in Mali and West Africa.

## Stack

- Astro static site
- Tailwind CSS v4 through `@tailwindcss/vite`
- Cloudflare Pages ready
- GitHub/Git Bash workflow

## Local Development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:4321/`.

## Build

```bash
npm run build
```

Cloudflare Pages settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: 22 or newer

## Contact Config

WhatsApp, Facebook, navigation, and metadata defaults are configured in:

```text
src/config/site.ts
```

Current WhatsApp URL:

```text
https://wa.me/22374482693
```

## Images

The original downloaded Google Sites images remain in:

```text
external images/
```

Optimized WebP site images are generated into:

```text
public/images/
```

To regenerate them:

```bash
python scripts/prepare-images.py
```
