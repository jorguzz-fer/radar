<template>
  <div class="grid grid-cols-1 xl:grid-cols-4 gap-[25px] mb-[25px]">
    <div class="xl:col-span-3">
      <DashboardStoreAnalysisWelcomeToStore />

      <DashboardStoreAnalysisStats />
    </div>
    <div class="xl:col-span-1">
      <DashboardStoreAnalysisCustomerVisits />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <DashboardStoreAnalysisTopSellingProducts />
    </div>
    <div class="lg:col-span-2">
      <DashboardStoreAnalysisGrossRevenueChart />
    </div>
  </div>

  <div class="grid grid-cols-1 xl:grid-cols-4 gap-[25px] mb-[25px]">
    <div class="xl:col-span-3">
      <DashboardStoreAnalysisRecentSales />
    </div>
    <div class="xl:col-span-1">
      <div class="!grid !grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-[25px]">
        <DashboardStoreAnalysisSalesByGenderChart />

        <DashboardStoreAnalysisSalesThisMonthChart />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <DashboardStoreAnalysisSalesByCategoryChart />
    </div>
    <div class="lg:col-span-2">
      <DashboardStoreAnalysisStockAlerts />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StoreAnalysisPage",
});
</script>
