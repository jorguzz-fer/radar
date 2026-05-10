<template>
  <div
    class="py-[15px] md:py-[20px] mt-[60px] md:mt-[80px] lg:mt-[100px] bg-white dark:bg-[#0c1427] text-center"
  >
    <div class="container 2xl:max-w-[1320px] mx-auto px-[12px]">
      <p class="leading-[1.6]">
        © <span class="text-purple-500">Trezo</span> is Proudly Owned by
        <a
          href="https://envytheme.com/"
          target="_blank"
          class="text-primary-500 transition-all hover:underline"
        >
          EnvyTheme
        </a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CopyRight",
});
</script>
