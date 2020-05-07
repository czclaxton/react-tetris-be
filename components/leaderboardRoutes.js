const router = require("express").Router();
const controllers = require("./leaderboardControllers");

router.get("/", controllers.getScores);

router.post("/", controllers.addScore);

module.exports = router;
