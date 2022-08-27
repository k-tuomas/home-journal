import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ parent }) => {
  const { user } = await parent()
  //if no session found redirect user to login page
  if (!user) {
    throw redirect(302, '/auth/login');
  }

  return {
    user: user
  }
}

