<template>
  <div class="flex items-center justify-between mt-[17px]">
    <p class="!mb-0 text-sm">
      Items per pages: <strong>{{ items }}</strong>
    </p>
    <div class="flex items-center">
      <p class="!mb-0 text-sm">1 – {{ items }} of {{ total }}</p>
      <ol class="ltr:ml-[10px] rtl:mr-[10px]">
        <li
          class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
        >
          <a
            href="javascript:void(0);"
            class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
          >
            <span class="opacity-0"> 0 </span>
            <i
              class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
            >
              chevron_left
            </i>
          </a>
        </li>
        <li
          class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
        >
          <a
            href="javascript:void(0);"
            class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
          >
            <span class="opacity-0"> 0 </span>
            <i
              class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
            >
              chevron_right
            </i>
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaginationTwo",
  props: ["items", "total"],
});
</script>
