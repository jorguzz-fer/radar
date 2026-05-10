<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Expense Breakdown</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="-mt-[10px]">
        <apexchart
          v-if="isClient"
          type="pie"
          height="230"
          :options="expenseBreakdown"
          :series="expense"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ExpenseBreakdownChart",
  setup() {
    const isClient = ref(false);
    const expense = ref([30, 25, 20, 25]);
    const expenseBreakdown = ref({
      chart: {
        type: "pie",
        height: 230,
      },
      labels: ["Sales", "Salaries", "Miscellaneous", "Marketing"],
      colors: ["#AD63F6", "#BF85FB", "#D7B5FD", "#E9D5FF"],
      legend: {
        show: true,
        position: "bottom",
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
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
        },
        dropShadow: {
          enabled: false,
        },
      },
      stroke: {
        width: 0,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5,
          },
          expandOnClick: true,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      expense,
      expenseBreakdown,
    };
  },
});
</script>
