import React, { useState } from "react";

/**
 * test
 * @callback handleSearch
 * @param {string} input Invokes the method, with the argument returning the user input.
 */
export default function SearchBar({ handleSearch }) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick(event) {
    handleSearch(input);
  }
  return (
    <>
      <input onChange={handleChange} value={input} />
      <button onClick={handleClick}>Search</button>
    </>
  );
}
