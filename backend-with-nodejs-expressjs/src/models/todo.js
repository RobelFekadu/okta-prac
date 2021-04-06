const { Model } = require("sequelize");
const Joi = require("joi");

class Todo extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Todo",
      }
    );
  }

  static associate(models) {
    // define association here
  }
}

const todoSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(3).max(30).required(),
});

ValidateTodo = (Todo) => {
  return todoSchema.validate(Todo);
};

exports.Todo = Todo;
exports.ValidateTodo = ValidateTodo;
