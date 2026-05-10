<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <BasicPolarChart />

    <MonochromePolarChart />
  </div>
</template>

<script>
import BasicPolarChart from "./BasicPolarChart.vue";
import MonochromePolarChart from "./MonochromePolarChart.vue";

export default {
  name: "PolarCharts",
  components: {
    BasicPolarChart,
    MonochromePolarChart,
  },
};
</script>
