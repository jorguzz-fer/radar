<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <div class="2xl:col-span-1">
      <div class="trezo-card">
        <div class="trezo-card-content" id="dishDetailsImageSlides">
          <Swiper
            :spaceBetween="10"
            :loop="false"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2"
          >
            <SwiperSlide>
              <div class="bg-white dark:bg-[#0c1427] p-[13px]">
                <img
                  class="rounded-md cursor-pointer w-full"
                  src="@/assets/images/restaurant/dish-details1.jpg"
                  alt="dish-details-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-white dark:bg-[#0c1427] p-[13px]">
                <img
                  class="rounded-md cursor-pointer w-full"
                  src="@/assets/images/restaurant/dish-details2.jpg"
                  alt="dish-details-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-white dark:bg-[#0c1427] p-[13px]">
                <img
                  class="rounded-md cursor-pointer w-full"
                  src="@/assets/images/restaurant/dish-details3.jpg"
                  alt="dish-details-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-white dark:bg-[#0c1427] p-[13px]">
                <img
                  class="rounded-md cursor-pointer w-full"
                  src="@/assets/images/restaurant/dish-details4.jpg"
                  alt="dish-details-image"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="15"
            :slidesPerView="4"
            :loop="false"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper mt-[15px]"
          >
            <SwiperSlide class="cursor-poiner">
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/restaurant/dish-details1.jpg"
                alt="dish-details-image"
              />
            </SwiperSlide>
            <SwiperSlide class="cursor-poiner">
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/restaurant/dish-details2.jpg"
                alt="dish-details-image"
              />
            </SwiperSlide>
            <SwiperSlide class="cursor-poiner">
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/restaurant/dish-details3.jpg"
                alt="dish-details-image"
              />
            </SwiperSlide>
            <SwiperSlide class="cursor-poiner">
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/restaurant/dish-details4.jpg"
                alt="dish-details-image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <div class="2xl:col-span-2">
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md lg:h-full"
      >
        <div class="trezo-card-content">
          <div class="flex items-center justify-between">
            <div>
              <span class="block text-xs"> Code: 3479 </span>
              <h2 class="!text-lg md:!text-xl !my-[8.5px]">
                Beef Cheesy Burger
              </h2>
              <span class="block font-semibold text-danger-600 md:text-md">
                $11.50 USD
              </span>
            </div>
            <div class="flex items-center justify-end leading-none gap-[2px]">
              <i class="ri-star-fill text-orange-500"></i>
              <i class="ri-star-fill text-orange-500"></i>
              <i class="ri-star-fill text-orange-500"></i>
              <i class="ri-star-fill text-orange-500"></i>
              <i class="ri-star-fill text-orange-500"></i>
              <span
                class="block relative top-px text-xs text-gray-500 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
              >
                5.0
              </span>
            </div>
          </div>
          <div
            class="h-[1px] bg-gray-100 dark:bg-[#172036] my-[20px] md:my-[25px]"
          ></div>
          <h4 class="!font-semibold !text-lg !mb-[12px]">
            Ingredients Details
          </h4>
          <p>
            Spaghetti, shredded chicken, buffalo sauce, ranch dressing,
            mozzarella.
          </p>
          <div class="mb-[20px] md:mb-[25px]"></div>
          <h4 class="!font-semibold !text-lg !mb-[15px]">Nutrition Values</h4>
          <ul class="mb-[20px] md:mb-[25px] grid grid-cols-1 sm:grid-cols-2">
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Calories </span>
              <span class="block">
                <span class="text-black dark:text-white">1200</span> Kcal
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Carbs </span>
              <span class="block">
                <span class="text-black dark:text-white">120</span> gm
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Protein </span>
              <span class="block">
                <span class="text-black dark:text-white">120</span> gm
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Fibres </span>
              <span class="block">
                <span class="text-black dark:text-white">400</span> gm
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Fat </span>
              <span class="block">
                <span class="text-black dark:text-white">890</span> gm
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Vitamins </span>
              <span class="block">
                <span class="text-black dark:text-white">350</span> gm
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Sugar </span>
              <span class="block">
                <span class="text-black dark:text-white">30</span> gm
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Minerals </span>
              <span class="block">
                <span class="text-black dark:text-white">5</span> gm
              </span>
            </li>
          </ul>

          <h4 class="!font-semibold !text-lg flex items-center justify-between">
            Orders In Queue
            <span>17</span>
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

export default defineComponent({
  name: "DishDetails",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref<SwiperClass | null>(null);
    const internalValue = ref(1);

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
