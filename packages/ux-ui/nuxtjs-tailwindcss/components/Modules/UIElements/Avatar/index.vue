<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <ImageRoundedCircle />

    <ImageSquareCircle />

    <AvatarRoundedCircle />

    <AvatarSquareCircle />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageRoundedCircle from "./ImageRoundedCircle.vue";
import ImageSquareCircle from "./ImageSquareCircle.vue";
import AvatarRoundedCircle from "./AvatarRoundedCircle.vue";
import AvatarSquareCircle from "./AvatarSquareCircle.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Avatar",
  components: {
    ImageRoundedCircle,
    ImageSquareCircle,
    AvatarRoundedCircle,
    AvatarSquareCircle,
  },
});
</script>
