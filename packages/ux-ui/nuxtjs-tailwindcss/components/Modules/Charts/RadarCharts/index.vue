<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <BasicRadarChart />

    <MultipleRadarChart />

    <PolygonRadarChart />
  </div>
</template>

<script>
import BasicRadarChart from "./BasicRadarChart.vue";
import MultipleRadarChart from "./MultipleRadarChart.vue";
import PolygonRadarChart from "./PolygonRadarChart.vue";

export default {
  name: "RadarCharts",
  components: {
    BasicRadarChart,
    MultipleRadarChart,
    PolygonRadarChart,
  },
};
</script>
