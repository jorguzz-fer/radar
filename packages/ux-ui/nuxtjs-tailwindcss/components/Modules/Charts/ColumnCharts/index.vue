<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <BasicColumnChart />

    <DataLabelsColumnChart />

    <StackedColumnChart />

    <RangeColumnChart />

    <RotatedLabelsColumnChart />

    <DistributedColumnChart />
  </div>
</template>

<script>
import BasicColumnChart from "./BasicColumnChart.vue";
import DataLabelsColumnChart from "./DataLabelsColumnChart.vue";
import StackedColumnChart from "./StackedColumnChart.vue";
import RangeColumnChart from "./RangeColumnChart.vue";
import RotatedLabelsColumnChart from "./RotatedLabelsColumnChart.vue";
import DistributedColumnChart from "./DistributedColumnChart.vue";

export default {
  name: "ColumnCharts",
  components: {
    BasicColumnChart,
    DataLabelsColumnChart,
    StackedColumnChart,
    RangeColumnChart,
    RotatedLabelsColumnChart,
    DistributedColumnChart,
  },
};
</script>
