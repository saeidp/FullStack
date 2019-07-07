const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/example", (req, res) => {
  res.send("hitting example route");
});

//http://localhost:3000/example/saeid/24?tutorial=node&sort=byage
app.get("/example/:name/:age", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  let name = req.params.name;
  let age = req.params.age;
  res.send(name + " : " + age);
});

app.listen(3000);
// response
// { name: 'saeid', age: '24' }
// { tutorial: 'node', sort: 'byage' }

// normally optional values can be passed by query but 
// must have using parameters