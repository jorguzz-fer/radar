<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <div class="2xl:col-span-1">
      <div class="trezo-card">
        <div class="trezo-card-content" id="nftDetailsImageSlides">
          <swiper
            :spaceBetween="10"
            :loop="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2"
          >
            <swiper-slide>
              <div class="bg-white dark:bg-[#0c1427] p-[13px]">
                <img
                  class="rounded-md"
                  src="@/assets/images/nfts/nft-details1.jpg"
                  alt="nft-details-image"
                />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white dark:bg-[#0c1427] p-[13px]">
                <img
                  class="rounded-md"
                  src="@/assets/images/nfts/nft-details2.jpg"
                  alt="nft-details-image"
                />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white dark:bg-[#0c1427] p-[13px]">
                <img
                  class="rounded-md"
                  src="@/assets/images/nfts/nft-details3.jpg"
                  alt="nft-details-image"
                />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white dark:bg-[#0c1427] p-[13px]">
                <img
                  class="rounded-md"
                  src="@/assets/images/nfts/nft-details4.jpg"
                  alt="nft-details-image"
                />
              </div>
            </swiper-slide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="25"
            :slidesPerView="3"
            :loop="true"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="swiper mySwiper my-[15px]"
          >
            <swiper-slide>
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/nfts/nft-details1.jpg"
                alt="nft-details-image"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/nfts/nft-details2.jpg"
                alt="nft-details-image"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/nfts/nft-details3.jpg"
                alt="nft-details-image"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/nfts/nft-details4.jpg"
                alt="nft-details-image"
              />
            </swiper-slide>
          </swiper>
          <button
            class="text-[15px] md:text-md rounded-[4px] bg-primary-500 text-white font-medium py-[7px] px-[20px] transition-all hover:bg-primary-400 block w-full"
            type="button"
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>

    <div class="2xl:col-span-2">
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
      >
        <div class="trezo-card-content">
          <span class="block text-xs mb-[2px]"> NFT ID: 35246 </span>
          <h2 class="!text-lg md:!text-xl !mb-0">Christmas Eve</h2>
          <div
            class="h-[1px] bg-primary-50 dark:bg-[#172036] mt-[12px] mb-[15px]"
          ></div>
          <div class="sm:flex items-center sm:gap-[40px]">
            <div class="flex items-center gap-[10px]">
              <div class="relative ltr:pr-[7px] rtl:pl-[7px]">
                <img
                  src="@/assets/images/nfts/author.gif"
                  class="rounded-full w-[35px]"
                  alt="author-image"
                />
                <img
                  src="@/assets/images/nfts/verified2.svg"
                  class="absolute ltr:right-0 rtl:left-0 bottom-0"
                  alt="verified"
                />
              </div>
              <div>
                <span class="block text-gray-500 dark:text-gray-400 text-xs">
                  Creator
                </span>
                <span
                  class="font-semibold text-black dark:text-white inline-block"
                >
                  Anan Loren
                </span>
              </div>
            </div>
            <div class="flex items-center gap-[10px] mt-[20px] sm:mt-0">
              <img src="@/assets/images/icons/schedule.svg" alt="schedule" />
              <div>
                <span class="block text-xs"> Published </span>
                <span class="block text-black dark:text-white font-semibold">
                  23 June 2025
                </span>
              </div>
            </div>
          </div>

          <div
            class="mt-[20px] py-[19px] px-[20px] md:px-[25px] bg-gray-50 dark:bg-[#0a0e19] sm:flex items-center justify-between gap-[15px] rounded-md text-center"
          >
            <div class="mt-[15px] first:mt-0 sm:mt-0">
              <span class="block text-xs"> Price: </span>
              <span class="block font-semibold text-primary-800">
                5.50 ETH
              </span>
            </div>
            <div class="mt-[15px] first:mt-0 sm:mt-0">
              <span class="block text-xs"> Highest Bid: </span>
              <span
                class="block font-semibold text-gray-900 dark:text-gray-400"
              >
                4.95 ETH
              </span>
            </div>
            <div class="mt-[15px] first:mt-0 sm:mt-0">
              <span class="block text-xs"> Stock: </span>
              <span
                class="block font-semibold text-gray-900 dark:text-gray-400"
              >
                130/450
              </span>
            </div>
            <div class="mt-[15px] first:mt-0 sm:mt-0">
              <span class="block text-xs"> Auction End In: </span>
              <CountdownTimer endDate="December 14, 2026 21:14:01" />
            </div>
          </div>
          <h3 class="!text-lg mt-[20px] md:mt-[45px] !mb-[12px]">
            Description
          </h3>
          <p class="leading-[1.7]">
            This NFT captures the essence of boundless potential, symbolized by
            a surreal landscape where the sky meets the earth in a dazzling
            fusion of colors. The intricate design features flowing lines that
            blend together, representing the limitless paths we can take in
            life.
          </p>
          <h3 class="!text-lg mt-[20px] md:mt-[45px] !mb-[20px]">
            Product Description
          </h3>
          <div class="trezo-tabs" id="trezo-tabs">
            <ul class="nfts-navs mb-[20px]">
              <li
                class="nav-item inline-block ltr:mr-[15px] rtl:ml-[15px] ltr:md:mr-[35px] rtl:md:ml-[35px]"
              >
                <button
                  type="button"
                  :class="['tab', { active: activeTab === 'placeBids' }]"
                  @click="setActiveTab('placeBids')"
                  class="nav-link block transition-all relative uppercase md:tracking-[2px] text-xs font-semibold"
                >
                  Place Bids
                </button>
              </li>
              <li
                class="nav-item inline-block ltr:mr-[15px] rtl:ml-[15px] ltr:md:mr-[35px] rtl:md:ml-[35px]"
              >
                <button
                  type="button"
                  :class="[
                    'tab',
                    { active: activeTab === 'additionalInformation' },
                  ]"
                  @click="setActiveTab('additionalInformation')"
                  class="nav-link block transition-all relative uppercase md:tracking-[2px] text-xs font-semibold"
                >
                  Additional Information
                </button>
              </li>
              <li
                class="nav-item inline-block ltr:mr-[15px] rtl:ml-[15px] ltr:md:mr-[35px] rtl:md:ml-[35px]"
              >
                <button
                  type="button"
                  :class="['tab', { active: activeTab === 'details' }]"
                  @click="setActiveTab('details')"
                  class="nav-link block transition-all relative uppercase md:tracking-[2px] text-xs font-semibold"
                >
                  Details
                </button>
              </li>
            </ul>

            <div class="tab-content">
              <div class="tab-pane active" v-show="activeTab === 'placeBids'">
                <div class="table-responsive overflow-x-auto">
                  <table class="w-full">
                    <tbody class="text-black dark:text-white">
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <div class="flex items-center gap-[10px]">
                            <div class="rounded-full w-[50px]">
                              <img
                                src="@/assets/images/nfts/auction1.gif"
                                class="inline-block rounded-[6px]"
                                alt="auction-image"
                              />
                            </div>
                            <div>
                              <span class="font-semibold inline-block mb-px">
                                Christmas Eve
                              </span>
                              <span
                                class="block text-gray-500 dark:text-gray-400 text-xs"
                              >
                                by John Lira
                              </span>
                            </div>
                          </div>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            11.75 ETH
                          </span>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            10.00 ETH
                          </span>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            30 mins ago
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <div class="flex items-center gap-[10px]">
                            <div class="rounded-full w-[50px]">
                              <img
                                src="@/assets/images/nfts/auction2.gif"
                                class="inline-block rounded-[6px]"
                                alt="auction-image"
                              />
                            </div>
                            <div>
                              <span class="font-semibold inline-block mb-px">
                                Rotating Flower
                              </span>
                              <span
                                class="block text-gray-500 dark:text-gray-400 text-xs"
                              >
                                by WalterW.
                              </span>
                            </div>
                          </div>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            9.25 ETH
                          </span>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            6.10 ETH
                          </span>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            1 hr ago
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <div class="flex items-center gap-[10px]">
                            <div class="rounded-full w-[50px]">
                              <img
                                src="@/assets/images/nfts/auction3.jpg"
                                class="inline-block rounded-[6px]"
                                alt="auction-image"
                              />
                            </div>
                            <div>
                              <span class="font-semibold inline-block mb-px">
                                Windows Art
                              </span>
                              <span
                                class="block text-gray-500 dark:text-gray-400 text-xs"
                              >
                                by Christino
                              </span>
                            </div>
                          </div>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            17.24 ETH
                          </span>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            11.75 ETH
                          </span>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            1.30 hr ago
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <div class="flex items-center gap-[10px]">
                            <div class="rounded-full w-[50px]">
                              <img
                                src="@/assets/images/nfts/auction4.jpg"
                                class="inline-block rounded-[6px]"
                                alt="auction-image"
                              />
                            </div>
                            <div>
                              <span class="font-semibold inline-block mb-px">
                                3D Logo
                              </span>
                              <span
                                class="block text-gray-500 dark:text-gray-400 text-xs"
                              >
                                by Hater
                              </span>
                            </div>
                          </div>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            12.12 ETH
                          </span>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            10.24 ETH
                          </span>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            35 mins ago
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <div class="flex items-center gap-[10px]">
                            <div class="rounded-full w-[50px]">
                              <img
                                src="@/assets/images/nfts/auction5.jpg"
                                class="inline-block rounded-[6px]"
                                alt="auction-image"
                              />
                            </div>
                            <div>
                              <span class="font-semibold inline-block mb-px">
                                Awesome Bird
                              </span>
                              <span
                                class="block text-gray-500 dark:text-gray-400 text-xs"
                              >
                                by Liveslong
                              </span>
                            </div>
                          </div>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            8.15 ETH
                          </span>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            7.15 ETH
                          </span>
                        </td>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                        >
                          <span
                            class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                          >
                            2 hrs ago
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="tab-pane"
                v-show="activeTab === 'additionalInformation'"
              >
                <ul class="text-sm">
                  <li
                    class="py-[11px] px-[20px] border-b border-l border-r border-primary-50 dark:border-[#172036] first:border-t"
                  >
                    <span class="text-black dark:text-white"> Brand: </span>
                    Apple
                  </li>
                  <li
                    class="py-[11px] px-[20px] border-b border-l border-r border-primary-50 dark:border-[#172036] first:border-t"
                  >
                    <span class="text-black dark:text-white"> Model: </span>
                    MacBook Pro
                  </li>
                  <li
                    class="py-[11px] px-[20px] border-b border-l border-r border-primary-50 dark:border-[#172036] first:border-t"
                  >
                    <span class="text-black dark:text-white"> Price: </span>
                    $2499
                  </li>
                  <li
                    class="py-[11px] px-[20px] border-b border-l border-r border-primary-50 dark:border-[#172036] first:border-t"
                  >
                    <span class="text-black dark:text-white">
                      Dimensions (mm):
                    </span>
                    304.10 x 212.40 x 14.90
                  </li>
                  <li
                    class="py-[11px] px-[20px] border-b border-l border-r border-primary-50 dark:border-[#172036] first:border-t"
                  >
                    <span class="text-black dark:text-white">
                      Weight (kg):
                    </span>
                    1.37
                  </li>
                  <li
                    class="py-[11px] px-[20px] border-b border-l border-r border-primary-50 dark:border-[#172036] first:border-t"
                  >
                    <span class="text-black dark:text-white"> Colors: </span>
                    Space Grey
                  </li>
                  <li
                    class="py-[11px] px-[20px] border-b border-l border-r border-primary-50 dark:border-[#172036] first:border-t"
                  >
                    <span class="text-black dark:text-white">
                      Operating system:
                    </span>
                    macOS
                  </li>
                  <li
                    class="py-[11px] px-[20px] border-b border-l border-r border-primary-50 dark:border-[#172036] first:border-t"
                  >
                    <span class="text-black dark:text-white">
                      Battery Life (up to hours):
                    </span>
                    10
                  </li>
                </ul>
              </div>
              <div class="tab-pane" v-show="activeTab === 'details'">
                <div
                  class="border border-primary-50 dark:border-[#172036] rounded-md p-[15px] md:p-[20px]"
                >
                  <p class="text-sm">
                    The Apple MacBook Pro 16.2 is a cutting-edge laptop designed
                    to deliver exceptional performance and advanced features for
                    professionals and creative enthusiasts. With its sleek
                    aluminum body and precision engineering, this MacBook Pro
                    represents the pinnacle of Apple's laptop technology.
                  </p>
                  <p class="text-sm">
                    Stay connected with a variety of ports, including
                    Thunderbolt 3, USB-C, and audio jacks. These versatile ports
                    support high-speed data transfer and external device
                    connections. Enjoy a rich audio experience with
                    high-fidelity speakers that deliver clear and immersive
                    sound. Perfect for content creators and multimedia
                    enthusiasts.
                  </p>
                  <p class="text-sm">
                    Equipped with the latest processors, ample RAM, and
                    high-performance graphics, the MacBook Pro 16.2 ensures
                    smooth multitasking, fast rendering, and efficient handling
                    of resource-intensive tasks. Seamlessly integrate with the
                    macOS ecosystem, benefiting from features like iCloud, Siri,
                    and a vast selection of applications available on the App
                    Store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CountdownTimer from "./CountdownTimer.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";

import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default defineComponent({
  name: "NFTDetails",
  components: {
    CountdownTimer,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const activeTab = ref("placeBids");
    const thumbsSwiper = ref<SwiperClass | null>(null);

    const setThumbsSwiper = (swiper: SwiperClass) => {
      thumbsSwiper.value = swiper;
    };

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Thumbs],
    };
  },
});
</script>
