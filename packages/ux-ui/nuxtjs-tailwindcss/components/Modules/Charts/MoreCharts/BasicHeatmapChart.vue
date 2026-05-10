<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Basic Heatmap Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="heatmap"
        height="350"
        :options="heatmapChart"
        :series="heatmap"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BasicHeatmapChart",
  setup() {
    const isClient = ref(false);
    const heatmap = ref([
      {
        name: "Metric 1",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Metric 2",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Metric 3",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Metric 4",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Metric 5",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Metric 6",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Metric 7",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Metric 8",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: "Metric 9",
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
    ]);
    const heatmapChart = ref({
      chart: {
        height: 350,
        type: "heatmap",
        toolbar: {
          show: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#0f79f3"],
      title: {
        text: "HeatMap Chart (Single color)",
        align: "left",
        offsetX: -9,
        style: {
          fontWeight: "500",
          fontSize: "14px",
          color: "#64748B",
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
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
    });

    function generateData(count: number, yrange: { min: number; max: number }) {
      const series = [];
      for (let i = 0; i < count; i++) {
        const x = "w" + (i + 1).toString();
        const y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;
        series.push({
          x: x,
          y: y,
        });
      }
      return series;
    }

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      heatmap,
      heatmapChart,
    };
  },
});
</script>
