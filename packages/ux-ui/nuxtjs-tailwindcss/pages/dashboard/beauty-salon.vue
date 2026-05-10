<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <DashboardBeautySalonWelcomeBeautySalon />

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
      <DashboardBeautySalonCustomerSatisfactionRateChart />

      <DashboardBeautySalonNewCustomersThisMonth />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardBeautySalonTopSellingProducts />
    </div>
    <div class="lg:col-span-1">
      <DashboardBeautySalonCustomersFromChannels />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <DashboardBeautySalonFeaturedServices />
    </div>
    <div class="lg:col-span-2">
      <DashboardBeautySalonRecentAppointments />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardBeautySalonRevenueByServicesChart />
    </div>
    <div class="lg:col-span-1">
      <DashboardBeautySalonTopStylistPerformance />
    </div>
  </div>

  <DashboardBeautySalonTopCustomers />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BeautySalonPage",
});
</script>
