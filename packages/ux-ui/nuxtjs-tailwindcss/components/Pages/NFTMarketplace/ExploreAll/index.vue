<template>
  <div class="trezo-card mb-[25px]">
    <div class="trezo-card-content">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[25px]"
      >
        <div class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md">
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
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="block font-semibold text-gray-900 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  Christmas Eve
                </NuxtLink>
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
          <div class="flex items-center justify-between pb-[5px]">
            <span class="block font-semibold text-primary-800"> 5.50 ETH </span>
            <span
              class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
            >
              <i
                class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
              ></i>
              <span class="text-gray-900 dark:text-gray-400">9.2/</span>10
            </span>
          </div>
        </div>
        <div class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md">
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
          <div class="flex items-center justify-between pb-[5px]">
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
        </div>
        <div class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md">
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
          <div class="flex items-center justify-between pb-[5px]">
            <span class="block font-semibold text-primary-800"> 9.50 ETH </span>
            <span
              class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
            >
              <i
                class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
              ></i>
              <span class="text-gray-900 dark:text-gray-400">9.7/</span>10
            </span>
          </div>
        </div>
        <div class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md">
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
          <div class="flex items-center justify-between pb-[5px]">
            <span class="block font-semibold text-primary-800"> 8.15 ETH </span>
            <span
              class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
            >
              <i
                class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
              ></i>
              <span class="text-gray-900 dark:text-gray-400">9.3/</span>10
            </span>
          </div>
        </div>
        <div class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md">
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
          <div class="flex items-center justify-between pb-[5px]">
            <span class="block font-semibold text-primary-800"> 3.50 ETH </span>
            <span
              class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
            >
              <i
                class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
              ></i>
              <span class="text-gray-900 dark:text-gray-400">9.1/</span>10
            </span>
          </div>
        </div>
        <div class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md">
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
          <div class="flex items-center justify-between pb-[5px]">
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
        </div>
        <div class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md">
          <div class="relative">
            <img
              src="@/assets/images/nfts/featured7.jpg"
              class="rounded-md mb-[12px]"
              alt="nft-image"
            />
            <button
              class="bid-btn absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[15px] md:text-md rounded-[4px] bg-primary-500 text-white font-medium py-[7px] px-[20px] transition-all hover:bg-primary-400 inline-block"
              type="button"
            >
              Place Bid
            </button>
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
                <span class="block text-xs"> NFT ID: 35158 </span>
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="block font-semibold text-gray-900 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  Rotating Flower
                </NuxtLink>
              </div>
            </div>
            <img src="@/assets/images/nfts/verified2.svg" alt="verified" />
          </div>
          <span class="block text-xs mb-[4px]">
            Highest Bid:
            <span
              class="font-semibold text-gray-900 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
              >3.95 ETH</span
            >
          </span>
          <div class="flex items-center justify-between pb-[5px]">
            <span class="block font-semibold text-primary-800"> 6.50 ETH </span>
            <span
              class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
            >
              <i
                class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
              ></i>
              <span class="text-gray-900 dark:text-gray-400">8.7/</span>10
            </span>
          </div>
        </div>
        <div class="nft-card bg-white dark:bg-[#0c1427] p-[10px] rounded-md">
          <div class="relative">
            <img
              src="@/assets/images/nfts/featured8.jpg"
              class="rounded-md mb-[12px]"
              alt="nft-image"
            />
            <button
              class="bid-btn absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[15px] md:text-md rounded-[4px] bg-primary-500 text-white font-medium py-[7px] px-[20px] transition-all hover:bg-primary-400 inline-block"
              type="button"
            >
              Place Bid
            </button>
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
                <span class="block text-xs"> NFT ID: 35782 </span>
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="block font-semibold text-gray-900 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  Flying Bulb
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
          <div class="flex items-center justify-between pb-[5px]">
            <span class="block font-semibold text-primary-800"> 9.50 ETH </span>
            <span
              class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
            >
              <i
                class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
              ></i>
              <span class="text-gray-900 dark:text-gray-400">9.7/</span>10
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <Pagination total="30" items="8" class="pt-[0] md:pt-[0]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "ExploreAll",
  components: {
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
