<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <CarterID />

    <CarterNFTs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CarterID from "./CarterID.vue";
import CarterNFTs from "./CarterNFTs.vue";

export default defineComponent({
  name: "CreatorDetails",
  components: {
    CarterID,
    CarterNFTs,
  },
});
</script>
