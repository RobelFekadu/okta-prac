const express = require("express");
const authenticationRequired = require("../middleware/requireAuthentication");
const router = express.Router();

router.get("/", authenticationRequired, (req, res) => {
  todoList = [
    {
      id: 1,
      text: "Clean the dishes",
    },
    {
      id: 2,
      text: "Cook Dinner",
    },
    {
      id: 3,
      text: "Take out the trash",
    },
    {
      id: 4,
      text: "Legdrop off the ropes",
    },
    {
      id: 5,
      text: "Brush your teeth",
    },
  ];

  res.send(todoList);
});

module.exports = router;
