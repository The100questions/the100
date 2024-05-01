<script lang="ts">
  import * as Table from "$lib/components/ui/table";
  export let data;
  const { questions } = data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<div class="w-full bg-black text-bold">hey</div>

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.Head class="w-[100px]">Question No.</Table.Head>
      <Table.Head>Title</Table.Head>
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
