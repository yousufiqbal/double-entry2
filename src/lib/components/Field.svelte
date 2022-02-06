<script>
  export let label, name, value = undefined, type = 'text'
  export let el = null
  export let minlength = null, maxlength = null, placeholder = null, pattern = null, inputmode = null
  export let touched = false, errors = {}

  const typeMe = node => {
    node.type = type
  }

  const touchMe = () => {
    touched = true
  }
</script>

<div class="field">
  <label for="{name}">{label}</label>
  <input on:blur={()=>touchMe()} use:typeMe {name} size="1" bind:value bind:this={el} {inputmode} {maxlength} {minlength} {placeholder} {pattern} >
  {#if touched && errors[name]}
  <div class="error">{errors[name]}</div>
  {/if}
</div>

<style>
  .field {
    /* border: 1px solid red; */
    display: grid;
    grid-column: var(--grid-column, span 1);
    max-width: 500px;
  }
  .field:focus-within {
    color: blue;
  }
  label {
    color: inherit;
    font-weight: bold;
    /* border: 1px solid blue; */
    justify-self: start;
    padding: 0 7px;
    margin-left: 8px;
    margin-bottom: -9px;
    z-index: 1;
    background-color: #fff;
  }
  input {
    border: 1px solid gray;
    padding: 14px 15px 10px 15px;
    /* border-top-left-radius: 4px; */
  }
  .error {
    padding: 6px 15px;
    border: 1px solid gray;
    border-top: none;
    color: red;
  }
  .error::first-letter {
    text-transform: capitalize;
  }
</style>