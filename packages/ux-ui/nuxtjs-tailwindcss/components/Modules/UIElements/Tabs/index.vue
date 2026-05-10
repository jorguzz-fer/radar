<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <BasicTabs />

    <IconTabs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasicTabs from "./BasicTabs.vue";
import IconTabs from "./IconTabs.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tabs",
  components: {
    BasicTabs,
    IconTabs,
  },
});
</script>
