<script lang="ts">
  import MainWrapper from "$lib/components/ui/MainWrapper.svelte";
  import { Header } from "$lib/components/ui/header";
  import * as Table from "$lib/components/ui/table";
  import { HOMEPAGE_SEO } from "@constants/seo";

  export let data;

  const { questions } = data;
</script>

<svelte:head>
  <title>{HOMEPAGE_SEO.title}</title>
  <meta name="description" content={HOMEPAGE_SEO.description} />
  <meta name="keywords" content={HOMEPAGE_SEO.keywords.join(", ")} />
</svelte:head>

<Header />
<MainWrapper>
  <div class="w-full flex p-6">
    <section aria-label="questions" class="flex-1">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head>Question No.</Table.Head>
            <Table.Head class="max-w-360px">Title</Table.Head>
            <Table.Head>Difficulty</Table.Head>
            <Table.Head class="text-right">Tags</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {#each questions as question, i}
            <Table.Row>
              <Table.Cell class="font-medium">{i + 1}</Table.Cell>
              <Table.Cell>{question.title}</Table.Cell>
              <Table.Cell>{question.level}</Table.Cell>
              <Table.Cell class="text-right"></Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    </section>
    <section
      aria-label="right section"
      class="w-[300px] hidden md:block border border-separate"
    >
      Hey ads
    </section>
  </div>
</MainWrapper>
