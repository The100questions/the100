<script>
  import { cn } from "$lib/utils";
  import { t } from "@services/translation/translationService";
  import LanguageSelector from "../LanguageSelector.svelte";
  import ThemeSelector from "../ThemeSelector.svelte";
  import { buttonVariants } from "../button";
</script>

<header
  class="w-full sticky top-0 bg-white backdrop-blur bg-background/95 border-b border-border/40 supports-[backdrop-filter]:bg-background/60 z-50"
>
  <div
    class="max-w-[1200px] w-full mx-auto container flex items-center justify-between h-14 px-4 sm:px-8"
  >
    <a href="/">
      <h1 class="text-xl font-bold font-mono">The100</h1>
    </a>
    <div class="items-center justify-center gap-3 flex">
      <nav class="flex items-center gap-2">
        <a
          href="/login"
          class={cn(
            buttonVariants({
              variant: "ghost",
            })
          )}
        >
          {$t("login")}
        </a>
      </nav>
      <LanguageSelector />

      <ThemeSelector />
    </div>
  </div>
</header>
