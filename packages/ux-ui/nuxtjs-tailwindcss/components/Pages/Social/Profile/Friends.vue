<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Friends</h5>
      </div>

      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            class="trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500"
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
      <form class="relative mb-[20px]">
        <label
          class="absolute ltr:left-[13px] rtl:right-[13px] mt-[2px] top-1/2 -translate-y-1/2"
        >
          <i class="material-symbols-outlined !text-[20px]"> search </i>
        </label>
        <input
          type="text"
          class="block w-full rounded-md text-black dark:text-white bg-gray-50 dark:bg-[#15203c] border border-gray-50 dark:border-[#15203c] focus:border-primary-500 h-[44px] outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 ltr:pl-[37px] rtl:pr-[37px] ltr:pr-[15px] rtl:pl-[15px]"
          placeholder="Search..."
        />
      </form>
      <div
        class="flex items-center justify-between mb-[15px] pb-[15px] border-b border-gray-100 dark:border-[#172036] last:border-none last:pb-0 last:mb-0"
      >
        <div class="flex items-center">
          <div class="relative w-[45px]">
            <img
              src="@/assets/images/users/user7.jpg"
              alt="user-image"
              class="rounded-full"
            />
            <span
              class="absolute w-[10px] h-[10px] rounded-full bottom-[4px] border-[2px] border-white dark:border-[#0c1427] bg-danger-500 ltr:-right-[2px] rtl:-left-[2px]"
            ></span>
          </div>
          <div class="ltr:ml-[13px] rtl:mr-[13px]">
            <span class="block text-black dark:text-white font-medium">
              Carolyn Barnes
            </span>
            <span class="block mt-[2px]"> barnes@trezo.com </span>
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
          <div class="relative w-[45px]">
            <img
              src="@/assets/images/users/user6.jpg"
              alt="user-image"
              class="rounded-full"
            />
            <span
              class="absolute w-[10px] h-[10px] rounded-full bottom-[4px] border-[2px] border-white dark:border-[#0c1427] bg-success-500 ltr:-right-[2px] rtl:-left-[2px]"
            ></span>
          </div>
          <div class="ltr:ml-[13px] rtl:mr-[13px]">
            <span class="block text-black dark:text-white font-medium">
              Marcia Baker
            </span>
            <span class="block mt-[2px]"> baker@trezo.com </span>
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
          <div class="relative w-[45px]">
            <img
              src="@/assets/images/users/user8.jpg"
              alt="user-image"
              class="rounded-full"
            />
            <span
              class="absolute w-[10px] h-[10px] rounded-full bottom-[4px] border-[2px] border-white dark:border-[#0c1427] bg-success-500 ltr:-right-[2px] rtl:-left-[2px]"
            ></span>
          </div>
          <div class="ltr:ml-[13px] rtl:mr-[13px]">
            <span class="block text-black dark:text-white font-medium">
              Donna Miller
            </span>
            <span class="block mt-[2px]"> miller@trezo.com </span>
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
          <div class="relative w-[45px]">
            <img
              src="@/assets/images/users/user9.jpg"
              alt="user-image"
              class="rounded-full"
            />
            <span
              class="absolute w-[10px] h-[10px] rounded-full bottom-[4px] border-[2px] border-white dark:border-[#0c1427] bg-danger-500 ltr:-right-[2px] rtl:-left-[2px]"
            ></span>
          </div>
          <div class="ltr:ml-[13px] rtl:mr-[13px]">
            <span class="block text-black dark:text-white font-medium">
              Barbara Cross
            </span>
            <span class="block mt-[2px]"> cross@trezo.com </span>
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
          <div class="relative w-[45px]">
            <img
              src="@/assets/images/users/user10.jpg"
              alt="user-image"
              class="rounded-full"
            />
            <span
              class="absolute w-[10px] h-[10px] rounded-full bottom-[4px] border-[2px] border-white dark:border-[#0c1427] bg-danger-500 ltr:-right-[2px] rtl:-left-[2px]"
            ></span>
          </div>
          <div class="ltr:ml-[13px] rtl:mr-[13px]">
            <span class="block text-black dark:text-white font-medium">
              Rebecca Block
            </span>
            <span class="block mt-[2px]"> block@trezo.com </span>
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
          <div class="relative w-[45px]">
            <img
              src="@/assets/images/users/user11.jpg"
              alt="user-image"
              class="rounded-full"
            />
            <span
              class="absolute w-[10px] h-[10px] rounded-full bottom-[4px] border-[2px] border-white dark:border-[#0c1427] bg-danger-500 ltr:-right-[2px] rtl:-left-[2px]"
            ></span>
          </div>
          <div class="ltr:ml-[13px] rtl:mr-[13px]">
            <span class="block text-black dark:text-white font-medium">
              Ramiro McCarty
            </span>
            <span class="block mt-[2px]"> mccarty@trezo.com </span>
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
          <div class="relative w-[45px]">
            <img
              src="@/assets/images/users/user12.jpg"
              alt="user-image"
              class="rounded-full"
            />
            <span
              class="absolute w-[10px] h-[10px] rounded-full bottom-[4px] border-[2px] border-white dark:border-[#0c1427] bg-success-500 ltr:-right-[2px] rtl:-left-[2px]"
            ></span>
          </div>
          <div class="ltr:ml-[13px] rtl:mr-[13px]">
            <span class="block text-black dark:text-white font-medium">
              Robert Fairweather
            </span>
            <span class="block mt-[2px]"> fairweather@trezo.com </span>
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
          <div class="relative w-[45px]">
            <img
              src="@/assets/images/users/user13.jpg"
              alt="user-image"
              class="rounded-full"
            />
            <span
              class="absolute w-[10px] h-[10px] rounded-full bottom-[4px] border-[2px] border-white dark:border-[#0c1427] bg-danger-500 ltr:-right-[2px] rtl:-left-[2px]"
            ></span>
          </div>
          <div class="ltr:ml-[13px] rtl:mr-[13px]">
            <span class="block text-black dark:text-white font-medium">
              Marcelino Haddock
            </span>
            <span class="block mt-[2px]"> haddock@trezo.com </span>
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
          <div class="relative w-[45px]">
            <img
              src="@/assets/images/users/user14.jpg"
              alt="user-image"
              class="rounded-full"
            />
            <span
              class="absolute w-[10px] h-[10px] rounded-full bottom-[4px] border-[2px] border-white dark:border-[#0c1427] bg-danger-500 ltr:-right-[2px] rtl:-left-[2px]"
            ></span>
          </div>
          <div class="ltr:ml-[13px] rtl:mr-[13px]">
            <span class="block text-black dark:text-white font-medium">
              Thomas Wilson
            </span>
            <span class="block mt-[2px]"> wilson@trezo.com </span>
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
          <div class="relative w-[45px]">
            <img
              src="@/assets/images/users/user15.jpg"
              alt="user-image"
              class="rounded-full"
            />
            <span
              class="absolute w-[10px] h-[10px] rounded-full bottom-[4px] border-[2px] border-white dark:border-[#0c1427] bg-danger-500 ltr:-right-[2px] rtl:-left-[2px]"
            ></span>
          </div>
          <div class="ltr:ml-[13px] rtl:mr-[13px]">
            <span class="block text-black dark:text-white font-medium">
              Nathaniel Hulsey
            </span>
            <span class="block mt-[2px]"> hulsey@trezo.com </span>
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
  name: "Friends",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    return {
      isActive,
      toggleActive,
    };
  },
});
</script>
