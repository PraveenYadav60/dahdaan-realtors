# Dahdaan Realtors Pvt Ltd — React App

Pixel-perfect React clone of the Dahdaan Realtors homepage.

---

## 📁 Project Structure

```
dahdaan-realtors/
├── public/
│   └── index.html                  # HTML entry point + Google Fonts
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx          # Sticky top navigation bar
│   │   │   └── Navbar.css          # Navbar styles
│   │   ├── Hero/
│   │   │   ├── Hero.jsx            # Hero section with headline
│   │   │   └── Hero.css            # Hero + social sidebar styles
│   │   └── SearchBox/
│   │       ├── SearchBox.jsx       # Full search widget (tabs, city, filters)
│   │       └── SearchBox.css       # SearchBox styles
│   ├── App.jsx                     # Root component
│   ├── App.css                     # App-level layout
│   ├── index.js                    # ReactDOM entry
│   └── index.css                   # Global reset + design tokens (CSS vars)
├── package.json
└── README.md
```

---

## 🚀 Step-by-Step Setup

### Step 1 — Prerequisites
Make sure you have **Node.js** (v16+) and **npm** installed:
```bash
node -v   # should print v16.x.x or higher
npm -v
```

### Step 2 — Create React App (if starting fresh)
```bash
npx create-react-app dahdaan-realtors
cd dahdaan-realtors
```

### Step 3 — Replace files
Copy all files from this project into the newly created app, replacing:
- `public/index.html`
- `src/index.js`, `src/index.css`, `src/App.jsx`, `src/App.css`
- Add the `src/components/` folder with all subfolders

### Step 4 — Install dependencies
```bash
npm install react-icons
```

### Step 5 — Start dev server
```bash
npm start
```
The app opens at **http://localhost:3000**

---

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary-dark` | `#0d6e8a` | Navbar background, active tab |
| `--color-accent-blue` | `#2196f3` | Search button, radio checked |
| `--color-bg-page` | `#f0f2f5` | Page background |
| `--color-text-dark` | `#1a1a2e` | Main headings |
| `--color-text-muted` | `#6b7280` | Subtitle, placeholder |
| `--color-green-badge` | `#22c55e` | FREE badge |

Font: **Inter** (Google Fonts) — 400, 500, 600, 700, 800

---

## 🧩 Component Overview

### `<Navbar />`
- Sticky teal header (`#0d6e8a`)
- Bold white logo text
- Active nav link with white underline indicator
- "Post Properties FREE" pill button
- Profile icon with chevron dropdown

### `<Hero />`
- Full-height grey (`#f0f2f5`) background
- Large bold headline + muted subtitle
- Houses the `<SearchBox />` component
- Fixed social media sidebar (Facebook, WhatsApp, YouTube, Blog)

### `<SearchBox />`
- **3 Tab types**: Buy / Rent / New Launch
- **City selector**: Dropdown with 6 cities, pin icon
- **Locality search**: Text input with Enter key support
- **Blue search button**: Icon + text, hover glow effect
- **Property type**: Residential / Commercial radio buttons (custom styled)
- **3 filter dropdowns**: Budget, BHK Types, Property Status
- All dropdowns built from scratch (no external library)
- Smooth fade-in animation on dropdown open

---

## 📱 Responsive
- Navbar: hides nav links on mobile
- Hero: adjusts padding and font sizes
- SearchBox: stacks vertically on small screens
- Social sidebar: hidden on mobile

---

## 🛠 Built With
- React 18
- CSS Modules (plain CSS per component)
- SVG icons (inline, no icon library required)
- Google Fonts (Inter)
