import dayjs from 'dayjs';
import redaxios from 'redaxios'
import { dev } from '$app/env'

export const axios = redaxios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_URL
})

export const internalError = error => {
  if (dev) console.log(error)
  return {
    status: 500, body: { message: 'Error from our side. We apologize' }
  }
}

export const beautifyDateTime = (ISO8601 = '') => {
  return dayjs(ISO8601).format('DD MMM, YYYY HH:mm:ss')
}

export const beautifyDate = (ISO8601 = '') => {
  return dayjs(ISO8601).format('DD MMM, YYYY')
}