<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Bed Occupancy Rate</h5>
        <p class="mt-px">Currently occupied vs. available</p>
      </div>
      <div class="trezo-card-subtitle mt-[10px] sm:mt-0">
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
              Today
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
          <ul>
            <li class="flex items-center mb-[20px] md:mb-[25px] last:mb-0">
              <div
                class="flex items-center justify-center rounded-md bg-secondary-100 dark:bg-[#15203c] text-secondary-500 w-[42px] h-[42px] ltr:mr-[10px] rtl:ml-[10px]"
              >
                <i class="material-symbols-outlined"> airplay </i>
              </div>
              <div>
                <h3 class="!text-lg !mb-px">1,275</h3>
                <span class="block"> Total Beds </span>
              </div>
            </li>
            <li class="flex items-center mb-[20px] md:mb-[25px] last:mb-0">
              <div
                class="flex items-center justify-center rounded-md bg-purple-100 dark:bg-[#15203c] text-purple-500 w-[42px] h-[42px] ltr:mr-[10px] rtl:ml-[10px]"
              >
                <i class="material-symbols-outlined"> bed </i>
              </div>
              <div>
                <h3 class="!text-lg !mb-px">825</h3>
                <span class="block"> Occupied Beds </span>
              </div>
            </li>
            <li class="flex items-center mb-[20px] md:mb-[25px] last:mb-0">
              <div
                class="flex items-center justify-center rounded-md bg-success-100 dark:bg-[#15203c] text-success-500 w-[42px] h-[42px] ltr:mr-[10px] rtl:ml-[10px]"
              >
                <i class="material-symbols-outlined">
                  featured_seasonal_and_gifts
                </i>
              </div>
              <div>
                <h3 class="!text-lg !mb-px">450</h3>
                <span class="block"> Available Beds </span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div class="text-center mt-[20px] md:mt-0">
            <apexchart
              v-if="isClient"
              type="donut"
              height="140"
              :options="bedOccupancyRate"
              :series="bedOccupancy"
            ></apexchart>
            <p class="text-xs mx-auto leading-[1.6] max-w-[189px]">
              The donut or pie chart representing the occupancy rate.
            </p>
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
  name: "BedOccupancyRateChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const bedOccupancy = ref([1275, 825, 450]);
    const bedOccupancyRate = ref({
      chart: {
        height: 140,
        type: "donut",
      },
      labels: ["Total Beds", "Occupied Beds", "Available Beds"],
      colors: ["#1F64F1", "#BF85FB", "#37D80A"],
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
            labels: {
              show: false,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#3A4252",
                fontSize: "22px",
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
        enabled: true,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      bedOccupancy,
      bedOccupancyRate,
      isActive,
      toggleActive,
    };
  },
});
</script>
