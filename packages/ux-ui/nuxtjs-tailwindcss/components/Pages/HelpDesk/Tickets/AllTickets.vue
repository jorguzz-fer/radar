<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">All Tickets</h5>
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
            Add New Ticket
          </span>
        </button>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                ID
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Ticket Title
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Requester
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Assigned To
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Created Date
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Due Date
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Priority
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Status
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-854
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <NuxtLink
                  to="/help-desk/ticket-details"
                  class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  Network Infrastructure
                </NuxtLink>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Walter Frazier
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Oliver Clark
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                20 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                30 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                High
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs"
                >
                  Finished
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
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
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-853
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <NuxtLink
                  to="/help-desk/ticket-details"
                  class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  Cloud Migration
                </NuxtLink>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Kimberly Anderson
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Ethan Baker
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                21 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                25 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Low
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-warning-50 dark:bg-[#15203c] text-warning-500 rounded-sm font-medium text-xs"
                >
                  Pending
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
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
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #DEC-852
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <NuxtLink
                  to="/help-desk/ticket-details"
                  class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  Website Revamp
                </NuxtLink>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Roscoe Guerrero
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Sophia Carter
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                17 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                20 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Medium
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-success-50 dark:bg-[#15203c] text-success-500 rounded-sm font-medium text-xs"
                >
                  In Progress
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
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
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #DEC-851
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <NuxtLink
                  to="/help-desk/ticket-details"
                  class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  Mobile Application
                </NuxtLink>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Robert Stewart
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Ava Cooper
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                10 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                15 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                High
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs"
                >
                  Finished
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
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
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #DEC-850
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <NuxtLink
                  to="/help-desk/ticket-details"
                  class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  System Deployment
                </NuxtLink>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Dustin Fritch
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Isabella Evans
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                05 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                10 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Low
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-danger-50 dark:bg-[#15203c] text-danger-500 rounded-sm font-medium text-xs"
                >
                  Cancelled
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
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
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-849
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <NuxtLink
                  to="/help-desk/ticket-details"
                  class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  Login Issues
                </NuxtLink>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Walter Frazier
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Oliver Clark
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                20 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                30 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                High
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs"
                >
                  Finished
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
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
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #FEB-848
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <NuxtLink
                  to="/help-desk/ticket-details"
                  class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  Email Configuration
                </NuxtLink>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Kimberly Anderson
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Ethan Baker
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                21 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                25 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Low
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-warning-50 dark:bg-[#15203c] text-warning-500 rounded-sm font-medium text-xs"
                >
                  Pending
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
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
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #MAR-847
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <NuxtLink
                  to="/help-desk/ticket-details"
                  class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  Application Error
                </NuxtLink>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Roscoe Guerrero
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Sophia Carter
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                17 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                20 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Medium
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-success-50 dark:bg-[#15203c] text-success-500 rounded-sm font-medium text-xs"
                >
                  In Progress
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
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
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-846
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <NuxtLink
                  to="/help-desk/ticket-details"
                  class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  Software Installation
                </NuxtLink>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Robert Stewart
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Ava Cooper
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                10 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                15 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                High
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs"
                >
                  Finished
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
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
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #DEC-845
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <NuxtLink
                  to="/help-desk/ticket-details"
                  class="font-medium text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                >
                  System Upgrade
                </NuxtLink>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Dustin Fritch
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Isabella Evans
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                05 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                10 Apr 2025
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                Low
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-danger-50 dark:bg-[#15203c] text-danger-500 rounded-sm font-medium text-xs"
                >
                  Cancelled
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
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
        class="px-[20px] py-[12px] md:py-[14px] rounded-b-md border-l border-r border-b border-gray-100 dark:border-[#172036]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "@/utils/store";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "AllTickets",
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
