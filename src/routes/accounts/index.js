import { knex } from "$lib/database/db.js"

export const get = async () => {
  const accounts = await knex('accounts')
  return { body: { accounts } }
}