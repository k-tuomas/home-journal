import type { PageServerLoad } from "./$types"
import * as cookie from 'cookie'

export const GET: PageServerLoad = async () => {
  return {
    status: 303,
    headers: {
      'Set-Cookie': cookie.serialize('session', '', {
        path: '/',
        expires: new Date(0)
      }),
    location: '/'
    }
  }
}