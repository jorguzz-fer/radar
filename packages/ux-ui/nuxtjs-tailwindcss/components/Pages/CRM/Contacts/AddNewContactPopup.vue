<template>
  <div
    :class="[
      'add-new-popup z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px]',
      { active: stateStoreInstance.active },
    ]"
  >
    <div
      class="popup-dialog flex transition-all max-w-[550px] min-h-full items-center mx-auto"
    >
      <div
        class="trezo-card w-full bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
      >
        <div
          class="trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md"
        >
          <div class="trezo-card-title">
            <h5 class="!mb-0">Add New Contact</h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              type="button"
              class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
              @click="stateStoreInstance.activeBtn"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>

        <div class="trezo-card-content">
          <form>
            <div class="sm:grid sm:grid-cols-2 sm:gap-[25px]">
              <div class="sm:col-span-2 mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Name
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. Olivia"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Email
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. olivia@trezo.com"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Phone
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. +023-244-1234"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Company
                </label>
                <select
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                >
                  <option selected>Select</option>
                  <option value="1">ABC Corporation</option>
                  <option value="2">XYZ Ltd</option>
                  <option value="3">Tech Solutions</option>
                  <option value="4">Global Solutions</option>
                  <option value="5">Acma Industries</option>
                  <option value="6">Synergy Ltd</option>
                </select>
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Status
                </label>
                <select
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                >
                  <option selected>Select</option>
                  <option value="1">Active</option>
                  <option value="2">Deactive</option>
                </select>
              </div>
              <div class="sm:col-span-2 mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Image
                </label>
                <div id="fileUploader">
                  <div
                    class="relative flex items-center justify-center overflow-hidden rounded-md py-[48px] px-[20px] border border-gray-200 dark:border-[#172036]"
                  >
                    <div class="flex items-center justify-center">
                      <div
                        class="w-[35px] h-[35px] border border-gray-100 dark:border-[#15203c] flex items-center justify-center rounded-md text-primary-500 text-lg ltr:mr-[12px] rtl:ml-[12px]"
                      >
                        <i class="ri-upload-2-line"></i>
                      </div>
                      <p class="leading-[1.5]">
                        <strong class="text-black dark:text-white">
                          Click to upload
                        </strong>
                        <br />
                        you file here
                      </p>
                    </div>
                    <input
                      type="file"
                      id="fileInput"
                      class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
              <button
                type="button"
                class="rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[12px] bg-danger-500 text-white hover:bg-danger-400"
                @click="stateStoreInstance.activeBtn"
              >
                Cancel
              </button>
              <button
                type="button"
                class="inline-block bg-primary-500 text-white py-[12px] px-[26.5px] transition-all rounded-md hover:bg-primary-400"
              >
                <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
                  >
                    add
                  </i>
                  Create
                </span>
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
import stateStore from "@/utils/store";

export default defineComponent({
  name: "AddNewContactPopup",
  setup() {
    const stateStoreInstance = stateStore;

    return {
      stateStoreInstance,
    };
  },
});
</script>
