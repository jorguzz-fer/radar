<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Balance Overview</h5>
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
              Current Year
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
                Current Week
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Current Month
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Current Year
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="-mb-[3px] ltr:-ml-[10px] rtl:-mr-[10px]">
        <apexchart
          v-if="isClient"
          type="area"
          height="350"
          :options="balanceOverview"
          :series="overview"
        ></apexchart>
      </div>
      <ul class="text-center">
        <li
          class="inline-block mx-[13px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
        >
          <div class="flex items-center">
            <span
              class="text-primary-500 font-semibold ltr:mr-[10px] rtl:ml-[10px] text-[20px]"
            >
              $628k
            </span>
            <span class="block"> Revenue </span>
          </div>
        </li>
        <li
          class="inline-block mx-[13px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
        >
          <div class="flex items-center">
            <span
              class="text-purple-500 font-semibold ltr:mr-[10px] rtl:ml-[10px] text-[20px]"
            >
              $379k
            </span>
            <span class="block"> Expenses </span>
          </div>
        </li>
        <li
          class="inline-block mx-[13px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
        >
          <div class="flex items-center">
            <span
              class="text-success-500 font-semibold ltr:mr-[10px] rtl:ml-[10px] text-[20px]"
            >
              11.2%
            </span>
            <span class="block"> Profit Ratio </span>
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
  name: "BalanceOverviewChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const overview = ref([
      {
        name: "Revenue",
        data: [5, 12, 20, 23, 25, 30, 40, 45, 50, 70, 65, 80],
      },
      {
        name: "Expenses",
        data: [15, 20, 30, 30, 35, 45, 60, 70, 80, 85, 95, 120],
      },
    ]);
    const balanceOverview = ref({
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      colors: ["#AD63F6", "#605DFF"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
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
        tickAmount: 6,
        max: 150,
        min: 0,
        labels: {
          formatter: (val: string) => {
            return "$" + val + "k";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
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
          radius: 2,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      overview,
      balanceOverview,
      isActive,
      toggleActive,
    };
  },
});
</script>
