<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Transactions History</h5>
      </div>

      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all text-[26px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <i class="ri-more-fill"></i>
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

    <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
      <div v-if="loading" class="p-4 text-center">
        <div
          class="animate-spin inline-block w-6 h-6 border-2 border-current border-t-transparent rounded-full"
        ></div>
      </div>

      <div v-else-if="error" class="p-4 text-center text-red-500">
        Error loading data: {{ error }}
      </div>

      <div v-else>
        <div class="table-responsive overflow-x-auto">
          <table class="w-full">
            <tbody class="text-black dark:text-white">
              <tr
                v-for="(transaction, index) in paginatedTransactions"
                :key="transaction.id"
                :class="{
                  'border-t-0 pt-0': index === 0,
                  'border-b-0 pb-0': index === paginatedTransactions.length - 1,
                }"
              >
                <td
                  class="text-[13px] ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11.8px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
                >
                  <div class="flex items-center">
                    <div class="w-[22px]">
                      <img
                        :alt="transaction.currency"
                        :src="transaction.image"
                        class="w-5 h-5"
                      />
                    </div>
                    <span class="block font-medium ltr:ml-[8px] rtl:mr-[8px]">
                      {{ getCurrencyName(transaction.currency) }}
                      <span
                        class="text-gray-500 dark:text-gray-400 text-xs font-normal"
                      >
                        ({{ transaction.currency }})
                      </span>
                    </span>
                  </div>
                </td>
                <td
                  class="text-center whitespace-nowrap px-[20px] py-[11.8px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
                >
                  <span
                    :class="{
                      'bg-success-100 dark:bg-[#15203c] text-success-600':
                        transaction.type === 'sold',
                      'bg-danger-100 dark:bg-[#15203c] text-danger-600':
                        transaction.type === 'withdraw',
                      'bg-info-100 dark:bg-[#15203c] text-info-600':
                        transaction.type === 'deposit',
                    }"
                    class="inline-block py-[2px] px-[8px] rounded-[4px] text-xs font-medium capitalize"
                  >
                    {{ transaction.type }}
                  </span>
                </td>
                <td
                  class="text-[13px] ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[11.8px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
                >
                  ${{ formatAmount(transaction.amount) }}
                  <!-- <span
                    v-if="transaction.fee"
                    class="text-gray-400 text-xs block"
                  >
                    Fee: ${{ formatAmount(transaction.fee) }}
                  </span> -->
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="px-[20px] md:px-[25px] pt-[12px] sm:flex sm:items-center justify-between"
        >
          <p class="!mb-0 text-sm">
            Showing {{ showingStart }}-{{ showingEnd }} of
            {{ filteredTransactions.length }} results
          </p>
          <ol class="mt-[10px] sm:mt-0 flex items-center">
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
                type="button"
                :class="{
                  'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500':
                    currentPage !== page,
                  'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-primary-500 bg-primary-500 text-white':
                    currentPage === page,
                }"
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
                >
                  chevron_right
                </i>
              </button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/cryptocurrencies/bitcoin.svg";
import image2 from "@/assets/images/cryptocurrencies/ethereum.svg";
import image3 from "@/assets/images/cryptocurrencies/binance.svg";
import image4 from "@/assets/images/cryptocurrencies/tether.svg";
import image5 from "@/assets/images/cryptocurrencies/xrp.svg";
import image6 from "@/assets/images/cryptocurrencies/solana.svg";
import image7 from "@/assets/images/cryptocurrencies/cardano.png";
import image8 from "@/assets/images/cryptocurrencies/tron.png";
import image9 from "@/assets/images/cryptocurrencies/toncoin.png";
import image10 from "@/assets/images/cryptocurrencies/dogecoin.png";

interface Transaction {
  id: string;
  image: string;
  currency: string;
  type: "sold" | "withdraw" | "deposit";
  amount: number;
  date: string;
  fee?: number;
}

export default defineComponent({
  name: "TransactionsHistory",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const loading = ref(true);
    const error = ref<string | null>(null);
    const currentPage = ref(1);
    const itemsPerPage = ref(5);
    const selectedPeriod = ref("30d");

    // Sample data - replace with API call in real implementation
    const transactions = ref<Transaction[]>([
      {
        id: "1",
        image: image1,
        currency: "BTC",
        type: "sold",
        amount: 68848.92,
        date: "2023-05-15",
        fee: 12.5,
      },
      {
        id: "2",
        image: image2,
        currency: "ETH",
        type: "withdraw",
        amount: 2565.77,
        date: "2023-05-14",
        fee: 5.2,
      },
      {
        id: "3",
        image: image3,
        currency: "BNB",
        type: "sold",
        amount: 2565.77,
        date: "2023-05-13",
      },
      {
        id: "4",
        image: image4,
        currency: "USDT",
        type: "sold",
        amount: 1.0,
        date: "2023-05-12",
        fee: 0.5,
      },
      {
        id: "5",
        image: image5,
        currency: "XRP",
        type: "withdraw",
        amount: 0.529105,
        date: "2023-05-11",
      },
      {
        id: "6",
        image: image6,
        currency: "SOL",
        type: "deposit",
        amount: 179.44,
        date: "2023-05-10",
      },
      {
        id: "7",
        image: image7,
        currency: "ADA",
        type: "sold",
        amount: 0.45,
        date: "2023-05-09",
      },
      {
        id: "8",
        image: image8,
        currency: "TRX",
        type: "withdraw",
        amount: 6.78,
        date: "2023-05-08",
      },
      {
        id: "9",
        image: image9,
        currency: "TON",
        type: "deposit",
        amount: 0.08,
        date: "2023-05-07",
      },
      {
        id: "10",
        image: image10,
        currency: "DOGE",
        type: "sold",
        amount: 85.32,
        date: "2023-05-06",
      },
    ]);

    const currencyNames: Record<string, string> = {
      BTC: "Bitcoin",
      ETH: "Ethereum",
      BNB: "Binance",
      USDT: "Tether",
      XRP: "XRP",
      SOL: "Solana",
      ADA: "Cardano",
      TRX: "TRON",
      TON: "Toncoin",
      DOGE: "Dogecoin",
    };

    const formatAmount = (amount: number) => {
      if (amount < 1) return amount.toFixed(6);
      if (amount < 1000) return amount.toFixed(2);
      return amount.toLocaleString("en-US", { maximumFractionDigits: 2 });
    };

    const getCurrencyName = (currency: string) => {
      return currencyNames[currency] || currency;
    };

    // Filter transactions based on selected period (simplified for demo)
    const filteredTransactions = computed(() => {
      return transactions.value; // In real app, filter by date based on selectedPeriod
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredTransactions.value.length / itemsPerPage.value);
    });

    const paginatedTransactions = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredTransactions.value.slice(start, end);
    });

    const showingStart = computed(() => {
      return (currentPage.value - 1) * itemsPerPage.value + 1;
    });

    const showingEnd = computed(() => {
      const end = currentPage.value * itemsPerPage.value;
      return end > filteredTransactions.value.length
        ? filteredTransactions.value.length
        : end;
    });

    const visiblePages = computed(() => {
      const pages = [];
      const maxVisible = 3; // Show max 3 page buttons

      let start = Math.max(1, currentPage.value - 1);
      let end = Math.min(totalPages.value, start + maxVisible - 1);

      // Adjust if we're at the end
      if (end - start < maxVisible - 1) {
        start = Math.max(1, end - maxVisible + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    });

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

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    // Simulate API loading
    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 800);
    });

    return {
      isActive,
      toggleActive,
      loading,
      error,
      currentPage,
      itemsPerPage,
      selectedPeriod,
      transactions,
      filteredTransactions,
      paginatedTransactions,
      showingStart,
      showingEnd,
      totalPages,
      visiblePages,
      formatAmount,
      getCurrencyName,
      prevPage,
      nextPage,
      goToPage,
    };
  },
});
</script>
