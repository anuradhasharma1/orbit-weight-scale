import { useState } from 'react'
import './App.css'
import Navbar from './components/data/ui/Navbar'
import Starfield from './components/data/ui/Starfield'

function App() {


  return (
    <>
      <div>
        <Starfield />
        <Navbar />
      </div>
    </>
  )
}

export default App
