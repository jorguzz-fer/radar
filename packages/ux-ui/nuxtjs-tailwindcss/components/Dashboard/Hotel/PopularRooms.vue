<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Popular Rooms</h5>
      </div>
    </div>

    <div class="trezo-card-content relative" id="popularRoomsSlides">
      <Swiper
        :spaceBetween="20"
        :loop="popularRooms.length >= 5"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }"
        :breakpoints="{
          640: {
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 25,
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide v-for="(room, index) in popularRooms" :key="index">
          <div class="relative">
            <a href="#" class="block rounded-md">
              <img
                :src="room.image"
                :alt="'room-image-' + index"
                class="rounded-md"
              />
            </a>
            <span
              :class="[
                'inline-block text-xs font-medium px-[9px] rounded-[100px] absolute top-[10px] ltr:right-[10px] rtl:left-[10px]',
                room.status === 'available'
                  ? 'text-success-700 border border-success-500 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c]'
                  : 'text-danger-700 border border-danger-400 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c]',
              ]"
            >
              {{ room.status === "available" ? "Available" : "Booked" }}
            </span>
            <h6 class="!font-semibold mt-[15px] !mb-[5px] !text-md">
              <a
                href="#"
                class="text-black dark:text-white hover:text-primary-500 transition-all"
              >
                {{ room.name }}
              </a>
            </h6>
            <span class="block">
              Code <strong class="font-semibold">{{ room.code }}</strong>
            </span>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import image1 from "@/assets/images/rooms/room6.jpg";
import image2 from "@/assets/images/rooms/room7.jpg";
import image3 from "@/assets/images/rooms/room8.jpg";
import image4 from "@/assets/images/rooms/room9.jpg";

interface Room {
  id: number;
  name: string;
  code: string;
  image: string;
  status: "available" | "booked";
}

export default defineComponent({
  name: "PopularRooms",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const popularRooms = ref<Room[]>([]);

    const fetchPopularRooms = () => {
      return new Promise<Room[]>((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              name: "The Velvet - F - 32045",
              code: "SJ-32056",
              image: image1,
              status: "booked",
            },
            {
              id: 2,
              name: "Deluxe Room - G - 3215",
              code: "SJ-56721",
              image: image2,
              status: "available",
            },
            {
              id: 3,
              name: "The Garden Suite 101",
              code: "SJ-54214",
              image: image3,
              status: "booked",
            },
            {
              id: 4,
              name: "The Tranquil S-02",
              code: "SJ-45672",
              image: image4,
              status: "available",
            },
            {
              id: 5,
              name: "Ocean View Suite",
              code: "SJ-78901",
              image: image1,
              status: "available",
            },
          ]);
        }, 500);
      });
    };

    const refreshRooms = async () => {
      popularRooms.value = await fetchPopularRooms();
    };

    // Initialize rooms
    onMounted(async () => {
      await refreshRooms();
    });

    return {
      modules: [Autoplay, Pagination],
      popularRooms,
      refreshRooms,
    };
  },
});
</script>
