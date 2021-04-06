var router = require("express").Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ id: 1, title: "Express" });
});

module.exports = router;
