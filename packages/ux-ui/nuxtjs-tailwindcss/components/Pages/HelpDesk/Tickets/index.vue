<template>
  <div
    class="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-[25px] lg:gap-[25px]"
  >
    <TicketsResolvedChart />

    <TicketsInProgressChart />

    <TicketsDueChart />

    <TicketsNewOpenChart />
  </div>

  <AllTickets />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TicketsResolvedChart from "./TicketsResolvedChart.vue";
import TicketsInProgressChart from "./TicketsInProgressChart.vue";
import TicketsDueChart from "./TicketsDueChart.vue";
import TicketsNewOpenChart from "./TicketsNewOpenChart.vue";
import AllTickets from "./AllTickets.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tickets",
  components: {
    TicketsResolvedChart,
    TicketsInProgressChart,
    TicketsDueChart,
    TicketsNewOpenChart,
    AllTickets,
  },
});
</script>
