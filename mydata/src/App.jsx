import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BioPage from './Biopage'
import { Analytics } from "@vercel/analytics/react"
import ReactGA from "react-ga4";

// Initialize with your Measurement ID
ReactGA.initialize("G-VWL2JLSLKZ");

// Send the initial pageview
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BioPage/>
    <Analytics />
    </>
  )
}

export default App
