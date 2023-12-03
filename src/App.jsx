import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter((counter) => counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };

  const resetValue = () => {
    setCounter(0);
  };
  return (
    <>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
        style={{ backgroundColor: "black", color: "white", marginRight: 10 }}
      >
        Increment
      </button>

      <button
        onClick={removeValue}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Decrement
      </button>
      <br />
      <hr />
      <button
        onClick={resetValue}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Reset Counter
      </button>
    </>
  );
}

export default App;
