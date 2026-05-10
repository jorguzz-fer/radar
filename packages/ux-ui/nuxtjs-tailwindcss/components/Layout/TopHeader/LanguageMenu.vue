<template>
  <Menu
    as="div"
    class="relative language-menu mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
  >
    <MenuButton
      class="leading-none pr-[12px] inline-block transition-all relative top-[2px] hover:text-primary-500"
    >
      <i class="material-symbols-outlined !text-[20px] md:!text-[22px]">
        translate
      </i>
      <i
        class="ri-arrow-down-s-line text-[15px] absolute -right-[3px] top-1/2 -translate-y-1/2 -mt-[2px]"
      ></i>
    </MenuButton>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none pt-[13px] md:pt-[14px] absolute mt-[18px] md:mt-[21px] w-[200px] md:w-[240px] z-[1] top-full ltr:left-0 ltr:md:left-auto ltr:lg:right-0 rtl:right-0 rtl:md:right-auto rtl:lg:left-0 rounded-md focus:outline-hidden"
      >
        <span
          class="block text-black dark:text-white font-semibold px-[20px] pb-[14px] text-sm md:text-[15px]"
        >
          Choose Language
        </span>
        <ul>
          <li
            class="border-t border-dashed border-gray-100 dark:border-[#172036]"
          >
            <button
              type="button"
              class="text-black dark:text-white px-[20px] py-[12px] d-block w-full font-medium"
            >
              <div class="flex items-center">
                <img
                  src="@/assets/images/flags/usa.svg"
                  class="w-[30px] ltr:mr-[10px] rtl:ml-[10px]"
                  alt="usa"
                />
                English
              </div>
            </button>
          </li>
          <li
            class="border-t border-dashed border-gray-100 dark:border-[#172036]"
          >
            <button
              type="button"
              class="text-black dark:text-white px-[20px] py-[12px] d-block w-full font-medium"
            >
              <div class="flex items-center">
                <img
                  src="@/assets/images/flags/france.svg"
                  class="w-[30px] ltr:mr-[10px] rtl:ml-[10px]"
                  alt="france"
                />
                French
              </div>
            </button>
          </li>
          <li
            class="border-t border-dashed border-gray-100 dark:border-[#172036]"
          >
            <button
              type="button"
              class="text-black dark:text-white px-[20px] py-[12px] d-block w-full font-medium"
            >
              <div class="flex items-center">
                <img
                  src="@/assets/images/flags/germany.svg"
                  class="w-[30px] ltr:mr-[10px] rtl:ml-[10px]"
                  alt="germany"
                />
                German
              </div>
            </button>
          </li>
          <li
            class="border-t border-dashed border-gray-100 dark:border-[#172036]"
          >
            <button
              type="button"
              class="text-black dark:text-white px-[20px] py-[12px] d-block w-full font-medium"
            >
              <div class="flex items-center">
                <img
                  src="@/assets/images/flags/portugal.svg"
                  class="w-[30px] ltr:mr-[10px] rtl:ml-[10px]"
                  alt="portugal"
                />
                Portuguese
              </div>
            </button>
          </li>
          <li
            class="border-t border-dashed border-gray-100 dark:border-[#172036]"
          >
            <button
              type="button"
              class="text-black dark:text-white px-[20px] py-[12px] d-block w-full font-medium"
            >
              <div class="flex items-center">
                <img
                  src="@/assets/images/flags/spain.svg"
                  class="w-[30px] ltr:mr-[10px] rtl:ml-[10px]"
                  alt="spain"
                />
                Spanish
              </div>
            </button>
          </li>
        </ul>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";

export default defineComponent({
  name: "LanguageMenu",
  components: {
    Menu,
    MenuButton,
    MenuItems,
  },
});
</script>
