<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="block"> Total Orders </span>
          <span
            class="inline-block px-[8.3px] py-[1px] text-orange-700 border border-orange-200 bg-danger-100 dark:bg-[#15203c] dark:border-[#172036] text-sm ltr:ml-[10px] rtl:mr-[10px] rounded-[100px]"
          >
            -7.6%
          </span>
        </div>
        <span class="block text-sm"> Last 7 days </span>
      </div>
      <h5 class="!text-lg md:!text-[20px] !mb-0 !mt-[5px]">$72,458</h5>
      <div
        class="mx-auto max-w-[150px] -mt-[10px] -mb-[10px] md:-mt-[25px] md:-mb-[16px]"
      >
        <apexchart
          v-if="isClient"
          type="bar"
          height="99"
          :options="totalOrders"
          :series="orders"
        ></apexchart>
      </div>
      <ul>
        <li
          class="text-sm ltr:pl-[30px] rtl:pr-[30px] flex justify-between relative mb-[4px] last:mb-0"
        >
          <span
            class="inline-block bg-primary-500 ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 w-[20px] h-[5px] rounded-md"
          ></span>
          <span class="block"> Completed </span>
          <span class="block"> 62% </span>
        </li>
        <li
          class="text-sm ltr:pl-[30px] rtl:pr-[30px] flex justify-between relative mb-[4px] last:mb-0"
        >
          <span
            class="inline-block bg-primary-200 ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 w-[20px] h-[5px] rounded-md"
          ></span>
          <span class="block"> Pending payment </span>
          <span class="block"> 38% </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalOrdersChartTwo",
  setup() {
    const isClient = ref(false);
    const orders = ref([
      {
        name: "Completed",
        data: [80, 55, 60, 55, 80],
      },
      {
        name: "Pending",
        data: [50, 85, 60, 70, 60],
      },
    ]);
    const totalOrders = ref({
      chart: {
        type: "bar",
        height: 99,
        toolbar: {
          show: false,
        },
      },
      colors: ["#1F64F1", "#C2CDFF"],
      plotOptions: {
        bar: {
          columnWidth: "85%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        show: true,
        colors: ["transparent"],
      },
      grid: {
        borderColor: "#ffffff",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
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
      orders,
      totalOrders,
    };
  },
});
</script>
