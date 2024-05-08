<script lang="ts">
  import { ALL_LANGUAGES } from "@constants";
  import apiService from "@services/apiService";
  import { language } from "@services/translation/translationService";
  import * as Tabs from "./tabs";

  const handleValueChange = (v?: string) => {
    if (!v) return;
    apiService.updateLanguageApi(v);
  };
</script>

<Tabs.Root bind:value={$language} onValueChange={handleValueChange}>
  <Tabs.List>
    {#each ALL_LANGUAGES as { value, label }}
      <Tabs.Trigger {value}>{label}</Tabs.Trigger>
    {/each}
  </Tabs.List>
</Tabs.Root>
