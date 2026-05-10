<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Labels</h5>
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
          @click="copyCode"
          type="button"
        >
          <i class="ri-file-copy-line"></i>
        </button>
        <pre
          class="line-numbers !mt-[15px] !py-0 !px-[20px] md:!px-[25px] mb-0"
        >
<code class="language-markup" id="copyCodes">
&lt;div class=&quot;flex w-full h-[13px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036] mb-[15px] last:mb-0&quot;&gt;
&lt;div class=&quot;text-center flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md text-white text-[10px] font-medium&quot; style=&quot;width: 90%;&quot;&gt;
90%
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;text-center flex w-full h-[13px] overflow-hidden rounded-md bg-secondary-50 dark:bg-[#172036] mb-[15px] last:mb-0&quot;&gt;
&lt;div class=&quot;flex flex-col justify-center overflow-hidden bg-secondary-500 rounded-md text-white text-[10px] font-medium&quot; style=&quot;width: 85%;&quot;&gt;
85%
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;text-center flex w-full h-[13px] overflow-hidden rounded-md bg-success-50 dark:bg-[#172036] mb-[15px] last:mb-0&quot;&gt;
&lt;div class=&quot;flex flex-col justify-center overflow-hidden bg-success-500 rounded-md text-white text-[10px] font-medium&quot; style=&quot;width: 80%;&quot;&gt;
80%
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;text-center flex w-full h-[13px] overflow-hidden rounded-md bg-info-50 dark:bg-[#172036] mb-[15px] last:mb-0&quot;&gt;
&lt;div class=&quot;flex flex-col justify-center overflow-hidden bg-info-500 rounded-md text-white text-[10px] font-medium&quot; style=&quot;width: 70%;&quot;&gt;
70%
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;text-center flex w-full h-[13px] overflow-hidden rounded-md bg-warning-50 dark:bg-[#172036] mb-[15px] last:mb-0&quot;&gt;
&lt;div class=&quot;flex flex-col justify-center overflow-hidden bg-warning-500 rounded-md text-white text-[10px] font-medium&quot; style=&quot;width: 60%;&quot;&gt;
60%
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;text-center flex w-full h-[13px] overflow-hidden rounded-md bg-danger-50 dark:bg-[#172036] mb-[15px] last:mb-0&quot;&gt;
&lt;div class=&quot;flex flex-col justify-center overflow-hidden bg-danger-500 rounded-md text-white text-[10px] font-medium&quot; style=&quot;width: 40%;&quot;&gt;
40%
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;text-center flex w-full h-[13px] overflow-hidden rounded-md bg-gray-50 dark:bg-[#172036] mb-[15px] last:mb-0&quot;&gt;
&lt;div class=&quot;flex flex-col justify-center overflow-hidden bg-dark rounded-md text-white text-[10px] font-medium&quot; style=&quot;width: 20%;&quot;&gt;
20%
&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
      <div class="mt-[15px] md:mt-[20px]"></div>
      <div
        class="flex w-full h-[13px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036] mb-[15px] last:mb-0"
      >
        <div
          class="text-center flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md text-white text-[10px] font-medium"
          style="width: 90%"
        >
          90%
        </div>
      </div>
      <div
        class="text-center flex w-full h-[13px] overflow-hidden rounded-md bg-secondary-50 dark:bg-[#172036] mb-[15px] last:mb-0"
      >
        <div
          class="flex flex-col justify-center overflow-hidden bg-secondary-500 rounded-md text-white text-[10px] font-medium"
          style="width: 85%"
        >
          85%
        </div>
      </div>
      <div
        class="text-center flex w-full h-[13px] overflow-hidden rounded-md bg-success-50 dark:bg-[#172036] mb-[15px] last:mb-0"
      >
        <div
          class="flex flex-col justify-center overflow-hidden bg-success-500 rounded-md text-white text-[10px] font-medium"
          style="width: 80%"
        >
          80%
        </div>
      </div>
      <div
        class="text-center flex w-full h-[13px] overflow-hidden rounded-md bg-info-50 dark:bg-[#172036] mb-[15px] last:mb-0"
      >
        <div
          class="flex flex-col justify-center overflow-hidden bg-info-500 rounded-md text-white text-[10px] font-medium"
          style="width: 70%"
        >
          70%
        </div>
      </div>
      <div
        class="text-center flex w-full h-[13px] overflow-hidden rounded-md bg-warning-50 dark:bg-[#172036] mb-[15px] last:mb-0"
      >
        <div
          class="flex flex-col justify-center overflow-hidden bg-warning-500 rounded-md text-white text-[10px] font-medium"
          style="width: 60%"
        >
          60%
        </div>
      </div>
      <div
        class="text-center flex w-full h-[13px] overflow-hidden rounded-md bg-danger-50 dark:bg-[#172036] mb-[15px] last:mb-0"
      >
        <div
          class="flex flex-col justify-center overflow-hidden bg-danger-500 rounded-md text-white text-[10px] font-medium"
          style="width: 40%"
        >
          40%
        </div>
      </div>
      <div
        class="text-center flex w-full h-[13px] overflow-hidden rounded-md bg-gray-50 dark:bg-[#172036] mb-[15px] last:mb-0"
      >
        <div
          class="flex flex-col justify-center overflow-hidden bg-dark rounded-md text-white text-[10px] font-medium"
          style="width: 20%"
        >
          20%
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "LabelsProgress",
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
