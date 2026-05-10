<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <span class="block"> Total Orders </span>
      <h5 class="!mb-0 mt-[3px] !text-[20px]">$72,458</h5>
      <div
        class="absolute -top-[28px] ltr:-right-[9px] rtl:-left-[9px] max-w-[120px]"
      >
        <apexchart
          v-if="isClient"
          type="bar"
          height="110"
          :options="totalOrders"
          :series="orders"
        ></apexchart>
      </div>
      <div class="mt-[25px] md:mt-[34px] flex items-center justify-between">
        <span
          class="inline-block text-sm text-success-700 py-[1px] px-[8.3px] border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#172036] rounded-xl"
        >
          +25%
        </span>
        <span class="block text-sm"> Last 90 days </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalOrdersChart",
  setup() {
    const isClient = ref(false);
    const orders = ref([
      {
        name: "Total Orders",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
    ]);
    const totalOrders = ref({
      chart: {
        type: "bar",
        height: 110,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          borderRadius: 2,
        },
      },
      colors: ["#0dcaf0"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        width: 2,
        show: true,
        colors: ["transparent"],
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
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$" + val;
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      orders,
      totalOrders,
    };
  },
});
</script>
