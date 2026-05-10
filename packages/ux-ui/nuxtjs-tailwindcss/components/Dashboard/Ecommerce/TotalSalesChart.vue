<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Total Sales</h5>
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
              Monthly
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
    </div>

    <div class="trezo-card-content">
      <div class="-mb-[15px] ltr:-ml-[10px] rtl:-mr-[10px] -mt-[5px]">
        <apexchart
          v-if="isClient"
          type="area"
          height="365"
          :options="totalSales"
          :series="sales"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "TotalSalesChart",
  setup() {
    const isClient = ref(false);
    const selectedTimeFrame = ref("Monthly");
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const sales = ref([
      {
        name: "Current Sale",
        data: [35, 50, 55, 60, 50, 60, 55, 60, 78, 40, 95, 80],
      },
      {
        name: "Last Year Sale",
        data: [70, 50, 40, 40, 62, 52, 80, 40, 60, 53, 70, 70],
      },
    ]);

    const totalSales = ref({
      chart: {
        type: "area",
        height: 366,
        zoom: {
          enabled: false,
        },
      },
      colors: ["#605DFF", "#DDE4FF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: [2, 2, 0],
        dashArray: [0, 6, 0],
      },
      grid: {
        borderColor: "#ffffff",
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.5,
        },
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
          formatter: (val: number) => {
            return "$" + val / 1 + "K";
          },
          style: {
            colors: "#8695AA",
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val + "k";
          },
        },
      },
    });

    const changeSalesData = () => {
      switch (selectedTimeFrame.value) {
        case "Weekly":
          sales.value = [
            { name: "Current Sale", data: [10, 20, 30, 40, 50, 60, 70] },
            { name: "Last Year Sale", data: [15, 25, 35, 45, 55, 65, 75] },
          ];
          break;
        case "Today":
          sales.value = [
            { name: "Current Sale", data: [5, 10, 15, 20, 25] },
            { name: "Last Year Sale", data: [3, 8, 12, 18, 22] },
          ];
          break;
        case "Yearly":
          sales.value = [
            { name: "Current Sale", data: [90, 99, 80, 70, 99, 75, 95] },
            {
              name: "Last Year Sale",
              data: [99, 70, 85, 90, 75, 90, 80],
            },
          ];
          break;
        default:
          // Monthly
          sales.value = [
            {
              name: "Current Sale",
              data: [35, 50, 55, 60, 50, 60, 55, 60, 78, 40, 95, 80],
            },
            {
              name: "Last Year Sale",
              data: [70, 50, 40, 40, 62, 52, 80, 40, 60, 53, 70, 70],
            },
          ];
      }
    };

    onMounted(() => {
      isClient.value = true;
      changeSalesData(); // Set initial data based on default selectedTimeFrame
    });

    return {
      isClient,
      sales,
      totalSales,
      selectedTimeFrame,
      changeSalesData,
      isActive,
      toggleActive,
    };
  },
});
</script>
