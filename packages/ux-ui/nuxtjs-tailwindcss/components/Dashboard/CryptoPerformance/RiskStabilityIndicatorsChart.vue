<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Risk & Stability Indicators</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="radar"
        height="354"
        :options="riskStabilityIndicators"
        :series="indicators"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "RiskStabilityIndicatorsChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const indicators = ref([
      {
        name: "Liquidity",
        data: [60, 80, 100, 120, 140, 150],
      },
      {
        name: "Volatility",
        data: [180, 160, 80, 140, 100, 80],
      },
      {
        name: "Operational",
        data: [100, 130, 140, 60, 40, 20],
      },
    ]);
    const riskStabilityIndicators = ref({
      chart: {
        height: 354,
        type: "radar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.4,
        },
      },
      colors: ["#AD63F6", "#605DFF", "#37D80A"],
      yaxis: {
        show: true,
        tickAmount: 4,
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 6,
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
        customLegendItems: [
          "Liquidity 50%",
          "Volatility 20%",
          "Operational 30%",
        ],
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isActive,
      toggleActive,
      isClient,
      indicators,
      riskStabilityIndicators,
    };
  },
});
</script>
