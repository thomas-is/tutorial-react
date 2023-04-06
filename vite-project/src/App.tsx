import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch'

function App() {

  const initialIndex = 1;

  const [ index, setIndex ] = useState(initialIndex)

  const modes = [
    "God mode disabled",
    "God mode enabled",
  ]

  return (
    <div className="App">
      <ToggleSwitch callback={setIndex} value={index}/>
      <span className="mode">{modes[index]}</span>
    </div>
  )

}

export default App
