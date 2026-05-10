<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Stacked Column Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="bar"
        height="350"
        :options="stackedColumn"
        :series="stacked"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "StackedColumnChart",
  setup() {
    const isClient = ref(false);
    const stacked = ref([
      {
        name: "Product A",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "Product B",
        data: [13, 23, 20, 8, 13, 27],
      },
      {
        name: "Product C",
        data: [11, 17, 15, 15, 21, 14],
      },
      {
        name: "Product D",
        data: [21, 7, 25, 13, 22, 8],
      },
    ]);
    const stackedColumn = ref({
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      colors: ["#605DFF", "#00cae3", "#ffb264", "#e74c3c"],
      xaxis: {
        type: "category",
        categories: [
          "01/2025",
          "02/2025",
          "03/2025",
          "04/2025",
          "05/2025",
          "06/2025",
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
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      legend: {
        position: "right",
        fontSize: "12px",
        offsetY: 40,
        labels: {
          colors: "#64748B",
        },
        itemMargin: {
          horizontal: 0,
          vertical: 5,
        },
        markers: {
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
        },
      },
      fill: {
        opacity: 1,
      },
      yaxis: {
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
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      stacked,
      stackedColumn,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin-bottom: -20px !important;
}
</style>
