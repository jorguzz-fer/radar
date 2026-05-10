<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Sales By Gender</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="-mt-[5px] ltr:-ml-[15px] rtl:-mr-[15px] -mb-[8px]">
        <apexchart
          v-if="isClient"
          type="donut"
          height="132"
          :options="salesByGender"
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
  name: "SalesByGenderChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const sales = ref([70, 30]);

    const salesByGender = ref({
      chart: {
        height: 132,
        type: "donut",
      },
      labels: ["Male", "Female"],
      colors: ["#3584FC", "#AD63F6"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        offsetX: 0,
        offsetY: 15,
        fontSize: "12px",
        position: "right",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 0,
          vertical: 5,
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
            return val + "%";
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
      salesByGender,
    };
  },
});
</script>
