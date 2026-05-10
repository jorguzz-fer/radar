<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] !pb-0 rounded-md"
  >
    <div class="trezo-card-content">
      <DashboardCryptoCryptocurrencyWatchList />

      <div class="lg:grid lg:grid-cols-3 gap-[25px]">
        <div class="lg:col-span-2">
          <DashboardCryptoMarketPriceStatisticsChart />
        </div>
        <div class="lg:col-span-1">
          <DashboardCryptoExchangeCoin />
        </div>
      </div>
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-3">
      <DashboardCryptoTransactionHistory />
    </div>
    <div class="lg:col-span-2">
      <DashboardCryptoPortfolio />
    </div>
  </div>

  <DashboardCryptoRankings />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoPage",
});
</script>
