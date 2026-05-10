<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title">
        <span class="block mb-[4px]"> Todays Shipments </span>
        <h5 class="mb-0 md:text-[20px]">9,120 Ton</h5>
      </div>
      <div class="trezo-card-subtitle">
        <span
          class="inline-block px-[8.5px] text-success-600 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px] text-xs"
        >
          +5%
        </span>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="-mt-[26px] ltr:-ml-[15px] rtl:-mr-[15px] -mb-[29px]">
        <apexchart
          v-if="isClient"
          type="line"
          height="175"
          :options="todaysShipments"
          :series="shipments"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TodaysShipmentsChart",
  setup() {
    const isClient = ref(false);
    const shipments = ref([
      {
        name: "Todays Shipments",
        data: [10, 31, 25, 40, 50, 50, 100],
      },
    ]);
    const todaysShipments = ref({
      chart: {
        height: 175,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 0,
        strokeWidth: 0,
        hover: {
          size: 0,
        },
      },
      colors: ["#5C61F2"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      grid: {
        borderColor: "#ECF0FF",
        row: {
          colors: ["#F6F7F9", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm", "12am"],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
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
        tickAmount: 3,
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        y: {
          formatter: (val: string) => {
            return "" + val + "Ton";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      shipments,
      todaysShipments,
    };
  },
});
</script>
