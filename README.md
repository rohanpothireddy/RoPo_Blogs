# RopoBlogs 📰

A multi-category blog covering **Tech, Lifestyle, and Sports** — built with React + Vite, ready to deploy on Vercel or Netlify.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

## 📁 Project Structure

```
ropoblogs/
├── public/
│   ├── favicon.svg
│   └── _redirects          # Netlify SPA routing
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── PostCard.jsx
│   │   ├── Hero.jsx
│   │   ├── Ticker.jsx
│   │   ├── Newsletter.jsx
│   │   ├── SearchOverlay.jsx
│   │   └── Tag.jsx
│   ├── pages/              # Route-level page components
│   │   ├── Home.jsx
│   │   ├── PostPage.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── PrivacyPage.jsx
│   │   └── TermsPage.jsx
│   ├── data/
│   │   └── posts.js        # All blog post content
│   ├── styles/
│   │   ├── global.css      # CSS variables, resets, base styles
│   │   ├── components.css  # Shared component styles
│   │   └── typography.css  # Heading/body/mono type scales
│   ├── hooks/
│   │   └── useScrollProgress.js
│   ├── App.jsx
│   └── main.jsx
├── vercel.json             # Vercel SPA routing
├── vite.config.js
└── package.json
```

## 🌐 Deploy

### Vercel (recommended)
1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Framework preset: **Vite** — deploy!

### Netlify
1. Push to GitHub
2. Import repo at [netlify.com](https://netlify.com)
3. Build command: `npm run build`, publish dir: `dist` — deploy!

## ✏️ Adding Posts

Edit `src/data/posts.js` — each post is a plain JS object. Add a new object to the array and it automatically appears everywhere on the site.

## 🎨 Changing Colors / Fonts

Edit `src/styles/global.css` — all design tokens are CSS variables at the top of the file.
