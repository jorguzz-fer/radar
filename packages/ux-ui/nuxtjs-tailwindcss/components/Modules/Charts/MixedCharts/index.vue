<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <LineColumnChart />

    <MultipleYaxisChart />

    <LineAreaChart />

    <LineColumnAreaChart />
  </div>
</template>

<script>
import LineColumnChart from "./LineColumnChart.vue";
import MultipleYaxisChart from "./MultipleYaxisChart.vue";
import LineAreaChart from "./LineAreaChart.vue";
import LineColumnAreaChart from "./LineColumnAreaChart.vue";

export default {
  name: "MixedCharts",
  components: {
    LineColumnChart,
    MultipleYaxisChart,
    LineAreaChart,
    LineColumnAreaChart,
  },
};
</script>
