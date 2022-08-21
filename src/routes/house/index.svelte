<script context='module' lang='ts'>
  import type { Load } from '@sveltejs/kit'

  export const load: Load = ({ session }) => {
    //if no session found redirect user to login page
    if (!session.user) {
      return {
        status: 302,
        redirect: '/auth/login'
      }
    }

    console.log(session.user)
    return {
      status: 200,
      props: {
        user: session.user.username
      }
    }
  }

</script>

<script lang='ts'>
  export let user: string
</script>

<h1>Welcome {user}</h1>
<p>Add house site here</p>
