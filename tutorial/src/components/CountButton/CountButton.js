import React, { useState, useEffect } from 'react'
import './CountButton.css'

const CountButton = ( props ) => {

  const [ currentCount, setCurrentCount ] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy);
  }

  // called when specified vars change
  // if empty, called at component loaded
  useEffect( () => {
    if( currentCount === 10 ) {
      setCurrentCount(0);
    }
  }, [currentCount] );

//  const buttonStyle = {
//    background: props.buttonColor,
//    border: '1px solid #aaa',
//    borderRadius: '8px'
//  }

  return (
    <div>
      <button onClick={handleClick}>
        +{props.incrementBy}
      </button>
      <div className='count-display'>{currentCount}</div>
    </div>
  )
}

export default CountButton
