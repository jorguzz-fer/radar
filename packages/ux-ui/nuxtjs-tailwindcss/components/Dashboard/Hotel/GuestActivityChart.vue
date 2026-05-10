<template>
  <div class="trezo-card bg-secondary-600 p-[20px] md:p-[25px] rounded-md">
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !text-white">Guest Activity</h5>
      </div>

      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md bg-[#ffffff1a] text-white py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-secondary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Daily
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"
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
                Daily
              </button>
            </li>
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
      <div
        class="-mt-[20px] -mb-[20px] ltr:-ml-[12px] rtl:-mr-[12px] ltr:-mr-[20px] rtl:-ml-[20px]"
      >
        <apexchart
          v-if="isClient"
          type="area"
          height="284"
          :options="guestActivity"
          :series="guest"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "GuestActivityChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const guest = ref([
      { name: "Check In", data: [15, 30, 20, 40, 35, 30, 25] },
      { name: "Check Out", data: [10, 20, 15, 25, 30, 40, 30] },
    ]);
    const guestActivity = ref({
      chart: {
        type: "area",
        height: 284,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#ffffff", "#D8FFC8"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: [2, 2, 0],
        dashArray: [0, 6, 0],
      },
      grid: {
        show: true,
        borderColor: "#ffffff1a",
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.2,
        },
      },
      xaxis: {
        categories: [
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
        ],
        axisTicks: {
          show: false,
          color: "#ffffff1a",
        },
        axisBorder: {
          show: false,
          color: "#ffffff1a",
        },
        labels: {
          show: true,
          style: {
            colors: "#B1BBC8",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        // max: 100,
        min: 0,
        labels: {
          style: {
            colors: "#B1BBC8",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#ffffff1a",
        },
        axisTicks: {
          show: false,
          color: "#ffffff1a",
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
      isActive,
      toggleActive,
      isClient,
      guest,
      guestActivity,
    };
  },
});
</script>
