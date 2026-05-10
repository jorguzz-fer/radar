<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Spending Breakdown</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all text-[26px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <i class="ri-more-fill"></i>
          </button>

          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Day
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Week
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Month
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Year
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="-mt-[5px] -mb-[5px]">
        <apexchart
          v-if="isClient"
          type="donut"
          height="284"
          :options="spendingBreakdown"
          :series="breakdown"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "SpendingBreakdownChart",
  setup() {
    const isClient = ref(false);
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const breakdown = ref([30, 20, 12, 10, 8, 6]);
    const spendingBreakdown = ref({
      chart: {
        height: 284,
        type: "donut",
      },
      labels: [
        "Groceries",
        "Utilities",
        "Rent",
        "Entertainment",
        "Transportation",
        "Other",
      ],
      colors: [
        "#37D80A",
        "#FE7A36",
        "#3584FC",
        "#FF4023",
        "#AD63F6",
        "#605DFF",
      ],
      stroke: {
        width: 2,
        show: true,
        colors: ["#ffffff"],
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: false,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#3A4252",
                fontSize: "28px",
                fontWeight: "600",
                formatter: function (val: number, opts: any): string {
                  const seriesTotals = opts?.w?.globals?.seriesTotals || [];
                  const total = seriesTotals.reduce(
                    (a: number, b: number) => a + b,
                    0
                  );
                  const percentage =
                    total > 0 ? ((val / total) * 100).toFixed(1) : "0";
                  return `${val}k (${percentage}%)`;
                },
              },
              total: {
                show: true,
                color: "#64748B",
                formatter: function (opts: any) {
                  const seriesTotals = opts?.w?.globals?.seriesTotals || [];
                  return `${seriesTotals.reduce(
                    (a: number, b: number) => a + b,
                    0
                  )}k`;
                },
              },
            },
          },
        },
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "left",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 0,
          vertical: 7,
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
      isActive,
      toggleActive,
      isClient,
      breakdown,
      spendingBreakdown,
    };
  },
});
</script>
