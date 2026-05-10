<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[25px]">
        <DashboardRealEstateActiveTotalProperty />

        <DashboardRealEstateRevenueChart />
      </div>
    </div>
    <div class="lg:col-span-2">
      <DashboardRealEstateNewListingsSoldPropertiesChart />
    </div>
  </div>

  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <DashboardRealEstatePropertiesForSaleChart />

    <DashboardRealEstatePropertiesForRentChart />

    <DashboardRealEstateNewCustomers />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <DashboardRealEstateMostSalesLocation />
    </div>
    <div class="lg:col-span-2">
      <DashboardRealEstateRentalIncomeChart />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
        <DashboardRealEstateSocialSearchChart />

        <DashboardRealEstateRecentProperty />
      </div>
    </div>
    <div class="lg:col-span-2">
      <DashboardRealEstateCustomerReviews />
    </div>
    <div class="lg:col-span-1">
      <DashboardRealEstateTopProperty />
    </div>
  </div>

  <DashboardRealEstateLatestTransaction />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RealEstatePage",
});
</script>
