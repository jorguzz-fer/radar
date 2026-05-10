<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title flex items-center gap-[15px]">
        <div>
          <span class="block mb-[4px]"> Weekly Expenses </span>
          <h5 class="mb-0 md:text-[20px]">$1,200</h5>
        </div>
        <span
          class="inline-block px-[8.5px] text-danger-600 border border-danger-300 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px] text-xs"
        >
          -5.1%
        </span>
      </div>
      <div class="trezo-card-subtitle">
        <span class="block"> Last 7 days </span>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="-mb-[28px] -mt-[32px]">
        <apexchart
          v-if="isClient"
          type="area"
          height="160"
          :options="weeklyExpenses"
          :series="expenses"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "WeeklyExpensesChart",
  setup() {
    const isClient = ref(false);
    const expenses = ref([
      {
        name: "Expenses",
        data: [20, 100, 150, 100, 220, 180, 300],
      },
    ]);
    const weeklyExpenses = ref({
      chart: {
        type: "area",
        height: 160,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#3584FC"],
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        borderColor: "#F6F7F9",
      },
      stroke: {
        curve: "smooth",
        width: 2,
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
        tickAmount: 3,
        max: 300,
        min: 0,
        opposite: true,
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
            return "$" + val;
          },
        },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "center",
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
      expenses,
      weeklyExpenses,
    };
  },
});
</script>
