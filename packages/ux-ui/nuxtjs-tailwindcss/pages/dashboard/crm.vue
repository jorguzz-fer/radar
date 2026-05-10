<template>
  <div
    class="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-[25px] lg:gap-[25px]"
  >
    <DashboardCRMRevenueGrowthChart />

    <DashboardCRMLeadConversionChart />

    <DashboardCRMTotalOrdersChart />

    <DashboardCRMAnnualProfitChart />
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardCRMBalanceOverviewChart />
    </div>
    <div class="lg:col-span-1">
      <DashboardCRMLeadsBySourceChart />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <DashboardCRMTopPerformers />
    </div>
    <div class="lg:col-span-2">
      <DashboardCRMRecentLeads />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardCRMSalesReportChart />
    </div>
    <div class="lg:col-span-1">
      <DashboardCRMTopProductsBySales />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CRMPage",
});
</script>
