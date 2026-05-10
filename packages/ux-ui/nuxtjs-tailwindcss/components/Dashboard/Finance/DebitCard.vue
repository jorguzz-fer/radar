<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title">
        <h5 class="!mb-0">Card</h5>
      </div>
      <div class="trezo-card-subtitle">
        <button
          type="button"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          @click="stateStoreInstance.cardModal"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add Card
          </span>
        </button>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
        <div
          class="p-[20px] md:p-[25px] rounded-[16px] bg-center bg-no-repeat bg-cover"
          :style="{ backgroundImage: `url(${image})` }"
        >
          <div class="mb-[7px] flex items-center justify-between">
            <span class="block text-white font-medium text-xs">
              Debit Card
            </span>
            <span class="text-xl text-white leading-none">
              <i class="ri-visa-fill"></i>
            </span>
          </div>
          <img src="@/assets/images/icons/card-frame.png" alt="card-frame" />
          <h5
            class="!text-white !font-semibold mt-[12px] !mb-[50px]"
            style="word-spacing: 4px"
          >
            5322 0520 0744 1794
          </h5>
          <div class="flex items-center justify-between">
            <span class="block text-white"> David Farrior </span>
            <span class="text-white block font-medium text-xs">
              EXP : 12/30
            </span>
          </div>
        </div>
        <div
          class="p-[20px] md:p-[25px] rounded-[16px] bg-center bg-no-repeat bg-cover"
          :style="{ backgroundImage: `url(${image2})` }"
        >
          <div class="mb-[7px] flex items-center justify-between">
            <span class="block text-white font-medium text-xs">
              Virtual Card
            </span>
            <span class="text-xl text-white leading-none">
              <i class="ri-mastercard-fill"></i>
            </span>
          </div>
          <img src="@/assets/images/icons/card-frame.png" alt="card-frame" />
          <h5
            class="!text-white !font-semibold mt-[12px] !mb-[50px]"
            style="word-spacing: 4px"
          >
            .... .... .... 1794
          </h5>
          <div class="flex items-center justify-between">
            <span class="block text-white"> David Farrior </span>
            <span class="text-white block font-medium text-xs">
              EXP : 12/30
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "@/utils/store";

import image from "@/assets/images/wallet/card1.jpg";
import image2 from "@/assets/images/wallet/card2.jpg";

export default defineComponent({
  name: "DebitCard",
  setup() {
    const stateStoreInstance = stateStore;

    return {
      image,
      image2,
      stateStoreInstance,
    };
  },
});
</script>
