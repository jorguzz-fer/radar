<template>
  <div
    class="trezo-card bg-gray-50 dark:bg-[#0c1427] rounded-md border border-gray-100 dark:border-[#172036]"
  >
    <div
      class="trezo-card-header py-[15px] px-[20px] md:px-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !text-md !font-medium">Customer Segmentation</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative ltr:-mr-[7px] rtl:-ml-[7px]">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all text-[22px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <i class="ri-more-2-fill"></i>
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

    <div
      class="trezo-card-content bg-white dark:bg-dark p-[20px] md:p-[25px] rounded-md border-t border-gray-100 dark:border-[#172036]"
    >
      <div class="lg:mb-[20px]">
        <apexchart
          v-if="isClient"
          type="donut"
          height="210"
          :options="customerSegmentation"
          :series="segmentation"
        ></apexchart>
      </div>

      <div
        class="flex items-center gap-[10px] mb-[20px] md:mb-[25px] last:mb-0"
      >
        <div
          class="flex items-center justify-center bg-secondary-100 text-secondary-500 dark:bg-[#15203c] rounded-md w-[44px] h-[44px]"
        >
          <i class="material-symbols-outlined"> person_add </i>
        </div>
        <div>
          <span class="block mb-[3px]"> New Customers </span>
          <h4
            class="!mb-0 !font-semibold !text-[20px] flex items-center gap-[6px]"
          >
            1,200
            <span class="text-gray-500 dark:text-gray-400 text-xs font-normal">
              +40% of total transactions
            </span>
          </h4>
        </div>
      </div>
      <div
        class="flex items-center gap-[10px] mb-[20px] md:mb-[25px] last:mb-0"
      >
        <div
          class="flex items-center justify-center bg-purple-100 text-purple-500 dark:bg-[#15203c] rounded-md w-[44px] h-[44px]"
        >
          <i class="material-symbols-outlined"> account_circle </i>
        </div>
        <div>
          <span class="block mb-[3px]"> Returning Customers </span>
          <h4
            class="!mb-0 !font-semibold !text-[20px] flex items-center gap-[6px]"
          >
            1,800
            <span class="text-gray-500 dark:text-gray-400 text-xs font-normal">
              +60% of total transactions
            </span>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "CustomerSegmentationChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const segmentation = ref([1200, 1800]);

    const customerSegmentation = ref({
      chart: {
        height: 210,
        type: "donut",
      },
      labels: ["New", "Returning"],
      colors: ["#3584FC", "#AD63F6", "#37D80A"],
      stroke: {
        width: 0,
        show: true,
        colors: ["#ffffff"],
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
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "80%",
            labels: {
              show: true,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#3A4252",
                fontSize: "24px",
                fontWeight: "600",
              },
              total: {
                show: true,
                color: "#64748B",
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
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
      segmentation,
      customerSegmentation,
    };
  },
});
</script>
