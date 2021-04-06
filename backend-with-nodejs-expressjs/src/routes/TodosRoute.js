const express = require("express");
const authenticationRequired = require("../middlewares/requireAuthentication");
const router = express.Router();
const todosController = require("../controllers/TodosController");
// authenticationRequired,
router.get("/", todosController.getTodos);

router.post("/", todosController.createTodo);

router.get("/auth", authenticationRequired, todosController.getTodos);

module.exports = router;
