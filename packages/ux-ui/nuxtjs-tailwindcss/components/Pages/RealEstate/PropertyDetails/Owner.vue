<template>
  <div class="trezo-card bg-white dark:bg-[#0c1427] rounded-md">
    <div
      class="h-[120px] rounded-t-md"
      style="background: linear-gradient(101deg, #fe7a36 0%, #fd5812 100%)"
    >
      <img
        src="@/assets/images/icons/4dot.svg"
        class="rtl:-scale-x-100"
        alt="4dot-image"
      />
    </div>

    <div
      class="trezo-card-content px-[20px] md:px-[25px] pb-[20px] md:pb-[25px] text-center"
    >
      <img
        src="@/assets/images/users/user13.jpg"
        class="inline-block rounded-full w-[167px] h-[167px] mb-[16px] -mt-[83px]"
        alt="user-image"
      />
      <h3 class="!text-md !mb-[3px]">Harold Cook</h3>
      <span class="block"> Owner </span>

      <div
        class="my-[15px] md:my-[20px] flex items-center justify-center gap-[10px]"
      >
        <a
          href="#"
          class="inline-block relative text-center rounded-full w-[30px] h-[30px] text-white bg-[#3a559f]"
          target="_blank"
        >
          <i
            class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
          ></i>
        </a>
        <a
          href="#"
          class="inline-block relative text-center rounded-full w-[30px] h-[30px] text-white bg-[#03a9f4]"
          target="_blank"
        >
          <i
            class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
          ></i>
        </a>
        <a
          href="#"
          class="inline-block relative text-center rounded-full w-[30px] h-[30px] text-white bg-[#007ab9]"
          target="_blank"
        >
          <i
            class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
          ></i>
        </a>
      </div>
      <ul>
        <li class="flex items-center justify-between mb-[11px] last:mb-0">
          <span class="block text-black dark:text-white"> Property ID: </span>
          <span class="block"> P1001 </span>
        </li>
        <li class="flex items-center justify-between mb-[11px] last:mb-0">
          <span class="block text-black dark:text-white"> Year Built: </span>
          <span class="block"> 2010 </span>
        </li>
        <li class="flex items-center justify-between mb-[11px] last:mb-0">
          <span class="block text-black dark:text-white"> Property Type: </span>
          <span class="block"> Residential </span>
        </li>
        <li class="flex items-center justify-between mb-[11px] last:mb-0">
          <span class="block text-black dark:text-white"> Listing Date: </span>
          <span class="block"> Sep 15, 2025 </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Owner",
});
</script>
