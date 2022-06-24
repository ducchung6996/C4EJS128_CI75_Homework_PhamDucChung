import React from 'react'
import { useState } from 'react'

function Hw() {
  const traffcLightsClassName = ["red", "yellow", "green"]
  const [trafficLights, setTrafficLights] = useState(0)
  const changeTrafficLights = () => {
    // setTrafficLights(trafficLights === 2 ? 0 : trafficLights + 1)
    setTrafficLights((prev) => {return prev === 2 ? 0 : prev +1})
  }
  return (
    <div className='traffic-lights'>
      <button onClick={changeTrafficLights}>Next</button>
      <div>
        {
          traffcLightsClassName.map((light, index) => (
            <div key={index} className={`light ${index === trafficLights && light}`}></div>
        ))}
      </div>
    </div>
  )
}

export default Hw