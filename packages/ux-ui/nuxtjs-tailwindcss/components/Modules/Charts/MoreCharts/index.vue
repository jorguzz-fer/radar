<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <BasicRangeAreaChart />

    <BasicTimelineChart />

    <BasicCandlestickChart />

    <BasicBoxplotChart />

    <BasicBubbleChart />

    <BasicScatterChart />

    <BasicHeatmapChart />

    <BasicTreemapChart />
  </div>
</template>

<script>
import BasicRangeAreaChart from "./BasicRangeAreaChart.vue";
import BasicTimelineChart from "./BasicTimelineChart.vue";
import BasicCandlestickChart from "./BasicCandlestickChart.vue";
import BasicBoxplotChart from "./BasicBoxplotChart.vue";
import BasicBubbleChart from "./BasicBubbleChart.vue";
import BasicScatterChart from "./BasicScatterChart.vue";
import BasicHeatmapChart from "./BasicHeatmapChart.vue";
import BasicTreemapChart from "./BasicTreemapChart.vue";

export default {
  name: "MoreCharts",
  components: {
    BasicRangeAreaChart,
    BasicTimelineChart,
    BasicCandlestickChart,
    BasicBoxplotChart,
    BasicBubbleChart,
    BasicScatterChart,
    BasicHeatmapChart,
    BasicTreemapChart,
  },
};
</script>
