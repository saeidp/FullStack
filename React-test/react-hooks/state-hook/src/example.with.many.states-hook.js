import React, { useState } from "react";

export default function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  return (
    <div>
      <p>Your age {age} years</p>
      <button onClick={() => setAge(age + 1)}>Click me</button>

      <p> Your favorite fruit {fruit} </p>
      <button onClick={() => setFruit("Orange")}>Click me</button>
    </div>
  );
}
