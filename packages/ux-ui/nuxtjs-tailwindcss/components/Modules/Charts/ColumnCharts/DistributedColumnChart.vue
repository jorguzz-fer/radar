<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Distributed Column Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="bar"
        height="370"
        :options="distributedColumn"
        :series="distributed"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "DistributedColumnChart",
  setup() {
    const isClient = ref(false);
    const distributed = ref([
      {
        name: "distibuted",
        data: [21, 22, 10, 28, 16, 21, 13, 30],
      },
    ]);
    const distributedColumn = ref({
      chart: {
        height: 370,
        type: "bar",
        events: {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          click: function (_chart: unknown, _w: unknown, e: unknown) {
            // console.log(chart, w, e)
          },
        },
        toolbar: {
          show: false,
        },
      },
      colors: [
        "#605DFF",
        "#796df6",
        "#00cae3",
        "#ffb264",
        "#2ed47e",
        "#e74c3c",
        "#26a69a",
        "#d10ce8",
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
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
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      xaxis: {
        categories: [
          ["John", "Doe"],
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
          ["Lily", "Roberts"],
        ],
        labels: {
          show: true,
          style: {
            colors: [
              "#605DFF",
              "#796df6",
              "#00cae3",
              "#ffb264",
              "#2ed47e",
              "#e74c3c",
              "#26a69a",
              "#d10ce8",
            ],
            fontSize: "12px",
          },
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      distributed,
      distributedColumn,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin: {
    top: -20px;
    left: -13px;
    bottom: -20px !important;
  }
}
</style>
