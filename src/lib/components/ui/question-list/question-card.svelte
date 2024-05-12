<script lang="ts">
  import { PaperPlane } from "svelte-radix";
  import type { Question } from "../../../../types";
  import Button from "../button/button.svelte";
  import QuestionDifficulty from "./question-difficulty.svelte";
  import QuestionStatus from "./question-status.svelte";

  export let question: Question;
  export let index;
</script>

<a href={`/problem/${question.id}`}>
  <div
    class="flex items-center justify-center border-b sm:border sm:rounded-lg p-4 shadow"
  >
    <QuestionStatus />
    <div class="flex-1 px-4 overflow-hidden">
      <div class="opacity-90 text-sm font-semibold">
        {question.id}
      </div>
      <div class="opacity-70 text-md mb-4">
        {index + 1}. {question.title}
      </div>
      <QuestionDifficulty level={question.level} />
    </div>
    <Button variant="outline" class="">
      <PaperPlane size={16} />
    </Button>
  </div>
</a>
