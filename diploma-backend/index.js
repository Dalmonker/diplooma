const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

var mainRoute = require("./routes/main.route.js");

app.use("/api", mainRoute);
// app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
