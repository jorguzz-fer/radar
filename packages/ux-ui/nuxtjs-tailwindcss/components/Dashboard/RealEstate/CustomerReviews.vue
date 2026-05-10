<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title">
        <h5 class="!mb-0">Customer Reviews</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            class="trezo-card-dropdown-btn inline-block transition-all text-[26px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <i class="ri-more-fill"></i>
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
    <div class="trezo-card-content" id="customerReviewsSlides">
      <Swiper
        :spaceBetween="20"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: false,
        }"
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :breakpoints="{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 1,
          },
          1440: {
            slidesPerView: 2,
          },
        }"
        :modules="modules"
        class="mySwiper2"
      >
        <SwiperSlide
          v-for="property in propertys"
          :key="property.id"
          class="bg-gray-50 dark:bg-[#0a0e19] rounded-md py-[20px] md:py-[25px] px-[20px]"
        >
          <div
            class="sm:flex items-center justify-between mb-[10px] sm:mb-[12px]"
          >
            <div class="flex items-center gap-[12px]">
              <img
                :src="property.image"
                class="w-[45px] rounded-full"
                :alt="`${property.name}-image`"
              />
              <div>
                <span
                  class="block sm:text-[15px] text-black dark:text-white font-semibold"
                >
                  {{ property.name }}
                </span>
                <span class="block text-gray-500 dark:text-gray-400">
                  {{ property.time }}
                </span>
              </div>
            </div>
            <div class="flex items-center gap-[3px] mt-[15px] sm:mt-0">
              <i
                v-for="star in 5"
                :key="star"
                :class="{
                  'ri-star-fill text-orange-500':
                    star <= Math.floor(property.rating),
                  'ri-star-half-fill text-orange-500':
                    star === Math.ceil(property.rating) &&
                    !Number.isInteger(property.rating),
                  'ri-star-line text-orange-500': star > property.rating,
                }"
              ></i>
            </div>
          </div>
          <p class="md:max-w-[365px] text-gray-700 dark:text-gray-300">
            {{ property.desc }}
          </p>
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
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/users/user1.jpg";
import image2 from "@/assets/images/users/user2.jpg";
import image3 from "@/assets/images/users/user3.jpg";

export default defineComponent({
  name: "CustomerReviews",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const propertys = ref([
      {
        id: 1,
        image: image1,
        name: "Jose Grafton",
        time: "22m ago",
        rating: 4.0,
        desc: "Impressed with the timely responses and professional approach. Highly recommend for anyone seeking real estate solutions!",
      },
      {
        id: 2,
        image: image2,
        name: "Amanda Lee",
        time: "1h ago",
        rating: 5.0,
        desc: "Great service! Found exactly what I needed for my property, and the process was smooth and hassle-free.",
      },
      {
        id: 3,
        image: image3,
        name: "Michael Smith",
        time: "3h ago",
        rating: 4.0,
        desc: "The entire process was seamless, and I couldn't be happier with the results. Excellent customer service throughout!",
      },
    ]);

    return {
      modules: [Autoplay, Pagination],
      propertys,
      isActive,
      toggleActive,
    };
  },
});
</script>
