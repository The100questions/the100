<script>
  import { Toaster } from "$lib/components/ui/sonner";
  import { ModeWatcher } from "mode-watcher";
  import "../global.css";
</script>

<Toaster />
<ModeWatcher />
<div class="w-full min-h-screen">
  <slot />
</div>
