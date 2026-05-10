<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Basic Polar Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="polarArea"
        height="500"
        :options="basicPolar"
        :series="bsic"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BasicPolarChart",
  setup() {
    const isClient = ref(false);
    const bsic = ref([14, 23, 21, 17, 15, 10, 12, 17, 21]);
    const basicPolar = ref({
      chart: {
        height: 500,
        type: "polarArea",
      },
      stroke: {
        colors: ["#ffffff"],
      },
      fill: {
        opacity: 0.8,
      },
      labels: [
        "Bananas",
        "Apples",
        "Grapes",
        "Papayas",
        "Mangos",
        "Blueberrys",
        "Cherrys",
        "Oranges",
        "Pineapples",
      ],
      grid: {
        show: true,
        borderColor: "#ECEEF2",
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
      bsic,
      basicPolar,
    };
  },
});
</script>
