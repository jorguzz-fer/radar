<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title flex items-center">
        <img src="@/assets/images/sellers/seller1.png" alt="seller-image" />
        <div class="ltr:ml-[15px] rtl:mr-[15px]">
          <span
            class="text-md block mb-[2px] font-medium text-black dark:text-white"
          >
            Ava Turner
          </span>
          <span class="block"> turner@trezo.com </span>
        </div>
      </div>

      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all text-[26px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <i class="ri-more-fill"></i>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Block
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Delete
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Report
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="trezo-card-content">
      <ul>
        <li class="text-black dark:text-white mb-[10px] last:mb-0">
          <span class="text-gray-500 dark:text-gray-400">
            Last Sale Date:
          </span>
          25 Nov 2025
        </li>
        <li class="text-black dark:text-white mb-[10px] last:mb-0">
          <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
          50
        </li>
        <li class="text-black dark:text-white mb-[10px] last:mb-0">
          <span class="text-gray-500 dark:text-gray-400">
            Wallet Balance:
          </span>
          $9,999.50
        </li>
        <li class="text-black dark:text-white mb-[10px] last:mb-0">
          <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
          $5,999.50
        </li>
        <li class="text-black dark:text-white mb-[10px] last:mb-0">
          <span class="text-gray-500 dark:text-gray-400"> Store: </span>
          TechMaster Store
        </li>
      </ul>
      <form class="mt-[20px]">
        <label class="mb-[10px] text-black dark:text-white font-medium block">
          Contact Support
        </label>
        <textarea
          class="h-[140px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] p-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
          placeholder="Type here...."
        ></textarea>
        <button
          type="button"
          class="mt-[15px] font-medium inline-block transition-all rounded-md md:text-md py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-primary-500 text-white hover:bg-primary-400"
        >
          <span class="inline-block relative ltr:pl-[29px] rtl:pr-[29px]">
            <i
              class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2"
            >
              send
            </i>
            Send Message
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "SellerID",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    return {
      isActive,
      toggleActive,
    };
  },
});
</script>
