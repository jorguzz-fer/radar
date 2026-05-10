<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardPodcastFeatured />
    </div>

    <div class="lg:col-span-1">
      <DashboardPodcastPopularHosts />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardPodcastRecentlyPlayed />
    </div>
    <div class="lg:col-span-1">
      <DashboardPodcastPlayer />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardPodcastMostPopular />
    </div>
    <div class="lg:col-span-1">
      <DashboardPodcastUpcomingEpisodes />

      <DashboardPodcastTodaysEarningsChart />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <DashboardPodcastListenerAnalyticsChart />

    <DashboardPodcastTopPodcasters />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PodcastPage",
});
</script>
