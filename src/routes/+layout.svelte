<script>
  import { Toaster } from "$lib/components/ui/sonner";
  import { ModeWatcher } from "mode-watcher";
  import "../global.css";
</script>

<ModeWatcher />
<Toaster />
<div class="min-w-[360px] min-h-screen">
  <slot />
</div>
