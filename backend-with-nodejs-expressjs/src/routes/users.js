var express = require("express");
// const authenticationRequired = require("../middlewares/requireAuthentication");
var router = express.Router();

/* GET users listing. authenticationRequired, */
router.get("/", (req, res) => {
  res.send("respond with a resource");
});

module.exports = router;
