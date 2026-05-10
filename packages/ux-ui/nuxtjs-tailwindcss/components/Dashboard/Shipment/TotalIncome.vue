<template>
  <div
    class="trezo-card p-[20px] md:p-[25px] rounded-md"
    style="background: linear-gradient(108deg, #3a4252 0%, #23272e 100%)"
  >
    <div class="trezo-card-content">
      <div class="flex justify-between">
        <div>
          <span
            class="inline-block px-[8.5px] text-success-600 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px] text-xs"
          >
            +30%
          </span>
        </div>
        <div class="ltr:text-right rtl:text-left">
          <span class="block text-gray-300 text-xs mb-px"> Last 30 days </span>
          <span class="block font-bold text-success-500 text-xs">
            $13,250
          </span>
        </div>
      </div>
      <div class="mt-[20px] md:mt-[25px] flex items-end justify-between">
        <div>
          <span class="block mb-[4px] text-gray-300"> Total Revenue </span>
          <h3 class="!mb-0 !text-[20px] !text-white">$99,590</h3>
        </div>
        <div
          class="w-[55px] lg:w-[60px] h-[55px] lg:h-[60px] flex items-center justify-center rounded-full text-white bg-success-500"
        >
          <i class="material-symbols-outlined !text-[28px]"> attach_money </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalIncome",
});
</script>
