<template>
  <div
    class="trezo-card bg-cover bg-no-repeat bg-center p-[20px] md:p-[25px] rounded-md mb-[25px]"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="trezo-card-content">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
        <!-- Total Market Cap -->
        <div class="p-[20px] md:p-[25px] rounded-md bg-white dark:bg-[#0c1427]">
          <span class="block"> Total Value of all Crypto </span>
          <h4 class="!mb-0 mt-[5px] !text-[20px]">
            {{ formatCurrency(stats.totalMarketCap) }}
          </h4>
        </div>

        <!-- 24h Volume -->
        <div class="p-[20px] md:p-[25px] rounded-md bg-white dark:bg-[#0c1427]">
          <span class="block"> 24h Trading Volume </span>
          <h4 class="!mb-0 mt-[5px] !text-[20px]">
            {{ formatCurrency(stats.totalVolume24h) }}
          </h4>
        </div>

        <!-- BTC Dominance -->
        <div class="p-[20px] md:p-[25px] rounded-md bg-white dark:bg-[#0c1427]">
          <span class="block"> Bitcoin Dominance </span>
          <h4 class="!mb-0 mt-[5px] !text-[20px]">{{ stats.btcDominance }}%</h4>
        </div>

        <!-- Active Cryptocurrencies -->
        <div class="p-[20px] md:p-[25px] rounded-md bg-white dark:bg-[#0c1427]">
          <span class="block"> Active Cryptocurrencies </span>
          <h4 class="!mb-0 mt-[5px] !text-[20px]">
            {{ stats.activeCryptocurrencies.toLocaleString() }}
            <span
              class="text-base font-normal text-gray-500 dark:text-gray-400"
            >
              (Updated: {{ stats.lastUpdated }})
            </span>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import bgImage from "@/assets/images/sparklines/sparkline-bg.jpg";

interface CryptoStats {
  totalMarketCap: number;
  totalVolume24h: number;
  btcDominance: number;
  activeCryptocurrencies: number;
  lastUpdated: string;
}

export default defineComponent({
  name: "Stats",
  setup() {
    const stats: CryptoStats = {
      totalMarketCap: 1597655000000, // $1.597T
      totalVolume24h: 45953000000, // $45.95B
      btcDominance: 48.2,
      activeCryptocurrencies: 12456,
      lastUpdated: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    const formatCurrency = (value: number): string => {
      if (value >= 1e12) return `$${(value / 1e12).toFixed(3)}T`;
      if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
      if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
      return `$${value.toLocaleString()}`;
    };

    return {
      stats,
      formatCurrency,
      bgImage,
    };
  },
});
</script>
