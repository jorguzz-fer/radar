<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Line & Area Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="line"
        height="350"
        :options="lineAreaChart"
        :series="lineArea"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "LineAreaChart",
  setup() {
    const isClient = ref(false);
    const lineArea = ref([
      {
        name: "Team A",
        type: "area",
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47],
      },
      {
        name: "Team B",
        type: "line",
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61],
      },
    ]);
    const lineAreaChart = ref({
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#AD63F6", "#FF4023"],
      fill: {
        type: "solid",
        opacity: [0.35, 1],
      },
      labels: [
        "Dec 01",
        "Dec 02",
        "Dec 03",
        "Dec 04",
        "Dec 05",
        "Dec 06",
        "Dec 07",
        "Dec 08",
        "Dec 09 ",
        "Dec 10",
      ],
      markers: {
        size: 0,
      },
      yaxis: [
        {
          title: {
            text: "Series A",
            style: {
              color: "#3A4252",
              fontSize: "14px",
              fontWeight: 500,
            },
          },
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
        {
          opposite: true,
          title: {
            text: "Series B",
            style: {
              color: "#3A4252",
              fontSize: "14px",
              fontWeight: 500,
            },
          },
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
      ],
      xaxis: {
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
      lineArea,
      lineAreaChart,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin: {
    left: -20px;
    bottom: -20px !important;
  }
}
</style>
