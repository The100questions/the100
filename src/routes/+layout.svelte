<script>
  import { Footer } from "$lib/components/ui/Footer";
  import { Header } from "$lib/components/ui/header";
  import { Toaster } from "$lib/components/ui/sonner";
  import { HOMEPAGE_SEO } from "@constants/seo";
  import { ModeWatcher } from "mode-watcher";
  import "../global.css";
</script>

<svelte:head>
  <title>{HOMEPAGE_SEO.title}</title>
  <meta name="description" content={HOMEPAGE_SEO.description} />
  <meta name="keywords" content={HOMEPAGE_SEO.keywords.join(", ")} />
</svelte:head>

<Toaster />
<ModeWatcher />

<div class="w-full min-h-screen flex flex-col">
  <Header />
  <div class="flex-1">
    <slot />
  </div>
  <Footer />
</div>
