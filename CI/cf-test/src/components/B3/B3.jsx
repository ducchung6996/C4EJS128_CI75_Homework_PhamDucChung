import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./B3.css";

const B3 = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResut] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    setData(input)
  },[input]);
  const handleInput = (e) => {
    setInput(e.target.value);
    setResut('')
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const products = await (
      await fetch(`https://api.shrtco.de/v2/shorten?url=${data}`)
    ).json();
    setResut(products);
    setLoading(false);
    console.log(result);
  };

  return (
    <div id="b3">
      <form onSubmit={handleSubmit} className="link-shorter-form">
        <h1>Test 3 - Link Shortener</h1>
        <input
          onChange={handleInput}
          type="text"
          placeholder="Enter a link..."
        />
        <button type="submit">{loading ? "Loading ..." : "Get link"}</button>
        {result !== '' && <p>Your link is: {result.ok ? result.result.short_link : !result.ok ? "Can't get link" : ""}</p>}
      </form>
    </div>
  );
};

export default B3;
