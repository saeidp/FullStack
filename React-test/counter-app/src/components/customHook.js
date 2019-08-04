import { useState, useEffect } from "react";

let listeners = [];
let state = { counter: 0 };
console.log("custom start");
const setState = newState => {
  console.log("setstate");
  state = { ...state, ...newState };
  listeners.forEach(listener => {
    listener(state);
  });
};

const useCustom = () => {
  console.log("usecustom");

  const newListener = useState()[1];
  useEffect(() => {
    console.log("effect");

    listeners.push(newListener);
  }, [newListener]);

  return [state, setState];
};

export default useCustom;
