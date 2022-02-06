<div class="field-group">
  <slot></slot>
</div>

<style>
  .field-group {
    display: grid;
    grid-template-columns: var(--grid-template-columns, 1fr 1fr);
    gap: 20px;
    max-width: 500px;
    margin-bottom: 40px;
  }
</style>