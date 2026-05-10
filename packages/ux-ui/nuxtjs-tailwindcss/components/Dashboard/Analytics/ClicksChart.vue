<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <span class="block mb-[5px]"> Clicks </span>
      <div class="flex items-center">
        <h6 class="!mb-0 !text-[20px]">4,500</h6>
        <span
          class="inline-block font-medium relative text-[10px] ltr:ml-[11px] rtl:mr-[11px] rounded-sm bg-success-100 text-success-600 dark:bg-[#15203c] py-[1.5px] ltr:pl-[25px] rtl:pr-[25px] ltr:pr-[7px] rtl:pl-[7px]"
        >
          <i
            class="ri-arrow-up-s-fill absolute ltr:left-[2px] rtl:right-[2px] text-[22px] top-1/2 -translate-y-1/2"
          ></i>
          37.5%
        </span>
      </div>
      <span class="text-xs block mt-[29px]"> Last 30 days </span>
      <div
        class="absolute max-w-[140px] md:max-w-[160px] ltr:-right-[9px] rtl:-left-[9px] top-1/2 -translate-y-1/2"
      >
        <apexchart
          v-if="isClient"
          type="area"
          height="150"
          :options="clicksChart"
          :series="clicks"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ClicksChart",
  setup() {
    const isClient = ref(false);
    const clicks = ref([
      {
        name: "Clicks",
        data: [
          100, 130, 115, 170, 110, 120, 85, 140, 150, 100, 110, 90, 160, 125,
          105, 130, 145, 120, 150, 155, 220, 165,
        ],
      },
    ]);
    const clicksChart = ref({
      chart: {
        type: "area",
        height: 150,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      colors: ["#605DFF"],
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.9,
        },
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
          "13 Jan",
          "14 Jan",
          "15 Jan",
          "16 Jan",
          "17 Jan",
          "18 Jan",
          "19 Jan",
          "20 Jan",
          "21 Jan",
          "22 Jan",
        ],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        show: false,
        max: 250,
        min: 0,
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      legend: {
        show: true,
        position: "top",
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
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      clicks,
      clicksChart,
    };
  },
});
</script>
