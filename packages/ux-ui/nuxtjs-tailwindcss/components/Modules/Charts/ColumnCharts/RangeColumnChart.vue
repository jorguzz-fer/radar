<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Range Column Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="rangeBar"
        height="350"
        :options="rangeColumn"
        :series="range"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, shallowRef, onMounted } from "vue";

export default defineComponent({
  name: "RangeColumnChart",
  setup() {
    const isClient = ref(false);
    const range = shallowRef([
      {
        name: "Blue",
        data: [
          { x: "Team A", y: [1, 5] },
          { x: "Team B", y: [4, 6] },
          { x: "Team C", y: [5, 8] },
          { x: "Team D", y: [3, 11] },
        ],
      },
      {
        name: "Green",
        data: [
          { x: "Team A", y: [2, 6] },
          { x: "Team B", y: [1, 3] },
          { x: "Team C", y: [7, 8] },
          { x: "Team D", y: [5, 9] },
        ],
      },
    ]);

    const rangeColumn = shallowRef({
      chart: {
        type: "rangeBar",
        height: 370,
        toolbar: { show: true },
      },
      colors: ["#605DFF", "#FD5812"],
      plotOptions: { bar: { horizontal: false } },
      dataLabels: { enabled: true },
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
        itemMargin: { horizontal: 8, vertical: 0 },
        labels: { colors: "#64748B" },
        markers: { width: 9, height: 9, offsetX: -2, offsetY: -0.5 },
      },
      grid: { show: true, borderColor: "#ECEEF2" },
      xaxis: {
        axisTicks: { show: false, color: "#ECEEF2" },
        axisBorder: { show: false, color: "#ECEEF2" },
        labels: {
          show: true,
          style: { colors: "#8695AA", fontSize: "12px" },
        },
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          show: true,
          style: { colors: "#64748B", fontSize: "12px" },
        },
        axisBorder: { show: false, color: "#ECEEF2" },
        axisTicks: { show: false, color: "#ECEEF2" },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return { isClient, range, rangeColumn };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin-bottom: -20px !important;
}
</style>
