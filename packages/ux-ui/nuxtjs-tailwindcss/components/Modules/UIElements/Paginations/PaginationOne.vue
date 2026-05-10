<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <div class="flex items-center justify-between">
        <p class="!mb-0 text-sm">Items per pages: <strong>5</strong></p>
        <div class="flex items-center">
          <p class="!mb-0 text-sm">1 – 5 of 10</p>
          <ol class="ltr:ml-[10px] rtl:mr-[10px]">
            <li
              class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            >
              <a
                href="#"
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
                href="#"
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
      <div class="mt-[15px] md:mt-[20px]"></div>
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
          @click="copyCode"
          type="button"
        >
          <i class="ri-file-copy-line"></i>
        </button>
        <pre
          class="line-numbers !mt-[15px] !py-0 !px-[20px] md:!px-[25px] mb-0"
        >
<code class="language-markup" id="copyCodes">
&lt;div class=&quot;flex items-center justify-between&quot;&gt;
&lt;p class=&quot;mb-0 text-sm&quot;&gt;
Items per pages: &lt;strong&gt;5&lt;/strong&gt;
&lt;/p&gt;
&lt;div class=&quot;flex items-center&quot;&gt;
&lt;p class=&quot;mb-0 text-sm&quot;&gt;
1 – 5 of 10
&lt;/p&gt;
&lt;ol class=&quot;ltr:ml-[10px] rtl:mr-[10px]&quot;&gt;
&lt;li class=&quot;inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0&quot;&gt;
&lt;a href=&quot;#&quot; class=&quot;w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500&quot;&gt;
    &lt;span class=&quot;opacity-0&quot;&gt;
        0
    &lt;/span&gt;
    &lt;i class=&quot;material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2&quot;&gt;
        chevron_left
    &lt;/i&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0&quot;&gt;
&lt;a href=&quot;#&quot; class=&quot;w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500&quot;&gt;
    &lt;span class=&quot;opacity-0&quot;&gt;
        0
    &lt;/span&gt;
    &lt;i class=&quot;material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2&quot;&gt;
        chevron_right
    &lt;/i&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;/ol&gt;
&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "PaginationOne",
  setup() {
    const showCode = ref(false);

    const toggleCode = () => {
      showCode.value = !showCode.value;
    };

    const copyCode = async () => {
      const codeElement = document.getElementById("copyCodes");
      if (codeElement) {
        try {
          await navigator.clipboard.writeText(codeElement.innerText);
          alert("Code copied to clipboard!");
        } catch (err) {
          console.error("Failed to copy code: ", err);
        }
      }
    };

    onMounted(() => {
      Prism.highlightAll();
    });

    return {
      showCode,
      toggleCode,
      copyCode,
    };
  },
});
</script>
