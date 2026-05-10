<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Custom Angle Circle RadialBar Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="radialBar"
        height="350"
        :options="customAngleCircle"
        :series="customAngle"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CustomAngleCircleRadialBarChart",
  setup() {
    const isClient = ref(false);
    const customAngle = ref([100, 90, 80, 70]);
    const customAngleCircle = ref({
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 10,
            size: "30%",
            image: undefined,
            background: "transparent",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ["#757FEF", "#9EA5F4", "#C8CCF9", "#F1F2FD"],
      labels: ["Completed", "Active", "Assigned", "Pending"],
      legend: {
        show: true,
        offsetY: 0,
        offsetX: -20,
        floating: true,
        position: "left",
        fontSize: "13px",
        labels: {
          colors: "#64748B",
        },
        formatter: function (
          seriesName: string,
          opts: {
            w: { globals: { series: { [x: string]: string } } };
            seriesIndex: string | number;
          }
        ) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 0,
          vertical: 4,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      customAngle,
      customAngleCircle,
    };
  },
});
</script>
