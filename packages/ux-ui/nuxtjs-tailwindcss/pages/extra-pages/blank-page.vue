<template>
  <CommonPageTitle pageTitle="Blank Page" subTitle="Extra Pages" />

  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Content goes here!</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <p>Hello World!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlankPage",
});
</script>
