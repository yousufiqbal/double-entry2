import { knex } from '$lib/database/db'
import { accountSchema } from '$lib/database/schema'
import { internalError } from '$lib/others/utils'

/** @type {import('@sveltejs/kit').RequestHandler} */
export const post = async ({request}) => {
  try {
    const body = await request.json()
    const account = await accountSchema.validate(body)
    await knex('accounts').insert(account)
    return { status: 201, body: { message: 'Account added'} }
  } catch (error) {
    return internalError()
  }
}