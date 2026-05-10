<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Live Price Tracker</h5>
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
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <tbody class="text-black dark:text-white">
            <tr v-for="crypto in paginatedCryptos" :key="crypto.id">
              <td
                class="text-[13px] ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="w-[22px]">
                    <img :alt="`${crypto.name}-image`" :src="crypto.image" />
                  </div>
                  <span class="block font-medium ltr:ml-[8px] rtl:mr-[8px]">
                    {{ crypto.name }}
                    <span
                      class="text-gray-500 dark:text-gray-400 text-xs font-normal"
                    >
                      ({{ crypto.symbol }})
                    </span>
                  </span>
                </div>
              </td>
              <td
                class="text-[13px] ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                ${{ formatPrice(crypto.current_price) }}
                <span
                  :class="[
                    'text-xs ml-1',
                    crypto.price_change_percentage_24h >= 0
                      ? 'text-green-500'
                      : 'text-red-500',
                  ]"
                >
                  {{ crypto.price_change_percentage_24h >= 0 ? "↑" : "↓" }}
                  {{ Math.abs(crypto.price_change_percentage_24h).toFixed(2) }}%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="px-[20px] md:px-[25px] pt-[15px] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ showingStart }}-{{ showingEnd }} of
          {{ cryptos.length }} results
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
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

interface CryptoData {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default defineComponent({
  name: "LivePriceTracker",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const showDropdown = ref(false);
    const cryptos = ref<CryptoData[]>([]);
    const loading = ref(true);
    const error = ref(null);
    const currentPage = ref(1);
    const itemsPerPage = ref(8);
    const timePeriod = ref("24h");

    const timePeriods = [
      { label: "This Day", value: "24h" },
      { label: "This Week", value: "7d" },
      { label: "This Month", value: "30d" },
      { label: "This Year", value: "1y" },
    ];

    const fetchCryptoData = async () => {
      try {
        loading.value = true;
        // Using CoinGecko API - you might need an API key for production
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=${timePeriod.value}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch crypto data");
        }

        cryptos.value = await response.json();
      } catch (err: any) {
        error.value = err.message;
        console.error("Error fetching crypto data:", err);
      } finally {
        loading.value = false;
      }
    };

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };

    const changeTimePeriod = (period: string) => {
      timePeriod.value = period;
      fetchCryptoData();
      showDropdown.value = false;
    };

    const formatPrice = (price: number) => {
      if (price < 1) {
        return price.toFixed(6);
      } else if (price < 1000) {
        return price.toFixed(2);
      } else {
        return price.toLocaleString("en-US", { maximumFractionDigits: 2 });
      }
    };

    // const getImagePath = (symbol: string) => {
    //   try {
    //     return require(`@/assets/images/cryptocurrencies/${symbol}.svg`);
    //   } catch {
    //     // Fallback image if specific one doesn't exist
    //     return require('@/assets/images/cryptocurrencies/generic.svg');
    //   }
    // };

    const totalPages = computed(() => {
      return Math.ceil(cryptos.value.length / itemsPerPage.value);
    });

    const paginatedCryptos = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return cryptos.value.slice(start, end);
    });

    const showingStart = computed(() => {
      return (currentPage.value - 1) * itemsPerPage.value + 1;
    });

    const showingEnd = computed(() => {
      const end = currentPage.value * itemsPerPage.value;
      return end > cryptos.value.length ? cryptos.value.length : end;
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    onMounted(() => {
      fetchCryptoData();
      // Refresh data every 60 seconds
      setInterval(fetchCryptoData, 60000);
    });

    return {
      isActive,
      toggleActive,
      showDropdown,
      cryptos,
      loading,
      error,
      currentPage,
      itemsPerPage,
      timePeriod,
      timePeriods,
      paginatedCryptos,
      showingStart,
      showingEnd,
      totalPages,
      toggleDropdown,
      changeTimePeriod,
      formatPrice,
      // getImagePath,
      nextPage,
      prevPage,
    };
  },
});
</script>
