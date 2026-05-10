<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <DefaultTooltip />

    <BottomTooltip />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultTooltip from "./DefaultTooltip.vue";
import BottomTooltip from "./BottomTooltip.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tooltips",
  components: {
    DefaultTooltip,
    BottomTooltip,
  },
});
</script>
