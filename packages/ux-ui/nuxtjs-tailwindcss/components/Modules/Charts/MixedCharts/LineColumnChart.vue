<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Line & Column Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="line"
        height="350"
        :options="lineColumn"
        :series="line"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "LineColumnChart",
  setup() {
    const isClient = ref(false);
    const line = ref([
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752],
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22],
      },
    ]);
    const lineColumn = ref({
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: true,
        },
      },
      stroke: {
        width: [0, 4],
      },
      // title: {
      //     text: "Traffic Sources",
      //     align: "left",
      //     offsetX: -9,
      //     style: {
      //         fontWeight: '500',
      //         fontSize: '14px',
      //         color: '#64748B'
      //     }
      // },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
        style: {
          fontSize: "12px",
        },
      },
      labels: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
      ],
      xaxis: {
        type: "datetime",
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
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      colors: ["#605DFF"],
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
      yaxis: [
        {
          tickAmount: 5,
          title: {
            text: "Website Blog",
            style: {
              color: "transparent",
            },
          },
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
        {
          tickAmount: 5,
          opposite: true,
          title: {
            text: "Social Media",
            style: {
              color: "transparent",
            },
          },
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
      ],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      line,
      lineColumn,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart {
  margin: {
    left: -14px;
    bottom: -14px !important;
  }
}
</style>
