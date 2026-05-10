<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <div class="xl:col-span-1">
      <div class="trezo-card">
        <div class="trezo-card-content" id="roomDetailsImageSlides">
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
                  class="rounded-md"
                  src="@/assets/images/rooms/room-details1.jpg"
                  alt="room-details-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-white dark:bg-[#0c1427] p-[13px]">
                <img
                  class="rounded-md"
                  src="@/assets/images/rooms/room-details2.jpg"
                  alt="room-details-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-white dark:bg-[#0c1427] p-[13px]">
                <img
                  class="rounded-md"
                  src="@/assets/images/rooms/room-details3.jpg"
                  alt="room-details-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bg-white dark:bg-[#0c1427] p-[13px]">
                <img
                  class="rounded-md"
                  src="@/assets/images/rooms/room-details4.jpg"
                  alt="room-details-image"
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
                src="@/assets/images/rooms/room-details1.jpg"
                alt="room-details-image"
              />
            </SwiperSlide>
            <SwiperSlide class="cursor-poiner">
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/rooms/room-details2.jpg"
                alt="room-details-image"
              />
            </SwiperSlide>
            <SwiperSlide class="cursor-poiner">
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/rooms/room-details3.jpg"
                alt="room-details-image"
              />
            </SwiperSlide>
            <SwiperSlide class="cursor-poiner">
              <img
                class="rounded-md cursor-pointer"
                src="@/assets/images/rooms/room-details4.jpg"
                alt="room-details-image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <div class="xl:col-span-2">
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md lg:h-full"
      >
        <div class="trezo-card-content">
          <div class="sm:flex items-center gap-[15px]">
            <img
              src="@/assets/images/users/user80.jpg"
              alt="user-image"
              class="rounded-full w-[85px]"
            />
            <div class="mt-[15px] sm:mt-0">
              <span class="block text-xs"> Code: TRZ-32 </span>
              <h3 class="!text-[20px] md:!text-xl !mb-0 mt-[5px]">
                Serenity Suite
              </h3>
              <ul>
                <li
                  class="inline-block relative mt-[10px] ltr:mr-[17px] rtl:ml-[17px] ltr:pl-[25px] rtl:pr-[25px] ltr:last:mr-0 rtl:last:ml-0"
                >
                  <i
                    class="ri-phone-fill absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-orange-500 text-lg"
                  ></i>
                  +321 1245 6457
                </li>
                <li
                  class="inline-block relative mt-[10px] ltr:mr-[17px] rtl:ml-[17px] ltr:pl-[25px] rtl:pr-[25px] ltr:last:mr-0 rtl:last:ml-0"
                >
                  <i
                    class="ri-mail-line absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-orange-500 text-lg"
                  ></i>
                  anderson350@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div
            class="h-[1px] bg-gray-100 dark:bg-[#172036] my-[20px] md:my-[25px]"
          ></div>
          <div class="sm:flex gap-[40px]">
            <div
              class="flex items-center gap-[10px] mb-[15px] last:mb-0 sm:mb-0"
            >
              <img src="@/assets/images/icons/schedule.svg" alt="schedule" />
              <div>
                <span class="text-xs block mb-px"> Check In </span>
                <span class="block font-semibold text-black dark:text-white">
                  23 June 2025, 15:12 AM
                </span>
              </div>
            </div>
            <div
              class="flex items-center gap-[10px] mb-[15px] last:mb-0 sm:mb-0"
            >
              <img src="@/assets/images/icons/schedule.svg" alt="schedule" />
              <div>
                <span class="text-xs block mb-px"> Check Out </span>
                <span class="block font-semibold text-black dark:text-white">
                  25 June 2025, 14:20 PM
                </span>
              </div>
            </div>
          </div>
          <div
            class="h-[1px] bg-gray-100 dark:bg-[#172036] my-[20px] md:my-[25px]"
          ></div>
          <h4 class="!text-lg !mb-[13px]">Room Info</h4>
          <ul class="mb-[20px] md:mb-[25px] grid grid-cols-1 sm:grid-cols-2">
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Room Code </span>
              <span class="block">
                <span class="text-black dark:text-white">L1-15</span>
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Bathroom </span>
              <span class="block">
                <span class="text-black dark:text-white">2</span>
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Room Name </span>
              <span class="block">
                <span class="text-black dark:text-white">Moonlight</span>
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Air Conditioner </span>
              <span class="block">
                <span class="text-black dark:text-white">Yes</span>
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Rate </span>
              <span class="block">
                <span class="text-black dark:text-white">$156</span>/night
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Free WiFi </span>
              <span class="block">
                <span class="text-black dark:text-white">Yes</span>
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Bed </span>
              <span class="block">
                <span class="text-black dark:text-white">2</span>
              </span>
            </li>
            <li
              class="flex items-center justify-between py-[10px] px-[20px] border border-gray-100 dark:border-[#15203c]"
            >
              <span class="block"> Heater </span>
              <span class="block">
                <span class="text-black dark:text-white">No</span>
              </span>
            </li>
          </ul>
          <h4 class="!text-lg !mb-[13px]">Description</h4>
          <p>
            This room captures the essence of boundless potential, symbolized by
            a surreal landscape where the sky meets the earth in a dazzling
            fusion of colors. The intricate design features flowing lines that
            blend together, representing the limitless paths we can take in
            life.
          </p>
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
  name: "RoomDetails",
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
