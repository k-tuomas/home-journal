<script lang='ts'>
  import { page } from '$app/stores'
  import { send } from '$lib/api'

  export let error: string = ''
  export let success: string = ''

  const onSubmit = async (event: SubmitEvent) => {
    const formEl = event.target as HTMLFormElement

    const res = await send(formEl)
    console.log(res)
    if (res.error) {
      error = res.error
    }

    $page.data.user = res.user
    
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