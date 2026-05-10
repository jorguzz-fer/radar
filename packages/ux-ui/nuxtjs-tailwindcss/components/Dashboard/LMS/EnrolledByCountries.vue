<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Enrolled by Countries</h5>
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
      <ul class="mt-[24px]">
        <li class="flex items-center mb-[15px] last:mb-0">
          <div class="shrink-0 ltr:mr-[15px] rtl:ml-[15px]">
            <img
              src="@/assets/images/flags/usa.svg"
              class="inline-block"
              alt="usa"
            />
          </div>
          <div class="grow">
            <span class="block font-medium mb-[2px]"> United States </span>
            <div class="leading-none flex items-center">
              <div
                class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                  style="width: 85%"
                ></div>
              </div>
              <span class="block ltr:ml-[15px] rtl:mr-[15px]"> 85% </span>
            </div>
          </div>
        </li>
        <li class="flex items-center mb-[15px] last:mb-0">
          <div class="shrink-0 ltr:mr-[15px] rtl:ml-[15px]">
            <img
              src="@/assets/images/flags/germany.svg"
              class="inline-block"
              alt="germany"
            />
          </div>
          <div class="grow">
            <span class="block font-medium mb-[2px]"> Germany </span>
            <div class="leading-none flex items-center">
              <div
                class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                  style="width: 75%"
                ></div>
              </div>
              <span class="block ltr:ml-[15px] rtl:mr-[15px]"> 75% </span>
            </div>
          </div>
        </li>
        <li class="flex items-center mb-[15px] last:mb-0">
          <div class="shrink-0 ltr:mr-[15px] rtl:ml-[15px]">
            <img
              src="@/assets/images/flags/uk.svg"
              class="inline-block"
              alt="uk"
            />
          </div>
          <div class="grow">
            <span class="block font-medium mb-[2px]"> United Kingdom </span>
            <div class="leading-none flex items-center">
              <div
                class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                  style="width: 40%"
                ></div>
              </div>
              <span class="block ltr:ml-[15px] rtl:mr-[15px]"> 40% </span>
            </div>
          </div>
        </li>
        <li class="flex items-center mb-[15px] last:mb-0">
          <div class="shrink-0 ltr:mr-[15px] rtl:ml-[15px]">
            <img
              src="@/assets/images/flags/canada.svg"
              class="inline-block"
              alt="canada"
            />
          </div>
          <div class="grow">
            <span class="block font-medium mb-[2px]"> Canada </span>
            <div class="leading-none flex items-center">
              <div
                class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                  style="width: 10%"
                ></div>
              </div>
              <span class="block ltr:ml-[15px] rtl:mr-[15px]"> 10% </span>
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

export default defineComponent({
  name: "EnrolledByCountries",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    return {
      isActive,
      toggleActive,
    };
  },
});
</script>
