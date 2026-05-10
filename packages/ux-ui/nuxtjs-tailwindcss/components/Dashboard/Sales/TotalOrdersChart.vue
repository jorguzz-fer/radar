<template>
  <div
    class="relative rounded-md p-[20px] md:p-[25px] !pb-[65px] mb-[25px] border border-gray-100 dark:border-[#172036]"
  >
    <div class="flex items-center">
      <div
        class="bg-purple-100 text-white text-center relative z-[1] ltr:mr-[15px] rtl:ml-[15px] rounded-[5px] text-[25px] w-[55px] h-[55px]"
      >
        <span
          class="inset-0 -z-[1] m-[8px] absolute rounded-[5px] bg-purple-500"
        ></span>
        <i
          class="ri-shopping-bag-3-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
        ></i>
      </div>
      <div>
        <h6 class="!text-lg md:!text-xl !mb-[2px] !font-medium">1,250</h6>
        <span class="block"> Total Orders </span>
      </div>
    </div>
    <div class="mt-[25px] md:mt-[45px] flex items-center">
      <span
        class="font-medium inline-block relative text-xs rounded-full border border-success-300 text-success-700 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] py-[2px] ltr:pl-[20px] rtl:pr-[20px] ltr:pr-[10px] rtl:pl-[10px]"
      >
        <i
          class="ri-arrow-up-fill absolute top-1/2 -translate-y-1/2 text-base -mt-px ltr:left-[6px] rtl:right-[6px]"
        ></i>
        8%
      </span>
      <span class="block ltr:ml-[10px] rtl:mr-[10px] text-xs">
        from last week
      </span>
    </div>
    <div
      class="absolute -bottom-[31px] ltr:left-0 rtl:right-0 ltr:right-[10px] rtl:left-[10px]"
    >
      <apexchart
        v-if="isClient"
        type="bar"
        height="120"
        :options="totalOrders"
        :series="orders"
      ></apexchart>
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
        name: "Orders",
        data: [60, 50, 40, 50, 45, 30, 50, 35, 60, 45, 30, 60],
      },
    ]);
    const totalOrders = ref({
      chart: {
        type: "bar",
        height: 120,
        toolbar: {
          show: false,
        },
      },
      colors: ["#AD63F6"],
      plotOptions: {
        bar: {
          borderRadius: 3,
          columnWidth: "9px",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
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
          "Sep",
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
        labels: {
          show: false,
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
      fill: {
        opacity: 1,
      },
      legend: {
        show: true,
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
      grid: {
        show: false,
        borderColor: "#ECEEF2",
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
