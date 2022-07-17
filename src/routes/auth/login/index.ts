import type { RequestHandler } from "@sveltejs/kit"
import * as bcrypt from 'bcrypt'
import * as cookie from 'cookie'

import { db } from "$lib/database"

export const POST: RequestHandler = async ({ request }) => {
  const form = await request.formData()
  const email = form.get('email')
  const password = form.get('password')

  if (
    typeof email !== 'string' ||
    typeof password !== 'string' 
  ) {
    return {
      status: 400,
      body: { error: 'invalid email or password'}
    }
  }

  if (!email || !password) {
    return {
      status: 400,
      body: { error: 'email and password required'}
    }
  }

  const user = await db.user.findUnique({
    where: { email }
  })
  const passwordCheck = user &&  await bcrypt.compare(password, user.passwordHash)

  if (!user || !passwordCheck) {
    return {
      status: 400,
      body: { error: 'invalid email or password' }
    }
  }

  return {
    status: 200,
    body: { 
      user: { email },
      success: 'Success'
    },
    headers: {
      'Set-Cookie': cookie.serialize('session', user.id.toString(), {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 15,
      })
    }
  }

  return {}
}