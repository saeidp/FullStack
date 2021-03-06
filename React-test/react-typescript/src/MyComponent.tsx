import * as React from "react";

const MyComponent: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return <div onClick={() => setCount(count + 1)}>{count}</div>;
};

export default MyComponent;
