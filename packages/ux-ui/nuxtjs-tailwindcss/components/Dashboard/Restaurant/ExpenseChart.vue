<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <span class="block"> Expense </span>
      <h3 class="-tracking-[0.5px] !mb-[4px] mt-px !text-3xl">$132K</h3>
      <span
        class="inline-block text-xs px-[9px] text-danger-700 border border-danger-300 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px]"
      >
        -1.2%
      </span>
      <span class="block text-xs mt-[5px]"> vs previous 30 days </span>
      <div
        class="absolute ltr:-right-[8px] rtl:-left-[8px] top-1/2 -translate-y-1/2 max-w-[120px]"
      >
        <apexchart
          v-if="isClient"
          type="bar"
          height="150"
          :options="expenseChart"
          :series="expense"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ExpenseChart",
  setup() {
    const isClient = ref(false);
    const expense = ref([
      {
        name: "Up",
        data: [70, 42, 70, 120, 40, 70],
      },
      {
        name: "Down",
        data: [-70, -44, -70, -120, -40, -70],
      },
    ]);
    const expenseChart = ref({
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ["#BF85FB", "#5DA8FF"],
      plotOptions: {
        bar: {
          borderRadius: 2,
          columnWidth: "4px",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 7,
        borderColor: "#ECEEF2",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
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
      yaxis: {
        show: false,
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
          formatter: function (value: number) {
            return `${Math.abs(value).toFixed(2)}%`; // Ensure that negative values appear as positive in the tooltip
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
          size: 6,
          offsetX: -2,
          offsetY: -0.5,
          shape: "circle",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      expense,
      expenseChart,
    };
  },
});
</script>
