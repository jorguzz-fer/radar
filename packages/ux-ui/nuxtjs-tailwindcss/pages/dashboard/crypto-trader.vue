<template>
  <DashboardCryptoTraderStats />

  <div class="grid grid-cols-1 xl:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="xl:col-span-2">
      <DashboardCryptoTraderPriceMovementChart />
    </div>
    <div class="xl:col-span-1">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[25px]">
        <DashboardCryptoTraderTradingVolumeChart />

        <DashboardCryptoTraderPortfolioDistributionChart />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-[25px] mb-[25px]">
        <DashboardCryptoTraderProfitLossChart />

        <DashboardCryptoTraderRiskExposureChart />
      </div>

      <DashboardCryptoTraderRecentTransactions />
    </div>
    <div class="lg:col-span-1">
      <DashboardCryptoTraderLivePriceTracker />

      <DashboardCryptoTraderTradesPerMonthChart />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <DashboardCryptoTraderAssetAllocationChart />

    <DashboardCryptoTraderGainersLosers />

    <DashboardCryptoTraderMarketSentimentIndicatorChart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoTraderPage",
});
</script>
