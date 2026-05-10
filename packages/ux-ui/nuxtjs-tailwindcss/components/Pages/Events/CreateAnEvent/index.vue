<template>
  <form>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-[25px]">
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event Name
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="E.g. Annual Conference 2025"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Ticket Type
            </label>
            <select
              class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
            >
              <option selected>Select</option>
              <option value="1">Free</option>
              <option value="2">Paid</option>
            </select>
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Ticket Price
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="E.g. $20.00"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event Type
            </label>
            <select
              class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
            >
              <option selected>Select</option>
              <option value="1">Online</option>
              <option value="2">Offline</option>
              <option value="3">Both</option>
            </select>
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Select Topic
            </label>
            <select
              class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
            >
              <option selected>Select</option>
              <option value="1">Pepper Festival</option>
              <option value="2">A Day of Comedy</option>
              <option value="3">Replicate Oktoberfest</option>
              <option value="4">Kite Flying Festival</option>
              <option value="5">Music Concert</option>
            </select>
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event Vanue
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="E.g. 2750 Quadra Street Victoria Road"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event Country
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
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event State
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
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event City
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
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event Start Date
            </label>
            <input
              type="date"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event End Date
            </label>
            <input
              type="date"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event Time
            </label>
            <select
              class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
            >
              <option selected>Select</option>
              <option value="1">9AM - 10AM</option>
              <option value="2">11AM - 12PM</option>
              <option value="3">2PM - 4PM</option>
            </select>
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Registration Deadline
            </label>
            <input
              type="date"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event Organizers
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="E.g. Hand Watch"
            />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event Sponsors
            </label>
            <input
              type="text"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="E.g. Hand Watch"
            />
          </div>
        </div>
        <div class="lg:grid lg:grid-cols-2 gap-[25px] mt-[20px] sm:mt-[25px]">
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event Details
            </label>
            <TextEditor class="h-[179px]" />
          </div>
          <div class="mb-[20px] sm:mb-0">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Event Image
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
        <div class="mt-[20px] sm:mt-[25px]">
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
              Create/Publish
            </span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import TextEditor from "@/components/Common/TextEditor.vue";

export default {
  name: "CreateAnEvent",
  components: {
    TextEditor,
  },
};
</script>

<style lang="scss" scoped>
.h-\[179px\] {
  height: 179px !important;
}
</style>
