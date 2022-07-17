<script lang='ts'>
  import { send } from '$lib/api'

  export let error: string
  export let success: string

  const onSubmit = async (event: SubmitEvent) => {
    error = ''
    const formEl = event.target as HTMLFormElement
    const res = await send(formEl)

    if (res.error) {
      error = res.error
    }

    if (res.success) {
      success = res.success
    }

    formEl.reset()
  }

</script>

<form 
  on:submit|preventDefault={onSubmit} 
  method='post'
  autocomplete="off"
>
  <div>
    <label for='email'>Email</label>
    <input 
      id='email'
      name='email'
      type="text"
      required
    >
  </div>
  <div>
    <label for="name">Name</label>
    <input 
      id="name"
      type="text" 
      name="name" 
    >
  </div>
  <div>
    <label for="password">Password</label>
    <input 
      type="text" 
      name="password" 
      id="password"
      required
    >
  </div>

  {#if error}
    <p class='error'>{error}</p>
  {/if}

  {#if success}
    <div>
      <p>Register successful</p>
      <p>
        <a href='/auth/login'>Log in</a>
      </p>
    </div>
  {/if}

  <button type='submit'>Register</button>
</form>

<style lang='scss'>
  .error {
    color: red
  }
</style>