<template>
  <Menu
    as="div"
    class="relative profile-menu mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
  >
    <MenuButton
      class="flex items-center -mx-[5px] relative ltr:pr-[14px] rtl:pl-[14px] text-black dark:text-whit"
    >
      <img
        src="@/assets/images/admin.png"
        class="w-[35px] h-[35px] md:w-[42px] md:h-[42px] rounded-full ltr:md:mr-[2px] ltr:lg:mr-[8px] rtl:md:ml-[2px] rtl:lg:ml-[8px] border-[2px] border-primary-200 inline-block"
        alt="admin-image"
      />
      <span class="block font-semibold text-[0px] lg:text-base"> Olivia </span>
      <i
        class="ri-arrow-down-s-line text-[15px] absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"
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
        class="bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none py-[22px] absolute mt-[13px] md:mt-[14px] w-[195px] z-[1] top-full ltr:right-0 rtl:left-0 rounded-md focus:outline-hidden"
      >
        <div
          class="flex items-center border-b border-gray-100 dark:border-[#172036] pb-[12px] mx-[20px] mb-[10px]"
        >
          <img
            src="@/assets/images/admin.png"
            class="rounded-full w-[31px] h-[31px] ltr:mr-[9px] rtl:ml-[9px] border-2 border-primary-200 inline-block"
            alt="admin-image"
          />
          <div>
            <span class="block text-black dark:text-white font-medium">
              Olivia John
            </span>
            <span class="block text-xs"> Marketing Manager </span>
          </div>
        </div>

        <ul>
          <li>
            <MenuItem>
              <NuxtLink
                to="/my-profile"
                class="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
                exact
              >
                <i
                  class="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]"
                >
                  account_circle
                </i>
                My Profile
              </NuxtLink>
            </MenuItem>
          </li>
          <li>
            <NuxtLink
              to="/apps/chat"
              class="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
              exact
            >
              <i
                class="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]"
              >
                chat
              </i>
              Messages
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/apps/to-do-list"
              class="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
              exact
            >
              <i
                class="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]"
              >
                format_list_bulleted
              </i>
              My Task
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/ecommerce/checkout"
              class="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
              exact
            >
              <i
                class="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]"
              >
                credit_card
              </i>
              Billing
            </NuxtLink>
          </li>
        </ul>

        <div
          class="border-t border-gray-100 dark:border-[#172036] mx-[20px] my-[9px]"
        ></div>

        <ul>
          <li>
            <NuxtLink
              to="/social/settings"
              class="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
              exact
            >
              <i
                class="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]"
              >
                settings
              </i>
              Settings
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/faq"
              class="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
              exact
            >
              <i
                class="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]"
              >
                support
              </i>
              Support
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/authentication/lock-screen"
              class="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
              exact
            >
              <i
                class="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]"
              >
                lock
              </i>
              Lock Screen
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/authentication/logout"
              class="block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500"
              exact
            >
              <i
                class="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]"
              >
                logout
              </i>
              Logout
            </NuxtLink>
          </li>
        </ul>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default defineComponent({
  name: "AdminProfile",
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
});
</script>
