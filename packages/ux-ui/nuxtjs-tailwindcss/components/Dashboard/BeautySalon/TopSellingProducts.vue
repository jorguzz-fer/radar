<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Top Selling Products</h5>
      </div>

      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md border border-[#f5f7f8] bg-[#f5f7f8] dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              {{ selectedTimeRange }}
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"
              ></i>
            </span>
          </button>

          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li v-for="range in timeRanges" :key="range">
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                @click="selectTimeRange(range)"
              >
                {{ range }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content relative" id="topSellingProductsSlides">
      <Swiper
        :spaceBetween="20"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }"
        :breakpoints="{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            spaceBetween: 25,
            slidesPerView: 4,
          },
        }"
        :modules="modules"
      >
        <SwiperSlide v-for="product in filteredProducts" :key="product.id">
          <NuxtLink
            to="/ecommerce/product-details"
            class="h-[183px] rounded-md block bg-no-repeat bg-center bg-cover"
            :style="`background-image: url(${product.image})`"
          ></NuxtLink>
          <div class="flex justify-between mt-[15px]">
            <div>
              <h6 class="!text-base !font-semibold !mb-[4px]">
                <NuxtLink
                  to="/ecommerce/product-details"
                  class="text-black dark:text-white transition-all hover:text-primary-500"
                >
                  {{ product.name }}
                </NuxtLink>
              </h6>
              <span class="block font-semibold text-primary-800">
                ${{ product.price.toFixed(2) }}
              </span>
            </div>
            <div class="text-center">
              <span
                class="inline-block text-xs rounded-[30px] px-[10px] border border-success-300 text-success-700 bg-success-100 dark:border-[#15203c] dark:bg-[#15203c]"
              >
                {{ product.sold }}
              </span>
              <span class="text-xs block mt-[3px]"> sold </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-button-prev">
        <i class="ri-arrow-left-line"></i>
      </div>
      <div class="swiper-button-next">
        <i class="ri-arrow-right-line"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

import image1 from "@/assets/images/products/product24.jpg";
import image2 from "@/assets/images/products/product25.jpg";
import image3 from "@/assets/images/products/product26.jpg";
import image4 from "@/assets/images/products/product27.jpg";
import image5 from "@/assets/images/products/product28.jpg";
import image6 from "@/assets/images/products/product29.jpg";
import image7 from "@/assets/images/products/product30.jpg";
import image8 from "@/assets/images/products/product31.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  sold: number;
  image: string;
  timeRange: string[];
}

export default defineComponent({
  name: "TopSellingProducts",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const timeRanges = ["This Day", "This Week", "This Month", "This Year"];
    const selectedTimeRange = ref("This Month");

    const products = ref<Product[]>([
      {
        id: 1,
        name: "Hair Treatment",
        price: 23.5,
        sold: 321,
        image: image1,
        timeRange: ["This Month", "This Year"],
      },
      {
        id: 2,
        name: "Facial Kit",
        price: 20.5,
        sold: 124,
        image: image2,
        timeRange: ["This Week", "This Month"],
      },
      {
        id: 3,
        name: "Winter Cream",
        price: 12.43,
        sold: 99,
        image: image3,
        timeRange: ["This Day", "This Week"],
      },
      {
        id: 4,
        name: "Perfume",
        price: 22.12,
        sold: 23,
        image: image4,
        timeRange: ["This Month"],
      },
      {
        id: 5,
        name: "Shampoo",
        price: 15.99,
        sold: 187,
        image: image5,
        timeRange: ["This Week", "This Month"],
      },
      {
        id: 6,
        name: "Conditioner",
        price: 14.5,
        sold: 156,
        image: image6,
        timeRange: ["This Day", "This Week"],
      },
      {
        id: 7,
        name: "Body Lotion",
        price: 18.75,
        sold: 210,
        image: image7,
        timeRange: ["This Month", "This Year"],
      },
      {
        id: 8,
        name: "Lip Balm",
        price: 5.99,
        sold: 342,
        image: image8,
        timeRange: ["This Day", "This Week"],
      },
    ]);

    const selectTimeRange = (range: string) => {
      selectedTimeRange.value = range;
      toggleActive();
    };

    const filteredProducts = computed(() => {
      return products.value.filter((product: { timeRange: string | any[] }) =>
        product.timeRange.includes(selectedTimeRange.value)
      );
    });

    return {
      isActive,
      toggleActive,
      modules: [Autoplay, Navigation],
      timeRanges,
      selectedTimeRange,
      selectTimeRange,
      filteredProducts,
    };
  },
});
</script>
