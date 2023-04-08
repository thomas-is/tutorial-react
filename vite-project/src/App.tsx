import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OptionSwitch from './components/OptionSwitch/OptionSwitch'

function App() {

  return (
    <div className="App">
      <h1>Options</h1>
      <OptionSwitch value={1}>Debug Mode</OptionSwitch>
      <OptionSwitch value={0}>Verbose Mode</OptionSwitch>
    </div>
  )

}

export default App
