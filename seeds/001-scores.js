exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('leaderboard')
    .truncate()
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('leaderboard').insert([
        { name: 'HACKER', score: 99999, date: '00/00/0000' },
        { name: 'Connor', score: 1160, date: '05/7/2020' },
        { name: 'Luis', score: 7, date: '05/11/2020' },
        { name: 'Ivan', score: 212, date: '05/14/2020' },
        { name: 'Connor', score: 885, date: '05/9/2020' },
        { name: 'Faye', score: 512, date: '05/8/2020' },
        { name: 'Jay', score: 642, date: '05/22/2020' },
      ])
    })
}
