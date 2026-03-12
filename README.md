#  OrbitScale

> **How much do you weigh across the universe?**  
> Enter your Earth weight and see it on every planet, moon, and the Sun — with fun facts on every card.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat&logo=tailwindcss)

---

## Features

- **Real-time weight calculation** across 10 solar system bodies
- **kg / lbs toggle** with automatic conversion
- **Animated planet orbs** with custom PNG icons
- **Flip cards** revealing fun facts and surface gravity
- **Astronaut emoji** that reacts to gravity (floating → crushed)
- **Animated starfield** with shooting stars in the background
- **Fully responsive** — works on mobile and desktop

---

##  Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repo
git clone https://github.com/anuradhasharma1/orbit-weight-scale.git
cd orbit-weight-scale

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build for Production

```bash
npm run build    # builds to /dist
npm run preview  # preview the production build locally
```

---

##  Folder Structure

```
orbit-scale/
├── public/
│   ├── planets/               # Planet PNG icons
│   │   ├── sun.png
│   │   ├── mercury.png
│   │   ├── venus.png
│   │   ├── earth.png
│   │   ├── moon.png
│   │   ├── mars.png
│   │   ├── jupiter.png
│   │   ├── saturn.png
│   │   ├── uranus.png
│   │   └── neptune.png
│   └── emojis/                # Astronaut reaction PNGs
│       ├── crushed.png
│       └── float.png
│
└── src/
    ├── App.jsx                # Root component, wires everything together
    ├── App.css                # Global overrides
    ├── main.jsx               # React entry point
    ├── index.css              # CSS variables, keyframes, all component styles
    │
    └── components/
        ├── data/
        │   ├── planets.js     # Planet data (gravity, colors, fun facts, icons)
        │   └── ui/
        │       ├── Navbar.jsx        # Top navigation bar
        │       └── Starfield.jsx     # Animated star background
        │
        ├── hooks/
        │   └── useWeightCalc.js  # Custom hook — all weight calculation logic
        │
        ├── input/
        │   └── WeightInput.jsx   # Number input + kg/lbs toggle
        │
        ├── planets/
        │   ├── PlanetGrid.jsx    # Maps over planets, renders cards
        │   └── planetCard.jsx    # Individual planet card with flip animation
        │
        └── utils/
            └── conversions.js    # Pure functions: kg↔lbs, weight calc, animation type
```

---

##  How It Works

### Weight Calculation

```
Planet Weight = Earth Weight (kg) × Gravity Multiplier
```

Each planet in `planets.js` has a `gravityMultiplier` based on NASA surface gravity data. The `useWeightCalc` hook handles all state and exposes `getPlanetWeight(multiplier)` to the rest of the app.

### Unit Conversion

When toggling between kg and lbs, the input value itself is converted so the number shown always matches the selected unit:

```js
// conversions.js
export const kgToLbs = (kg) => +(kg * 2.20462).toFixed(1);
export const lbsToKg = (lbs) => +(lbs / 2.20462).toFixed(1);
```

### Astronaut Reaction

The astronaut emoji/icon animates differently based on gravity:

| Multiplier | Type | Meaning |
|---|---|---|
| ≥ 5× | `crushed` | Extremely heavy |
| ≥ 1.5× | `heavy` | Noticeably heavier |
| ≥ 0.8× | `normal` | Similar to Earth |
| ≥ 0.3× | `light` | Much lighter |
| < 0.3× | `floating` | Nearly weightless |

##  Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI components and state |
| [Vite 6](https://vitejs.dev) | Build tool and dev server |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility classes |
| Custom CSS | Animations, variables, card styles |
| NASA Gravity Data | Surface gravity multipliers |

---

##  Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

##  Deploy

This project is optimized for [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo to Vercel — it auto-detects Vite and deploys on every push.

---

##  License

MIT © [Anuradha Sharma](https://github.com/anuradhasharma1)
