<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Comparative Analysis</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Monthly
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
              ></i>
            </span>
          </button>

          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Weekly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Monthly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Yearly
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="-mt-[10px] -mb-[20px]">
        <apexchart
          v-if="isClient"
          type="bubble"
          height="384"
          :options="comparativeAnalysis"
          :series="analysis"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "ComparativeAnalysisChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const analysis = ref([
      { name: "Bitcoin", data: [[100, 20, 50]] },
      { name: "Ethereum", data: [[300, 50, 70]] },
      { name: "Cardano", data: [[500, 80, 80]] },
      { name: "Solana", data: [[650, 40, 50]] },
      { name: "Tether", data: [[850, 60, 70]] },
      { name: "XRP", data: [[900, 20, 60]] },
    ]);
    const comparativeAnalysis = ref({
      chart: {
        type: "bubble",
        height: 384,
        toolbar: {
          show: false,
        },
      },
      colors: [
        "#757DFF",
        "#5DA8FF",
        "#BF85FB",
        "#1E8308",
        "#FE7A36",
        "#174EDE",
      ],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      fill: {
        opacity: 1,
      },
      xaxis: {
        tickAmount: 8,
        xaxisRange: { min: 0, max: 1000 },
        axisTicks: {
          show: true,
          color: "#64748B",
        },
        axisBorder: {
          show: true,
          color: "#64748B",
        },
        labels: {
          show: true,
          style: {
            colors: "#3A4252",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        // max: 3000,
        min: 0,
        labels: {
          formatter: (val: string) => {
            return "$" + val + "k";
          },
          style: {
            colors: "#3A4252",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#64748B",
        },
        axisTicks: {
          show: false,
          color: "#64748B",
        },
      },
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 10,
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isActive,
      toggleActive,
      isClient,
      analysis,
      comparativeAnalysis,
    };
  },
});
</script>
