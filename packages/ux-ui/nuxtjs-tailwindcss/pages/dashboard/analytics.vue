<template>
  <div class="xl:grid xl:grid-cols-3 gap-[25px]">
    <div class="xl:col-span-2">
      <DashboardAnalyticsOverviewChart />

      <div
        class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md relative"
      >
        <div class="trezo-card-content">
          <div class="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-[25px]">
            <DashboardAnalyticsWebsiteVisitsChart />

            <DashboardAnalyticsNewRegistersChart />
          </div>
        </div>

        <div
          class="absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 hidden md:block"
        >
          <img src="@/assets/images/spring-fat.png" alt="spring-fat" />
        </div>
      </div>
    </div>

    <div class="xl:col-span-1">
      <DashboardAnalyticsRealtimeActiveUsersChart />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-3">
      <DashboardAnalyticsBrowserUsedByUsers />
    </div>
    <div class="lg:col-span-2">
      <DashboardAnalyticsDeviceSessionsChart />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <DashboardAnalyticsClicksChart />

    <DashboardAnalyticsImpressionsChart />

    <DashboardAnalyticsSessionsChart />
  </div>

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardAnalyticsSessionsByChannelChart />
    </div>
    <div class="lg:col-span-3">
      <DashboardAnalyticsClicksImpressionsByKeywords />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardAnalyticsTopBrowsingPagesToday />
    </div>
    <div class="lg:col-span-1">
      <DashboardAnalyticsUsersByCountry />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnalyticsPage",
});
</script>
