<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <span class="block"> Average Delivery Time </span>
      </div>
      <div class="trezo-card-subtitle">
        <span class="block"> Per Week </span>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="-mt-[28px] -mb-[22px]">
        <apexchart
          v-if="isClient"
          type="bar"
          height="186"
          :options="averageDeliveryTime"
          :series="average"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AverageDeliveryTimeChart",
  setup() {
    const isClient = ref(false);
    const average = ref([
      {
        name: "Time",
        data: [70, 60, 80, 100, 70, 40, 80],
      },
    ]);
    const averageDeliveryTime = ref({
      chart: {
        type: "bar",
        height: 186,
        toolbar: {
          show: false,
        },
      },
      colors: ["#BDDCFF"],
      plotOptions: {
        bar: {
          columnWidth: "18.35px",
          borderRadius: 0,
          distributed: true,
          horizontal: false,
        },
      },
      grid: {
        show: true,
        strokeDashArray: 5,
        borderColor: "#EEF1FF",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
        show: false,
        tickAmount: 5,
        labels: {
          formatter: (val: string) => {
            return val + " minutes";
          },
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + " minutes";
          },
        },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 6,
          offsetX: -2,
          offsetY: -0.5,
          shape: "square",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      average,
      averageDeliveryTime,
    };
  },
});
</script>
