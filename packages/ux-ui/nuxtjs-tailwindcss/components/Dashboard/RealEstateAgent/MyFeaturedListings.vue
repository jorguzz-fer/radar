<template>
  <div
    class="trezo-card bg-orange-100 dark:bg-[#15203c] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">My Featured Listings</h5>
      </div>
    </div>

    <div class="trezo-card-content relative" id="myFeaturedListingsSlides">
      <Swiper
        :spaceBetween="20"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
            slidesPerView: 2,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide
          v-for="property in properties"
          :key="property.id"
          class="bg-white rounded-md dark:bg-[#0c1427] hover:shadow-lg transition-shadow duration-300"
        >
          <div
            class="relative h-[202.5px] bg-center bg-cover bg-no-repeat rounded-t-md"
            :style="`background-image: url(${property.image});`"
          >
            <span
              class="inline-block absolute top-[10px] ltr:left-[10px] rtl:right-[10px] text-xs font-medium py-[2px] px-[8px] rounded-[4px]"
              :class="
                property.type === 'rent'
                  ? 'bg-danger-100 text-danger-700'
                  : 'bg-success-100 text-success-700'
              "
            >
              {{ property.type === "rent" ? "For Rent" : "For Sale" }}
            </span>
            <span
              v-if="property.featured"
              class="inline-block absolute top-[10px] ltr:right-[10px] rtl:left-[10px] bg-primary-100 text-primary-700 text-xs font-medium py-[2px] px-[8px] rounded-[4px]"
            >
              Featured
            </span>
          </div>
          <div class="p-[20px]">
            <h6 class="!text-md !mb-[5px] !font-semibold">
              <a href="#" class="transition-all hover:text-primary-500">
                {{ property.title }}
              </a>
            </h6>
            <span class="block text-gray-500 dark:text-gray-400 text-sm">
              <i class="ri-map-pin-line mr-1"></i>
              {{ property.location }}
            </span>
            <ul class="mt-[13px] flex items-center justify-between">
              <li
                class="text-xs text-black dark:text-white relative ltr:pl-[23px] rtl:pr-[23px]"
              >
                <i
                  class="material-symbols-outlined absolute top-1/2 -translate-y-1/2 !text-lg ltr:left-0 rtl:right-0 text-gray-400"
                >
                  open_run
                </i>
                {{ property.area }} Sft
              </li>
              <li
                class="text-xs text-black dark:text-white relative ltr:pl-[23px] rtl:pr-[23px]"
              >
                <i
                  class="material-symbols-outlined absolute top-1/2 -translate-y-1/2 !text-lg ltr:left-0 rtl:right-0 text-gray-400"
                >
                  bed
                </i>
                {{ property.bedrooms }} Bed
              </li>
              <li
                class="text-xs text-black dark:text-white relative ltr:pl-[23px] rtl:pr-[23px]"
              >
                <i
                  class="material-symbols-outlined absolute top-1/2 -translate-y-1/2 !text-lg ltr:left-0 rtl:right-0 text-gray-400"
                >
                  bathtub
                </i>
                {{ property.bathrooms }} Bath
              </li>
            </ul>
            <div
              class="flex items-center justify-between mt-[13px] pt-[13px] border-t border-gray-100 dark:border-[#172036]"
            >
              <div
                class="text-md text-black dark:text-white font-bold leading-none"
              >
                {{ property.price }}{{ property.type === "rent" ? "/m" : "" }}
              </div>
              <a
                href="#"
                class="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-gray-100 dark:bg-[#15203c] transition-all hover:text-white hover:bg-primary-500"
              >
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import image1 from "@/assets/images/properties/property13.jpg";
import image2 from "@/assets/images/properties/property14.jpg";

interface Property {
  id: number;
  title: string;
  location: string;
  image: string;
  type: "rent" | "sale";
  featured: boolean;
  area: number;
  bedrooms: number;
  bathrooms: number;
  price: string;
}

export default defineComponent({
  name: "MyFeaturedListings",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const properties = ref<Property[]>([
      {
        id: 1,
        title: "White House Villa",
        location: "New Castle, United Kingdom",
        image: image1,
        type: "rent",
        featured: true,
        area: 321,
        bedrooms: 2,
        bathrooms: 2,
        price: "$3,124",
      },
      {
        id: 2,
        title: "Luxury Comfort Villa",
        location: "London, United Kingdom",
        image: image2,
        type: "sale",
        featured: false,
        area: 425,
        bedrooms: 3,
        bathrooms: 2,
        price: "$4,274",
      },
      {
        id: 3,
        title: "Modern City Apartment",
        location: "Manchester, United Kingdom",
        image: image1,
        type: "rent",
        featured: true,
        area: 580,
        bedrooms: 2,
        bathrooms: 1,
        price: "$2,850",
      },
      {
        id: 4,
        title: "Suburban Family Home",
        location: "Birmingham, United Kingdom",
        image: image2,
        type: "sale",
        featured: false,
        area: 1200,
        bedrooms: 4,
        bathrooms: 3,
        price: "$525,000",
      },
    ]);

    return {
      modules: [Autoplay, Pagination],
      properties,
    };
  },
});
</script>
