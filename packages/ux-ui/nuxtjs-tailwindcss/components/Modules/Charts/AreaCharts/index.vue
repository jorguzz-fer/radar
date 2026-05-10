<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <BasicAreaChart />

    <SplineAreaChart />

    <DatetimeAreaChart />

    <NegativeValuesAreaChart />

    <StackedAreaChart />

    <MissingNullValuesAreaChart />
  </div>
</template>

<script>
import BasicAreaChart from "./BasicAreaChart.vue";
import SplineAreaChart from "./SplineAreaChart.vue";
import DatetimeAreaChart from "./DatetimeAreaChart.vue";
import NegativeValuesAreaChart from "./NegativeValuesAreaChart.vue";
import StackedAreaChart from "./StackedAreaChart.vue";
import MissingNullValuesAreaChart from "./MissingNullValuesAreaChart.vue";

export default {
  name: "AreaCharts",
  components: {
    BasicAreaChart,
    SplineAreaChart,
    DatetimeAreaChart,
    NegativeValuesAreaChart,
    StackedAreaChart,
    MissingNullValuesAreaChart,
  },
};
</script>
