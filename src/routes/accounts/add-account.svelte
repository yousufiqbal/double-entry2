<script>
  import Button from "$lib/components/Button.svelte";
  import Field from "$lib/components/Field.svelte";
  import FieldGroup from "$lib/components/FieldGroup.svelte";
  import Title from "$lib/components/Title.svelte";
  import { axios } from "$lib/others/utils";

  let account = {}

  const submit = async () => {
    // validation..
    await addAccount()
  }

  const addAccount = async () => {
    try {
      const response = await axios.post('/api/accounts', account)
      alert(response.data.message)
    } catch (error) {
      console.log(error)
      alert(error.data?.message || 'Unknown Error')
      
    }
  }
</script>

<Title text="Add Account" />

<FieldGroup>
  <Field label="Account Name" name="name" bind:value={account.name} />
</FieldGroup>

<Button on:click={submit} text="Save" styled type="primary" />