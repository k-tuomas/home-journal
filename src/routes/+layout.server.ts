import { db } from '$lib/database'
import type { LayoutServerLoad } from './$types'
import * as cookie from 'cookie'


export const load: LayoutServerLoad = async ({ request }) => {

  const cookieHeader = request.headers.get('cookie')
  const cookies = cookie.parse(cookieHeader ?? '')
  let session

  if (parseInt(cookies.session, 10)) {
    session = await db.user.findUnique({
      where: { id: parseInt(cookies.session, 10) },
      select: { 
        id: true, 
        username: true 
      }
    })
  }
 

  
  return {
    user: session?.username 
  }
 
}