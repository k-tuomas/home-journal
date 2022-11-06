import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ parent }) => {
  const { user } = await parent()
  //if user is found redirect to home page
  if (user) {
    throw redirect(302, '/');
  }

  return {
    user: user
  }
}
