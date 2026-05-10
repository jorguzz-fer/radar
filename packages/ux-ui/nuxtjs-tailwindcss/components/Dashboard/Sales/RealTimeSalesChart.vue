<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Real-Time Sales</h5>
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
      <div class="-mt-[25px]">
        <apexchart
          v-if="isClient"
          type="bar"
          height="240"
          :options="realTimeSales"
          :series="sales"
        ></apexchart>
      </div>
      <div
        class="flex justify-between pt-[28px] border-t border-gray-100 dark:border-[#172036]"
      >
        <div>
          <span class="block text-xs"> Total Sales </span>
          <h6 class="!mb-0 !font-medium !text-lg mt-[5px]">
            $150.7k
            <span
              class="text-success-600 text-xs ltr:pl-[16px] rtl:pr-[16px] relative"
            >
              <i
                class="ri-arrow-up-fill ltr:left-0 rtl:right-0 absolute text-md top-1/2 -translate-y-1/2"
              ></i>
              12%
            </span>
          </h6>
        </div>
        <div>
          <span class="block text-xs"> Avg. Sales Per Day </span>
          <h6 class="!mb-0 !font-medium !text-lg mt-[5px]">
            $19.2k
            <span
              class="text-danger-500 text-xs ltr:pl-[16px] rtl:pr-[16px] relative"
            >
              <i
                class="ri-arrow-down-fill ltr:left-0 rtl:right-0 absolute text-md top-1/2 -translate-y-1/2"
              ></i>
              7%
            </span>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "RealTimeSalesChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const sales = ref([
      {
        name: "Sales",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3],
      },
    ]);
    const realTimeSales = ref({
      chart: {
        height: 240,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          horizontal: false,
          columnWidth: "22px",
          borderRadiusApplication: "around",
          borderRadiusWhenStacked: "all",
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: string) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "10px",
          colors: ["#64748B"],
        },
      },
      xaxis: {
        show: false,
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      colors: ["#3584FC"],
      yaxis: {
        tickAmount: 5,
        show: false,
        max: 11,
        min: 0,
        labels: {
          formatter: (val: string) => {
            return val + "%";
          },
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
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      sales,
      realTimeSales,
      isActive,
      toggleActive,
    };
  },
});
</script>
