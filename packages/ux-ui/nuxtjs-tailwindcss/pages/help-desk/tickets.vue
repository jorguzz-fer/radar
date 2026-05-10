<template>
  <CommonPageTitle pageTitle="Tickets" subTitle="HelpDesk" />

  <PagesHelpDeskTickets />
  <PagesHelpDeskTicketsAddNewTicketPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TicketsPage",
});
</script>
