<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <span class="block"> Annual Profit </span>
      <h5 class="!mb-0 mt-[3px] !text-[20px]">$879.6k</h5>
      <div
        class="absolute -top-[28px] ltr:-right-[9px] rtl:-left-[9px] max-w-[120px]"
      >
        <apexchart
          v-if="isClient"
          type="area"
          height="95"
          :options="annualProfit"
          :series="profit"
        ></apexchart>
      </div>
      <div class="mt-[25px] md:mt-[34px] flex items-center justify-between">
        <span
          class="inline-block text-sm text-success-700 py-[1px] px-[8.3px] border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#172036] rounded-xl"
        >
          +30%
        </span>
        <span class="block text-sm"> Last 12 months </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AnnualProfitChart",
  setup() {
    const isClient = ref(false);
    const profit = ref([
      {
        name: "Annual Profit",
        data: [3, 12, 8, 10, 15, 10, 7],
      },
    ]);
    const annualProfit = ref({
      chart: {
        type: "area",
        height: 95,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#C52B09"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
        labels: {
          formatter: (val: string) => {
            return val + "%";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
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
      profit,
      annualProfit,
    };
  },
});
</script>
