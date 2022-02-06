<script>
  // import Icon from "./Icon.svelte";

  export let text, href = null, type = null, styled = false
  export let shortcut = null
  export let el = null
  export let icon = null

  // TODO add oulined button also
  // TODO add button sizes also
  const handleShortcut = e => {
    if (!shortcut) return
    if (shortcut == 'ctrl+enter' && e.ctrlKey && e.key == 'Enter') {
      el.click(); return
    }
    if (shortcut == 'shift+enter' && e.shiftKey && e.key == 'Enter') {
      el.click(); return
    }
    if (shortcut == 'alt+n' && e.altKey && e.keyCode == 78) {
      el.click(); return
    }
    if (shortcut == 'ctrl+enter' && e.ctrlKey && e.key == 'Enter') {
      el.click(); return
    }
  }
</script>

<!-- Plain and oulined -->
<!-- Idea from: https://evergreen.segment.com/components/buttons -->

{#if href}
  <a class:icon class:styled class="{type}" bind:this={el} {href}>
    {#if icon}
    <!-- <Icon name={icon} /> -->
    {/if}
    <div>{text}</div>
  </a>
{:else}
  <button class:icon class:styled bind:this={el} class="{type}" on:click|stopPropagation>
    {#if icon}
    <!-- <Icon name={icon} /> -->
    {/if}
    <div>{text}</div>
  </button>
{/if}

<svelte:body on:keydown={handleShortcut} />

<style>
  .styled {
    display: inline-flex;
    align-items: center;
    border: 1px solid gray;
    padding: 8px 15px;
    margin-bottom: var(--margin-bottom, 20px);
    margin-right: 10px;
  }
  div {
    color: inherit;
  }
  .styled:first-child {
    border-left: 1px solid gray;
  }
  .icon {
    display: flex;
    margin-right: 5px;
    /* border: 1px solid gray; */
    padding: 5px;
    padding-right: 10px;
  }
  :global(.icon:first-child)
   {
    margin-right: 5px;
    /* border: 1px solid red; */
  }
  /* :global(*) {
    border: 1px solid red;
  } */
  .primary {
    background-color: rgb(5, 160, 0);
    color: white !important;
  }
  .danger {
    background-color: rgb(255, 148, 148);
    color: white;
  }
</style>