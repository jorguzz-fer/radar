<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-[25px] mb-[25px]">
    <DropdownsOne />

    <DropdownsTwo />

    <DropdownsThree />

    <DropdownsFour />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DropdownsOne from "./DropdownsOne.vue";
import DropdownsTwo from "./DropdownsTwo.vue";
import DropdownsThree from "./DropdownsThree.vue";
import DropdownsFour from "./DropdownsFour.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dropdowns",
  components: {
    DropdownsOne,
    DropdownsTwo,
    DropdownsThree,
    DropdownsFour,
  },
});
</script>
