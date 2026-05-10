<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <CopyValue />

    <CutValue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CopyValue from "./CopyValue.vue";
import CutValue from "./CutValue.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Clipboard",
  components: {
    CopyValue,
    CutValue,
  },
});
</script>
