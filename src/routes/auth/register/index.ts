import type { RequestHandler } from "@sveltejs/kit"
import * as bcrypt from 'bcrypt'

import { db } from "$lib/database"

export const POST: RequestHandler = async ({ request }) => {
  const form = await request.formData()
  const email = form.get('email')
  const name = form.get('name')
  const password = form.get('password')

  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    (name && typeof name !== 'string')
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

  try {
    await db.user.create({
      data: {
        email: email,
        name: name,
        passwordHash: await bcrypt.hash(password, 10)
      }
    })

    return {
      status: 200,
      body: { success: 'Success'}
    }
  } catch (err) {
    console.log(err)
    return {
      status: 400,
      body: {
        error: 'error creating user'
      }
    }
  }

  return {}
}