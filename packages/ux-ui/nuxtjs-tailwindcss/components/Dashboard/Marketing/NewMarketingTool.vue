<template>
  <div
    class="trezo-card p-[20px] md:p-[25px] text-center rounded-md"
    style="background: linear-gradient(162deg, #d7b5fd 3.82%, #9947f5 98.54%)"
  >
    <div class="trezo-card-content md:py-[11px] mx-auto md:max-w-[212px]">
      <h3
        class="dark:!text-black !text-lg md:!text-xl !leading-[1.3] !mb-[15px] md:!mb-[30px] mx-auto max-w-[185px]"
      >
        <span class="font-normal">Want To Try</span> New Marketing Tool?
      </h3>
      <img
        src="@/assets/images/marketing-tool.png"
        class="mx-auto"
        alt="marketing-tool-image"
      />
      <a
        href="javascript:void(0);"
        target="_blank"
        class="mt-[15px] md:mt-[30px] mb-[5px] inline-block rounded-md bg-purple-700 text-white transition-all text-[15px] md:text-md font-medium py-[6px] px-[16.5px] hover:bg-purple-600"
      >
        Contact Us
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewMarketingTool",
});
</script>
