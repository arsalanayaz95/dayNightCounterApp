import React, { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  let [day, setDay] = useState(true);

  const changeTimeOfTheDay = () => {
    setDay(!day);
  };

  const incrementCounter = () => {
    setCount(++count);
  };

  const decrementCounter = () => {
    setCount(--count);
  };

  return (
    <div className={`App box ${day ? "daytime" : "nighttime"}`}>
      <h1>Good {day ? "Morning" : "Night"}</h1>
      <button onClick={() => changeTimeOfTheDay()}>
        Change to {day ? "Night" : "Day"}
      </button>
      <h2>Current Count: {count}</h2>
      <button onClick={() => incrementCounter()}>+</button>
      <button onClick={() => decrementCounter()}>-</button>
    </div>
  );
}

export default App;
