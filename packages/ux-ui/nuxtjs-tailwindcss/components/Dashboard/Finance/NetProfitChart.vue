<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title flex items-center gap-[15px]">
        <div>
          <span class="block mb-[4px]"> Net Profit </span>
          <h5 class="mb-0 md:text-[20px]">$42,458</h5>
        </div>
        <span
          class="inline-block px-[8.5px] text-success-600 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px] text-xs"
        >
          +7.6%
        </span>
      </div>
      <div class="trezo-card-subtitle">
        <span class="block"> Last 7 days </span>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="-mt-[25px] -mb-[25px] ltr:-ml-[15px] rtl:-mr-[15px]">
        <apexchart
          v-if="isClient"
          type="bar"
          height="200"
          :options="netProfit"
          :series="profit"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "NetProfitChart",
  setup() {
    const isClient = ref(false);
    const profit = ref([
      {
        name: "Net Profit",
        data: [130, 200, 160, 80, 70, 120, 140],
      },
    ]);
    const netProfit = ref({
      chart: {
        type: "bar",
        height: 200,
        toolbar: {
          show: false,
        },
      },
      colors: ["#37D80A"],
      plotOptions: {
        bar: {
          columnWidth: "15px",
          colors: {
            backgroundBarColors: ["#37D80A"],
            backgroundBarOpacity: 0.2,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#F6F7F9",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: true,
          color: "#F6F7F9",
        },
        axisBorder: {
          show: true,
          color: "#F6F7F9",
        },
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        max: 200,
        min: 0,
        labels: {
          formatter: (val: string) => {
            return "$" + val;
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#F6F7F9",
        },
        axisTicks: {
          show: false,
          color: "#F6F7F9",
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val + "k";
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
      profit,
      netProfit,
    };
  },
});
</script>
