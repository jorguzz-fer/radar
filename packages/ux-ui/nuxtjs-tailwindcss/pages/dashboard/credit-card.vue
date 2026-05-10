<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardCreditCardMyCards />
    </div>
    <div class="lg:col-span-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[25px]">
        <DashboardCreditCardTotalBalance />

        <DashboardCreditCardTotalExpense />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-2 gap-[25px]">
        <DashboardCreditCardCardsWithAmountChart />

        <DashboardCreditCardDailyLimit />
      </div>
    </div>
    <div class="lg:col-span-1">
      <DashboardCreditCardQuickTransfer />
    </div>
  </div>

  <div class="grid grid-cols-1 2xl:grid-cols-4 gap-[25px] mb-[25px]">
    <div class="2xl:col-span-3">
      <DashboardCreditCardRecentTransactions />
    </div>
    <div class="2xl:col-span-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1 gap-[25px]">
        <DashboardCreditCardCreditUtilizationRatio />

        <DashboardCreditCardMonthlySpending />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 2xl:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="2xl:col-span-1">
      <DashboardCreditCardSpendingBreakdownChart />
    </div>
    <div class="2xl:col-span-2">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
        <DashboardCreditCardInterestChargeFeesChart />

        <DashboardCreditCardStatisticsChart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreditCardPage",
});
</script>
