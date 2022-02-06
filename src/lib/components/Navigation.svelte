<script>
  import { startCase } from 'lodash'
  
  export let items = []
</script>

{#if items.length != 0}
<nav>
  {#each items as item}
  <a href="/{item}">{startCase(item)}</a>
  {/each}
</nav>
{/if}

<style>
  nav {
    display: flex;
    border-left: 1px solid black;
    margin-bottom: 20px;
  }
  nav > * {
    border: 1px solid black;
    padding: 7px 15px;
    border-left: none;
  }
</style>