<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <div class="trezo-card-dropdown inline-block relative">
        <button
          type="button"
          :class="{
            'trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
            active: isActive,
          }"
          id="dropdownToggle"
          @click.stop="toggleActive"
        >
          <span
            class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
          >
            Monthly
            <i
              class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
            ></i>
          </span>
        </button>
        <ul
          class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:left-0 rtl:right-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
        >
          <li>
            <button
              type="button"
              class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
            >
              Weekly
            </button>
          </li>
          <li>
            <button
              type="button"
              class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
            >
              Monthly
            </button>
          </li>
          <li>
            <button
              type="button"
              class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
            >
              Yearly
            </button>
          </li>
        </ul>
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
  &lt;template&gt;
  &lt;div class=&quot;trezo-card-dropdown inline-block relative&quot;&gt;
    &lt;button
      type=&quot;button&quot;
      :class=&quot;{
        &apos;trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]&apos;: true,
        active: isActive,
      }&quot;
      id=&quot;dropdownToggle&quot;
      @click.stop=&quot;toggleActive&quot;
    &gt;
      &lt;span
        class=&quot;inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]&quot;
      &gt;
        Monthly
        &lt;i
          class=&quot;ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2&quot;
        &gt;&lt;/i&gt;
      &lt;/span&gt;
    &lt;/button&gt;
    &lt;ul
      class=&quot;trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:left-0 rtl:right-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none&quot;
    &gt;
      &lt;li&gt;
        &lt;button
          type=&quot;button&quot;
          class=&quot;block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black&quot;
        &gt;
          Weekly
        &lt;/button&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;button
          type=&quot;button&quot;
          class=&quot;block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black&quot;
        &gt;
          Monthly
        &lt;/button&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;button
          type=&quot;button&quot;
          class=&quot;block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black&quot;
        &gt;
          Yearly
        &lt;/button&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
import { defineComponent } from &quot;vue&quot;;
import { useClickOutside } from &quot;@/utils/useClickOutside&quot;;

export default defineComponent({
  name: &quot;DropdownsOne&quot;,
  setup() {
    const { isActive, toggleActive } = useClickOutside(&quot;dropdownToggle&quot;);

    return {
      isActive,
      toggleActive,
    };
  },
});
&lt;/script&gt;
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
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "DropdownsOne",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
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
      isActive,
      toggleActive,
    };
  },
});
</script>
