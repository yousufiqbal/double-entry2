
<script>
  import { page } from '$app/stores';
  import { startCase } from 'lodash'

  export let divider = '&rarr;'

  $: pieces = $page.url.pathname && $page.url.pathname.split('/').filter(e => e) || []
</script>

<div class="breadcrumb">

  {#each pieces as piece, index}

  <a href="/{piece}">{startCase(piece)}</a>

    {#if index != pieces.length - 1}
    <span>{@html divider}</span>
    {/if}

  {:else}
  <a href="/">Home Page</a>
  {/each}

</div>

<style>
  .breadcrumb {
    /* border: 1px solid red; */
    display: inline-grid;
    grid-auto-flow: column;
    column-gap: 15px;
    margin-bottom: 15px;
  }
  a {
    border-bottom: 1px solid white;
    padding-bottom: 2px;
  }
  a:hover {
    color: initial;
    border-bottom: 1px solid gray;
  }
</style>