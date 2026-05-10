<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Sessions by Channel</h5>
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
              Last 30 Days
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
      <apexchart
        v-if="isClient"
        type="donut"
        height="257"
        :options="sessionsByChannel"
        :series="sessions"
      ></apexchart>
      <ul class="text-center my-[10px]">
        <li
          class="inline-block ltr:text-left rtl:text-right mx-[13px] lg:mx-[10px] xl:mx-[13px] mt-[15px]"
        >
          <span class="block text-xs mb-[8px] flex items-center justify-center">
            <span
              class="block bg-secondary-500 w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm relative -top-[1px]"
            ></span>
            Email
          </span>
          <h6
            class="!mb-0 !leading-none !font-medium !text-lg ltr:ml-[19px] rtl:mr-[19px]"
          >
            976
          </h6>
        </li>
        <li
          class="inline-block ltr:text-left rtl:text-right mx-[13px] lg:mx-[10px] xl:mx-[13px] mt-[15px]"
        >
          <span class="block text-xs mb-[8px] flex items-center justify-center">
            <span
              class="block bg-success-500 w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm relative -top-[1px]"
            ></span>
            Organic Search
          </span>
          <h6
            class="!mb-0 !leading-none !font-medium !text-lg ltr:ml-[19px] rtl:mr-[19px]"
          >
            651
          </h6>
        </li>
        <li
          class="inline-block ltr:text-left rtl:text-right mx-[13px] lg:mx-[10px] xl:mx-[13px] mt-[15px]"
        >
          <span class="block text-xs mb-[8px] flex items-center justify-center">
            <span
              class="block bg-purple-500 w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm relative -top-[1px]"
            ></span>
            Direct Browse
          </span>
          <h6
            class="!mb-0 !leading-none !font-medium !text-lg ltr:ml-[19px] rtl:mr-[19px]"
          >
            818
          </h6>
        </li>
        <li
          class="inline-block ltr:text-left rtl:text-right mx-[13px] lg:mx-[10px] xl:mx-[13px] mt-[15px]"
        >
          <span class="block text-xs mb-[8px] flex items-center justify-center">
            <span
              class="block bg-secondary-300 w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm relative -top-[1px]"
            ></span>
            Paid Search
          </span>
          <h6
            class="!mb-0 !leading-none !font-medium !text-lg ltr:ml-[19px] rtl:mr-[19px]"
          >
            459
          </h6>
        </li>
        <li
          class="inline-block ltr:text-left rtl:text-right mx-[13px] lg:mx-[10px] xl:mx-[13px] mt-[15px]"
        >
          <span class="block text-xs mb-[8px] flex items-center justify-center">
            <span
              class="block bg-primary-500 w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm relative -top-[1px]"
            ></span>
            Social
          </span>
          <h6
            class="!mb-0 !leading-none !font-medium !text-lg ltr:ml-[19px] rtl:mr-[19px]"
          >
            320
          </h6>
        </li>
        <li
          class="inline-block ltr:text-left rtl:text-right mx-[13px] lg:mx-[10px] xl:mx-[13px] mt-[15px]"
        >
          <span class="block text-xs mb-[8px] flex items-center justify-center">
            <span
              class="block bg-orange-500 w-[11px] h-[11px] ltr:mr-[8px] rtl:ml-[8px] rounded-sm relative -top-[1px]"
            ></span>
            Referral
          </span>
          <h6
            class="!mb-0 !leading-none !font-medium !text-lg ltr:ml-[19px] rtl:mr-[19px]"
          >
            209
          </h6>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "SessionsByChannelChart",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const sessions = ref([976, 651, 818, 459, 320, 209]);

    const sessionsByChannel = ref({
      chart: {
        height: 257,
        type: "donut",
      },
      labels: [
        "Email",
        "Organic Search",
        "Direct Browse",
        "Paid Search",
        "Social",
        "Referral",
      ],
      colors: [
        "#605DFF",
        "#3584FC",
        "#AD63F6",
        "#0dcaf0",
        "#25B003",
        "#FD5812",
      ],
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      sessions,
      sessionsByChannel,
      isActive,
      toggleActive,
    };
  },
});
</script>
