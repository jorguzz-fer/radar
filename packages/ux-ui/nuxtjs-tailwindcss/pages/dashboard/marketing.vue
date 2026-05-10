<template>
  <DashboardMarketingStatusContent />

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardMarketingPerformanceOverviewChart />
    </div>
    <div class="lg:col-span-1">
      <DashboardMarketingNewMobileApp />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <DashboardMarketingHighlightsContent />

      <DashboardMarketingChannelsContent />
    </div>
    <div class="lg:col-span-2">
      <DashboardMarketingCampaignsContent />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
        <DashboardMarketingExternalLinks />

        <DashboardMarketingInstagramCampaignsChart />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <DashboardMarketingNewMarketingTool />
    </div>
    <div class="lg:col-span-3">
      <DashboardMarketingInstagramSubscriberChart />
    </div>
  </div>

  <DashboardMarketingCreateCampaignModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MarketingPage",
});
</script>
