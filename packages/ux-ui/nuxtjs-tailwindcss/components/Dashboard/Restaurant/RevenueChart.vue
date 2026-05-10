<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <span class="block"> Revenue </span>
      <h3 class="-tracking-[0.5px] !mb-[4px] mt-px !text-3xl">$3M</h3>
      <span
        class="inline-block text-xs px-[9px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px]"
      >
        +3.4%
      </span>
      <span class="block text-xs mt-[5px]"> vs previous 30 days </span>
      <div
        class="mt-[5px] absolute ltr:-right-[20px] rtl:-left-[20px] top-1/2 -translate-y-1/2 max-w-[135px]"
      >
        <apexchart
          v-if="isClient"
          type="donut"
          height="100"
          :options="revenueChart"
          :series="revenue"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RevenueChart",
  setup() {
    const isClient = ref(false);
    const revenue = ref([80, 20]);
    const revenueChart = ref({
      chart: {
        height: 100,
        type: "donut",
      },
      labels: ["Revenue", "Revenue"],
      colors: ["#58F229", "#D8FFC8"],
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val + "M";
          },
        },
      },
      stroke: {
        width: 0,
      },
      dataLabels: {
        enabled: false,
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
          shape: "circle",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      revenue,
      revenueChart,
    };
  },
});
</script>
