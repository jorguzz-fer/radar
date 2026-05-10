<template>
  <div
    class="relative rounded-md p-[20px] md:p-[25px] !pb-[65px] mb-[25px] border border-gray-100 dark:border-[#172036]"
  >
    <div class="flex items-center">
      <div
        class="bg-orange-100 text-white text-center relative z-[1] ltr:mr-[15px] rtl:ml-[15px] rounded-[5px] text-[25px] w-[55px] h-[55px]"
      >
        <span
          class="inset-0 -z-[1] m-[8px] absolute rounded-[5px] bg-orange-500"
        ></span>
        <i
          class="ri-money-dollar-circle-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
        ></i>
      </div>
      <div>
        <h6 class="!text-lg md:!text-xl !mb-[2px] !font-medium">$250,000</h6>
        <span class="block"> Total Revenue </span>
      </div>
    </div>
    <div class="mt-[25px] md:mt-[45px] flex items-center">
      <span
        class="font-medium inline-block relative text-xs rounded-full border border-success-300 text-success-700 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] py-[2px] ltr:pl-[20px] rtl:pr-[20px] ltr:pr-[10px] rtl:pl-[10px]"
      >
        <i
          class="ri-arrow-up-fill absolute top-1/2 -translate-y-1/2 text-base -mt-px ltr:left-[6px] rtl:right-[6px]"
        ></i>
        12%
      </span>
      <span class="block ltr:ml-[10px] rtl:mr-[10px] text-xs">
        from last week
      </span>
    </div>
    <div class="absolute left-[15px] right-[15px] -bottom-[30px]">
      <apexchart
        v-if="isClient"
        type="line"
        height="120"
        :options="totalRevenue"
        :series="revenue"
      ></apexchart>
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
        name: "Revenue",
        data: [0, 35, 25, 45, 30, 45, 25, 45, 70],
      },
    ]);
    const totalRevenue = ref({
      chart: {
        height: 120,
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
      colors: ["#FD5812"],
      stroke: {
        width: 2,
        curve: "straight",
      },
      markers: {
        size: 3,
        strokeWidth: 0,
        hover: {
          size: 5,
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
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
        horizontalAlign: "center",
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
      revenue,
      totalRevenue,
    };
  },
});
</script>
