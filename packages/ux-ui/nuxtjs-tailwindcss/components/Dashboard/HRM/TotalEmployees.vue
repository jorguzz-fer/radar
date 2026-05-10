<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[30px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <div class="flex items-center gap-[12px]">
        <div
          class="bg-primary-600 rounded-[4px] text-white w-[44px] h-[44px] flex items-center justify-center"
        >
          <i class="material-symbols-outlined"> group </i>
        </div>
        <div>
          <span class="block"> Total Employees </span>
          <h5 class="!mb-0 mt-[2px] !text-[20px] !font-semibold">15,720</h5>
        </div>
      </div>
      <div class="mt-[32px] flex items-center gap-[7px]">
        <div
          class="bg-success-100 dark:bg-[#15203c] text-success-700 rounded-[4px] w-[26px] h-[26px] flex items-center justify-center text-lg"
        >
          <i class="ri-arrow-right-up-line"></i>
        </div>
        <div class="text-gray-600 dark:text-gray-400">
          <span class="font-medium text-gray-700 dark:text-gray-400">+12%</span>
          last year
        </div>
      </div>
      <div
        class="absolute -bottom-[20px] ltr:-right-[10px] rtl:-left-[10px] max-w-[125px]"
      >
        <apexchart
          v-if="isClient"
          type="area"
          height="140"
          :options="totalEmployees"
          :series="employees"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalEmployees",
  setup() {
    const isClient = ref(false);
    const employees = ref([
      {
        name: "Employees",
        data: [3, 12, 8, 15, 8, 10, 15],
      },
    ]);
    const totalEmployees = ref({
      chart: {
        type: "area",
        height: 140,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#4936F5"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "smooth",
        width: 0,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
        labels: {
          formatter: (val: string) => {
            return val + "%";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
        fontFamily: "Inter",
        fontWeight: 400,
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
          radius: 2,
          shape: "diamond",
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "Total:" + val;
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      employees,
      totalEmployees,
    };
  },
});
</script>
