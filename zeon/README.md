# Nova Streaming App (Next.js)

A beautiful, glassmorphic streaming platform built with Next.js, featuring:
- Modern liquid glass UI (iOS 16+ style)
- Fully responsive and accessible design
- Movie, TV, anime, and sports streaming with multiple sources
- Watch Later, context menu, and settings (theme, language, default source)

## Getting Started

1. Install dependencies:
   ```bash
   cd zeon
   npm install
   ```
2. Run the development server:
```bash
npm run dev
```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features
- **Home, Providers, Anime, Indian Cinema, Sports, Watch, and Settings** pages
- **Glassmorphism** everywhere: cards, modals, overlays, controls
- **Settings**: theme (light/dark), language, default streaming source
- **Watch Later**: add/remove, persistent across sessions
- **Context Menu**: right-click for quick actions
- **Mobile Responsive**: swipeable carousels, adaptive layouts
- **Accessible**: focus rings, keyboard navigation, color contrast

## Customization
- Add your own sources in `zeon/src/sources.mjs`
- Update branding assets in `zeon/public/`

## Deployment
Deploy on Vercel or your preferred Next.js hosting platform.

---

© 2024 Nova Streaming. All rights reserved.
