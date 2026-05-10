<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title flex items-center">
        <img
          src="@/assets/images/users/user11.jpg"
          alt="user-image"
          class="rounded-full w-[65px] h-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
        />
        <div class="ltr:ml-[12px] rtl:mr-[12px]">
          <span
            class="block font-medium text-black dark:text-white mb-[2px] text-md"
          >
            Ava Turner
          </span>
          <span class="block"> Team Leader </span>
        </div>
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
                Block
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Delete
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Report
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="trezo-card-content">
      <ul>
        <li
          class="mb-[15px] md:mb-[17px] last:mb-0 text-black dark:text-white font-medium"
        >
          <span
            class="block font-normal mb-[5px] text-gray-500 dark:text-gray-400"
          >
            Account ID:
          </span>
          ID-12174123
        </li>
        <li
          class="mb-[15px] md:mb-[17px] last:mb-0 text-black dark:text-white font-medium"
        >
          <span
            class="block font-normal mb-[5px] text-gray-500 dark:text-gray-400"
          >
            Billing Email:
          </span>
          ava@trezo.com
        </li>
        <li
          class="mb-[15px] md:mb-[17px] last:mb-0 text-black dark:text-white font-medium"
        >
          <span
            class="block font-normal mb-[5px] text-gray-500 dark:text-gray-400"
          >
            Delivery Address:
          </span>
          715 Maple St, Hamletville, England
        </li>
        <li
          class="mb-[15px] md:mb-[17px] last:mb-0 text-black dark:text-white font-medium"
        >
          <span
            class="block font-normal mb-[5px] text-gray-500 dark:text-gray-400"
          >
            Language:
          </span>
          English, Spanish
        </li>
        <li
          class="mb-[15px] md:mb-[17px] last:mb-0 text-black dark:text-white font-medium"
        >
          <span
            class="block font-normal mb-[5px] text-gray-500 dark:text-gray-400"
          >
            Latest Transaction:
          </span>
          #JAN-121
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "UserCard",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    return {
      isActive,
      toggleActive,
    };
  },
});
</script>
