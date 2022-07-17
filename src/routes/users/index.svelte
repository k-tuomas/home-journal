<script lang='ts'>
  import AddUserform from '$lib/components/addUserform.svelte'
import type { User } from '$lib/types'
  export let users: User[]

  console.log('!!', users)
</script>

<svelte:head>
  <title>Users</title>
</svelte:head>

<div class='users'>
  <h1>Users</h1>

  <AddUserform />

</div>