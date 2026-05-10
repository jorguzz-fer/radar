<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Recent Sales</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md border border-[#F5F7F8] bg-[#F5F7F8] dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Monthly
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"
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
                Monthly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Weekly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Yearly
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                v-for="header in headers"
                :key="header"
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[13px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                {{ header }}
              </th>
            </tr>
          </thead>

          <tbody class="text-black dark:text-white">
            <tr v-for="sale in paginatedSales" :key="sale.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  #{{ sale.id.toString().padStart(3, "0") }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[30px]">
                    <img
                      :src="sale.customer.avatar"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <span class="font-semibold inline-block">{{
                    sale.customer.name
                  }}</span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  ${{ sale.grandTotal.toLocaleString() }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span :class="getPaymentStatusClass(sale.paymentStatus)">
                  {{ sale.paymentStatus }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div
                  class="flex items-center gap-[8px] text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  <img
                    :src="getPaymentMethodIcon(sale.paymentMethod)"
                    :alt="sale.paymentMethod"
                  />
                  {{ sale.paymentMethod }}
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span :class="getStatusBadgeClass(sale.status)">
                  {{ sale.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pt-[13px] sm:flex sm:items-center justify-between">
        <p class="!mb-0 text-xs">
          Showing {{ showingRange }} of {{ sales.length }} results
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
              >
                chevron_left
              </i>
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
            class="inline-block mx-[2px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
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
import { defineComponent, ref, computed, watch } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/users/user36.jpg";
import image2 from "@/assets/images/users/user53.jpg";
import image3 from "@/assets/images/users/user55.jpg";
import image4 from "@/assets/images/users/user54.jpg";
import image5 from "@/assets/images/users/user40.jpg";

import paypalIcon from "@/assets/images/payment-method/paypal.svg";
import wiseIcon from "@/assets/images/payment-method/wise.svg";
import bankIcon from "@/assets/images/payment-method/bank.svg";
import skrillIcon from "@/assets/images/payment-method/skrill.svg";

interface Customer {
  id: number;
  name: string;
  avatar: string;
}

interface Sale {
  id: number;
  customer: Customer;
  grandTotal: number;
  paymentStatus: "Paid" | "Due";
  paymentMethod: string;
  status: "Completed" | "Pending" | "Failed";
  date: Date;
}

export default defineComponent({
  name: "RecentSales",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const headers = [
      "Ref",
      "Customer",
      "Grand Total",
      "Paid",
      "Payment Method",
      "Status",
    ];

    const sales = ref<Sale[]>([
      {
        id: 1,
        customer: {
          id: 1,
          name: "Johhna Loren",
          avatar: image1,
        },
        grandTotal: 6240,
        paymentStatus: "Paid",
        paymentMethod: "Paypal",
        status: "Completed",
        date: new Date(2023, 5, 15),
      },
      {
        id: 2,
        customer: {
          id: 2,
          name: "Skyler Queen",
          avatar: image2,
        },
        grandTotal: 5135,
        paymentStatus: "Due",
        paymentMethod: "Wise",
        status: "Pending",
        date: new Date(2023, 5, 14),
      },
      {
        id: 3,
        customer: {
          id: 3,
          name: "Jonathon Watson",
          avatar: image3,
        },
        grandTotal: 4321,
        paymentStatus: "Paid",
        paymentMethod: "Bank",
        status: "Completed",
        date: new Date(2023, 5, 13),
      },
      {
        id: 4,
        customer: {
          id: 4,
          name: "Walter White",
          avatar: image4,
        },
        grandTotal: 3124,
        paymentStatus: "Paid",
        paymentMethod: "Paypal",
        status: "Completed",
        date: new Date(2023, 5, 12),
      },
      {
        id: 5,
        customer: {
          id: 5,
          name: "David Carlen",
          avatar: image5,
        },
        grandTotal: 2137,
        paymentStatus: "Due",
        paymentMethod: "Skrill",
        status: "Failed",
        date: new Date(2023, 5, 11),
      },
      {
        id: 6,
        customer: {
          id: 4,
          name: "Walter White",
          avatar: image4,
        },
        grandTotal: 3124,
        paymentStatus: "Paid",
        paymentMethod: "Paypal",
        status: "Completed",
        date: new Date(2023, 5, 12),
      },
      {
        id: 7,
        customer: {
          id: 5,
          name: "David Carlen",
          avatar: image5,
        },
        grandTotal: 2137,
        paymentStatus: "Due",
        paymentMethod: "Skrill",
        status: "Failed",
        date: new Date(2023, 5, 11),
      },
      {
        id: 8,
        customer: {
          id: 1,
          name: "Johhna Loren",
          avatar: image1,
        },
        grandTotal: 6240,
        paymentStatus: "Paid",
        paymentMethod: "Paypal",
        status: "Completed",
        date: new Date(2023, 5, 15),
      },
      {
        id: 9,
        customer: {
          id: 2,
          name: "Skyler Queen",
          avatar: image2,
        },
        grandTotal: 5135,
        paymentStatus: "Due",
        paymentMethod: "Wise",
        status: "Pending",
        date: new Date(2023, 5, 14),
      },
      {
        id: 10,
        customer: {
          id: 3,
          name: "Jonathon Watson",
          avatar: image3,
        },
        grandTotal: 4321,
        paymentStatus: "Paid",
        paymentMethod: "Bank",
        status: "Completed",
        date: new Date(2023, 5, 13),
      },
    ]);

    // Pagination
    const itemsPerPage = 5;
    const currentPage = ref(1);
    const totalPages = computed(() =>
      Math.ceil(sales.value.length / itemsPerPage)
    );

    const paginatedSales = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return sales.value.slice(start, end);
    });

    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage,
        sales.value.length
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
    const getPaymentMethodIcon = (method: string) => {
      const icons: Record<string, string> = {
        Paypal: paypalIcon,
        Wise: wiseIcon,
        Bank: bankIcon,
        Skrill: skrillIcon,
      };
      return icons[method] || paypalIcon;
    };

    const getPaymentStatusClass = (status: string) => {
      return {
        "block text-xs font-semibold": true,
        "text-success-600": status === "Paid",
        "text-danger-600": status === "Due",
      };
    };

    const getStatusBadgeClass = (status: string) => {
      const baseClasses =
        "inline-block text-xs px-[9px] border text-sm rounded-[100px] dark:bg-[#15203c] dark:border-[#15203c]";

      switch (status) {
        case "Completed":
          return `${baseClasses} text-success-700 border-success-300 bg-success-100`;
        case "Pending":
          return `${baseClasses} text-purple-700 border-purple-300 bg-purple-100`;
        case "Failed":
          return `${baseClasses} text-danger-700 border-danger-300 bg-danger-100`;
        default:
          return `${baseClasses} text-gray-700 border-gray-300 bg-gray-100`;
      }
    };

    return {
      isActive,
      toggleActive,
      headers,
      paginatedSales,
      sales,

      // Pagination
      currentPage,
      totalPages,
      showingRange,
      visiblePages,
      prevPage,
      nextPage,
      goToPage,

      // Helpers
      getPaymentMethodIcon,
      getPaymentStatusClass,
      getStatusBadgeClass,
    };
  },
});
</script>
