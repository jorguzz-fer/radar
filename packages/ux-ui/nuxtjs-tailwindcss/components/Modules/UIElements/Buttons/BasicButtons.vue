<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Basic Buttons</h5>
      </div>
    </div>
    <div class="trezo-card-content -mb-[15px]">
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
&lt;button class=&quot;inline-block py-[10px] px-[30px] bg-primary-500 text-white transition-all hover:bg-primary-400 rounded-md border border-primary-500 hover:border-primary-400&quot; type=&quot;button&quot;&gt;
Basic
&lt;/button&gt;
&lt;button class=&quot;inline-block py-[10px] px-[30px] bg-secondary-500 text-white transition-all hover:bg-secondary-400 rounded-md border border-secondary-500 hover:border-secondary-400&quot; type=&quot;button&quot;&gt;
Secondary
&lt;/button&gt;
&lt;button class=&quot;inline-block py-[10px] px-[30px] bg-success-500 text-white transition-all hover:bg-success-400 rounded-md border border-success-500 hover:border-success-400&quot; type=&quot;button&quot;&gt;
Success
&lt;/button&gt;
&lt;button class=&quot;inline-block py-[10px] px-[30px] bg-danger-500 text-white transition-all hover:bg-danger-400 rounded-md border border-danger-500 hover:border-danger-400&quot; type=&quot;button&quot;&gt;
Danger
&lt;/button&gt;
&lt;button class=&quot;inline-block py-[10px] px-[30px] bg-warning-500 text-black transition-all hover:bg-warning-400 rounded-md border border-warning-500 hover:border-warning-400&quot; type=&quot;button&quot;&gt;
Warning
&lt;/button&gt;
&lt;button class=&quot;inline-block py-[10px] px-[30px] bg-info-500 text-white transition-all hover:bg-info-400 rounded-md border border-info-500 hover:border-info-400&quot; type=&quot;button&quot;&gt;
Info
&lt;/button&gt;
&lt;button class=&quot;inline-block py-[10px] px-[30px] bg-gray-50 text-black transition-all hover:bg-gray-100 rounded-md border border-gray-50 hover:border-gray-100&quot; type=&quot;button&quot;&gt;
Light
&lt;/button&gt;
&lt;button class=&quot;inline-block py-[10px] px-[30px] bg-dark text-white transition-all hover:bg-black rounded-md border border-dark hover:border-black&quot; type=&quot;button&quot;&gt;
Dark
&lt;/button&gt;
&lt;button class=&quot;inline-block py-[10px] px-[30px] bg-primary-500 text-white transition-all hover:bg-primary-400 rounded-md border border-primary-500 hover:border-primary-400 disabled:opacity-[.5] disabled:pointer-events-none&quot; type=&quot;button&quot; disabled&gt;
Disabled
&lt;/button&gt;
</code>
</pre>
      </div>
      <div class="mt-[15px] md:mt-[20px]"></div>
      <button
        class="inline-block py-[10px] px-[30px] bg-primary-500 text-white transition-all hover:bg-primary-400 rounded-md border border-primary-500 hover:border-primary-400 ltr:mr-[11px] rtl:ml-[11px] mb-[15px]"
        type="button"
      >
        Basic
      </button>
      <button
        class="inline-block py-[10px] px-[30px] bg-secondary-500 text-white transition-all hover:bg-secondary-400 rounded-md border border-secondary-500 hover:border-secondary-400 ltr:mr-[11px] rtl:ml-[11px] mb-[15px]"
        type="button"
      >
        Secondary
      </button>
      <button
        class="inline-block py-[10px] px-[30px] bg-success-500 text-white transition-all hover:bg-success-400 rounded-md border border-success-500 hover:border-success-400 ltr:mr-[11px] rtl:ml-[11px] mb-[15px]"
        type="button"
      >
        Success
      </button>
      <button
        class="inline-block py-[10px] px-[30px] bg-danger-500 text-white transition-all hover:bg-danger-400 rounded-md border border-danger-500 hover:border-danger-400 ltr:mr-[11px] rtl:ml-[11px] mb-[15px]"
        type="button"
      >
        Danger
      </button>
      <button
        class="inline-block py-[10px] px-[30px] bg-warning-500 text-black transition-all hover:bg-warning-400 rounded-md border border-warning-500 hover:border-warning-400 ltr:mr-[11px] rtl:ml-[11px] mb-[15px]"
        type="button"
      >
        Warning
      </button>
      <button
        class="inline-block py-[10px] px-[30px] bg-info-500 text-white transition-all hover:bg-info-400 rounded-md border border-info-500 hover:border-info-400 ltr:mr-[11px] rtl:ml-[11px] mb-[15px]"
        type="button"
      >
        Info
      </button>
      <button
        class="inline-block py-[10px] px-[30px] bg-gray-50 text-black transition-all hover:bg-gray-100 rounded-md border border-gray-50 hover:border-gray-100 ltr:mr-[11px] rtl:ml-[11px] mb-[15px]"
        type="button"
      >
        Light
      </button>
      <button
        class="inline-block py-[10px] px-[30px] bg-dark text-white transition-all hover:bg-black rounded-md border border-dark hover:border-black ltr:mr-[11px] rtl:ml-[11px] mb-[15px]"
        type="button"
      >
        Dark
      </button>
      <button
        class="inline-block py-[10px] px-[30px] bg-primary-500 text-white transition-all hover:bg-primary-400 rounded-md border border-primary-500 hover:border-primary-400 ltr:mr-[11px] rtl:ml-[11px] mb-[15px] disabled:opacity-[.5] disabled:pointer-events-none"
        type="button"
        disabled
      >
        Disabled
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "BasicButtons",
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
