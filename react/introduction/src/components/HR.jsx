import React from "react";

export function HR(props) {
  const people = props.value;

  return (
    <div className="App">
      <header className="App-header">
        {people.map(person => {
          return (
            <h1>
              {person.name} is {person.age} years' old.
            </h1>
          );
        })}
      </header>
    </div>
  );
}
