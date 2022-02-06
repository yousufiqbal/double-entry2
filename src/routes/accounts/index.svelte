<script>
  import Button from "$lib/components/Button.svelte";
  import Title from "$lib/components/Title.svelte";
  import Accounts from "$lib/tables/Accounts.svelte";
</script>

<Title text="Accounts" />
<Button href="/accounts/add-account" styled text="Add Account" />

<Accounts />