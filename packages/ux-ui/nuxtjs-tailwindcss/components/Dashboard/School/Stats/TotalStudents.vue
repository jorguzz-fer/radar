<template>
  <div>
    <div class="flex items-center gap-[10px] md:gap-[15px]">
      <img src="@/assets/images/icons/graduation.svg" alt="graduation" />
      <div>
        <span class="block"> Total Students </span>
        <h5 class="!mb-0 mt-[2px] !text-[20px] !font-semibold">12,560</h5>
      </div>
    </div>
    <div class="mt-[15px] md:mt-[42px] flex items-center gap-[7px]">
      <div
        class="bg-success-100 dark:bg-[#15203c] text-success-700 rounded-[4px] w-[26px] h-[26px] flex items-center justify-center text-lg"
      >
        <i class="ri-arrow-right-up-line"></i>
      </div>
      <div class="text-gray-600 dark:text-gray-400">
        <span class="font-medium text-gray-700 dark:text-gray-400">+12%</span>
        last year
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalStudents",
});
</script>
