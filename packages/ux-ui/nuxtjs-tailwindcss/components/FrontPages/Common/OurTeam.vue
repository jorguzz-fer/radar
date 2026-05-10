<template>
  <div class="container 2xl:max-w-[1320px] mx-auto px-[12px] relative z-[1]">
    <div
      class="md:max-w-[500px] lg:max-w-[630px] mb-[35px] md:mb-[50px] lg:mb-[65px] xl:mb-[90px]"
    >
      <div class="inline-block relative mt-[10px] mb-[20px]">
        <span
          class="absolute top-[4.5px] w-[5px] h-[5px] ltr:-left-[3.6px] rtl:-right-[3.6px] bg-purple-600 -rotate-[6.536deg]"
        ></span>
        <span
          class="absolute -top-[9.5px] w-[5px] h-[5px] ltr:right-0 rtl:left-0 bg-purple-600 -rotate-[6.536deg]"
        ></span>
        <span
          class="inline-block relative text-purple-600 border border-purple-600 py-[5.5px] px-[17.2px] -rotate-[6.536deg]"
        >
          Our Team
          <span
            class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-left-[3.5px] rtl:-right-[3.5px] bg-purple-600 -rotate-[6.536deg]"
          ></span>
          <span
            class="absolute -bottom-[2.5px] w-[5px] h-[5px] ltr:-right-[3.5px] rtl:-left-[3.5px] bg-purple-600 -rotate-[6.536deg]"
          ></span>
        </span>
      </div>
      <h2
        class="!mb-0 !text-[24px] md:!text-[28px] lg:!text-[34px] xl:!text-[36px] -tracking-[.5px] md:-tracking-[.6px] lg:-tracking-[.8px] xl:-tracking-[1px] !leading-[1.2]"
      >
        Introducing Our Exceptional Team. Meet the Minds Driving Our Success
      </h2>
    </div>

    <div class="relative" id="frontPageTeamSlides">
      <Swiper
        :spaceBetween="25"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :navigation="{
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next',
        }"
        :breakpoints="{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide v-for="team in teams" :key="team.id">
          <div
            class="mb-px pt-[15px] px-[15px] pb-[12px] rounded-[7px] bg-white/[.26] dark:bg-black/[.54] border border-white/[.24] dark:border-black/[.24] backdrop-blur-[3.5999999046325684px]"
          >
            <img :src="team.image" alt="team-image" class="rounded-[7px]" />
          </div>
          <div
            class="p-[20px] md:p-[25px] lg:p-[30px] rounded-[7px] flex items-center justify-between bg-white/[.26] dark:bg-black/[.54] border border-white/[.24] dark:border-black/[.24] backdrop-blur-[3.5999999046325684px]"
          >
            <div>
              <h3
                class="font-semibold mb-[5px] text-[16px] md:text-[18px] leading-[1.2]"
              >
                {{ team.name }}
              </h3>
              <span class="block"> {{ team.designation }} </span>
            </div>
            <div class="flex items-center gap-[8px]">
              <a
                href="#"
                class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500"
              >
                <i class="ri-facebook-fill"></i>
              </a>
              <a
                href="#"
                class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500"
              >
                <i class="ri-twitter-x-fill"></i>
              </a>
              <a
                href="#"
                class="inline-block leading-none text-[17px] md:text-[20px] transition-all text-primary-600 hover:text-primary-500"
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        class="mt-[25px] md:mt-0 md:absolute ltr:md:right-0 rtl:md:left-0 md:-top-[110px] lg:-top-[138px] xl:-top-[164px] flex items-center justify-center gap-[10px] md:gap-[15px]"
      >
        <div
          class="swiper-button-next !text-[20px] lg:!text-[24px] !mt-0 !relative !left-0 !right-0 !top-0 !flex !items-center !justify-center !w-[40px] md:!w-[50px] lg:!w-[60px] xl:!w-[64px] !h-[40px] md:!h-[50px] lg:!h-[60px] xl:!h-[64px] !rounded-full !transition-all !text-gray-500 dark:!text-gray-400 !bg-primary-50 dark:!bg-[#15203c] hover:!bg-primary-600 hover:!text-white"
        >
          <i class="ri-arrow-left-line"></i>
        </div>
        <div
          class="swiper-button-prev !text-[20px] lg:!text-[24px] !mt-0 !relative !left-0 !right-0 !top-0 !flex !items-center !justify-center !w-[40px] md:!w-[50px] lg:!w-[60px] xl:!w-[64px] !h-[40px] md:!h-[50px] lg:!h-[60px] xl:!h-[64px] !rounded-full !transition-all !text-gray-500 dark:!text-gray-400 !bg-primary-50 dark:!bg-[#15203c] hover:!bg-primary-600 hover:!text-white"
        >
          <i class="ri-arrow-right-line"></i>
        </div>
      </div>
    </div>
    <div
      class="ltr:left-[90px] rtl:right-[90px] -z-[1] bottom-[15px] absolute blur-[150px]"
    >
      <img src="@/assets/images/front-pages/shape1.png" alt="shape1" />
    </div>
    <div
      class="ltr:-right-[15px] rtl:-left-[15px] -z-[1] -bottom-[130px] absolute blur-[125px]"
    >
      <img src="@/assets/images/front-pages/shape1.png" alt="shape1" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

import image1 from "@/assets/images/front-pages/team1.jpg";
import image2 from "@/assets/images/front-pages/team2.jpg";
import image3 from "@/assets/images/front-pages/team3.jpg";

export default defineComponent({
  name: "OurTeam",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      teams: [
        {
          id: 1,
          image: image1,
          name: "Michael Johnson",
          designation: "CEO",
        },
        {
          id: 2,
          image: image2,
          name: "Emily Davis",
          designation: "Project Manager",
        },
        {
          id: 3,
          image: image3,
          name: "Daniel Lee",
          designation: "Sales Team Lead",
        },
        {
          id: 4,
          image: image1,
          name: "Michael Johnson",
          designation: "CEO",
        },
        {
          id: 5,
          image: image2,
          name: "Emily Davis",
          designation: "Project Manager",
        },
        {
          id: 6,
          image: image3,
          name: "Daniel Lee",
          designation: "Sales Team Lead",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
});
</script>
