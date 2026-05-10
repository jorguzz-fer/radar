<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]"
    id="clickToSeeCode"
  >
    <DefaultCheckbox />

    <DisabledCheckbox />

    <DefaultRadio />

    <DisabledRadios />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultCheckbox from "./DefaultCheckbox.vue";
import DisabledCheckbox from "./DisabledCheckbox.vue";
import DefaultRadio from "./DefaultRadio.vue";
import DisabledRadios from "./DisabledRadios.vue";

export default defineComponent({
  name: "CheckboxesRadios",
  components: {
    DefaultCheckbox,
    DisabledCheckbox,
    DefaultRadio,
    DisabledRadios,
  },
});
</script>
