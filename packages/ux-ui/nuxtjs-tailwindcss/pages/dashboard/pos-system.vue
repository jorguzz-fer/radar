<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] lg:gap-[25px] mb-[25px]"
  >
    <DashboardPOSSystemTotalSales />

    <DashboardPOSSystemTotalTransactions />

    <DashboardPOSSystemAverageOrderValue />

    <DashboardPOSSystemTotalDiscount />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardPOSSystemSalesAnalytics />
    </div>
    <div class="lg:col-span-1">
      <DashboardPOSSystemCustomerSegmentationChart />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardPOSSystemCategories />
    </div>
    <div class="lg:col-span-1">
      <DashboardPOSSystemOrderDetails />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "POSSystemPage",
});
</script>
