<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Gradient RadialBar Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="radialBar"
        height="350"
        :options="gradientRadialBar"
        :series="gradient"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "GradientRadialBarChart",
  setup() {
    const isClient = ref(false);
    const gradient = ref([75]);
    const gradientRadialBar = ref({
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#ffffff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: "#ffffff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#64748B",
              fontSize: "17px",
            },
            value: {
              formatter: function (val: { toString: () => string }) {
                return parseInt(val.toString(), 10).toString();
              },
              color: "#3A4252",
              fontSize: "36px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          // stops: [0, 100]
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Percent"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      gradient,
      gradientRadialBar,
    };
  },
});
</script>
