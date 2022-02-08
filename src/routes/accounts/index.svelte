<script>
  import Accounts from "$lib/tables/Accounts.svelte";
  import { Button, Title } from "@yousufiqbal/ui";

  export let accounts = []
</script>

<Title text="Accounts" />
<Button text="Add Account" href="/accounts/add-account" styled />

<Accounts {accounts} />