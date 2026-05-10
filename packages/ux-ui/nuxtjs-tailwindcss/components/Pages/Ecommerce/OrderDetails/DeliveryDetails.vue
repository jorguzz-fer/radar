<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Delivery Details</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <ul>
        <li class="mb-[12px] last:mb-0">
          <span class="text-black dark:text-white font-medium">
            XYZ Delivery
          </span>
        </li>
        <li class="mb-[12px] last:mb-0">
          <span class="text-black dark:text-white font-medium">
            Order ID:
          </span>
          XXXXXX1004
        </li>
        <li class="mb-[12px] last:mb-0">
          <span class="text-black dark:text-white font-medium">
            Payment Method:
          </span>
          Master Card
        </li>
        <li class="mb-[12px] last:mb-0">
          <span class="text-black dark:text-white font-medium"> Email: </span>
          example@trezo.com
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DeliveryDetails",
});
</script>
