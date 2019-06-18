import React, { useContext, useState } from "react";
import "./styles.css";
import { StoreContext } from "./context/StoreContext";
import { types } from "./context/reducers";

function App() {
  const { state, dispatch, actions } = useContext(StoreContext);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <p>Hooks - context - reducer</p>
      <div className="form">
        <input
          name="tech"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="button" onClick={() => actions.addIfNotInList(input)}>
          Add if not in list
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: types.ADD, payload: input })}
        >
          Add
        </button>
      </div>
      <h3>Technologies</h3>
      {/*you should not use the tech as the key if you can have duplicate in dat */}
      <ul>
        {state.techs.map(tech => (
          <li key={tech}>
            {tech}
            <button
              onClick={() => dispatch({ type: types.REMOVE, payload: tech })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
