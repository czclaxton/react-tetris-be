const router = require("express").Router();
const controllers = require("./leaderboardControllers");

router.get("/", controllers.getLeaderboard);

// router.post("/", controllers.addToLeaderboard);

module.exports = router;
