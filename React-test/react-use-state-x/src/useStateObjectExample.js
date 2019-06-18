import React from "react";
import { useStateObject } from "react-use-state-x";

const UseStateObjectExample = () => {
  // there are other actions available in addition to merge and remove
  const [instance, { merge, update }] = useStateObject({
    a: 1,
    b: "two",
    c: false
  });
  return (
    <div>
      Current object state: {JSON.stringify(instance)}
      <button onClick={() => update("a", 2)}>Update A field</button>
      <button onClick={() => merge({ b: "Three", c: true })}>
        Update B and C fields
      </button>
    </div>
  );
};

export { UseStateObjectExample };
