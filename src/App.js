import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(null);
  const [count, setCount] = useState(0);

  const onStart = () => {
    if (!counter) {
      setCounter(
        setInterval(() => {
          setCount((prev) => prev + 1);
        }, 1000)
      );
    } else {
      clearInterval(counter);
      setCounter(null);
    }
  };
  const onReset = () => {
    if (counter) {
      clearInterval(counter);
      setCounter(null);
    }
    setCount(0);
  };
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h2>{count}</h2>
      <button onClick={onStart}>{counter === null ? "Start" : "pause"}</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
