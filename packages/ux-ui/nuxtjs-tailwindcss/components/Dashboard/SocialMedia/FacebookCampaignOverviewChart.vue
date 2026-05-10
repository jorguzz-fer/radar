<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title mb-[10px] sm:mb-0">
        <h5 class="!mb-[3px] md:!mb-0 !text-lg md:!text-[20px]">
          Facebook Campaign Overview
        </h5>
        <p>Track campaign success at a glance!</p>
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
              This Week
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
      <span
        class="font-medium md:text-md relative ltr:pl-[22px] rtl:pr-[22px] text-black dark:text-white"
      >
        <i
          class="ri-bookmark-line absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-danger-500 text-lg"
        ></i>
        Summer Sale Boost
      </span>
      <div class="relative">
        <div
          class="ltr:-ml-[15px] rtl:-mr-[15px] -mb-[25px] mt-[5px] ltr:md:pr-[150px] rtl:md:pl-[150px]"
        >
          <apexchart
            v-if="isClient"
            type="line"
            height="297"
            :options="facebookCampaignOverview"
            :series="campaignOverview"
          ></apexchart>
        </div>
        <div
          class="mt-[20px] md:mt-0 md:absolute ltr:right-0 rtl:left-0 md:top-1/2 md:-translate-y-1/2"
        >
          <div class="flex gap-[9px] mb-[20px] md:mb-[25px] last:mb-0">
            <div class="bg-primary-500 w-[10px] h-[10px] rounded-full"></div>
            <div>
              <span
                class="block font-medium text-black dark:text-white -mt-[5.3px]"
              >
                45,000
              </span>
              <span class="block text-xs"> Impressions </span>
            </div>
          </div>
          <div class="flex gap-[9px] mb-[20px] md:mb-[25px] last:mb-0">
            <div class="bg-success-500 w-[10px] h-[10px] rounded-full"></div>
            <div>
              <span
                class="block font-medium text-black dark:text-white -mt-[5.3px]"
              >
                4,200
              </span>
              <span class="block text-xs"> Clicks </span>
            </div>
          </div>
          <div class="flex gap-[9px] mb-[20px] md:mb-[25px] last:mb-0">
            <div class="bg-orange-500 w-[10px] h-[10px] rounded-full"></div>
            <div>
              <span
                class="block font-medium text-black dark:text-white -mt-[5.3px]"
              >
                9.3%
              </span>
              <span class="block text-xs"> CTR </span>
            </div>
          </div>
          <div class="flex gap-[9px] mb-[20px] md:mb-[25px] last:mb-0">
            <div class="bg-purple-500 w-[10px] h-[10px] rounded-full"></div>
            <div>
              <span
                class="block font-medium text-black dark:text-white -mt-[5.3px]"
              >
                $5.50
              </span>
              <span class="block text-xs"> Cost Per Conversion </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "FacebookCampaignOverviewChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const campaignOverview = ref([
      {
        name: "Impressions",
        type: "column",
        data: [400, 600, 200, 700, 480, 380, 600],
      },
      {
        name: "Clicks",
        type: "column",
        data: [500, 420, 520, 570, 300, 400, 180],
      },
      {
        name: "CTR",
        type: "column",
        data: [450, 400, 330, 300, 410, 530, 380],
      },
      {
        name: "Cost Per Conversion",
        type: "line",
        data: [480, 650, 500, 800, 550, 800, 900],
      },
    ]);

    const facebookCampaignOverview = ref({
      chart: {
        height: 297,
        type: "line",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#37D80A", "#FD5812", "#BF85FB"],
      stroke: {
        width: [5, 5, 5, 2],
        curve: "smooth",
        colors: ["transparent", "transparent", "transparent", "#BF85FB"],
      },
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 3,
        },
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        axisTicks: {
          show: false,
          color: "#64748B",
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 1000,
        min: 0,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
          formatter: function (val: string) {
            return "$" + val;
          },
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        axisTicks: {
          show: false,
          color: "#D5D9E2",
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: number) {
            if (typeof y !== "undefined") {
              return y.toFixed(0);
            }
            return y;
          },
        },
      },
      legend: {
        show: false,
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
          size: 6,
          offsetX: -2,
          offsetY: -0.5,
          shape: "circle",
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
        strokeDashArray: 8,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      isActive,
      toggleActive,
      campaignOverview,
      facebookCampaignOverview,
    };
  },
});
</script>
