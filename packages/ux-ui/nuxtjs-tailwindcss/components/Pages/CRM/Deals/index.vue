<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <form class="relative sm:w-[265px]">
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2"
          >
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input
            type="text"
            placeholder="Search deal here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
      </div>
      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <button
          type="button"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          @click="stateStoreInstance.activeBtn"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add New Deal
          </span>
        </button>
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
                <div class="form-check relative top-[2px]">
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                ID
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Company Name
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Contact Person
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Amount
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Stage
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Probability
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Created At
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Close Date
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="form-check relative top-[2px]">
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> #854 </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Tech Solutions
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Shawn Kennedy
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  $25,000.00
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> Proposal </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> 80% </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  08 Nov 2025 10:30 AM
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  15 Nov 2025
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
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
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="form-check relative top-[2px]">
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> #854 </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Acma Industries
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Roberto Cruz
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  $15,000.00
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  Presentation
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> 50% </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  09 Nov 2025 02:15 PM
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  14 Nov 2025
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
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
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="form-check relative top-[2px]">
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> #854 </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Synergy Ltd
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Juli Johnson
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  $30,000.00
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  Negotiation
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> 75% </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  10 Nov 2025 09:45 AM
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  13 Nov 2025
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
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
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="form-check relative top-[2px]">
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> #854 </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Tech Enterprises
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Catalina Engles
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  $20,000.00
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  Discovery
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> 90% </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  11 Nov 2025 03:45 PM
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  12 Nov 2025
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
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
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="form-check relative top-[2px]">
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> #854 </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Synetic Solutions
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Louis Nagle
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  $40,000.00
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  Contract Sent
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> 60% </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  12 Nov 2025 01:00 PM
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  13 Nov 2025
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
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
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="form-check relative top-[2px]">
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> #854 </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                GlobalTech Solutions
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Patrick Madsen
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  $50,000.00
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> Proposal </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> 55% </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  13 Nov 2025 01:00 PM
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  19 Nov 2025
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
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
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="form-check relative top-[2px]">
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> #854 </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Quantum Solutions
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Lillian McCreary
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  $45,000.00
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  Negotiation
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> 79% </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  14 Nov 2025 01:00 PM
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  26 Nov 2025
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
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
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="form-check relative top-[2px]">
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> #854 </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Synetic Pinnacle Ltd
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Beverly Caulkins
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  $35,000.00
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  Presentation
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> 85% </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  15 Nov 2025 01:00 PM
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  23 Nov 2025
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
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
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="form-check relative top-[2px]">
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> #854 </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                IT Solutions
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Alina Smith
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  $23,423.00
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> Proposal </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> 11% </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  08 Nov 2025 10:30 AM
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  14 Nov 2025
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
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
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="form-check relative top-[2px]">
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> #854 </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                Trezo Admin
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                David Warner
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  $12,421.00
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  Discovery
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400"> 53% </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  07 Nov 2025 10:30 AM
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  11 Nov 2025
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap p-[20px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
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

      <Pagination
        items="10"
        total="36"
        class="px-[20px] md:px-[25px] pt-[12px] md:pt-[14px]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";
import stateStore from "@/utils/store";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Deals",
  components: {
    Pagination,
  },
  setup() {
    const stateStoreInstance = stateStore;

    return {
      stateStoreInstance,
    };
  },
});
</script>
