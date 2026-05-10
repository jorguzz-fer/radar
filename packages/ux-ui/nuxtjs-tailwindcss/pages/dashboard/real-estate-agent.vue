<template>
  <div>
    <DashboardRealEstateAgentWelcomeBack />

    <div class="mt-[25px] xl:-mt-[67px]">
      <DashboardRealEstateAgentStats />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div class="lg:col-span-2">
          <DashboardRealEstateAgentTotalRevenueChart />
        </div>
        <div class="lg:col-span-1">
          <DashboardRealEstateAgentTopChannels />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div class="lg:col-span-1">
          <DashboardRealEstateAgentRecentClients />
        </div>
        <div class="lg:col-span-2">
          <DashboardRealEstateAgentMyFeaturedListings />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div class="lg:col-span-2">
          <DashboardRealEstateAgentRevenueGoalProgressChart />
        </div>
        <div class="lg:col-span-1">
          <DashboardRealEstateAgentPropertiesByCountry />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
        <div class="lg:col-span-1">
          <DashboardRealEstateAgentDownloadApp />
        </div>
        <div class="lg:col-span-3">
          <DashboardRealEstateAgentLatestTransactions />
        </div>
      </div>

      <DashboardRealEstateAgentClientRatings />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RealEstateAgentPage",
});
</script>
