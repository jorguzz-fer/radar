<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Shipping Details</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <ul>
        <li class="mb-[12px] last:mb-0">
          <span class="text-black dark:text-white font-medium">
            Shipping Date:
          </span>
          25 Nov 2025 10:30 AM
        </li>
        <li class="mb-[12px] last:mb-0">
          <span class="text-black dark:text-white font-medium"> Email: </span>
          example@trezo.com
        </li>
        <li class="mb-[12px] last:mb-0">
          <span class="text-black dark:text-white font-medium"> Phone: </span>
          +1 444 333 5566
        </li>
        <li class="mb-[12px] last:mb-0">
          <span class="text-black dark:text-white font-medium"> Address: </span>
          789 Pine St, Villageton, England
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShippingDetails",
});
</script>
