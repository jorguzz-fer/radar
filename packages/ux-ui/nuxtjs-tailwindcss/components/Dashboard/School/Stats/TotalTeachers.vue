<template>
  <div class="ltr:md:pl-[20px] rtl:md:pr-[20px]">
    <div class="flex items-center gap-[10px] md:gap-[15px]">
      <img src="@/assets/images/icons/teacher.svg" alt="teacher" />
      <div>
        <span class="block"> Total Teachers </span>
        <h5 class="!mb-0 mt-[2px] !text-[20px] !font-semibold">780</h5>
      </div>
    </div>
    <div class="mt-[15px] md:mt-[42px] flex items-center gap-[7px]">
      <div
        class="bg-danger-100 text-danger-700 rounded-[4px] w-[26px] h-[26px] flex items-center justify-center text-[18px]"
      >
        <i class="ri-arrow-right-down-line"></i>
      </div>
      <div class="text-gray-600 dark:text-gray-400">
        <span class="font-medium text-gray-700 dark:text-gray-400">-10%</span>
        last year
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalTeachers",
});
</script>
