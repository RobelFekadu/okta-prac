var express = require("express");
var logger = require("morgan");
var cors = require("cors");
require("./models/index");
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var todoRouter = require("./routes/TodosRoute");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/todos", todoRouter);

app.listen(process.env.PORT || 3001, () =>
  console.log(`listening on port ${process.env.PORT || 3001}`)
);
