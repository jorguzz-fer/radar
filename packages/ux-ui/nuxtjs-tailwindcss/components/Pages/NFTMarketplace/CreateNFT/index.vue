<template>
  <form>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-[25px]">
          <div class="sm:col-span-3 mb-[20px] sm:mb-0">
            <label
              class="mb-[15px] text-black dark:text-white text-lg font-bold block"
            >
              Upload Image, Video, Audio, or 3D Model
            </label>
            <div id="fileUploader">
              <div
                class="relative flex items-center overflow-hidden rounded-[4px] py-[35px] px-[30px] bg-gray-100 dark:bg-[#0a0e19] border-[2px] border-dashed border-secondary-400 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[15px]">
                  <div class="text-primary-500 text-4xl">
                    <i class="ri-file-upload-line"></i>
                  </div>
                  <div>
                    <p class="leading-[1.5] mb-[3px]">
                      <strong class="text-black dark:text-white"
                        >Click to upload</strong
                      >
                      you file here
                    </p>
                    <p class="text-xs">
                      Upload upto 12 files, max size each file: 5MB.
                    </p>
                  </div>
                </div>
                <input
                  type="file"
                  id="fileInput"
                  multiple
                  class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
                />
              </div>
              <ul id="fileList"></ul>
            </div>
          </div>
          <div class="sm:col-span-3 mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-gray-500 dark:text-white font-semibold block"
            >
              Product Name <span class="text-orange-600">*</span>
            </label>
            <input
              type="text"
              class="h-[55px] font-medium md:text-md rounded-[4px] text-gray-900 dark:text-white border border-gray-100 dark:border-[#0a0e19] bg-gray-100 dark:bg-[#0a0e19] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
              value="Christmas Eve"
            />
          </div>
          <div class="sm:col-span-3 mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-gray-500 dark:text-white font-semibold block"
            >
              Description
            </label>
            <textarea
              class="h-[140px] font-medium md:text-md rounded-[4px] text-gray-900 dark:text-white border border-gray-100 dark:border-[#0a0e19] bg-gray-100 dark:bg-[#0a0e19] p-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
            ></textarea>
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-gray-500 dark:text-white font-semibold block"
            >
              Item Price
            </label>
            <input
              type="text"
              class="h-[55px] font-medium md:text-md rounded-[4px] text-gray-900 dark:text-white border border-gray-100 dark:border-[#0a0e19] bg-gray-100 dark:bg-[#0a0e19] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
              value="12.50 ETH"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-gray-500 dark:text-white font-semibold block"
            >
              Size
            </label>
            <input
              type="text"
              class="h-[55px] font-medium md:text-md rounded-[4px] text-gray-900 dark:text-white border border-gray-100 dark:border-[#0a0e19] bg-gray-100 dark:bg-[#0a0e19] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
              value="2.50 MB"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-gray-500 dark:text-white font-semibold block"
            >
              Properties
            </label>
            <input
              type="text"
              class="h-[55px] font-medium md:text-md rounded-[4px] text-gray-900 dark:text-white border border-gray-100 dark:border-[#0a0e19] bg-gray-100 dark:bg-[#0a0e19] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
          </div>
          <div class="sm:col-span-3 mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-gray-500 dark:text-white font-semibold block"
            >
              External Link
            </label>
            <input
              type="text"
              class="h-[55px] font-medium md:text-md rounded-[4px] text-gray-900 dark:text-white border border-gray-100 dark:border-[#0a0e19] bg-gray-100 dark:bg-[#0a0e19] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
          </div>
          <div class="sm:col-span-3 mb-[20px] sm:mb-0">
            <div class="flex items-center gap-[20px]">
              <div class="form-radio flex items-center gap-[8px]">
                <input
                  type="radio"
                  class="cursor-pointer"
                  checked
                  name="whoWillSeeMyProfile"
                  id="onlyMe"
                />
                <label
                  class="inline-block font-medium text-gray-900 dark:text-gray-400 cursor-pointer"
                  for="onlyMe"
                >
                  Put On Sale
                </label>
              </div>
              <div class="form-radio flex items-center gap-[8px]">
                <input
                  type="radio"
                  class="cursor-pointer"
                  name="whoWillSeeMyProfile"
                  id="myFollowers"
                />
                <label
                  class="inline-block font-medium text-gray-900 dark:text-gray-400 cursor-pointer"
                  for="myFollowers"
                >
                  Instant Sale Price
                </label>
              </div>
              <div class="form-radio flex items-center gap-[8px]">
                <input
                  type="radio"
                  class="cursor-pointer"
                  name="whoWillSeeMyProfile"
                  id="everyone"
                />
                <label
                  class="inline-block font-medium text-gray-900 dark:text-gray-400 cursor-pointer"
                  for="everyone"
                >
                  Unlock One Purchased
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="trezo-card mb-[25px]">
      <div class="trezo-card-content">
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
            Create NFT
          </span>
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateNFT",
});
</script>
