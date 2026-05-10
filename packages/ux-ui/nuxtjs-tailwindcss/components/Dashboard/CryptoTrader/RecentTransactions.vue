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
                :key="header.key"
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                {{ header.label }}
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr
              v-for="transaction in paginatedTransactions"
              :key="transaction.id"
            >
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ formatDate(transaction.date) }}
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ transaction.asset }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  :class="[
                    'inline-block py-[4px] px-[8px] rounded-[4px] text-xs font-medium',
                    transaction.type === 'buy'
                      ? 'bg-success-100 dark:bg-[#15203c] text-success-600'
                      : 'bg-danger-100 dark:bg-[#15203c] text-danger-600',
                  ]"
                >
                  {{ transaction.type === "buy" ? "Buy" : "Sell" }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ formatAmount(transaction.amount, transaction.asset) }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ formatCurrency(transaction.price) }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ formatCurrency(transaction.amount * transaction.price) }}
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  :class="[
                    'inline-block py-[4px] px-[8px] rounded-[4px] text-xs font-medium',
                    getStatusClass(transaction.status),
                  ]"
                >
                  {{ transaction.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="px-[20px] md:px-[25px] pt-[14px] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ showingRange }} of {{ transactions.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click="prevPage"
              :disabled="currentPage === 1"
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
              type="button"
              :class="[
                'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border',
                page === currentPage
                  ? 'border-primary-500 bg-primary-500 text-white'
                  : 'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500',
              ]"
              @click="goToPage(page)"
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
              @click="nextPage"
              :disabled="currentPage === totalPages"
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
import { useClickOutside } from "@/utils/useClickOutside";

type TransactionType = "buy" | "sell";
type TransactionStatus = "Done" | "Pending" | "Failed";

interface Transaction {
  id: string;
  date: Date;
  asset: string;
  type: TransactionType;
  amount: number;
  price: number;
  status: TransactionStatus;
}

export default defineComponent({
  name: "RecentTransactions",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const headers = [
      { key: "date", label: "Date" },
      { key: "asset", label: "Asset" },
      { key: "type", label: "Type" },
      { key: "amount", label: "Amount" },
      { key: "price", label: "Price" },
      { key: "total", label: "Total Value" },
      { key: "status", label: "Status" },
    ];

    const transactions = ref<Transaction[]>([
      {
        id: "1",
        date: new Date("2025-10-31"),
        asset: "Bitcoin",
        type: "buy",
        amount: 0.5,
        price: 34000,
        status: "Done",
      },
      {
        id: "2",
        date: new Date("2025-10-30"),
        asset: "Ethereum",
        type: "sell",
        amount: 2,
        price: 1800,
        status: "Done",
      },
      {
        id: "3",
        date: new Date("2025-10-29"),
        asset: "Tether",
        type: "buy",
        amount: 1750,
        price: 1,
        status: "Failed",
      },
      {
        id: "4",
        date: new Date("2025-10-28"),
        asset: "USD Coin",
        type: "sell",
        amount: 1150,
        price: 0.9999,
        status: "Done",
      },
      {
        id: "5",
        date: new Date("2025-10-27"),
        asset: "Cardano",
        type: "buy",
        amount: 5000,
        price: 0.07,
        status: "Pending",
      },
      {
        id: "6",
        date: new Date("2025-10-26"),
        asset: "Tron",
        type: "buy",
        amount: 142,
        price: 0.192391,
        status: "Failed",
      },
      {
        id: "7",
        date: new Date("2025-10-28"),
        asset: "USD Coin",
        type: "sell",
        amount: 1150,
        price: 0.9999,
        status: "Done",
      },
      {
        id: "8",
        date: new Date("2025-10-27"),
        asset: "Cardano",
        type: "buy",
        amount: 5000,
        price: 0.07,
        status: "Pending",
      },
      {
        id: "9",
        date: new Date("2025-10-26"),
        asset: "Tron",
        type: "buy",
        amount: 142,
        price: 0.192391,
        status: "Failed",
      },
      {
        id: "10",
        date: new Date("2025-10-31"),
        asset: "Bitcoin",
        type: "buy",
        amount: 0.5,
        price: 34000,
        status: "Done",
      },
      {
        id: "11",
        date: new Date("2025-10-30"),
        asset: "Ethereum",
        type: "sell",
        amount: 2,
        price: 1800,
        status: "Done",
      },
      {
        id: "12",
        date: new Date("2025-10-29"),
        asset: "Tether",
        type: "buy",
        amount: 1750,
        price: 1,
        status: "Failed",
      },
    ]);

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

    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage,
        transactions.value.length
      );
      return `${start}-${end}`;
    });

    const visiblePages = computed(() => {
      const maxVisible = 4;
      const pages = [];

      if (totalPages.value <= maxVisible) {
        for (let i = 1; i <= totalPages.value; i++) {
          pages.push(i);
        }
      } else {
        let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2));
        const end = Math.min(totalPages.value, start + maxVisible - 1);

        if (end - start + 1 < maxVisible) {
          start = end - maxVisible + 1;
        }

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
      }

      return pages;
    });

    const goToPage = (page: number) => {
      currentPage.value = page;
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

    // Formatting functions
    const formatDate = (date: Date) => {
      return date.toISOString().split("T")[0];
    };

    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    };

    const formatAmount = (amount: number, asset: string) => {
      if (["Tether", "USD Coin"].includes(asset)) {
        return formatCurrency(amount);
      }
      return `${amount} ${
        asset === "Bitcoin"
          ? "BTC"
          : asset === "Ethereum"
          ? "ETH"
          : asset === "Cardano"
          ? "ADA"
          : asset === "Tron"
          ? "TRX"
          : ""
      }`;
    };

    const getStatusClass = (status: TransactionStatus) => {
      switch (status) {
        case "Done":
          return "bg-success-100 dark:bg-[#15203c] text-success-600";
        case "Pending":
          return "bg-warning-50 dark:bg-[#15203c] text-warning-600";
        case "Failed":
          return "bg-danger-100 dark:bg-[#15203c] text-danger-600";
        default:
          return "";
      }
    };

    return {
      isActive,
      toggleActive,
      headers,
      transactions,
      paginatedTransactions,
      visiblePages,
      currentPage,
      totalPages,
      showingRange,
      goToPage,
      prevPage,
      nextPage,
      formatDate,
      formatCurrency,
      formatAmount,
      getStatusClass,
    };
  },
});
</script>
