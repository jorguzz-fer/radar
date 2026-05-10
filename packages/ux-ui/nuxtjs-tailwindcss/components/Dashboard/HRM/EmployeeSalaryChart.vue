<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Employee Salary</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative ltr:-mr-[7px] rtl:-ml-[7px]">
          <button
            type="button"
            class="trezo-card-dropdown-btn inline-block transition-all text-[22px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500': true,
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
      <div class="flex items-center gap-[12px]">
        <div
          class="flex items-center justify-center bg-primary-100 dark:bg-[#15203c] rounded-[4px] w-[42px] h-[42px]"
        >
          <img
            src="@/assets/images/icons/total-payroll.svg"
            alt="total-payroll"
          />
        </div>
        <div>
          <span class="block"> Total Payroll </span>
          <h5 class="!mb-0 mt-[2px] !text-[20px] !font-semibold">$450,000</h5>
        </div>
      </div>
      <div class="xl:mt-[5px] xl:mb-[10px] w-full">
        <apexchart
          v-if="isClient"
          type="bar"
          height="280"
          :options="employeeSalary"
          :series="salary"
        ></apexchart>
      </div>
      <div class="sm:flex items-center gap-[20px] 2xl:gap-[30px]">
        <div class="flex items-center gap-[12px]">
          <div
            class="flex items-center justify-center bg-success-100 dark:bg-[#15203c] rounded-[4px] w-[42px] h-[42px]"
          >
            <img
              src="@/assets/images/icons/salary-paid.svg"
              alt="salary-paid"
            />
          </div>
          <div>
            <span class="block"> Salary Paid </span>
            <h5 class="!mb-0 mt-[2px] !text-[20px] !font-semibold">$395k</h5>
          </div>
        </div>
        <div class="flex items-center gap-[12px] mt-[15px] sm:mt-0">
          <div
            class="flex items-center justify-center bg-orange-100 dark:bg-[#15203c] rounded-[4px] w-[42px] h-[42px]"
          >
            <img
              src="@/assets/images/icons/salary-pending.svg"
              alt="salary-pending"
            />
          </div>
          <div>
            <span class="block"> Salary Pending </span>
            <h5 class="!mb-0 mt-[2px] !text-[20px] !font-semibold">$60k</h5>
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
  name: "EmployeeSalaryChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);

    const salary = ref([
      {
        name: "Employee Salary",
        data: [70, 60, 80, 100, 70, 40, 80],
      },
    ]);

    const employeeSalary = ref({
      chart: {
        type: "bar",
        height: 280,
        toolbar: {
          show: false,
        },
      },
      colors: ["#E9D5FF"],
      plotOptions: {
        bar: {
          columnWidth: "52%",
          borderRadius: 4,
        },
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        show: false,
        tickAmount: 4,
        labels: {
          style: {
            colors: "#8695AA",
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
      tooltip: {
        y: {
          formatter: (val: string) => {
            return "$" + val + "K";
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
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
          radius: 2,
          shape: "diamond",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.1,
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      salary,
      employeeSalary,
      isActive,
      toggleActive,
    };
  },
});
</script>
