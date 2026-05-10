<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Multiple Radar Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="radar"
        height="350"
        :options="multipleRadar"
        :series="multiple"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MultipleRadarChart",
  setup() {
    const isClient = ref(false);
    const multiple = ref([
      {
        name: "Series Blue",
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: "Series Green",
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: "Series Orange",
        data: [44, 76, 78, 13, 43, 10],
      },
    ]);
    const multipleRadar = ref({
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: "Radar Chart - Multi Series",
        align: "left",
        offsetX: -9,
        style: {
          fontWeight: "500",
          fontSize: "14px",
          color: "#64748B",
        },
      },
      stroke: {
        width: 0,
      },
      fill: {
        opacity: 0.4,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
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
      multiple,
      multipleRadar,
    };
  },
});
</script>
