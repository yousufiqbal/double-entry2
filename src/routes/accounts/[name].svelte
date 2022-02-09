<script>
import { page } from "$app/stores";
import { Title } from "@yousufiqbal/ui";
import { startCase } from "lodash-es";


</script>

<Title text="{startCase($page.params.name)} Account" />