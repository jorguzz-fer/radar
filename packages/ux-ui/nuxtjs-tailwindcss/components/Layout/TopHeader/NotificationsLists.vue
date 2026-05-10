<template>
  <Menu
    as="div"
    class="relative notifications-menu mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
  >
    <MenuButton
      class="leading-none inline-block transition-all relative top-[2px] hover:text-primary-500"
    >
      <i class="material-symbols-outlined !text-[22px] md:!text-[24px]">
        notifications
      </i>
      <span
        class="top-[3px] ltr:right-[4px] rtl:left-[4px] w-[6px] h-[6px] rounded-full absolute bg-orange-500"
      ></span>
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
        class="bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none py-[17px] absolute mt-[17px] md:mt-[20px] w-[290px] md:w-[350px] z-[1] top-full ltr:-right-[120px] ltr:md:right-0 rtl:-left-[120px] rtl:md:left-0 rounded-md focus:outline-hidden"
      >
        <div class="flex items-center justify-between px-[20px] pb-[17px]">
          <span class="font-semibold text-black dark:text-white text-[15px]">
            Notifications
            <span
              class="text-gray-500 dark:text-gray-400 font-normal text-base"
            >
              (03)
            </span>
          </span>
          <a href="javascript:void(0);" class="text-primary-500"> Clear All </a>
        </div>

        <ul class="mb-[18px]">
          <li
            class="relative border-b border-gray-100 dark:border-[#172036] border-dashed py-[17px] ltr:pl-[75px] ltr:pr-[20px] rtl:pr-[75px] rtl:pl-[20px] first:border-t first:border-gray-100 dark:first:border-[#172036]"
          >
            <div
              class="rounded-full flex items-center justify-center absolute text-center transition-all top-1/2 -translate-y-1/2 ltr:left-[20px] rtl:right-[20px] w-[44px] h-[44px] text-primary-500 bg-[#4936f50d]"
            >
              <i class="material-symbols-outlined !text-[22px]"> sms </i>
            </div>
            <span class="block mb-[3px] text-black dark:text-white">
              You have requested to
              <strong class="font-semibold">withdrawal</strong>
            </span>
            <span class="block"> 2 hrs ago </span>
            <NuxtLink
              to="/notifications"
              class="block left-0 top-0 right-0 bottom-0 z-[1] absolute"
            ></NuxtLink>
          </li>
          <li
            class="relative border-b border-gray-100 dark:border-[#172036] border-dashed py-[17px] ltr:pl-[75px] ltr:pr-[20px] rtl:pr-[75px] rtl:pl-[20px] first:border-t first:border-gray-100 dark:first:border-[#172036]"
          >
            <div
              class="rounded-full flex items-center justify-center absolute text-center transition-all top-1/2 -translate-y-1/2 ltr:left-[20px] rtl:right-[20px] w-[44px] h-[44px] text-[#39b2de] bg-[#4936f50d]"
            >
              <i class="material-symbols-outlined !text-[22px]"> person </i>
            </div>
            <span class="block mb-[3px] text-black dark:text-white">
              <strong class="font-semibold">A new user</strong> added in Trezo
            </span>
            <span class="block"> 3 hrs ago </span>
            <NuxtLink
              to="/notifications"
              class="block left-0 top-0 right-0 bottom-0 z-[1] absolute"
            ></NuxtLink>
            <span
              class="inline-block rounded-full bg-primary-500 absolute w-[6px] h-[6px] right-[20px] top-1/2 -translate-y-1/2"
            ></span>
          </li>
          <li
            class="relative border-b border-gray-100 dark:border-[#172036] border-dashed py-[17px] ltr:pl-[75px] ltr:pr-[20px] rtl:pr-[75px] rtl:pl-[20px] first:border-t first:border-gray-100 dark:first:border-[#172036]"
          >
            <div
              class="rounded-full flex items-center justify-center absolute text-center transition-all top-1/2 -translate-y-1/2 ltr:left-[20px] rtl:right-[20px] w-[44px] h-[44px] text-[#00b69b] bg-[#4936f50d]"
            >
              <i class="material-symbols-outlined !text-[22px]">
                mark_email_unread
              </i>
            </div>
            <span class="block mb-[3px] text-black dark:text-white">
              You have requested to
              <strong class="font-semibold">withdrawal</strong>
            </span>
            <span class="block"> 1 day ago </span>
            <NuxtLink
              to="/notifications"
              class="block left-0 top-0 right-0 bottom-0 z-[1] absolute"
            ></NuxtLink>
          </li>
        </ul>
        <div class="text-center">
          <NuxtLink
            to="/notifications"
            class="inline-block font-medium relative text-primary-500 transition-all hover:underline"
          >
            See All Notifications
          </NuxtLink>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";

export default defineComponent({
  name: "NotificationsLists",
  components: {
    Menu,
    MenuButton,
    MenuItems,
  },
});
</script>
