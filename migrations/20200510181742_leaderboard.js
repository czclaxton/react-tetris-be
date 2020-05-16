exports.up = function (knex) {
  return knex.schema.createTable('leaderboard', (leaderboard) => {
    leaderboard.string('name', 15).notNullable()
    leaderboard.integer('score').notNullable()
    leaderboard.string('date', 20).notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('leaderboard')
}
