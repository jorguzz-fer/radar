<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px] last:mb-0"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Create Post</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <textarea
        class="h-[140px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] p-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
        placeholder="It makes me feel..."
      ></textarea>

      <div class="sm:flex items-center mt-[20px] md:mt-[25px] gap-[25px]">
        <button
          type="button"
          class="font-medium inline-block transition-all rounded-md md:text-md py-[10px] md:py-[12px] px-[20px] md:px-[27px] bg-primary-500 text-white hover:bg-primary-400"
        >
          <span class="inline-block relative ltr:pl-[29px] rtl:pr-[29px]">
            <i
              class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-[20px]"
            >
              send
            </i>
            Publish Post
          </span>
        </button>

        <div class="flex items-center gap-[15px] mt-[15px] sm:mt-0">
          <button type="button" class="transition-all hover:text-primary-500">
            <i class="material-symbols-outlined !text-[20px]">
              sentiment_satisfied
            </i>
          </button>
          <button type="button" class="transition-all hover:text-primary-500">
            <i class="material-symbols-outlined !text-[20px]"> attach_file </i>
          </button>
          <button type="button" class="transition-all hover:text-primary-500">
            <i class="material-symbols-outlined !text-[20px]"> mic_none </i>
          </button>
          <button type="button" class="transition-all hover:text-primary-500">
            <i class="material-symbols-outlined !text-[20px]"> image </i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
};
</script>
