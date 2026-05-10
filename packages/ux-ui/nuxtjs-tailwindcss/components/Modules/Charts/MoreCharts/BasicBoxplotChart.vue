<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Basic Boxplot Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="boxPlot"
        height="350"
        :options="boxplotChart"
        :series="boxplot"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BasicBoxplotChart",
  setup() {
    const isClient = ref(false);
    const boxplot = ref([
      {
        name: "Box",
        type: "boxPlot",
        data: [
          {
            x: new Date("2017-01-01").getTime(),
            y: [54, 66, 69, 75, 88],
          },
          {
            x: new Date("2018-01-01").getTime(),
            y: [43, 65, 69, 76, 81],
          },
          {
            x: new Date("2019-01-01").getTime(),
            y: [31, 39, 45, 51, 59],
          },
          {
            x: new Date("2020-01-01").getTime(),
            y: [39, 46, 55, 65, 71],
          },
          {
            x: new Date("2021-01-01").getTime(),
            y: [29, 31, 35, 39, 44],
          },
        ],
      },
      {
        name: "Outliers",
        type: "scatter",
        data: [
          {
            x: new Date("2017-01-01").getTime(),
            y: 32,
          },
          {
            x: new Date("2018-01-01").getTime(),
            y: 25,
          },
          {
            x: new Date("2019-01-01").getTime(),
            y: 64,
          },
          {
            x: new Date("2020-01-01").getTime(),
            y: 27,
          },
          {
            x: new Date("2020-01-01").getTime(),
            y: 78,
          },
          {
            x: new Date("2021-01-01").getTime(),
            y: 15,
          },
        ],
      },
    ]);
    const boxplotChart = ref({
      chart: {
        height: 350,
        type: "boxPlot",
        toolbar: {
          show: true,
        },
      },
      colors: ["#605DFF", "#3584FC"],
      title: {
        text: "BoxPlot - Scatter Chart",
        align: "left",
        offsetX: -9,
        style: {
          fontWeight: "500",
          fontSize: "14px",
          color: "#64748B",
        },
      },
      xaxis: {
        type: "datetime",
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        shared: false,
        intersect: true,
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      boxplot,
      boxplotChart,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin-bottom: -20px !important;
}
</style>
