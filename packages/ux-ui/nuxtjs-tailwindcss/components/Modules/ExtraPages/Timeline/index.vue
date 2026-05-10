<template>
  <BasicTimeline />

  <AdvancedTimeline />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasicTimeline from "./BasicTimeline.vue";
import AdvancedTimeline from "./AdvancedTimeline.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Timeline",
  components: {
    BasicTimeline,
    AdvancedTimeline,
  },
});
</script>
