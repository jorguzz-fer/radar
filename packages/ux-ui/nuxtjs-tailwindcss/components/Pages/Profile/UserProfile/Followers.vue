<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Followers</h5>
      </div>
      <div class="trezo-card-subtitle">
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
              This Month
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
      <div
        class="flex items-center justify-between mb-[15px] pb-[15px] border-b border-gray-100 dark:border-[#172036] last:border-none last:pb-0 last:mb-0"
      >
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user6.jpg"
            alt="user-image"
            class="rounded-full w-[42px]"
          />
          <div class="ltr:ml-[12px] rtl:mr-[12px]">
            <span class="block text-black dark:text-white font-medium">
              Alex Davis
            </span>
            <span class="block mt-[2px]"> alex@trezo.com </span>
          </div>
        </div>
        <a
          href="javascript:void(0);"
          class="flex items-center justify-center w-[36px] h-[36px] rounded-full border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:border-primary-500 hover:text-white"
        >
          <i class="material-symbols-outlined !text-lg"> arrow_outward </i>
        </a>
      </div>
      <div
        class="flex items-center justify-between mb-[15px] pb-[15px] border-b border-gray-100 dark:border-[#172036] last:border-none last:pb-0 last:mb-0"
      >
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user7.jpg"
            alt="user-image"
            class="rounded-full w-[42px]"
          />
          <div class="ltr:ml-[12px] rtl:mr-[12px]">
            <span class="block text-black dark:text-white font-medium">
              Laura Martinez
            </span>
            <span class="block mt-[2px]"> laura@trezo.com </span>
          </div>
        </div>
        <a
          href="javascript:void(0);"
          class="flex items-center justify-center w-[36px] h-[36px] rounded-full border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:border-primary-500 hover:text-white"
        >
          <i class="material-symbols-outlined !text-lg"> arrow_outward </i>
        </a>
      </div>
      <div
        class="flex items-center justify-between mb-[15px] pb-[15px] border-b border-gray-100 dark:border-[#172036] last:border-none last:pb-0 last:mb-0"
      >
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user8.jpg"
            alt="user-image"
            class="rounded-full w-[42px]"
          />
          <div class="ltr:ml-[12px] rtl:mr-[12px]">
            <span class="block text-black dark:text-white font-medium">
              Mark Thompson
            </span>
            <span class="block mt-[2px]"> mark@trezo.com </span>
          </div>
        </div>
        <a
          href="javascript:void(0);"
          class="flex items-center justify-center w-[36px] h-[36px] rounded-full border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:border-primary-500 hover:text-white"
        >
          <i class="material-symbols-outlined !text-lg"> arrow_outward </i>
        </a>
      </div>
      <div
        class="flex items-center justify-between mb-[15px] pb-[15px] border-b border-gray-100 dark:border-[#172036] last:border-none last:pb-0 last:mb-0"
      >
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user9.jpg"
            alt="user-image"
            class="rounded-full w-[42px]"
          />
          <div class="ltr:ml-[12px] rtl:mr-[12px]">
            <span class="block text-black dark:text-white font-medium">
              Rachel White
            </span>
            <span class="block mt-[2px]"> rachel@trezo.com </span>
          </div>
        </div>
        <a
          href="javascript:void(0);"
          class="flex items-center justify-center w-[36px] h-[36px] rounded-full border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:border-primary-500 hover:text-white"
        >
          <i class="material-symbols-outlined !text-lg"> arrow_outward </i>
        </a>
      </div>
      <div
        class="flex items-center justify-between mb-[15px] pb-[15px] border-b border-gray-100 dark:border-[#172036] last:border-none last:pb-0 last:mb-0"
      >
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user10.jpg"
            alt="user-image"
            class="rounded-full w-[42px]"
          />
          <div class="ltr:ml-[12px] rtl:mr-[12px]">
            <span class="block text-black dark:text-white font-medium">
              Kevin Lee
            </span>
            <span class="block mt-[2px]"> kevin@trezo.com </span>
          </div>
        </div>
        <a
          href="javascript:void(0);"
          class="flex items-center justify-center w-[36px] h-[36px] rounded-full border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:border-primary-500 hover:text-white"
        >
          <i class="material-symbols-outlined !text-lg"> arrow_outward </i>
        </a>
      </div>
      <div
        class="flex items-center justify-between mb-[15px] pb-[15px] border-b border-gray-100 dark:border-[#172036] last:border-none last:pb-0 last:mb-0"
      >
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user11.jpg"
            alt="user-image"
            class="rounded-full w-[42px]"
          />
          <div class="ltr:ml-[12px] rtl:mr-[12px]">
            <span class="block text-black dark:text-white font-medium">
              Leslie Shadle
            </span>
            <span class="block mt-[2px]"> shadle@trezo.com </span>
          </div>
        </div>
        <a
          href="javascript:void(0);"
          class="flex items-center justify-center w-[36px] h-[36px] rounded-full border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:border-primary-500 hover:text-white"
        >
          <i class="material-symbols-outlined !text-lg"> arrow_outward </i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Followers",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    return {
      isActive,
      toggleActive,
    };
  },
});
</script>
