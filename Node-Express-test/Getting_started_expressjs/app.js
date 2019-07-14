const express = require("express");
const path = require("path");
const Joi = require("joi");
const bodyParser = require("body-parser");
const app = express();
// calling the static folder public. __dirname is the directory for app.js
app.use("/public", express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "indexForm.html"));
});

app.post("/", (req, res) => {
  console.log(req.body);
  const schema = Joi.object().keys({
    email: Joi.string()
      .trim()
      .email()
      .required(),
    password: Joi.string()
      .min(5)
      .max(10)
      .required()
  });
  Joi.validate(req.body, schema, (err, result) => {
    if (err) {
      console.log(err);
      res.send("an error has occured");
    }
    console.log(result);
    res.send("sucessfully posted data");
  });
});

app.listen(3000);
