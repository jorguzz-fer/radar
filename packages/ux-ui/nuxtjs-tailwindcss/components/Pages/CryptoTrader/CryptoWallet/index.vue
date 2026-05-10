<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <form class="relative sm:w-[265px]">
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2"
          >
            <i class="material-symbols-outlined !text-[20px]">search</i>
          </label>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
            @input="filterWallets"
          />
        </form>
      </div>
      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <button
          type="button"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          @click="showAddPopup = true"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add Wallet
          </span>
        </button>
      </div>
    </div>
    <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Name
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Address
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Crypto Asset
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Balance
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Last Transaction Date
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="wallet in paginatedWallets" :key="wallet.address">
              <td
                class="text-primary-500 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ wallet.name }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ wallet.address }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="w-[22px]">
                    <img alt="cryptocurrency-image" :src="wallet.icon" />
                  </div>
                  <span class="block font-medium ltr:ml-[8px] rtl:mr-[8px]">
                    {{ wallet.cryptoAsset }}
                    <span
                      class="text-gray-500 dark:text-gray-400 text-xs font-normal"
                      >({{ wallet.cryptoSymbol }})</span
                    >
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ wallet.balance }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ wallet.lastTransactionDate }}
              </td>
              <td
                :class="[
                  wallet.status === 'Active'
                    ? 'text-success-600'
                    : 'text-danger-600',
                  'ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]',
                ]"
              >
                {{ wallet.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="px-[20px] md:px-[25px] pt-[15px] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ paginatedWallets.length }} of
          {{ filteredWallets.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              :disabled="currentPage === 1"
              @click="currentPage--"
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
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border transition-all"
              :class="[
                page === currentPage
                  ? 'border-primary-500 bg-primary-500 text-white'
                  : 'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500',
              ]"
              @click="currentPage = page"
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
              :disabled="currentPage === totalPages"
              @click="currentPage++"
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

  <div
    class="add-new-popup z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px]"
    :class="{ active: showAddPopup }"
  >
    <div
      class="popup-dialog flex transition-all max-w-[550px] min-h-full items-center mx-auto"
    >
      <div
        class="trezo-card w-full bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
      >
        <div
          class="trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md"
        >
          <div class="trezo-card-title">
            <h5 class="!mb-0">Add New Wallet</h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              type="button"
              class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
              @click="showAddPopup = false"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>
        <div class="trezo-card-content">
          <form @submit.prevent="addWallet">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px] md:gap-[25px]"
            >
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Wallet Name
                </label>
                <input
                  v-model="newWallet.name"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Wallet Name"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Wallet Address
                </label>
                <input
                  v-model="newWallet.address"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Wallet Address"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Crypto Asset
                </label>
                <input
                  v-model="newWallet.cryptoAsset"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Crypto Asset"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Balance
                </label>
                <input
                  v-model="newWallet.balance"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Balance"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Last Transaction Date
                </label>
                <input
                  v-model="newWallet.lastTransactionDate"
                  type="date"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Status
                </label>
                <select
                  v-model="newWallet.status"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                  required
                >
                  <option value="" disabled>Select</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
              <button
                type="button"
                class="rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[12px] bg-danger-500 text-white hover:bg-danger-400"
                @click="showAddPopup = false"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="inline-block bg-primary-500 text-white py-[12px] px-[26.5px] transition-all rounded-md hover:bg-primary-400"
              >
                <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
                  >
                    add
                  </i>
                  Create
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "@/assets/images/cryptocurrencies/bitcoin.svg";
import image2 from "@/assets/images/cryptocurrencies/ethereum.svg";
import image3 from "@/assets/images/cryptocurrencies/binance.svg";
import image4 from "@/assets/images/cryptocurrencies/tether.svg";
import image5 from "@/assets/images/cryptocurrencies/xrp.svg";
import image6 from "@/assets/images/cryptocurrencies/solana.svg";
import image7 from "@/assets/images/cryptocurrencies/usdc.png";
import image8 from "@/assets/images/cryptocurrencies/tron.png";
import image9 from "@/assets/images/cryptocurrencies/cardano.png";
import image10 from "@/assets/images/cryptocurrencies/toncoin.png";
import image11 from "@/assets/images/cryptocurrencies/dogecoin.png";

export default defineComponent({
  name: "CryptoWallet",
  setup() {
    const wallets = ref([
      {
        name: "BTC Wallet",
        address: "3FZasd93cpjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Bitcoin",
        cryptoSymbol: "BTC",
        icon: image1,
        balance: "0.25 BTC",
        lastTransactionDate: "2025-10-01",
        status: "Active",
      },
      {
        name: "ETH Wallet",
        address: "0x32Be343pjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Ethereum",
        cryptoSymbol: "ETH",
        icon: image2,
        balance: "5.2 ETH",
        lastTransactionDate: "2025-10-02",
        status: "Active",
      },
      {
        name: "BNB Wallet",
        address: "DdzFFzCqrh3cpjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Binance",
        cryptoSymbol: "BNB",
        icon: image3,
        balance: "1000 BNB",
        lastTransactionDate: "2025-10-03",
        status: "Active",
      },
      {
        name: "USDT Wallet",
        address: "Dsbeompjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Tether",
        cryptoSymbol: "USDT",
        icon: image4,
        balance: "2500 USDT",
        lastTransactionDate: "2025-10-04",
        status: "Active",
      },
      {
        name: "XRP Wallet",
        address: "4pN1bycd93cpjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "XRP",
        cryptoSymbol: "XRP",
        icon: image5,
        balance: "15 XRP",
        lastTransactionDate: "2025-10-05",
        status: "Active",
      },
      {
        name: "SOL Wallet",
        address: "LZjTAtMjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Solana",
        cryptoSymbol: "SOL",
        icon: image6,
        balance: "12 SOL",
        lastTransactionDate: "2025-10-06",
        status: "Active",
      },
      {
        name: "USDC Wallet",
        address: "3FZasd93cpjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "USDC",
        cryptoSymbol: "USDC",
        icon: image7,
        balance: "0.5 USDC",
        lastTransactionDate: "2025-10-07",
        status: "Active",
      },
      {
        name: "TRX Wallet",
        address: "3FZbc3cpjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Tron",
        cryptoSymbol: "TRX",
        icon: image8,
        balance: "1500 TRX",
        lastTransactionDate: "2025-10-08",
        status: "Inactive",
      },
      {
        name: "Cardano Wallet",
        address: "1FZbt93cpjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Avalanche",
        cryptoSymbol: "ADA",
        icon: image9,
        balance: "100 ADA",
        lastTransactionDate: "2025-10-09",
        status: "Active",
      },
      {
        name: "Toncoin Wallet",
        address: "16cbfe2pjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Toncoin",
        cryptoSymbol: "ton",
        icon: image10,
        balance: "5000 ton",
        lastTransactionDate: "2025-10-10",
        status: "Active",
      },
      {
        name: "Dogecoin Wallet",
        address: "16cbfe2pjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Chainlink",
        cryptoSymbol: "doge",
        icon: image11,
        balance: "5000 LINK",
        lastTransactionDate: "2025-10-10",
        status: "Active",
      },
      {
        name: "USDC Wallet",
        address: "3FZasd93cpjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "USDC",
        cryptoSymbol: "USDC",
        icon: image7,
        balance: "0.5 USDC",
        lastTransactionDate: "2025-10-07",
        status: "Active",
      },
      {
        name: "TRX Wallet",
        address: "3FZbc3cpjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Tron",
        cryptoSymbol: "TRX",
        icon: image8,
        balance: "1500 TRX",
        lastTransactionDate: "2025-10-08",
        status: "Inactive",
      },
      {
        name: "Cardano Wallet",
        address: "1FZbt93cpjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Avalanche",
        cryptoSymbol: "ADA",
        icon: image9,
        balance: "100 ADA",
        lastTransactionDate: "2025-10-09",
        status: "Active",
      },
      {
        name: "BTC Wallet",
        address: "3FZasd93cpjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Bitcoin",
        cryptoSymbol: "BTC",
        icon: image1,
        balance: "0.25 BTC",
        lastTransactionDate: "2025-10-01",
        status: "Active",
      },
      {
        name: "ETH Wallet",
        address: "0x32Be343pjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Ethereum",
        cryptoSymbol: "ETH",
        icon: image2,
        balance: "5.2 ETH",
        lastTransactionDate: "2025-10-02",
        status: "Active",
      },
      {
        name: "BNB Wallet",
        address: "DdzFFzCqrh3cpjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Binance",
        cryptoSymbol: "BNB",
        icon: image3,
        balance: "1000 BNB",
        lastTransactionDate: "2025-10-03",
        status: "Active",
      },
      {
        name: "USDT Wallet",
        address: "Dsbeompjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Tether",
        cryptoSymbol: "USDT",
        icon: image4,
        balance: "2500 USDT",
        lastTransactionDate: "2025-10-04",
        status: "Active",
      },
      {
        name: "XRP Wallet",
        address: "4pN1bycd93cpjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "XRP",
        cryptoSymbol: "XRP",
        icon: image5,
        balance: "15 XRP",
        lastTransactionDate: "2025-10-05",
        status: "Active",
      },
      {
        name: "SOL Wallet",
        address: "LZjTAtMjq2LkjuV5qJHunfnkLtktZc4",
        cryptoAsset: "Solana",
        cryptoSymbol: "SOL",
        icon: image6,
        balance: "12 SOL",
        lastTransactionDate: "2025-10-06",
        status: "Active",
      },
    ]);

    // State for search, pagination, and popup
    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const showAddPopup = ref(false);

    // State for new wallet form
    const newWallet = ref({
      name: "",
      address: "",
      cryptoAsset: "",
      cryptoSymbol: "",
      icon: "",
      balance: "",
      lastTransactionDate: "",
      status: "",
    });

    // Computed property for filtered wallets
    const filteredWallets = computed(() => {
      if (!searchQuery.value) return wallets.value;
      const query = searchQuery.value.toLowerCase();
      return wallets.value.filter(
        (wallet: { name: string; cryptoAsset: string; address: string }) =>
          wallet.name.toLowerCase().includes(query) ||
          wallet.cryptoAsset.toLowerCase().includes(query) ||
          wallet.address.toLowerCase().includes(query)
      );
    });

    // Computed property for paginated wallets
    const paginatedWallets = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredWallets.value.slice(start, end);
    });

    // Computed property for total pages
    const totalPages = computed(() =>
      Math.ceil(filteredWallets.value.length / itemsPerPage.value)
    );

    // Filter wallets based on search input
    const filterWallets = () => {
      currentPage.value = 1; // Reset to first page on search
    };

    // Add new wallet
    const addWallet = () => {
      // Derive cryptoSymbol from cryptoAsset (simplified logic)
      const cryptoSymbol = newWallet.value.cryptoAsset
        .toUpperCase()
        .slice(0, 4);
      // Mock icon path (replace with actual logic to map asset to icon)
      const icon = `@/assets/images/cryptocurrencies/${newWallet.value.cryptoAsset.toLowerCase()}.svg`;

      wallets.value.push({
        ...newWallet.value,
        cryptoSymbol,
        icon,
      });

      // Reset form and close popup
      newWallet.value = {
        name: "",
        address: "",
        cryptoAsset: "",
        cryptoSymbol: "",
        icon: "",
        balance: "",
        lastTransactionDate: "",
        status: "",
      };
      showAddPopup.value = false;
    };

    return {
      wallets,
      searchQuery,
      currentPage,
      itemsPerPage,
      showAddPopup,
      newWallet,
      filteredWallets,
      paginatedWallets,
      totalPages,
      filterWallets,
      addWallet,
    };
  },
});
</script>
