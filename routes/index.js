var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
	res.render("index", 
		{
			title: "Days without Half Life 3",
			subTitle: "Half-Life: Alyx Release date: 03/23/2020"
		}
	);
});

module.exports = router;
