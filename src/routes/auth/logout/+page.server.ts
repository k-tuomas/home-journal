import { redirect } from '@sveltejs/kit';
import * as cookie from 'cookie'
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ setHeaders }) => {
  setHeaders({
    'set-cookie': cookie.serialize('session', '', {
      path: '/',
      expires: new Date(0)
    })
  })

  throw redirect(303, '/')
}
