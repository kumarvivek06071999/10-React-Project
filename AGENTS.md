# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository Structure

This is a **monorepo** containing multiple independent React projects. Each project is self-contained with its own `package.json` and dependencies.

| Project | Description | Stack |
|---------|-------------|-------|
| `Images/` | Random image gallery app with category selection | React, Vite, Tailwind CSS, react-select |
| `Brand-Page/` | Brand landing page | React, Vite |

## Development Commands

Each project must be run from its own directory. There is no root-level package.json.

```bash
# Navigate to project first
cd Images/   # or Brand-Page/

# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Architecture Notes

### Images Project
- Entry: `src/main.jsx` → `src/App.jsx` → `src/components/Header.jsx`
- `Header.jsx` contains all UI logic: dropdown selects for categories and image display grid
- Uses Lorem Picsum API (`picsum.photos`) for random images
- Styling via Tailwind CSS utility classes

### Brand-Page Project
- Standard Vite + React setup
- Entry: `src/main.jsx` → `src/App.jsx`
