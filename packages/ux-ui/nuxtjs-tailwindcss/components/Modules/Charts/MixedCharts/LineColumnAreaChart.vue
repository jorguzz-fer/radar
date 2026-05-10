<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Line, Column & Area Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="line"
        height="350"
        :options="lineColumnAreaChart"
        :series="lineColumnArea"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "LineColumnAreaChart",
  setup() {
    const isClient = ref(false);
    const lineColumnArea = ref([
      {
        name: "Team A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "Team B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "Team C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ]);
    const lineColumnAreaChart = ref({
      chart: {
        height: 350,
        type: "line",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#00cae3", "#e74c3c"],
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          // stops: [0, 100, 100, 100]
        },
      },
      labels: [
        "01/01/2025",
        "02/01/2025",
        "03/01/2025",
        "04/01/2025",
        "05/01/2025",
        "06/01/2025",
        "07/01/2025",
        "08/01/2025",
        "09/01/2025",
        "10/01/2025",
        "11/01/2025",
      ],
      markers: {
        size: 0,
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
      yaxis: {
        title: {
          text: "Points",
          style: {
            color: "#3A4252",
            fontSize: "14px",
            fontWeight: 500,
          },
        },
        min: 0,
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
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: number) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
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
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      lineColumnArea,
      lineColumnAreaChart,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin-bottom: -20px !important;
}
</style>
