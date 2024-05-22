<script lang="ts">
  import { onMount } from "svelte";
  import * as Resizable from "$lib/components/ui/resizable";

  export let data;
  const { question } = data ?? {};
  let CodeEditorComponent: any;

  onMount(async () => {
    CodeEditorComponent = (await import(`$lib/components/ui/code-editor`))
      .CodeEditor;
  });
</script>

<Resizable.PaneGroup direction="horizontal" class="max-w-full">
  <Resizable.Pane defaultSize={50}>
    <div class="size-full overflow-y-auto px-4">
      <div class="border rounded">
        <div>it is question {question?.title}</div>
        <div>it is question {question?.subTitle}</div>
        <div>it is question {question?.description}</div>
        <div class="h-[500px] bg-red-100">sdx</div>
        <div class="h-[500px] bg-red-200">sdx</div>
      </div>
    </div>
  </Resizable.Pane>
  <Resizable.Handle withHandle />
  <Resizable.Pane defaultSize={50}>
    <Resizable.PaneGroup direction="vertical">
      <Resizable.Pane defaultSize={50}>
        <div class="size-full flex items-center justify-center">
          {#if CodeEditorComponent}
            <svelte:component this={CodeEditorComponent} />
          {/if}
        </div>
      </Resizable.Pane>
      <Resizable.Handle withHandle />
      <Resizable.Pane defaultSize={50}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">Three</span>
        </div>
      </Resizable.Pane>
    </Resizable.PaneGroup>
  </Resizable.Pane>
</Resizable.PaneGroup>
