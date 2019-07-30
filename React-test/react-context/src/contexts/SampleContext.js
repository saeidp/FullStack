import React, { createContext, useState } from "react";

export const SampleContext = createContext();

export function SampleProvider(props) {
  const [sample, setSample] = useState(false);
  const changeSample = e => setSample(true);
  return (
    <SampleContext.Provider value={{ sample, changeSample }}>
      {props.children}
    </SampleContext.Provider>
  );
}
