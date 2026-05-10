<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Properties By Country</h5>
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
      <div class="flex items-center justify-center min-h-[160px]">
        <img src="@/assets/images/map.svg" alt="map" />
      </div>

      <ul class="mt-[20px] md:mt-[25px]">
        <li
          v-for="country in countries"
          :key="country.id"
          class="flex items-center justify-between border-b first:border-t border-primary-50 dark:border-[#172036] py-[10px] md:py-[12px]"
        >
          <div class="flex items-center gap-[8px]">
            <img :src="country.flag" class="w-[24px]" :alt="country.name" />
            <span class="block font-medium">{{ country.name }}</span>
          </div>
          <div class="w-[150px]">
            <div class="leading-none flex items-center gap-[12px]">
              <div
                class="flex w-full h-[5px] overflow-hidden rounded-md"
                :class="getProgressBarBackground(country.percentage)"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden rounded-md"
                  :class="getProgressBarColor(country.percentage)"
                  :style="{ width: `${country.percentage}%` }"
                ></div>
              </div>
              <span class="block">{{ country.percentage }}%</span>
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

import flag1 from "@/assets/images/flags/portugal.svg";
import flag2 from "@/assets/images/flags/germany.svg";
import flag3 from "@/assets/images/flags/spain.svg";
import flag4 from "@/assets/images/flags/canada.svg";

interface CountryData {
  id: number;
  name: string;
  flag: string;
  percentage: number;
  properties: number;
  lastUpdated: Date;
}

export default defineComponent({
  name: "PropertiesByCountry",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const countries = ref<CountryData[]>([
      {
        id: 1,
        name: "Portugal",
        flag: flag1,
        percentage: 85,
        properties: 1245,
        lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 2),
      },
      {
        id: 2,
        name: "Germany",
        flag: flag2,
        percentage: 65,
        properties: 932,
        lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 5),
      },
      {
        id: 3,
        name: "Spain",
        flag: flag3,
        percentage: 45,
        properties: 721,
        lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24),
      },
      {
        id: 4,
        name: "Canada",
        flag: flag4,
        percentage: 75,
        properties: 1032,
        lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 12),
      },
    ]);

    // Color determination based on percentage
    const getProgressBarColor = (percentage: number) => {
      if (percentage >= 80) return "bg-success-500";
      if (percentage >= 60) return "bg-primary-500";
      if (percentage >= 40) return "bg-secondary-500";
      if (percentage >= 20) return "bg-warning-500";
      return "bg-danger-500";
    };

    const getProgressBarBackground = (percentage: number) => {
      if (percentage >= 80) return "bg-success-100 dark:bg-[#172036]";
      if (percentage >= 60) return "bg-primary-100 dark:bg-[#172036]";
      if (percentage >= 40) return "bg-secondary-100 dark:bg-[#172036]";
      if (percentage >= 20) return "bg-warning-100 dark:bg-[#172036]";
      return "bg-danger-100 dark:bg-[#172036]";
    };

    return {
      isActive,
      toggleActive,
      countries,
      getProgressBarColor,
      getProgressBarBackground,
    };
  },
});
</script>
