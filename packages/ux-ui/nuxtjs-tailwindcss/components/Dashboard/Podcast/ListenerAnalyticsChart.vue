<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Listener Analytics</h5>
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
              This Day
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

    <div class="trezo-card-content relative">
      <div class="-ml-[15px] md:-mb-[25px]">
        <div id="podcastListenerAnalyticsChart"></div>
        <apexchart
          v-if="isClient"
          type="bar"
          height="360"
          :options="listenerAnalytics"
          :series="analytics"
        ></apexchart>
      </div>
      <div class="top-0 right-0 md:absolute md:max-w-[240px]">
        <div id="podcastListenerAnalyticsChart2"></div>
        <apexchart
          v-if="isClient"
          type="donut"
          height="80"
          :options="listenerAnalytics2"
          :series="analytics2"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "ListenerAnalyticsChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const analytics = ref([
      {
        name: "Men",
        data: [50, 22, 25, 35, 20],
      },
      {
        name: "Women",
        data: [20, 30, 18, 42, 15],
      },
    ]);
    const analytics2 = ref([75, 25]);

    const listenerAnalytics = ref({
      chart: {
        type: "bar",
        height: 360,
        toolbar: {
          show: false,
        },
      },
      colors: ["#9747FF", "#9CAAFF"],
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: "35%",
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 5,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["18-24", "25-34", "35-44", "45-54", "55-64"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
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
        // min: 0,
        // max: 60,
        tickAmount: 3,
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
          formatter: (val: string) => {
            return val + "%";
          },
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
        itemMargin: {
          horizontal: 8,
          vertical: 35,
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
        strokeDashArray: 10,
        borderColor: "#ECEEF2",
      },
    });
    const listenerAnalytics2 = ref({
      chart: {
        height: 80,
        type: "donut",
      },
      labels: ["Men", "Woman"],
      stroke: {
        width: 0,
        show: true,
        colors: ["#ffffff"],
      },
      colors: ["#AD63F6", "#3584FC"],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "80%",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "right",
        horizontalAlign: "center",
        offsetX: -9,
        offsetY: -2,
        itemMargin: {
          horizontal: 0,
          vertical: 5,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 5,
          offsetX: -2,
          offsetY: 1.5,
          shape: "circle",
        },
        customLegendItems: ["Men: 75%", "Women: 25%"],
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      isActive,
      toggleActive,
      analytics,
      listenerAnalytics,
      analytics2,
      listenerAnalytics2,
    };
  },
});
</script>
