import { useState } from 'react'
import './App.css'
import Navbar from './components/data/ui/Navbar'
import Starfield from './components/data/ui/Starfield'
import WeightInput from "./components/Input/WeightInput";
import PlanetGrid from './components/planets/PlanetGrid';
import { useWeightCalc } from './components/hooks/useWeightcalc';

function App() {
 const { inputValue, setInputValue, unit, toggleUnit, getPlanetWeight } = useWeightCalc()

  return (
    <>
      <div>
        <Starfield />
        <Navbar />


        <main className="main">
          {/* Hero */}
          <div className="hero">
            <h1 className="hero-title">
              How much do you weigh
              <span className="hero-accent"> across the universe?</span>
            </h1>
            <p className="hero-sub">
              Enter your Earth weight — see it on every planet, moon, and even the Sun.
              Tap any card for a fun fact.
            </p>
          </div>

          {/* Input */}
          <WeightInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            unit={unit}
            toggleUnit={toggleUnit}
          />


          {/* Grid */}
          <PlanetGrid getPlanetWeight={getPlanetWeight} unit={unit} />

          {/* Footer */}
          <footer className="footer">
            <p>Built with React + Vite + Tailwind · Gravity data from NASA ~ ©Anuradha </p>
          </footer>

        </main>
      </div>
    </>
  )
}

export default App
