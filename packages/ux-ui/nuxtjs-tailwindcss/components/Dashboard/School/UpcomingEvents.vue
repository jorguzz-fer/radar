<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[15px] flex items-center justify-between">
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Upcoming Events</h5>
      </div>
    </div>

    <div class="trezo-card-content relative" id="schoolUpcomingEventsSlides">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="25"
        :loop="false"
        :centeredSlides="false"
        :preventClicks="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide
          class="bg-gray-50 dark:bg-[#0a0e19] p-[12px] rounded-md"
          v-for="item in items"
          :key="item.id"
        >
          <div class="flex items-center justify-between">
            <a
              href="#"
              class="block font-medium text-md text-black dark:text-white transition-all hover:text-primary-500"
            >
              {{ item.title }}
            </a>
            <span class="block">
              {{ item.date }}
            </span>
          </div>
          <ul class="mt-[10px]">
            <li
              class="inline-block relative ltr:pl-[22px] rtl:pr-[22px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <i
                class="ri-time-line absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg mt-px"
              ></i>
              {{ item.time }}
            </li>
            <li
              class="inline-block relative ltr:pl-[22px] rtl:pr-[22px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <i
                class="ri-map-pin-line absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-lg"
              ></i>
              {{ item.location }}
            </li>
          </ul>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

export default defineComponent({
  name: "UpcomingEvents",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Science Fair",
          date: "November 25, 2025",
          time: "9:00 AM - 3:00 PM",
          location: "Auditorium",
        },
        {
          id: 2,
          title: "Science Fair",
          date: "November 28, 2025",
          time: "9:00 AM - 3:00 PM",
          location: "California",
        },
        {
          id: 3,
          title: "Science Fair",
          date: "November 25, 2025",
          time: "9:00 AM - 3:00 PM",
          location: "Auditorium",
        },
        {
          id: 4,
          title: "Science Fair",
          date: "November 28, 2025",
          time: "9:00 AM - 3:00 PM",
          location: "California",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
});
</script>
