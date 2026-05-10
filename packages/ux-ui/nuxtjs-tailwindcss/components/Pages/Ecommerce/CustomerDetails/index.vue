<template>
  <div class="lg:grid lg:grid-cols-4 gap-[25px]">
    <div class="lg:col-span-3">
      <TransactionsHistory />
    </div>

    <div class="lg:col-span-1">
      <UserCard />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TransactionsHistory from "./TransactionsHistory.vue";
import UserCard from "./UserCard.vue";

export default defineComponent({
  name: "CustomerDetails",
  components: {
    TransactionsHistory,
    UserCard,
  },
});
</script>
