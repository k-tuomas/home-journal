<script lang='ts'>
  import { session } from '$app/stores'
  import { ListIcon } from 'svelte-feather-icons'
</script>

<svelte:head>
  <title>home-journal</title>
</svelte:head>


<div class='navbar'>
  <nav>
    <div class="navbar-links">
      <a href='/'>Home</a>
      <a href="/house">Houses</a>
      {#if !$session.user}
        <a href='/auth/register'>Register</a>
        <a href='/auth/login'>Login</a>
      {/if}
 
    </div>
    <div class='navbar-dropdown'>
      <button>
        <ListIcon />
      </button>
      <div class='dropdown-content'>
        {#if $session.user}
        <a href='/auth/logout'>Logout</a>
        <a href='/'>My profile</a>
        {/if}
        {#if !$session.user}
        <a href='/auth/login'>Login</a>
      {/if}
      </div>
    </div>
  
  </nav>
</div>


<style lang='scss'>
  .navbar {
    display: flex;
    height: 50px;
    background-color: darkolivegreen;

    > nav {
      display: flex;
      flex: 1 0 auto;
      align-items: center;
      .navbar-links {
        > a {
          padding: 5px;
          font-size: 25px;
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
      }

      .navbar-dropdown {
        float: left;
        overflow: hidden;
        margin-left: auto;
        padding: 5px;
        > button {
          background-color: inherit;
          font-family: inherit;
          margin: 0; 
          border-radius: 5px;
        }
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
          > a {
            float: none;
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            text-align: left;
          }
        }
      }

    }

  }
</style>