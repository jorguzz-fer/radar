<template>
  <div
    class="trezo-card bg-secondary-500 mb-[25px] p-[20px] md:p-[25px] rounded-md relative overflow-hidden z-[2]"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title">
        <h5 class="!mb-0 !text-white">Our Top Courses</h5>
      </div>
    </div>
    <div class="trezo-card-content relative" id="ourTopCoursesSlides">
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
          <div class="flex items-center">
            <div class="w-[120px] rounded-md shrink">
              <img :src="item.image" alt="course-image" class="rounded-md" />
            </div>
            <div class="grow-0 ltr:ml-[15px] rtl:mr-[15px]">
              <span class="block text-white">
                {{ item.title }}
              </span>
              <div class="font-semibold text-white text-[20px] mt-[3px]">
                ${{ item.price }}
              </div>
            </div>
          </div>
          <div class="mt-[10px]">
            <span class="block font-semibold text-white text-md mb-[2px]">
              {{ item.infoTitle }}
            </span>
            <ul class="text-white">
              <li
                class="inline-block relative ltr:mr-[13px] rtl:ml-[13px] ltr:last:mr-0 last:rtl:ml-0"
              >
                <span
                  class="top-1/2 -translate-y-1/2 absolute w-[4px] h-[4px] ltr:-right-[11px] rtl:-left-[11px] mt-px rounded-full bg-white"
                ></span>
                {{ item.sections }} sections
              </li>
              <li
                class="inline-block relative ltr:mr-[13px] rtl:ml-[13px] ltr:last:mr-0 last:rtl:ml-0"
              >
                <span
                  class="top-1/2 -translate-y-1/2 absolute w-[4px] h-[4px] ltr:-right-[11px] rtl:-left-[11px] mt-px rounded-full bg-white"
                ></span>
                {{ item.lectures }} lectures
              </li>
              <li
                class="inline-block relative ltr:mr-[13px] rtl:ml-[13px] ltr:last:mr-0 last:rtl:ml-0"
              >
                {{ item.time }}
              </li>
            </ul>
            <div class="ltr:text-right rtl:text-left">
              <NuxtLink
                to="/lms/course-details"
                class="inline-block rounded-md mt-[18px] px-[13px] py-[6px] text-white border border-white transition-all hover:bg-white hover:text-black"
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
            </div>
          </div>
        </SwiperSlide>

        <div class="swiper-pagination"></div>
      </Swiper>
    </div>
    <div
      class="absolute -top-[80px] -z-[1] ltr:-right-[80px] rtl:-left-[80px] w-[169px] h-[169px] rounded-full bg-secondary-600"
    ></div>
    <div
      class="absolute -top-[75px] -z-[2] ltr:-right-[75px] rtl:-left-[75px] w-[169px] h-[169px] rounded-full bg-secondary-400"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import image1 from "@/assets/images/courses/course1.jpg";
import image2 from "@/assets/images/courses/course2.jpg";
import image3 from "@/assets/images/courses/course3.jpg";

export default defineComponent({
  name: "OurTopCourses",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          image: image1,
          title: "Basic Python",
          price: "35.99",
          infoTitle: "Course content",
          sections: "10",
          lectures: "45",
          time: "25h 50m",
        },
        {
          id: 2,
          image: image2,
          title: "HTML Developer",
          price: "49.99",
          infoTitle: "Course content",
          sections: "12",
          lectures: "54",
          time: "35h 40m",
        },
        {
          id: 3,
          image: image3,
          title: "Basic Angular",
          price: "55.99",
          infoTitle: "Course content",
          sections: "14",
          lectures: "48",
          time: "29h 30m",
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
