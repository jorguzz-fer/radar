<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <div class="flex items-center gap-[17px] mb-[20px] md:mb-[25px]">
        <img
          src="@/assets/images/nfts/creator-author.jpg"
          class="rounded-full w-[65px]"
          alt="creator-author"
        />
        <div>
          <h3 class="!text-lg md:!text-xl !mb-[4px]">Angela Carter</h3>
          <span class="block text-xs"> ID: 35246 </span>
        </div>
      </div>

      <div class="flex items-center justify-between mb-[20px] md:mb-[25px]">
        <div class="flex items-center gap-[14px]">
          <img src="@/assets/images/icons/schedule.svg" alt="schedule" />
          <div>
            <span class="block text-xs"> Joined Since </span>
            <span class="block text-black dark:text-white font-semibold">
              23 June 2025
            </span>
          </div>
        </div>
        <button
          type="button"
          class="inline-block rounded-[7px] py-[6px] px-[17px] font-medium md:text-md bg-primary-500 text-white transition-all hover:bg-primary-400"
        >
          Follow
        </button>
      </div>
      <div
        class="py-[20px] md:py-[25px] px-[20px] md:px-[30px] bg-gray-50 dark:bg-[#0a0e19] flex items-center justify-between gap-[15px] rounded-md text-center"
      >
        <div>
          <span class="block text-xs"> Total NFT </span>
          <span class="block font-semibold text-primary-800"> 156 </span>
        </div>
        <div>
          <span class="block text-xs"> Total Earned </span>
          <span class="block font-semibold text-gray-900 dark:text-gray-400">
            1234ETH
          </span>
        </div>
        <div>
          <span class="block text-xs"> Auction </span>
          <span class="block font-semibold text-gray-900 dark:text-gray-400">
            45
          </span>
        </div>
      </div>
      <h3 class="!text-lg !mt-[20px] md:!mt-[25px] !mb-[10px]">Description</h3>
      <p>
        This NFT captures the essence of boundless potential, symbolized by a
        surreal landscape where the sky meets the earth in a dazzling fusion of
        colors. The intricate design features flowing lines that blend together,
        representing the limitless paths we can take in life.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarterID",
});
</script>
