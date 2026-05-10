<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">New Admissions</h5>
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

    <div class="trezo-card-content">
      <div class="-mt-[8px]">
        <apexchart
          v-if="isClient"
          type="donut"
          height="380"
          :options="newAdmissions"
          :series="admissions"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "NewAdmissionsChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const admissions = ref([45, 220, 180, 375, 455]);

    const newAdmissions = ref({
      chart: {
        height: 380,
        type: "donut",
      },
      labels: ["Music", "History", "Art", "English", "Mathematics"],
      colors: ["#90C7FF", "#AD63F6", "#605DFF", "#FD5812", "#37D80A"],
      stroke: {
        show: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "75%",
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
      legend: {
        show: true,
        fontSize: "13px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 10,
          vertical: 9,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 6,
          offsetX: -2,
          shape: "circle",
        },
        formatter: function (
          seriesName: string,
          opts: {
            w: { globals: { series: { [x: string]: string } } };
            seriesIndex: string | number;
          }
        ) {
          return (
            seriesName +
            ": <strong>" +
            opts.w.globals.series[opts.seriesIndex] +
            "</strong>"
          );
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      admissions,
      newAdmissions,
      isActive,
      toggleActive,
    };
  },
});
</script>
