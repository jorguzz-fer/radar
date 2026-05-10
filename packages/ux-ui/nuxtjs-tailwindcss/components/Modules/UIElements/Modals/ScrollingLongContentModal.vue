<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Scrolling Long Content</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <button
        class="inline-block py-[10px] px-[30px] bg-primary-500 text-white transition-all hover:bg-primary-400 rounded-md border border-primary-500 hover:border-primary-400"
        type="button"
        @click="stateStoreInstance.activeBtn"
      >
        Launch Demo Modal
      </button>
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
  &lt;template&gt;
  &lt;button
    class=&quot;inline-block py-[10px] px-[30px] bg-primary-500 text-white transition-all hover:bg-primary-400 rounded-md border border-primary-500 hover:border-primary-400&quot;
    type=&quot;button&quot;
    @click=&quot;stateStoreInstance.activeBtn&quot;
  &gt;
    Launch Demo Modal
  &lt;/button&gt;

  &lt;div
    :class=&quot;[
      &#39;add-new-popup z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px]&#39;,
      { active: stateStoreInstance.active },
    ]&quot;
  &gt;
    &lt;div
      class=&quot;popup-dialog flex transition-all max-w-[550px] min-h-full items-center mx-auto&quot;
    &gt;
      &lt;div
        class=&quot;trezo-card w-full bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md&quot;
      &gt;
        &lt;div
          class=&quot;trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md&quot;
        &gt;
          &lt;div class=&quot;trezo-card-title&quot;&gt;
            &lt;h5 class=&quot;mb-0&quot;&gt;Modal Title&lt;/h5&gt;
          &lt;/div&gt;
          &lt;div class=&quot;trezo-card-subtitle&quot;&gt;
            &lt;button
              type=&quot;button&quot;
              class=&quot;text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500&quot;
              @click=&quot;stateStoreInstance.activeBtn&quot;
            &gt;
              &lt;i class=&quot;ri-close-fill&quot;&gt;&lt;/i&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;trezo-card-content pb-[20px] md:pb-[25px]&quot;&gt;
          &lt;p&gt;
            This is some placeholder content to show the scrolling behavior for
            modals. We use repeated line breaks to demonstrate how content can
            exceed minimum inner height, thereby showing inner scrolling. When
            content becomes longer than the predefined max-height of modal,
            content will be cropped and scrollable within the modal.
          &lt;/p&gt;
          &lt;p&gt;
            This is some placeholder content to show the scrolling behavior for
            modals. We use repeated line breaks to demonstrate how content can
            exceed minimum inner height, thereby showing inner scrolling. When
            content becomes longer than the predefined max-height of modal,
            content will be cropped and scrollable within the modal.
          &lt;/p&gt;
          &lt;p&gt;
            This is some placeholder content to show the scrolling behavior for
            modals. We use repeated line breaks to demonstrate how content can
            exceed minimum inner height, thereby showing inner scrolling. When
            content becomes longer than the predefined max-height of modal,
            content will be cropped and scrollable within the modal.
          &lt;/p&gt;
          &lt;p&gt;
            This is some placeholder content to show the scrolling behavior for
            modals. We use repeated line breaks to demonstrate how content can
            exceed minimum inner height, thereby showing inner scrolling. When
            content becomes longer than the predefined max-height of modal,
            content will be cropped and scrollable within the modal.
          &lt;/p&gt;
          &lt;p&gt;
            This is some placeholder content to show the scrolling behavior for
            modals. We use repeated line breaks to demonstrate how content can
            exceed minimum inner height, thereby showing inner scrolling. When
            content becomes longer than the predefined max-height of modal,
            content will be cropped and scrollable within the modal.
          &lt;/p&gt;
          &lt;p&gt;
            This is some placeholder content to show the scrolling behavior for
            modals. We use repeated line breaks to demonstrate how content can
            exceed minimum inner height, thereby showing inner scrolling. When
            content becomes longer than the predefined max-height of modal,
            content will be cropped and scrollable within the modal.
          &lt;/p&gt;
          &lt;p&gt;
            This is some placeholder content to show the scrolling behavior for
            modals. We use repeated line breaks to demonstrate how content can
            exceed minimum inner height, thereby showing inner scrolling. When
            content becomes longer than the predefined max-height of modal,
            content will be cropped and scrollable within the modal.
          &lt;/p&gt;
          &lt;p&gt;
            This is some placeholder content to show the scrolling behavior for
            modals. We use repeated line breaks to demonstrate how content can
            exceed minimum inner height, thereby showing inner scrolling. When
            content becomes longer than the predefined max-height of modal,
            content will be cropped and scrollable within the modal.
          &lt;/p&gt;
          &lt;p&gt;
            This is some placeholder content to show the scrolling behavior for
            modals. We use repeated line breaks to demonstrate how content can
            exceed minimum inner height, thereby showing inner scrolling. When
            content becomes longer than the predefined max-height of modal,
            content will be cropped and scrollable within the modal.
          &lt;/p&gt;
        &lt;/div&gt;
        &lt;div
          class=&quot;trezo-card-footer flex items-center justify-between -mx-[20px] md:-mx-[25px] px-[20px] md:px-[25px] pt-[20px] md:pt-[25px] border-t border-gray-100 dark:border-[#172036]&quot;
        &gt;
          &lt;button
            class=&quot;inline-block py-[10px] px-[30px] bg-danger-500 text-white transition-all hover:bg-danger-400 rounded-md border border-danger-500 hover:border-danger-400&quot;
            type=&quot;button&quot;
            @click=&quot;stateStoreInstance.activeBtn&quot;
          &gt;
            Close
          &lt;/button&gt;
          &lt;button
            class=&quot;inline-block py-[10px] px-[30px] bg-primary-500 text-white transition-all hover:bg-primary-400 rounded-md border border-primary-500 hover:border-primary-400 ltr:mr-[11px] rtl:ml-[11px] mb-[15px]&quot;
            type=&quot;button&quot;
          &gt;
            Save Changes
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
import { defineComponent } from &quot;vue&quot;;
import stateStore from &quot;@/utils/store&quot;;

export default defineComponent({
  name: &quot;ScrollingLongContentModal&quot;,
  setup() {
    const stateStoreInstance = stateStore;

    return {
      stateStoreInstance,
    };
  },
});
&lt;/script&gt;
</code>
</pre>
      </div>
    </div>
  </div>

  <ScrollingLongContentPopup />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";
import stateStore from "@/utils/store";

import ScrollingLongContentPopup from "./ScrollingLongContentPopup.vue";

export default defineComponent({
  name: "ScrollingLongContentModal",
  components: {
    ScrollingLongContentPopup,
  },
  setup() {
    const stateStoreInstance = stateStore;
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
      stateStoreInstance,
    };
  },
});
</script>
