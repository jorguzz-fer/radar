<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="block"> Total Revenue </span>
          <span
            class="inline-block px-[8.3px] py-[1px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#172036] text-sm ltr:ml-[10px] rtl:mr-[10px] rounded-[100px]"
          >
            +10%
          </span>
        </div>
        <span class="block text-sm"> Last 30 days </span>
      </div>
      <h5 class="!text-lg md:!text-[20px] !mb-0 !mt-[5px]">$165,458</h5>
      <div
        class="mx-auto max-w-[200px] -mt-[20px] -mb-[10px] md:-mt-[23px] md:-mb-[16px]"
      >
        <apexchart
          v-if="isClient"
          type="bar"
          height="100"
          :options="totalRevenue"
          :series="revenue"
        ></apexchart>
      </div>
      <ul>
        <li
          class="text-sm ltr:pl-[30px] rtl:pr-[30px] flex justify-between relative mb-[4px] last:mb-0"
        >
          <span
            class="inline-block bg-primary-500 ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 w-[20px] h-[5px] rounded-md"
          ></span>
          <span class="block"> Fashion </span>
          <span class="block"> 75% </span>
        </li>
        <li
          class="text-sm ltr:pl-[30px] rtl:pr-[30px] flex justify-between relative mb-[4px] last:mb-0"
        >
          <span
            class="inline-block bg-primary-200 ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 w-[20px] h-[5px] rounded-md"
          ></span>
          <span class="block"> Others </span>
          <span class="block"> 25% </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalRevenueChart",
  setup() {
    const isClient = ref(false);
    const revenue = ref([
      {
        name: "Fashion",
        data: [20, 40, 25, 60, 30, 50],
      },
      {
        name: "Others",
        data: [20, 20, 25, 15, 35, 25],
      },
    ]);
    const totalRevenue = ref({
      chart: {
        type: "bar",
        height: 100,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "55%",
        },
      },
      colors: ["#605DFF", "#C2CDFF"],
      grid: {
        borderColor: "#ffffff",
      },
      stroke: {
        width: 2,
        show: true,
        colors: ["transparent"],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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
      fill: {
        opacity: 1,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      revenue,
      totalRevenue,
    };
  },
});
</script>
