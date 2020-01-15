import React, { useState, useEffect, createRef } from "react";
import "./App.css";
import { HR } from "./components/HR";
import { userInfo } from "os";
import { Greet } from "./components/Greet";

// -------------first app---------------
// function App() {
//   const name = "Shahriar";
//   const element = <h1>Hello, {name}</h1>;
//   return (
//     <div className="App">
//       <header className="App-header">{element}</header>
//     </div>
//   );
// }

// -------------Format Name---------------
// function App() {
//   const person = {
//     name: "Shahrar",
//     age: 25
//   };
//   function formatName(person) {
//     return `${person.name} is ${person.age} years' old`;
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello, {formatName(person)}</h1>
//       </header>
//     </div>
//   );
// }

// ---------getGreeting-handle-empty-object----------
// function App() {
//   const person = {
//     name: "Shahrar",
//     age: 25
//   };
//   function formatName(person) {
//     return `${person.name} is ${person.age} years' old`;
//   }
//   function getGreeting(person) {
//     if (person) {
//       return <h1>{formatName(person)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
//   }

//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <h1>{getGreeting(person)}</h1>
//     //   </header>
//     // </div>

//     <div className="App">
//       <header className="App-header">
//         <h1>{getGreeting()}</h1>
//       </header>
//     </div>
//   );
// }

//-----------get image url-------------
// function App() {
//   const person = {
//     name: "Shahrar",
//     age: 25,
//     url:
//       "https://shahmanmastery.com/wp-content/uploads/2019/10/home-shahlaptop.png"
//   };
//   function formatName(person) {
//     return `${person.name} is ${person.age} years' old`;
//   }
//   function getGreeting(person) {
//     if (person) {
//       return <h1>{formatName(person)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img
//           src={person.url}
//           alt=""
//           style={{ maxWidth: 500, marginTop: 25, marginBottom: -50 }}
//         ></img>
//         <h2>{getGreeting(person)}</h2>
//       </header>
//     </div>
//   );
// }

//------------------function component--------------
// function App() {
//   return <Headline />;
// }

// function Headline() {
//   const greeting = "Hello Function Component!";

//   return (
//     <div>
//       <header className="App-header">
//         <h1>{greeting}</h1>
//       </header>
//     </div>
//   );
// }

//---------------fucntion component: props-----------
// function App() {
//   const greeting = "Hello Function Component!";
//   return <Headline value={greeting} />;
// }

// function Headline(props) {
//   return (
//     <div>
//       <header className="App-header">
//         <h1>{props.value}</h1>
//       </header>
//     </div>
//   );
// }

//---------------get image url: props-----------
// // headline in another file (Headline.jsx)
// function App() {
//   const person = {
//     name: "Shahrar",
//     age: 25,
//     url:
//       "https://shahmanmastery.com/wp-content/uploads/2019/10/home-shahlaptop.png"
//   };

//   return <Headline value={person} />;
// }

// -------------dummy-------------------
// function App() {
//   const people = [
//     {
//       name: "shahriar",
//       age: 25
//     },
//     {
//       name: "saeid",
//       age: 54
//     }
//   ];

//   return <HR value={people} />;
// }

//-------------arrow function-------------
// const App = () => {
//   const greeting = "Hello Function Component!";

//   return <Headline value={greeting} />;
// };

// const Headline = ({ value }) => {
//   return <h1>{value}</h1>;
// };

//------------react state, hook, greeting-----------
// const App = () => {
//   return <Headline />;
// };

// const Headline = () => {
//   const [greeting, setGreeting] = useState("Hello Function Component!");
//   const handleChange = e => {
//     setGreeting(e.target.value);
//   };
//   return (
//     <div className="App-header">
//       <h1>{greeting}</h1>

//       <input type="text" value={greeting} onChange={handleChange} />
//     </div>
//   );
// };

//--------------call back function--------------------
// IT IS POSSIBLE TO PASS A FUNCTION TO A CHILD COMPONENT
// const App = () => {
//   const [greeting, setGreeting] = useState("Hello Function Component");

//   const handleChange = e => setGreeting(e.target.value);

//   return <Headline headline={greeting} onChangeHeadLine={handleChange} />;
// };

// const Headline = props => {
//   const headline = props.headline;
//   const onChangeHeadline = props.onChangeHeadLine;

//   return (
//     <div className="App-header">
//       <h1>{headline}</h1>

//       <input type="text" value={headline} onChange={onChangeHeadline} />
//     </div>
//   );
// };

// ---------------------children - call back ---------------------
// USE {CHILDREN} to pass Set Greeting: to the input component
// Send to two components
// const App = () => {
//   const [greeting, setGreeting] = useState("Hello Function Component");

//   const handleChange = e => setGreeting(e.target.value);

//   return (
//     <div>
//       <Headline headline={greeting} />

//       <Input inputValue={greeting} onChangeInput={handleChange}>
//         Set Greeting:
//       </Input>
//     </div>
//   );
// };

// const Headline = props => {
//   const headline = props.headline;

//   return (
//     <div>
//       <h1>{headline}</h1>
//     </div>
//   );
// };

// const Input = ({ inputValue, onChangeInput, children }) => (
//   <label>
//     {children}
//     <input type="text" value={inputValue} onChange={onChangeInput} />
//   </label>
// );

// --------------------override, using default function---------------
// const App = () => {
//   const sayHello = () => console.log("Hello");
//   return <Button handleClick={sayHello} />;
//   // return <Button handleClick={null} />;
// };
// const Button = ({ handleClick }) => {
//   const sayDefault = () => console.log("Default");
//   const onClick = handleClick || sayDefault;
//   return (
//     <button type="button" onClick={onClick}>
//       Button
//     </button>
//   );
// };

// ---------------dummy--------------------
// const App = () => {
//   const person = {
//     name: "Shahrar",
//     age: 25
//   };

//   const Print = () => {
//     console.log(`${person.name} is ${person.age} years' old.`);
//   };

//   // return <Headline myPerson={person} myPrint={Print} />;
//   return <Headline myPerson={person} myPrint={null} />;
// };

// const Headline = ({ myPerson, myPrint }) => {
//   const defaultPrint = () => console.log("Default");
//   const handleClick = myPrint || defaultPrint;

//   return (
//     <div class="App-header">
//       <button type="button" onClick={handleClick}>
//         Print Button
//       </button>
//     </div>
//   );
// };

//-----------------default (es6 method)----------------
// import React from "react";
// const App = () => {
//   const sayHello = () => console.log("Hello");
//   return <Button handleClick={sayHello} />;
// };
// const Button = ({ handleClick = () => console.log("Default") }) => (
//   <button type="button" onClick={handleClick}>
//     Button
//   </button>
// );

//--------------async---------------------

// const App = () => {
//   const sayHello = () => setTimeout(() => console.log("Hello"), 3000);
//   return <Button handleClick={sayHello} />;
// };
// const Button = ({ handleClick }) => (
//   <button type="button" onClick={handleClick}>
//     Button
//   </button>
// );

// -------------async function in component----------------
// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () =>
//     setTimeout(() => setCount(count => currentCount + 1), 1000);

//   const handleDecrement = () =>
//     setTimeout(() => setCount(currentCount => currentCount - 1), 1000);

//   // doesn't work, time is off
//   // const handleIncrement = () => setTimeout(() => setCount(count + 1), 1000);

//   // const handleDecrement = () => setTimeout(() => setCount(count - 1), 1000);

//   return (
//     <div className="App-header">
//       <h1>{count}</h1>

//       <Button handleClick={handleIncrement}>Increment</Button>
//       <Button handleClick={handleDecrement}>Decrement</Button>
//     </div>
//   );
// };

// const Button = ({ handleClick, children }) => (
//   <button type="button" onClick={handleClick}>
//     {children}
//   </button>
// );

//---------------mount use-effect ----------------------
// method runs once on load (render for the first time)

// const App = () => {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => setCount(currentCount => currentCount + 1);
//   const handleDecrement = () => setCount(currentCount => currentCount - 1);
//   useEffect(() => setCount(currentCount => currentCount + 1), []);
//   return (
//     <div className="App-header">
//       <h1>{count}</h1>
//       <button type="button" onClick={handleIncrement}>
//         Increment
//       </button>
//       <button type="button" onClick={handleDecrement}>
//         Decrement
//       </button>
//     </div>
//   );
// };

//---------------mount use-effect (alternate) ----------------------
// method runs once on load (render for the first time)

// const App = () => {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => setCount(currentCount => currentCount + 1);
//   const handleDecrement = () => setCount(currentCount => currentCount - 1);
//   useEffect(() => {
//     const setState = () => {
//       setCount(currentCount => currentCount + 1);
//     };
//     setState();
//   }, []);
//   return (
//     <div className="App-header">
//       <h1>{count}</h1>
//       <button type="button" onClick={handleIncrement}>
//         Increment
//       </button>
//       <button type="button" onClick={handleDecrement}>
//         Decrement
//       </button>
//     </div>
//   );
// };

//---------------mount use-effect (alternate2) ----------------------
// method runs once on load (render for the first time)
// if you run, everytime state changes, page gets rendered, state useEffect
// runs again, and changes state once again. Infinite loop.

// const App = () => {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => setCount(currentCount => currentCount + 1);
//   const handleDecrement = () => setCount(currentCount => currentCount - 1);
//   useEffect(() => {
//     const setState = () => {
//       setCount(currentCount => currentCount + 1);
//     };
//     setState();
//   });
//   return (
//     <div className="App-header">
//       <h1>{count}</h1>
//       <button type="button" onClick={handleIncrement}>
//         Increment
//       </button>
//       <button type="button" onClick={handleDecrement}>
//         Decrement
//       </button>
//     </div>
//   );
// };

//---------------------exercise-----------------
// in const App create a person object and create state
// with defalt shariar and 25 age. create useeffect that in
// the first render add 10 to the age 35 age

// const App = () => {
//   const [person, setPerson] = useState({ name: "shahriar", age: 25 });
//   useEffect(() => {
//     setPerson(p => {
//       const newPerson = {
//         name: p.name,
//         age: (p.age += 10)
//       };
//       return newPerson;
//     });
//   }, []);
//   return (
//     <div className="App-header">
//       <h1>{`${person.name} is ${person.age} years' old.`}</h1>
//     </div>
//   );
// };

//-----------------update-local storage (cache) ---------------------

// const App = () => {
//   const initialCount = localStorage.getItem("storageCount") || 0;
//   const [count, setCount] = useState(initialCount);
//   const handleIncrement = () => setCount(currentCount => currentCount + 1);
//   const handleDecrement = () => setCount(currentCount => currentCount - 1);
//   useEffect(() => localStorage.setItem("storageCount", count));
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button type="button" onClick={handleIncrement}>
//         Increment
//       </button>
//       <button type="button" onClick={handleDecrement}>
//         Decrement
//       </button>
//     </div>
//   );
// };

// //-------------------exercise---------------------
// // sessionstorage: until tab is closed
// // localstorage: stores in local browser cache

// const App = () => {
//   // const initialName = localStorage.getItem("storageName") || "default";
//   const initialName = sessionStorage.getItem("storageName") || "default";
//   const [name, setName] = useState(initialName);
//   useEffect(() => {
//     // localStorage.setItem("storageName", name);
//     sessionStorage.setItem("storageName", name);
//   });

//   // function handleNameChange(e) {
//   //   setName(e.target.value);
//   // };

//   const handleNameChange = e => {
//     setName(e.target.value);
//   };

//   return (
//     <div className="App-header">
//       <h1>{name}</h1>
//       <input type="text" onChange={handleNameChange} placeholder="name"></input>
//     </div>
//   );
// };
// export default App;

//------------memo---------------
// The Count component doesn't update anymore when
// user types something into the input field. Only
// the App component rerenders. this is because of greeting state change
// if using memo then the only time Count component renders is when count
// state changes
// const Count = memo(({ count }) =>

// const App = () => {
//   const [greeting, setGreeting] = useState("Hello React!");
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => setCount(currentCount => currentCount + 1);
//   const handleDecrement = () => setCount(currentCount => currentCount - 1);
//   const handleChange = event => setGreeting(event.target.value);
//   return (
//     <div>
//       <input type="text" onChange={handleChange} />
//       <Count count={count} />
//       <button type="button" onClick={handleIncrement}>
//         Increment
//       </button>
//       <button type="button" onClick={handleDecrement}>
//         Decrement
//       </button>
//     </div>
//   );
// };
// const Count = memo(({ count }) => {
//   console.log("Does it (re)render?");
//   return <h1>{count}</h1>;
// });
// export default App;

// ----------------ref----------------
// If you have to use a Ref in a Function Component,
// you can define it within the component. In the following
// case, the input field will get focused after the component
// did mount:

// const App = () => {
//   const [greeting, setGreeting] = useState("Hello Shahriar!");

//   const handleChange = e => setGreeting(e.target.value);

//   return (
//     <div>
//       <h1>{greeting}</h1>
//       <Input value={greeting} handleChange={handleChange} />
//     </div>
//   );
// };

// const Input = ({ value, handleChange }) => {
//   const ref = createRef();

//   useEffect(() => {
//     ref.current.focus();
//   }, []);

//   return (
//     <div className="App-header">
//       <input type="text" placeholder="Not Focused" />
//       <input type="text" value={value} onChange={handleChange} ref={ref} />
//     </div>
//   );
// };

// ----------------name and age exercise---------------
// Adding to People Array.

// const App = () => {
//   return <Form value={{ initName: "shahriar", initAge: 25 }} />;
// };

// const Form = props => {
//   const { initName, initAge } = props.value;
//   const [people, setPeople] = useState([{ name: initName, age: initAge }]);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState();
//   const handleClick = () => {
//     let person = {
//       name: name,
//       age: age
//     };
//     // Spread Method
//     setPeople([...people, person]);

//     // ForEach Method
//     // let items = [];
//     // people.forEach(person => items.push(person));
//     // items.push(person);
//     // setPeople(items);

//     // For Of Method
//     //   let items = [];
//     //   for (let p of people) {
//     //     items.push(p);
//     //   }
//     //   items.push(person);
//     //   setPeople(items);
//     //
//   };
//   const handleChangeName = e => {
//     setName(e.target.value);
//   };
//   const handleChangeAge = e => {
//     setAge(e.target.value);
//   };

//   // people = setPeople([...people.push(person)]);
//   return (
//     <div className="App-header">
//       <div style={{ textAlign: "left" }}>
//         {people.map(person => (
//           <li>{`${person.name} is ${person.age} years' old`}</li>
//         ))}
//       </div>
//       <input
//         type="text"
//         placeholder="name"
//         value={name}
//         onChange={handleChangeName}
//       />
//       <input
//         type="text"
//         placeholder="age"
//         value={age}
//         onChange={handleChangeAge}
//       />
//       <button type="button" onClick={handleClick}>
//         Add
//       </button>
//     </div>
//   );
// };

// ----------------person exercise (similar to above)---------------
// Adding to People Array.
// using one main handleChange

// const App = () => {
//   return <Form />;
// };

// const Form = () => {
//   const [people, setPeople] = useState([]);
//   const [person, setPerson] = useState({ name: "", age: "" });
//   const handleClick = () => {
//     // Spread Method
//     setPeople([...people, person]);
//   };
//   const handleChangePerson = e => {
//     setPerson({
//       ...person,
//       [e.target.name]: e.target.value
//     });
//     console.log(person);
//   };

//   // people = setPeople([...people.push(person)]);
//   return (
//     <div className="App-header">
//       <div style={{ textAlign: "left" }}>
//         {people.map(person => (
//           <li>{`${person.name} is ${person.age} years' old`}</li>
//         ))}
//       </div>
//       <input
//         type="text"
//         placeholder="name"
//         name="name"
//         value={person.name}
//         onChange={handleChangePerson}
//       />
//       <input
//         type="text"
//         placeholder="age"
//         name="age"
//         value={person.age}
//         onChange={handleChangePerson}
//       />
//       <button type="button" onClick={handleClick}>
//         Add
//       </button>
//     </div>
//   );
// };

// // ----------------------basic routing-----------------
// import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr />
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// const Home = () => {
//   return (
//     <div>
//       <h2>Home Page</h2>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div>
//       <h2>About Page</h2>
//     </div>
//   );
// };

// const Dashboard = () => {
//   return (
//     <div>
//       <h2>Dashboard Page</h2>
//     </div>
//   );
// };

export default App;
