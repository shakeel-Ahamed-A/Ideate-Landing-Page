# Techfest Signal / 30

Signal / 30 is an independent landing-page concept for Techfest IIT Bombay. It presents the festival as a high-energy transmission for curious minds, built for a fast and responsive web experience.

## Preview

![Techfest Signal / 30 homepage](docs/screenshots/Screenshot 2026-09-12 181200.png)

## Concept

A cinematic 2D signal-transmission aesthetic built around a radar, technical grid, frequency visuals and editorial typography. The experience uses CSS-led motion and visual texture only—no 3D assets.

## Features

- Pointer-reactive light on fine-pointer devices
- Animated radar, frequency waves and signal details
- Scroll progress indicator
- Responsive navigation with keyboard support
- Purposeful hover interactions
- Smooth anchor navigation
- Reduced-motion support
- Responsive layouts from mobile to wide desktop

## Tech Stack

- React
- TypeScript
- Vite
- Lucide React
- CSS animations

## Local Development

```bash
pnpm install
pnpm run dev
```

## Production Build

```bash
pnpm run build
```

## Deployment

Vercel is the recommended deployment option: import the repository, use the Vite preset, and publish the `dist` directory. GitHub Pages is also supported; Vite is configured with a relative base path for repository deployments.

## Project Structure

```text
src/
├── components/      # reusable visual components
├── data/            # programme content
├── hooks/           # interaction hooks
├── App.tsx          # page composition
├── main.tsx         # application entry
└── styles.css       # responsive visual system
docs/
└── screenshots/     # repository preview images
public/
└── favicon.svg
```

## Live Demo

_Add deployed URL here._

## Demo Video

_Add a 45–75 second Google Drive viewer-access URL here._

## Reference

This independent concept was informed by the official [Techfest IIT Bombay website](https://techfest.org/). It is not an official Techfest property.
