<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Emergency Room Visits</h5>
        <p class="mt-px">ER based on patient visits</p>
      </div>
      <div class="trezo-card-subtitle mt-[10px] sm:mt-0">
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
              Last Week
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
      <div class="-mt-[30px] ltr:-ml-[15px] rtl:-mr-[15px] -mb-[25px]">
        <apexchart
          v-if="isClient"
          type="heatmap"
          height="225"
          :options="overallVisitors"
          :series="visitors"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "EmergencyRoomVisitsChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const visitors = ref([
      {
        name: "08 PM",
        data: generateData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "09 PM",
        data: generateData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "10 PM",
        data: generateData(20, {
          min: 0,
          max: 0,
        }),
      },
      {
        name: "11 PM",
        data: generateData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "12 PM",
        data: generateData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "13 PM",
        data: generateData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "14 PM",
        data: generateData(20, {
          min: -30,
          max: 55,
        }),
      },
    ]);
    const overallVisitors = ref({
      chart: {
        height: 225,
        type: "heatmap",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: [
        "#605DFF",
        "#605DFF",
        "#605DFF",
        "#605DFF",
        "#605DFF",
        "#605DFF",
        "#605DFF",
        "#605DFF",
        "#605DFF",
      ],
      plotOptions: {
        heatmap: {
          shadeIntensity: 1,
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      xaxis: {
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
        categories: [
          "W1",
          "W2",
          "W3",
          "W4",
          "W5",
          "W6",
          "W7",
          "W8",
          "W9",
          "W10",
          "W11",
          "W12",
          "W13",
          "W14",
          "W15",
          "W16",
          "W17",
          "W18",
          "W19",
          "W20",
        ],
      },
      yaxis: {
        labels: {
          show: true,
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
    });

    function generateData(count: number, yrange: { min: any; max: any }) {
      return Array.from({ length: count }, (_, i) => ({
        x: (i + 1).toString(),
        y:
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min,
      }));
    }

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      visitors,
      overallVisitors,
      isActive,
      toggleActive,
    };
  },
});
</script>
