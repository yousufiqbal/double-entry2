import Knex from 'knex'

export const knex = Knex({
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : '486426486426',
    database : 'double-entry'
  }
});