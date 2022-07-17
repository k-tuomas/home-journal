import { db } from "$lib/database";
import type { GetSession, Handle } from "@sveltejs/kit";
import * as cookie from 'cookie'

export const handle: Handle = async ({ 
  event, 
  resolve 
}) => {
  const cookieHeader = event.request.headers.get('cookie')
  const cookies = cookie.parse(cookieHeader ?? '')

  if (!cookies.session) {
    return await resolve(event)
  }

  const session = await db.user.findUnique({
      where: { id: parseInt(cookies.session, 10) },
      select: { 
        id: true, 
        username: true 
      }
  })

  if (session) {
    event.locals.user = { username: session.username }
  }

  return await resolve(event)
}

export const getSession: GetSession = ({ locals }) => {
  if (!locals.user) return {}

  return {
    user: {
      username: locals.user.username
    }
  }
}