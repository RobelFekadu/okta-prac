var express = require("express");
const authenticationRequired = require("../middleware/requireAuthentication");
var router = express.Router();

/* GET users listing. */
router.get("/", authenticationRequired, (req, res) => {
  res.send("respond with a resource");
});

module.exports = router;
