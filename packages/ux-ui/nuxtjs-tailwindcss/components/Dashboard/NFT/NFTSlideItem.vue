<template>
  <Swiper
    :spaceBetween="15"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :navigation="{
      prevEl: '.nft-swiper-button-prev',
      nextEl: '.nft-swiper-button-next',
    }"
    :breakpoints="{
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    }"
    :modules="modules"
    class="mySwiper3"
  >
    <SwiperSlide v-for="nft in nftItem" :key="nft.id">
      <div class="bg-white dark:bg-[#0c1427] p-[10px] rounded-md">
        <div
          class="h-[270px] rounded-md bg-center bg-cover bg-no-repeat mb-[12px]"
          :style="{ backgroundImage: `url(${nft.image})` }"
        ></div>
        <div
          class="flex items-center justify-between border-b border-primary-50 dark:border-[#172036] pb-[10px] mb-[14px]"
        >
          <div class="flex items-center gap-[6px]">
            <img
              :src="nft.creator.image"
              class="rounded-full w-[27px]"
              alt="author-image"
            />
            <div>
              <span class="block text-xs"> NFT ID: {{ nft.creator.id }} </span>
              <NuxtLink
                to="/nft-marketplace/nft-details"
                class="block font-semibold text-gray-900 dark:text-gray-400 transition-all hover:text-primary-500"
              >
                {{ nft.creator.name }}
              </NuxtLink>
            </div>
          </div>
          <img src="@/assets/images/nfts/verified2.svg" alt="verified" />
        </div>
        <span class="block text-xs mb-[4px]">
          Highest Bid:
          <span
            class="font-semibold text-gray-900 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
          >
            {{ nft.highestBid }} ETH
          </span>
        </span>
        <div class="flex items-center justify-between pb-[5px]">
          <span class="block font-semibold text-primary-800">
            {{ nft.bid }} ETH
          </span>
          <span
            class="block relative text-xs font-semibold ltr:pl-[22px] rtl:pr-[22px]"
          >
            <i
              class="ri-heart-fill text-orange-600 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
            ></i>
            <span class="text-gray-900 dark:text-gray-400">
              {{ nft.rating }}/
            </span>
            10
          </span>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

import image1 from "@/assets/images/nfts/nft1.gif";
import image2 from "@/assets/images/nfts/nft2.jpg";
import image3 from "@/assets/images/nfts/nft3.gif";
import image4 from "@/assets/images/nfts/nft4.gif";
import creatorImage from "@/assets/images/nfts/author.gif";

export default defineComponent({
  name: "NFTSlideItem",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const nftItem = ref([
      {
        id: 1,
        image: image1,
        creator: {
          image: creatorImage,
          id: "35246",
          name: "Christmas Eve",
        },
        highestBid: "9.75",
        bid: "5.50",
        rating: "9.2",
      },
      {
        id: 2,
        image: image2,
        creator: {
          image: creatorImage,
          id: "35247",
          name: "Rotating Panda",
        },
        highestBid: "10.75",
        bid: "12.50",
        rating: "9.5",
      },
      {
        id: 3,
        image: image3,
        creator: {
          image: creatorImage,
          id: "35249",
          name: "Cookies Live",
        },
        highestBid: "17.75",
        bid: "20.50",
        rating: "9.3",
      },
      {
        id: 4,
        image: image4,
        creator: {
          image: creatorImage,
          id: "35248",
          name: "World Savior",
        },
        highestBid: "9.75",
        bid: "10.50",
        rating: "9.7",
      },
      {
        id: 5,
        image: image1,
        creator: {
          image: creatorImage,
          id: "35246",
          name: "Christmas Eve",
        },
        highestBid: "9.75",
        bid: "5.50",
        rating: "9.2",
      },
      {
        id: 6,
        image: image2,
        creator: {
          image: creatorImage,
          id: "35247",
          name: "Rotating Panda",
        },
        highestBid: "10.75",
        bid: "12.50",
        rating: "9.5",
      },
      {
        id: 7,
        image: image3,
        creator: {
          image: creatorImage,
          id: "35249",
          name: "Cookies Live",
        },
        highestBid: "17.75",
        bid: "20.50",
        rating: "9.3",
      },
      {
        id: 8,
        image: image4,
        creator: {
          image: creatorImage,
          id: "35248",
          name: "World Savior",
        },
        highestBid: "9.75",
        bid: "10.50",
        rating: "9.7",
      },
    ]);
    return {
      modules: [Autoplay, Navigation],
      nftItem,
    };
  },
});
</script>
