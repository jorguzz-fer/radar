<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Dashed Line Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="line"
        height="350"
        :options="dashedLine"
        :series="dashed"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "DashedLineChart",
  setup() {
    const isClient = ref(false);
    const dashed = ref([
      {
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
      {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      },
      {
        name: "Total Visits",
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
      },
    ]);
    const dashedLine = ref({
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: true,
        },
      },
      colors: ["#796df6", "#00cae3", "#605DFF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5],
      },
      title: {
        // text: "Page Statistics",
        // align: "left",
        // offsetX: -9,
        // style: {
        //     fontWeight: '500',
        //     fontSize: '14px',
        //     color: '#64748B'
        // }
      },
      legend: {
        show: true,
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
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
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
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val: any) {
                return val + " (mins) ";
              },
            },
          },
          {
            title: {
              formatter: function (val: any) {
                return val + " per session ";
              },
            },
          },
          {
            title: {
              formatter: function (val: any) {
                return val + " ";
              },
            },
          },
        ],
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      yaxis: {
        tickAmount: 5,
        max: 110,
        min: 0,
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
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      dashed,
      dashedLine,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin-bottom: -20px !important;
}
</style>
