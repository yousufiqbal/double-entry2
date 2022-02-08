<script>
  import { page } from "$app/stores";
  import Button from "$lib/components/Button.svelte";
  import Field from "$lib/components/Field.svelte";
  import FieldGroup from "$lib/components/FieldGroup.svelte";
  import Title from "$lib/components/Title.svelte";
  import { accountSchema, extractYupErrors } from "$lib/database/schema";
  import { axios } from "$lib/others/utils";
  import { startCase } from "lodash";

  let account = {}, el = null
  let touched = false, errors = []

  $: {
    account; // <-- watch
    validate()
  }

  const validate = async () => {
    try {
      await accountSchema.validate(account, { abortEarly: false })
      errors = []
    } catch (error) {
      errors = extractYupErrors(error)
    }
  }

  const submit = async () => {
    if (await accountSchema.isValid(account)) {
      if ($page.params.mode == 'add') await addAccount()
      if ($page.params.mode == 'edit') await editAccount()
    } else {
      touched = true
    }
  }

  const doAfterAdd = () => {
    account.name = ''
    errors = []
    el.focus()
    touched = false
    console.log(touched, errors, account.name)
  }

  const addAccount = async () => {
    try {
      const response = await axios.post('/api/accounts', account)
      alert(response.data.message)
      doAfterAdd()
    } catch (error) {
      console.log(error)
      alert(error.data?.message || 'Unknown Error')
      
    }
  }
</script>

<Title text="{startCase($page.params.mode)} Account" />

<FieldGroup>
  <Field {touched} {errors} bind:el label="Account Name" name="name" bind:value={account.name} />
</FieldGroup>

<Button on:click={submit} text="Save" styled type="primary" />
<Button on:click={()=>history.go(-1)} text="Discard" styled />