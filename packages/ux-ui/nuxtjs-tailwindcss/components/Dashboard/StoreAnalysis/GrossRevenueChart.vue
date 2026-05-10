<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <div class="flex items-center justify-between">
        <div>
          <span class="block mb-[7px]"> Gross Revenue </span>
          <div class="flex items-center gap-[10px]">
            <h3 class="!leading-none !text-xl md:!text-2xl lg:!text-3xl !mb-0">
              $1,528
            </h3>
            <span
              class="inline-block text-xs py-px px-[9px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px]"
            >
              +5.4%
            </span>
          </div>
          <span class="block text-xs mt-[9px]"> vs previous 30 days </span>
        </div>

        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 bg-gray-100 dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Monthly
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"
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
                Weekly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Monthly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Yearly
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="-mb-[22px] ltr:-ml-[14px] rtl:-mr-[14px]">
        <apexchart
          v-if="isClient"
          type="line"
          height="349"
          :options="grossRevenue"
          :series="gross"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "GrossRevenueChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const gross = ref([
      {
        name: "Sales Revenue",
        data: [108, 130, 110, 140, 130, 115, 125, 115, 125, 140, 140, 130],
      },
      {
        name: "Sales Volume",
        data: [140, 120, 125, 130, 110, 145, 135, 110, 130, 120, 130, 145],
      },
      {
        name: "Order Value",
        data: [125, 115, 128, 120, 125, 130, 135, 130, 135, 145, 120, 125],
      },
    ]);

    const grossRevenue = ref({
      chart: {
        type: "line",
        height: 349,
        toolbar: {
          show: false,
        },
      },
      colors: ["#757DFF", "#AD63F6", "#37D80A"],
      stroke: {
        width: 3,
        curve: "straight",
        dashArray: [0, 8],
      },
      grid: {
        show: true,
        borderColor: "#ECF0FF",
      },
      dataLabels: {
        enabled: false,
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
          color: "#DDE4FF",
        },
        axisBorder: {
          show: false,
          color: "#DDE4FF",
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
        max: 150,
        min: 100,
        labels: {
          formatter: (val: string) => {
            return "$" + val + "K";
          },
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#DDE4FF",
        },
        axisTicks: {
          show: false,
          color: "#DDE4FF",
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "k";
          },
        },
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 8,
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      isActive,
      toggleActive,
      gross,
      grossRevenue,
    };
  },
});
</script>
