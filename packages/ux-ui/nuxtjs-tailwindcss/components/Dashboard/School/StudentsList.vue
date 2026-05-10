<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex sm:items-center sm:justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Students List</h5>
      </div>
      <div class="trezo-card-subtitle flex items-center mt-[15px] sm:mt-0">
        <form
          class="relative w-[225px] sm:w-[265px] ltr:mr-[10px] rtl:ml-[10px] ltr:sm:mr-[15px] rtl:sm:ml-[15px]"
        >
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2"
          >
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input
            type="text"
            placeholder="Search for a name...."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
            id="dataTableSearchInput"
          />
        </form>
        <div class="trezo-card-dropdown relative ltr:-mr-[7px] rtl:-ml-[7px]">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all text-[22px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <i class="ri-more-2-fill"></i>
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
    <div class="trezo-card-content -mx-[20px] md:-mx-[25px]" id="dataTable">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                class="font-normal border-t border-gray-100 dark:border-[#172036] ltr:text-left rtl:text-right px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 whitespace-nowrap cursor-pointer relative"
                data-column="id"
              >
                ID
                <i
                  class="ri-expand-up-down-fill text-gray-500 dark:text-gray-400"
                ></i>
              </th>
              <th
                class="font-normal border-t border-gray-100 dark:border-[#172036] ltr:text-left rtl:text-right px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 whitespace-nowrap cursor-pointer relative"
                data-column="name"
              >
                Name
                <i
                  class="ri-expand-up-down-fill text-gray-500 dark:text-gray-400"
                ></i>
              </th>
              <th
                class="font-normal border-t border-gray-100 dark:border-[#172036] ltr:text-left rtl:text-right px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 whitespace-nowrap cursor-pointer relative"
                data-column="subject"
              >
                Subject
                <i
                  class="ri-expand-up-down-fill text-gray-500 dark:text-gray-400"
                ></i>
              </th>
              <th
                class="font-normal border-t border-gray-100 dark:border-[#172036] ltr:text-left rtl:text-right px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 whitespace-nowrap cursor-pointer relative"
                data-column="class"
              >
                Class
                <i
                  class="ri-expand-up-down-fill text-gray-500 dark:text-gray-400"
                ></i>
              </th>
              <th
                class="font-normal border-t border-gray-100 dark:border-[#172036] ltr:text-left rtl:text-right px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 whitespace-nowrap cursor-pointer relative"
                data-column="contact"
              >
                Contact
                <i
                  class="ri-expand-up-down-fill text-gray-500 dark:text-gray-400"
                ></i>
              </th>
              <th
                class="font-normal border-t border-gray-100 dark:border-[#172036] ltr:text-left rtl:text-right px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 whitespace-nowrap cursor-pointer relative"
                data-column="result"
              >
                Result
                <i
                  class="ri-expand-up-down-fill text-gray-500 dark:text-gray-400"
                ></i>
              </th>
              <th
                class="font-normal border-t border-gray-100 dark:border-[#172036] ltr:text-left rtl:text-right px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 whitespace-nowrap cursor-pointer relative"
                data-column="status"
              >
                Status
                <i
                  class="ri-expand-up-down-fill text-gray-500 dark:text-gray-400"
                ></i>
              </th>
              <th
                class="font-normal border-t border-gray-100 dark:border-[#172036] ltr:text-left rtl:text-right px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 whitespace-nowrap cursor-pointer relative"
                data-column="action"
              >
                Action
                <i
                  class="ri-expand-up-down-fill text-gray-500 dark:text-gray-400"
                ></i>
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                #101
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user46.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div>
                    <span class="font-medium inline-block mb-px">
                      Emily Johnson
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      emily@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Math
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                5A
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                (555) 123-4567
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                89% Overall (A)
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block font-medium bg-success-100 dark:bg-[#15203c] text-success-700 rounded-sm text-xs"
                >
                  Passed
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    v-tooltip="'Edit'"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                #102
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user47.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div>
                    <span class="font-medium inline-block mb-px">
                      Michael Thompson
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      lmichael@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                English
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                8B
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                (555) 234-5678
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                32% Overall (F)
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block font-medium bg-danger-100 dark:bg-[#15203c] text-danger-700 rounded-sm text-xs"
                >
                  Fail
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    v-tooltip="'Edit'"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                #103
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user48.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div>
                    <span class="font-medium inline-block mb-px">
                      Sarah Williams
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      sarah@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Geography
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                4C
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                (555) 345-6789
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                92% Overall (A+)
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block font-medium bg-primary-100 dark:bg-[#15203c] text-primary-700 rounded-sm text-xs"
                >
                  Dropped
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    v-tooltip="'Edit'"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                #104
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user49.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div>
                    <span class="font-medium inline-block mb-px">
                      David Anderson
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      david@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Physics
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                6A
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                (555) 456-7890
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                85% Overall (B+)
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block font-medium bg-success-100 dark:bg-[#15203c] text-success-700 rounded-sm text-xs"
                >
                  Passed
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    v-tooltip="'Edit'"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                #105
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user50.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div>
                    <span class="font-medium inline-block mb-px">
                      Jessica Martinez
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      jessica@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                History
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                7B
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                (555) 567-8901
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                25% Overall (F)
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block font-medium bg-danger-100 dark:bg-[#15203c] text-danger-700 rounded-sm text-xs"
                >
                  Fail
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    v-tooltip="'Edit'"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                #106
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user51.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div>
                    <span class="font-medium inline-block mb-px">
                      James Lee
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      james@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Biology
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                5B
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                (555) 678-9012
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                88% Overall (A)
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block font-medium bg-success-100 dark:bg-[#15203c] text-success-700 rounded-sm text-xs"
                >
                  Passed
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    v-tooltip="'Edit'"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                #107
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      src="@/assets/images/users/user52.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div>
                    <span class="font-medium inline-block mb-px">
                      Ethan Clark
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      ethan@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Music
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                8A
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                (555) 789-0123
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                93% Overall (A+)
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block font-medium bg-primary-100 dark:bg-[#15203c] text-primary-700 rounded-sm text-xs"
                >
                  Dropped
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    v-tooltip="'Edit'"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        id="noResultsMessage"
        class="hidden my-[10px] px-[20px] md:px-[25px]"
      >
        No results found.
      </div>

      <Pagination items="7" total="36" class="px-[20px] md:px-[25px]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "StudentsList",
  components: {
    Pagination,
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
