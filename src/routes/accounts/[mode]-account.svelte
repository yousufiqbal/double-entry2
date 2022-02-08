<script>
  import { Button, Field, FieldGroup, Title } from "@yousufiqbal/ui";
  import { startCase } from 'lodash-es'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
import { accountSchema, extractYupErrors } from "$lib/database/schema";
import { axios } from "$lib/others/utils";

  let account = {}, touched = false, errors = []


  const validate = async () => {
    try {
      await accountSchema.validate(account, { abortEarly: false})
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

  const addAccount = async () => {
    try {
      await axios.post('/api/accounts')
      doAfterAdd()
    } catch (error) {
      alert(error.data?.message || 'Error')
    }
  }

  const doAfterAdd = () => {
    goto('/accounts')
  }

  $: validate(account);
</script>

<Title text="{startCase($page.params.mode)} Account" />

<FieldGroup>
  <Field {touched} {errors} label="Name" name="name" bind:value={account.name} />
</FieldGroup>

<Button on:click={submit} styled type="primary" text="Save" />
<Button styled text="Discard" />