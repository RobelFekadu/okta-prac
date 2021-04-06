const { Todo, ValidateTodo } = require("../models/todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      attributes: { exclude: ["updatedAt"] },
    });

    return res.status(200).send(todos);
  } catch (error) {
    return res.send(error);
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { error } = ValidateTodo(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const todo = await Todo.create({ title: req.body.title });
    res.status(201).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
};
