const express = require("express");
const router = express.Router();

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

/* GET messages page. */
router.get("/", function (req, res, next) {
  res.render("messages", { title: "Mini Messageboard", messages });
});

/* GET new page. */
router.get("/new", function (req, res, next) {
  res.render("messages", { title: "Mini Messageboard", messages });
});

module.exports = router;
