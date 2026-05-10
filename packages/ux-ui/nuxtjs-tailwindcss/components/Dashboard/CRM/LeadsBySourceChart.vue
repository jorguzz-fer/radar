<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Leads by Source</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              This Month
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
      <div class="-mt-[10px]">
        <apexchart
          v-if="isClient"
          type="donut"
          height="265"
          :options="leadsBySource"
          :series="source"
        ></apexchart>
      </div>
      <ul class="mt-[17px] grid grid-cols-3 gap-[25px]">
        <li>
          <span class="flex items-center text-sm mb-[7px]">
            <span
              class="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-primary-500 d-block"
            ></span>
            Organic
          </span>
          <h6 class="!mb-0 !leading-none !text-lg !font-medium">320</h6>
        </li>
        <li>
          <span class="flex items-center text-sm mb-[7px]">
            <span
              class="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-secondary-500 d-block"
            ></span>
            Paid
          </span>
          <h6 class="!mb-0 !leading-none !text-lg !font-medium">60</h6>
        </li>
        <li>
          <span class="flex items-center text-sm mb-[7px]">
            <span
              class="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-purple-500 d-block"
            ></span>
            Direct
          </span>
          <h6 class="!mb-0 !leading-none !text-lg !font-medium">30</h6>
        </li>
        <li>
          <span class="flex items-center text-sm mb-[7px]">
            <span
              class="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-info-500 d-block"
            ></span>
            Social
          </span>
          <h6 class="!mb-0 !leading-none !text-lg !font-medium">160</h6>
        </li>
        <li>
          <span class="flex items-center text-sm mb-[7px]">
            <span
              class="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-success-500 d-block"
            ></span>
            Referrals
          </span>
          <h6 class="!mb-0 !leading-none !text-lg !font-medium">279</h6>
        </li>
        <li>
          <span class="flex items-center text-sm mb-[7px]">
            <span
              class="w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm bg-danger-500 d-block"
            ></span>
            Others
          </span>
          <h6 class="!mb-0 !leading-none !text-lg !font-medium">19</h6>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "LeadsBySourceChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const source = ref([320, 60, 30, 160, 279, 19]);
    const leadsBySource = ref({
      chart: {
        height: 265,
        type: "donut",
      },
      labels: ["Organic", "Paid", "Direct", "Social", "Referrals", "Others"],
      colors: [
        "#605DFF",
        "#3584FC",
        "#AD63F6",
        "#0dcaf0",
        "#25B003",
        "#FD5812",
      ],
      stroke: {
        width: 1,
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
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#3A4252",
                fontSize: "28px",
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
      source,
      leadsBySource,
      isActive,
      toggleActive,
    };
  },
});
</script>
