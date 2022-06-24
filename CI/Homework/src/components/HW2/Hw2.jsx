import React from 'react'
import { useState } from 'react'
import './Hw2.css'

function Hw2() {
  const arr = [0, 1, 2, 3, 4, 5, 6]
  const [num, setNum] = useState(0)
  const changeNum = () => {
    setNum((prev) => {return prev === 6 ? 0 : prev +1})
  }
  return (
    <div className='hw2'>
      <button onClick={changeNum}>Next</button>
      <div>
        {
          arr.map((item, index) => (
            <div key={index} className={`box ${index === num && "active"}`}></div>
        ))}
      </div>
    </div>
  )
}

export default Hw2