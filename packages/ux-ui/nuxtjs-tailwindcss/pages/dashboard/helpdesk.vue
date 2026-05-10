<template>
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <DashboardHelpDeskCongratulations />

      <div
        class="sm:grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-[25px]"
      >
        <DashboardHelpDeskTicketsResolvedChart />
        <DashboardHelpDeskTicketsInProgressChart />
        <DashboardHelpDeskTicketsDueChart />
        <DashboardHelpDeskTicketsNewOpenChart />
      </div>
    </div>
    <div class="lg:col-span-2">
      <DashboardHelpDeskTicketsStatusChart />

      <div class="lg:grid xl:grid-cols-2 gap-x-[25px]">
        <DashboardHelpDeskCustomerSatisfactionChart />
        <DashboardHelpDeskResponseTimeChart />
      </div>
    </div>
  </div>

  <DashboardHelpDeskPerformanceOfAgents />

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-3">
      <DashboardHelpDeskNewAndSolvedTicketsChart />
    </div>
    <div class="lg:col-span-2">
      <DashboardHelpDeskRecentCustomerRatings />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardHelpDeskToDoList />
    </div>
    <div class="lg:col-span-1">
      <DashboardHelpDeskTaskOverviewChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelpDeskPage",
});
</script>
