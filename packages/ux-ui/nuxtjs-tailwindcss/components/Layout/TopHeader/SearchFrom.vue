<template>
  <form class="relative w-[250px] lg:w-[260px]">
    <input
      type="text"
      placeholder="Search here....."
      class="bg-gray-50 border border-gray-50 h-[44px] rounded-md w-full block text-black pt-[11px] pb-[12px] px-[13px] md:px-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
    />
    <button
      type="button"
      class="absolute text-primary-500 mt-[2px] ltr:right-[13px] ltr:md:right-[15px] rtl:left-[13px] rtl:md:left-[15px] top-1/2 -translate-y-1/2"
    >
      <i class="material-symbols-outlined !text-[20px]"> search </i>
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchFrom",
});
</script>
