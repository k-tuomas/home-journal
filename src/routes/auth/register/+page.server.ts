import { invalid, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'
import bcrypt from 'bcrypt'

import { db } from '$lib/database'

enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export const load:PageServerLoad = async () => {
  //TODO
}

const register: Action =async ({request}) => {
  const data = await request.formData()
  const email = data.get('email')
  const username = data.get('username')
  const password = data.get('password')
  
  //TODO: add validation for email field
  if (
    typeof email !== 'string' ||
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    !email ||
    !username ||
    !password
  ) {
    return invalid(400, { invalid: true })
  }

  const user = await db.user.findUnique({
    where: { username }
  })

  if (user) {
    return invalid(400, { user: true })
  }

  await db.user.create({
    data: {
      email,
      username,
      passwordHash: await bcrypt.hash(password, 10),
      userAuthToken: crypto.randomUUID(),
      role: { connect: { name: Roles.USER } }
    }
  })

  throw redirect(303, '/auth/login')
}

export const actions: Actions = { register }