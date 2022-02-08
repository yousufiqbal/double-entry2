<script>
import { beautifyDate } from "$lib/others/utils";

  import { Nothing, Table } from "@yousufiqbal/ui";

  export let accounts = []
</script>

{#if accounts.length != 0}
<Table>
  <tr>
    <th>Sr.</th>
    <th class="main">Name</th>
    <th>Created</th>
  </tr>
  {#each accounts as account, index (account.account_id)}
  <tr>
    <td>{index + 1}</td>
    <td><a href="/accounts/{account.name}">{account.name}</a></td>
    <td>{beautifyDate(account.created)}</td>
    <td><a href="/accounts/edit-account?account_id={account.account_id}">Edit</a></td>
  </tr>
  {/each}
</Table>

{:else}
<Nothing text="No accounts" />
{/if}