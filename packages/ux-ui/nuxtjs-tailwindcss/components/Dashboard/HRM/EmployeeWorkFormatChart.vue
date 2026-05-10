<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] !pb-0 rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Employee Work Format</h5>
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
      <div class="lg:mt-[43px]">
        <apexchart
          v-if="isClient"
          type="donut"
          height="217"
          :options="employeeWorkFormat"
          :series="workFormat"
        ></apexchart>
      </div>

      <div class="mt-[10px] md:mt-[15px] lg:mt-[35px] -mx-[20px] md:-mx-[25px]">
        <div class="table-responsive overflow-x-auto">
          <table class="w-full">
            <tbody class="text-black dark:text-white">
              <tr>
                <td
                  class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] ltr:last:text-right rtl:last:text-left"
                >
                  <div class="flex items-center gap-[8px]">
                    <div class="bg-orange-500 w-[8px] h-[8px]"></div>
                    Remote
                  </div>
                </td>
                <td
                  class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] ltr:last:text-right rtl:last:text-left"
                >
                  <span
                    class="text-success-600 inline-block relative ltr:pr-[24px] rtl:pl-[24px]"
                  >
                    34%
                    <i
                      class="material-symbols-outlined absolute ltr:right-0 rtl:left-0 !text-[20px] top-1/2 -translate-y-1/2"
                    >
                      trending_up
                    </i>
                  </span>
                </td>
                <td
                  class="font-bold ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] ltr:last:text-right rtl:last:text-left"
                >
                  120
                </td>
              </tr>
              <tr>
                <td
                  class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] ltr:last:text-right rtl:last:text-left"
                >
                  <div class="flex items-center gap-[8px]">
                    <div class="bg-primary-500 w-[8px] h-[8px]"></div>
                    In-office
                  </div>
                </td>
                <td
                  class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] ltr:last:text-right rtl:last:text-left"
                >
                  <span
                    class="text-danger-600 inline-block relative ltr:pr-[24px] rtl:pl-[24px]"
                  >
                    46%
                    <i
                      class="material-symbols-outlined absolute ltr:right-0 rtl:left-0 !text-[20px] top-1/2 -translate-y-1/2"
                    >
                      trending_down
                    </i>
                  </span>
                </td>
                <td
                  class="font-bold ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] ltr:last:text-right rtl:last:text-left"
                >
                  160
                </td>
              </tr>
              <tr>
                <td
                  class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] ltr:last:text-right rtl:last:text-left"
                >
                  <div class="flex items-center gap-[8px]">
                    <div class="bg-success-500 w-[8px] h-[8px]"></div>
                    Hybrid
                  </div>
                </td>
                <td
                  class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] ltr:last:text-right rtl:last:text-left"
                >
                  <span
                    class="text-success-600 inline-block relative ltr:pr-[24px] rtl:pl-[24px]"
                  >
                    15%
                    <i
                      class="material-symbols-outlined absolute ltr:right-0 rtl:left-0 !text-[20px] top-1/2 -translate-y-1/2"
                    >
                      trending_up
                    </i>
                  </span>
                </td>
                <td
                  class="font-bold ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] ltr:last:text-right rtl:last:text-left"
                >
                  50
                </td>
              </tr>
              <tr>
                <td
                  class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] ltr:last:text-right rtl:last:text-left"
                >
                  <div class="flex items-center gap-[8px]">
                    <div class="bg-purple-500 w-[8px] h-[8px]"></div>
                    Shift
                  </div>
                </td>
                <td
                  class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] ltr:last:text-right rtl:last:text-left"
                >
                  <span
                    class="text-danger-600 inline-block relative ltr:pr-[24px] rtl:pl-[24px]"
                  >
                    5%
                    <i
                      class="material-symbols-outlined absolute ltr:right-0 rtl:left-0 !text-[20px] top-1/2 -translate-y-1/2"
                    >
                      trending_down
                    </i>
                  </span>
                </td>
                <td
                  class="font-bold ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] ltr:last:text-right rtl:last:text-left"
                >
                  20
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "EmployeeWorkFormatChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const workFormat = ref([120, 160, 50, 20]);

    const employeeWorkFormat = ref({
      chart: {
        height: 217,
        type: "donut",
      },
      labels: ["Remote", "In-office", "Hybrid", "Shift"],
      colors: ["#FD5812", "#605DFF", "#37D80A", "#AD63F6"],
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
          width: 9,
          height: 9,
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
              show: true,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#64748B",
                fontSize: "16px",
                fontWeight: "600",
                offsetY: -6,
              },
              total: {
                show: true,
                color: "#64748B",
                fontSize: "14px",
                fontWeight: "400",
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
      workFormat,
      employeeWorkFormat,
      isActive,
      toggleActive,
    };
  },
});
</script>
