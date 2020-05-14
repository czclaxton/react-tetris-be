exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("leaderboard")
    .truncate()
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("leaderboard").insert([
        { id: 1, name: "HACKER", score: 99999, date: "00/00/0000" },
        { id: 2, name: "Connor", score: 1160, date: "05/7/2020" },
        { id: 3, name: "Luis", score: 7, date: "05/11/2020" },
        { id: 4, name: "Ivan", score: 212, date: "05/14/2020" },
        { id: 5, name: "Connor", score: 885, date: "05/9/2020" },
        { id: 6, name: "Faye", score: 512, date: "05/8/2020" },
        { id: 7, name: "Jay", score: 642, date: "05/22/2020" },
      ]);
    });
};
