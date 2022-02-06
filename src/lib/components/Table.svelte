<table class="table">
  <slot></slot>
</table>

<style global>
  .table {
    border: 1px solid gray;
    border-collapse: collapse;
    max-width: var(--max-width, 800px);
    margin-bottom: 20px;
    /* white-space: nowrap; */
    /* text-overflow: ellipsis; */
  }
  .table td {
    border: 1px solid gray;
    vertical-align: top;
    padding: 7px 15px;
  }
  .table th {
    border: 1px solid gray;
    vertical-align: top;
    padding: 10px 15px;
    text-align: left;
    font-weight: bold;
    background-color: rgb(245, 245, 245);
  }
  .table .main {
    width: 100%;
  }
  .sticky {
    position: sticky;
    top: -0.5px; /* Bug in chromium */
    box-shadow: inset 0 1px 0 gray, inset 0 -1px 0 gray;
  }
</style>