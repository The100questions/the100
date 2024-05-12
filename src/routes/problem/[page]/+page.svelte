<script>
  export let data;
  const {question} = data ??{};
</script>

<div class="size-full p-3">
  <div class="size-full flex">
    <div class="flex-1 border rounded overflow-y-auto">
      <div>it is question {question?.title}</div>
      <div>it is question {question?.subTitle}</div>
      <div>it is question {question?.description}</div>
      <div class="h-[500px] bg-red-100">sdx
        </div>
        <div class="h-[500px] bg-red-200">sdx
        </div>

    </div>
    <div class="flex-1 border rounded">code editor</div>
  </div>
</div>
