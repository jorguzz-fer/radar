<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Filter</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <form>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[15px] sm:gap-[20px]"
        >
          <div>
            <input
              type="text"
              class="h-[44px] rounded-md text-black dark:text-white bg-gray-50 dark:bg-[#0a0e19] px-[17px] block w-full outline-0 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Search"
            />
          </div>
          <div>
            <select
              class="h-[44px] rounded-md bg-gray-50 dark:bg-[#0a0e19] px-[13px] block w-full outline-0 cursor-pointer"
            >
              <option selected>Category</option>
              <option>Bird</option>
              <option>Pool</option>
              <option>Watermelon</option>
              <option>Flower</option>
              <option>Cookies</option>
            </select>
          </div>
          <div>
            <select
              class="h-[44px] rounded-md bg-gray-50 dark:bg-[#0a0e19] px-[13px] block w-full outline-0 cursor-pointer"
            >
              <option selected>File Type</option>
              <option>.zip</option>
              <option>.jpg</option>
              <option>.png</option>
              <option>.gif</option>
              <option>.pdf</option>
            </select>
          </div>
          <div>
            <select
              class="h-[44px] rounded-md bg-gray-50 dark:bg-[#0a0e19] px-[13px] block w-full outline-0 cursor-pointer"
            >
              <option selected>Featured</option>
              <option>Bird</option>
              <option>Pool</option>
              <option>Watermelon</option>
              <option>Flower</option>
              <option>Cookies</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterContent",
});
</script>
