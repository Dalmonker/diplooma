const data = require("../data/data.js");

class NavigationController {
  getAllLinks = (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "origin, content-type, accept"
    );

    setTimeout(() => {
      res.json(data.links);
    }, 1000);
  };
}

module.exports = new NavigationController();
