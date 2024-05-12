<script lang="ts">
  import MainWrapper from "$lib/components/ui/MainWrapper.svelte";
  import QuestionList from "$lib/components/ui/question-list/question-list.svelte";

  export let data;

  const { questions = [] } = data ?? {};
</script>

<MainWrapper>
  <div class="w-full flex p-0 flex-col sm:p-6 sm:flex-row">
    <section aria-label="questions" class="flex-1">
      <QuestionList {questions} />
    </section>
    <!-- <section
      aria-label="right section"
      class="w-[300px] hidden md:block border border-separate"
    >
      Hey ads
    </section> -->
  </div>
</MainWrapper>
