<script lang="ts">
  import { Circle, CircleCheck, CircleDashed } from "lucide-svelte";

  export let status = "unattempted";
</script>

{#if status === "attempted"}
  <CircleDashed class="text-primary" />
{:else if status === "solved"}
  <CircleCheck class="text-primary"/>
{:else}
  <Circle class="text-primary"/>
{/if}
