<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Polygon Radar Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="radar"
        height="350"
        :options="polygonRadar"
        :series="polygon"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PolygonRadarChart",
  setup() {
    const isClient = ref(false);
    const polygon = ref([
      {
        name: "Series 1",
        data: [20, 100, 40, 30, 50, 80, 33],
      },
    ]);
    const polygonRadar = ref({
      chart: {
        height: 350,
        type: "radar",
      },
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            fill: {
              colors: ["#f8f8f8", "#ffffff"],
            },
          },
        },
      },
      title: {
        text: "Radar with Polygon Fill",
        align: "left",
        offsetX: -9,
        style: {
          fontWeight: "500",
          fontSize: "14px",
          color: "#64748B",
        },
      },
      colors: ["#605DFF"],
      markers: {
        size: 4,
        colors: ["#ffffff"],
        strokeColors: ["#0f79f3"],
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      yaxis: {
        tickAmount: 7,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      polygon,
      polygonRadar,
    };
  },
});
</script>
