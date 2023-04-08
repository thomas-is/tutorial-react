import { useState } from 'react'
import './OptionSwitch.css'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'

const OptionSwitch = ( params ) => {

  const initialValue = params.value;
  const content      = params.children;

  const [ value, setValue ] = useState(initialValue)

  const style = {
    "--value": value
  }

  return (
    <div className="optionSwitch">
      <ToggleSwitch callback={setValue} value={value}/>
      <span className={ value ? "active" : "inactive"}>{content}</span>
    </div>
  )

}

export default OptionSwitch
