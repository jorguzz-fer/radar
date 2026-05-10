<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <span class="block"> Sales This Month </span>
      <h3 class="!text-2xl mt-px !mb-[5px]">$64.5K</h3>
      <span
        class="inline-block text-xs py-px px-[9px] text-danger-700 border border-danger-300 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c] text-sm rounded-[100px]"
      >
        -1.4%
      </span>
      <div class="-mt-[10px] ltr:-ml-[15px] rtl:-mr-[15px] -mb-[25px]">
        <div id="salesThisMonthChart"></div>
        <apexchart
          v-if="isClient"
          type="line"
          height="105"
          :options="salesThisMont"
          :series="sales"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "SalesThisMonthChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const sales = ref([
      {
        name: "Sale",
        data: [0, 41, 60, 65, 35, 62, 150],
      },
    ]);

    const salesThisMont = ref({
      chart: {
        height: 105,
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
      colors: ["#605DFF"],
      stroke: {
        curve: "straight",
      },
      grid: {
        show: true,
        borderColor: "#ECF0FF",
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        axisBorder: {
          show: false,
          color: "#DDE4FF",
        },
        axisTicks: {
          show: false,
          color: "#DDE4FF",
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
        tickAmount: 4,
        max: 150,
        min: 0,
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
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
          size: 6,
          offsetX: -4,
          offsetY: -0.5,
          shape: "square",
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "k";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      isActive,
      toggleActive,
      sales,
      salesThisMont,
    };
  },
});
</script>
