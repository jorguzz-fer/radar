<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Individual Asset Performance</h5>
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
              Last 7 Days
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 md:mt-px"
              ></i>
            </span>
          </button>

          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
            role="menu"
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
      <div class="table-responsive overflow-x-auto overflow-y-hidden">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Asset
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Allocation %
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                ROI
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Current Value
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Net Gain/Loss
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                1D Change
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                7D Change
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Sparkline
              </th>
            </tr>
          </thead>

          <tbody class="text-black dark:text-white">
            <tr v-for="asset in paginatedAssets" :key="asset.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[8px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="w-[22px]">
                    <img :alt="`${asset.name}-image`" :src="asset.image" />
                  </div>
                  <span class="block font-medium ltr:ml-[8px] rtl:mr-[8px]">
                    {{ asset.name }}
                    <span
                      class="text-gray-500 dark:text-gray-400 text-xs font-normal"
                      >({{ asset.symbol }})</span
                    >
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[8px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ asset.allocation }}%
              </td>
              <td
                :class="[
                  'ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[8px] border-b border-gray-100 dark:border-[#172036]',
                  getChangeClass(asset.roi),
                ]"
              >
                {{ formatPercentage(asset.roi) }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[8px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ formatCurrency(asset.currentValue) }}
              </td>
              <td
                :class="[
                  'ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[8px] border-b border-gray-100 dark:border-[#172036]',
                  getChangeClass(asset.netGain),
                ]"
              >
                {{ formatCurrency(asset.netGain) }}
              </td>
              <td
                :class="[
                  'ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[8px] border-b border-gray-100 dark:border-[#172036]',
                  getChangeClass(asset.oneDayChange),
                ]"
              >
                {{ formatPercentage(asset.oneDayChange) }}
              </td>
              <td
                :class="[
                  'ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[8px] border-b border-gray-100 dark:border-[#172036]',
                  getChangeClass(asset.sevenDayChange),
                ]"
              >
                {{ formatPercentage(asset.sevenDayChange) }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[8px] border-b border-gray-100 dark:border-[#172036]"
              >
                <apexchart
                  v-if="isClient"
                  type="line"
                  height="50"
                  width="112"
                  :options="getChartOptions(asset)"
                  :series="getChartSeries(asset)"
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
          Showing {{ showingRange }} of {{ assets.length }} results
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

interface Asset {
  id: string;
  name: string;
  symbol: string;
  image: string;
  allocation: number;
  roi: number;
  currentValue: number;
  netGain: number;
  oneDayChange: number;
  sevenDayChange: number;
  sparklineData: number[];
}

export default defineComponent({
  name: "IndividualAssetPerformance",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const isClient = ref(false);
    const currentPage = ref(1);
    const itemsPerPage = ref(5);
    const selectedTimeRange = ref("Last 30 Days");
    const timeRanges = ref([
      "Last 7 Days",
      "Last 15 Days",
      "Last 30 Days",
      "Last 90 Days",
    ]);

    // Sample data
    const assets = ref<Asset[]>([
      {
        id: "1",
        name: "Bitcoin",
        symbol: "BTC",
        image: image1,
        allocation: 35,
        roi: 120,
        currentValue: 35000,
        netGain: 15000,
        oneDayChange: 0.5,
        sevenDayChange: 3.0,
        sparklineData: [60, 40, 80, 70, 50, 90, 60, 85, 55, 75, 65, 95],
      },
      {
        id: "2",
        name: "Ethereum",
        symbol: "ETH",
        image: image2,
        allocation: 25,
        roi: 80,
        currentValue: 25000,
        netGain: 8000,
        oneDayChange: -1.0,
        sevenDayChange: 1.5,
        sparklineData: [50, 60, 40, 70, 50, 80, 60, 90, 70, 50, 60, 55],
      },
      {
        id: "3",
        name: "Binance",
        symbol: "BNB",
        image: image3,
        allocation: 15,
        roi: 30,
        currentValue: 7500,
        netGain: 1500,
        oneDayChange: -2.5,
        sevenDayChange: -5.0,
        sparklineData: [100, 90, 95, 60, 65, 40, 45, 20, 25, 20, 10, 0],
      },
      {
        id: "4",
        name: "Tether",
        symbol: "USDT",
        image: image4,
        allocation: 10,
        roi: 45,
        currentValue: 4500,
        netGain: 1000,
        oneDayChange: 0.2,
        sevenDayChange: 2.0,
        sparklineData: [45, 50, 40, 55, 50, 60, 55, 65, 60, 70, 65, 70],
      },
      {
        id: "5",
        name: "XRP",
        symbol: "XRP",
        image: image5,
        allocation: 5,
        roi: -10,
        currentValue: 3000,
        netGain: -1200,
        oneDayChange: 1.5,
        sevenDayChange: 4.5,
        sparklineData: [50, 60, 40, 70, 50, 80, 60, 90, 70, 50, 60, 55],
      },
      {
        id: "6",
        name: "Solana",
        symbol: "SOL",
        image: image6,
        allocation: 15,
        roi: 30,
        currentValue: 7500,
        netGain: 1500,
        oneDayChange: -2.5,
        sevenDayChange: -5.0,
        sparklineData: [100, 90, 95, 60, 65, 40, 45, 20, 25, 20, 10, 0],
      },
      {
        id: "7",
        name: "Cardano",
        symbol: "ADA",
        image: image7,
        allocation: 10,
        roi: 45,
        currentValue: 4500,
        netGain: 1000,
        oneDayChange: 0.2,
        sevenDayChange: 2.0,
        sparklineData: [45, 50, 40, 55, 50, 60, 55, 65, 60, 70, 65, 70],
      },
      {
        id: "8",
        name: "Tron",
        symbol: "TRX",
        image: image8,
        allocation: 15,
        roi: 30,
        currentValue: 7500,
        netGain: 1500,
        oneDayChange: -2.5,
        sevenDayChange: -5.0,
        sparklineData: [100, 90, 95, 60, 65, 40, 45, 20, 25, 20, 10, 0],
      },
      {
        id: "9",
        name: "Toncoin",
        symbol: "TON",
        image: image9,
        allocation: 10,
        roi: 45,
        currentValue: 4500,
        netGain: 1000,
        oneDayChange: 0.2,
        sevenDayChange: 2.0,
        sparklineData: [45, 50, 40, 55, 50, 60, 55, 65, 60, 70, 65, 70],
      },
      {
        id: "10",
        name: "Dogecoin",
        symbol: "DOGE",
        image: image10,
        allocation: 5,
        roi: 60,
        currentValue: 3000,
        netGain: 1200,
        oneDayChange: 1.5,
        sevenDayChange: 4.5,
        sparklineData: [50, 60, 40, 70, 50, 80, 60, 90, 70, 50, 60, 55],
      },
    ]);

    // Computed properties
    const totalPages = computed(() =>
      Math.ceil(assets.value.length / itemsPerPage.value)
    );
    const paginatedAssets = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return assets.value.slice(start, end);
    });
    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage.value,
        assets.value.length
      );
      return `${start}-${end}`;
    });

    // Methods
    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(value);
    };

    const formatPercentage = (value: number) => {
      return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
    };

    const getChangeClass = (value: number) => {
      return value >= 0 ? "text-success-600" : "text-danger-600";
    };

    const getChartOptions = (asset: Asset) => {
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
        colors: [asset.sevenDayChange >= 0 ? "#25b003" : "#ff3f23"],
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

    const getChartSeries = (asset: Asset) => {
      return [
        {
          name: "Price",
          data: asset.sparklineData,
        },
      ];
    };

    const changeTimeRange = (range: string) => {
      selectedTimeRange.value = range;
      currentPage.value = 1;
      // Mock API call or data update
      console.log(`Fetching data for ${range}`);
      toggleActive(); // Close dropdown after selection
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

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isActive,
      toggleActive,
      isClient,
      assets,
      paginatedAssets,
      currentPage,
      totalPages,
      showingRange,
      selectedTimeRange,
      timeRanges,
      formatCurrency,
      formatPercentage,
      getChangeClass,
      getChartOptions,
      getChartSeries,
      changeTimeRange,
      goToPage,
      prevPage,
      nextPage,
    };
  },
});
</script>
