<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Payment Method</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="mb-[20px] mb-[25px] last:mb-0">
        <label class="mb-[10px] text-black dark:text-white font-medium block">
          Payment Card
        </label>
        <select
          class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
        >
          <option selected>Select</option>
          <option value="1">PayPal</option>
          <option value="2">Stax</option>
          <option value="3">Helcim</option>
          <option value="4">Square</option>
          <option value="5">Stripe</option>
        </select>
      </div>

      <div class="mb-[20px] mb-[25px] last:mb-0">
        <label class="mb-[10px] text-black dark:text-white font-medium block">
          Card Number
        </label>
        <input
          type="text"
          class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
          placeholder="E.g. 3588XXXXXXXXX"
        />
      </div>
      <div class="mb-[20px] mb-[25px] last:mb-0">
        <label class="mb-[10px] text-black dark:text-white font-medium block">
          Expiration Date
        </label>
        <input
          type="text"
          class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
          placeholder="E.g. MM / YY"
        />
      </div>
      <div class="mb-[20px] mb-[25px] last:mb-0">
        <label class="mb-[10px] text-black dark:text-white font-medium block">
          Security Code
        </label>
        <input
          type="text"
          class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
          placeholder="E.g. CVV"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaymentMethod",
});
</script>
