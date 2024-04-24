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
  res.render("form", { title: "New Message" });
});

/* POST new page. */
router.post("/new", function (req, res, next) {
  const name = req.body.user;
  const message = req.body.message;
  console.log(name, message);

  messages.push({ title: "Mini Messageboard", messages });

  res.redirect("/messages");
});

module.exports = router;
