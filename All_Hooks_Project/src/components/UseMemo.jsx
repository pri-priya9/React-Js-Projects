import React, { useState, useMemo } from "react";
import "./UseMemo.css"

const EvenOddChecker = () => {
  const [number, setNumber] = useState("");

  const result = useMemo(() => {
    if (number === "") return ""; 
    return number % 2 === 0 ? "Even" : "Odd";
  }, [number]);

  return (
    <div className="usememo-div">
      <h1 className="usememo-h1">Even or Odd Checker</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        className="usememo-input-box"
      />
      <p className="usememo-result">{result && `The number is ${result}.`}</p>
    </div>
  );
};

export default EvenOddChecker;
