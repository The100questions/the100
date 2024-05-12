<script lang="ts">
  import { toggleMode } from "mode-watcher";
  import * as Tabs from "./tabs";

  import { MoonIcon, SunIcon } from "lucide-svelte";
  import { mode } from "mode-watcher";

  const ALL_THEMES = [
    { value: "dark", Label: MoonIcon },
    { value: "light", Label: SunIcon },
  ];
</script>

<Tabs.Root value={$mode} onValueChange={toggleMode}>
  <Tabs.List>
    {#each ALL_THEMES as { value, Label }}
      <Tabs.Trigger {value}>
        <Label size={16} />
      </Tabs.Trigger>
    {/each}
  </Tabs.List>
</Tabs.Root>
