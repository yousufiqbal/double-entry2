<script>
  import '@yousufiqbal/ui/global.css'
  import { Breadcrumb, Navigation } from '@yousufiqbal/ui'
</script>

<Breadcrumb />
<Navigation items={['accounts', 'transactions', 'reports']} />

<slot></slot>