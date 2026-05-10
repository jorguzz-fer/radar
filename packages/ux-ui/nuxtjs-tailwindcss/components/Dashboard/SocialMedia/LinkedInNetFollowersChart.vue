<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header sm:mb-[15px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title mb-[10px] sm:mb-0">
        <h5 class="!mb-[3px] md:!mb-0 !text-lg md:!text-[20px]">
          LinkedIn Net Followers
        </h5>
        <p>Net followers growth: <span class="text-primary-500">+275</span></p>
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
      <ul class="sm:flex items-center gap-[25px] md:gap-[35px] lg:gap-[50px]">
        <li
          class="inline-block mt-[15px] sm:mt-0 ltr:mr-[15px] rtl:ml-[15px] ltr:sm:mr-0 rtl:sm:ml-0"
        >
          <span class="block font-medium text-black"> 56,100 </span>
          <span class="block mt-px text-xs"> Starting Followers </span>
        </li>
        <li
          class="inline-block mt-[15px] sm:mt-0 ltr:mr-[15px] rtl:ml-[15px] ltr:sm:mr-0 rtl:sm:ml-0"
        >
          <span class="block font-medium text-black"> 300 </span>
          <span class="block mt-px text-xs"> New Followers </span>
        </li>
        <li
          class="inline-block mt-[15px] sm:mt-0 ltr:mr-[15px] rtl:ml-[15px] ltr:sm:mr-0 rtl:sm:ml-0"
        >
          <span class="block font-medium text-black"> 25 </span>
          <span class="block mt-px text-xs"> Unfollows </span>
        </li>
        <li
          class="inline-block mt-[15px] sm:mt-0 ltr:mr-[15px] rtl:ml-[15px] ltr:sm:mr-0 rtl:sm:ml-0"
        >
          <span class="block font-medium text-black"> 56,375 </span>
          <span class="block mt-px text-xs"> Ending Followers </span>
        </li>
      </ul>
      <div
        class="-mb-[25px] ltr:-ml-[15px] rtl:-mr-[15px] ltr:-mr-[10px] rtl:ml-[10px]"
      >
        <apexchart
          v-if="isClient"
          type="area"
          height="297"
          :options="linkedInNetFollowers"
          :series="netFollowers"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "LinkedInNetFollowersChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const netFollowers = ref([
      {
        name: "Followers",
        data: [250, 150, 250, 120, 350, 150, 250],
      },
    ]);

    const linkedInNetFollowers = ref({
      chart: {
        type: "area",
        height: 297,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        dropShadow: {
          top: 5,
          left: 5,
          blur: 3,
          opacity: 0.6,
          enabled: true,
          color: "#605DFF",
          enabledOnSeries: [0],
        },
      },
      colors: ["#605DFF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: [1],
      },
      grid: {
        borderColor: "#ECEEF2",
        strokeDashArray: 8,
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.0,
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#64748B",
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        max: 400,
        min: 0,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        axisTicks: {
          show: false,
          color: "#D5D9E2",
        },
      },
      legend: {
        show: true,
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
      netFollowers,
      linkedInNetFollowers,
    };
  },
});
</script>
