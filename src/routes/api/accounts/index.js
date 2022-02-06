import { knex } from '$lib/database/db'
import { internalError } from '$lib/others/utils'

/** @type {import('@sveltejs/kit').RequestHandler} */
export const post = async ({ request }) => {

  const body = await request.json()

  try {
    await knex('accounts').insert(body)
    return { body: { message: 'Account added' }}
  } catch (error) {
    return internalError()
  }
  
}