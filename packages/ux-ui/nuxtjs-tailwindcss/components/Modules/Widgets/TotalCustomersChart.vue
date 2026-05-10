<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="block"> Total Customers </span>
          <span
            class="inline-block px-[8.3px] py-[1px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#172036] text-sm ltr:ml-[10px] rtl:mr-[10px] rounded-[100px]"
          >
            +5.4
          </span>
        </div>
        <span class="block text-sm"> Last 7 days </span>
      </div>
      <h5 class="!text-lg md:!text-[20px] !mb-0 !mt-[5px]">1,528</h5>
      <div class="mx-auto max-w-[300px] -mt-[33px] -mb-[20px]">
        <apexchart
          v-if="isClient"
          type="line"
          height="140"
          :options="totalCustomers"
          :series="customers"
        ></apexchart>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span class="block"> 1 June </span>
        <span class="block"> 7 June </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalCustomersChart",
  setup() {
    const isClient = ref(false);
    const customers = ref([
      {
        name: "Orders",
        data: [55, 50, 60, 45, 85, 80, 100],
      },
      {
        name: "Sales",
        data: [45, 38, 80, 65, 55, 75, 90],
      },
    ]);
    const totalCustomers = ref({
      chart: {
        height: 140,
        type: "line",
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
      colors: ["#605DFF", "#C2CDFF"],
      stroke: {
        width: 2,
        curve: "straight",
      },
      grid: {
        borderColor: "#ffffff",
      },
      xaxis: {
        categories: [
          "01 Jun",
          "02 Jun",
          "03 Jun",
          "04 Jun",
          "05 Jun",
          "06 Jun",
          "07 Jun",
        ],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
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
      },
      legend: {
        show: false,
        fontSize: "12px",
        position: "bottom",
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      customers,
      totalCustomers,
    };
  },
});
</script>
