<template>
  <div
    class="trezo-card bg-primary-600 mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content relative z-[1]">
      <h6 class="!text-md !mb-[6px] !font-light !text-white">
        Realtime Active Users
      </h6>
      <h2
        class="!text-4xl !mb-[20px] md:!mb-[25px] lg:!mb-[45px] !text-white !leading-none !font-medium -tracking-[1px]"
      >
        4,890
      </h2>
      <span class="block text-white pb-[6px] border-b border-primary-500">
        Page views per second
      </span>
      <div
        class="-mb-[10px] md:-mb-[2px] ltr:-ml-[29px] rtl:-mr-[29px] ltr:-mr-[17px] rtl:-ml-[17px]"
      >
        <apexchart
          v-if="isClient"
          type="bar"
          height="170"
          :options="realtimeActiveUsers"
          :series="users"
        ></apexchart>
      </div>
      <span
        class="block text-white pb-[6px] border-b border-primary-500 font-semibold"
      >
        Top Active Pages
      </span>

      <ul class="mt-[10px] mb-[20px] md:mb-[25px]">
        <li
          class="text-white flex items-center justify-between pb-[4.8px] mb-[4.8px] border-b border-primary-500 last:mb-0"
        >
          <span class="block">
            /reports/trends-analysis
            <a href="#" class="ml-[5px] transition-all hover:text-gray-200">
              <i class="ri-external-link-line"></i>
            </a>
          </span>
          <span class="block"> 1520 </span>
        </li>
        <li
          class="text-white flex items-center justify-between pb-[4.8px] mb-[4.8px] border-b border-primary-500 last:mb-0"
        >
          <span class="block">
            /monitoring/user-activity
            <a href="#" class="ml-[5px] transition-all hover:text-gray-200">
              <i class="ri-external-link-line"></i>
            </a>
          </span>
          <span class="block"> 980 </span>
        </li>
        <li
          class="text-white flex items-center justify-between pb-[4.8px] mb-[4.8px] border-b border-primary-500 last:mb-0"
        >
          <span class="block">
            /specific/industry-comparisons
            <a href="#" class="ml-[5px] transition-all hover:text-gray-200">
              <i class="ri-external-link-line"></i>
            </a>
          </span>
          <span class="block"> 856 </span>
        </li>
        <li
          class="text-white flex items-center justify-between pb-[4.8px] mb-[4.8px] border-b border-primary-500 last:mb-0"
        >
          <span class="block">
            /global-reach-2023/statistics
            <a href="#" class="ml-[5px] transition-all hover:text-gray-200">
              <i class="ri-external-link-line"></i>
            </a>
          </span>
          <span class="block"> 735 </span>
        </li>
        <li
          class="text-white flex items-center justify-between pb-[4.8px] mb-[4.8px] border-b border-primary-500 last:mb-0"
        >
          <span class="block">
            /security-alerts/2025-update
            <a href="#" class="ml-[5px] transition-all hover:text-gray-200">
              <i class="ri-external-link-line"></i>
            </a>
          </span>
          <span class="block"> 520 </span>
        </li>
      </ul>

      <div class="ltr:text-right rtl:text-left">
        <a
          href="#"
          class="inline-block px-[12px] py-[4px] rounded-md text-white font-medium border border-primary-400 transition-all hover:bg-primary-400"
        >
          <span class="inline-block relative ltr:pr-[17px] rtl:pl-[17px]">
            All Real-Time Report
            <i
              class="ri-arrow-right-s-line absolute ltr:-right-[6px] rtl:-left-[6px] text-[20px] top-1/2 -translate-y-1/2"
            ></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RealtimeActiveUsersChart",
  setup() {
    const isClient = ref(false);
    const users = ref([
      {
        name: "Users",
        data: [
          100, 90, 85, 95, 100, 100, 90, 85, 95, 100, 100, 90, 85, 95, 100, 100,
          90, 85, 95, 100, 100, 90, 85, 95, 100, 100, 90, 85, 95, 100,
        ],
      },
    ]);
    const realtimeActiveUsers = ref({
      chart: {
        type: "bar",
        height: 170,
        toolbar: {
          show: false,
        },
      },
      colors: ["#757DFF"],
      plotOptions: {
        bar: {
          columnWidth: "100%",
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
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
        tickAmount: 5,
        max: 100,
        min: 0,
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
      users,
      realtimeActiveUsers,
    };
  },
});
</script>
