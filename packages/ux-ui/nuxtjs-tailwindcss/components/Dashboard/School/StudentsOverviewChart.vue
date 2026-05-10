<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Students Overview</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            class="trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500"
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
              Last Month
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
      <div class="ltr:-ml-[10px] rtl:-mr-[10px] md:mb-[10px]">
        <apexchart
          v-if="isClient"
          type="bar"
          height="303"
          :options="studentsOverview"
          :series="students"
        ></apexchart>
      </div>
      <div class="flex items-center gap-[20px] 2xl:gap-[30px]">
        <div class="flex items-center gap-[12px]">
          <div
            class="flex items-center justify-center bg-primary-100 dark:bg-[#15203c] rounded-[4px] w-[42px] h-[42px]"
          >
            <img src="@/assets/images/icons/boys.svg" alt="boys" />
          </div>
          <div>
            <span class="block"> Boys </span>
            <h5 class="!mb-0 mt-px !text-[20px] !font-semibold">980</h5>
          </div>
        </div>
        <div class="flex items-center gap-[12px]">
          <div
            class="flex items-center justify-center bg-orange-100 dark:bg-[#15203c] rounded-[4px] w-[42px] h-[42px]"
          >
            <img src="@/assets/images/icons/girls.svg" alt="girls" />
          </div>
          <div>
            <span class="block"> Girls </span>
            <h5 class="!mb-0 mt-px !text-[20px] !font-semibold">675</h5>
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
  name: "StudentsOverviewChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const students = ref([
      {
        name: "Boys",
        data: [70, 42, 70, 120, 40, 70, 90],
      },
      {
        name: "Girls",
        data: [-70, -44, -70, -120, -40, -70, -90],
      },
    ]);

    const studentsOverview = ref({
      colors: ["#3584FC", "#FD5812"],
      chart: {
        type: "bar",
        height: 303,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
          borderRadius: 5,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: "#EDEFF5",
        strokeDashArray: 8,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
        fontFamily: "Inter",
        fontWeight: 400,
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
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        axisTicks: {
          show: false,
          color: "#8695AA",
        },
        axisBorder: {
          show: false,
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
        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "Status " + val + "";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      students,
      studentsOverview,
      isActive,
      toggleActive,
    };
  },
});
</script>
