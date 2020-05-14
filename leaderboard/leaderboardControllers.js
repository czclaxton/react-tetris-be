const db = require("../dbConfig");

module.exports = {
  async getLeaderboard(req, res, next) {
    try {
      const scores = await db("leaderboard");
      console.log("scores", scores);
      return res.status(200).json(scores);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
