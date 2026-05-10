<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Order Summary</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Today
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
              ></i>
            </span>
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
      <apexchart
        v-if="isClient"
        type="donut"
        height="285"
        :options="orderSummary"
        :series="summary"
      ></apexchart>

      <ul class="-mt-[4px]">
        <li class="mb-[10px] md:mb-[12px] last:mb-0">
          <span class="block font-medium mb-[2px] md:mb-[4px]">
            Completed Order
          </span>
          <div class="leading-none flex items-center">
            <div
              class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
            >
              <div
                class="flex flex-col justify-center overflow-hidden bg-success-500 rounded-md"
                style="width: 60%"
              ></div>
            </div>
            <span class="block ml-[15px]"> 60% </span>
          </div>
        </li>
        <li class="mb-[10px] md:mb-[12px] last:mb-0">
          <span class="block font-medium mb-[2px] md:mb-[4px]">
            New Order
          </span>
          <div class="leading-none flex items-center">
            <div
              class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
            >
              <div
                class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                style="width: 30%"
              ></div>
            </div>
            <span class="block ml-[15px]"> 30% </span>
          </div>
        </li>
        <li class="mb-[10px] md:mb-[12px] last:mb-0">
          <span class="block font-medium mb-[2px] md:mb-[4px]">
            Pending Order
          </span>
          <div class="leading-none flex items-center">
            <div
              class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
            >
              <div
                class="flex flex-col justify-center overflow-hidden bg-purple-500 rounded-md"
                style="width: 10%"
              ></div>
            </div>
            <span class="block ml-[15px]"> 10% </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "OrderSummaryChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const summary = ref([60, 30, 10]);
    const orderSummary = ref({
      chart: {
        height: 285,
        type: "donut",
      },
      labels: ["Completed", "New Order", "Pending"],
      colors: ["#37D80A", "#605DFF", "#AD63F6"],
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
      dataLabels: {
        enabled: false,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      summary,
      orderSummary,
      isActive,
      toggleActive,
    };
  },
});
</script>
