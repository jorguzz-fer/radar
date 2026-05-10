<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Tickets Status</h5>
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
    <div
      class="trezo-card-content relative z-[1] xl:ltr:pr-[242px] xl:rtl:pl-[242px]"
    >
      <div
        class="absolute top-0 bottom-0 w-[1px] -z-[1] ltr:right-[215px] rtl:left-[215px] bg-gray-100 dark:bg-[#172036] -mt-[55px] -mb-[3px] hidden xl:block"
      ></div>
      <div class="-mt-[21px] -mb-[22px] ltr:-ml-[15px] rtl:-mr-[15px]">
        <apexchart
          v-if="isClient"
          type="bar"
          height="390"
          :options="ticketsStatus"
          :series="status"
        ></apexchart>
      </div>
      <div
        class="mt-[20px] md:mt-[25px] xl:mt-0 ltr:right-0 rtl:left-0 xl:absolute xl:top-[20px] xl:w-[175px]"
      >
        <h6 class="!font-normal !text-lg !mb-[4px]">Avg. 1.5k</h6>
        <span class="block"> Tickets Weekly Solved </span>
        <ul class="mt-[20px] xl:mt-[35px]">
          <li
            class="text-sm mb-[14px] last:mb-0 inline-block xl:block ltr:mr-[14px] rtl:ml-[14px] xl:ltr:mr-0 xl:rtl:ml-0"
          >
            <div class="flex items-center">
              <div
                class="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-primary-500"
              ></div>
              Solved
            </div>
            <span
              class="block font-medium text-black dark:text-white text-lg mt-[2px]"
            >
              1.5k
            </span>
          </li>
          <li
            class="text-sm mb-[14px] last:mb-0 inline-block xl:block ltr:mr-[14px] rtl:ml-[14px] xl:ltr:mr-0 xl:rtl:ml-0"
          >
            <div class="flex items-center">
              <div
                class="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-secondary-500"
              ></div>
              In Progress
            </div>
            <span
              class="block font-medium text-black dark:text-white text-lg mt-[2px]"
            >
              4.7k
            </span>
          </li>
          <li
            class="text-sm mb-[14px] last:mb-0 inline-block xl:block ltr:mr-[14px] rtl:ml-[14px] xl:ltr:mr-0 xl:rtl:ml-0"
          >
            <div class="flex items-center">
              <div
                class="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-purple-500"
              ></div>
              Pending
            </div>
            <span
              class="block font-medium text-black dark:text-white text-lg mt-[2px]"
            >
              780
            </span>
          </li>
          <li
            class="text-sm mb-[14px] last:mb-0 inline-block xl:block ltr:mr-[14px] rtl:ml-[14px] xl:ltr:mr-0 xl:rtl:ml-0"
          >
            <div class="flex items-center">
              <div
                class="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-danger-500"
              ></div>
              Others
            </div>
            <span
              class="block font-medium text-black dark:text-white text-lg mt-[2px]"
            >
              320
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "TicketsStatusChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const status = ref([
      {
        name: "Solved",
        data: [28, 50, 90, 95, 20, 70, 35],
      },
      {
        name: "In Progress",
        data: [80, 60, 70, 30, 45, 20, 80],
      },
      {
        name: "Pending",
        data: [32, 23, 78, 35, 65, 35, 15],
      },
      {
        name: "Others",
        data: [60, 25, 80, 25, 15, 40, 15],
      },
    ]);
    const ticketsStatus = ref({
      chart: {
        type: "bar",
        height: 390,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#3584FC", "#AD63F6", "#FD5812"],
      plotOptions: {
        bar: {
          columnWidth: "65%",
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + " Tickets";
          },
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
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
          radius: 2,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      status,
      ticketsStatus,
      isActive,
      toggleActive,
    };
  },
});
</script>
