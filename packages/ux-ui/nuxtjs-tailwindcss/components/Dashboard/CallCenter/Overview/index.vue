<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Overview</h5>
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
              This Year
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
      <div class="trezo-tabs" id="trezo-tabs">
        <ul
          class="overview-navs grid grid-cols-1 sm:grid-cols-3 gap-[15px] md:gap-[25px]"
        >
          <li class="nav-item">
            <button
              type="button"
              class="nav-link block w-full py-[15px] px-[20px] rounded-md bg-primary-50 ltr:text-left rtl:text-right transition-all dark:bg-[#0a0e19]"
              :class="['tab', { active: activeTab === 'totalCalls' }]"
              @click="setActiveTab('totalCalls')"
            >
              <div class="flex items-center justify-between">
                <div>
                  <span class="block"> Total Calls </span>
                  <h5 class="!mb-0 !text-lg md:!text-xl !font-semibold">
                    26,435
                  </h5>
                </div>
                <img src="@/assets/images/icons/call5.svg" alt="call" />
                <img
                  src="@/assets/images/icons/call4.svg"
                  class="hidden"
                  alt="call"
                />
              </div>
              <span
                class="inline-block font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px] mt-[32px]"
              >
                <i
                  class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-success-600 !text-[20px]"
                >
                  trending_up
                </i>
                +15%
                <span class="text-gray-500 dark:text-gray-400 font-normal">
                  last year
                </span>
              </span>
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              data-tab="tab2"
              class="nav-link block w-full py-[15px] px-[20px] rounded-md bg-purple-50 ltr:text-left rtl:text-right transition-all dark:bg-[#0a0e19]"
              :class="['tab', { active: activeTab === 'answeredCalls' }]"
              @click="setActiveTab('answeredCalls')"
            >
              <div class="flex items-center justify-between">
                <div>
                  <span class="block"> Answered Calls </span>
                  <h5 class="!mb-0 !text-lg md:!text-xl !font-semibold">
                    18,520
                  </h5>
                </div>
                <img src="@/assets/images/icons/call3.svg" alt="call" />
                <img
                  src="@/assets/images/icons/call6.svg"
                  class="hidden"
                  alt="call"
                />
              </div>
              <span
                class="inline-block font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px] mt-[32px]"
              >
                <i
                  class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-success-600 !text-[20px]"
                >
                  trending_up
                </i>
                +7.5%
                <span class="text-gray-500 dark:text-gray-400 font-normal"
                  >last year</span
                >
              </span>
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              data-tab="tab3"
              class="nav-link block w-full py-[15px] px-[20px] rounded-md bg-orange-50 ltr:text-left rtl:text-right transition-all dark:bg-[#0a0e19]"
              :class="['tab', { active: activeTab === 'missedCalls' }]"
              @click="setActiveTab('missedCalls')"
            >
              <div class="flex items-center justify-between">
                <div>
                  <span class="block"> Missed Calls </span>
                  <h5 class="!mb-0 !text-lg md:!text-xl !font-semibold">
                    3,735
                  </h5>
                </div>
                <img src="@/assets/images/icons/call7.svg" alt="call" />
                <img
                  src="@/assets/images/icons/call8.svg"
                  class="hidden"
                  alt="call"
                />
              </div>
              <span
                class="inline-block font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px] mt-[32px]"
              >
                <i
                  class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-orange-600 !text-[20px]"
                >
                  trending_down
                </i>
                -25%
                <span class="text-gray-500 dark:text-gray-400 font-normal"
                  >last year</span
                >
              </span>
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane" v-show="activeTab === 'totalCalls'">
            <div class="-mb-[15px] ltr:-ml-[15px] rtl:mr-[15px]">
              <TotalCallsChart />
            </div>
          </div>
          <div class="tab-pane" v-show="activeTab === 'answeredCalls'">
            <div class="-mb-[15px] ltr:-ml-[15px] rtl:mr-[15px]">
              <AnsweredCallsChart />
            </div>
          </div>
          <div class="tab-pane" v-show="activeTab === 'missedCalls'">
            <div class="-mb-[15px] ltr:-ml-[15px] rtl:mr-[15px]">
              <MissedCallsChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import TotalCallsChart from "./TotalCallsChart.vue";
import AnsweredCallsChart from "./AnsweredCallsChart.vue";
import MissedCallsChart from "./MissedCallsChart.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Overview",
  components: {
    TotalCallsChart,
    AnsweredCallsChart,
    MissedCallsChart,
  },
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const activeTab = ref("totalCalls");

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    return {
      isActive,
      toggleActive,
      activeTab,
      setActiveTab,
    };
  },
});
</script>
