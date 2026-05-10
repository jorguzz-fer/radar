<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md mb-[25px] last:mb-0"
  >
    <div
      class="trezo-card-header pb-[18px] mb-[20px] flex items-center justify-between border-b border-gray-100 dark:border-[#172036]"
    >
      <div class="trezo-card-title flex items-center">
        <img
          src="@/assets/images/users/user6.jpg"
          alt="user-image"
          class="rounded-full w-[50px]"
        />
        <div class="ltr:ml-[12px] rtl:mr-[12px]">
          <span class="block text-black dark:text-white font-semibold">
            Cynthia Baggett
          </span>
          <span class="block mt-[2px]"> 05 mins ago </span>
        </div>
      </div>
      <div class="trezo-card-subtitle">
        <DropdownToggleBtn />
      </div>
    </div>
    <div class="trezo-card-content">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions.
      </p>
      <div
        class="sm:flex items-center gap-[30px] mt-[20px] py-[15px] border-y border-gray-100 dark:border-[#172036]"
      >
        <button
          type="button"
          class="block relative ltr:pl-[25px] rtl:pr-[25px] transition-all hover:text-primary-500 mt-[10px] first:mt-0 sm:mt-0"
        >
          <i
            class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
          >
            thumb_up
          </i>
          10 Likes
        </button>
        <button
          type="button"
          class="block relative ltr:pl-[25px] rtl:pr-[25px] transition-all hover:text-primary-500 mt-[10px] first:mt-0 sm:mt-0"
        >
          <i
            class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
          >
            chat_bubble_outline
          </i>
          0 Comments
        </button>
        <button
          type="button"
          class="block relative ltr:pl-[25px] rtl:pr-[25px] transition-all hover:text-primary-500 mt-[10px] first:mt-0 sm:mt-0"
        >
          <i
            class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
          >
            share
          </i>
          0 Share
        </button>
      </div>
      <div class="mt-[20px] md:flex items-center gap-[20px]">
        <div class="w-[55px]">
          <img
            src="@/assets/images/profile.jpg"
            alt="profile-image"
            class="rounded-full"
          />
        </div>
        <div
          class="relative mt-[15px] md:mt-0 md:ltr:pr-[70px] md:rtl:pl-[70px] flex-auto"
        >
          <input
            type="text"
            class="block w-full rounded-md bg-white dark:bg-[#0c1427] px-[17px] h-[55px] text-black dark:text-white placeholder:text-gray-500 dark:text-gray-400 outline-0 border border-gray-200 dark:border-[#172036]"
            placeholder="Type something...."
          />
          <button
            type="submit"
            class="md:absolute flex items-center justify-center ltr:right-0 rtl:left-0 rounded-sm transition-all bg-primary-500 text-white hover:bg-primary-400 md:top-1/2 md:-translate-y-1/2 w-[55px] h-[55px] mt-[15px] md:mt-0"
          >
            <i class="material-symbols-outlined"> send </i>
          </button>
        </div>
        <div class="flex items-center gap-[15px] mt-[15px] sm:mt-0">
          <button type="button" class="transition-all hover:text-primary-500">
            <i class="material-symbols-outlined !text-[20px]">
              sentiment_satisfied
            </i>
          </button>
          <button type="button" class="transition-all hover:text-primary-500">
            <i class="material-symbols-outlined !text-[20px]"> attach_file </i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md mb-[25px] last:mb-0"
  >
    <div
      class="trezo-card-header pb-[18px] mb-[20px] flex items-center justify-between border-b border-gray-100 dark:border-[#172036]"
    >
      <div class="trezo-card-title flex items-center">
        <img
          src="@/assets/images/users/user7.jpg"
          alt="user-image"
          class="rounded-full w-[50px]"
        />
        <div class="ltr:ml-[12px] rtl:mr-[12px]">
          <span class="block text-black dark:text-white font-semibold">
            Douglas Hairston
          </span>
          <span class="block mt-[2px]"> 1 hour ago </span>
        </div>
      </div>
      <div class="trezo-card-subtitle">
        <DropdownToggleBtn />
      </div>
    </div>
    <div class="trezo-card-content">
      <p>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of lorem
        ipsum.
      </p>
      <div
        class="sm:flex items-center gap-[30px] mt-[20px] py-[15px] border-y border-gray-100 dark:border-[#172036]"
      >
        <button
          type="button"
          class="block relative ltr:pl-[25px] rtl:pr-[25px] transition-all hover:text-primary-500 mt-[10px] first:mt-0 sm:mt-0"
        >
          <i
            class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
          >
            thumb_up
          </i>
          42 Likes
        </button>
        <button
          type="button"
          class="block relative ltr:pl-[25px] rtl:pr-[25px] transition-all hover:text-primary-500 mt-[10px] first:mt-0 sm:mt-0"
        >
          <i
            class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
          >
            chat_bubble_outline
          </i>
          2 Comments
        </button>
        <button
          type="button"
          class="block relative ltr:pl-[25px] rtl:pr-[25px] transition-all hover:text-primary-500 mt-[10px] first:mt-0 sm:mt-0"
        >
          <i
            class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
          >
            share
          </i>
          1 Share
        </button>
      </div>
      <div class="mt-[20px] md:flex items-center gap-[20px]">
        <div class="w-[55px]">
          <img
            src="@/assets/images/profile.jpg"
            alt="profile-image"
            class="rounded-full"
          />
        </div>
        <div
          class="relative mt-[15px] md:mt-0 md:ltr:pr-[70px] md:rtl:pl-[70px] flex-auto"
        >
          <input
            type="text"
            class="block w-full rounded-md bg-white dark:bg-[#0c1427] px-[17px] h-[55px] text-black dark:text-white placeholder:text-gray-500 dark:text-gray-400 outline-0 border border-gray-200 dark:border-[#172036]"
            placeholder="Type something...."
          />
          <button
            type="submit"
            class="md:absolute flex items-center justify-center ltr:right-0 rtl:left-0 rounded-sm transition-all bg-primary-500 text-white hover:bg-primary-400 md:top-1/2 md:-translate-y-1/2 w-[55px] h-[55px] mt-[15px] md:mt-0"
          >
            <i class="material-symbols-outlined"> send </i>
          </button>
        </div>
        <div class="flex items-center gap-[15px] mt-[15px] sm:mt-0">
          <button type="button" class="transition-all hover:text-primary-500">
            <i class="material-symbols-outlined !text-[20px]">
              sentiment_satisfied
            </i>
          </button>
          <button type="button" class="transition-all hover:text-primary-500">
            <i class="material-symbols-outlined !text-[20px]"> attach_file </i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md mb-[25px] last:mb-0"
  >
    <div
      class="trezo-card-header pb-[18px] mb-[20px] flex items-center justify-between border-b border-gray-100 dark:border-[#172036]"
    >
      <div class="trezo-card-title flex items-center">
        <img
          src="@/assets/images/users/user8.jpg"
          alt="user-image"
          class="rounded-full w-[50px]"
        />
        <div class="ltr:ml-[12px] rtl:mr-[12px]">
          <span class="block text-black dark:text-white font-semibold">
            Olivia John
          </span>
          <span class="block mt-[2px]"> 1 day ago </span>
        </div>
      </div>
      <div class="trezo-card-subtitle">
        <DropdownToggleBtn />
      </div>
    </div>
    <div class="trezo-card-content">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <div
        class="sm:flex items-center gap-[30px] mt-[20px] py-[15px] border-y border-gray-100 dark:border-[#172036]"
      >
        <button
          type="button"
          class="block relative ltr:pl-[25px] rtl:pr-[25px] transition-all hover:text-primary-500 mt-[10px] first:mt-0 sm:mt-0"
        >
          <i
            class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
          >
            thumb_up
          </i>
          100 Likes
        </button>
        <button
          type="button"
          class="block relative ltr:pl-[25px] rtl:pr-[25px] transition-all hover:text-primary-500 mt-[10px] first:mt-0 sm:mt-0"
        >
          <i
            class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
          >
            chat_bubble_outline
          </i>
          16 Comments
        </button>
        <button
          type="button"
          class="block relative ltr:pl-[25px] rtl:pr-[25px] transition-all hover:text-primary-500 mt-[10px] first:mt-0 sm:mt-0"
        >
          <i
            class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
          >
            share
          </i>
          5 Share
        </button>
      </div>
      <div class="mt-[20px] md:flex items-center gap-[20px]">
        <div class="w-[55px]">
          <img
            src="@/assets/images/profile.jpg"
            alt="profile-image"
            class="rounded-full"
          />
        </div>
        <div
          class="relative mt-[15px] md:mt-0 md:ltr:pr-[70px] md:rtl:pl-[70px] flex-auto"
        >
          <input
            type="text"
            class="block w-full rounded-md bg-white dark:bg-[#0c1427] px-[17px] h-[55px] text-black dark:text-white placeholder:text-gray-500 dark:text-gray-400 outline-0 border border-gray-200 dark:border-[#172036]"
            placeholder="Type something...."
          />
          <button
            type="submit"
            class="md:absolute flex items-center justify-center ltr:right-0 rtl:left-0 rounded-sm transition-all bg-primary-500 text-white hover:bg-primary-400 md:top-1/2 md:-translate-y-1/2 w-[55px] h-[55px] mt-[15px] md:mt-0"
          >
            <i class="material-symbols-outlined"> send </i>
          </button>
        </div>
        <div class="flex items-center gap-[15px] mt-[15px] sm:mt-0">
          <button type="button" class="transition-all hover:text-primary-500">
            <i class="material-symbols-outlined !text-[20px]">
              sentiment_satisfied
            </i>
          </button>
          <button type="button" class="transition-all hover:text-primary-500">
            <i class="material-symbols-outlined !text-[20px]"> attach_file </i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DropdownToggleBtn from "./DropdownToggleBtn.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Timeline",
  components: {
    DropdownToggleBtn,
  },
});
</script>
