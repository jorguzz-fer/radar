<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Latest Transactions</h5>
      </div>

      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md bg-[#f5f7f8] dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-100 dark:hover:bg-dark': true,
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
                Weekly
              </button>
            </li>
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
            <tr
              v-for="transaction in paginatedTransactions"
              :key="transaction.id"
            >
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[32px]">
                    <img
                      :src="transaction.userImage"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <span class="font-semibold inline-block">{{
                    transaction.client
                  }}</span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  {{ transaction.email }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span class="block text-xs font-semibold"
                  >${{ transaction.amount }}</span
                >
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div
                  class="flex items-center gap-[8px] text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  <img
                    :src="transaction.paymentMethodImage"
                    :alt="transaction.paymentMethod"
                  />
                  {{ transaction.paymentMethod }}
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  :class="{
                    'inline-block text-xs font-medium py-px px-[10px] border text-sm rounded-[100px]': true,
                    'text-success-600 border-success-500 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c]':
                      transaction.status === 'Completed',
                    'text-info-600 border-info-500 bg-info-50 dark:bg-[#15203c] dark:border-[#15203c]':
                      transaction.status === 'Pending',
                    'text-danger-600 border-danger-500 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c]':
                      transaction.status === 'Failed',
                  }"
                >
                  {{ transaction.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pt-[13px] sm:flex sm:items-center justify-between">
        <p class="!mb-0 text-xs">
          Showing {{ showingStart }}-{{ showingEnd }} of
          {{ transactions.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              @click="prevPage"
              :class="{
                'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border transition-all': true,
                'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500':
                  currentPage > 1,
                'border-gray-300 dark:border-gray-600 cursor-not-allowed opacity-50':
                  currentPage === 1,
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
            v-for="page in totalPages"
            :key="page"
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              @click="goToPage(page)"
              :class="{
                'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border': true,
                'border-primary-500 bg-primary-500 text-white':
                  page === currentPage,
                'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500':
                  page !== currentPage,
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
              :class="{
                'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border transition-all': true,
                'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500':
                  currentPage < totalPages,
                'border-gray-300 dark:border-gray-600 cursor-not-allowed opacity-50':
                  currentPage === totalPages,
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
import { defineComponent, ref, computed } from "vue";
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

interface Transaction {
  id: number;
  client: string;
  email: string;
  amount: number;
  paymentMethod: string;
  paymentMethodImage: string;
  status: "Completed" | "Pending" | "Failed";
  userImage: string;
  date: Date;
}

export default defineComponent({
  name: "LatestTransactions",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    // Table headers
    const headers = ["Client", "Email", "Amount", "Payment Method", "Status"];

    // Sample transaction data
    const transactions = ref<Transaction[]>([
      {
        id: 1,
        client: "Johhna Loren",
        email: "loren123@gmail.com",
        amount: 6240,
        paymentMethod: "Paypal",
        paymentMethodImage: paypalIcon,
        status: "Completed",
        userImage: image1,
        date: new Date(2023, 5, 15),
      },
      {
        id: 2,
        client: "Skyler Queen",
        email: "skyqueen@gmail.com",
        amount: 5135,
        paymentMethod: "Wise",
        paymentMethodImage: wiseIcon,
        status: "Pending",
        userImage: image2,
        date: new Date(2023, 5, 14),
      },
      {
        id: 3,
        client: "Jonathon Watson",
        email: "jona2134@gmail.com",
        amount: 4321,
        paymentMethod: "Bank",
        paymentMethodImage: bankIcon,
        status: "Failed",
        userImage: image3,
        date: new Date(2023, 5, 13),
      },
      {
        id: 4,
        client: "Walter White",
        email: "puzzleworld@gmail.com",
        amount: 3124,
        paymentMethod: "Paypal",
        paymentMethodImage: paypalIcon,
        status: "Completed",
        userImage: image4,
        date: new Date(2023, 5, 12),
      },
      {
        id: 5,
        client: "David Carlen",
        email: "liveslong@gmail.com",
        amount: 2137,
        paymentMethod: "Skrill",
        paymentMethodImage: skrillIcon,
        status: "Pending",
        userImage: image5,
        date: new Date(2023, 5, 11),
      },
      {
        id: 6,
        client: "Sarah Johnson",
        email: "sarahj@gmail.com",
        amount: 3456,
        paymentMethod: "Paypal",
        paymentMethodImage: paypalIcon,
        status: "Completed",
        userImage: image3,
        date: new Date(2023, 5, 10),
      },
      {
        id: 7,
        client: "Michael Brown",
        email: "michaelb@example.com",
        amount: 2789,
        paymentMethod: "Bank",
        paymentMethodImage: bankIcon,
        status: "Completed",
        userImage: image5,
        date: new Date(2023, 5, 9),
      },
      {
        id: 8,
        client: "Emily Davis",
        email: "emilyd@example.com",
        amount: 4123,
        paymentMethod: "Wise",
        paymentMethodImage: wiseIcon,
        status: "Pending",
        userImage: image4,
        date: new Date(2023, 5, 8),
      },
      {
        id: 9,
        client: "Jonathon Watson",
        email: "jona2134@gmail.com",
        amount: 4321,
        paymentMethod: "Bank",
        paymentMethodImage: bankIcon,
        status: "Failed",
        userImage: image1,
        date: new Date(2023, 5, 13),
      },
      {
        id: 10,
        client: "Walter White",
        email: "puzzleworld@gmail.com",
        amount: 3124,
        paymentMethod: "Paypal",
        paymentMethodImage: paypalIcon,
        status: "Completed",
        userImage: image2,
        date: new Date(2023, 5, 12),
      },
    ]);

    // Pagination
    const itemsPerPage = 5;
    const currentPage = ref(1);

    const totalPages = computed(() => {
      return Math.ceil(transactions.value.length / itemsPerPage);
    });

    const paginatedTransactions = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return transactions.value.slice(start, end);
    });

    const showingStart = computed(() => {
      return (currentPage.value - 1) * itemsPerPage + 1;
    });

    const showingEnd = computed(() => {
      const end = currentPage.value * itemsPerPage;
      return end > transactions.value.length ? transactions.value.length : end;
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

    return {
      isActive,
      toggleActive,
      headers,
      transactions,
      paginatedTransactions,
      currentPage,
      totalPages,
      showingStart,
      showingEnd,
      goToPage,
      prevPage,
      nextPage,
    };
  },
});
</script>
