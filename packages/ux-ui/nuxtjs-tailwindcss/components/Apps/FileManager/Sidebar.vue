<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <form class="relative mb-[20px] md:mb-[27px]">
        <input
          type="text"
          class="block w-full rounded-md text-black dark:text-white px-[15px] bg-gray-50 dark:bg-[#15203c] border border-gray-50 dark:border-[#15203c] focus:border-primary-500 h-[44px] outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
          placeholder="Search here....."
        />
        <button
          class="absolute text-primary-500 mt-px ltr:right-[15px] rtl:left-[15px] top-1/2 -translate-y-1/2 hover:text-primary-400"
        >
          <i class="material-symbols-outlined !text-[20px]"> search </i>
        </button>
      </form>

      <ul class="mb-[20px] md:mb-[25px]">
        <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
          <NuxtLink
            to="/apps/file-manager/my-drive"
            class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-primary-500 hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]"
            >
              drive_eta
            </i>
            My Drive
            <span
              class="text-sm font-normal block text-gray-500 dark:text-gray-400"
            >
              4
            </span>
          </NuxtLink>
          <ul
            class="bar-navs ltr:pl-[28px] rtl:pr-[28px] mt-[15px] md:mt-[17px] mb-[17px] md:mb-[21px]"
          >
            <li class="font-normal mb-[12px] md:mb-[14px] last:mb-0">
              <NuxtLink
                to="/apps/file-manager/assets"
                class="inline-block relative transition-all hover:text-primary-500 ltr:pl-[15px] rtl:pr-[15px]"
              >
                <span
                  class="ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full absolute border border-primary-500"
                ></span>
                Assets
              </NuxtLink>
            </li>
            <li class="font-normal mb-[12px] md:mb-[14px] last:mb-0">
              <NuxtLink
                to="/apps/file-manager/projects"
                class="inline-block relative transition-all hover:text-primary-500 ltr:pl-[15px] rtl:pr-[15px]"
              >
                <span
                  class="ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full absolute border border-primary-500"
                ></span>
                Projects
              </NuxtLink>
            </li>
            <li class="font-normal mb-[12px] md:mb-[14px] last:mb-0">
              <NuxtLink
                to="/apps/file-manager/personal"
                class="inline-block relative transition-all hover:text-primary-500 ltr:pl-[15px] rtl:pr-[15px]"
              >
                <span
                  class="ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full absolute border border-primary-500"
                ></span>
                Personal
              </NuxtLink>
            </li>
            <li class="font-normal mb-[12px] md:mb-[14px] last:mb-0">
              <NuxtLink
                to="/apps/file-manager/applications"
                class="inline-block relative transition-all hover:text-primary-500 ltr:pl-[15px] rtl:pr-[15px]"
              >
                <span
                  class="ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full absolute border border-primary-500"
                ></span>
                Applications
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
          <NuxtLink
            to="/apps/file-manager/documents"
            class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-black dark:text-white hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined text-success-600 absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]"
            >
              description
            </i>
            Documents
          </NuxtLink>
        </li>
        <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
          <NuxtLink
            to="/apps/file-manager/media"
            class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-black dark:text-white hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined text-info-400 absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]"
            >
              perm_media
            </i>
            Media
          </NuxtLink>
        </li>
        <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
          <NuxtLink
            to="/apps/file-manager/recents"
            class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-black dark:text-white hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined text-purple-500 absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]"
            >
              schedule
            </i>
            Recents
          </NuxtLink>
        </li>
        <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
          <NuxtLink
            to="/apps/file-manager/important"
            class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-black dark:text-white hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined text-warning-500 absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]"
            >
              grade
            </i>
            Important
          </NuxtLink>
        </li>
        <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
          <a
            href="#"
            class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-black dark:text-white hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined text-secondary-500 absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]"
            >
              report_gmailerrorred
            </i>
            Spam
            <span
              class="text-sm font-normal block text-gray-500 dark:text-gray-400"
            >
              10
            </span>
          </a>
        </li>
        <li class="font-medium mb-[15px] md:mb-[19px] last:mb-0">
          <a
            href="#"
            class="relative flex items-center justify-between ltr:pl-[28px] rtl:pr-[28px] transition-all text-black dark:text-white hover:text-primary-500"
          >
            <i
              class="material-symbols-outlined text-danger-500 absolute !text-lg ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-[.5px]"
            >
              delete
            </i>
            Trash
            <span
              class="text-sm font-normal block text-gray-500 dark:text-gray-400"
            >
              15
            </span>
          </a>
        </li>
      </ul>

      <div
        class="border-t border-gray-100 dark:border-[#172036] -mx-[20px] md:-mx-[25px] px-[20px] md:px-[25px] pt-[20px] md:pt-[25px]"
      >
        <h6 class="!mb-[11px] !text-[15px]">Storage Status</h6>
        <span class="block text-sm"> % 50 GB used of 100 GB </span>
        <div
          class="mt-[11px] flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
        >
          <div
            class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
            style="width: 50%"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
});
</script>

<style lang="scss" scoped>
ul {
  li {
    a {
      &.active {
        --tw-text-opacity: 1;
        color: rgb(96 93 255 / var(--tw-text-opacity, 1));
      }
    }
  }
}
</style>
