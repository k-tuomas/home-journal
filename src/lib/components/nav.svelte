<script lang='ts'>
  import { slide } from 'svelte/transition'
  import { page } from '$app/stores'
  import { ListIcon } from 'svelte-feather-icons'
  import { clickOutside } from '$lib/helpers/clickOutside'

  let showDropdown = false
  let dropdownButton = undefined

  const handleDropdown = () => {
    showDropdown = !showDropdown
  }

</script>

<svelte:head>
  <title>home-journal</title>
</svelte:head>


<div class='navbar'>
  <nav>
    <div class="navbar-links">
      <a href='/'>Home</a>
      <a href="/house">Houses</a>
    </div>
    <div class='navbar-dropdown'>
      <button on:click={handleDropdown} bind:this={dropdownButton}>
        <ListIcon />
      </button>
      {#if showDropdown}
        <div 
          class='dropdown-content' 
          use:clickOutside={[dropdownButton]}
          on:click_outside={handleDropdown}
          transition:slide
        >
          {#if $page.data.user}
            <a href='/'>My profile</a>
            <a href='/auth/logout'>Logout</a>
          {/if}
          {#if !$page.data.user}
            <a href='/auth/login'>Login</a>
            <a href='/auth/register'>Register</a>
          {/if}
        </div>
      {/if}

    </div>
  </nav>
</div>

<style lang='scss'>
  :global(body) {
    margin: 0;
  }

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
          position: absolute;
          top: 58px;
          right: 5px;
          background-color: white;
          border: 1px solid black;
          border-radius: 5px;
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