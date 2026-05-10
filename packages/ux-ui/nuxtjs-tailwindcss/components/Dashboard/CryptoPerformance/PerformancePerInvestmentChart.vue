<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Performance Per Investment</h5>
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
              Last Month
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
                Last Day
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Last Week
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Last Month
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Last Year
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="-mt-[15px] -mb-[15px]">
        <apexchart
          v-if="isClient"
          type="rangeBar"
          height="410"
          :options="marketSentimentIndicator"
          :series="sentimentIndicator"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "PerformancePerInvestmentChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    // Make chart data non-reactive by using a simple array
    const sentimentIndicator = [
      {
        name: "Coin",
        data: [
          { x: "Bitcoin", y: [8, 2] },
          { x: "Ethereum", y: [5, 3] },
          { x: "Solana", y: [4, 8] },
          { x: "Tether", y: [3, 5] },
          { x: "USDC", y: [2, 5] },
          { x: "XRP", y: [1, 2] },
        ],
      },
    ];

    // Freeze chart options to prevent reactivity issues
    const marketSentimentIndicator = {
      chart: {
        type: "rangeBar",
        height: 410,
        toolbar: {
          show: false,
        },
      },
      colors: ["#3584FC"],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: string) {
          return val + "%";
        },
        style: {
          fontSize: "12px",
          fontWeight: "400",
        },
      },
      legend: {
        show: false,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 10,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 6,
          offsetX: -2,
          offsetY: -0.5,
          shape: "square",
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      xaxis: {
        axisTicks: {
          show: true,
          color: "#64748B",
        },
        axisBorder: {
          show: true,
          color: "#64748B",
        },
        labels: {
          show: true,
          style: {
            colors: "#3A4252",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        min: 0,
        labels: {
          style: {
            colors: "#3A4252",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#64748B",
        },
        axisTicks: {
          show: false,
          color: "#64748B",
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isActive,
      toggleActive,
      isClient,
      sentimentIndicator,
      marketSentimentIndicator,
    };
  },
});
</script>
