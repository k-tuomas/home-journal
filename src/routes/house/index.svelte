<script context='module' lang='ts'>
  
  // import type { PageLoad } from './$types'

  // export const load: PageLoad = async ({ parent }) => {
  //   //if no session found redirect user to login page
  //   const { user } = await parent()
  //   if (!user) {
  //     return {
  //       status: 302,
  //       redirect: '/auth/login'
  //     }
  //   }

  
  //   return {
  //     status: 200,
  //     props: {
  //       user: user.username
  //     }
  //   }
  // }

</script>

<script lang='ts'>
  export let user: string
</script>

<h1>Welcome {user}</h1>
<p>Add house site here</p>
