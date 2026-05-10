<template>
  <div
    class="trezo-card relative pt-[20px] md:pt-[25px] ltr:pl-[20px] ltr:md:pl-[25px] rtl:pr-[20px] rtl:md:pr-[25px] rounded-md"
    style="background: linear-gradient(101deg, #fe7a36 0%, #fd5812 100%)"
  >
    <div class="trezo-card-content">
      <span class="block text-white mb-[4px]"> Active Total Property </span>
      <h3 class="!mb-0 !text-[20px] !text-white">507,020</h3>
      <div class="-mt-[5px] ltr:text-right rtl:text-left">
        <img
          src="@/assets/images/man-searching-house.png"
          class="inline-block"
          alt="man-searching-house.png"
        />
      </div>
    </div>
    <img
      src="@/assets/images/icons/4dot2.svg"
      class="absolute bottom-0 ltr:left-0 rtl:right-0 rtl:-scale-x-100"
      alt="4dot"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActiveTotalProperty",
});
</script>
