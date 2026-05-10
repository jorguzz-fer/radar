<template>
  <div class="xl:grid xl:grid-cols-3 gap-[25px]">
    <div class="xl:col-span-1">
      <NewAndSolvedTicketsChart />
    </div>
    <div class="xl:col-span-2">
      <TicketsStatusChart />
    </div>
  </div>
  <div class="lg:grid lg:grid-cols-2 gap-x-[25px]">
    <CustomerSatisfactionChart />

    <ResponseTimeChart />
  </div>

  <PerformanceOfAgents />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewAndSolvedTicketsChart from "./NewAndSolvedTicketsChart.vue";
import TicketsStatusChart from "./TicketsStatusChart.vue";
import CustomerSatisfactionChart from "./CustomerSatisfactionChart.vue";
import ResponseTimeChart from "./ResponseTimeChart.vue";
import PerformanceOfAgents from "./PerformanceOfAgents.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Reports",
  components: {
    NewAndSolvedTicketsChart,
    TicketsStatusChart,
    CustomerSatisfactionChart,
    ResponseTimeChart,
    PerformanceOfAgents,
  },
});
</script>
