<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Top Selling Items</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md bg-[#f5f7f8] dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-100 dark:hover:bg-dark': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              {{ selectedTimeRange }}
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"
              ></i>
            </span>
          </button>

          <ul
            v-if="isActive"
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li v-for="range in timeRanges" :key="range">
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                @click="selectTimeRange(range)"
              >
                {{ range }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[25px]">
        <div
          v-for="product in topSellingProducts"
          :key="product.id"
          class="relative"
        >
          <div
            class="bg-[#212529] rounded-[30px] absolute top-[3px] ltr:right-[3px] rtl:left-[3px] py-[5px] px-[5px] flex items-center leading-none gap-[2px] text-white gap-[3px]"
          >
            <i class="ri-star-fill text-orange-500"></i>
            <span class="block relative top-px text-xs font-semibold">
              {{ product.rating }}
            </span>
          </div>
          <NuxtLink
            to="/ecommerce/product-details"
            class="block rounded-md mb-[15px] h-[137px] bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${product.image})` }"
          ></NuxtLink>
          <h6 class="!mb-[4px] !font-semibold !text-base">
            <NuxtLink
              to="/ecommerce/product-details"
              class="transition-all hover:text-primary-500"
            >
              {{ product.name }}
            </NuxtLink>
          </h6>
          <span class="block text-xs">{{ product.sold }} sold</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/products/product28.jpg";
import image2 from "@/assets/images/products/product29.jpg";
import image3 from "@/assets/images/products/product30.jpg";
import image4 from "@/assets/images/products/product31.jpg";

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  sold: number;
  timeRangeData: {
    weekly: number;
    monthly: number;
    yearly: number;
  };
}

export default defineComponent({
  name: "TopSellingItems",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    // Time range selection
    const timeRanges = ["Weekly", "Monthly", "Yearly"];
    const selectedTimeRange = ref("Weekly");

    const selectTimeRange = (range: string) => {
      selectedTimeRange.value = range;
      toggleActive();
    };

    // Sample product data
    const products = ref<Product[]>([
      {
        id: 1,
        name: "Thai Bean Soup",
        image: image1,
        rating: 5.0,
        sold: 1235,
        timeRangeData: {
          weekly: 1235,
          monthly: 4532,
          yearly: 25489,
        },
      },
      {
        id: 2,
        name: "Meat Lasagnia",
        image: image2,
        rating: 4.8,
        sold: 1045,
        timeRangeData: {
          weekly: 1045,
          monthly: 3892,
          yearly: 21876,
        },
      },
      {
        id: 3,
        name: "Veg Sandwich",
        image: image3,
        rating: 4.9,
        sold: 1015,
        timeRangeData: {
          weekly: 1015,
          monthly: 3765,
          yearly: 20145,
        },
      },
      {
        id: 4,
        name: "Creamy Fish",
        image: image4,
        rating: 4.7,
        sold: 996,
        timeRangeData: {
          weekly: 996,
          monthly: 3542,
          yearly: 18932,
        },
      },
    ]);

    // Get top selling products based on selected time range
    const topSellingProducts = computed(() => {
      return products.value
        .map((product: { timeRangeData: { [x: string]: any } }) => ({
          ...product,
          sold: product.timeRangeData[
            selectedTimeRange.value.toLowerCase() as keyof typeof product.timeRangeData
          ],
        }))
        .sort((a: { sold: number }, b: { sold: number }) => b.sold - a.sold);
    });

    return {
      isActive,
      toggleActive,
      timeRanges,
      selectedTimeRange,
      selectTimeRange,
      topSellingProducts,
    };
  },
});
</script>
