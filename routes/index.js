var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
	res.render("index", { title: "Days without Half Life 3" });
});

module.exports = router;
