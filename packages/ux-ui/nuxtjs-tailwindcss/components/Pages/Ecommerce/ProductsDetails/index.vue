<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <div class="2xl:col-span-1">
      <div class="trezo-card">
        <div class="trezo-card-content" id="dishDetailsImageSlides">
          <Swiper
            :spaceBetween="10"
            :loop="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2"
          >
            <SwiperSlide v-for="(image, index) in dish.images" :key="index">
              <div class="bg-white dark:bg-[#0c1427] p-[13px]">
                <img
                  class="rounded-md cursor-pointer w-full"
                  :src="image"
                  :alt="`${dish.name}-image-${index}`"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="25"
            :slidesPerView="4"
            :loop="true"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper mt-[15px]"
          >
            <SwiperSlide
              v-for="(image, index) in dish.images"
              :key="index"
              class="cursor-poiner"
            >
              <img
                class="rounded-md cursor-pointer"
                :src="image"
                :alt="`${dish.name}-thumbnail-${index}`"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <!-- Details Section -->
    <div class="2xl:col-span-2">
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md lg:h-full"
      >
        <div class="trezo-card-content">
          <div class="flex items-center justify-between">
            <div>
              <span class="block text-xs">Code: {{ dish.code }}</span>
              <h2 class="!text-lg md:!text-xl !my-[8.5px]">{{ dish.name }}</h2>
              <span class="block font-semibold text-danger-600 md:text-md">
                ${{ dish.price.toFixed(2) }} USD
              </span>
            </div>
            <div class="flex items-center justify-end leading-none gap-[2px]">
              <i
                v-for="star in 5"
                :key="star"
                :class="[
                  'ri-star-fill',
                  star <= Math.round(dish.rating)
                    ? 'text-orange-500'
                    : 'text-gray-300',
                ]"
              ></i>
              <span
                class="block relative top-px text-xs text-gray-500 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
              >
                {{ dish.rating.toFixed(1) }}
              </span>
            </div>
          </div>

          <div
            class="h-[1px] bg-gray-100 dark:bg-[#172036] my-[20px] md:my-[25px]"
          ></div>

          <h4 class="!font-semibold !text-lg !mb-[12px]">
            Ingredients Details
          </h4>
          <p>{{ dish.ingredients }}</p>

          <div class="mb-[20px] md:mb-[25px]"></div>

          <h4 class="!font-semibold !text-lg !mb-[15px]">Nutrition Values</h4>
          <ul class="mb-[20px] md:mb-[25px] grid grid-cols-1 sm:grid-cols-2">
            <li
              v-for="(value, key) in dish.nutrition"
              :key="key"
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block capitalize">{{ key }}</span>
              <span class="block">
                <span class="text-black dark:text-white">{{ value }}</span>
                {{ key === "calories" ? "Kcal" : "gm" }}
              </span>
            </li>
          </ul>

          <h4 class="!font-semibold !text-lg flex items-center justify-between">
            Orders In Queue
            <span>{{ dish.ordersInQueue }}</span>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";

import image1 from "@/assets/images/restaurant/dish-details1.jpg";
import image2 from "@/assets/images/restaurant/dish-details2.jpg";
import image3 from "@/assets/images/restaurant/dish-details3.jpg";
import image4 from "@/assets/images/restaurant/dish-details4.jpg";

export default defineComponent({
  name: "DishDetails",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref<SwiperClass | null>(null);
    const internalValue = ref(1);

    const dish = ref({
      id: 1,
      code: "3479",
      name: "Beef Cheesy Burger",
      price: 11.5,
      rating: 5.0,
      images: [image1, image2, image3, image4],
      ingredients:
        "Spaghetti, shredded chicken, buffalo sauce, ranch dressing, mozzarella.",
      nutrition: {
        calories: 1200,
        carbs: 120,
        protein: 120,
        fibres: 400,
        fat: 890,
        vitamins: 350,
        sugar: 30,
        minerals: 5,
      },
      ordersInQueue: 17,
    });

    const setThumbsSwiper = (swiper: SwiperClass) => {
      thumbsSwiper.value = swiper;
    };

    const increment = () => {
      internalValue.value++;
    };

    const decrement = () => {
      if (internalValue.value > 0) {
        internalValue.value--;
      }
    };

    return {
      dish,
      internalValue,
      increment,
      decrement,
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Thumbs],
    };
  },
});
</script>
