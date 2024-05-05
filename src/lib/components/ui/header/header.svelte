<script>
  import ThemeSelector from "../ThemeSelector.svelte";
</script>

<header
  class="w-full sticky top-0 bg-white backdrop-blur bg-background/95 border-b border-border/40 supports-[backdrop-filter]:bg-background/60 z-50"
>
  <div
    class="max-w-[1200px] w-full mx-auto container flex items-center justify-between h-14"
  >
    <h1 class="text-xl font-bold font-mono">The100</h1>
    <div>
      <ThemeSelector />
    </div>
  </div>
</header>
