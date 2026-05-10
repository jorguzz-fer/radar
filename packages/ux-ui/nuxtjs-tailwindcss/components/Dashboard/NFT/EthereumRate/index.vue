<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <span class="block mb-[7px]"> Ethereum Rate </span>
      <div class="flex items-center gap-[10px]">
        <h3 class="!leading-none !text-xl md:!text-2xl lg:!text-3xl !mb-0">
          $1,528
        </h3>
        <span
          class="inline-block text-xs px-[9px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#172036] text-sm rounded-[100px]"
        >
          +5.4%
        </span>
      </div>
      <span class="block text-xs mt-[9px]"> vs previous 30 days </span>

      <div class="trezo-tabs" id="trezo-tabs">
        <div
          class="agent-avg-earnings-navs mt-[20px] md:mt-[25px] flex items-center gap-[30px]"
        >
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
            <EthereumRateChart />
            <ul>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 11:30 AM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,605.08
                </span>
                <span class="block text-xs font-semibold text-success-700">
                  +5.4%
                </span>
              </li>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 01:20 PM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,615.50
                </span>
                <span class="block text-xs font-semibold text-orange-600">
                  -3.21%
                </span>
              </li>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 03:33 AM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,831.13
                </span>
                <span class="block text-xs font-semibold text-success-700">
                  +7.32%
                </span>
              </li>
            </ul>
          </div>
          <div class="tab-pane" v-show="activeTab === 'fifteenDay'">
            <EthereumRateTwoChart />
            <ul>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 11:30 AM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,605.08
                </span>
                <span class="block text-xs font-semibold text-success-700">
                  +5.4%
                </span>
              </li>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 01:20 PM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,615.50
                </span>
                <span class="block text-xs font-semibold text-orange-600">
                  -3.21%
                </span>
              </li>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 03:33 AM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,831.13
                </span>
                <span class="block text-xs font-semibold text-success-700">
                  +7.32%
                </span>
              </li>
            </ul>
          </div>
          <div class="tab-pane" v-show="activeTab === 'oneMonth'">
            <EthereumRateThreeChart />
            <ul>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 11:30 AM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,605.08
                </span>
                <span class="block text-xs font-semibold text-success-700">
                  +5.4%
                </span>
              </li>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 01:20 PM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,615.50
                </span>
                <span class="block text-xs font-semibold text-orange-600">
                  -3.21%
                </span>
              </li>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 03:33 AM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,831.13
                </span>
                <span class="block text-xs font-semibold text-success-700">
                  +7.32%
                </span>
              </li>
            </ul>
          </div>
          <div class="tab-pane" v-show="activeTab === 'sixMonth'">
            <EthereumRateFourChart />
            <ul>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 11:30 AM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,605.08
                </span>
                <span class="block text-xs font-semibold text-success-700">
                  +5.4%
                </span>
              </li>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 01:20 PM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,615.50
                </span>
                <span class="block text-xs font-semibold text-orange-600">
                  -3.21%
                </span>
              </li>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 03:33 AM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,831.13
                </span>
                <span class="block text-xs font-semibold text-success-700">
                  +7.32%
                </span>
              </li>
            </ul>
          </div>
          <div class="tab-pane" v-show="activeTab === 'oneYear'">
            <EthereumRateFiveChart />
            <ul>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 11:30 AM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,605.08
                </span>
                <span class="block text-xs font-semibold text-success-700">
                  +5.4%
                </span>
              </li>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 01:20 PM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,615.50
                </span>
                <span class="block text-xs font-semibold text-orange-600">
                  -3.21%
                </span>
              </li>
              <li class="flex items-center justify-between mb-[18px] last:mb-0">
                <span class="block text-xs font-semibold"> 03:33 AM </span>
                <span
                  class="block text-xs font-semibold text-gray-700 dark:text-gray-400"
                >
                  $3,831.13
                </span>
                <span class="block text-xs font-semibold text-success-700">
                  +7.32%
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import EthereumRateChart from "./EthereumRateChart.vue";
import EthereumRateTwoChart from "./EthereumRateTwoChart.vue";
import EthereumRateThreeChart from "./EthereumRateThreeChart.vue";
import EthereumRateFourChart from "./EthereumRateFourChart.vue";
import EthereumRateFiveChart from "./EthereumRateFiveChart.vue";

export default defineComponent({
  name: "EthereumRate",
  components: {
    EthereumRateChart,
    EthereumRateTwoChart,
    EthereumRateThreeChart,
    EthereumRateFourChart,
    EthereumRateFiveChart,
  },
  setup() {
    const activeTab = ref("oneDay");

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
    };
  },
});
</script>
