const db = require('../../dbConfig')
const moment = require('moment')

module.exports = {
  async getAllScores(req, res, next) {
    try {
      const scores = await db('leaderboard').orderBy('score', 'desc').limit(10)
      return res.status(200).json(scores)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  },
  async addScore(req, res, next) {
    const { name, score } = req.body
    const date = moment().format('MMMM Do YYYY')
    try {
      const newScore = await db('leaderboard').insert({
        name,
        score,
        date,
      })

      return res.status(200).json(newScore)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
}
