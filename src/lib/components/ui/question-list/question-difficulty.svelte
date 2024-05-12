<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { cn } from "$lib/utils";
  import { ShieldCheck } from "lucide-svelte";

  export let level = "low";
</script>

<Badge
  variant="outline"
  class={cn(
    `inline-flex items-center gap-1 text-white`,
    level === "low" && "bg-green-500",
    level === "medium" && "bg-yellow-500",
    level === "high" && "bg-red-500"
  )}
  ><ShieldCheck size={16} />
  <span class="font-bold text-sm">{level}</span></Badge
>
