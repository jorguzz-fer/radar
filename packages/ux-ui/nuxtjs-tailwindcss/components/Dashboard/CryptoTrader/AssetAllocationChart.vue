<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Asset Allocation</h5>
      </div>
      <div class="trezo-card-subtitle">Last 30 Days</div>
    </div>
    <div class="trezo-card-content">
      <span class="block"> Total Value </span>
      <h5 class="!mb-0 mt-[5px] !text-[20px]">$17,485</h5>
      <div class="-mt-[15px]">
        <apexchart
          v-if="isClient"
          type="pie"
          height="210"
          :options="assetAllocationChart"
          :series="assetAllocation"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "AssetAllocationChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const assetAllocation = ref([30, 25, 20, 15, 10]);

    const assetAllocationChart = ref({
      chart: {
        height: 210,
        type: "pie",
      },
      labels: ["BTC 30%", "ETH 25%", "USDC 20%", "ADA 15%", "SHIB 10%"],
      colors: ["#605DFF", "#757DFF", "#9CAAFF", "#C2CDFF", "#DDE4FF"],
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 8,
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
      dataLabels: {
        enabled: false,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      isActive,
      toggleActive,
      assetAllocation,
      assetAllocationChart,
    };
  },
});
</script>
