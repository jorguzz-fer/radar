<template>
  <div
    class="trezo-card bg-gray-50 dark:bg-[#0c1427] rounded-md border border-gray-100 dark:border-[#172036]"
  >
    <div
      class="trezo-card-header py-[15px] px-[20px] md:px-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !text-md !font-medium">Sales Analytics</h5>
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
              {{ selectedPeriod }}
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
              ></i>
            </span>
          </button>
          <ul
            v-if="isActive"
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li v-for="period in timePeriods" :key="period">
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                @click="selectPeriod(period)"
              >
                {{ period }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="trezo-card-content bg-white dark:bg-dark p-[20px] md:p-[25px] rounded-md border-t border-gray-100 dark:border-[#172036]"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-[25px]">
        <div>
          <div class="flex items-center gap-[10px]">
            <div
              class="flex items-center justify-center bg-primary-100 dark:bg-[#15203c] rounded-md w-[44px] h-[44px]"
            >
              <img src="@/assets/images/icons/chart.svg" alt="chart" />
            </div>
            <div>
              <span class="block"> Sales Over Time </span>
              <h4 class="!mb-0 !font-semibold mt-px">
                ${{ formattedTotalSales }}
              </h4>
            </div>
            <span
              class="px-[8px] py-[3px] inline-block bg-success-100 dark:bg-[#15203c] text-success-700 rounded-md ltr:ml-[5px] rtl:mr-[5px]"
            >
              {{ growthRate > 0 ? "+" : "" }}{{ growthRate.toFixed(1) }}%
            </span>
          </div>
          <p class="mt-[15px] md:mt-[20px] !leading-[1.4] md:max-w-[400px]">
            {{ salesDescription }}
          </p>
        </div>

        <div class="-mt-[11px] -mb-[11px] lg:ltr:-ml-[35px] lg:rtl:-mr-[35px]">
          <apexchart
            v-if="isClient"
            type="bar"
            height="200"
            :options="salesAnalytics"
            :series="sales"
          ></apexchart>
        </div>
      </div>
    </div>

    <SalesByCategory />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";
import type { ApexOptions } from "apexcharts";
import SalesByCategory from "./SalesByCategory.vue";

type TimePeriod = "This Day" | "This Week" | "This Month" | "This Year";

interface SalesData {
  values: number[];
  categories: string[];
  total: number;
  previousTotal: number;
}

export default defineComponent({
  name: "SalesAnalytics",
  components: {
    SalesByCategory,
  },
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const selectedPeriod = ref<TimePeriod>("This Week");
    const timePeriods: TimePeriod[] = [
      "This Day",
      "This Week",
      "This Month",
      "This Year",
    ];

    // Sample data for different time periods
    const salesDataMap: Record<TimePeriod, SalesData> = {
      "This Day": {
        values: [30, 45, 60, 75, 90, 120],
        categories: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
        total: 420,
        previousTotal: 385,
      },
      "This Week": {
        values: [70, 60, 80, 100, 70, 40, 80],
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        total: 500,
        previousTotal: 458,
      },
      "This Month": {
        values: Array(30)
          .fill(0)
          .map(() => Math.floor(Math.random() * 100) + 30),
        categories: Array(30)
          .fill(0)
          .map((_, i) => (i + 1).toString()),
        total: 3200,
        previousTotal: 2950,
      },
      "This Year": {
        values: Array(12)
          .fill(0)
          .map(() => Math.floor(Math.random() * 300) + 100),
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
        total: 15000,
        previousTotal: 13800,
      },
    };

    // Computed properties
    const currentSalesData = computed(() => salesDataMap[selectedPeriod.value]);
    const middleIndex = computed(() =>
      Math.floor(currentSalesData.value.values.length / 2)
    );

    const totalSales = computed(() => currentSalesData.value.total);
    const formattedTotalSales = computed(() => {
      if (totalSales.value >= 1000) {
        return `${(totalSales.value / 1000).toFixed(1)}k`;
      }
      return totalSales.value.toString();
    });

    const growthRate = computed(() => {
      const { total, previousTotal } = currentSalesData.value;
      return ((total - previousTotal) / previousTotal) * 100;
    });

    const salesDescription = computed(() => {
      const period = selectedPeriod.value.toLowerCase().replace("this ", "");
      const trend = growthRate.value > 0 ? "positive" : "negative";
      return `Sales have shown a ${trend} trend, with a ${
        growthRate.value > 0 ? "increase" : "decrease"
      } of ${Math.abs(growthRate.value).toFixed(
        1
      )}% over the previous ${period}.`;
    });

    // Chart configuration
    const salesAnalytics = computed<ApexOptions>(() => ({
      chart: {
        type: "bar",
        height: 200,
        toolbar: { show: false },
      },
      colors: currentSalesData.value.values.map((_, index) =>
        index === middleIndex.value ? "#605DFF" : "#C2CDFF"
      ),
      plotOptions: {
        bar: {
          columnWidth: "13px",
          borderRadius: 4,
          distributed: true,
          horizontal: false,
        },
      },
      grid: { show: false, borderColor: "#ECEEF2" },
      dataLabels: { enabled: false },
      xaxis: {
        categories: currentSalesData.value.categories,
        axisTicks: { show: false, color: "#ECEEF2" },
        axisBorder: { show: false, color: "#ECEEF2" },
        labels: {
          show: true,
          style: { colors: "#8695AA", fontSize: "12px" },
        },
      },
      yaxis: {
        show: false,
        labels: {
          formatter: (val: number) => `$${val}k`,
          style: { colors: "#64748B", fontSize: "12px" },
        },
        axisBorder: { show: false, color: "#ECEEF2" },
        axisTicks: { show: false, color: "#ECEEF2" },
      },
      tooltip: {
        y: { formatter: (val: number) => `$${val}k` },
      },
      legend: { show: false },
    }));

    const sales = computed(() => [
      { name: "Sales", data: currentSalesData.value.values },
    ]);

    // Methods
    const selectPeriod = (period: TimePeriod) => {
      selectedPeriod.value = period;
      toggleActive();
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isActive,
      toggleActive,
      isClient,
      selectedPeriod,
      timePeriods,
      formattedTotalSales,
      growthRate,
      salesDescription,
      salesAnalytics,
      sales,
      selectPeriod,
    };
  },
});
</script>
