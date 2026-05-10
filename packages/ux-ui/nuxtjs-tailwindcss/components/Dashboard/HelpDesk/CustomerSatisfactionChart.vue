<template>
  <div
    class="trezo-card bg-primary-500 mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !text-white !font-semibold">Customer Satisfaction</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all text-white': true,
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
    <div class="trezo-card-content relative mx-auto max-w-[315px]">
      <div
        class="relative md:ltr:-left-[80px] md:rtl:-right-[80px] -mt-[5px] -mb-[10px]"
      >
        <apexchart
          v-if="isClient"
          type="donut"
          height="145"
          :options="customerSatisfaction"
          :series="satisfaction"
        ></apexchart>
        <!-- <div
          class="text-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute"
        >
          <span class="block text-white"> Overall </span>
          <h6 class="mb-0 text-[20px] mt-[5px] text-white font-semibold">
            98%
          </h6>
        </div> -->
      </div>
      <div
        class="mx-auto text-center md:ltr:right-0 md:rtl:left-0 md:top-1/2 md:-translate-y-1/2 md:absolute md:max-w-[120px] mt-[20px] md:mt-0"
      >
        <img
          src="@/assets/images/man-with-tablet.png"
          class="inline-block"
          alt="man-with-tablet-image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "CustomerSatisfactionChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const satisfaction = ref([50, 15, 75, 50]);
    const customerSatisfaction = ref({
      chart: {
        height: 145,
        type: "donut",
      },
      labels: ["Highly Satisfied", "Satisfied", "Low Satisfied", "Unsatisfied"],
      colors: ["#AD63F6", "#C2CDFF", "#FFAA72", "#0dcaf0"],
      stroke: {
        width: 1,
        show: true,
        colors: ["transparent"],
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
            size: "73%",
            labels: {
              show: true,
              name: {
                color: "#fff",
              },
              value: {
                show: true,
                color: "#fff",
                fontSize: "28px",
                fontWeight: "600",
              },
              total: {
                show: true,
                color: "#fff",
                label: "Overall",
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
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
      satisfaction,
      customerSatisfaction,
      isActive,
      toggleActive,
    };
  },
});
</script>
