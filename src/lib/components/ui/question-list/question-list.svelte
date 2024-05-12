<script lang="ts">
  import type { Question } from "../../../../types";
  import QuestionCard from "./question-card.svelte";
  export let questions: Question[] = [];
</script>

<div class="flex flex-col gap-2">
  {#each questions as question, index}
    <QuestionCard {question} {index} />
  {/each}
</div>
