import React from 'react'
import './Hw1.css'

function Hw1() {
  const divNum = [1, 2, 3, 4, 5, 6]
  return (
    <div className='container'>
      {
        divNum.map((num, index) => (
          <div key={index} className={num % 2 === 0 ? "circle" : "square"}></div>
      ))}
    </div>
  )
}

export default Hw1