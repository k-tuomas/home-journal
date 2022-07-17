import { PrismaClient, Prisma } from "@prisma/client"
import type { RequestHandler } from "@sveltejs/kit"
import type { User } from '../../lib/types'

const prisma = new PrismaClient()

export const GET: RequestHandler = async () => {
  const users: User[] = await prisma.user.findMany({
    include: {
      profile: {
        select: {
          id: true
        }
      }
    }
  })

  if (users) {
    return {
      status: 200,
      body: { users }
    }
  }

  return {
    status: 404
  }
}

export const POST: RequestHandler = async ({ request }) => {

  const data = await request.formData()
  try {
    // const newUser = await prisma.user.create({
    //   data: {
    //     name: body.name,
    //     email: body.email,
    //     houseId: body.houseId
    //   }
    // })

    console.log(data)

    return {
      status: 201
    }
  } catch(err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(err)
    }

    return {
      status: 400,
    }
  }

}