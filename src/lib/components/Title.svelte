<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  // import Icon from "./Icon.svelte";
  import { startCase } from 'lodash'

  onMount(() => {
    if (fromPath) {
      let pieces = $page.url.pathname.split('/').filter(e => e)
      if (pieces.length == 0) return
      text = startCase(pieces[0])
    }
  })

  export let text, description = text, about = null
  export let back = false, backHref = null, fromPath = false

  const handleBack = () => {
    if (backHref) {
      goto(backHref)
    }
    else {
      history.go(-1)
    }
  }
</script>

{#if text}
<div class="title">
  {#if back}
  <!-- <button on:click={handleBack} class="back"><Icon name='arrowLeft' /></button> -->
  <button on:click={handleBack} class="back">&lt;</button>
  {/if}
  <div class="main">
    <h1>{text}</h1>
    {#if about}
    <div class="about">{about}</div>
    {/if}
  </div>
  <div style="margin-left: auto;">
    <slot />
  </div>
</div>
{/if}

<svelte:head>
  <title>{text}</title>
  <meta name="description" content="{description}">
</svelte:head>

<style>
  .title {
    /* border: 1px solid red; */
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  .back {
    margin-right: 13px;
  }
  h1 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1.5rem;
  }
  .about {
    color: rgb(37, 37, 37);
  }
</style>