<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Device Sessions</h5>
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
              Last Week
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
                Last Day
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Last Week
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Last Month
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Last Year
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="lg:grid lg:grid-cols-2 gap-[25px] items-center">
        <div>
          <div
            class="-mt-[7px] lg:-mt-[20px] md:ltr:-ml-[35px] md:rtl:-mr-[35px]"
          >
            <apexchart
              v-if="isClient"
              type="pie"
              height="215"
              :options="browserUsedByUsers"
              :series="browserUsed"
            ></apexchart>
          </div>
        </div>
        <div>
          <ul
            class="mb-[20px] lg:mb-[26px] lg:ltr:-ml-[30px] lg:rtl:-mr-[30px]"
          >
            <li
              class="flex relative justify-between pb-0 ltr:pl-[22px] rtl:pr-[22px] border-b border-gray-100 dark:border-[#172036] py-[6px] first:border-t"
            >
              <div
                class="bg-success-500 absolute ltr:left-0 rtl:right-0 w-[10px] h-[10px] top-1/2 -translate-y-1/2 rounded-full"
              ></div>
              <div>
                <span class="block text-xs mb-px"> Desktop </span>
                <h6 class="!mb-0 !text-md !font-semibold">45.2%</h6>
              </div>
              <div>
                <span class="block text-xs mb-px"> Sessions </span>
                <h6 class="!mb-0 !font-semibold">8,732</h6>
              </div>
            </li>
            <li
              class="flex relative justify-between pb-0 ltr:pl-[22px] rtl:pr-[22px] border-b border-gray-100 dark:border-[#172036] py-[6px] first:border-t"
            >
              <div
                class="bg-primary-400 absolute ltr:left-0 rtl:right-0 w-[10px] h-[10px] top-1/2 -translate-y-1/2 rounded-full"
              ></div>
              <div>
                <span class="block text-xs mb-px"> Mobile </span>
                <h6 class="!mb-0 !text-md !font-semibold">48.7%</h6>
              </div>
              <div>
                <span class="block text-xs mb-px"> Sessions </span>
                <h6 class="!mb-0 !font-semibold">9,416</h6>
              </div>
            </li>
            <li
              class="flex relative justify-between pb-0 ltr:pl-[22px] rtl:pr-[22px] border-b border-gray-100 dark:border-[#172036] py-[6px] first:border-t"
            >
              <div
                class="bg-purple-400 absolute ltr:left-0 rtl:right-0 w-[10px] h-[10px] top-1/2 -translate-y-1/2 rounded-full"
              ></div>
              <div>
                <span class="block text-xs mb-px"> Tablet </span>
                <h6 class="!mb-0 !text-md !font-semibold">32.3%</h6>
              </div>
              <div>
                <span class="block text-xs mb-px"> Sessions </span>
                <h6 class="!mb-0 !font-semibold">1,042</h6>
              </div>
            </li>
            <li
              class="flex relative justify-between pb-0 ltr:pl-[22px] rtl:pr-[22px] border-b border-gray-100 dark:border-[#172036] py-[6px] first:border-t"
            >
              <div
                class="bg-orange-400 absolute ltr:left-0 rtl:right-0 w-[10px] h-[10px] top-1/2 -translate-y-1/2 rounded-full"
              ></div>
              <div class="leading-none">
                <span class="block text-xs mb-px"> Others </span>
                <h6 class="!mb-0 !text-md !font-semibold">15.4%</h6>
              </div>
              <div class="leading-none">
                <span class="block text-xs mb-px"> Sessions </span>
                <h6 class="!mb-0 !font-semibold">135</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p class="text-xs">
        This data helps you understand which devices are most commonly used and
        how engagement metrics vary between them.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "DeviceSessionsChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const browserUsed = ref([55, 44, 30, 12]);
    const browserUsedByUsers = ref({
      chart: {
        height: 215,
        type: "pie",
      },
      labels: ["Desktop", "Mobile", "Tablet", "Other"],
      colors: ["#37D80A", "#605DFF", "#AD63F6", "#FD5812"],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: false,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 7,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          radius: 2,
          height: 9,
          offsetX: -2,
          offsetY: -0.1,
        },
      },
      tooltip: {
        enabled: true,
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
      browserUsed,
      browserUsedByUsers,
      isActive,
      toggleActive,
    };
  },
});
</script>
