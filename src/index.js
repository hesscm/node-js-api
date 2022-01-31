const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [];

app.get("/", function (req, res) {
  res.send("Hello " + name);
});

app.get("/name", function (req, res) {
  const name = "Chris";
  res.send(name);
});

app.get("/users", function (req, res) {
  res.send(users);
})

app.get("/users/:index", function (req, res) {
  res.send(users[req.params.index]);
})

app.get("/user", function (req, res) {
  const user = users.find(user => user.id == req.query.id);
  res.send(user);
})

app.post("/users", function (req, res) {
  const currentDate = new Date();

  if (!req.body.name || !req.body.age) {
    return res.sendStatus(400, "Invalid user Details");
  } 

  const newObject = {
    id: users.length + 1,
    name: req.body.name || "No Name",
    age: req.body.age || "No Age",
    gender: req.body.gender || "No Gender",
    date: currentDate,
  };

  users.push(newObject);
  console.log(users);
  res.send(newObject);
});

app.post("/echo-query", function (req, res) {
  const query = req.query;
  console.log(query);
  res.send(query);
});

app.post("/echo-body", function (req, res) {
  const body = req.body;
  console.log(body);
  res.send(body);
});

app.listen(3000);
console.log("app now listening @http://localhost:3000");
