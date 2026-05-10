<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Dismissing Alerts</h5>
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
&lt;div class=&quot;alert py-[1rem] px-[1rem] text-primary-500 bg-primary-50 border border-primary-200 rounded-md flex items-center justify-between&quot; id=&quot;dismissingAlert&quot;&gt;
A simple primary alert—check it out!
&lt;button class=&quot;leading-none text-[20px] close-btn&quot;&gt;
&lt;i class=&quot;ri-close-line&quot;&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;alert py-[1rem] px-[1rem] text-secondary-500 bg-secondary-50 border border-secondary-200 rounded-md flex items-center justify-between&quot; id=&quot;dismissingAlert&quot;&gt;
A simple secondary alert—check it out!
&lt;button class=&quot;leading-none text-[20px] close-btn&quot;&gt;
&lt;i class=&quot;ri-close-line&quot;&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;alert py-[1rem] px-[1rem] text-success-500 bg-success-50 border border-success-200 rounded-md flex items-center justify-between&quot; id=&quot;dismissingAlert&quot;&gt;
A simple success alert—check it out!
&lt;button class=&quot;leading-none text-[20px] close-btn&quot;&gt;
&lt;i class=&quot;ri-close-line&quot;&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;alert py-[1rem] px-[1rem] text-danger-500 bg-danger-50 border border-danger-200 rounded-md flex items-center justify-between&quot; id=&quot;dismissingAlert&quot;&gt;
A simple danger alert—check it out!
&lt;button class=&quot;leading-none text-[20px] close-btn&quot;&gt;
&lt;i class=&quot;ri-close-line&quot;&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;alert py-[1rem] px-[1rem] text-warning-500 bg-warning-50 border border-warning-200 rounded-md flex items-center justify-between&quot; id=&quot;dismissingAlert&quot;&gt;
A simple warning alert—check it out!
&lt;button class=&quot;leading-none text-[20px] close-btn&quot;&gt;
&lt;i class=&quot;ri-close-line&quot;&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;alert py-[1rem] px-[1rem] text-info-500 bg-info-50 border border-info-200 rounded-md flex items-center justify-between&quot; id=&quot;dismissingAlert&quot;&gt;
A simple info alert—check it out!
&lt;button class=&quot;leading-none text-[20px] close-btn&quot;&gt;
&lt;i class=&quot;ri-close-line&quot;&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;alert py-[1rem] px-[1rem] text-gray-500 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-between&quot; id=&quot;dismissingAlert&quot;&gt;
A simple light alert—check it out!
&lt;button class=&quot;leading-none text-[20px] close-btn&quot;&gt;
&lt;i class=&quot;ri-close-line&quot;&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;alert py-[1rem] px-[1rem] text-dark bg-[#ced4da] border border-[#adb5bd] rounded-md flex items-center justify-between&quot; id=&quot;dismissingAlert&quot;&gt;
A simple dark alert—check it out!
&lt;button class=&quot;leading-none text-[20px] close-btn&quot;&gt;
&lt;i class=&quot;ri-close-line&quot;&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;/div&gt;
</code>
</pre>
      </div>
      <div class="mt-[15px] md:mt-[20px]"></div>
      <div
        class="alert py-[1rem] px-[1rem] text-primary-500 bg-primary-50 border border-primary-200 rounded-md flex items-center justify-between"
        id="dismissingAlert"
      >
        A simple primary alert—check it out!
        <button class="leading-none text-[20px] close-btn">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="mt-[15px]"></div>
      <div
        class="alert py-[1rem] px-[1rem] text-secondary-500 bg-secondary-50 border border-secondary-200 rounded-md flex items-center justify-between"
        id="dismissingAlert"
      >
        A simple secondary alert—check it out!
        <button class="leading-none text-[20px] close-btn">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="mt-[15px]"></div>
      <div
        class="alert py-[1rem] px-[1rem] text-success-500 bg-success-50 border border-success-200 rounded-md flex items-center justify-between"
        id="dismissingAlert"
      >
        A simple success alert—check it out!
        <button class="leading-none text-[20px] close-btn">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="mt-[15px]"></div>
      <div
        class="alert py-[1rem] px-[1rem] text-danger-500 bg-danger-50 border border-danger-200 rounded-md flex items-center justify-between"
        id="dismissingAlert"
      >
        A simple danger alert—check it out!
        <button class="leading-none text-[20px] close-btn">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="mt-[15px]"></div>
      <div
        class="alert py-[1rem] px-[1rem] text-warning-500 bg-warning-50 border border-warning-200 rounded-md flex items-center justify-between"
        id="dismissingAlert"
      >
        A simple warning alert—check it out!
        <button class="leading-none text-[20px] close-btn">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="mt-[15px]"></div>
      <div
        class="alert py-[1rem] px-[1rem] text-info-500 bg-info-50 border border-info-200 rounded-md flex items-center justify-between"
        id="dismissingAlert"
      >
        A simple info alert—check it out!
        <button class="leading-none text-[20px] close-btn">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="mt-[15px]"></div>
      <div
        class="alert py-[1rem] px-[1rem] text-gray-500 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-between"
        id="dismissingAlert"
      >
        A simple light alert—check it out!
        <button class="leading-none text-[20px] close-btn">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="mt-[15px]"></div>
      <div
        class="alert py-[1rem] px-[1rem] text-dark bg-[#ced4da] border border-[#adb5bd] rounded-md flex items-center justify-between"
        id="dismissingAlert"
      >
        A simple dark alert—check it out!
        <button class="leading-none text-[20px] close-btn">
          <i class="ri-close-line"></i>
        </button>
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
