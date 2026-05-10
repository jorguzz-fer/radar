<template>
  <div class="market-price-statistics md:flex items-center justify-between">
    <div class="flex items-center">
      <img
        src="@/assets/images/cryptocurrencies/big-bitcoin.svg"
        alt="bitcoin"
      />
      <div class="ltr:ml-[10px] rtl:mr-[10px]">
        <span class="text-black dark:text-white uppercase font-medium">
          Bitcoin
          <span class="font-normal text-gray-500 dark:text-gray-400">
            (BTC)
          </span>
        </span>
        <h4 class="!mb-0 mt-[6px] !text-lg md:!text-[20px] !font-semibold">
          $27,500
          <span
            class="relative font-medium text-base text-success-700 -top-px ltr:ml-[2px] rtl:mr-[2px] ltr:pl-[24px] rtl:pr-[24px]"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 !text-[20px] top-1/2 -translate-y-1/2"
            >
              trending_up
            </i>
            +2.3%
          </span>
        </h4>
      </div>
    </div>
    <ul class="my-[15px] md:my-0">
      <li
        class="inline-block text-black dark:text-white font-semibold mx-[18px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
      >
        <span
          class="block text-gray-500 dark:text-gray-400 mb-[5px] font-normal"
        >
          Closing Price
        </span>
        $27,200
      </li>
      <li
        class="inline-block text-black dark:text-white font-semibold mx-[18px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
      >
        <span
          class="block text-gray-500 dark:text-gray-400 mb-[5px] font-normal"
        >
          24h Volume
        </span>
        $35B
      </li>
    </ul>
    <div class="trezo-card-dropdown relative ltr:-mr-[8px] rtl:-ml-[8px]">
      <button
        type="button"
        :class="{
          'trezo-card-dropdown-btn inline-block transition-all text-[22px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
          active: isActive,
        }"
        id="dropdownToggle"
        @click.stop="toggleActive"
      >
        <i class="ri-more-2-fill"></i>
      </button>
      <ul
        class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
      >
        <li>
          <button
            type="button"
            class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
          >
            This Day
          </button>
        </li>
        <li>
          <button
            type="button"
            class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
          >
            This Week
          </button>
        </li>
        <li>
          <button
            type="button"
            class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
          >
            This Month
          </button>
        </li>
        <li>
          <button
            type="button"
            class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
          >
            This Year
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "MarketPriceStatistics",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    return {
      isActive,
      toggleActive,
    };
  },
});
</script>
