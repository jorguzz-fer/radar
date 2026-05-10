<template>
  <div>
    <div class="trezo-card-header mb-[15px] flex items-center justify-between">
      <div class="trezo-card-title">
        <h5 class="!mb-0">Outline Badges</h5>
      </div>
    </div>
    <div class="trezo-card-content mb-[5px] md:mb-[10px] lg:mb-[15px]">
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
  &lt;span class=&quot;inline-block px-[15px] py-[.2em] text-primary-500 border border-primary-500 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]&quot;&gt;
  Primary
  &lt;/span&gt;
  &lt;span class=&quot;inline-block px-[15px] py-[.2em] text-secondary-500 border border-secondary-500 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]&quot;&gt;
  Secondary
  &lt;/span&gt;
  &lt;span class=&quot;inline-block px-[15px] py-[.2em] text-success-500 border border-success-500 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]&quot;&gt;
  Success
  &lt;/span&gt;
  &lt;span class=&quot;inline-block px-[15px] py-[.2em] text-danger-500 border border-danger-500 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]&quot;&gt;
  Danger
  &lt;/span&gt;
  &lt;span class=&quot;inline-block px-[15px] py-[.2em] text-warning-500 border border-warning-500 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]&quot;&gt;
  Warning
  &lt;/span&gt;
  &lt;span class=&quot;inline-block px-[15px] py-[.2em] text-info-500 border border-info-500 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]&quot;&gt;
  Info
  &lt;/span&gt;
  &lt;span class=&quot;inline-block px-[15px] py-[.2em] border border-gray-100 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]&quot;&gt;
  Light
  &lt;/span&gt;
  &lt;span class=&quot;inline-block px-[15px] py-[.2em] text-dark border border-dark text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]&quot;&gt;
  Dark
  &lt;/span&gt;
  </code>
  </pre>
      </div>
      <div class="mt-[15px] md:mt-[20px]"></div>
      <span
        class="inline-block px-[15px] py-[.2em] text-primary-500 border border-primary-500 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]"
      >
        Primary
      </span>
      <span
        class="inline-block px-[15px] py-[.2em] text-secondary-500 border border-secondary-500 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]"
      >
        Secondary
      </span>
      <span
        class="inline-block px-[15px] py-[.2em] text-success-500 border border-success-500 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]"
      >
        Success
      </span>
      <span
        class="inline-block px-[15px] py-[.2em] text-danger-500 border border-danger-500 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]"
      >
        Danger
      </span>
      <span
        class="inline-block px-[15px] py-[.2em] text-warning-500 border border-warning-500 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]"
      >
        Warning
      </span>
      <span
        class="inline-block px-[15px] py-[.2em] text-info-500 border border-info-500 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]"
      >
        Info
      </span>
      <span
        class="inline-block px-[15px] py-[.2em] border border-gray-100 text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]"
      >
        Light
      </span>
      <span
        class="inline-block px-[15px] py-[.2em] text-dark border border-dark text-xs rounded-md ltr:mr-[10px] rtl:ml-[10px] mb-[15px]"
      >
        Dark
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "OutlineBadges",
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
