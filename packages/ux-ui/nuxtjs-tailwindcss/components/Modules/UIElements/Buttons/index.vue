<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <BasicButtons />

    <OutlineButtons />

    <BlockButtons />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasicButtons from "./BasicButtons.vue";
import OutlineButtons from "./OutlineButtons.vue";
import BlockButtons from "./BlockButtons.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Buttons",
  components: {
    BasicButtons,
    OutlineButtons,
    BlockButtons,
  },
});
</script>
