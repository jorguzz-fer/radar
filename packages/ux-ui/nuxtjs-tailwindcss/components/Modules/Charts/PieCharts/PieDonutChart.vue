<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Pie Donut Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="donut"
        height="360"
        :options="pieDonut"
        :series="donut"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PieDonutChart",
  setup() {
    const isClient = ref(false);
    const donut = ref([60, 30, 10]);
    const pieDonut = ref({
      chart: {
        height: 360,
        type: "donut",
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
      donut,
      pieDonut,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin-top: -9px;
}
</style>
