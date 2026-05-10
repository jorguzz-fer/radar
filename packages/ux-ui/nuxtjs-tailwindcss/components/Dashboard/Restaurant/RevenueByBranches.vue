<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Revenue by Branches</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative ltr:-mr-[7px] rtl:-ml-[7px]">
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
    </div>

    <div class="trezo-card-content">
      <div class="flex items-center justify-center min-h-[189px]">
        <div class="text-center">
          <img :src="mapImage" alt="map" />
        </div>
      </div>

      <ul class="mt-[20px] md:mt-[25px]">
        <li
          v-for="branch in branches"
          :key="branch.country"
          class="flex items-center justify-between border-b first:border-t border-primary-50 dark:border-[#172036] py-[10px] md:py-[12px]"
        >
          <div class="flex items-center gap-[8px]">
            <img
              :src="branch.flag"
              class="w-[24px]"
              :alt="branch.country.toLowerCase()"
            />
            <span class="block font-medium">{{ branch.country }}</span>
          </div>
          <div class="w-[150px]">
            <div class="leading-none flex items-center gap-[12px]">
              <div
                class="flex w-full h-[5px] overflow-hidden rounded-md bg-gray-100 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden rounded-md"
                  :class="getPercentageColor(branch.percentage)"
                  :style="{ width: `${branch.percentage}%` }"
                ></div>
              </div>
              <span class="block">{{ branch.percentage }}%</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import mapImage from "@/assets/images/map.svg";
import flagImage1 from "@/assets/images/flags/portugal.svg";
import flagImage2 from "@/assets/images/flags/germany.svg";
import flagImage3 from "@/assets/images/flags/spain.svg";
import flagImage4 from "@/assets/images/flags/canada.svg";
import flagImage5 from "@/assets/images/flags/usa.svg";

interface BranchData {
  flag: string;
  country: string;
  percentage: number;
}

export default defineComponent({
  name: "RevenueByBranches",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const timeFilters = ref([
      "This Day",
      "This Week",
      "This Month",
      "This Year",
    ]);

    const branches = ref<BranchData[]>([
      { flag: flagImage1, country: "Portugal", percentage: 90 },
      { flag: flagImage2, country: "Germany", percentage: 70 },
      { flag: flagImage3, country: "Spain", percentage: 40 },
      { flag: flagImage4, country: "Canada", percentage: 60 },
      { flag: flagImage5, country: "USA", percentage: 15 },
    ]);

    const getPercentageColor = (percentage: number) => {
      if (percentage >= 90) return "bg-success-500";
      if (percentage >= 60) return "bg-primary-500";
      if (percentage >= 30) return "bg-warning-500";
      return "bg-danger-500";
    };

    return {
      isActive,
      toggleActive,
      branches,
      mapImage,
      timeFilters,
      getPercentageColor,
    };
  },
});
</script>
