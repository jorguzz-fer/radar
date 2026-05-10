<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Headings</h5>
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
&lt;h1&gt;
Example heading
&lt;span class=&quot;bg-primary-500 text-white rounded-md py-[.35em] px-[.65em] inline-block font-normal&quot;&gt;
New
&lt;/span&gt;
&lt;/h1&gt;
&lt;h2&gt;
Example heading
&lt;span class=&quot;bg-primary-500 text-white rounded-md py-[.35em] px-[.65em] inline-block font-normal&quot;&gt;
New
&lt;/span&gt;
&lt;/h2&gt;
&lt;h3&gt;
Example heading
&lt;span class=&quot;bg-primary-500 text-white rounded-md py-[.35em] px-[.65em] inline-block font-normal&quot;&gt;
New
&lt;/span&gt;
&lt;/h3&gt;
&lt;h4&gt;
Example heading
&lt;span class=&quot;bg-primary-500 text-white rounded-md py-[.35em] px-[.65em] inline-block font-normal&quot;&gt;
New
&lt;/span&gt;
&lt;/h4&gt;
&lt;h5&gt;
Example heading
&lt;span class=&quot;bg-primary-500 text-white rounded-md py-[.35em] px-[.65em] inline-block font-normal&quot;&gt;
New
&lt;/span&gt;
&lt;/h5&gt;
&lt;h6&gt;
Example heading
&lt;span class=&quot;bg-primary-500 text-white rounded-md py-[.35em] px-[.65em] inline-block font-normal&quot;&gt;
New
&lt;/span&gt;
&lt;/h6&gt;
</code>
</pre>
      </div>
      <div class="mt-[15px] md:mt-[20px]"></div>
      <h1>
        Example heading
        <span
          class="bg-primary-500 text-white rounded-md py-[.35em] px-[.65em] inline-block font-normal"
        >
          New
        </span>
      </h1>
      <h2>
        Example heading
        <span
          class="bg-primary-500 text-white rounded-md py-[.35em] px-[.65em] inline-block font-normal"
        >
          New
        </span>
      </h2>
      <h3>
        Example heading
        <span
          class="bg-primary-500 text-white rounded-md py-[.35em] px-[.65em] inline-block font-normal"
        >
          New
        </span>
      </h3>
      <h4>
        Example heading
        <span
          class="bg-primary-500 text-white rounded-md py-[.35em] px-[.65em] inline-block font-normal"
        >
          New
        </span>
      </h4>
      <h5>
        Example heading
        <span
          class="bg-primary-500 text-white rounded-md py-[.35em] px-[.65em] inline-block font-normal"
        >
          New
        </span>
      </h5>
      <h6>
        Example heading
        <span
          class="bg-primary-500 text-white rounded-md py-[.35em] px-[.65em] inline-block font-normal"
        >
          New
        </span>
      </h6>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "HeadingsBadges",
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
