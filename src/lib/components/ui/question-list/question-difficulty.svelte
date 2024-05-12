<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { cn } from "$lib/utils";
  import { ShieldCheck } from "lucide-svelte";

  export let level = "low";
</script>

{#if level}
  <Badge
    class={cn(
      `inline-flex items-center gap-1 text-white`,
      level === "low" && "bg-green-500 hover:bg-green-600",
      level === "medium" && "bg-yellow-500 hover:bg-yellow-600",
      level === "high" && "bg-red-500 hover:bg-red-600"
    )}
  >
    <ShieldCheck size={16} />
    <span class="font-bold text-sm">{level}</span>
  </Badge>
{/if}
