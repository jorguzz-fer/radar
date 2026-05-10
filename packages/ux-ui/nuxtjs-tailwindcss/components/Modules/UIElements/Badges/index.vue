<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <HeadingsBadges />

    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <PillBadges />

      <OutlinePillBadges />

      <OutlineBadges />

      <BackgroundColorsBadges />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeadingsBadges from "./HeadingsBadges.vue";
import PillBadges from "./PillBadges.vue";
import OutlinePillBadges from "./OutlinePillBadges.vue";
import OutlineBadges from "./OutlineBadges.vue";
import BackgroundColorsBadges from "./BackgroundColorsBadges.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Badges",
  components: {
    HeadingsBadges,
    PillBadges,
    OutlinePillBadges,
    OutlineBadges,
    BackgroundColorsBadges,
  },
});
</script>
