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
      <form @submit.prevent="applyFilter">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[15px] sm:gap-[20px]"
        >
          <div>
            <input
              type="text"
              v-model="search"
              class="h-[44px] rounded-md text-black dark:text-white bg-gray-50 dark:bg-[#0a0e19] px-[17px] block w-full outline-0 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Search"
            />
          </div>
          <div>
            <select
              v-model="category"
              class="h-[44px] rounded-md bg-gray-50 dark:bg-[#0a0e19] px-[13px] block w-full outline-0 cursor-pointer"
            >
              <option value="">Category</option>
              <option>Bird</option>
              <option>Pool</option>
              <option>Watermelon</option>
              <option>Flower</option>
              <option>Cookies</option>
            </select>
          </div>
          <div>
            <select
              v-model="fileType"
              class="h-[44px] rounded-md bg-gray-50 dark:bg-[#0a0e19] px-[13px] block w-full outline-0 cursor-pointer"
            >
              <option value="">File Type</option>
              <option>.zip</option>
              <option>.jpg</option>
              <option>.png</option>
              <option>.gif</option>
              <option>.pdf</option>
            </select>
          </div>
          <div>
            <select
              v-model="salesType"
              class="h-[44px] rounded-md bg-gray-50 dark:bg-[#0a0e19] px-[13px] block w-full outline-0 cursor-pointer"
            >
              <option value="">Sales Type</option>
              <option>Bird</option>
              <option>Pool</option>
              <option>Watermelon</option>
              <option>Flower</option>
              <option>Cookies</option>
            </select>
          </div>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-[20px] mt-[15px] md:mt-[20px] items-center"
        >
          <div class="md:col-span-2">
            <div
              class="relative md:-top-[5px] md:pt-[2px] ltr:pl-[50px] rtl:pr-[50px] ltr:md:pl-[71px] rtl:md:pr-[71px]"
              id="priceRangeSlider"
            >
              <span
                class="block font-semibold absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
              >
                Price:
              </span>
              <div id="rangeSlider" class="range-slider">
                <div class="number-group flex items-center justify-between">
                  <input
                    class="number-input md:text-md font-semibold text-gray-900 dark:text-gray-400 dark:bg-[#0c1427] !outline-0"
                    type="number"
                    v-model="price.min"
                    :min="range.min"
                    :max="price.max"
                  />
                  <input
                    class="number-input md:text-md font-semibold text-gray-900 dark:text-gray-400 dark:bg-[#0c1427] !outline-0 text-right"
                    type="number"
                    v-model="price.max"
                    :min="price.min"
                    :max="range.max"
                  />
                </div>
                <div
                  class="range-group relative -mt-[10px] ltr:ml-[32px] rtl:mr-[32px] ltr:mr-[53px] rtl:ml-[53px]"
                >
                  <input
                    class="range-input"
                    v-model="price.min"
                    :min="range.min"
                    :max="range.max"
                    step="1"
                    type="range"
                  />
                  <input
                    class="range-input"
                    v-model="price.max"
                    :min="range.min"
                    :max="range.max"
                    step="1"
                    type="range"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-1 ltr:md:text-right rtl:md:text-left">
            <button
              type="submit"
              class="inline-block md:text-md font-medium bg-primary-500 text-white rounded-[7px] py-[6px] px-[25px] md:px-[53px] hover:bg-primary-400 mt-[8px] md:mt-0"
            >
              Filter
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "PriceFilter",
  setup() {
    const search = ref<string>("");
    const category = ref<string>("");
    const fileType = ref<string>("");
    const salesType = ref<string>("");
    const range = reactive({ min: 0, max: 50 });
    const price = reactive({ min: 18, max: 50 });

    const applyFilter = () => {
      console.log("Filters applied:");
      console.log("Search:", search);
      console.log("Category:", category);
      console.log("File Type:", fileType);
      console.log("Sales Type:", salesType);
      console.log("Price Range:", price.min, "-", price.max);
    };

    return {
      search,
      category,
      fileType,
      salesType,
      range,
      price,
      applyFilter,
    };
  },
});
</script>
