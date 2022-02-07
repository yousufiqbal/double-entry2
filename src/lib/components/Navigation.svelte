<script>
  import { kebabCase, startCase } from 'lodash-es'
  
  export let items = []
</script>

{#if items.length != 0}
<nav>
  {#each items as item}
  <a href="/{kebabCase(item)}">{startCase(item)}</a>
  {/each}
</nav>
{/if}

<style>
  nav {
    display: flex;
    border-left: 1px solid gray;
    margin-bottom: 20px;
  }
  nav > * {
    border: 1px solid gray;
    padding: 7px 15px;
    border-left: none;
  }
</style>