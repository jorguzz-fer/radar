<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Simple File Uploader</h5>
        </div>
      </div>
      <div class="trezo-card-content">
        <div id="fileUploader">
          <div
            class="relative flex items-center justify-center overflow-hidden rounded-md py-[65px] px-[20px] border border-gray-200 dark:border-[#172036]"
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
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Multiple File Uploader</h5>
        </div>
      </div>
      <div class="trezo-card-content">
        <div id="fileUploader2">
          <div
            class="relative flex items-center justify-center overflow-hidden rounded-md py-[65px] px-[20px] border border-gray-200 dark:border-[#172036]"
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
              id="fileInput2"
              multiple
              class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FileUploader",
});
</script>
