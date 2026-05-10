<template>
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardEcommerceWelcomeDashboard />

      <DashboardEcommerceTotalSalesChart />
    </div>
    <div class="lg:col-span-1">
      <DashboardEcommerceTotalOrdersChart />

      <DashboardEcommerceTotalCustomersChart />

      <DashboardEcommerceTotalRevenueChart />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardEcommerceSalesByLocations />
    </div>
    <div class="lg:col-span-3">
      <DashboardEcommerceTopSellingProducts />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardEcommerceRecentOrders />
    </div>
    <div class="lg:col-span-1">
      <DashboardEcommerceOrderSummaryChart />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <DashboardEcommerceRecentTransactions />
    </div>
    <div class="lg:col-span-2">
      <DashboardEcommerceReturningCustomerRateChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EcommercePage",
});
</script>
