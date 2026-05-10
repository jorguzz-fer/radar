<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Stock Alerts</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                v-for="header in headers"
                :key="header.key"
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[11px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                {{ header.label }}
              </th>
            </tr>
          </thead>

          <tbody class="text-black dark:text-white">
            <tr v-for="item in paginatedItems" :key="item.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  #{{ item.code }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-md w-[29px]">
                    <img
                      :src="item.image"
                      :alt="item.product"
                      class="rounded-md"
                    />
                  </div>
                  <NuxtLink
                    to="/ecommerce/product-details"
                    class="font-semibold inline-block text-black dark:text-white transition-all hover:text-primary-500"
                  >
                    {{ item.product }}
                  </NuxtLink>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  {{ item.store }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  {{ item.quantity }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span :class="getAlertClass(item)">
                  {{ item.alertQuantity }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    data-text="View"
                  >
                    <i class="material-symbols-outlined !text-md">visibility</i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Edit"
                  >
                    <i class="material-symbols-outlined !text-md">edit</i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    data-text="Delete"
                    @click="deleteItem(item)"
                  >
                    <i class="material-symbols-outlined !text-md">delete</i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pt-[11px] sm:flex sm:items-center justify-between">
        <p class="!mb-0 text-xs">
          Showing {{ showingRange }} of {{ stockAlerts.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              :class="{
                'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500': true,
                'opacity-50 cursor-not-allowed': currentPage === 1,
              }"
            >
              <span class="opacity-0">0</span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
                >chevron_left</i
              >
            </button>
          </li>
          <li
            v-for="page in visiblePages"
            :key="page"
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              @click="goToPage(page)"
              :class="{
                'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md': true,
                'border border-primary-500 bg-primary-500 text-white':
                  currentPage === page,
                'border border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500':
                  currentPage !== page,
              }"
            >
              {{ page }}
            </button>
          </li>
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              :class="{
                'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500': true,
                'opacity-50 cursor-not-allowed': currentPage === totalPages,
              }"
            >
              <span class="opacity-0">0</span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
                >chevron_right</i
              >
            </button>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "@/assets/images/stock-alerts/stock1.jpg";
import image2 from "@/assets/images/stock-alerts/stock2.jpg";
import image3 from "@/assets/images/stock-alerts/stock3.jpg";
import image4 from "@/assets/images/stock-alerts/stock4.jpg";
import image5 from "@/assets/images/stock-alerts/stock5.jpg";

interface StockAlert {
  id: number;
  code: string;
  product: string;
  image: string;
  store: string;
  quantity: number;
  alertQuantity: number;
  status: "critical" | "warning" | "normal";
}

export default defineComponent({
  name: "StockAlerts",
  setup() {
    const headers = [
      { key: "code", label: "Code" },
      { key: "product", label: "Product" },
      { key: "store", label: "Store" },
      { key: "quantity", label: "Quantity" },
      { key: "alertQuantity", label: "Alert Quantity" },
      { key: "actions", label: "" },
    ];

    const stockAlerts = ref<StockAlert[]>([
      {
        id: 1,
        code: "3421",
        product: "ZenX Laptop",
        image: image1,
        store: "Store 01",
        quantity: 5,
        alertQuantity: 10,
        status: "critical",
      },
      {
        id: 2,
        code: "3429",
        product: "Mackbook Pro",
        image: image2,
        store: "Store 02",
        quantity: 3,
        alertQuantity: 15,
        status: "critical",
      },
      {
        id: 3,
        code: "3425",
        product: "Smart Pencil",
        image: image3,
        store: "Store 01",
        quantity: 2,
        alertQuantity: 7,
        status: "critical",
      },
      {
        id: 4,
        code: "3424",
        product: "Banner Mockup",
        image: image4,
        store: "Store 02",
        quantity: 4,
        alertQuantity: 12,
        status: "warning",
      },
      {
        id: 5,
        code: "3422",
        product: "Clay Camera",
        image: image5,
        store: "Store 01",
        quantity: 3,
        alertQuantity: 10,
        status: "warning",
      },
      {
        id: 6,
        code: "3424",
        product: "Banner Mockup",
        image: image4,
        store: "Store 02",
        quantity: 4,
        alertQuantity: 12,
        status: "warning",
      },
      {
        id: 7,
        code: "3422",
        product: "Clay Camera",
        image: image5,
        store: "Store 01",
        quantity: 3,
        alertQuantity: 10,
        status: "warning",
      },
      {
        id: 8,
        code: "3421",
        product: "ZenX Laptop",
        image: image1,
        store: "Store 01",
        quantity: 5,
        alertQuantity: 10,
        status: "critical",
      },
      {
        id: 9,
        code: "3429",
        product: "Mackbook Pro",
        image: image2,
        store: "Store 02",
        quantity: 3,
        alertQuantity: 15,
        status: "critical",
      },
      {
        id: 10,
        code: "3425",
        product: "Smart Pencil",
        image: image3,
        store: "Store 01",
        quantity: 2,
        alertQuantity: 7,
        status: "critical",
      },
    ]);

    // Pagination
    const itemsPerPage = 5;
    const currentPage = ref(1);
    const totalPages = computed(() =>
      Math.ceil(stockAlerts.value.length / itemsPerPage)
    );

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return stockAlerts.value.slice(start, end);
    });

    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage,
        stockAlerts.value.length
      );
      return `${start}-${end}`;
    });

    // Only show relevant page numbers (max 5)
    const visiblePages = computed(() => {
      const pages = [];
      const maxVisible = 5;
      let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2));
      let end = Math.min(totalPages.value, start + maxVisible - 1);

      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    });

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    // Helper functions
    const getAlertClass = (item: StockAlert) => {
      const baseClasses =
        "inline-block text-xs px-[9px] border text-sm rounded-[100px] dark:bg-[#15203c] dark:border-[#15203c]";

      if (item.quantity <= item.alertQuantity * 0.3) {
        return `${baseClasses} text-danger-700 border-danger-300 bg-danger-100`;
      } else if (item.quantity <= item.alertQuantity * 0.6) {
        return `${baseClasses} text-warning-700 border-warning-300 bg-warning-100`;
      }
      return `${baseClasses} text-success-700 border-success-300 bg-success-100`;
    };

    const deleteItem = (item: StockAlert) => {
      console.log("Delete item:", item);
      stockAlerts.value = stockAlerts.value.filter(
        (i: { id: number }) => i.id !== item.id
      );
    };

    return {
      headers,
      paginatedItems,
      stockAlerts,

      // Pagination
      currentPage,
      totalPages,
      showingRange,
      visiblePages,
      prevPage,
      nextPage,
      goToPage,

      // Helpers
      getAlertClass,

      // Actions
      deleteItem,
    };
  },
});
</script>
