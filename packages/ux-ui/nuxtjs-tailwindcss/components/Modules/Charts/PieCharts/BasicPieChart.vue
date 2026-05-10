<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Basic Pie Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="pie"
        height="360"
        :options="basicPie"
        :series="bsic"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BasicPieChart",
  setup() {
    const isClient = ref(false);
    const bsic = ref([60, 30, 10]);
    const basicPie = ref({
      chart: {
        height: 360,
        type: "pie",
      },
      labels: ["Completed", "New Order", "Pending"],
      colors: ["#37D80A", "#605DFF", "#AD63F6"],
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
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
        },
      },
      dataLabels: {
        enabled: false,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      bsic,
      basicPie,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin-top: -9px;
}
</style>
