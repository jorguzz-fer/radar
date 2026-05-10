<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Image Size Rounded-Circle</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="flex items-center gap-[15px]">
        <img
          src="@/assets/images/admin.png"
          alt="admin-image"
          class="rounded-full w-[130px] h-[130px]"
        />
        <img
          src="@/assets/images/admin.png"
          alt="admin-image"
          class="rounded-full w-[110px] h-[110px]"
        />
        <img
          src="@/assets/images/admin.png"
          alt="admin-image"
          class="rounded-full w-[90px] h-[90px]"
        />
        <img
          src="@/assets/images/admin.png"
          alt="admin-image"
          class="rounded-full w-[70px] h-[70px]"
        />
        <img
          src="@/assets/images/admin.png"
          alt="admin-image"
          class="rounded-full w-[50px] h-[50px]"
        />
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
&lt;img src=&quot;assets/images/admin.png&quot; alt=&quot;admin-image&quot; class=&quot;rounded-full w-[130px] h-[130px]&quot;&gt;
&lt;img src=&quot;assets/images/admin.png&quot; alt=&quot;admin-image&quot; class=&quot;rounded-full w-[110px] h-[110px]&quot;&gt;
&lt;img src=&quot;assets/images/admin.png&quot; alt=&quot;admin-image&quot; class=&quot;rounded-full w-[90px] h-[90px]&quot;&gt;
&lt;img src=&quot;assets/images/admin.png&quot; alt=&quot;admin-image&quot; class=&quot;rounded-full w-[70px] h-[70px]&quot;&gt;
&lt;img src=&quot;assets/images/admin.png&quot; alt=&quot;admin-image&quot; class=&quot;rounded-full w-[50px] h-[50px]&quot;&gt;
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
  name: "ImageRoundedCircle",
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
