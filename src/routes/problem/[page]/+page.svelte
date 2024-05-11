<script>
  export let data;
  console.log(data);
</script>

<div class="h-full w-full border-2 border-black overflow-hidden">
  <div class="flex h-full w-full">
    <div class="flex-1">
      <div>it is question {data?.question?.title}</div>
      <div>it is question {data?.question?.subTitle}</div>
      <div>it is question {data?.question?.description}</div>
    </div>
    <div class="flex-1">code editor</div>
  </div>
</div>
