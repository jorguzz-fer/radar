<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Checkbox</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="form-check flex items-center gap-[8px] mb-[10px] last:mb-0">
        <input type="checkbox" class="cursor-pointer" id="defaultCheckbox" />
        <label for="defaultCheckbox" class="cursor-pointer">
          Default checkbox
        </label>
      </div>
      <div class="form-check flex items-center gap-[8px] mb-[10px] last:mb-0">
        <input
          type="checkbox"
          checked
          class="cursor-pointer"
          id="checkedCheckbox"
        />
        <label for="checkedCheckbox" class="cursor-pointer">
          Checked checkbox
        </label>
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
&lt;div class=&quot;form-check flex items-center gap-[8px] mb-[10px] last:mb-0&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;cursor-pointer&quot; id=&quot;defaultCheckbox&quot;&gt;
&lt;label for=&quot;defaultCheckbox&quot; class=&quot;cursor-pointer&quot;&gt;
Default checkbox
&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;form-check flex items-center gap-[8px] mb-[10px] last:mb-0&quot;&gt;
&lt;input type=&quot;checkbox&quot; checked class=&quot;cursor-pointer&quot; id=&quot;checkedCheckbox&quot;&gt;
&lt;label for=&quot;checkedCheckbox&quot; class=&quot;cursor-pointer&quot;&gt;
Checked checkbox
&lt;/label&gt;
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
  name: "DefaultCheckbox",
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
