<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Gainers & Losers</h5>
      </div>
      <div class="trezo-card-subtitle">
        <select
          v-model="selectedTimeframe"
          @change="fetchData"
          class="bg-transparent border-none text-sm focus:ring-0 focus:outline-none dark:text-gray-300"
        >
          <option value="1d">Timeframe: 1d</option>
          <option value="7d">Timeframe: 7d</option>
          <option value="30d">Timeframe: 30d</option>
        </select>
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

      <div v-else class="table-responsive overflow-x-auto">
        <table class="w-full">
          <tbody class="text-black dark:text-white">
            <tr v-for="crypto in sortedCryptos" :key="crypto.id" class="group">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11.9px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036] text-[13px] group-last:pb-0 group-last:border-b-[0px] group-first:pt-0 group-first:border-t-[0px]"
              >
                <div class="flex items-center">
                  <img
                    :src="crypto.image"
                    :alt="crypto.name"
                    class="w-5 h-5 mr-2"
                  />
                  {{ crypto.name }}
                  <span class="text-gray-400 ml-1 text-xs">
                    ({{ crypto.symbol.toUpperCase() }})
                  </span>
                </div>
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 text-center whitespace-nowrap px-[20px] py-[11.9px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036] text-[13px] group-last:pb-0 group-last:border-b-[0px] group-first:pt-0 group-first:border-t-[0px]"
              >
                ${{ formatPrice(crypto.current_price) }}
              </td>
              <td
                :class="{
                  'text-success-600': crypto.price_change_percentage_24h > 0,
                  'text-danger-500': crypto.price_change_percentage_24h < 0,
                }"
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[11.9px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036] text-[13px] group-last:pb-0 group-last:border-b-[0px] group-first:pt-0 group-first:border-t-[0px]"
              >
                {{ crypto.price_change_percentage_24h > 0 ? "+" : ""
                }}{{ crypto.price_change_percentage_24h.toFixed(2) }}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

export default defineComponent({
  name: "GainersLosers",
  setup() {
    const cryptos = ref<CryptoData[]>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);
    const selectedTimeframe = ref("1d");

    const fetchData = async () => {
      try {
        loading.value = true;
        error.value = null;

        // Using CoinGecko API
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=${selectedTimeframe.value}`
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

    const formatPrice = (price: number) => {
      if (price < 1) return price.toFixed(4);
      if (price < 10) return price.toFixed(3);
      if (price < 1000) return price.toFixed(2);
      return price.toLocaleString("en-US", { maximumFractionDigits: 2 });
    };

    // Sort by biggest gainers first, then biggest losers
    const sortedCryptos = computed(() => {
      return [...cryptos.value]
        .sort((a, b) => {
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        })
        .slice(0, 6); // Show top 6 (3 gainers, 3 losers)
    });

    onMounted(() => {
      fetchData();
      // Refresh data every 5 minutes
      const interval = setInterval(fetchData, 300000);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    });

    return {
      cryptos,
      loading,
      error,
      selectedTimeframe,
      sortedCryptos,
      fetchData,
      formatPrice,
    };
  },
});
</script>

<style lang="scss" scoped>
.table-responsive {
  & tbody {
    & tr {
      &:first-child {
        td {
          border-top-width: 0;
        }
      }
    }
  }
}
</style>
