<template>
  <form>
    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <div class="lg:col-span-2">
        <div
          class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
        >
          <div
            class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
          >
            <div class="trezo-card-title">
              <h5 class="!mb-0">Add A Product</h5>
            </div>
          </div>
          <div class="trezo-card-content">
            <div class="sm:grid sm:grid-cols-2 sm:gap-[25px]">
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Product Title
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="Google Pixel 7 Pro"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Product Type
                </label>
                <select
                  class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                >
                  <option>Select</option>
                  <option class="selected">Digital Product</option>
                  <option>Physical Product</option>
                </select>
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  SKU
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="ABC-12345"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Brand Name
                </label>
                <select
                  class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                >
                  <option>Select</option>
                  <option selected>Emburo</option>
                  <option>Fediz</option>
                  <option>Debilop</option>
                  <option>Canin</option>
                  <option>Trezo</option>
                </select>
              </div>
              <div class="sm:col-span-2 mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Product Description
                </label>
                <TextEditor class="h-[179px]" />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Regular Price
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="$99"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Sale Price
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="$29"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Publish Schedule
                </label>
                <input
                  type="date"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="2025-10-29"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Product in Stock
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="$17"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Product ID
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="#JAN-2345"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Discount / Offer
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="$20"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Available Date
                </label>
                <input
                  type="date"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="2025-10-29"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  End Date
                </label>
                <input
                  type="date"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="2025-10-29"
                />
              </div>
              <div class="sm:col-span-2 mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Upload Product Images
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
          </div>
        </div>
      </div>
      <div class="lg:col-span-1">
        <div
          class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
        >
          <div
            class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
          >
            <div class="trezo-card-title">
              <h5 class="!mb-0">Product Category & Tags</h5>
            </div>
          </div>
          <div class="trezo-card-content">
            <div class="mb-[20px] md:mb-[25px] last:mb-0">
              <label
                class="mb-[10px] text-black dark:text-white font-medium block"
              >
                Category
              </label>
              <select
                class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
              >
                <option>Select</option>
                <option selected>Watch</option>
                <option>Mobile</option>
                <option>Laptop</option>
                <option>Headphone</option>
                <option>Shoe</option>
              </select>
            </div>
            <div class="mb-[20px] md:mb-[25px] last:mb-0">
              <label
                class="mb-[10px] text-black dark:text-white font-medium block"
              >
                Vendor
              </label>
              <select
                class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
              >
                <option>Select</option>
                <option class="selected">Dennis Matthews</option>
                <option>Susan Rader</option>
                <option>Douglas Harvey</option>
                <option>John Valdez</option>
                <option>Kathryn Turner</option>
              </select>
            </div>
            <div class="mb-[20px] md:mb-[25px] last:mb-0">
              <label
                class="mb-[10px] text-black dark:text-white font-medium block"
              >
                Collection
              </label>
              <select
                class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
              >
                <option>Select</option>
                <option class="selected">Collection 1</option>
                <option>Collection 2</option>
                <option>Collection 3</option>
                <option>Collection 4</option>
                <option>Collection 5</option>
              </select>
            </div>
            <div class="mb-[20px] md:mb-[25px] last:mb-0">
              <label
                class="mb-[10px] text-black dark:text-white font-medium block"
              >
                Tags
              </label>
              <select
                class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
              >
                <option>Select</option>
                <option class="selected">Electronics</option>
                <option>Sports</option>
                <option>Fashion</option>
                <option>Jewellery</option>
              </select>
            </div>
          </div>
        </div>
        <div
          class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
        >
          <div
            class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
          >
            <div class="trezo-card-title">
              <h5 class="!mb-0">Other Options</h5>
            </div>
          </div>
          <div class="trezo-card-content">
            <div class="mb-[20px] md:mb-[25px] last:mb-0">
              <label
                class="mb-[10px] text-black dark:text-white font-medium block"
              >
                Title
              </label>
              <input
                type="text"
                class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                value="Google Pixel 7 Pro"
              />
            </div>
            <div class="mb-[20px] md:mb-[25px] last:mb-0">
              <label
                class="mb-[10px] text-black dark:text-white font-medium block"
              >
                Description
              </label>
              <textarea
                class="h-[140px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] p-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              >
It makes me feel...
              </textarea>
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
            Create Product
          </span>
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextEditor from "@/components/Common/TextEditor.vue";

export default defineComponent({
  name: "CreateProduct",
  components: {
    TextEditor,
  },
});
</script>
