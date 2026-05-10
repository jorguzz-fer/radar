<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <BasicRadialBarChart />

    <MultipleRadialBarChart />

    <CustomAngleCircleRadialBarChart />

    <GradientRadialBarChart />

    <SemiCircularGaugeRadialBarChart />

    <StrockedCircularGaugeRadialBarChart />
  </div>
</template>

<script>
import BasicRadialBarChart from "./BasicRadialBarChart.vue";
import MultipleRadialBarChart from "./MultipleRadialBarChart.vue";
import CustomAngleCircleRadialBarChart from "./CustomAngleCircleRadialBarChart.vue";
import GradientRadialBarChart from "./GradientRadialBarChart.vue";
import StrockedCircularGaugeRadialBarChart from "./StrockedCircularGaugeRadialBarChart.vue";
import SemiCircularGaugeRadialBarChart from "./SemiCircularGaugeRadialBarChart.vue";

export default {
  name: "RadialBarCharts",
  components: {
    BasicRadialBarChart,
    MultipleRadialBarChart,
    CustomAngleCircleRadialBarChart,
    GradientRadialBarChart,
    StrockedCircularGaugeRadialBarChart,
    SemiCircularGaugeRadialBarChart,
  },
};
</script>
