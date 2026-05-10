<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Top Collections</h5>
      </div>
    </div>
    <div
      class="trezo-card-content relative md:border-t md:border-b border-primary-50 dark:border-[#172036] md:py-[20px] md:py-[25px]"
      id="topCollectionsSlides"
    >
      <Swiper
        :slidesPerView="1"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
          el: '.swiper-pagination',
        }"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide v-for="nft in nftItem" :key="nft.id">
          <div class="flex items-center gap-[12px] mb-[22px]">
            <div class="relative ltr:pr-[7px] rtl:pl-[7px]">
              <img
                :src="nft.creator.image"
                class="rounded-full w-[50px]"
                alt="author-image"
              />
              <img
                src="@/assets/images/nfts/verified.svg"
                class="absolute ltr:right-0 rtl:left-0 bottom-0"
                alt="verified"
              />
            </div>
            <div>
              <span
                class="font-semibold text-black dark:text-white inline-block mb-[3px]"
              >
                {{ nft.creator.name }}
              </span>
              <span class="block text-gray-500 dark:text-gray-400 text-xs">
                {{ nft.creator.items }} Items
              </span>
            </div>
          </div>
          <div class="flex items-center gap-[15px]">
            <div class="w-[100px] md:w-[120px] rounded-md shrink">
              <img
                :src="nft.image"
                alt="top-collection-image"
                class="rounded-md"
              />
            </div>
            <div class="grow-0">
              <div
                class="font-semibold text-black dark:text-white text-md md:text-lg mb-[4px]"
              >
                {{ nft.title }}
              </div>
              <span class="block text-sm">
                {{ nft.subTitle }}
              </span>
            </div>
          </div>
          <NuxtLink
            to="/nft-marketplace/nft-details"
            class="inline-block font-medium rounded-md mt-[22px] px-[13px] py-[6px] text-primary-500 border border-primary-500 transition-all hover:bg-primary-500 hover:text-white"
          >
            <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
              <i
                class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
              >
                add
              </i>
              View Details
            </span>
          </NuxtLink>
        </SwiperSlide>
        <div class="swiper-pagination"></div>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import image from "@/assets/images/nfts/top-collection.gif";
import creatorImage from "@/assets/images/nfts/author.gif";

export default defineComponent({
  name: "TopCollections",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const nftItem = ref([
      {
        id: 1,
        image: image,
        creator: {
          image: creatorImage,
          name: "Christmas Eve",
          items: "3250",
        },
        title: "Man Walking",
        subTitle: "@queensland",
      },
      {
        id: 2,
        image: image,
        creator: {
          image: creatorImage,
          name: "Christmas Eve",
          items: "3250",
        },
        title: "Man Walking",
        subTitle: "@queensland",
      },
      {
        id: 3,
        image: image,
        creator: {
          image: creatorImage,
          name: "Christmas Eve",
          items: "3250",
        },
        title: "Man Walking",
        subTitle: "@queensland",
      },
    ]);
    return {
      modules: [Autoplay, Pagination],
      nftItem,
    };
  },
});
</script>
