<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Recent Transactions</h5>
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
              Last 30 Days
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 md:mt-px"
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
                Last 7 Days
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Last 15 Days
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Last 30 Days
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                v-for="header in headers"
                :key="header"
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
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
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18.7px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ formatDate(transaction.date) }}
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18.7px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ transaction.description }}
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18.7px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ transaction.category }}
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18.7px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ formatCurrency(transaction.amount) }}
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18.7px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span :class="statusClasses(transaction.status)">
                  {{ transaction.status }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[18.7px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                  >
                    <i class="material-symbols-outlined !text-md">visibility</i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                  >
                    <i class="material-symbols-outlined !text-md">edit</i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    @click="deleteTransaction(transaction)"
                  >
                    <i class="material-symbols-outlined !text-md">delete</i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="px-[20px] md:px-[25px] pt-[15px] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ showingResults }} of {{ transactions.length }} results
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

interface Transaction {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  status: "Completed" | "Pending" | "Cancelled" | "Rejected";
}

export default defineComponent({
  name: "RecentTransactions",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const transactions = ref<Transaction[]>([
      {
        id: 1,
        date: "2025-04-30",
        description: "Starbucks Coffee",
        category: "Dining",
        amount: 500000,
        status: "Completed",
      },
      {
        id: 2,
        date: "2025-04-29",
        description: "Whole Foods",
        category: "Groceries",
        amount: 90.5,
        status: "Pending",
      },
      {
        id: 3,
        date: "2025-04-28",
        description: "Gas Station",
        category: "Transportation",
        amount: 15.0,
        status: "Cancelled",
      },
      {
        id: 4,
        date: "2025-04-27",
        description: "Electric Bill",
        category: "Utilities",
        amount: 150.0,
        status: "Completed",
      },
      {
        id: 5,
        date: "2025-04-26",
        description: "Spotify Subscription",
        category: "Entertainment",
        amount: 10.0,
        status: "Rejected",
      },
      {
        id: 6,
        date: "2025-04-25",
        description: "Football Ticket",
        category: "Sports",
        amount: 99.99,
        status: "Completed",
      },
      {
        id: 7,
        date: "2025-04-30",
        description: "Starbucks Coffee",
        category: "Dining",
        amount: 500000,
        status: "Completed",
      },
      {
        id: 8,
        date: "2025-04-29",
        description: "Whole Foods",
        category: "Groceries",
        amount: 90.5,
        status: "Pending",
      },
      {
        id: 9,
        date: "2025-04-28",
        description: "Gas Station",
        category: "Transportation",
        amount: 15.0,
        status: "Cancelled",
      },
      {
        id: 10,
        date: "2025-04-27",
        description: "Electric Bill",
        category: "Utilities",
        amount: 150.0,
        status: "Completed",
      },
      {
        id: 11,
        date: "2025-04-26",
        description: "Spotify Subscription",
        category: "Entertainment",
        amount: 10.0,
        status: "Rejected",
      },
      {
        id: 12,
        date: "2025-04-25",
        description: "Football Ticket",
        category: "Sports",
        amount: 99.99,
        status: "Completed",
      },
    ]);

    // Table headers
    const headers = [
      "Date",
      "Description",
      "Category",
      "Amount ($)",
      "Status",
      "Action",
    ];

    // Pagination
    const itemsPerPage = 6;
    const currentPage = ref(1);

    const totalPages = computed(() =>
      Math.ceil(transactions.value.length / itemsPerPage)
    );

    const paginatedTransactions = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return transactions.value.slice(start, end);
    });

    const showingResults = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage,
        transactions.value.length
      );
      return `${start}-${end}`;
    });

    const formatDate = (dateString: string) => {
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
      };
      return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
      }).format(amount);
    };

    const statusClasses = (status: string) => {
      const base =
        "inline-block text-xs font-medium py-px px-[10px] text-sm rounded-[100px] dark:bg-[#15203c] dark:border-[#15203c]";

      switch (status) {
        case "Completed":
          return `${base} text-success-600 border border-success-500 bg-success-100`;
        case "Pending":
          return `${base} text-info-600 border border-info-500 bg-info-50`;
        case "Cancelled":
          return `${base} text-orange-600 border border-orange-500 bg-orange-100`;
        case "Rejected":
          return `${base} text-danger-600 border border-danger-500 bg-danger-100`;
        default:
          return base;
      }
    };

    const deleteTransaction = (transaction: Transaction) => {
      console.log("Delete transaction:", transaction);
      // Implement delete logic
      transactions.value = transactions.value.filter(
        (t) => t.id !== transaction.id
      );
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    return {
      isActive,
      toggleActive,
      headers,
      transactions,
      paginatedTransactions,
      showingResults,
      currentPage,
      totalPages,
      formatDate,
      formatCurrency,
      statusClasses,
      deleteTransaction,
      goToPage,
      prevPage,
      nextPage,
    };
  },
});
</script>
