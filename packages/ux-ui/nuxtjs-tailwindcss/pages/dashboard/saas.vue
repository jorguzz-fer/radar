<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
    <div class="lg:col-span-3">
      <DashboardSaaSPaymentChart />
    </div>
    <div class="lg:col-span-1">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-[25px]">
        <DashboardSaaSTotalUsersChart />

        <DashboardSaaSRevenueChart />

        <DashboardSaaSConversionChart />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <DashboardSaaSTopRefers />
    </div>
    <div class="lg:col-span-2">
      <DashboardSaaSActiveUsersChart />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
    <div class="lg:col-span-3">
      <DashboardSaaSLatestTransaction />
    </div>
    <div class="lg:col-span-1">
      <DashboardSaaSUpgradePlans />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <DashboardSaaSUsers />
    </div>
    <div class="lg:col-span-2">
      <DashboardSaaSProductTradeConditionChart />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardSaaSGrossRevenueChart />
    </div>
    <div class="lg:col-span-1">
      <DashboardSaaSSalesByCountry />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SaaSPage",
});
</script>
