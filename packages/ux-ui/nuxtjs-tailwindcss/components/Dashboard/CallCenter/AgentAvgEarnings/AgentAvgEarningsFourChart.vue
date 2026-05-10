<template>
  <apexchart
    v-if="isClient"
    type="area"
    height="275"
    :options="agentAvgEarnings"
    :series="earnings"
  ></apexchart>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AgentAvgEarningsFourChart",
  setup() {
    const isClient = ref(false);
    const earnings = ref([
      {
        name: "Agent Avg Earnings",
        data: [60, 60, 40, 40, 20, 20, 30, 50, 60, 60, 40, 20],
      },
    ]);
    const agentAvgEarnings = ref({
      chart: {
        type: "area",
        height: 275,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#9135E8"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "stepline", //curve: ['straight', 'smooth', 'monotoneCubic', 'stepline']
        width: 3,
        lineCap: "10",
      },
      grid: {
        borderColor: "#ECF0FF",
        strokeDashArray: 10,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.8,
        },
      },
      xaxis: {
        categories: ["NOV 16", "17", "18", "19", "20", "21"],
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
        tickAmount: 4,
        max: 80,
        min: 0,
        labels: {
          show: false,
          formatter: (val: string) => {
            return "$" + val + "K";
          },
          style: {
            colors: "#9C9AB6",
            fontSize: "12px",
            fontWeight: 500,
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
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "center",
        fontFamily: "Inter",
        fontWeight: 400,
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
          radius: 2,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      earnings,
      agentAvgEarnings,
    };
  },
});
</script>
