<script>
  import Nothing from "$lib/components/Nothing.svelte";
  import Table from "$lib/components/Table.svelte";
  import { beautifyDate } from "$lib/others/utils";

  export let accounts = []
</script>

{#if accounts.length != 0}
<Table>

  <tr class="sticky">
    <th>Sr.</th>
    <th>Account Name</th>
    <th>Created</th>
  </tr>

  {#each accounts as account, index (account.account_id)}
  <tr>
    <td>{index+1}</td>
    <td>{account.name}</td>
    <td>{beautifyDate(account.created)}</td>
  </tr>
  {/each}

</Table>

{:else}
<Nothing text="No accounts" />
{/if}