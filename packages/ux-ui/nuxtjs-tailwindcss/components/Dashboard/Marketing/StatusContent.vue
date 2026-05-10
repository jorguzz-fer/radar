<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[25px] mb-[25px]"
  >
    <!-- Ad Spend -->
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between mb-[10px]">
          <div>
            <span class="block mb-[6px]"> Ad Spend </span>
            <h3 class="!leading-none !text-xl md:!text-2xl lg:!text-3xl !mb-0">
              $1,528
            </h3>
          </div>
          <img
            src="@/assets/images/icons/ads.gif"
            class="w-[60px] ltr:-mr-[10px] rtl:-ml-[10px]"
            alt="ads"
          />
        </div>
        <span
          class="inline-block text-xs px-[9px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#172036] text-sm rounded-[100px]"
        >
          +5.4%
        </span>
        <span class="block text-xs mt-[10px]"> vs previous 30 days </span>
      </div>
    </div>

    <!-- Cost Per Thousand -->
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between mb-[10px]">
          <div>
            <span class="block mb-[6px]"> Cost Per Thousand </span>
            <h3 class="!leading-none !text-xl md:!text-2xl lg:!text-3xl !mb-0">
              $3.95
            </h3>
          </div>
          <img
            src="@/assets/images/icons/video-advertising.gif"
            class="w-[60px] ltr:-mr-[10px] rtl:-ml-[10px]"
            alt="video-advertising"
          />
        </div>
        <span
          class="inline-block text-xs px-[9px] text-orange-700 border border-orange-300 bg-orange-100 dark:bg-[#15203c] dark:border-[#172036] text-sm rounded-[100px]"
        >
          -1.4%
        </span>
        <span class="block text-xs mt-[10px]"> vs previous 30 days </span>
      </div>
    </div>

    <!-- Cost Per Click -->
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between mb-[10px]">
          <div>
            <span class="block mb-[6px]"> Cost Per Click </span>
            <h3 class="!leading-none !text-xl md:!text-2xl lg:!text-3xl !mb-0">
              $0.15
            </h3>
          </div>
          <img
            src="@/assets/images/icons/call-to-action.gif"
            class="w-[60px] ltr:-mr-[10px] rtl:-ml-[10px]"
            alt="call-to-action"
          />
        </div>
        <span
          class="inline-block text-xs px-[9px] text-orange-700 border border-orange-300 bg-orange-100 dark:bg-[#15203c] dark:border-[#172036] text-sm rounded-[100px]"
        >
          -0.04%
        </span>
        <span class="block text-xs mt-[10px]"> vs previous 30 days </span>
      </div>
    </div>

    <!-- Click Through Rate -->
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between mb-[10px]">
          <div>
            <span class="block mb-[6px]"> Click Through Rate </span>
            <h3 class="!leading-none !text-xl md:!text-2xl lg:!text-3xl !mb-0">
              $2.95
            </h3>
          </div>
          <img
            src="@/assets/images/icons/ads2.gif"
            class="w-[60px] ltr:-mr-[10px] rtl:-ml-[10px]"
            alt="ads2"
          />
        </div>
        <span
          class="inline-block text-xs px-[9px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#172036] text-sm rounded-[100px]"
        >
          +7%
        </span>
        <span class="block text-xs mt-[10px]"> vs previous 30 days </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StatusContent",
});
</script>
