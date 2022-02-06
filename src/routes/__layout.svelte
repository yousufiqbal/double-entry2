<script>
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import '$lib/others/global.css'
</script>

<Breadcrumb />
<Navigation items={['accounts', 'transactions', 'reports']} />
<slot></slot>