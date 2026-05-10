<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Multiple Y-Axis Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="line"
        height="350"
        :options="mltipleYaxis"
        :series="yaxis"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MultipleYaxisChart",
  setup() {
    const isClient = ref(false);
    const yaxis = ref([
      {
        name: "Income",
        type: "column",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
      },
      {
        name: "Cashflow",
        type: "column",
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
      },
      {
        name: "Revenue",
        type: "line",
        data: [20, 29, 37, 36, 44, 45, 50, 58],
      },
    ]);
    const mltipleYaxis = ref({
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 1, 4],
      },
      title: {
        text: "XYZ - Stock Analysis (2009 - 2016)",
        align: "left",
        offsetX: 110,
        style: {
          fontWeight: "500",
          fontSize: "14px",
          color: "#64748B",
        },
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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
      yaxis: [
        {
          labels: {
            show: true,
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
          title: {
            text: "Income (thousand crores)",
            style: {
              color: "#e74c3c",
              fontWeight: 400,
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: "Income",
          opposite: true,
          labels: {
            show: true,
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
          title: {
            text: "Operating Cashflow (thousand crores)",
            style: {
              color: "#0f79f3",
              fontWeight: 400,
            },
          },
        },
        {
          seriesName: "Revenue",
          opposite: true,
          labels: {
            show: true,
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
          title: {
            text: "Revenue (thousand crores)",
            style: {
              color: "#796df6",
              fontWeight: 400,
            },
          },
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60,
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      legend: {
        horizontalAlign: "left",
        fontSize: "12px",
        offsetX: 40,
        offsetY: 5,
        show: true,
        labels: {
          colors: "#64748B",
        },
        itemMargin: {
          horizontal: 8,
          vertical: 0,
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
      yaxis,
      mltipleYaxis,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin-bottom: -14px !important;
}
</style>
