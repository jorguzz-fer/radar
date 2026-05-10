<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
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
              'trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Today
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
              ></i>
            </span>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Day
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Week
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Month
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Year
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Product
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Price
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Order
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Stock
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tr-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="item in paginatedItems" :key="item.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center">
                  <div class="rounded-md w-[40px]">
                    <img
                      :src="item.product.image"
                      class="inline-block rounded-md"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <NuxtLink
                      to="/ecommerce/product-details"
                      class="font-medium inline-block text-[14px] md:text-[15px] transition-all hover:text-primary-500"
                    >
                      {{ item.product.name }}
                    </NuxtLink>
                    <span
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      {{ item.product.date }}
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                ${{ item.price }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                {{ item.order }}
              </td>
              <td
                :class="[
                  'ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l',
                  computeClass(item.stock),
                ]"
              >
                {{ item.stock }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                ${{ item.amount }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="px-[20px] py-[12px] md:py-[14px] rounded-b-md border-l border-r border-b border-gray-100 dark:border-[#172036] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ startItem + 1 }} to {{ endItem }} of
          {{ items.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            :class="{ disabled: currentPage === 1 }"
          >
            <a
              href="#"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click.prevent="prevPage"
            >
              <span class="opacity-0"> 0 </span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_left
              </i>
            </a>
          </li>
          <li
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <a
              href="#"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click.prevent="goToPage(page)"
            >
              {{ page }}
            </a>
          </li>
          <li
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            :class="{ disabled: currentPage === totalPages }"
          >
            <a
              href="#"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click.prevent="nextPage"
            >
              <span class="opacity-0"> 0 </span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_right
              </i>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/products/product1.jpg";
import image2 from "@/assets/images/products/product2.jpg";
import image3 from "@/assets/images/products/product3.jpg";
import image4 from "@/assets/images/products/product4.jpg";
import image5 from "@/assets/images/products/product5.jpg";

interface Product {
  image: string;
  name: string;
  date: string;
}

interface Item {
  id: number;
  product: Product;
  price: string;
  order: number;
  stock: string | number;
  amount: string;
}

export default defineComponent({
  name: "TopSellingProducts",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const items = ref<Item[]>([
      {
        id: 1,
        product: {
          image: image1,
          name: "Smart Band",
          date: "15 Jun 2025",
        },
        price: "35.00",
        order: 75,
        stock: 750,
        amount: "2,625",
      },
      {
        id: 2,
        product: {
          image: image2,
          name: "Headphone",
          date: "14 Jun 2025",
        },
        price: "49.00",
        order: 25,
        stock: 825,
        amount: "1,225",
      },
      {
        id: 3,
        product: {
          image: image3,
          name: "iPhone 15 Plus",
          date: "13 Jun 2025",
        },
        price: "99.00",
        order: 55,
        stock: "Stock Out",
        amount: "5,445",
      },
      {
        id: 4,
        product: {
          image: image4,
          name: "Bluetooth Speaker",
          date: "12 Jun 2025",
        },
        price: "59.00",
        order: 40,
        stock: 535,
        amount: "2,360",
      },
      {
        id: 5,
        product: {
          image: image5,
          name: "Airbuds 2nd Gen",
          date: "11 Jun 2025",
        },
        price: "79.00",
        order: 56,
        stock: 460,
        amount: "4,424",
      },
      {
        id: 6,
        product: {
          image: image2,
          name: "Headphone",
          date: "10 Jun 2025",
        },
        price: "49.00",
        order: 25,
        stock: 825,
        amount: "1,225",
      },
      {
        id: 7,
        product: {
          image: image1,
          name: "Smart Band",
          date: "15 Jun 2025",
        },
        price: "35.00",
        order: 75,
        stock: 750,
        amount: "2,625",
      },
      {
        id: 8,
        product: {
          image: image2,
          name: "Headphone",
          date: "14 Jun 2025",
        },
        price: "49.00",
        order: 25,
        stock: 825,
        amount: "1,225",
      },
      {
        id: 9,
        product: {
          image: image3,
          name: "iPhone 15 Plus",
          date: "13 Jun 2025",
        },
        price: "99.00",
        order: 55,
        stock: "Stock Out",
        amount: "5,445",
      },
      {
        id: 10,
        product: {
          image: image4,
          name: "Bluetooth Speaker",
          date: "12 Jun 2025",
        },
        price: "59.00",
        order: 40,
        stock: 535,
        amount: "2,360",
      },
      {
        id: 11,
        product: {
          image: image5,
          name: "Airbuds 2nd Gen",
          date: "11 Jun 2025",
        },
        price: "79.00",
        order: 56,
        stock: 460,
        amount: "4,424",
      },
      {
        id: 12,
        product: {
          image: image2,
          name: "Headphone",
          date: "10 Jun 2025",
        },
        price: "49.00",
        order: 25,
        stock: 825,
        amount: "1,225",
      },
    ]);

    const wordOutOfStock = ref("Stock Out");

    const computeClass = (classValue: string | number) => {
      return {
        "text-danger-400": wordOutOfStock.value === classValue,
      };
    };

    const itemsPerPage = ref(5);
    const currentPage = ref(1);

    const totalPages = computed(() =>
      Math.ceil(items.value.length / itemsPerPage.value)
    );

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return items.value.slice(start, end);
    });

    const startItem = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endItem = computed(() =>
      Math.min(currentPage.value * itemsPerPage.value, items.value.length)
    );

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

    return {
      items,
      computeClass,
      currentPage,
      paginatedItems,
      totalPages,
      goToPage,
      prevPage,
      nextPage,
      startItem,
      endItem,
      isActive,
      toggleActive,
    };
  },
});
</script>

<style lang="scss" scoped>
ol {
  li {
    &.active {
      a {
        background-color: #605dff;
        color: #fff;
        border-color: #605dff;
      }
    }
  }
}
</style>
