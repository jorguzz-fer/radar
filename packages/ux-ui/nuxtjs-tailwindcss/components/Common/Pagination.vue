<template>
  <div class="pt-[12px] md:pt-[14px] sm:flex sm:items-center justify-between">
    <p class="!mb-0 text-sm">Showing {{ items }} of {{ total }} results</p>
    <ol class="mt-[10px] sm:mt-0">
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
          class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-primary-500 bg-primary-500 text-white"
        >
          1
        </a>
      </li>
      <li
        class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
      >
        <a
          href="javascript:void(0);"
          class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
        >
          2
        </a>
      </li>
      <li
        class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
      >
        <a
          href="javascript:void(0);"
          class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
        >
          3
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: ["items", "total"],
});
</script>
