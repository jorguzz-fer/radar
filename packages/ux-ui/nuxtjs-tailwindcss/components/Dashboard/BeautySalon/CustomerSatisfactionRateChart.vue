<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <span class="block"> Customer Satisfaction Rate </span>
      <h2 class="!leading-none !text-2xl md:!text-3xl mt-[6px] md:!mb-[12px]">
        88.5%
      </h2>
      <apexchart
        v-if="isClient"
        type="pie"
        height="180"
        :options="customerSatisfactionRate"
        :series="customerSatisfaction"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "CustomerSatisfactionRateChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const customerSatisfaction = ref([80, 20]);

    const customerSatisfactionRate = ref({
      chart: {
        height: 180,
        type: "pie",
      },
      labels: ["Positive", "Negative"],
      colors: ["#9CAAFF", "#FFAA72"],
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 2,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 6,
          offsetX: -2,
          offsetY: -0.5,
          shape: "circle",
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
      customerSatisfaction,
      customerSatisfactionRate,
    };
  },
});
</script>
