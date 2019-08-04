import React from "react";
import useCustom from "./customHook";
console.log("counter start");
const Counter = () => {
  console.log("beforeusecustom");
  const [globalState, setGlobalState] = useCustom();
  console.log("counter");

  const add1Global = () => {
    console.log("addglobal");
    const newCounterValue = globalState.counter + 1;
    setGlobalState({ counter: newCounterValue });
  };

  return (
    <div>
      <p>
        counter:
        {globalState.counter}
      </p>
      <button type="button" onClick={add1Global}>
        +1 to global
      </button>
    </div>
  );
};

export default Counter;
