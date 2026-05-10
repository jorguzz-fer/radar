<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Billing Information</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="sm:grid sm:grid-cols-2 sm:gap-[25px]">
        <div class="mb-[20px] sm:mb-0">
          <label class="mb-[10px] text-black dark:text-white font-medium block">
            Customer Name
          </label>
          <input
            type="text"
            class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
            placeholder="E.g. Ava Turner"
          />
        </div>
        <div class="mb-[20px] sm:mb-0">
          <label class="mb-[10px] text-black dark:text-white font-medium block">
            Phone Number
          </label>
          <input
            type="text"
            class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
            placeholder="E.g. +1 555-123-4567"
          />
        </div>
        <div class="mb-[20px] sm:mb-0">
          <label class="mb-[10px] text-black dark:text-white font-medium block">
            Email Address
          </label>
          <input
            type="text"
            class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
            placeholder="E.g. ava@trezo.com"
          />
        </div>
        <div class="mb-[20px] sm:mb-0">
          <label class="mb-[10px] text-black dark:text-white font-medium block">
            State
          </label>
          <select
            class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
          >
            <option selected>Select</option>
            <option value="1">Florida</option>
            <option value="2">Wisconsin</option>
            <option value="3">Washington</option>
            <option value="4">Nebraska</option>
            <option value="5">Minnesota</option>
          </select>
        </div>
        <div class="mb-[20px] sm:mb-0">
          <label class="mb-[10px] text-black dark:text-white font-medium block">
            City
          </label>
          <select
            class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
          >
            <option selected>Select</option>
            <option value="1">New York</option>
            <option value="2">Tokyo</option>
            <option value="3">London</option>
            <option value="4">Amsterdam</option>
            <option value="5">Paris</option>
          </select>
        </div>
        <div class="mb-[20px] sm:mb-0">
          <label class="mb-[10px] text-black dark:text-white font-medium block">
            ZIP / Postcode
          </label>
          <input
            type="text"
            class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
            placeholder="E.g. 3100"
          />
        </div>
        <div class="mb-[20px] sm:mb-0">
          <label class="mb-[10px] text-black dark:text-white font-medium block">
            Street Address
          </label>
          <input
            type="text"
            class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
            placeholder="E.g. 123 Main Street, Anytown, USA"
          />
        </div>
        <div class="mb-[20px] sm:mb-0">
          <label class="mb-[10px] text-black dark:text-white font-medium block">
            Country
          </label>
          <select
            class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
          >
            <option selected>Select</option>
            <option value="1">Switzerland</option>
            <option value="2">New Zealand</option>
            <option value="3">Germany</option>
            <option value="4">United States</option>
            <option value="5">Japan</option>
            <option value="6">Netherlands</option>
            <option value="7">Sweden</option>
            <option value="8">Canada</option>
            <option value="9">United Kingdom</option>
            <option value="10">Australia</option>
          </select>
        </div>
        <div class="sm:col-span-2 mb-[20px] sm:mb-0">
          <label class="mb-[10px] text-black dark:text-white font-medium block">
            Order Note (optional)
          </label>
          <textarea
            class="h-[140px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] p-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
            placeholder="It makes me feel..."
          ></textarea>
        </div>
      </div>
      <button
        type="button"
        class="mt-[20px] md:mt-[25px] font-medium inline-block transition-all rounded-md md:text-md ltr:mr-[15px] rtl:ml-[15px] py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-danger-500 text-white hover:bg-danger-400"
      >
        Cancel
      </button>
      <button
        type="button"
        class="mt-[20px] md:mt-[25px] font-medium inline-block transition-all rounded-md md:text-md py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-primary-500 text-white hover:bg-primary-400"
      >
        <span class="inline-block relative ltr:pl-[29px] rtl:pr-[29px]">
          <i
            class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2"
          >
            add
          </i>
          Create Order
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BillingInformation",
});
</script>
