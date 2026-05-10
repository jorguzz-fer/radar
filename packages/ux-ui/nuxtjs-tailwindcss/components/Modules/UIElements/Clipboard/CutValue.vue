<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Cut Value</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <button
        type="button"
        class="clickToSeeCodeBtn inline-block text-black dark:text-white font-semibold"
        @click="toggleCode"
      >
        {{ showCode ? "Click to Hide Code:" : "Click to See Code:" }}
      </button>
      <div class="relative click-to-show-hide-code" v-show="showCode">
        <button
          class="absolute text-lg ltr:right-[20px] rtl:left-[20px] top-[20px] transition-all text-primary-500 copy-btn w-[35px] h-[35px] inline-block border border-primary-500 bg-white rounded-sm dark:bg-[#0c1427]"
          @click="cutCode"
          type="button"
        >
          <i class="ri-scissors-line"></i>
        </button>
        <pre
          class="line-numbers !mt-[10px] !py-0 !px-[20px] md:!px-[25px] mb-0"
        >
<code class="language-markup" id="cutCodes">
&lt;div class=&quot;relative&quot; id=&quot;cutClipboard&quot;&gt;
&lt;input type=&quot;text&quot; id=&quot;cutClipboardInput1&quot; class=&quot;h-[55px] rounded-md text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[20px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500&quot; value=&quot;#annual90conference2025&quot;&gt;
&lt;button class=&quot;cutClipboardButton absolute text-lg ltr:right-[20px] rtl:left-[20px] bottom-[14px] transition-all hover:text-primary-500&quot; data-input=&quot;cutClipboardInput1&quot; type=&quot;button&quot;&gt;
&lt;i class=&quot;ri-scissors-line&quot;&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
      <div class="mt-[15px]"></div>
      <div class="relative" id="cutClipboard">
        <input
          type="text"
          id="cutClipboardInput1"
          class="h-[55px] rounded-md text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[20px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
          value="#annual90conference2025"
        />
        <button
          class="cutClipboardButton absolute text-lg ltr:right-[20px] rtl:left-[20px] bottom-[14px] transition-all hover:text-primary-500"
          @click="cutClipboard"
          type="button"
        >
          <i class="ri-scissors-line"></i>
        </button>
      </div>
    </div>
  </div>
</template>
Script: ts Copy Edit
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "CutValue",
  setup() {
    const showCode = ref(false);

    const toggleCode = () => {
      showCode.value = !showCode.value;
    };

    const cutClipboard = async () => {
      const inputElement = document.getElementById(
        "cutClipboardInput1"
      ) as HTMLInputElement;

      if (inputElement) {
        try {
          // Copy the text to the clipboard
          await navigator.clipboard.writeText(inputElement.value);

          // Clear the input field after cutting
          inputElement.value = "";

          alert("Text cut to clipboard!");
        } catch (err) {
          console.error("Failed to cut text: ", err);
        }
      }
    };

    const cutCode = async () => {
      const codeElement = document.getElementById("cutCodes");
      if (codeElement) {
        try {
          await navigator.clipboard.writeText(codeElement.innerText);
          alert("Code cut to clipboard!");
        } catch (err) {
          console.error("Failed to cut code: ", err);
        }
      }
    };

    onMounted(() => {
      Prism.highlightAll();
    });

    return {
      showCode,
      toggleCode,
      cutClipboard,
      cutCode,
    };
  },
});
</script>
