<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Top Products by Sales</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              {{ selectedTime }}
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
              ></i>
            </span>
          </button>
          <ul
            v-if="isActive"
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li v-for="time in timeRanges" :key="time">
              <button
                type="button"
                @click="selectTime(time)"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                {{ time }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <ul>
        <li
          v-for="product in filteredProducts"
          :key="product.id"
          class="flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[14px] mb-[15px] last:mb-0 last:pb-0 last:border-0"
        >
          <div class="flex items-center">
            <div
              :class="`text-${product.color}-500 bg-${product.color}-100 dark:bg-[#15203c] flex items-center justify-center w-[48px] h-[48px] ltr:mr-[15px] rtl:ml-[15px] rounded-sm`"
            >
              <i class="material-symbols-outlined">{{ product.icon }}</i>
            </div>
            <div>
              <NuxtLink
                to="/ecommerce/product-details"
                class="block mb-[2px] text-black dark:text-white font-medium transition-all hover:text-primary-500"
              >
                {{ product.name }}
              </NuxtLink>
              <span class="block"> {{ product.brand }} </span>
            </div>
          </div>
          <span class="block text-black dark:text-white font-medium">
            {{ product.sales }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "TopProductsBySales",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const selectedTime = ref("This Day");
    const timeRanges = ["This Day", "This Week", "This Month", "This Year"];

    const products = ref([
      {
        id: 1,
        name: "Samsung Galaxy",
        brand: "Samsung",
        sales: "$96,455",
        icon: "smartphone",
        color: "primary",
        timeRange: "This Day",
      },
      {
        id: 2,
        name: "iPhone 15 Plus",
        brand: "Apple Inc.",
        sales: "$89,670",
        icon: "tap_and_play",
        color: "purple",
        timeRange: "This Day",
      },
      {
        id: 3,
        name: "Vivo V30",
        brand: "Vivo Ltd.",
        sales: "$75,329",
        icon: "edgesensor_low",
        color: "danger",
        timeRange: "This Day",
      },
      {
        id: 4,
        name: "Watch Series 7",
        brand: "Apple",
        sales: "$98,256",
        icon: "watch",
        color: "success",
        timeRange: "This Day",
      },
      {
        id: 5,
        name: "Sony WF-SP800N",
        brand: "Sony",
        sales: "$65,987",
        icon: "headphones",
        color: "secondary",
        timeRange: "This Day",
      },
      {
        id: 6,
        name: "Samsung Galaxy S22",
        brand: "Samsung",
        sales: "$104,320",
        icon: "smartphone",
        color: "primary",
        timeRange: "This Week",
      },
      {
        id: 7,
        name: "iPhone 14 Pro",
        brand: "Apple Inc.",
        sales: "$92,450",
        icon: "tap_and_play",
        color: "purple",
        timeRange: "This Week",
      },
      {
        id: 8,
        name: "Oppo Reno 8",
        brand: "Oppo",
        sales: "$78,234",
        icon: "edgesensor_low",
        color: "danger",
        timeRange: "This Week",
      },
      {
        id: 9,
        name: "Fitbit Charge 5",
        brand: "Fitbit",
        sales: "$87,150",
        icon: "watch",
        color: "success",
        timeRange: "This Week",
      },
      {
        id: 10,
        name: "Bose QuietComfort",
        brand: "Bose",
        sales: "$70,890",
        icon: "headphones",
        color: "secondary",
        timeRange: "This Week",
      },
      {
        id: 11,
        name: "Vivo V30",
        brand: "Vivo Ltd.",
        sales: "$75,329",
        icon: "edgesensor_low",
        color: "danger",
        timeRange: "This Month",
      },
      {
        id: 12,
        name: "Watch Series 7",
        brand: "Apple",
        sales: "$98,256",
        icon: "watch",
        color: "success",
        timeRange: "This Month",
      },
      {
        id: 13,
        name: "Sony WF-SP800N",
        brand: "Sony",
        sales: "$65,987",
        icon: "headphones",
        color: "secondary",
        timeRange: "This Month",
      },
      {
        id: 14,
        name: "Samsung Galaxy S22",
        brand: "Samsung",
        sales: "$104,320",
        icon: "smartphone",
        color: "primary",
        timeRange: "This Month",
      },
      {
        id: 15,
        name: "iPhone 14 Pro",
        brand: "Apple Inc.",
        sales: "$92,450",
        icon: "tap_and_play",
        color: "purple",
        timeRange: "This Month",
      },
      {
        id: 16,
        name: "Vivo V30",
        brand: "Vivo Ltd.",
        sales: "$75,329",
        icon: "edgesensor_low",
        color: "danger",
        timeRange: "This Year",
      },
      {
        id: 17,
        name: "Watch Series 7",
        brand: "Apple",
        sales: "$98,256",
        icon: "watch",
        color: "success",
        timeRange: "This Year",
      },
      {
        id: 18,
        name: "Sony WF-SP800N",
        brand: "Sony",
        sales: "$65,987",
        icon: "headphones",
        color: "secondary",
        timeRange: "This Year",
      },
      {
        id: 19,
        name: "Samsung Galaxy S22",
        brand: "Samsung",
        sales: "$104,320",
        icon: "smartphone",
        color: "primary",
        timeRange: "This Year",
      },
      {
        id: 20,
        name: "iPhone 14 Pro",
        brand: "Apple Inc.",
        sales: "$92,450",
        icon: "tap_and_play",
        color: "purple",
        timeRange: "This Year",
      },
    ]);

    const filteredProducts = computed(() =>
      products.value.filter(
        (product) => product.timeRange === selectedTime.value
      )
    );

    const selectTime = (time: string) => {
      selectedTime.value = time;
      toggleActive();
    };

    return {
      isActive,
      toggleActive,
      selectedTime,
      timeRanges,
      filteredProducts,
      selectTime,
    };
  },
});
</script>
