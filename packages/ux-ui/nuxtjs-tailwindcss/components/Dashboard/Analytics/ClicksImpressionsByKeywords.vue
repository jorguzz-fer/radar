<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Clicks/Impressions by Keywords</h5>
      </div>
      <div class="trezo-card-subtitle mt-[10px] sm:mt-0">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Oct 01 - Oct 31, 2025
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
              ></i>
            </span>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Sep 01 - Sep 30, 2025
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Aug 01 - Aug 31, 2025
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Jul 01 - Jul 31, 2025
              </button>
            </li>
          </ul>
        </div>
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
                #
              </th>
              <th
                class="font-medium text-xs ltr:text-left rtl:text-right px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Dimension
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Impressions
              </th>
              <th
                class="font-medium text-xs ltr:text-right rtl:text-left px-[14px] pb-[7px] whitespace-nowrap ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0"
              >
                Clicks
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                1
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                data metrics
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-success-600 top-1/2 -translate-y-1/2"
                  >
                    trending_up
                  </i>
                  949
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-danger-500 top-1/2 -translate-y-1/2"
                  >
                    trending_down
                  </i>
                  656
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                2
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                sales metrics
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-danger-500 top-1/2 -translate-y-1/2"
                  >
                    trending_down
                  </i>
                  842
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-success-600 top-1/2 -translate-y-1/2"
                  >
                    trending_up
                  </i>
                  420
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                3
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                analytics dashboard
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-success-600 top-1/2 -translate-y-1/2"
                  >
                    trending_up
                  </i>
                  640
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-danger-500 top-1/2 -translate-y-1/2"
                  >
                    trending_down
                  </i>
                  534
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                4
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                saas metrics
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-success-600 top-1/2 -translate-y-1/2"
                  >
                    trending_up
                  </i>
                  865
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-danger-500 top-1/2 -translate-y-1/2"
                  >
                    trending_down
                  </i>
                  560
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                5
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                hubspot analytics
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-danger-500 top-1/2 -translate-y-1/2"
                  >
                    trending_down
                  </i>
                  535
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-success-600 top-1/2 -translate-y-1/2"
                  >
                    trending_up
                  </i>
                  328
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                6
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                smart goals
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-success-600 top-1/2 -translate-y-1/2"
                  >
                    trending_up
                  </i>
                  756
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-danger-500 top-1/2 -translate-y-1/2"
                  >
                    trending_down
                  </i>
                  235
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                7
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                google analytics
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-success-600 top-1/2 -translate-y-1/2"
                  >
                    trending_up
                  </i>
                  578
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-danger-500 top-1/2 -translate-y-1/2"
                  >
                    trending_down
                  </i>
                  456
                </span>
              </td>
            </tr>
            <tr>
              <td
                class="font-medium text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                8
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                trezo dashboard
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-success-600 top-1/2 -translate-y-1/2"
                  >
                    trending_up
                  </i>
                  660
                </span>
              </td>
              <td
                class="font-medium ltr:text-right rtl:text-left whitespace-nowrap px-[14px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 py-[10px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="inline-block relative ltr:pl-[28px] rtl:pr-[28px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 text-danger-500 top-1/2 -translate-y-1/2"
                  >
                    trending_down
                  </i>
                  478
                </span>
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
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "ClicksImpressionsByKeywords",
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
