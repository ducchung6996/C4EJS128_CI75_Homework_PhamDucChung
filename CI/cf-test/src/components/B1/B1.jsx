import React from "react";
import { useState } from "react";
import "./B1.css";

const B1 = () => {
  const [input, setInput] = useState([]);
  const [result, setResult] = useState();
  const handleInput = (e) => {
    const arr = eval("[" + e.target.value + "]");
    setInput([...arr]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = [];
    for (let a of input) {
      for (let b of input) {
        if (a !== b) {
          arr = [...arr, a * b];
        }
      }
    }
    setResult(Math.max(...arr));
    setInput([]);
  };
  return (
    <div id="b1">
      <h1>Test 1</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} type="text" placeholder="Enter numbers..."/>
        <button type="submit">OK</button>
      </form>
      <p>Result:{result !== -Infinity ? result : ''}</p>
    </div>
  );
};

export default B1;
