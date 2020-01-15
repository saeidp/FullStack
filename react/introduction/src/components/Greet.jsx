import React from "react";

export function Headline(props) {
  const person = props.value;
  function formatName(person) {
    return `${person.name} is ${person.age} years' old`;
  }
  function getGreeting(person) {
    if (person) {
      return <h1>{formatName(person)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={person.url}
          alt=""
          style={{ maxWidth: 500, marginTop: 25, marginBottom: -50 }}
        ></img>
        <h2>{getGreeting(person)}</h2>
      </header>
    </div>
  );
}
