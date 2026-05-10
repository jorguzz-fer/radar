<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Working Schedule</h5>
      </div>
    </div>
    <div class="trezo-card-content relative">
      <CalendarContent />

      <div class="mt-[19px] relative" id="upcomingEventsSlides">
        <span class="block mb-[14px] font-medium"> Upcoming Events: </span>
        <Swiper
          :slidesPerView="1"
          :loop="true"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <SwiperSlide class="cursor" v-for="item in items" :key="item.id">
            <div class="relative ltr:pl-[14px] rtl:pr-[14px]">
              <div
                class="absolute ltr:left-0 rtl:right-0 top-[4px] w-[7px] h-[7px] rounded-sm bg-primary-500"
              ></div>
              <h6 class="!text-sm !mb-[5px] !font-semibold">
                Pythons Unleashed: {{ item.title }}
              </h6>
              <span class="text-xs">
                <span class="text-primary-500">
                  {{ item.date }}
                </span>
                - {{ item.startTime }} - {{ item.endTime }}
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import CalendarContent from "@/components/Common/CalendarContent.vue";

export default defineComponent({
  name: "WorkingSchedule",
  components: {
    CalendarContent,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "A Development Expedition",
          date: "June 25, 2025",
          startTime: "12.00 PM",
          endTime: "6.00 PM",
        },
        {
          id: 2,
          title: "A Development Expedition",
          date: "June 25, 2025",
          startTime: "12.00 PM",
          endTime: "6.00 PM",
        },
        {
          id: 3,
          title: "A Development Expedition",
          date: "June 25, 2025",
          startTime: "12.00 PM",
          endTime: "6.00 PM",
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
