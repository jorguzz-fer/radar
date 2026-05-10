<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <BasicLineChart />

    <GradientLineChart />

    <DashedLineChart />

    <SteplineLineChart />
  </div>
</template>

<script>
import BasicLineChart from "./BasicLineChart.vue";
import GradientLineChart from "./GradientLineChart.vue";
import DashedLineChart from "./DashedLineChart.vue";
import SteplineLineChart from "./SteplineLineChart.vue";

export default {
  name: "LineCharts",
  components: {
    BasicLineChart,
    GradientLineChart,
    DashedLineChart,
    SteplineLineChart,
  },
};
</script>
