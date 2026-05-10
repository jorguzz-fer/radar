<template>
  <div
    class="trezo-card bg-cover bg-no-repeat bg-center p-[20px] md:p-[25px] rounded-md mb-[25px]"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="trezo-card-content md:flex items-center justify-between">
      <h5 class="!mb-0 !text-white">Crypto Performance</h5>

      <ol class="breadcrumb mt-[12px] md:mt-0">
        <li
          class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0 before:text-white"
        >
          <a
            href="index.html"
            class="inline-block relative ltr:pl-[22px] rtl:pr-[22px] text-white"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 !text-lg -mt-px text-white top-1/2 -translate-y-1/2"
            >
              home
            </i>
            Dashboard
          </a>
        </li>
        <li
          class="breadcrumb-item inline-block relative text-sm mx-[11px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0 text-white before:text-white"
        >
          Crypto Performance
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import bgImage from "@/assets/images/sparklines/sparkline-bg.jpg";

export default defineComponent({
  name: "Breadcrumb",
  setup() {
    return {
      bgImage,
    };
  },
});
</script>
