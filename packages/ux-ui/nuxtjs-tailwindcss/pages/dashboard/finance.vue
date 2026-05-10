<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-[25px] gap-[25px] mb-[25px]"
  >
    <DashboardFinanceTotalIncome />
    <DashboardFinanceTotalExpenses />
    <DashboardFinanceAccountsReceivable />
    <DashboardFinanceAccountPayable />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardFinanceStatisticsChart />
    </div>
    <div class="lg:col-span-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[25px]">
        <DashboardFinanceCashAtEndOfTheMonthChart />

        <DashboardFinanceWeeklyExpensesChart />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[25px]">
        <DashboardFinanceIncomeSourceChart />

        <DashboardFinanceNetProfitChart />
      </div>
    </div>
    <div class="lg:col-span-2">
      <DashboardFinanceTransactionHistory />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardFinanceDebitCard />
    </div>
    <div class="lg:col-span-1">
      <DashboardFinanceExpenseBreakdownChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FinancePage",
});
</script>
