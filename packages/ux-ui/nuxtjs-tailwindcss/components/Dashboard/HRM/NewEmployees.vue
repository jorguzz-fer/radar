<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[30px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <div class="flex items-center gap-[12px]">
        <div
          class="bg-purple-600 rounded-[4px] text-white w-[44px] h-[44px] flex items-center justify-center"
        >
          <i class="material-symbols-outlined"> person_add </i>
        </div>
        <div>
          <span class="block"> New Employees </span>
          <h5 class="!mb-0 mt-[2px] !text-[20px] !font-semibold">8,24</h5>
        </div>
      </div>
      <div class="mt-[32px] flex items-center gap-[7px]">
        <div
          class="bg-success-100 dark:bg-[#15203c] text-success-700 rounded-[4px] w-[26px] h-[26px] flex items-center justify-center text-lg"
        >
          <i class="ri-arrow-right-up-line"></i>
        </div>
        <div class="text-gray-600 dark:text-gray-400">
          <span class="font-medium text-gray-700 dark:text-gray-400">+10%</span>
          last year
        </div>
      </div>
      <div class="absolute -bottom-[10px] ltr:right-0 rtl:left-0 max-w-[125px]">
        <apexchart
          v-if="isClient"
          type="radialBar"
          height="140"
          :options="newEmployees"
          :series="employees"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "NewEmployees",
  setup() {
    const isClient = ref(false);

    const employees = ref([30]);

    const newEmployees = ref({
      chart: {
        height: 140,
        width: 140,
        type: "radialBar",
      },
      colors: ["#9135E8"],
      plotOptions: {
        radialBar: {
          hollow: {
            // margin: 0,
            size: "50%",
            background: "#fff",
            margin: 10,
          },
          track: {
            background: "#EDEEF0",
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false,
            },
            value: {
              show: true,
              offsetY: 5,
              color: "#9135E8",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "Inter",
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Status"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      employees,
      newEmployees,
    };
  },
});
</script>
