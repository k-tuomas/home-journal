<script context='module' lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = ({ session, props }) => {
    if (session.user) {
      return {
        status: 302,
        redirect: '/'
      }
    }

    return { props }
  }
</script>

<script lang='ts'>
  import { session } from '$app/stores'
  import { send } from '$lib/api'

  export let error: string = ''
  export let success: string = ''

  const onSubmit = async (event: SubmitEvent) => {
    const formEl = event.target as HTMLFormElement

    const res = await send(formEl)

    if (res.error) {
      error = res.error
    }

    $session.user = res.user
    
    formEl.reset()
  }

</script>

<form 
  on:submit|preventDefault={onSubmit} 
  method='post'
  autocomplete="off"
>
  <div>
    <label for='email'>email</label>
    <input
      id='email'
      name='email'
      type='text'
      required
    >
  </div>

  <div>
    <label for='password'>Password</label>
    <input
      id='password'
      name='password'
      type='text'
      required
    >
  </div>

  {#if error}
  <p class='error'>{error}</p>
  {/if}

  {#if success}
    <div>
      <p>logged in</p>
    </div>
  {/if}

  <button type='submit'>Login</button>

</form>

<style lang='scss'>
  .error {
    color: red
  }
</style>