<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <TotalBalance />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[25px]">
        <TotalIncome />

        <TotalExpenses />
      </div>
    </div>
    <div class="lg:col-span-2">
      <StatisticsChart />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <TransactionHistory />
    </div>
    <div class="lg:col-span-1">
      <DebitCard />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TotalBalance from "./TotalBalance.vue";
import TotalIncome from "./TotalIncome.vue";
import TotalExpenses from "./TotalExpenses.vue";
import StatisticsChart from "./StatisticsChart.vue";
import TransactionHistory from "./TransactionHistory.vue";
import DebitCard from "./DebitCard.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Wallet",
  components: {
    TotalBalance,
    TotalIncome,
    TotalExpenses,
    StatisticsChart,
    TransactionHistory,
    DebitCard,
  },
});
</script>
