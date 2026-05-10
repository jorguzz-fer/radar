<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Patient Appointments</h5>
      </div>
      <div class="trezo-card-subtitle mt-[10px] sm:mt-0">
        <button
          type="button"
          class="rounded-md inline-block transition-all py-[3.5px] px-[17px] border border-gray-100 dark:border-[#172036] hover:border-primary-500 hover:bg-primary-500 hover:text-white"
        >
          <span class="inline-block relative ltr:pl-[26px] rtl:pr-[26px]">
            <i
              class="ri-calendar-line absolute text-[18px] top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0"
            ></i>
            Oct 01 - Oct 31, 2025
          </span>
        </button>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                class="font-medium text-xs ltr:text-left rtl:text-right px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Patient Name
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Date
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Time
              </th>
              <th
                class="font-medium text-xs ltr:text-left rtl:text-right px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Assigned
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Department
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                John Doe
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Sep 12, 2025
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                10:30 AM
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="rounded-full w-[34px]">
                    <img
                      src="@/assets/images/users/user11.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Dr. Sarah </span>
                  </div>
                </div>
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Cardiology
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-success-100 dark:bg-[#15203c] text-success-600 rounded-sm font-medium text-xs"
                >
                  Confirmed
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Jane Smith
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Sep 11, 2025
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                11:00 AM
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="rounded-full w-[34px]">
                    <img
                      src="@/assets/images/users/user32.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Dr. Mark </span>
                  </div>
                </div>
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Pediatrics
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs"
                >
                  Rescheduled
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Robert Clark
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Sep 10, 2025
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                12:00 PM
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="rounded-full w-[34px]">
                    <img
                      src="@/assets/images/users/user33.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Dr. Emily </span>
                  </div>
                </div>
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Orthopedics
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-danger-100 dark:bg-[#15203c] text-danger-500 rounded-sm font-medium text-xs"
                >
                  Cancelled
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Linda Green
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Sep 09, 2025
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                9:30 AM
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="rounded-full w-[34px]">
                    <img
                      src="@/assets/images/users/user34.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Dr. Adam </span>
                  </div>
                </div>
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Dermatology
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-success-100 dark:bg-[#15203c] text-success-600 rounded-sm font-medium text-xs"
                >
                  Confirmed
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Michael White
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Sep 08, 2025
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                2:00 PM
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="rounded-full w-[34px]">
                    <img
                      src="@/assets/images/users/user35.jpg"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Dr. Rebecca </span>
                  </div>
                </div>
              </td>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                Surgery
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[6px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-purple-100 dark:bg-[#15203c] text-purple-700 rounded-sm font-medium text-xs"
                >
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination items="5" total="30" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "PatientAppointments",
  components: {
    Pagination,
  },
});
</script>
