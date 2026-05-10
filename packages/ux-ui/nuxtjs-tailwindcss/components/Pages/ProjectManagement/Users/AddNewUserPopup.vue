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
            <h5 class="!mb-0">Add New User</h5>
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
              <div class="mb-[20px] sm:mb-0">
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
                  Role
                </label>
                <select
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                >
                  <option selected>Select</option>
                  <option value="1">Project Manager</option>
                  <option value="2">Developer</option>
                  <option value="3">Business Analyst</option>
                  <option value="4">UI/UX Designer</option>
                  <option value="5">QA Tester</option>
                  <option value="6">Admin</option>
                  <option value="7">Editor</option>
                  <option value="8">Plugin Developer</option>
                </select>
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Project Access
                </label>
                <select
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                >
                  <option selected>Select</option>
                  <option value="1">Hotel Management</option>
                  <option value="2">Python Upgrade</option>
                  <option value="3">Project Monitoring</option>
                  <option value="4">Project Alpho</option>
                  <option value="5">Aegis Service</option>
                  <option value="6">Beja Banking Finance</option>
                  <option value="7">Aoriv AI Design</option>
                  <option value="8">Vaxo App Design</option>
                  <option value="9">Product Development</option>
                  <option value="10">Trezo Dashboard</option>
                </select>
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
  name: "AddNewUserPopup",
  setup() {
    const stateStoreInstance = stateStore;

    return {
      stateStoreInstance,
    };
  },
});
</script>
