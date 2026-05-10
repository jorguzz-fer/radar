<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title">
        <h5 class="!mb-0">Recent Property</h5>
      </div>
    </div>

    <div class="trezo-card-content" id="recentPropertySlides">
      <Swiper
        :slidesPerView="1"
        :loop="true"
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
          v-for="property in propertys"
          :key="property.id"
          class="bg-white"
        >
          <div
            class="rounded-[5px] h-[112px] bg-cover bg-no-repeat bg-center"
            :style="{ backgroundImage: `url(${property.image})` }"
          ></div>
          <div class="flex items-center justify-between mb-[8px] mt-[15px]">
            <h3 class="!text-lg !mb-0 !text-orange-500">
              ${{ property.price }}
            </h3>
            <NuxtLink
              to="/real-estate/property-details"
              class="inline-block font-medium text-primary-500 transition-all hover:text-primary-400 hover:underline"
            >
              View More
            </NuxtLink>
          </div>
          <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
            >
              location_on
            </i>
            {{ property.location }} Prince Consort Road
          </span>
          <ul class="mt-[10px]">
            <li
              class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <i
                class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
              >
                bed
              </i>
              {{ property.bed }}Bed
            </li>
            <li
              class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <i
                class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
              >
                bathtub
              </i>
              {{ property.bath }}Bath
            </li>
            <li
              class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <i
                class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
              >
                square_foot
              </i>
              {{ property.sqft }}sqft
            </li>
          </ul>
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

import image1 from "@/assets/images/properties/property1.jpg";
import image2 from "@/assets/images/properties/property2.jpg";
import image3 from "@/assets/images/properties/property3.jpg";

export default defineComponent({
  name: "RecentProperty",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const propertys = ref([
      {
        id: 1,
        image: image1,
        price: "800,000",
        location: "35 Prince Consort Road",
        bed: "6",
        bath: "5",
        sqft: "1900",
      },
      {
        id: 2,
        image: image2,
        price: "220,000",
        location: "58 Gateway Road Portland",
        bed: "8",
        bath: "6",
        sqft: "2000",
      },
      {
        id: 3,
        image: image3,
        price: "800,000",
        location: "35 Prince Consort Road",
        bed: "6",
        bath: "5",
        sqft: "1900",
      },
      {
        id: 4,
        image: image1,
        price: "220,000",
        location: "58 Gateway Road Portland",
        bed: "8",
        bath: "6",
        sqft: "2000",
      },
    ]);
    return {
      modules: [Autoplay, Pagination],
      propertys,
    };
  },
});
</script>
