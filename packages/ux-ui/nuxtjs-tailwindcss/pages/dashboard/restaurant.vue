<template>
  <div class="grid grid-cols-1 xl:grid-cols-2 gap-[25px] mb-[25px]">
    <div>
      <DashboardRestaurantStatsToday />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
        <DashboardRestaurantTotalOrders />

        <DashboardRestaurantPendingOrders />
      </div>
    </div>

    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px] mb-[25px]">
        <DashboardRestaurantRevenueChart />

        <DashboardRestaurantExpenseChart />
      </div>

      <DashboardRestaurantTopSellingItems />
    </div>
  </div>

  <DashboardRestaurantRecentOrdersList />

  <div
    class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-[25px] mb-[25px]"
  >
    <div class="2xl:col-span-1 md:order-1 2xl:order-1">
      <DashboardRestaurantOrderSummaryChart />
    </div>
    <div class="md:col-span-2 2xl:col-span-2 md:order-3 2xl:order-2">
      <DashboardRestaurantRevenueExpenseChart />
    </div>
    <div class="2xl:col-span-1 md:order-2 2xl:order-2">
      <DashboardRestaurantLowStockAlerts />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <DashboardRestaurantStaffPerformanceScores />

    <DashboardRestaurantRevenueByBranches />

    <DashboardRestaurantTickets />
  </div>

  <DashboardRestaurantCustomerRatings />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RestaurantPage",
});
</script>
