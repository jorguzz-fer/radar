<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <div class="flex items-center justify-between">
        <span
          class="inline-block px-[8.5px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px] text-xs"
        >
          +35%
        </span>
        <span class="block text-xs"> Last 30 days </span>
      </div>
      <div class="h-[70px]"></div>
      <span class="block mb-[4px]"> Properties for Rent </span>
      <h3 class="!mb-0 !text-[20px]">2,510</h3>
      <div class="absolute ltr:-right-[95px] rtl:-left-[95px] -bottom-[35px]">
        <apexchart
          v-if="isClient"
          type="radialBar"
          height="170"
          :options="propertiesForRent"
          :series="rent"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PropertiesForRentChart",
  setup() {
    const isClient = ref(false);
    const rent = ref([35]);
    const propertiesForRent = ref({
      chart: {
        height: 170,
        type: "radialBar",
      },
      colors: ["#605DFF"],
      plotOptions: {
        radialBar: {
          hollow: {
            // margin: 0,
            size: "45%",
            background: "#F5F7F8",
            margin: 10,
          },
          track: {
            background: "#F5F7F8",
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false,
            },
            value: {
              show: true,
              offsetY: 5,
              color: "#3A4252",
              fontSize: "14px",
              fontWeight: 700,
              fontFamily: "Inter",
            },
          },
        },
      },
      stroke: {
        lineCap: "0",
      },
      labels: ["Status"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      rent,
      propertiesForRent,
    };
  },
});
</script>
