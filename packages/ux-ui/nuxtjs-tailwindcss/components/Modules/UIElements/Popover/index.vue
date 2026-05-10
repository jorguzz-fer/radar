<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <DefaultPopover />

    <BottomPopover />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultPopover from "./DefaultPopover.vue";
import BottomPopover from "./BottomPopover.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Popover",
  components: {
    DefaultPopover,
    BottomPopover,
  },
});
</script>
