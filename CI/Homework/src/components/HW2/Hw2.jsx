import React from 'react';
import { useState } from 'react';
import './Hw2.css';

function Hw2() {
  // let array = ["buh", "lol", "lmao"]
  const [todo, setToDo] = useState("");
  const [num, setNum] = useState([]);
  function addToDo(event) {
    event.preventDefault();
    if (num.includes(todo)) {
      alert("Không thể trùng lặp")
      return;
    }
    setNum([...num, todo])
    setToDo("")
  }

  function removeToDo(event) {
    setNum(num.filter(e => e !== event.target.value))
  }
  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={addToDo} className='hw2'>
        <input type="text" onChange={(e) => setToDo(e.target.value)} value={todo} placeholder='Add todo'/>
        <button type='submit'>Add</button>
      </form>
      <div className='list'>
          {
            num.map((item, index) => (
              <div key={index} className='list-items'>
                <div>
                  <input type="checkbox"/>
                  <div>{item}</div>
                </div>
                <button value={item} onClick={removeToDo}>Delete</button>
              </div>
          ))}
        </div>
    </>
  )
}

export default Hw2