<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <BasicPieChart />

    <PieDonutChart />

    <PieMonochromeChart />
  </div>
</template>

<script>
import BasicPieChart from "./BasicPieChart.vue";
import PieDonutChart from "./PieDonutChart.vue";
import PieMonochromeChart from "./PieMonochromeChart.vue";

export default {
  name: "PieCharts",
  components: {
    BasicPieChart,
    PieDonutChart,
    PieMonochromeChart,
  },
};
</script>
