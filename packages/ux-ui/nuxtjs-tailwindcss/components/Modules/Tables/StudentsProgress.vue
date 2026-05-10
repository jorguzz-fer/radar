<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Student's Progress</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all text-[26px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <i class="ri-more-fill"></i>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Day
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Week
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Month
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Year
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Name
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Course Name
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] font-medium"
              >
                Olivia Clark
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  Web Design
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div
                  class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
                >
                  <div
                    class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                    style="width: 55%"
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] font-medium"
              >
                Alexander Garcia
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  Python Dev
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div
                  class="flex w-full h-[4px] overflow-hidden rounded-md bg-success-50 dark:bg-[#172036]"
                >
                  <div
                    class="flex flex-col justify-center overflow-hidden bg-success-500 rounded-md"
                    style="width: 70%"
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] font-medium"
              >
                Chloe Lewis
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  Front-end
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div
                  class="flex w-full h-[4px] overflow-hidden rounded-md bg-purple-50 dark:bg-[#172036]"
                >
                  <div
                    class="flex flex-col justify-center overflow-hidden bg-purple-500 rounded-md"
                    style="width: 30%"
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] font-medium"
              >
                Ava Turner
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> Back-end </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div
                  class="flex w-full h-[4px] overflow-hidden rounded-md bg-danger-50 dark:bg-[#172036]"
                >
                  <div
                    class="flex flex-col justify-center overflow-hidden bg-danger-500 rounded-md"
                    style="width: 90%"
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] font-medium"
              >
                Ryan Flores
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  Data Analytics
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div
                  class="flex w-full h-[4px] overflow-hidden rounded-md bg-secondary-50 dark:bg-[#172036]"
                >
                  <div
                    class="flex flex-col justify-center overflow-hidden bg-secondary-500 rounded-md"
                    style="width: 50%"
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036] font-medium"
              >
                John Doe
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  Plugin Dev
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div
                  class="flex w-full h-[4px] overflow-hidden rounded-md bg-purple-50 dark:bg-[#172036]"
                >
                  <div
                    class="flex flex-col justify-center overflow-hidden bg-purple-500 rounded-md"
                    style="width: 50%"
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PaginationTwo
        items="5"
        total="10"
        class="px-[20px] md:px-[25px] pt-[12px] md:pt-[14px] mt-[0px] md:mt-0"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "StudentsProgress",
  components: {
    PaginationTwo,
  },
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    return {
      isActive,
      toggleActive,
    };
  },
});
</script>
