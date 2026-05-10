<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Top Browsing Pages Today</h5>
      </div>
      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <form class="relative sm:w-[265px]">
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2"
          >
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input
            type="text"
            placeholder="Search here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
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
                Page URL
              </th>
              <th
                class="font-medium text-xs ltr:text-left rtl:text-right px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Source
              </th>
              <th
                class="font-medium text-xs ltr:text-left rtl:text-right px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Avg Time
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Page Views
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Bounce Rate (%)
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                <a
                  href="#"
                  class="inline-block text-secondary-500 transition-all hover:text-secondary-400"
                  target="_blank"
                >
                  /dashboard-overview
                </a>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                Organic
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                3m 45s
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                350
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                30.5%
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                <a
                  href="#"
                  class="inline-block text-secondary-500 transition-all hover:text-secondary-400"
                  target="_blank"
                >
                  /custom-reports/generate
                </a>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                Paid
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                7m 00s
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                400
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                24.9%
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                <a
                  href="#"
                  class="inline-block text-secondary-500 transition-all hover:text-secondary-400"
                  target="_blank"
                >
                  /export-data
                </a>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                Direct
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                2m 30s
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                125
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                50.0%
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                <a
                  href="#"
                  class="inline-block text-secondary-500 transition-all hover:text-secondary-400"
                  target="_blank"
                >
                  /realtime-users
                </a>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                Referral
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                3m 00s
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                190
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                40.2%
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                <a
                  href="#"
                  class="inline-block text-secondary-500 transition-all hover:text-secondary-400"
                  target="_blank"
                >
                  /account-preferences
                </a>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                Organic
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                2m 50s
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                180
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                42.1%
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                <a
                  href="#"
                  class="inline-block text-secondary-500 transition-all hover:text-secondary-400"
                  target="_blank"
                >
                  /apis-and-reports
                </a>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                Paid
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                4m 15s
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                320
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[9px] border-b border-gray-100 dark:border-[#172036]"
              >
                28.7%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination items="8" total="30" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "TopBrowsingPagesToday",
  components: {
    Pagination,
  },
});
</script>
