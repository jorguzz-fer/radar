<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <span class="block"> Pending Orders </span>
      <h3 class="-tracking-[0.5px] !mb-[4px] mt-px !text-3xl">113</h3>
      <span
        class="inline-block text-xs px-[9px] text-danger-700 border border-danger-300 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px]"
      >
        -3.2%
      </span>
      <span class="block text-xs mt-[5px]"> vs previous 30 days </span>
      <div
        class="mt-[5px] absolute ltr:-right-[8px] rtl:-left-[8px] top-1/2 -translate-y-1/2 max-w-[120px]"
      >
        <div id="restaurantPendingOrdersChart"></div>
        <apexchart
          v-if="isClient"
          type="area"
          height="135"
          :options="pendingOrders"
          :series="orders"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PendingOrders",
  setup() {
    const isClient = ref(false);
    const orders = ref([
      {
        name: "Orders",
        data: [15, 11, 9, 10, 7, 7, 3],
      },
    ]);
    const pendingOrders = ref({
      chart: {
        type: "area",
        height: 135,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#868DFF"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#868DFF",
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        show: false,
        labels: {
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
          shape: "circle",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      orders,
      pendingOrders,
    };
  },
});
</script>
