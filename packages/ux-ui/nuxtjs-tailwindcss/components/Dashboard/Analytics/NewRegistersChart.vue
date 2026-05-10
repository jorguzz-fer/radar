<template>
  <div
    class="relative md:ltr:pl-[25px] md:ltr:first:pl-0 md:rtl:pr-[25px] md:rtl:first:pr-0 md:ltr:-mr-[25px] md:rtl:-ml-[25px] md:ltr:first:mr-0 md:rtl:first:ml-0 mt-[20px] sm:mt-0 first:mt-0"
  >
    <span class="block"> New Registers </span>
    <h5 class="!mb-0 mt-[3px] !text-[20px]">35.3k</h5>
    <div
      class="absolute -top-[28px] ltr:-right-[9px] rtl:-left-[9px] max-w-[120px]"
    >
      <apexchart
        v-if="isClient"
        type="area"
        height="95"
        :options="newRegisters"
        :series="registers"
      ></apexchart>
    </div>
    <div class="mt-[12px] flex items-center justify-between">
      <span
        class="inline-block text-xs text-success-700 px-[9px] border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c] rounded-xl"
      >
        +15% Increase
      </span>
      <span class="block text-xs"> Last 7 days </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "NewRegistersChart",
  setup() {
    const isClient = ref(false);
    const registers = ref([
      {
        name: "New Registers",
        data: [3, 12, 8, 10, 15, 10, 7],
      },
    ]);
    const newRegisters = ref({
      chart: {
        type: "area",
        height: 95,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#C52B09"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "smooth",
        width: 1,
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
            return val + "k";
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
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      registers,
      newRegisters,
    };
  },
});
</script>
