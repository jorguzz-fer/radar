<template>
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <EmailSidebar />
    </div>
    <div class="lg:col-span-2">
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
      >
        <div
          class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[15px] md:pb-[20px]"
        >
          <div class="trezo-card-title">
            <h5 class="!mb-0 !text-md !font-semibold">New Message</h5>
          </div>
        </div>
        <div class="trezo-card-content">
          <form>
            <div class="sm:grid sm:grid-cols-2 sm:gap-[25px]">
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  To
                </label>
                <select
                  class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                >
                  <option selected>Select</option>
                  <option value="1">james&#64;trezo.com</option>
                  <option value="2">andy&#64;trezo.com</option>
                  <option value="3">mateo&#64;trezo.com</option>
                  <option value="4">luca&#64;trezo.com</option>
                  <option value="5">tomato&#64;trezo.com</option>
                </select>
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Cc
                </label>
                <select
                  class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                >
                  <option selected>Select</option>
                  <option value="1">james&#64;trezo.com</option>
                  <option value="2">andy&#64;trezo.com</option>
                  <option value="3">mateo&#64;trezo.com</option>
                  <option value="4">luca&#64;trezo.com</option>
                  <option value="5">tomato&#64;trezo.com</option>
                </select>
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Bcc
                </label>
                <select
                  class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                >
                  <option selected>Select</option>
                  <option value="1">james&#64;trezo.com</option>
                  <option value="2">andy&#64;trezo.com</option>
                  <option value="3">mateo&#64;trezo.com</option>
                  <option value="4">luca&#64;trezo.com</option>
                  <option value="5">tomato&#64;trezo.com</option>
                </select>
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Subject
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Write your subject..."
                />
              </div>
              <div class="sm:col-span-2 mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Your Email
                </label>
                <TextEditor class="text-editor" />
              </div>
            </div>
            <div
              class="mt-[20px] md:mt-[25px] sm:flex items-center justify-between"
            >
              <div class="flex items-center gap-[10px] md:gap-[15px]">
                <button
                  type="submit"
                  class="inline-block font-semibold md:text-md bg-primary-500 text-white transition-all hover:bg-primary-600 rounded-md py-[8px] px-[15px] md:px-[25px] md:mr-[4px]"
                >
                  Send
                </button>
                <button
                  type="button"
                  class="inline-block relative top-[2px] transition-all hover:text-primary-500"
                >
                  <i
                    class="material-symbols-outlined !text-[18px] !md:text-[20px]"
                  >
                    text_fields_alt
                  </i>
                </button>
                <button
                  type="button"
                  class="inline-block relative top-[2px] transition-all hover:text-primary-500"
                >
                  <i
                    class="material-symbols-outlined !text-[18px] !md:text-[20px]"
                  >
                    attach_file
                  </i>
                </button>
                <button
                  type="button"
                  class="inline-block relative top-[2px] transition-all hover:text-primary-500"
                >
                  <i
                    class="material-symbols-outlined !text-[18px] !md:text-[20px]"
                  >
                    link
                  </i>
                </button>
                <button
                  type="button"
                  class="inline-block relative top-[2px] transition-all hover:text-primary-500"
                >
                  <i
                    class="material-symbols-outlined !text-[18px] !md:text-[20px]"
                  >
                    mood
                  </i>
                </button>
                <button
                  type="button"
                  class="inline-block relative top-[2px] transition-all hover:text-primary-500"
                >
                  <i
                    class="material-symbols-outlined !text-[18px] !md:text-[20px]"
                  >
                    add_to_drive
                  </i>
                </button>
                <button
                  type="button"
                  class="inline-block relative top-[2px] transition-all hover:text-primary-500"
                >
                  <i
                    class="material-symbols-outlined !text-[18px] !md:text-[20px]"
                  >
                    add_photo_alternate
                  </i>
                </button>
                <button
                  type="button"
                  class="inline-block relative top-[2px] transition-all hover:text-primary-500"
                >
                  <i
                    class="material-symbols-outlined !text-[18px] !md:text-[20px]"
                  >
                    ink_pen
                  </i>
                </button>
              </div>
              <button
                class="inline-block relative text-danger-500 mt-[12px] sm:mt-0"
              >
                <i class="material-symbols-outlined !text-[20px]"> delete </i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmailSidebar from "../../Email/EmailSidebar.vue";
import TextEditor from "@/components/Common/TextEditor.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Compose",
  components: {
    EmailSidebar,
    TextEditor,
  },
});
</script>

<style lang="scss" scoped>
.text-editor {
  min-height: 245px;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .text-editor {
    min-height: 190px;
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .text-editor {
    min-height: 200px;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .text-editor {
    min-height: 176px;
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .text-editor {
    min-height: 176px;
  }
}
</style>
