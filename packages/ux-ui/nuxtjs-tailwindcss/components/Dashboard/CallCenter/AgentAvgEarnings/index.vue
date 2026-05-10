<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Agent Avg. Earnings</h5>
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
      <div class="trezo-tabs" id="trezo-tabs">
        <div class="agent-avg-earnings-navs flex items-center gap-[30px]">
          <button
            type="button"
            class="inline-block rounded-[4px] transition-all hover:bg-primary-500 hover:text-white w-[34px] h-[28px]"
            :class="['tab', { active: activeTab === 'oneDay' }]"
            @click="setActiveTab('oneDay')"
          >
            1d
          </button>
          <button
            type="button"
            class="inline-block rounded-[4px] transition-all hover:bg-primary-500 hover:text-white w-[34px] h-[28px]"
            :class="['tab', { active: activeTab === 'fifteenDay' }]"
            @click="setActiveTab('fifteenDay')"
          >
            15d
          </button>
          <button
            type="button"
            class="inline-block rounded-[4px] transition-all hover:bg-primary-500 hover:text-white w-[34px] h-[28px]"
            :class="['tab', { active: activeTab === 'oneMonth' }]"
            @click="setActiveTab('oneMonth')"
          >
            1m
          </button>
          <button
            type="button"
            class="inline-block rounded-[4px] transition-all hover:bg-primary-500 hover:text-white w-[34px] h-[28px]"
            :class="['tab', { active: activeTab === 'sixMonth' }]"
            @click="setActiveTab('sixMonth')"
          >
            6m
          </button>
          <button
            type="button"
            class="inline-block rounded-[4px] transition-all hover:bg-primary-500 hover:text-white w-[34px] h-[28px]"
            :class="['tab', { active: activeTab === 'oneYear' }]"
            @click="setActiveTab('oneYear')"
          >
            1y
          </button>
        </div>

        <div class="tab-content">
          <div class="tab-pane" v-show="activeTab === 'oneDay'">
            <div class="-mb-[3px]">
              <AgentAvgEarningsChart />
            </div>

            <div class="flex items-center gap-[30px]">
              <div class="flex items-center gap-[15px]">
                <div
                  class="border border-gray-100 bg-gray-50 w-[48px] h-[48px] rounded-[5px] flex items-center justify-center dark:bg-[#0a0e19] dark:border-[#172036]"
                >
                  <img src="@/assets/images/icons/money.svg" alt="money" />
                </div>
                <div>
                  <h5 class="!mb-px !text-2xl !leading-none !font-semibold">
                    $2,534
                  </h5>
                  <span class="block"> Last month earning </span>
                </div>
              </div>
              <span
                class="inline-block font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]"
              >
                <i
                  class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-success-600 !text-[20px]"
                >
                  trending_up
                </i>
                +8.7%
              </span>
            </div>
          </div>
          <div class="tab-pane" v-show="activeTab === 'fifteenDay'">
            <div class="-mb-[3px]">
              <AgentAvgEarningsTwoChart />
            </div>

            <div class="flex items-center gap-[30px]">
              <div class="flex items-center gap-[15px]">
                <div
                  class="border border-gray-100 bg-gray-50 w-[48px] h-[48px] rounded-[5px] flex items-center justify-center dark:bg-[#0a0e19] dark:border-[#172036]"
                >
                  <img src="@/assets/images/icons/money.svg" alt="money" />
                </div>
                <div>
                  <h5 class="!mb-px !text-2xl !leading-none !font-semibold">
                    $2,534
                  </h5>
                  <span class="block"> Last month earning </span>
                </div>
              </div>
              <span
                class="inline-block font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]"
              >
                <i
                  class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-success-600 !text-[20px]"
                >
                  trending_up
                </i>
                +8.7%
              </span>
            </div>
          </div>
          <div class="tab-pane" v-show="activeTab === 'oneMonth'">
            <div class="-mb-[3px]">
              <AgentAvgEarningsThreeChart />
            </div>

            <div class="flex items-center gap-[30px]">
              <div class="flex items-center gap-[15px]">
                <div
                  class="border border-gray-100 bg-gray-50 w-[48px] h-[48px] rounded-[5px] flex items-center justify-center dark:bg-[#0a0e19] dark:border-[#172036]"
                >
                  <img src="@/assets/images/icons/money.svg" alt="money" />
                </div>
                <div>
                  <h5 class="!mb-px !text-2xl !leading-none !font-semibold">
                    $2,534
                  </h5>
                  <span class="block"> Last month earning </span>
                </div>
              </div>
              <span
                class="inline-block font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]"
              >
                <i
                  class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-success-600 !text-[20px]"
                >
                  trending_up
                </i>
                +8.7%
              </span>
            </div>
          </div>
          <div class="tab-pane" v-show="activeTab === 'sixMonth'">
            <div class="-mb-[3px]">
              <AgentAvgEarningsFourChart />
            </div>

            <div class="flex items-center gap-[30px]">
              <div class="flex items-center gap-[15px]">
                <div
                  class="border border-gray-100 bg-gray-50 w-[48px] h-[48px] rounded-[5px] flex items-center justify-center dark:bg-[#0a0e19] dark:border-[#172036]"
                >
                  <img src="@/assets/images/icons/money.svg" alt="money" />
                </div>
                <div>
                  <h5 class="!mb-px !text-2xl !leading-none !font-semibold">
                    $2,534
                  </h5>
                  <span class="block"> Last month earning </span>
                </div>
              </div>
              <span
                class="inline-block font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]"
              >
                <i
                  class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-success-600 !text-[20px]"
                >
                  trending_up
                </i>
                +8.7%
              </span>
            </div>
          </div>
          <div class="tab-pane" v-show="activeTab === 'oneYear'">
            <div class="-mb-[3px]">
              <AgentAvgEarningsFiveChart />
            </div>

            <div class="flex items-center gap-[30px]">
              <div class="flex items-center gap-[15px]">
                <div
                  class="border border-gray-100 bg-gray-50 w-[48px] h-[48px] rounded-[5px] flex items-center justify-center dark:bg-[#0a0e19] dark:border-[#172036]"
                >
                  <img src="@/assets/images/icons/money.svg" alt="money" />
                </div>
                <div>
                  <h5 class="!mb-px !text-2xl !leading-none !font-semibold">
                    $2,534
                  </h5>
                  <span class="block"> Last month earning </span>
                </div>
              </div>
              <span
                class="inline-block font-medium text-black dark:text-white relative ltr:pl-[27px] rtl:pr-[27px]"
              >
                <i
                  class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-success-600 !text-[20px]"
                >
                  trending_up
                </i>
                +8.7%
              </span>
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

import AgentAvgEarningsChart from "./AgentAvgEarningsChart.vue";
import AgentAvgEarningsTwoChart from "./AgentAvgEarningsTwoChart.vue";
import AgentAvgEarningsThreeChart from "./AgentAvgEarningsThreeChart.vue";
import AgentAvgEarningsFourChart from "./AgentAvgEarningsFourChart.vue";
import AgentAvgEarningsFiveChart from "./AgentAvgEarningsFiveChart.vue";

export default defineComponent({
  name: "AgentAvgEarnings",
  components: {
    AgentAvgEarningsChart,
    AgentAvgEarningsTwoChart,
    AgentAvgEarningsThreeChart,
    AgentAvgEarningsFourChart,
    AgentAvgEarningsFiveChart,
  },
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const activeTab = ref("oneDay");

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
      isActive,
      toggleActive,
    };
  },
});
</script>
