import React, { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.amount };
    case "Decrement":
      return { count: state.count - action.amount };
    case "Reset":
      return { count: 0 };
    default:
      return { count: 0 };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment", amount: 1 })}>
        Add 1
      </button>
      <button onClick={() => dispatch({ type: "Decrement", amount: 1 })}>
        subtract 1
      </button>
      <button onClick={() => dispatch({ type: "Reset", amount: 0 })}>
        Reset
      </button>
    </div>
  );
}

export default App;
