<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] !pb-0 rounded-md"
  >
    <div class="trezo-card-content">
      <div class="trezo-card rounded-md">
        <DashboardSalesWelcomeBack />
        <div class="trezo-card-content">
          <div class="sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-x-[25px]">
            <DashboardSalesTotalSalesChart />
            <DashboardSalesTotalOrdersChart />
            <DashboardSalesTotalProfitChart />
            <DashboardSalesTotalRevenueChart />
          </div>
        </div>
      </div>

      <div class="lg:grid lg:grid-cols-3 gap-[25px]">
        <div class="lg:col-span-2">
          <DashboardSalesRecentEarningsChart />
        </div>
        <div class="lg:col-span-1">
          <DashboardSalesByLocations />
        </div>
      </div>
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <DashboardSalesTransactionHistory />
    </div>
    <div class="lg:col-span-2">
      <DashboardSalesRecentOrders />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div>
      <DashboardSalesRealTimeSalesChart />
    </div>
    <div>
      <DashboardSalesOverviewChart />
    </div>
    <div>
      <DashboardSalesGrossEarningsChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SalesPage",
});
</script>
