const router = require('express').Router()
const controllers = require('./leaderboardControllers')

router.get('/', controllers.getAllScores)

router.post('/', controllers.addScore)

module.exports = router
