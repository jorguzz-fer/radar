<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">My Drive</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
        <div
          class="bg-primary-50 dark:bg-[#0a0e19] rounded-md py-[22px] px-[20px]"
        >
          <div class="form-check">
            <input type="checkbox" class="cursor-pointer" />
          </div>
          <div class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center">
            <div
              class="leading-none text-primary-500 ltr:mr-[10px] rtl:ml-[10px]"
            >
              <i class="material-symbols-outlined !text-[45px]">
                folder_open
              </i>
            </div>
            <h6 class="!mb-0 !text-[15px]">Assets</h6>
          </div>
          <div
            class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center justify-between"
          >
            <div class="block text-black dark:text-white">387 Files</div>
            <div class="block text-black dark:text-white">4.5 GB</div>
          </div>
        </div>

        <div
          class="bg-orange-50 dark:bg-[#0a0e19] rounded-md py-[22px] px-[20px]"
        >
          <div class="form-check">
            <input type="checkbox" class="cursor-pointer" />
          </div>
          <div class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center">
            <div
              class="leading-none text-orange-500 ltr:mr-[10px] rtl:ml-[10px]"
            >
              <i class="material-symbols-outlined !text-[45px]">
                folder_open
              </i>
            </div>
            <h6 class="!mb-0 !text-[15px]">Assets</h6>
          </div>
          <div
            class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center justify-between"
          >
            <div class="block text-black dark:text-white">387 Files</div>
            <div class="block text-black dark:text-white">4.5 GB</div>
          </div>
        </div>

        <div
          class="bg-success-50 dark:bg-[#0a0e19] rounded-md py-[22px] px-[20px]"
        >
          <div class="form-check">
            <input type="checkbox" class="cursor-pointer" />
          </div>
          <div class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center">
            <div
              class="leading-none text-success-600 ltr:mr-[10px] rtl:ml-[10px]"
            >
              <i class="material-symbols-outlined !text-[45px]">
                folder_open
              </i>
            </div>
            <h6 class="!mb-0 !text-[15px]">Assets</h6>
          </div>
          <div
            class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center justify-between"
          >
            <div class="block text-black dark:text-white">387 Files</div>
            <div class="block text-black dark:text-white">4.5 GB</div>
          </div>
        </div>

        <div
          class="bg-purple-50 dark:bg-[#0a0e19] rounded-md py-[22px] px-[20px]"
        >
          <div class="form-check">
            <input type="checkbox" class="cursor-pointer" />
          </div>
          <div class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center">
            <div
              class="leading-none text-purple-500 ltr:mr-[10px] rtl:ml-[10px]"
            >
              <i class="material-symbols-outlined !text-[45px]">
                folder_open
              </i>
            </div>
            <h6 class="!mb-0 !text-[15px]">Assets</h6>
          </div>
          <div
            class="mt-[20px] md:mt-[30px] lg:mt-[40px] flex items-center justify-between"
          >
            <div class="block text-black dark:text-white">387 Files</div>
            <div class="block text-black dark:text-white">4.5 GB</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyDriveFiles",
});
</script>
