<script lang="ts">



const fetchQuestions = async () => {
    const response = await fetch("/api/get-questions-list");
    const data = await response.json()
    return data;

}
const promise = fetchQuestions();

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="w-full bg-black text-bold">hey</div>


{#await promise}
	<p>Loading</p>
{:then questionList}
	{#each questionList as questions}
		
		<button class="w-1/2 p-4 border border-black rounded-sm">
			{questions.title}
		</button>
	{/each}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}