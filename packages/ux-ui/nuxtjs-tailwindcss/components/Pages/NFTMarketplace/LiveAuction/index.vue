<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
    <div class="lg:col-span-3">
      <!-- Live Auction -->
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
      >
        <div class="trezo-card-header md:flex items-center justify-between">
          <div class="trezo-card-title">
            <h5 class="!mb-0">Live Auction</h5>
          </div>
          <div
            class="trezo-card-subtitle sm:flex items-center sm:gap-[25px] lg:gap-[35px] sm:mt-[15px] md:mt-0"
          >
            <button
              class="text-primary-500 text-xs uppercase inline-block font-semibold transition-all mt-[12px] sm:mt-0 ltr:mr-[12px] rtl:ml-[12px] ltr:sm:mr-0 rtl:sm:ml-0"
              type="button"
            >
              ALL ITEMS (12)
            </button>
            <button
              class="text-gray-500 dark:text-gray-400 text-xs uppercase inline-block font-medium transition-all hover:text-primary-500 mt-[12px] sm:mt-0 ltr:mr-[12px] rtl:ml-[12px] ltr:sm:mr-0 rtl:sm:ml-0"
              type="button"
            >
              UP TO 15%(05)
            </button>
            <button
              class="text-gray-500 dark:text-gray-400 text-xs uppercase inline-block font-medium transition-all hover:text-primary-500 mt-[12px] sm:mt-0 ltr:mr-[12px] rtl:ml-[12px] ltr:sm:mr-0 rtl:sm:ml-0"
              type="button"
            >
              UP TO 30%(07)
            </button>
            <button
              class="text-gray-500 dark:text-gray-400 text-xs uppercase inline-block font-medium transition-all hover:text-primary-500 mt-[12px] sm:mt-0 ltr:mr-[12px] rtl:ml-[12px] ltr:sm:mr-0 rtl:sm:ml-0"
              type="button"
            >
              UP TO 50%(05)
            </button>
          </div>
        </div>
      </div>

      <!-- NFT Items -->
      <div class="trezo-card mb-[25px]">
        <div class="trezo-card-content">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[25px]"
          >
            <div
              class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md"
            >
              <div class="relative">
                <img
                  src="@/assets/images/nfts/featured1.jpg"
                  class="rounded-md mb-[12px]"
                  alt="nft-image"
                />
                <button
                  class="bid-btn absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[15px] md:text-md rounded-[4px] bg-primary-500 text-white font-medium py-[7px] px-[20px] transition-all hover:bg-primary-400 inline-block"
                  type="button"
                >
                  Place Bid
                </button>
                <CountdownTimer endDate="December 14, 2026 21:14:01" />
              </div>
              <div
                class="flex items-center justify-between border-b border-primary-50 dark:border-[#172036] pb-[10px] mb-[14px]"
              >
                <div class="flex items-center gap-[6px]">
                  <img
                    src="@/assets/images/nfts/author.gif"
                    class="rounded-full w-[27px]"
                    alt="author-image"
                  />
                  <div>
                    <span class="block text-xs"> NFT ID: 35246 </span>
                    <a
                      to="/nft-marketplace/nft-details"
                      class="block font-semibold text-gray-900 dark:text-gray-400 transition-all hover:text-primary-500"
                    >
                      Christmas Eve
                    </a>
                  </div>
                </div>
                <img src="@/assets/images/nfts/verified2.svg" alt="verified" />
              </div>
              <span class="block text-xs mb-[4px]">
                Highest Bid:
                <span
                  class="font-semibold text-gray-900 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >9.75 ETH</span
                >
              </span>
              <div class="flex items-center justify-between">
                <span class="block font-semibold text-primary-800">
                  5.50 ETH
                </span>
                <span
                  class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
                >
                  <i
                    class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
                  ></i>
                  <span class="text-gray-900 dark:text-gray-400">9.2/</span>10
                </span>
              </div>
              <div
                class="mt-[20px] flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                  style="width: 50%"
                ></div>
              </div>
              <div class="flex items-center justify-between py-[6px]">
                <span class="block text-xs"> Sold: 130 </span>
                <span class="block text-xs"> Available: 123 </span>
              </div>
            </div>
            <div
              class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md"
            >
              <div class="relative">
                <img
                  src="@/assets/images/nfts/featured2.jpg"
                  class="rounded-md mb-[12px]"
                  alt="nft-image"
                />
                <button
                  class="bid-btn absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[15px] md:text-md rounded-[4px] bg-primary-500 text-white font-medium py-[7px] px-[20px] transition-all hover:bg-primary-400 inline-block"
                  type="button"
                >
                  Place Bid
                </button>
                <CountdownTimer endDate="January 14, 2026 21:14:01" />
              </div>
              <div
                class="flex items-center justify-between border-b border-primary-50 dark:border-[#172036] pb-[10px] mb-[14px]"
              >
                <div class="flex items-center gap-[6px]">
                  <img
                    src="@/assets/images/nfts/author.gif"
                    class="rounded-full w-[27px]"
                    alt="author-image"
                  />
                  <div>
                    <span class="block text-xs"> NFT ID: 35247 </span>
                    <NuxtLink
                      to="/nft-marketplace/nft-details"
                      class="block font-semibold text-gray-900 dark:text-gray-400 transition-all hover:text-primary-500"
                    >
                      Humming Bird
                    </NuxtLink>
                  </div>
                </div>
                <img src="@/assets/images/nfts/verified2.svg" alt="verified" />
              </div>
              <span class="block text-xs mb-[4px]">
                Highest Bid:
                <span
                  class="font-semibold text-gray-900 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >10.75 ETH</span
                >
              </span>
              <div class="flex items-center justify-between">
                <span class="block font-semibold text-primary-800">
                  12.50 ETH
                </span>
                <span
                  class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
                >
                  <i
                    class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
                  ></i>
                  <span class="text-gray-900 dark:text-gray-400">9.5/</span>10
                </span>
              </div>
              <div
                class="mt-[20px] flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                  style="width: 50%"
                ></div>
              </div>
              <div class="flex items-center justify-between py-[6px]">
                <span class="block text-xs"> Sold: 130 </span>
                <span class="block text-xs"> Available: 123 </span>
              </div>
            </div>
            <div
              class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md"
            >
              <div class="relative">
                <img
                  src="@/assets/images/nfts/featured3.jpg"
                  class="rounded-md mb-[12px]"
                  alt="nft-image"
                />
                <button
                  class="bid-btn absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[15px] md:text-md rounded-[4px] bg-primary-500 text-white font-medium py-[7px] px-[20px] transition-all hover:bg-primary-400 inline-block"
                  type="button"
                >
                  Place Bid
                </button>
                <CountdownTimer endDate="February 14, 2026 21:14:01" />
              </div>
              <div
                class="flex items-center justify-between border-b border-primary-50 dark:border-[#172036] pb-[10px] mb-[14px]"
              >
                <div class="flex items-center gap-[6px]">
                  <img
                    src="@/assets/images/nfts/author.gif"
                    class="rounded-full w-[27px]"
                    alt="author-image"
                  />
                  <div>
                    <span class="block text-xs"> NFT ID: 35228 </span>
                    <NuxtLink
                      to="/nft-marketplace/nft-details"
                      class="block font-semibold text-gray-900 dark:text-gray-400 transition-all hover:text-primary-500"
                    >
                      Naughty Pool
                    </NuxtLink>
                  </div>
                </div>
                <img src="@/assets/images/nfts/verified2.svg" alt="verified" />
              </div>
              <span class="block text-xs mb-[4px]">
                Highest Bid:
                <span
                  class="font-semibold text-gray-900 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >8.75 ETH</span
                >
              </span>
              <div class="flex items-center justify-between">
                <span class="block font-semibold text-primary-800">
                  9.50 ETH
                </span>
                <span
                  class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
                >
                  <i
                    class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
                  ></i>
                  <span class="text-gray-900 dark:text-gray-400">9.7/</span>10
                </span>
              </div>
              <div
                class="mt-[20px] flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                  style="width: 50%"
                ></div>
              </div>
              <div class="flex items-center justify-between py-[6px]">
                <span class="block text-xs"> Sold: 130 </span>
                <span class="block text-xs"> Available: 123 </span>
              </div>
            </div>
            <div
              class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md"
            >
              <div class="relative">
                <img
                  src="@/assets/images/nfts/featured4.jpg"
                  class="rounded-md mb-[12px]"
                  alt="nft-image"
                />
                <button
                  class="bid-btn absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[15px] md:text-md rounded-[4px] bg-primary-500 text-white font-medium py-[7px] px-[20px] transition-all hover:bg-primary-400 inline-block"
                  type="button"
                >
                  Place Bid
                </button>
                <CountdownTimer endDate="February 14, 2026 21:14:01" />
              </div>
              <div
                class="flex items-center justify-between border-b border-primary-50 dark:border-[#172036] pb-[10px] mb-[14px]"
              >
                <div class="flex items-center gap-[6px]">
                  <img
                    src="@/assets/images/nfts/author.gif"
                    class="rounded-full w-[27px]"
                    alt="author-image"
                  />
                  <div>
                    <span class="block text-xs"> NFT ID: 35227 </span>
                    <NuxtLink
                      to="/nft-marketplace/nft-details"
                      class="block font-semibold text-gray-900 dark:text-gray-400 transition-all hover:text-primary-500"
                    >
                      Hello Thumbs
                    </NuxtLink>
                  </div>
                </div>
                <img src="@/assets/images/nfts/verified2.svg" alt="verified" />
              </div>
              <span class="block text-xs mb-[4px]">
                Highest Bid:
                <span
                  class="font-semibold text-gray-900 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >9.30 ETH</span
                >
              </span>
              <div class="flex items-center justify-between">
                <span class="block font-semibold text-primary-800">
                  8.15 ETH
                </span>
                <span
                  class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
                >
                  <i
                    class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
                  ></i>
                  <span class="text-gray-900 dark:text-gray-400">9.3/</span>10
                </span>
              </div>
              <div
                class="mt-[20px] flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                  style="width: 50%"
                ></div>
              </div>
              <div class="flex items-center justify-between py-[6px]">
                <span class="block text-xs"> Sold: 130 </span>
                <span class="block text-xs"> Available: 123 </span>
              </div>
            </div>
            <div
              class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md"
            >
              <div class="relative">
                <img
                  src="@/assets/images/nfts/featured5.jpg"
                  class="rounded-md mb-[12px]"
                  alt="nft-image"
                />
                <button
                  class="bid-btn absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[15px] md:text-md rounded-[4px] bg-primary-500 text-white font-medium py-[7px] px-[20px] transition-all hover:bg-primary-400 inline-block"
                  type="button"
                >
                  Place Bid
                </button>
                <CountdownTimer endDate="December 14, 2026 21:14:01" />
              </div>
              <div
                class="flex items-center justify-between border-b border-primary-50 dark:border-[#172036] pb-[10px] mb-[14px]"
              >
                <div class="flex items-center gap-[6px]">
                  <img
                    src="@/assets/images/nfts/author.gif"
                    class="rounded-full w-[27px]"
                    alt="author-image"
                  />
                  <div>
                    <span class="block text-xs"> NFT ID: 35248 </span>
                    <NuxtLink
                      to="/nft-marketplace/nft-details"
                      class="block font-semibold text-gray-900 dark:text-gray-400 transition-all hover:text-primary-500"
                    >
                      Pixel Watermelon
                    </NuxtLink>
                  </div>
                </div>
                <img src="@/assets/images/nfts/verified2.svg" alt="verified" />
              </div>
              <span class="block text-xs mb-[4px]">
                Highest Bid:
                <span
                  class="font-semibold text-gray-900 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >1.75 ETH</span
                >
              </span>
              <div class="flex items-center justify-between">
                <span class="block font-semibold text-primary-800">
                  3.50 ETH
                </span>
                <span
                  class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
                >
                  <i
                    class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
                  ></i>
                  <span class="text-gray-900 dark:text-gray-400">9.1/</span>10
                </span>
              </div>
              <div
                class="mt-[20px] flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                  style="width: 50%"
                ></div>
              </div>
              <div class="flex items-center justify-between py-[6px]">
                <span class="block text-xs"> Sold: 130 </span>
                <span class="block text-xs"> Available: 123 </span>
              </div>
            </div>
            <div
              class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md"
            >
              <div class="relative">
                <img
                  src="@/assets/images/nfts/featured6.gif"
                  class="rounded-md mb-[12px]"
                  alt="nft-image"
                />
                <button
                  class="bid-btn absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[15px] md:text-md rounded-[4px] bg-primary-500 text-white font-medium py-[7px] px-[20px] transition-all hover:bg-primary-400 inline-block"
                  type="button"
                >
                  Place Bid
                </button>
                <CountdownTimer endDate="December 14, 2026 21:14:01" />
              </div>
              <div
                class="flex items-center justify-between border-b border-primary-50 dark:border-[#172036] pb-[10px] mb-[14px]"
              >
                <div class="flex items-center gap-[6px]">
                  <img
                    src="@/assets/images/nfts/author.gif"
                    class="rounded-full w-[27px]"
                    alt="author-image"
                  />
                  <div>
                    <span class="block text-xs"> NFT ID: 35258 </span>
                    <NuxtLink
                      to="/nft-marketplace/nft-details"
                      class="block font-semibold text-gray-900 dark:text-gray-400 transition-all hover:text-primary-500"
                    >
                      BDancing Cookies
                    </NuxtLink>
                  </div>
                </div>
                <img src="@/assets/images/nfts/verified2.svg" alt="verified" />
              </div>
              <span class="block text-xs mb-[4px]">
                Highest Bid:
                <span
                  class="font-semibold text-gray-900 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >10.75 ETH</span
                >
              </span>
              <div class="flex items-center justify-between">
                <span class="block font-semibold text-primary-800">
                  12.50 ETH
                </span>
                <span
                  class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
                >
                  <i
                    class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
                  ></i>
                  <span class="text-gray-900 dark:text-gray-400">9.1/</span>10
                </span>
              </div>
              <div
                class="mt-[20px] flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
              >
                <div
                  class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                  style="width: 50%"
                ></div>
              </div>
              <div class="flex items-center justify-between py-[6px]">
                <span class="block text-xs"> Sold: 130 </span>
                <span class="block text-xs"> Available: 123 </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
      >
        <div class="trezo-card-content">
          <Pagination items="8" total="30" class="pt-[0] md:pt-[0]" />
        </div>
      </div>
    </div>
    <div class="lg:col-span-1">
      <NewMobileApp />

      <HistoryOfBids />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewMobileApp from "./NewMobileApp.vue";
import HistoryOfBids from "./HistoryOfBids.vue";
import CountdownTimer from "./CountdownTimer.vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "LiveAuction",
  components: {
    NewMobileApp,
    HistoryOfBids,
    CountdownTimer,
    Pagination,
  },
});
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .md\:pt-\[0\] {
    padding-top: 0 !important;
  }
}
.pt-\[0\] {
  padding-top: 0 !important;
}
</style>
