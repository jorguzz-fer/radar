<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Employee Attendance Trends</h5>
      </div>
      <div class="trezo-card-subtitle mt-[12px] sm:mt-0">
        <button
          type="button"
          class="rounded-md inline-block transition-all py-[3.5px] px-[15px] bg-[#F6F7F9] dark:bg-[#0a0e19] border border-gray-100 dark:border-[#172036] hover:border-primary-500 hover:bg-primary-500 hover:text-white"
        >
          <span class="inline-block relative ltr:pl-[24px] rtl:pr-[24px]">
            <i
              class="ri-calendar-line absolute text-[16px] top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"
            ></i>
            July 01 - July 31, 2025
          </span>
        </button>
      </div>
    </div>
    <div class="trezo-card-content">
      <ul>
        <li class="md:inline-block mb-[7px] md:mb-0">
          Avg. Daily Attend:
          <span class="font-semibold ltr:2xl:ml-[6px] rtl:2xl:mr-[6px]">
            320
          </span>
        </li>
        <li class="hidden md:inline-block mb-[7px] md:mb-0">
          <div
            class="w-[1px] h-[10px] bg-[#D5D9E2] mx-[12px] lg:mx-[8px] xl:mx-[15px] 2xl:mx-[21px]"
          ></div>
        </li>
        <li class="md:inline-block mb-[7px] md:mb-0">
          High. Attend:
          <span class="font-semibold ltr:2xl:ml-[6px] rtl:2xl:mr-[6px]">
            340
          </span>
          (October 5th)
        </li>
        <li class="hidden md:inline-block mb-[7px] md:mb-0">
          <div
            class="w-[1px] h-[10px] bg-[#D5D9E2] mx-[12px] lg:mx-[8px] xl:mx-[15px] 2xl:mx-[21px]"
          ></div>
        </li>
        <li class="md:inline-block mb-[7px] md:mb-0">
          Low. Attend:
          <span class="font-semibold ltr:2xl:ml-[6px] rtl:2xl:mr-[6px]">
            290
          </span>
          (October 1st)
        </li>
      </ul>
      <div class="ltr:-ml-[15px] rtl:-mr-[15px] -mb-[25px]">
        <apexchart
          v-if="isClient"
          type="area"
          height="424"
          :options="employeeAttendanceTrends"
          :series="attendance"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "EmployeeAttendanceTrendsChart",
  setup() {
    const isClient = ref(false);

    const attendance = ref([
      {
        name: "Attendance",
        data: [170, 450, 400, 550, 550, 650, 820],
      },
      {
        name: "Absent",
        data: [320, 300, 650, 400, 750, 650, 600],
      },
    ]);

    const employeeAttendanceTrends = ref({
      chart: {
        type: "area",
        height: 424,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#EE3E08"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        strokeDashArray: 7,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "straight",
        width: [2, 2],
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.8,
        },
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        axisTicks: {
          show: false,
          color: "#D5D9E2",
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 6,
        max: 960,
        min: 0,
        labels: {
          // formatter: (val) => {
          //     return '$' + val + 'k'
          // },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        axisTicks: {
          show: false,
          color: "#D5D9E2",
        },
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 12,
          vertical: 10,
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      attendance,
      employeeAttendanceTrends,
    };
  },
});
</script>
