<script lang="ts">
  import { ALL_LANGUAGES } from "@constants";
  import apiService from "../../../services/apiService";
  import * as Tabs from "./tabs";

  const handleValueChange = (v?: string) => {
    if (!v) return;
    apiService.updateLanguageApi(v);
  };
</script>

<Tabs.Root value="hindi" onValueChange={handleValueChange}>
  <Tabs.List>
    {#each ALL_LANGUAGES as { value, label }}
      <Tabs.Trigger {value}>{label}</Tabs.Trigger>
    {/each}
  </Tabs.List>
</Tabs.Root>
