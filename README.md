# Spetia Website

**Extreme Digital Engineering Services**

A modern, premium website for Spetia built with React, Vite, and TailwindCSS.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 3
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Connect the repository to Vercel
3. Vercel will auto-detect Vite and configure the build

### Build Settings (if manual)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Project Structure

```
src/
├── components/
│   ├── effects/      # Smooth scroll, cursor, progress bar
│   ├── layout/       # Navbar, Footer
│   └── sections/     # Reusable page sections
├── pages/
│   ├── industries/   # Healthcare, Hospitality, etc.
│   └── services/     # BIM, AR/VR, etc.
├── App.jsx           # Main app with routing
└── main.jsx          # Entry point
```

## Features

- ✅ Smooth inertia scrolling (Lenis)
- ✅ Animated page transitions (Framer Motion)
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Security headers configured
- ✅ Static asset caching
- ✅ Code splitting for optimal loading

## License

Private - All rights reserved.
