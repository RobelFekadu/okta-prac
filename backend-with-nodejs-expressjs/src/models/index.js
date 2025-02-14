// "use strict";

// const fs = require("fs");
// const path = require("path");
const Sequelize = require("sequelize");
const { Todo } = require("./todo");
// const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

const models = {
  Todo: Todo.init(sequelize, Sequelize.DataTypes),
};

// Run `.associate` if it exists,
// ie create relationships in the ORM
// Object.values(models)
//   .filter(model => typeof model.associate === "function")
//   .forEach(model => model.associate(models));

const db = {
  ...models,
  sequelize,
};

testdb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
testdb();

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;
