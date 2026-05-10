<template>
  <form>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="sm:grid sm:grid-cols-2 sm:gap-[25px]">
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Agent Name
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter agent name"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Agency
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter agency name"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Phone Number
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter phone number"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Email Address
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter email address"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              License Number
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter license number"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Years of Experience
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter years of experience"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Specialization
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter specialization"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Office Location
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter office location"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Recent Achievements
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter recent achievements"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Client Testimonials
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter client testimonials"
            />
          </div>
          <div class="sm:col-span-2 mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Additional Notes
            </label>
            <TextEditor />
          </div>
          <div class="sm:col-span-2 mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Add Agent Photo
            </label>
            <div id="fileUploader">
              <div
                class="relative flex items-center justify-center overflow-hidden rounded-md py-[88px] px-[20px] border border-gray-200 dark:border-[#172036]"
              >
                <div class="flex items-center justify-center">
                  <div
                    class="w-[35px] h-[35px] border border-gray-100 dark:border-[#15203c] flex items-center justify-center rounded-md text-primary-500 text-lg ltr:mr-[12px] rtl:ml-[12px]"
                  >
                    <i class="ri-upload-2-line"></i>
                  </div>
                  <p class="leading-[1.5]">
                    <strong class="text-black dark:text-white"
                      >Click to upload</strong
                    ><br />
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
        <div class="mt-[20px] md:mt-[25px]">
          <button
            type="button"
            class="font-medium inline-block transition-all rounded-md md:text-md ltr:mr-[15px] rtl:ml-[15px] py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-danger-500 text-white hover:bg-danger-400"
          >
            Cancel
          </button>
          <button
            type="button"
            class="font-medium inline-block transition-all rounded-md md:text-md py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-primary-500 text-white hover:bg-primary-400"
          >
            <span class="inline-block relative ltr:pl-[29px] rtl:pr-[29px]">
              <i
                class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2"
              >
                add
              </i>
              Create Agent
            </span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextEditor from "@/components/Common/TextEditor.vue";

export default defineComponent({
  name: "AddAgent",
  components: {
    TextEditor,
  },
});
</script>
