<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Semi Circular Gauge RadialBar Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="radialBar"
        :options="semiCircular"
        :series="semi"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SemiCircularGaugeRadialBarChart",
  setup() {
    const isClient = ref(false);
    const semi = ref([76]);
    const semiCircular = ref({
      chart: {
        type: "radialBar",
        offsetY: -20,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: "22px",
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          // stops: [0, 50, 53, 91]
        },
      },
      labels: ["Average Results"],
      colors: ["#605DFF"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      semi,
      semiCircular,
    };
  },
});
</script>
