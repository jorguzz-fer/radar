<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <h3 class="!text-lg !mb-[15px] mt-[20px] md:mt-[25px] first:mt-0">
        Note For Patient
      </h3>
      <p>
        Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit
        mauris placerat nisi placerat. Pellentesque viverra lorem malesuada nunc
        tristique sapien. Imperdiet sit hendrerit tincidunt bibendum donec
        adipiscing.
      </p>
      <h3 class="!text-lg !mb-[15px] mt-[20px] md:mt-[25px] first:mt-0">
        Advice:
      </h3>

      <ul class="mt-[20px]">
        <li class="ltr:pl-[20px] rtl:pr-[20px] mb-[15px] last:mb-0 relative">
          <span
            class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-primary-500 rounded-full"
          ></span>
          Molestie tincidunt ut consequat a urna tortor.
        </li>
        <li class="ltr:pl-[20px] rtl:pr-[20px] mb-[15px] last:mb-0 relative">
          <span
            class="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-primary-500 rounded-full"
          ></span>
          Vitae velit ac nisl velit mauris placerat nisi placerat. Pellentesque
          viverra lorem malesuada nunc tristique sapien. Imperdiet sit hendrerit
          tincidunt bibendum donec adipiscing.
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NoteForPatient",
});
</script>
