<template>
  <div
    class="relative rounded-md p-[20px] md:p-[25px] !pb-[65px] mb-[25px] border border-gray-100 dark:border-[#172036]"
  >
    <div class="flex items-center">
      <div
        class="bg-secondary-100 text-white text-center relative z-[1] ltr:mr-[15px] rtl:ml-[15px] rounded-[5px] text-[25px] w-[55px] h-[55px]"
      >
        <span
          class="inset-0 -z-[1] m-[8px] absolute rounded-[5px] bg-secondary-500"
        ></span>
        <i
          class="ri-wallet-2-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
        ></i>
      </div>
      <div>
        <h6 class="!text-lg md:!text-xl !mb-[2px] !font-medium">$80,000</h6>
        <span class="block"> Total Profit </span>
      </div>
    </div>
    <div class="mt-[25px] md:mt-[45px] flex items-center">
      <span
        class="font-medium inline-block relative text-xs rounded-full border border-danger-300 text-orange-600 bg-danger-200 dark:bg-[#15203c] dark:border-[#15203c] py-[2px] ltr:pl-[20px] rtl:pr-[20px] ltr:pr-[10px] rtl:pl-[10px]"
      >
        <i
          class="ri-arrow-down-fill absolute top-1/2 -translate-y-1/2 text-base -mt-px ltr:left-[6px] rtl:right-[6px]"
        ></i>
        7%
      </span>
      <span class="block ltr:ml-[10px] rtl:mr-[10px] text-xs">
        from last week
      </span>
    </div>
    <div
      class="absolute left-0 right-0 -bottom-[30px] ltr:-ml-[12px] rtl:-mr-[12px] ltr:-mr-[10px] rtl:-ml-[10px]"
    >
      <apexchart
        v-if="isClient"
        type="area"
        height="120"
        :options="totalProfit"
        :series="profit"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalProfitChart",
  setup() {
    const isClient = ref(false);
    const profit = ref([
      {
        name: "Profit",
        data: [3, 5, 10, 5, 9, 7, 15],
      },
    ]);
    const totalProfit = ref({
      chart: {
        type: "area",
        height: 120,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#3584FC"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
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
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
        labels: {
          formatter: (val: string) => {
            return "$" + val + "k";
          },
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
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      profit,
      totalProfit,
    };
  },
});
</script>
