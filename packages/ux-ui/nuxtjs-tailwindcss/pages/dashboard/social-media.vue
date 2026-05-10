<template>
  <div class="grid grid-cols-1 xl:grid-cols-2 gap-[25px] mb-[25px]">
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-[25px]">
      <DashboardSocialMediaInstagramFollowers />

      <DashboardSocialMediaLinkedInFollowers />

      <DashboardSocialMediaTikTokFollowers />

      <DashboardSocialMediaFacebookFollowers />

      <DashboardSocialMediaXFollowers />

      <DashboardSocialMediaYouTubeSubscribers />
    </div>

    <DashboardSocialMediaLinkedInNetFollowersChart />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <DashboardSocialMediaSuggestions />

    <DashboardSocialMediaFollowersByGenderChart />

    <DashboardSocialMediaRecentInstagramFollowers />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardSocialMediaFacebookCampaignOverviewChart />
    </div>
    <div class="lg:col-span-1">
      <DashboardSocialMediaUpgradeYourPlan />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialMediaPage",
});
</script>
