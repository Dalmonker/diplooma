const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path"); // Добавьте это

var mainRoute = require("./routes/main.route.js");

app.use("/api", mainRoute);
// app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../diploma-project/dist")));

// Обработка всех остальных маршрутов и отправка index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../diploma-project/dist", "index.html"));
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
