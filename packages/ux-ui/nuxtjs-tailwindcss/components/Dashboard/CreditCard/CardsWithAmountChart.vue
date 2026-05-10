<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Cards With Amount</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="-mt-[25px] -mb-[22px] ltr:-ml-[10px] rtl:-mr-[10px]">
        <apexchart
          v-if="isClient"
          type="bar"
          height="211"
          :options="cardsWithAmount"
          :series="amount"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "CardsWithAmountChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const amount = ref([
      {
        name: "Projects",
        data: [1870, 2000, 1490, 1410, 1680],
      },
    ]);
    const cardsWithAmount = ref({
      chart: {
        type: "bar",
        height: 211,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF"],
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "11px",
          fontWeight: "normal",
        },
      },
      fill: {
        opacity: 1,
      },
      xaxis: {
        categories: [
          "Rewards Card",
          "Cashback Card",
          "Travel Card",
          "Student Card",
          "Business Card",
        ],
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "11px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "11px",
          },
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isActive,
      toggleActive,
      isClient,
      amount,
      cardsWithAmount,
    };
  },
});
</script>
