<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Avatar Size Rounded-Circle</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="flex items-center gap-[15px]">
        <div
          class="bg-[#f5f7f8] dark:bg-[#15203c] text-[25px] h-[130px] w-[130px] flex items-center justify-center text-primary-500 rounded-full text-center font-bold"
        >
          Ab
        </div>
        <div
          class="bg-[#f5f7f8] dark:bg-[#15203c] text-[20px] h-[110px] w-[110px] flex items-center justify-center text-primary-500 rounded-full text-center font-bold"
        >
          Ab
        </div>
        <div
          class="bg-[#f5f7f8] dark:bg-[#15203c] text-[18px] h-[90px] w-[90px] flex items-center justify-center text-primary-500 rounded-full text-center font-bold"
        >
          Ab
        </div>
        <div
          class="bg-[#f5f7f8] dark:bg-[#15203c] text-[16px] h-[70px] w-[70px] flex items-center justify-center text-primary-500 rounded-full text-center font-bold"
        >
          Ab
        </div>
        <div
          class="bg-[#f5f7f8] dark:bg-[#15203c] h-[45px] w-[45px] flex items-center justify-center text-primary-500 rounded-full text-center font-bold"
        >
          Ab
        </div>
      </div>
      <div class="mt-[20px]"></div>
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
&lt;div class=&quot;bg-[#f5f7f8] dark:bg-[#15203c] text-[25px] h-[130px] w-[130px] flex items-center justify-center text-primary-500 rounded-full text-center font-bold&quot;&gt;
Ab
&lt;/div&gt;
&lt;div class=&quot;bg-[#f5f7f8] dark:bg-[#15203c] text-[20px] h-[110px] w-[110px] flex items-center justify-center text-primary-500 rounded-full text-center font-bold&quot;&gt;
Ab
&lt;/div&gt;
&lt;div class=&quot;bg-[#f5f7f8] dark:bg-[#15203c] text-[18px] h-[90px] w-[90px] flex items-center justify-center text-primary-500 rounded-full text-center font-bold&quot;&gt;
Ab
&lt;/div&gt;
&lt;div class=&quot;bg-[#f5f7f8] dark:bg-[#15203c] text-[16px] h-[70px] w-[70px] flex items-center justify-center text-primary-500 rounded-full text-center font-bold&quot;&gt;
Ab
&lt;/div&gt;
&lt;div class=&quot;bg-[#f5f7f8] dark:bg-[#15203c] h-[45px] w-[45px] flex items-center justify-center text-primary-500 rounded-full text-center font-bold&quot;&gt;
Ab
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
  name: "AlertsWithIcon",
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
