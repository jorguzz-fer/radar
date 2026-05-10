<template>
  <DashboardCryptoPerformanceBreadcrumb />

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <DashboardCryptoPerformancePerInvestmentChart />

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
      <DashboardCryptoPerformancePortfolioValue />

      <DashboardCryptoPerformanceCryptoMarketCap />

      <div class="sm:col-span-2">
        <DashboardCryptoPerformanceTransactionsHistory />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-5 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardCryptoPerformanceMarketPerformanceChart />
    </div>
    <div class="lg:col-span-3">
      <DashboardCryptoPerformanceMetricsChart />
    </div>
  </div>

  <DashboardCryptoPerformanceIndividualAssetPerformance />

  <div class="grid grid-cols-1 xl:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="xl:col-span-1">
      <DashboardCryptoPerformanceRiskStabilityIndicatorsChart />
    </div>

    <div class="xl:col-span-2">
      <DashboardCryptoPerformanceComparativeAnalysisChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoPerformancePage",
});
</script>
