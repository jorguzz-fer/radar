<template>
  <div
    class="trezo-card p-[20px] md:p-[25px] rounded-md"
    style="background: linear-gradient(104deg, #361e7d 2.4%, #403cff 112.33%)"
  >
    <div class="trezo-card-content">
      <div class="flex items-center justify-between">
        <div>
          <span class="block mb-[7px] text-gray-300"> Today’s Payment </span>
          <div class="flex items-center gap-[10px]">
            <h3
              class="!leading-none !text-white !text-xl md:!text-2xl lg:!text-3xl !mb-0"
            >
              $1,528
            </h3>
            <span
              class="inline-block text-xs px-[9px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#172036] text-sm rounded-[100px]"
            >
              +5.4%
            </span>
          </div>
        </div>
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            class="trezo-card-dropdown-btn inline-block rounded-md border border-primary-500 bg-primary-500 text-white py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-primary-400 hover:border-primary-400"
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
              Monthly
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
      <div class="-mb-[18px] ltr:-ml-[15px] rtl:-mr-[15px] mt-[10px]">
        <apexchart
          v-if="isClient"
          type="area"
          height="323"
          :options="paymentChart"
          :series="payment"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "PaymentChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const payment = ref([
      {
        name: "Payment",
        data: [40, 50, 80, 50, 40, 30, 40, 50, 60, 70, 50, 65],
      },
    ]);
    const paymentChart = ref({
      chart: {
        type: "area",
        height: 323,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#ffffff"],
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
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
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
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 100,
        min: 0,
        labels: {
          formatter: (val: string) => {
            return "$" + val + "K";
          },
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#ffffff1a",
        },
        axisTicks: {
          show: false,
          color: "#ffffff1a",
        },
      },
      legend: {
        show: true,
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "k";
          },
        },
        marker: {
          show: true,
          fillColors: ["#BE84F9"],
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      payment,
      paymentChart,
      isActive,
      toggleActive,
    };
  },
});
</script>
