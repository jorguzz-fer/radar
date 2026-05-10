<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Sales By Category</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="-mt-[20px] ltr:-ml-[15px] rtl:-mr-[15px] -mb-[15px]">
        <div id="salesByCategoryChart"></div>
        <apexchart
          v-if="isClient"
          type="radar"
          height="349"
          :options="salesByCategory"
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
  name: "SalesByCategoryChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const sales = ref([
      {
        name: "Electronics",
        data: [20, 100, 70, 30, 50, 80, 70],
      },
      {
        name: "Non-electronics",
        data: [68, 80, 33, 80, 70, 40, 30],
      },
    ]);

    const salesByCategory = ref({
      chart: {
        height: 349,
        type: "radar",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      colors: ["#FC6829", "#757DFF"],
      plotOptions: {
        radar: {
          polygons: {
            fill: {
              colors: ["#f8f8f8", "#ffffff"],
            },
          },
        },
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        labels: {
          show: true,
          style: {
            colors: "#A8A8A8",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        show: false,
      },
      legend: {
        show: true,
        offsetY: -10,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 6,
          offsetX: -4,
          offsetY: -0.5,
          strokeWidth: 0,
          shape: "square",
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
      salesByCategory,
    };
  },
});
</script>
