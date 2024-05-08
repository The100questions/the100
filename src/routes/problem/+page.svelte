<script lang="ts">
  import MonacoEditor from "$lib/components/MonacoEditor.svelte";
  import MainWrapper from "$lib/components/ui/MainWrapper.svelte";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb";
  import { Header } from "$lib/components/ui/header";
  let name = "vishal";


  let fullName = name + "gupta";

</script>

<Header />
<MainWrapper>
  <div>Problem page</div>
  <div class="flex w-full p-4">
    <div class="h-full w-full border border-black flex">
      <div class="flex-1 border border-gray-200">
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>
      <MonacoEditor />
    </div>
  </div>
</MainWrapper>
