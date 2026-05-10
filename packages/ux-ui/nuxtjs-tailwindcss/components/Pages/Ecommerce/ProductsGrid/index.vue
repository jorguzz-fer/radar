<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <div
      class="md:mb-[10px] lg:mb-[17px]"
      v-for="product in products"
      :key="product.id"
    >
      <div class="relative">
        <span
          class="block ltr:right-0 rtl:left-0 bottom-0 w-[65px] h-[65px] absolute ltr:rounded-tl-md rtl:rounded-tr-md bg-white dark:bg-[#0c1427]"
        ></span>
        <NuxtLink :to="product.link" class="block rounded-md">
          <img :src="product.image" alt="product-image" class="rounded-md" />
        </NuxtLink>
        <button
          class="rounded-md transition-all z-[1] inline-block absolute ltr:right-0 rtl:left-0 bottom-0 w-[60px] h-[60px] leading-[72px] bg-primary-500 text-white hover:bg-primary-400"
          type="button"
        >
          <i class="material-symbols-outlined"> shopping_cart </i>
        </button>
      </div>
      <div class="mt-[19px]">
        <h6 class="!text-md !font-normal">
          <NuxtLink
            :to="product.link"
            class="transition-all hover:text-primary-500"
          >
            {{ product.name }}
          </NuxtLink>
        </h6>
        <div
          class="flex items-center justify-between mt-[12px] md:mt-[20px] lg:mt-[28px]"
        >
          <div class="flex items-center">
            <span
              class="block font-bold text-black dark:text-white text-[20px]"
            >
              ${{ product.price }}
            </span>
            <span class="block text-md text-gray-400 ltr:ml-[7px] rtl:mr-[7px]">
              ${{ product.oldPrice }}
            </span>
          </div>
          <div class="leading-none text-orange-400 flex items-center gap-[2px]">
            <i
              v-for="star in 5"
              :key="star"
              :class="starClass(star, product.ratings)"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <Pagination items="9" total="36" class="pt-[0] md:pt-[0]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

import image1 from "@/assets/images/products/product6.jpg";
import image2 from "@/assets/images/products/product7.jpg";
import image3 from "@/assets/images/products/product8.jpg";
import image4 from "@/assets/images/products/product9.jpg";
import image5 from "@/assets/images/products/product10.jpg";
import image6 from "@/assets/images/products/product11.jpg";
import image7 from "@/assets/images/products/product12.jpg";
import image8 from "@/assets/images/products/product13.jpg";
import image9 from "@/assets/images/products/product14.jpg";

export default defineComponent({
  name: "ProductsGrid",
  components: {
    Pagination,
  },
  setup() {
    const products = ref([
      {
        id: 1,
        name: 'Apple MacBook Pro 16.2" with M3 Pro Chip',
        image: image1,
        price: 3479,
        oldPrice: 3599,
        ratings: 5,
        link: "/ecommerce/product-details",
      },
      {
        id: 2,
        name: "SAMSUNG Galaxy Tab A9+ Tablet 11”",
        image: image2,
        price: 549,
        oldPrice: 649,
        ratings: 4.5,
        link: "/ecommerce/product-details",
      },
      {
        id: 3,
        name: "Apple iPhone 15 Pro Max (512 GB)",
        image: image3,
        price: 1479,
        oldPrice: 1599,
        ratings: 4,
        link: "/ecommerce/product-details",
      },
      {
        id: 4,
        name: "Gildan Men's Crew T-Shirts, Multipack",
        image: image4,
        price: 79,
        oldPrice: 89,
        ratings: 3.5,
        link: "/ecommerce/product-details",
      },
      {
        id: 5,
        name: "Skechers Men's Summits High Range",
        image: image5,
        price: 849,
        oldPrice: 999,
        ratings: 4.5,
        link: "/ecommerce/product-details",
      },
      {
        id: 6,
        name: "Amazfit GTR 3 Smart Watch for Men",
        image: image6,
        price: 49,
        oldPrice: 69,
        ratings: 3,
        link: "/ecommerce/product-details",
      },
      {
        id: 7,
        name: "SOJOS Small Round Polarized Sunglasses",
        image: image7,
        price: 39,
        oldPrice: 49,
        ratings: 4.5,
        link: "/ecommerce/product-details",
      },
      {
        id: 8,
        name: "Nautical Clock Ship Table Clock Brass Desk",
        image: image8,
        price: 25,
        oldPrice: 39,
        ratings: 5,
        link: "/ecommerce/product-details",
      },
      {
        id: 9,
        name: "Carhartt, Durable, Adjustable Crossbody Bag",
        image: image9,
        price: 149,
        oldPrice: 299,
        ratings: 4,
        link: "/ecommerce/product-details",
      },
    ]);

    const starClass = (star: number, ratings: number) => {
      if (star <= ratings) {
        return "ri-star-fill";
      } else if (star - ratings < 1) {
        return "ri-star-half-fill";
      } else {
        return "ri-star-line";
      }
    };

    return {
      products,
      starClass,
    };
  },
});
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .md\:pt-\[0\] {
    padding-top: 0 !important;
  }
}
.pt-\[0\] {
  padding-top: 0 !important;
}
</style>
