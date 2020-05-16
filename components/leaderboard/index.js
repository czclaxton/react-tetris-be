const leaderboardRoutes = require('./leaderboardRoutes')

module.exports = (server) => {
  server.use('/api/leaderboard', leaderboardRoutes)
}
