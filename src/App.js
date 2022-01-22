import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [showerror, setshowerror] = useState(false);

  const incdec = (type) => {
    if (type === "inc") {
      setCount(count + 1);
      showerror && setshowerror(false);
    } else {
      count === 0 ? setshowerror(true) : setCount(count - 1);
    }
  };

  return (
    <div className="App" data-test="component-app">
      learn react12
      <div data-test="inc-div">
        Counter:
        <span data-test="count">{count}</span>
      </div>
      {showerror && (
        <div data-test="error" style={{ color: "red" }}>Counter cant go below 0!!</div>
      )}
      <button data-test="inc-button" onClick={() => incdec("inc")}>
        Increment
      </button>
      <button data-test="dec-button" onClick={() => incdec("dec")}>
        Decrement
      </button>
    </div>
  );
}

export default App;
