<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardCallCenterOverview />
    </div>
    <div class="lg:col-span-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[25px]">
        <DashboardCallCenterInboundCallsChart />

        <DashboardCallCenterOutboundCallsChart />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <DashboardCallCenterAgentsPerformanceOverview />

    <DashboardCallCenterGeography />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <DashboardCallCenterAgentAvgEarnings />
    </div>
    <div class="lg:col-span-2">
      <DashboardCallCenterRecentCalls />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CallCenterPage",
});
</script>
