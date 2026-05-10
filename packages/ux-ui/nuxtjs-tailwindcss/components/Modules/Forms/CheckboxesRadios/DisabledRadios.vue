<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Disabled Radios</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="form-radio flex items-center gap-[8px] mb-[10px] last:mb-0">
        <input
          type="radio"
          name="disabledFlexRadioDefault"
          id="disabledFlexRadioDefault1"
          disabled
        />
        <label for="disabledFlexRadioDefault1"> Disabled radio </label>
      </div>
      <div class="form-radio flex items-center gap-[8px] mb-[10px] last:mb-0">
        <input
          type="radio"
          checked
          name="disabledFlexRadioDefault"
          id="disabledFlexRadioDefault2"
          disabled
        />
        <label for="disabledFlexRadioDefault2"> Disabled checked radio </label>
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
&lt;div class=&quot;form-radio flex items-center gap-[8px] mb-[10px] last:mb-0&quot;&gt;
&lt;input type=&quot;radio&quot; name=&quot;disabledFlexRadioDefault&quot; id=&quot;disabledFlexRadioDefault1&quot; disabled&gt;
&lt;label for=&quot;disabledFlexRadioDefault1&quot;&gt;
Disabled radio
&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;form-radio flex items-center gap-[8px] mb-[10px] last:mb-0&quot;&gt;
&lt;input type=&quot;radio&quot; checked name=&quot;disabledFlexRadioDefault&quot; id=&quot;disabledFlexRadioDefault2&quot; disabled&gt;
&lt;label for=&quot;disabledFlexRadioDefault2&quot;&gt;
Disabled checked radio
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
  name: "DisabledRadios",
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
