<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content md:pb-[75px] text-center">
      <img
        src="@/assets/images/internal-error.png"
        class="inline-block"
        alt="internal-error-image"
      />
      <h4 class="text-[19px] md:text-[21px] mt-[25px] md:mt-[33px] mb-[11px]">
        Looks like we have an internal error, please try again later.
      </h4>
      <p>
        But no worries! Our team is looking ever where while you wait safely.
      </p>
      <NuxtLink
        to="/dashboard"
        class="inline-block font-medium rounded-md md:text-md mt-[2px] md:mt-[12px] py-[12px] px-[25px] text-white bg-primary-500 transition-all hover:bg-primary-400"
      >
        Back to Dashboard
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InternalError",
});
</script>
