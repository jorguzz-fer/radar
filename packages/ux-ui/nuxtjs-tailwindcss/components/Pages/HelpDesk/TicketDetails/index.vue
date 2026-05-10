<template>
  <Ticket />
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <TicketDescription />

      <Comments />
    </div>
    <div class="lg:col-span-1">
      <Attachments />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ticket from "./Ticket.vue";
import TicketDescription from "./TicketDescription.vue";
import Comments from "./Comments.vue";
import Attachments from "./Attachments.vue";

export default defineComponent({
  name: "TicketDetails",
  components: {
    Ticket,
    TicketDescription,
    Comments,
    Attachments,
  },
});
</script>
