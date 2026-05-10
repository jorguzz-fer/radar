<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <LiveDemoModal />

    <ScrollingLongContentModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LiveDemoModal from "./LiveDemoModal.vue";
import ScrollingLongContentModal from "./ScrollingLongContentModal.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modals",
  components: {
    LiveDemoModal,
    ScrollingLongContentModal,
  },
});
</script>
