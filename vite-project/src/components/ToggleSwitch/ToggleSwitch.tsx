import { useState } from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = ( params ) => {

  const callback     = params.callback;
  const initialValue = params.value;

  const [ value, setValue ] = useState(initialValue)

  const style = {
    "--value": value
  }

  const toggle = ( ev ) => {
    const v = value ? 0 : 1;
    setValue( v );
    ev.target.style.setProperty( '--value', v );
    callback( v );
  }

  return (
    <div className="toggleSwitch" style={style} onClick={toggle} >
    </div>
  )

}

export default ToggleSwitch
