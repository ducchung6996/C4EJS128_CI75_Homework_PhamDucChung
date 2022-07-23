import React from "react";
import { useState } from "react";
import "./B2.css";

const B2 = () => {
  const [input, setInput] = useState([]);
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();
  const handleInput = (e) => {
    const arr = eval("[" + e.target.value + "]");
    setInput([...arr]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let arr1 = 0;
    let arr2 = 0;
    for (let i = 0; i < input.length; i++ ) {
      if (i % 2 === 0) {
        arr1 += input[i];
      } else {
        arr2 += input[i];
      }
    }
    setResult1(arr1);
    setResult2(arr2);
  };
  return (
    <div id="b2">
      <h1>Test 2</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} type="text" placeholder="Enter numbers..."/>
        <button type="submit">OK</button>
      </form>
      <p>Cân nặng team 1: {result1 !== -Infinity ? result1 : ''}</p>
      <p>Cân nặng team 2: {result2 !== -Infinity ? result2 : ''}</p>
    </div>
  );
};

export default B2;
