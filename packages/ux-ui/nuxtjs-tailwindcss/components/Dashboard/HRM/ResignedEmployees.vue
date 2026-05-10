<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[30px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <div class="flex items-center gap-[12px]">
        <div
          class="bg-orange-600 rounded-[4px] text-white w-[44px] h-[44px] flex items-center justify-center"
        >
          <i class="material-symbols-outlined"> person_remove </i>
        </div>
        <div>
          <span class="block"> Resigned Employees </span>
          <h5 class="!mb-0 mt-[2px] !text-[20px] !font-semibold">3,18</h5>
        </div>
      </div>
      <div class="mt-[32px] flex items-center gap-[7px]">
        <div
          class="bg-orange-100 dark:bg-[#15203c] text-orange-700 rounded-[4px] w-[26px] h-[26px] flex items-center justify-center text-lg"
        >
          <i class="ri-arrow-right-down-line"></i>
        </div>
        <div class="text-gray-600 dark:text-gray-400">
          <span class="font-medium text-gray-700 dark:text-gray-400">-5%</span>
          last year
        </div>
      </div>
      <div
        class="absolute -bottom-[25px] ltr:-right-[10px] rtl:-left-[10px] max-w-[125px]"
      >
        <apexchart
          v-if="isClient"
          type="bar"
          height="140"
          :options="rsignedEmployees"
          :series="employees"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ResignedEmployees",
  setup() {
    const isClient = ref(false);
    const employees = ref([
      {
        name: "Resigned",
        data: [44, 30, 57, 35, 61, 35, 63],
      },
    ]);
    const rsignedEmployees = ref({
      chart: {
        type: "bar",
        height: 140,
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
      colors: ["#EE3E08"],
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
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "Total:" + val;
          },
        },
      },
      fill: {
        opacity: 1,
        colors: "#EE3E08",
        type: "solid",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      employees,
      rsignedEmployees,
    };
  },
});
</script>
