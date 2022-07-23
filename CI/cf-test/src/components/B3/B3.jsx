import React from "react";
import { useState } from "react";
import "./B3.css";

const B3 = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResut] = useState("");
  const [linkType, setLinkType] = useState(1);
  const handleInput = (e) => {
    setInput(e.target.value);
    setResut('')
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const products = await (
      await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
    ).json();
    setResut(products);
    setLoading(false);
    console.log(products);
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
        <div className="link-type-container">
          <button type="button" onClick={() => setLinkType(1)} className={`link-type ${linkType === 1 ? "active" : ""}`}>shrtco.de</button>
          <button type="button" onClick={() => setLinkType(2)} className={`link-type ${linkType === 2 ? "active" : ""}`}>9qr.de</button>
          <button type="button" onClick={() => setLinkType(3)} className={`link-type ${linkType === 3 ? "active" : ""}`}>shiny.link</button>
        </div>
        {result !== '' && <p>Your link is: {result.ok && linkType === 1 ? result.result.short_link : linkType === 2 ? result.result.short_link2 : linkType === 3 ? result.result.short_link3 : !result.ok ? "Can't get link" : ""}</p>}
      </form>
    </div>
  );
};

export default B3;
