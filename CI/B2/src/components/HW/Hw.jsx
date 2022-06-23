import React from 'react'
import { useState } from 'react'

function Hw() {
    const traffcLightsClassName = ["red", "yellow", "green"]
    const [trafficLights, setTrafficLights] = useState("traffcLightsClassName")
    const changeTrafficLights = () => {
        console.log('changeTrafficLights');
    }
  return (
    <div className='traffic-lights'>
        <button onClick={changeTrafficLights}>Next</button>
        <div>
            <div className='red'></div>
            <div className='yellow off'></div>
            <div className='green off'></div>
        </div>
    </div>
  )
}

export default Hw