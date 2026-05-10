<template>
  <div
    class="trezo-card bg-orange-50 dark:bg-[#16223e] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Hospital Earnings</h5>
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
              This Week
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
      <div class="lg:grid lg:grid-cols-5 gap-[25px] items-center">
        <div class="lg:col-span-2">
          <div
            class="text-center lg:my-[8.5px] lg:ltr:-mr-[8px] lg:rtl:-ml-[8px]"
          >
            <img
              class="inline-block"
              src="@/assets/images/hospital.png"
              alt="hospital-image"
            />
          </div>
        </div>
        <div class="lg:col-span-3">
          <div
            class="md:ltr:pl-[15px] md:rtl:pr-[15px] mt-[20px] md:mt-[25px] lg:mt-0"
          >
            <div class="sm:grid sm:grid-cols-2 gap-[15px] md:gap-[25px]">
              <div
                class="bg-white dark:bg-[#0c1427] rounded-md py-[17.5px] px-[20px] md:px-[25px] mb-[15px] md:mb-[25px]"
              >
                <h3 class="!text-xl !font-medium !mb-[5px]">$120,000</h3>
                <div class="flex items-center">
                  <span class="block"> Total Profit </span>
                  <span
                    class="relative font-medium inline-block ltr:ml-[8px] rtl:mr-[8px] text-xs ltr:pl-[15px] rtl:pr-[15px] text-danger-500"
                  >
                    <i
                      class="ri-arrow-down-fill absolute text-base top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"
                    ></i>
                    5%
                  </span>
                </div>
              </div>
              <div
                class="bg-white dark:bg-[#0c1427] rounded-md py-[17.5px] px-[20px] md:px-[25px] mb-[15px] md:mb-[25px]"
              >
                <h3 class="!text-xl !font-medium !mb-[5px]">$80,000</h3>
                <div class="flex items-center">
                  <span class="block"> Total Costs </span>
                  <span
                    class="relative font-medium inline-block ltr:ml-[8px] rtl:mr-[8px] text-xs ltr:pl-[15px] rtl:pr-[15px] text-success-600"
                  >
                    <i
                      class="ri-arrow-up-fill absolute text-base top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"
                    ></i>
                    3%
                  </span>
                </div>
              </div>
            </div>
            <div
              class="bg-white dark:bg-[#0c1427] rounded-md relative p-[20px] md:p-[25px] mb-[15px]"
            >
              <h3 class="!font-medium !text-xl !mb-[5px]">
                $900,000
                <span
                  class="relative inline-block -top-[4px] text-xs ltr:pl-[15px] rtl:pr-[15px] text-success-600"
                >
                  <i
                    class="ri-arrow-up-fill absolute text-base top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"
                  ></i>
                  12%
                </span>
              </h3>
              <span class="block"> Total Earnings </span>
              <div
                class="left-0 right-0 h-[15px] -bottom-[15px] opacity-[.65] absolute bg-white dark:bg-[#0c1427] mx-[25px] rounded-b-md"
              ></div>
              <div
                class="absolute top-1/2 -translate-y-1/2 ltr:right-[20px] rtl:left-[20px] max-w-[150px]"
              >
                <apexchart
                  v-if="isClient"
                  type="area"
                  height="95"
                  :options="hospitalEarnings"
                  :series="hospital"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "HospitalEarnings",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const hospital = ref([
      {
        name: "Earnings",
        data: [3, 7, 7, 10, 9, 11, 20],
      },
    ]);
    const hospitalEarnings = ref({
      chart: {
        type: "area",
        height: 95,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#3584FC"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "straight",
        width: 1,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
        labels: {
          formatter: (val: string) => {
            return "$" + val + "k";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      hospital,
      hospitalEarnings,
      isActive,
      toggleActive,
    };
  },
});
</script>
