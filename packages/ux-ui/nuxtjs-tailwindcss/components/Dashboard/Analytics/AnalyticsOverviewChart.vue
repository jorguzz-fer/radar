<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Analytics Overview</h5>
      </div>
      <div class="trezo-card-subtitle mt-[13px] sm:mt-0">
        <button
          type="button"
          class="inline-block border border-gray-100 dark:border-[#172036] px-[15.5px] py-[1.5px] transition-all hover:bg-primary-50 dark:hover:bg-[#15203c] -mx-[3px] ltr:first:rounded-l-md rtl:first:rounded-r-lg ltr:last:rounded-r-md rtl:last:rounded-l-md"
        >
          Day
        </button>
        <button
          type="button"
          class="inline-block border border-gray-100 dark:border-[#172036] px-[15.5px] py-[1.5px] transition-all bg-primary-50 dark:bg-[#15203c] hover:bg-primary-50 dark:hover:bg-[#15203c] -mx-[3px] ltr:first:rounded-l-md rtl:first:rounded-r-lg ltr:last:rounded-r-md rtl:last:rounded-l-md"
        >
          Week
        </button>
        <button
          type="button"
          class="inline-block border border-gray-100 dark:border-[#172036] px-[15.5px] py-[1.5px] transition-all hover:bg-primary-50 dark:hover:bg-[#15203c] -mx-[3px] ltr:first:rounded-l-md rtl:first:rounded-r-lg ltr:last:rounded-r-md rtl:last:rounded-l-md"
        >
          Month
        </button>
      </div>
    </div>
    <div class="trezo-card-content -mt-[9px] sm:-mt-[17px] md:-mt-[22px]">
      <p class="text-xs">Track, Analyze, and Optimize Performance</p>
      <div class="lg:grid lg:grid-cols-3 gap-[25px]">
        <div class="lg:col-span-2">
          <div class="-mb-[18px] ltr:-ml-[15px] rtl:-mr-[15px]">
            <apexchart
              v-if="isClient"
              type="bar"
              height="350"
              :options="analyticsOverview"
              :series="analytics"
            ></apexchart>
          </div>
        </div>
        <div class="lg:col-span-1">
          <ul
            class="mt-[15px] md:mt-[19px] lg:ltr:-ml-[22px] lg:rtl:-mr-[22px]"
          >
            <li class="mb-[24px] last:mb-0">
              <div class="flex justify-between">
                <div>
                  <span
                    class="block text-xs mb-[2px] text-black dark:text-white"
                  >
                    New Users
                  </span>
                  <h5 class="!text-md !mb-0">19.5k</h5>
                </div>
                <div>
                  <span
                    class="block text-xs mb-[2px] text-black dark:text-white"
                  >
                    Goal Reached
                  </span>
                  <h5
                    class="!text-md !mb-0 !text-gray-500 dark:!text-gray-400 ltr:text-right rtl:text-left"
                  >
                    75%
                  </h5>
                </div>
              </div>
              <div
                class="mt-[11px] flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                  style="width: 75%"
                ></div>
              </div>
            </li>
            <li class="mb-[24px] last:mb-0">
              <div class="flex justify-between">
                <div>
                  <span
                    class="block text-xs mb-[2px] text-black dark:text-white"
                  >
                    Page Views
                  </span>
                  <h5 class="!text-md !mb-0">48k</h5>
                </div>
                <div>
                  <span
                    class="block text-xs mb-[2px] text-black dark:text-white"
                  >
                    Goal Reached
                  </span>
                  <h5
                    class="!text-md !mb-0 !text-gray-500 dark:!text-gray-400 ltr:text-right rtl:text-left"
                  >
                    45%
                  </h5>
                </div>
              </div>
              <div
                class="mt-[11px] flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-purple-500 rounded-md"
                  style="width: 45%"
                ></div>
              </div>
            </li>
            <li class="mb-[24px] last:mb-0">
              <div class="flex justify-between">
                <div>
                  <span
                    class="block text-xs mb-[2px] text-black dark:text-white"
                  >
                    Page Sessions
                  </span>
                  <h5 class="!text-md !mb-0">33.3k</h5>
                </div>
                <div>
                  <span
                    class="block text-xs mb-[2px] text-black dark:text-white"
                  >
                    Goal Reached
                  </span>
                  <h5
                    class="!text-md !mb-0 !text-gray-500 dark:!text-gray-400 ltr:text-right rtl:text-left"
                  >
                    55%
                  </h5>
                </div>
              </div>
              <div
                class="mt-[11px] flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-secondary-500 rounded-md"
                  style="width: 55%"
                ></div>
              </div>
            </li>
            <li class="mb-[24px] last:mb-0">
              <div class="flex justify-between">
                <div>
                  <span
                    class="block text-xs mb-[2px] text-black dark:text-white"
                  >
                    Bounce Rate
                  </span>
                  <h5 class="!text-md !mb-0">22.45%</h5>
                </div>
                <div>
                  <span
                    class="block text-xs mb-[2px] text-black dark:text-white"
                  >
                    Goal Reached
                  </span>
                  <h5
                    class="!text-md !mb-0 !text-gray-500 dark:!text-gray-400 ltr:text-right rtl:text-left"
                  >
                    35%
                  </h5>
                </div>
              </div>
              <div
                class="mt-[11px] flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-danger-500 rounded-md"
                  style="width: 35%"
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AnalyticsOverviewChart",
  setup() {
    const isClient = ref(false);
    const analytics = ref([
      {
        name: "New users",
        data: [28, 50, 90, 95, 20, 70, 35],
      },
      {
        name: "Page Views",
        data: [80, 60, 70, 30, 45, 20, 80],
      },
      {
        name: "Page Sessions",
        data: [32, 23, 78, 35, 65, 35, 15],
      },
      {
        name: "Bounce Rate",
        data: [60, 25, 80, 25, 15, 40, 15],
      },
    ]);
    const analyticsOverview = ref({
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#AD63F6", "#3584FC", "#FD5812"],
      plotOptions: {
        bar: {
          columnWidth: "65%",
          borderRadius: 4,
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 100,
        min: 0,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      analytics,
      analyticsOverview,
    };
  },
});
</script>
