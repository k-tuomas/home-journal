import type { PageServerLoad } from './$types'
import * as bcrypt from 'bcrypt'

import { db } from "$lib/database"

export const POST: PageServerLoad = async ({ request }) => {
  const form = await request.formData()
  const email = form.get('email')
  const username = form.get('username')
  const password = form.get('password')

  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    typeof username !== 'string'
  ) {
    return {
      status: 400,
      error: 'invalid email or password'
    }
  }

  if (!email || !password) {
    return {
      status: 400,
      error: 'email and password required'
    }
  }

  try {
    await db.user.create({
      data: {
        email: email,
        username: username,
        passwordHash: await bcrypt.hash(password, 10)
      }
    })

    return {
      status: 200,
      success: 'Success'
    }
  } catch (err) {
    console.log(err)
    return {
      status: 400,
      error: 'error creating user'
    }
  }

}