<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <h6 class="!text-[15px] [&:not(:first-child)]:mt-[20px]">
        Ticket Description
      </h6>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <h6 class="!text-[15px] [&:not(:first-child)]:mt-[20px]">
        Network Infrastructure for Trezo
      </h6>
      <ul class="list-disc my-[15px] ltr:pl-[32px] rtl:pr-[32px]">
        <li class="leading-[1.8] mb-[5px] last:mb-0">Login Issues</li>
        <li class="leading-[1.8] mb-[5px] last:mb-0">Cloud Migration</li>
        <li class="leading-[1.8] mb-[5px] last:mb-0">Website Revamp</li>
        <li class="leading-[1.8] mb-[5px] last:mb-0">Mobile Application</li>
        <li class="leading-[1.8] mb-[5px] last:mb-0">System Deployment</li>
      </ul>
      <h6 class="!text-[15px] [&:not(:first-child)]:mt-[20px]">
        Here is the Code:
      </h6>
      <code
        class="p-[15px] md:p-[20px] block mt-[15px] bg-[#f5f2f0] dark:bg-[#15203c] text-[.875em] break-words text-[#d63384]"
      >
        &lt;<span class="text-[#905] ltr:mr-[5px] rtl:ml-[5px]">span</span
        ><span class="text-[#690]">class</span>=<span class="text-[#07a]"
          >&quot;material-symbols-outlined&quot;</span
        >&gt;search&lt;/<span class="text-[#905]">span</span>&gt;
      </code>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "TicketDescription",
  setup() {
    onMounted(() => {
      Prism.highlightAll();
    });
  },
});
</script>
