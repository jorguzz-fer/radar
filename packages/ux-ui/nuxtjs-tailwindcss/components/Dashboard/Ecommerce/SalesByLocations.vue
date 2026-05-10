<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Sales by Locations</h5>
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
        <div class="text-center">
          <img src="@/assets/images/map.svg" alt="map" />
        </div>
      </div>
      <ul class="mt-[20px]">
        <li
          class="flex items-center mb-[15px] last:mb-0"
          v-for="(country, index) in countries"
          :key="index"
        >
          <div class="shrink-0 ltr:mr-[15px] rtl:ml-[15px]">
            <img
              :src="country.image"
              class="inline-block"
              :alt="country.name"
            />
          </div>
          <div class="grow">
            <span class="block font-medium mb-[2px]">
              {{ country.name }}
            </span>
            <div class="leading-none flex items-center">
              <div
                class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                  :style="{ width: country.progress + '%' }"
                ></div>
              </div>
              <span class="block ltr:ml-[15px] rtl:mr-[15px]">
                {{ country.progress }}%
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/flags/usa.svg";
import image2 from "@/assets/images/flags/germany.svg";
import image3 from "@/assets/images/flags/uk.svg";
import image4 from "@/assets/images/flags/canada.svg";
import image5 from "@/assets/images/flags/portugal.svg";
import image6 from "@/assets/images/flags/spain.svg";

export default defineComponent({
  name: "SalesByLocations",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const countries = [
      {
        name: "United States",
        image: image1,
        progress: 85,
      },
      {
        name: "Germany",
        image: image2,
        progress: 75,
      },
      {
        name: "United Kingdom",
        image: image3,
        progress: 40,
      },
      {
        name: "Canada",
        image: image4,
        progress: 10,
      },
      {
        name: "Portugal",
        image: image5,
        progress: 5,
      },
      {
        name: "Spain",
        image: image6,
        progress: 15,
      },
    ];

    return {
      isActive,
      toggleActive,
      countries,
    };
  },
});
</script>
