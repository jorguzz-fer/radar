<template>
  <div class="trezo-card mb-[25px]">
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !text-md md:!text-[20px] !font-medium">Categories</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="trezo-tabs" id="trezo-tabs">
        <ul class="categories-navs mb-[10px]">
          <li
            v-for="category in categories"
            :key="category.id"
            class="nav-item inline-block mb-[15px] ltr:mr-[11px] rtl:ml-[11px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              :data-tab="category.id"
              :class="[
                'nav-link',
                'py-[16px]',
                'px-[22px]',
                'rounded-md',
                'text-black',
                'dark:text-white',
                'transition-all',
                'border-[2px]',
                'border-gray-100',
                'dark:border-[#172036]',
                { active: activeCategory === category.id },
              ]"
              @click="setActiveCategory(category.id)"
            >
              <img
                :src="category.icon"
                class="inline-block"
                :alt="category.name"
              />
              <div class="block font-medium text-md mt-[12px] mb-[2px]">
                {{ category.name }}
              </div>
              <div
                class="relative text-gray-500 dark:text-gray-400 font-medium"
              >
                <span
                  class="text-xs left-0 right-0 top-1/2 -translate-y-1/2 absolute transition-all"
                >
                  {{ categoryCounts[category.id] }}
                </span>
                <span class="text-xs transition-all">
                  {{ categoryCounts[category.id] }} Products
                </span>
              </div>
            </button>
          </li>
        </ul>

        <div class="tab-content">
          <div :class="['tab-pane', { active: true }]" :id="activeCategory">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-[25px]"
            >
              <div
                v-for="product in products"
                :key="product.id"
                class="p-[15px] md:p-[20px] bg-white dark:bg-[#0c1427] rounded-md border border-gray-100 dark:border-[#172036]"
              >
                <RouterLink
                  to="/ecommerce/product-details"
                  class="block rounded-md"
                >
                  <img
                    :src="product.image"
                    class="rounded-md"
                    :alt="product.name"
                  />
                </RouterLink>
                <div class="mt-[18px]">
                  <h4 class="!font-medium !text-lg md:!text-[20px] !mb-[4px]">
                    <RouterLink
                      to="/ecommerce/product-details"
                      class="transition-all hover:text-primary-500"
                    >
                      {{ product.name }}
                    </RouterLink>
                  </h4>
                  <span class="block">{{ product.categoryName }}</span>
                  <div class="mt-[12px] flex items-center justify-between">
                    <span
                      class="block leading-none text-success-600 font-medium text-lg md:text-xl"
                    >
                      ${{ product.price }}
                    </span>
                    <button
                      type="button"
                      class="flex items-center justify-center w-[34px] h-[34px] rounded-sm text-primary-500 bg-primary-100 dark:bg-dark transition-all hover:text-white hover:bg-primary-500"
                      @click="addToCart(product)"
                    >
                      <i class="material-symbols-outlined">shopping_cart</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="trezo-card bg-white dark:bg-[#0c1427] border border-gray-100 dark:border-[#172036] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <div class="sm:flex sm:items-center justify-between">
        <p class="!mb-0">
          Showing {{ showingCount }} of {{ totalProducts }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click.prevent="prevPage"
            >
              <span class="opacity-0">0</span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_left
              </i>
            </button>
          </li>
          <li
            v-for="page in totalPages"
            :key="page"
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              :class="[
                'w-[31px]',
                'h-[31px]',
                'block',
                'leading-[29px]',
                'relative',
                'text-center',
                'rounded-md',
                'border',
                currentPage === page
                  ? 'border-primary-500 bg-primary-500 text-white'
                  : 'border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500',
              ]"
              @click.prevent="goToPage(page)"
            >
              {{ page }}
            </button>
          </li>
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click.prevent="nextPage"
            >
              <span class="opacity-0">0</span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_right
              </i>
            </button>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { RouterLink } from "vue-router";

import icon1 from "@/assets/images/icons/container.svg";
import icon2 from "@/assets/images/icons/data.svg";
import icon3 from "@/assets/images/icons/clothing.svg";
import icon4 from "@/assets/images/icons/face.svg";
import icon5 from "@/assets/images/icons/food.svg";
import image1 from "@/assets/images/products/product16.jpg";
import image2 from "@/assets/images/products/product18.jpg";
import image3 from "@/assets/images/products/product15.jpg";
import image4 from "@/assets/images/products/product19.jpg";
import image5 from "@/assets/images/products/product20.jpg";
import image6 from "@/assets/images/products/product17.jpg";
import image7 from "@/assets/images/products/product21.jpg";
import image8 from "@/assets/images/products/product22.jpg";
import image9 from "@/assets/images/products/product23.jpg";

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  image: string;
  price: number;
}

export default defineComponent({
  name: "Categories",
  components: { RouterLink },
  setup() {
    const activeCategory = ref<string>("all");
    const currentPage = ref<number>(1);
    const perPage = 9;

    const categories: Category[] = [
      { id: "all", name: "All", icon: icon1 },
      { id: "electronics", name: "Electronics", icon: icon2 },
      { id: "clothing", name: "Clothing", icon: icon3 },
      { id: "beauty", name: "Beauty", icon: icon4 },
      { id: "foods", name: "Foods", icon: icon5 },
    ];

    const products: Product[] = [
      {
        id: "1",
        name: "Apple iPhone 16",
        category: "electronics",
        categoryName: "Smartphones",
        image: image1,
        price: 799,
      },
      {
        id: "2",
        name: "Levi's 501",
        category: "clothing",
        categoryName: "Pants",
        image: image2,
        price: 89,
      },
      {
        id: "3",
        name: "Maybelline Lash",
        category: "beauty",
        categoryName: "Makeup",
        image: image3,
        price: 29,
      },
      {
        id: "4",
        name: "Quaker Oats",
        category: "foods",
        categoryName: "Breakfast",
        image: image4,
        price: 99,
      },
      {
        id: "5",
        name: "Fitbit Charge",
        category: "electronics",
        categoryName: "Wearables",
        image: image5,
        price: 179,
      },
      {
        id: "6",
        name: "Adidas Women",
        category: "clothing",
        categoryName: "Outerwear",
        image: image6,
        price: 85,
      },
      {
        id: "7",
        name: "Galaxy Tab",
        category: "electronics",
        categoryName: "Tablets",
        image: image7,
        price: 649,
      },
      {
        id: "8",
        name: "H&M Basic",
        category: "clothing",
        categoryName: "T-Shirts",
        image: image8,
        price: 20,
      },
      {
        id: "9",
        name: "L'Oréal Paris",
        category: "beauty",
        categoryName: "Makeup",
        image: image9,
        price: 69,
      },
      {
        id: "10",
        name: "Fitbit Charge",
        category: "electronics",
        categoryName: "Wearables",
        image: image5,
        price: 179,
      },
      {
        id: "11",
        name: "Adidas Women",
        category: "clothing",
        categoryName: "Outerwear",
        image: image6,
        price: 85,
      },
      {
        id: "12",
        name: "Galaxy Tab",
        category: "electronics",
        categoryName: "Tablets",
        image: image7,
        price: 649,
      },
      {
        id: "13",
        name: "H&M Basic",
        category: "clothing",
        categoryName: "T-Shirts",
        image: image8,
        price: 20,
      },
      {
        id: "14",
        name: "L'Oréal Paris",
        category: "beauty",
        categoryName: "Makeup",
        image: image9,
        price: 69,
      },
      {
        id: "15",
        name: "Apple iPhone 16",
        category: "electronics",
        categoryName: "Smartphones",
        image: image1,
        price: 799,
      },
      {
        id: "16",
        name: "Levi's 501",
        category: "clothing",
        categoryName: "Pants",
        image: image2,
        price: 89,
      },
      {
        id: "17",
        name: "Maybelline Lash",
        category: "beauty",
        categoryName: "Makeup",
        image: image3,
        price: 29,
      },
      {
        id: "18",
        name: "Quaker Oats",
        category: "foods",
        categoryName: "Breakfast",
        image: image4,
        price: 99,
      },
    ];

    // Compute dynamic product counts
    const categoryCounts = computed(() => {
      const countMap: Record<string, number> = {};

      // Initialize count for each category
      categories.forEach((category: Category) => {
        countMap[category.id] = 0;
      });

      // Count products per category
      products.forEach((product: Product) => {
        if (countMap[product.category] !== undefined) {
          countMap[product.category]++;
        }
      });

      // Set 'All' category count
      countMap["all"] = products.length;

      return countMap;
    });

    const setActiveCategory = (categoryId: string) => {
      activeCategory.value = categoryId;
      currentPage.value = 1; // Reset to first page when changing categories
    };

    const getProductsByCategory = (categoryId: string) => {
      if (categoryId === "all") {
        return products;
      }
      return products.filter((product) => product.category === categoryId);
    };

    const paginatedProducts = computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return getProductsByCategory(activeCategory.value).slice(start, end);
    });

    const totalProducts = computed(() => {
      return getProductsByCategory(activeCategory.value).length;
    });

    const showingCount = computed(() => {
      return Math.min(perPage, totalProducts.value);
    });

    const totalPages = computed(() => {
      return Math.ceil(totalProducts.value / perPage);
    });

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const addToCart = (product: Product) => {
      console.log("Added to cart:", product);
      // Implement your cart logic here
    };

    return {
      activeCategory,
      categories,
      products: paginatedProducts,
      categoryCounts,
      currentPage,
      showingCount,
      totalProducts,
      totalPages,
      setActiveCategory,
      getProductsByCategory,
      goToPage,
      prevPage,
      nextPage,
      addToCart,
    };
  },
});
</script>
