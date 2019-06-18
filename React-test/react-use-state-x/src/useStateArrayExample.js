import React from "react";
import { useStateArray } from "react-use-state-x";

const useStateArrayExample = () => {
  // there are other actions available in addition to push and remove
  const [array, { push, remove }] = useStateArray([1, 2]);
  return (
    <div>
      {array.map((elem, index) => (
        <span>
          Element {elem} (<button onClick={() => remove(index)}>Remove</button>)
        </span>
      ))}
      <button onClick={() => push(array.length)}>Add</button>
      {console.log(array)}
    </div>
  );
};

export { useStateArrayExample };
