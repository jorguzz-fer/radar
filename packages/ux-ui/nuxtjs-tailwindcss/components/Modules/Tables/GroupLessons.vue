<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Group Lessons</h5>
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
    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center">
                  <div class="flex items-center">
                    <div
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        alt="user-image"
                        src="@/assets/images/users/user20.jpg"
                        class="rounded-full"
                      />
                    </div>
                    <div
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        alt="user-image"
                        src="@/assets/images/users/user21.jpg"
                        class="rounded-full"
                      />
                    </div>
                    <div
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        alt="user-image"
                        src="@/assets/images/users/user6.jpg"
                        class="rounded-full"
                      />
                    </div>
                  </div>
                  <div class="ltr:ml-[10px] rtl:mr-[10px]">
                    <span class="block font-medium"> Digital Marketing </span>
                    <span
                      class="block mt-[5px] text-gray-500 dark:text-gray-400"
                    >
                      15 March 2025
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0"
              >
                <a
                  href="#"
                  class="inline-block relative w-[36px] h-[36px] text-center text-gray-500 dark:text-gray-400 transition-all border border-gray-100 dark:border-[#172036] rounded-full hover:bg-primary-500 hover:border-primary-500 hover:text-white"
                >
                  <i
                    class="material-symbols-outlined absolute left-0 right-0 !text-lg top-1/2 -translate-y-1/2"
                  >
                    arrow_outward
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center">
                  <div class="flex items-center">
                    <div
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        alt="user-image"
                        src="@/assets/images/users/user22.jpg"
                        class="rounded-full"
                      />
                    </div>
                    <div
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        alt="user-image"
                        src="@/assets/images/users/user23.jpg"
                        class="rounded-full"
                      />
                    </div>
                    <div
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        alt="user-image"
                        src="@/assets/images/users/user24.jpg"
                        class="rounded-full"
                      />
                    </div>
                  </div>
                  <div class="ltr:ml-[10px] rtl:mr-[10px]">
                    <span class="block font-medium"> Web Development </span>
                    <span
                      class="block mt-[5px] text-gray-500 dark:text-gray-400"
                    >
                      10 March 2025
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0"
              >
                <a
                  href="#"
                  class="inline-block relative w-[36px] h-[36px] text-center text-gray-500 dark:text-gray-400 transition-all border border-gray-100 dark:border-[#172036] rounded-full hover:bg-primary-500 hover:border-primary-500 hover:text-white"
                >
                  <i
                    class="material-symbols-outlined absolute left-0 right-0 !text-lg top-1/2 -translate-y-1/2"
                  >
                    arrow_outward
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center">
                  <div class="flex items-center">
                    <div
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        alt="user-image"
                        src="@/assets/images/users/user25.jpg"
                        class="rounded-full"
                      />
                    </div>
                    <div
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        alt="user-image"
                        src="@/assets/images/users/user26.jpg"
                        class="rounded-full"
                      />
                    </div>
                    <div
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        alt="user-image"
                        src="@/assets/images/users/user27.jpg"
                        class="rounded-full"
                      />
                    </div>
                  </div>
                  <div class="ltr:ml-[10px] rtl:mr-[10px]">
                    <span class="block font-medium"> UX/UI Design </span>
                    <span
                      class="block mt-[5px] text-gray-500 dark:text-gray-400"
                    >
                      05 March 2025
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0"
              >
                <a
                  href="#"
                  class="inline-block relative w-[36px] h-[36px] text-center text-gray-500 dark:text-gray-400 transition-all border border-gray-100 dark:border-[#172036] rounded-full hover:bg-primary-500 hover:border-primary-500 hover:text-white"
                >
                  <i
                    class="material-symbols-outlined absolute left-0 right-0 !text-lg top-1/2 -translate-y-1/2"
                  >
                    arrow_outward
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center">
                  <div class="flex items-center">
                    <div
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        alt="user-image"
                        src="@/assets/images/users/user28.jpg"
                        class="rounded-full"
                      />
                    </div>
                    <div
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        alt="user-image"
                        src="@/assets/images/users/user29.jpg"
                        class="rounded-full"
                      />
                    </div>
                    <div
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        alt="user-image"
                        src="@/assets/images/users/user30.jpg"
                        class="rounded-full"
                      />
                    </div>
                  </div>
                  <div class="ltr:ml-[10px] rtl:mr-[10px]">
                    <span class="block font-medium"> Content Writer </span>
                    <span
                      class="block mt-[5px] text-gray-500 dark:text-gray-400"
                    >
                      02 March 2025
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0"
              >
                <a
                  href="#"
                  class="inline-block relative w-[36px] h-[36px] text-center text-gray-500 dark:text-gray-400 transition-all border border-gray-100 dark:border-[#172036] rounded-full hover:bg-primary-500 hover:border-primary-500 hover:text-white"
                >
                  <i
                    class="material-symbols-outlined absolute left-0 right-0 !text-lg top-1/2 -translate-y-1/2"
                  >
                    arrow_outward
                  </i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <PaginationTwo items="5" total="10" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaginationTwo from "@/components/Common/PaginationTwo.vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "GroupLessons",
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
