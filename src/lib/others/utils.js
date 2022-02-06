import dayjs from 'dayjs';
// import { Kysely, MysqlDialect } from 'kysely';
import redaxios from 'redaxios'

// export let db = new Kysely({
//     dialect: new MysqlDialect({
//         host: 'localhost',
//         database: import.meta.env.VITE_DB_NAME,
//         user: import.meta.env.VITE_DB_USER,
//         password: import.meta.env.VITE_DB_PASS
//     })
// })

export const axios = redaxios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_URL
})

export const extractYupErrors = err => {
  return err.inner.reduce((acc, err) => {
    return { ...acc, [err.path]: err.message };
  }, {});
}

export const internalError = () => ({
  status: 500, body: 'Error from our side. We apologize'
})

export const beautifyDateTime = (ISO8601 = '') => {
  return dayjs(ISO8601).format('DD MMM, YYYY HH:mm:ss')
}

export const beautifyDate = (ISO8601 = '') => {
  return dayjs(ISO8601).format('DD MMM, YYYY')
}