import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BioPage from './Biopage'
import { Analytics } from "@vercel/analytics/next"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BioPage/>
    </>
  )
}

export default App
