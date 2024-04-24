var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET new page. */
router.get("/new", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
