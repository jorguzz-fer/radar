<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <YouTubeRatio />

    <VimeoRatio />

    <YouTubeRatioTwo />

    <VimeoRatioTwo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import YouTubeRatio from "./YouTubeRatio.vue";
import VimeoRatio from "./VimeoRatio.vue";
import YouTubeRatioTwo from "./YouTubeRatioTwo.vue";
import VimeoRatioTwo from "./VimeoRatioTwo.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Videos",
  components: {
    YouTubeRatio,
    VimeoRatio,
    YouTubeRatioTwo,
    VimeoRatioTwo,
  },
});
</script>
