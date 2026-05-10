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
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:intendentpr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
      </div>

      <div
        class="trezo-card-subtitle flex items-center gap-[15px] mt-[15px] sm:mt-0"
      >
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
            Add Crypto
          </span>
        </button>

        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
              active: isTimeRangeActive,
            }"
            id="dropdownToggleBtn"
            @click.stop="toggleTimeRange"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              {{ selectedTimeRange }}
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
              ></i>
            </span>
          </button>
          <ul
            v-show="isTimeRangeActive"
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
            role="menu"
          >
            <li v-for="range in timeRanges" :key="range">
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                @click="changeTimeRange(range)"
              >
                {{ range }}
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
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Name
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Price
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                1h %
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                24h %
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                7d %
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Market Cap
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Volume (24h)
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Last 7 Days
              </th>
            </tr>
          </thead>

          <tbody class="text-black dark:text-white">
            <tr v-for="crypto in paginatedCryptos" :key="crypto.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="w-[22px]">
                    <img
                      :alt="`${crypto.name}-image`"
                      :src="getCryptoImage(crypto)"
                    />
                  </div>
                  <span class="block font-medium ltr:ml-[8px] rtl:mr-[8px]">
                    {{ crypto.name }}
                    <span
                      class="text-gray-500 dark:text-gray-400 text-xs font-normal"
                      >({{ crypto.symbol.toUpperCase() }})</span
                    >
                  </span>
                </div>
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ formatCurrency(crypto.current_price) }}
              </td>
              <td
                :class="[
                  'ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] border-b border-gray-100 dark:border-[#172036]',
                  getChangeClass(crypto.price_change_percentage_1h),
                ]"
              >
                {{ formatPercentage(crypto.price_change_percentage_1h) }}
              </td>
              <td
                :class="[
                  'ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] border-b border-gray-100 dark:border-[#172036]',
                  getChangeClass(crypto.price_change_percentage_24h),
                ]"
              >
                {{ formatPercentage(crypto.price_change_percentage_24h) }}
              </td>
              <td
                :class="[
                  'ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] border-b border-gray-100 dark:border-[#172036]',
                  getChangeClass(crypto.price_change_percentage_7d),
                ]"
              >
                {{ formatPercentage(crypto.price_change_percentage_7d) }}
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ formatCurrency(crypto.market_cap) }}
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ formatCurrency(crypto.total_volume) }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] border-b border-gray-100 dark:border-[#172036]"
              >
                <apexchart
                  v-if="isClient"
                  type="line"
                  height="50"
                  width="112"
                  :options="getChartOptions(crypto)"
                  :series="getChartSeries(crypto)"
                ></apexchart>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="px-[20px] md:px-[25px] pt-[15px] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ showingRange }} of {{ cryptos.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              :disabled="currentPage === 1"
              @click="prevPage"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous page"
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
              :class="[
                'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border transition-all',
                currentPage === page
                  ? 'border-primary-500 bg-primary-500 text-white'
                  : 'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500',
              ]"
              :aria-current="currentPage === page ? 'page' : undefined"
              :aria-label="`Go to page ${page}`"
            >
              {{ page }}
            </button>
          </li>
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              :disabled="currentPage === totalPages"
              @click="nextPage"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next page"
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
    :class="{
      '': !showAddPopup,
      active: showAddPopup,
    }"
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
            <h5 class="!mb-0">Add New Crypto</h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              type="button"
              class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
              @click="closePopup"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>

        <div class="trezo-card-content">
          <form @submit.prevent="addNewCrypto">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px] md:gap-[25px]"
            >
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Name
                </label>
                <input
                  v-model="newCrypto.name"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Symbol
                </label>
                <input
                  v-model="newCrypto.symbol"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Symbol (e.g., BTC)"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Price
                </label>
                <input
                  v-model.number="newCrypto.current_price"
                  type="number"
                  step="0.01"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Price"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  1h %
                </label>
                <input
                  v-model.number="newCrypto.price_change_percentage_1h"
                  type="number"
                  step="0.01"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter 1h %"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  24h %
                </label>
                <input
                  v-model.number="newCrypto.price_change_percentage_24h"
                  type="number"
                  step="0.01"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter 24h %"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  7d %
                </label>
                <input
                  v-model.number="newCrypto.price_change_percentage_7d"
                  type="number"
                  step="0.01"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter 7d %"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Market Cap
                </label>
                <input
                  v-model.number="newCrypto.market_cap"
                  type="number"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Market Cap"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Volume (24h)
                </label>
                <input
                  v-model.number="newCrypto.total_volume"
                  type="number"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Volume (24h)"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Chart Value
                </label>
                <input
                  v-model.number="newCrypto.sparkline_data"
                  type="number"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Volume (24h)"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Image
                </label>
                <div id="fileUploader">
                  <div
                    class="relative flex items-center justify-center overflow-hidden rounded-md py-[48px] px-[20px] border border-gray-200 dark:border-[#172036]"
                  >
                    <div class="flex items-center justify-center">
                      <div
                        class="w-[35px] h-[35px] border border-gray-100 dark:border-[#15203c] flex items-center justify-center rounded-md text-primary-500 text-lg ltr:mr-[12px] rtl:ml-[12px]"
                      >
                        <i class="ri-upload-2-line"></i>
                      </div>
                      <p class="!leading-[1.5]">
                        <strong class="text-black dark:text-white">
                          Click to upload
                        </strong>
                        <br />
                        your file here
                      </p>
                    </div>
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
                      @change="handleFileUpload"
                    />
                  </div>
                  <p v-if="newCrypto.image" class="mt-2 text-sm">
                    Selected:
                    {{
                      typeof newCrypto.image === "object" &&
                      "name" in newCrypto.image
                        ? newCrypto.image.name
                        : ""
                    }}
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
              <button
                type="button"
                class="rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[12px] bg-danger-500 text-white hover:bg-danger-400"
                @click="closePopup"
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
import { defineComponent, ref, computed, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

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

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  image: string | File;
  current_price: number;
  price_change_percentage_1h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  market_cap: number;
  total_volume: number;
  sparkline_data: number[];
}

export default defineComponent({
  name: "GainersLosers",
  setup() {
    const { isActive: isTimeRangeActive, toggleActive: toggleTimeRange } =
      useClickOutside("dropdownToggleBtn");
    const showAddPopup = ref(false);
    const isClient = ref(false);
    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const selectedTimeRange = ref("24h");
    const timeRanges = ref(["24h", "48h", "72h"]);

    const newCrypto = ref<Partial<Crypto>>({
      name: "",
      symbol: "",
      current_price: 0,
      price_change_percentage_1h: 0,
      price_change_percentage_24h: 0,
      price_change_percentage_7d: 0,
      market_cap: 0,
      total_volume: 0,
      image: image1,
      sparkline_data: [],
    });

    const cryptos = ref<Crypto[]>([
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        image: image1,
        current_price: 85818.27,
        price_change_percentage_1h: 0.47,
        price_change_percentage_24h: 2.65,
        price_change_percentage_7d: 3.01,
        market_cap: 1702262413645,
        total_volume: 37182010584,
        sparkline_data: [82000, 83000, 84000, 85000, 86000, 85800, 85818.27],
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        image: image2,
        current_price: 1993.88,
        price_change_percentage_1h: -1.03,
        price_change_percentage_24h: 2.44,
        price_change_percentage_7d: 5.59,
        market_cap: 240652882527,
        total_volume: 19913301026,
        sparkline_data: [1900, 1920, 195, 78, 1950, 1970, 1993.88],
      },
      {
        id: "binancecoin",
        name: "Binance",
        symbol: "BNB",
        image: image3,
        current_price: 628.38,
        price_change_percentage_1h: 0.16,
        price_change_percentage_24h: -7.75,
        price_change_percentage_7d: 10.25,
        market_cap: 145187520169,
        total_volume: 10614863319,
        sparkline_data: [580, 600, 620, 610, 630, 625, 628.38],
      },
      {
        id: "tether",
        name: "Tether",
        symbol: "USDT",
        image: image4,
        current_price: 1.0,
        price_change_percentage_1h: 0.01,
        price_change_percentage_24h: 0.04,
        price_change_percentage_7d: -0.01,
        market_cap: 143685783527,
        total_volume: 78972924872,
        sparkline_data: [10.0, 9.95, 9.9, 9.88, 9.87, 9.86, 9.87],
      },
      {
        id: "xrp",
        name: "XRP",
        symbol: "XRP",
        image: image5,
        current_price: 628.38,
        price_change_percentage_1h: 0.96,
        price_change_percentage_24h: 2.38,
        price_change_percentage_7d: 8.31,
        market_cap: 89534085091,
        total_volume: 2236753285,
        sparkline_data: [580, 590, 600, 610, 620, 625, 628.38],
      },
      {
        id: "solana",
        name: "Solana",
        symbol: "SOL",
        image: image6,
        current_price: 132.46,
        price_change_percentage_1h: 1.45,
        price_change_percentage_24h: 4.79,
        price_change_percentage_7d: 4.31,
        market_cap: 67541375453,
        total_volume: 3658703755,
        sparkline_data: [125, 128, 130, 132, 131, 132, 132.46],
      },
      {
        id: "usd-coin",
        name: "USDC",
        symbol: "USDC",
        image: image7,
        current_price: 0.9999,
        price_change_percentage_1h: -0.01,
        price_change_percentage_24h: -0.01,
        price_change_percentage_7d: -0.01,
        market_cap: 59247883103,
        total_volume: 12917680329,
        sparkline_data: [14.8, 14.6, 14.5, 14.4, 14.45, 14.42, 14.43],
      },
      {
        id: "tron",
        name: "Tron",
        symbol: "TRX",
        image: image8,
        current_price: 0.7263,
        price_change_percentage_1h: 1.03,
        price_change_percentage_24h: 1.45,
        price_change_percentage_7d: 0.45,
        market_cap: 25577902356,
        total_volume: 1121882828,
        sparkline_data: [0.71, 0.72, 0.725, 0.72, 0.726, 0.724, 0.7263],
      },
      {
        id: "cardano",
        name: "Cardano",
        symbol: "ADA",
        image: image9,
        current_price: 0.485,
        price_change_percentage_1h: 0.82,
        price_change_percentage_24h: 3.19,
        price_change_percentage_7d: 6.78,
        market_cap: 17324567890,
        total_volume: 987654321,
        sparkline_data: [0.45, 0.46, 0.47, 0.48, 0.485, 0.482, 0.485],
      },
      {
        id: "chainlink",
        name: "Chainlink",
        symbol: "LINK",
        image: image10,
        current_price: 14.43,
        price_change_percentage_1h: 2.46,
        price_change_percentage_24h: 61.89,
        price_change_percentage_7d: -2.37,
        market_cap: 6765015406,
        total_volume: 342511153,
        sparkline_data: [14.8, 14.6, 14.5, 14.4, 14.45, 14.42, 14.43],
      },
      {
        id: "polkadot",
        name: "Polkadot",
        symbol: "DOT",
        image: image11,
        current_price: 7.12,
        price_change_percentage_1h: -0.56,
        price_change_percentage_24h: 1.87,
        price_change_percentage_7d: 2.45,
        market_cap: 10234567890,
        total_volume: 456789123,
        sparkline_data: [6.9, 7.0, 7.05, 7.1, 7.12, 7.11, 7.12],
      },
      {
        id: "tether",
        name: "Tether",
        symbol: "usdt",
        image: image4,
        current_price: 0.923,
        price_change_percentage_1h: 0.34,
        price_change_percentage_24h: -1.56,
        price_change_percentage_7d: 4.12,
        market_cap: 8567891234,
        total_volume: 345678912,
        sparkline_data: [10.0, 9.95, 9.9, 9.88, 9.87, 9.86, 9.87],
      },
      {
        id: "xrp",
        name: "XRP",
        symbol: "XRP",
        image: image5,
        current_price: 9.87,
        price_change_percentage_1h: 1.23,
        price_change_percentage_24h: 2.98,
        price_change_percentage_7d: -1.89,
        market_cap: 3876543210,
        total_volume: 234567890,
        sparkline_data: [10.0, 9.95, 9.9, 9.88, 9.87, 9.86, 9.87],
      },
      {
        id: "solana",
        name: "Solana",
        symbol: "SOL",
        image: image6,
        current_price: 0.234,
        price_change_percentage_1h: 0.67,
        price_change_percentage_24h: 0.89,
        price_change_percentage_7d: 3.54,
        market_cap: 1876543210,
        total_volume: 123456789,
        sparkline_data: [0.225, 0.228, 0.23, 0.232, 0.233, 0.234, 0.234],
      },
    ]);

    const filteredCryptos = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return cryptos.value.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(query) ||
          crypto.symbol.toLowerCase().includes(query)
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredCryptos.value.length / itemsPerPage.value)
    );

    const paginatedCryptos = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredCryptos.value.slice(start, end);
    });

    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage.value,
        filteredCryptos.value.length
      );
      return `${start}-${end}`;
    });

    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    };

    const formatPercentage = (value: number) => {
      return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
    };

    const getChangeClass = (value: number) => {
      return value >= 0 ? "text-success-600" : "text-danger-600";
    };

    const getChartOptions = (crypto: Crypto) => {
      return {
        chart: {
          type: "line",
          height: 50,
          width: 112,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "monotoneCubic",
          width: 1,
        },
        colors: [
          crypto.price_change_percentage_7d >= 0 ? "#25b003" : "#ff3f23",
        ],
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          marker: {
            show: false,
          },
        },
      };
    };

    const getChartSeries = (crypto: Crypto) => {
      return [
        {
          name: "Price",
          data: crypto.sparkline_data,
        },
      ];
    };

    const changeTimeRange = (range: string) => {
      selectedTimeRange.value = range;
      currentPage.value = 1;
      cryptos.value = cryptos.value.map((crypto) => {
        let price_change_percentage_24h = crypto.price_change_percentage_24h;
        if (range === "48h") {
          price_change_percentage_24h = price_change_percentage_24h * 2;
        } else if (range === "72h") {
          price_change_percentage_24h = price_change_percentage_24h * 3;
        }
        return {
          ...crypto,
          price_change_percentage_24h,
        };
      });
      toggleTimeRange();
    };

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

    const handleFileUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        newCrypto.value.image = input.files[0];
      }
    };

    const getCryptoImage = (crypto: Crypto) => {
      return typeof crypto.image === "string"
        ? crypto.image
        : URL.createObjectURL(crypto.image);
    };

    const addNewCrypto = () => {
      if (!validateForm()) {
        alert("Please fill all required fields correctly.");
        return;
      }

      const crypto: Crypto = {
        id: newCrypto.value.name!.toLowerCase().replace(/\s/g, "-"),
        name: newCrypto.value.name!,
        symbol: newCrypto.value.symbol!.toUpperCase(),
        image:
          newCrypto.value.image instanceof File
            ? URL.createObjectURL(newCrypto.value.image)
            : newCrypto.value.image || image1, // Fallback to a default image
        current_price: newCrypto.value.current_price!,
        price_change_percentage_1h: newCrypto.value.price_change_percentage_1h!,
        price_change_percentage_24h:
          newCrypto.value.price_change_percentage_24h!,
        price_change_percentage_7d: newCrypto.value.price_change_percentage_7d!,
        market_cap: newCrypto.value.market_cap!,
        total_volume: newCrypto.value.total_volume!,
        sparkline_data: generateSparklineData(newCrypto.value.current_price!),
      };

      cryptos.value.unshift(crypto);
      resetForm();
    };

    const openAddPopup = () => {
      showAddPopup.value = true;
    };

    const closePopup = () => {
      showAddPopup.value = false;
      resetForm();
    };

    const validateForm = () => {
      return (
        newCrypto.value.name &&
        newCrypto.value.symbol &&
        newCrypto.value.current_price != null &&
        newCrypto.value.price_change_percentage_1h != null &&
        newCrypto.value.price_change_percentage_24h != null &&
        newCrypto.value.price_change_percentage_7d != null &&
        newCrypto.value.market_cap != null &&
        newCrypto.value.total_volume != null &&
        newCrypto.value.sparkline_data != null
      );
    };

    const generateSparklineData = (currentPrice: number): number[] => {
      // Generate simple sparkline data based on current price
      const data = [];
      for (let i = 6; i >= 0; i--) {
        const variation = (Math.random() - 0.5) * currentPrice * 0.05; // ±5% variation
        data.push(Number((currentPrice + variation).toFixed(2)));
      }
      return data;
    };

    const resetForm = () => {
      newCrypto.value = {
        name: "",
        symbol: "",
        current_price: 0,
        price_change_percentage_1h: 0,
        price_change_percentage_24h: 0,
        price_change_percentage_7d: 0,
        market_cap: 0,
        total_volume: 0,
        image: image1,
      };
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      showAddPopup,
      openAddPopup,
      closePopup,
      isTimeRangeActive,
      toggleTimeRange,
      isClient,
      searchQuery,
      cryptos,
      paginatedCryptos,
      currentPage,
      totalPages,
      showingRange,
      selectedTimeRange,
      timeRanges,
      newCrypto,
      formatCurrency,
      formatPercentage,
      getChangeClass,
      getChartOptions,
      getChartSeries,
      changeTimeRange,
      goToPage,
      prevPage,
      nextPage,
      handleFileUpload,
      addNewCrypto,
      getCryptoImage,
    };
  },
});
</script>
