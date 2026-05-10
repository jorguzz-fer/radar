<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Shipment Delivered</h5>
      </div>
      <div class="trezo-card-subtitle">
        <span class="block"> Last 30 days </span>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="ltr:-ml-[15px] rtl:-mr-[15px] -mb-[20px] -mt-[15px]">
        <apexchart
          v-if="isClient"
          type="line"
          height="292"
          :options="shipmentDelivered"
          :series="delivered"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ShipmentDeliveredChart",
  setup() {
    const isClient = ref(false);
    const delivered = ref([
      {
        name: "Car Box",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "Truck Cargo",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "Ship Cargo",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ]);
    const shipmentDelivered = ref({
      chart: {
        height: 292,
        type: "line",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#FD5812", "#37D80A"],
      stroke: {
        width: [0, 1, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "18.14px",
        },
      },
      fill: {
        opacity: [1, 0.08, 1],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisTicks: {
          show: true,
          color: "#DDE4FF",
        },
        axisBorder: {
          show: true,
          color: "#DDE4FF",
        },
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        max: 80,
        min: 0,
        labels: {
          formatter: (val: string) => {
            return val + "%";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#DDE4FF",
        },
        axisTicks: {
          show: false,
          color: "#DDE4FF",
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: string | number | undefined) {
            if (typeof y !== "undefined") {
              return Number(y).toFixed(0) + "%";
            }
            return y;
          },
        },
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 8,
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
      grid: {
        show: true,
        strokeDashArray: 5,
        borderColor: "#EEF1FF",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      delivered,
      shipmentDelivered,
    };
  },
});
</script>
