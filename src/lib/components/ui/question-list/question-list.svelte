<script lang="ts">
  import type { Question } from "../../../../types";
  import QuestionDifficulty from "./question-difficulty.svelte";
  import QuestionStatus from "./question-status.svelte";
  export let questions: Question[] = [];
</script>

<div>
  {#each questions as question}
    <a href={`/problem/${question.id}`}>
      <div
        class="flex items-center justify-center border rounded-lg p-4 bg-card"
      >
        <QuestionStatus />
        <div class="flex-1 px-4">
          <QuestionDifficulty level={question.level} />
          <div>
            {question.title}
          </div>
          <div>
            {question.subTitle}
          </div>
        </div>
        <div class="">Attempt</div>
      </div>
    </a>
  {/each}
</div>
