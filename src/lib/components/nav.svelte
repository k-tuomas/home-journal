<script lang='ts'>
  import { session } from '$app/stores'
</script>

<svelte:head>
  <title>home-journal</title>
</svelte:head>
<nav>
  <a href='/'>Home</a>
  {#if !$session.user}
    <a href='/auth/register'>Register</a>
    <a href='/auth/login'>Login</a>
  {/if}
  {#if $session.user}
    <a href="/house">My House</a>
    <a href='/auth/logout'>Logout</a>
  {/if}
  
</nav>