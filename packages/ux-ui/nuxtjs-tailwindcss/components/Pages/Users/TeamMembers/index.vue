<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header sm:flex items-center justify-between">
      <div class="trezo-card-title">
        <form class="relative sm:w-[265px]">
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2"
          >
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input
            type="text"
            placeholder="Search member here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
      </div>

      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <NuxtLink
          to="/users/add-user"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add New Member
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[25px] mb-[25px]"
  >
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/users/user11.jpg"
              alt="user-image"
              class="rounded-full w-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
            />
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span
                class="block text-md mb-[2px] font-medium text-black dark:text-white"
              >
                Ava Turner
              </span>
              <span class="block"> Business Analyst </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <a
              href="#"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </a>
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
              v-tooltip="'Edit'"
            >
              <i class="material-symbols-outlined !text-md"> edit </i>
            </button>
            <button
              type="button"
              class="text-danger-500 leading-none custom-tooltip"
              v-tooltip="'Delete'"
            >
              <i class="material-symbols-outlined !text-md"> delete </i>
            </button>
          </div>
        </div>
        <ul class="mt-[17px]">
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Joined Date: </span>
            01 Jan 2025
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Email Address: </span>
            turner@trezo.com
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Phone Number: </span>
            +1 555-445-4455
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Location: </span>
            Washington D.C
          </li>
        </ul>
        <div class="flex items-center gap-[10px] mt-[18px]">
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
            target="_blank"
          >
            <i
              class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
            target="_blank"
          >
            <i
              class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
            target="_blank"
          >
            <i
              class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-dark"
            target="_blank"
          >
            <i
              class="ri-github-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/users/user12.jpg"
              alt="user-image"
              class="rounded-full w-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
            />
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span
                class="block text-md mb-[2px] font-medium text-black dark:text-white"
              >
                Ethan Parker
              </span>
              <span class="block"> Project Manager </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <a
              href="#"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </a>
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
              v-tooltip="'Edit'"
            >
              <i class="material-symbols-outlined !text-md"> edit </i>
            </button>
            <button
              type="button"
              class="text-danger-500 leading-none custom-tooltip"
              v-tooltip="'Delete'"
            >
              <i class="material-symbols-outlined !text-md"> delete </i>
            </button>
          </div>
        </div>
        <ul class="mt-[17px]">
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Joined Date: </span>
            10 Jan 2025
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Email Address: </span>
            parker@trezo.com
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Phone Number: </span>
            +1 555-445-7788
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Location: </span>
            San Diego
          </li>
        </ul>
        <div class="flex items-center gap-[10px] mt-[18px]">
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
            target="_blank"
          >
            <i
              class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
            target="_blank"
          >
            <i
              class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
            target="_blank"
          >
            <i
              class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-dark"
            target="_blank"
          >
            <i
              class="ri-github-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/users/user13.jpg"
              alt="user-image"
              class="rounded-full w-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
            />
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span
                class="block text-md mb-[2px] font-medium text-black dark:text-white"
              >
                Isabella Lee
              </span>
              <span class="block"> Team Leader </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <a
              href="#"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </a>
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
              v-tooltip="'Edit'"
            >
              <i class="material-symbols-outlined !text-md"> edit </i>
            </button>
            <button
              type="button"
              class="text-danger-500 leading-none custom-tooltip"
              v-tooltip="'Delete'"
            >
              <i class="material-symbols-outlined !text-md"> delete </i>
            </button>
          </div>
        </div>
        <ul class="mt-[17px]">
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Joined Date: </span>
            20 Jan 2025
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Email Address: </span>
            lee@trezo.com
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Phone Number: </span>
            +1 555-333-2288
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Location: </span>
            Los Angeles
          </li>
        </ul>
        <div class="flex items-center gap-[10px] mt-[18px]">
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
            target="_blank"
          >
            <i
              class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
            target="_blank"
          >
            <i
              class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
            target="_blank"
          >
            <i
              class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-dark"
            target="_blank"
          >
            <i
              class="ri-github-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/users/user14.jpg"
              alt="user-image"
              class="rounded-full w-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
            />
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span
                class="block text-md mb-[2px] font-medium text-black dark:text-white"
              >
                Thompson Torres
              </span>
              <span class="block"> Designer </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <a
              href="#"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </a>
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
              v-tooltip="'Edit'"
            >
              <i class="material-symbols-outlined !text-md"> edit </i>
            </button>
            <button
              type="button"
              class="text-danger-500 leading-none custom-tooltip"
              v-tooltip="'Delete'"
            >
              <i class="material-symbols-outlined !text-md"> delete </i>
            </button>
          </div>
        </div>
        <ul class="mt-[17px]">
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Joined Date: </span>
            01 Feb 2025
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Email Address: </span>
            torres@trezo.com
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Phone Number: </span>
            +1 555-444-3355
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Location: </span>
            Boston
          </li>
        </ul>
        <div class="flex items-center gap-[10px] mt-[18px]">
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
            target="_blank"
          >
            <i
              class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
            target="_blank"
          >
            <i
              class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
            target="_blank"
          >
            <i
              class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-dark"
            target="_blank"
          >
            <i
              class="ri-github-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/users/user15.jpg"
              alt="user-image"
              class="rounded-full w-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
            />
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span
                class="block text-md mb-[2px] font-medium text-black dark:text-white"
              >
                Lucas Lyon
              </span>
              <span class="block"> Technical Writer </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <a
              href="#"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </a>
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
              v-tooltip="'Edit'"
            >
              <i class="material-symbols-outlined !text-md"> edit </i>
            </button>
            <button
              type="button"
              class="text-danger-500 leading-none custom-tooltip"
              v-tooltip="'Delete'"
            >
              <i class="material-symbols-outlined !text-md"> delete </i>
            </button>
          </div>
        </div>
        <ul class="mt-[17px]">
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Joined Date: </span>
            10 Feb 2025
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Email Address: </span>
            lucas@trezo.com
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Phone Number: </span>
            +1 555-455-9966
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Location: </span>
            Chicago
          </li>
        </ul>
        <div class="flex items-center gap-[10px] mt-[18px]">
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
            target="_blank"
          >
            <i
              class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
            target="_blank"
          >
            <i
              class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
            target="_blank"
          >
            <i
              class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-dark"
            target="_blank"
          >
            <i
              class="ri-github-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/users/user16.jpg"
              alt="user-image"
              class="rounded-full w-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
            />
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span
                class="block text-md mb-[2px] font-medium text-black dark:text-white"
              >
                Morgan Sturges
              </span>
              <span class="block"> Data Analyst </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <a
              href="#"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </a>
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
              v-tooltip="'Edit'"
            >
              <i class="material-symbols-outlined !text-md"> edit </i>
            </button>
            <button
              type="button"
              class="text-danger-500 leading-none custom-tooltip"
              v-tooltip="'Delete'"
            >
              <i class="material-symbols-outlined !text-md"> delete </i>
            </button>
          </div>
        </div>
        <ul class="mt-[17px]">
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Joined Date: </span>
            01 Mar 2025
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Email Address: </span>
            morgan@trezo.com
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Phone Number: </span>
            +1 555-225-7755
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Location: </span>
            Las Vegas
          </li>
        </ul>
        <div class="flex items-center gap-[10px] mt-[18px]">
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
            target="_blank"
          >
            <i
              class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
            target="_blank"
          >
            <i
              class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
            target="_blank"
          >
            <i
              class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-dark"
            target="_blank"
          >
            <i
              class="ri-github-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/users/user17.jpg"
              alt="user-image"
              class="rounded-full w-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
            />
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span
                class="block text-md mb-[2px] font-medium text-black dark:text-white"
              >
                Sophia McNeel
              </span>
              <span class="block"> Sales Representative </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <a
              href="#"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </a>
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
              v-tooltip="'Edit'"
            >
              <i class="material-symbols-outlined !text-md"> edit </i>
            </button>
            <button
              type="button"
              class="text-danger-500 leading-none custom-tooltip"
              v-tooltip="'Delete'"
            >
              <i class="material-symbols-outlined !text-md"> delete </i>
            </button>
          </div>
        </div>
        <ul class="mt-[17px]">
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Joined Date: </span>
            15 Mar 2025
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Email Address: </span>
            sophia@trezo.com
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Phone Number: </span>
            +1 555-444-8822
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Location: </span>
            San Francisco
          </li>
        </ul>
        <div class="flex items-center gap-[10px] mt-[18px]">
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
            target="_blank"
          >
            <i
              class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
            target="_blank"
          >
            <i
              class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
            target="_blank"
          >
            <i
              class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-dark"
            target="_blank"
          >
            <i
              class="ri-github-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/users/user18.jpg"
              alt="user-image"
              class="rounded-full w-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
            />
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span
                class="block text-md mb-[2px] font-medium text-black dark:text-white"
              >
                Rodriguez Meade
              </span>
              <span class="block"> Manager </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <a
              href="#"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </a>
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
              v-tooltip="'Edit'"
            >
              <i class="material-symbols-outlined !text-md"> edit </i>
            </button>
            <button
              type="button"
              class="text-danger-500 leading-none custom-tooltip"
              v-tooltip="'Delete'"
            >
              <i class="material-symbols-outlined !text-md"> delete </i>
            </button>
          </div>
        </div>
        <ul class="mt-[17px]">
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Joined Date: </span>
            01 Apr 2025
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Email Address: </span>
            meade@trezo.com
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Phone Number: </span>
            +1 555-455-4411
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Location: </span>
            Houston
          </li>
        </ul>
        <div class="flex items-center gap-[10px] mt-[18px]">
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
            target="_blank"
          >
            <i
              class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
            target="_blank"
          >
            <i
              class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
            target="_blank"
          >
            <i
              class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-dark"
            target="_blank"
          >
            <i
              class="ri-github-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/users/user19.jpg"
              alt="user-image"
              class="rounded-full w-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
            />
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span
                class="block text-md mb-[2px] font-medium text-black dark:text-white"
              >
                Michael Mackenzie
              </span>
              <span class="block"> Web Developer </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <a
              href="#"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </a>
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
              v-tooltip="'Edit'"
            >
              <i class="material-symbols-outlined !text-md"> edit </i>
            </button>
            <button
              type="button"
              class="text-danger-500 leading-none custom-tooltip"
              v-tooltip="'Delete'"
            >
              <i class="material-symbols-outlined !text-md"> delete </i>
            </button>
          </div>
        </div>
        <ul class="mt-[17px]">
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Joined Date: </span>
            10 Apr 2025
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Email Address: </span>
            michael@trezo.com
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Phone Number: </span>
            +1 555-555-9922
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Location: </span>
            Oklahoma City
          </li>
        </ul>
        <div class="flex items-center gap-[10px] mt-[18px]">
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
            target="_blank"
          >
            <i
              class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
            target="_blank"
          >
            <i
              class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
            target="_blank"
          >
            <i
              class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-dark"
            target="_blank"
          >
            <i
              class="ri-github-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/users/user20.jpg"
              alt="user-image"
              class="rounded-full w-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
            />
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span
                class="block text-md mb-[2px] font-medium text-black dark:text-white"
              >
                Charles Tharp
              </span>
              <span class="block"> Accountant </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <a
              href="#"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </a>
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
              v-tooltip="'Edit'"
            >
              <i class="material-symbols-outlined !text-md"> edit </i>
            </button>
            <button
              type="button"
              class="text-danger-500 leading-none custom-tooltip"
              v-tooltip="'Delete'"
            >
              <i class="material-symbols-outlined !text-md"> delete </i>
            </button>
          </div>
        </div>
        <ul class="mt-[17px]">
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Joined Date: </span>
            01 May 2025
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Email Address: </span>
            charles@trezo.com
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Phone Number: </span>
            +1 555-433-2255
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Location: </span>
            Austin
          </li>
        </ul>
        <div class="flex items-center gap-[10px] mt-[18px]">
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
            target="_blank"
          >
            <i
              class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
            target="_blank"
          >
            <i
              class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
            target="_blank"
          >
            <i
              class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-dark"
            target="_blank"
          >
            <i
              class="ri-github-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/users/user21.jpg"
              alt="user-image"
              class="rounded-full w-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
            />
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span
                class="block text-md mb-[2px] font-medium text-black dark:text-white"
              >
                Tina Bell
              </span>
              <span class="block"> Executive Assistant </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <a
              href="#"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </a>
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
              v-tooltip="'Edit'"
            >
              <i class="material-symbols-outlined !text-md"> edit </i>
            </button>
            <button
              type="button"
              class="text-danger-500 leading-none custom-tooltip"
              v-tooltip="'Delete'"
            >
              <i class="material-symbols-outlined !text-md"> delete </i>
            </button>
          </div>
        </div>
        <ul class="mt-[17px]">
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Joined Date: </span>
            10 May 2025
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Email Address: </span>
            tina@trezo.com
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Phone Number: </span>
            +1 555-444-3399
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Location: </span>
            Portland
          </li>
        </ul>
        <div class="flex items-center gap-[10px] mt-[18px]">
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
            target="_blank"
          >
            <i
              class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
            target="_blank"
          >
            <i
              class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
            target="_blank"
          >
            <i
              class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-dark"
            target="_blank"
          >
            <i
              class="ri-github-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/users/user22.jpg"
              alt="user-image"
              class="rounded-full w-[65px] border-[2px] border-gray-100 dark:border-[#172036]"
            />
            <div class="ltr:ml-[12px] rtl:mr-[12px]">
              <span
                class="block text-md mb-[2px] font-medium text-black dark:text-white"
              >
                Melvin Larocque
              </span>
              <span class="block"> Business Analyst </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <a
              href="#"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </a>
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
              v-tooltip="'Edit'"
            >
              <i class="material-symbols-outlined !text-md"> edit </i>
            </button>
            <button
              type="button"
              class="text-danger-500 leading-none custom-tooltip"
              v-tooltip="'Delete'"
            >
              <i class="material-symbols-outlined !text-md"> delete </i>
            </button>
          </div>
        </div>
        <ul class="mt-[17px]">
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Joined Date: </span>
            01 Jun 2025
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Email Address: </span>
            melvin@trezo.com
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Phone Number: </span>
            +1 555-445-5855
          </li>
          <li class="mb-[9px] last:mb-0">
            <span class="text-black dark:text-white"> Location: </span>
            San Diego
          </li>
        </ul>
        <div class="flex items-center gap-[10px] mt-[18px]">
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#3a559f]"
            target="_blank"
          >
            <i
              class="ri-facebook-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#03a9f4]"
            target="_blank"
          >
            <i
              class="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#007ab9]"
            target="_blank"
          >
            <i
              class="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
          <a
            href="#"
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-dark"
            target="_blank"
          >
            <i
              class="ri-github-line absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <Pagination items="12" total="36" class="pt-[0] md:pt-[0]" />
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Common/Pagination.vue";

export default {
  name: "TeamMembers",
  components: {
    Pagination,
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .md\:pt-\[0\] {
    padding-top: 0 !important;
  }
}
.pt-\[0\] {
  padding-top: 0 !important;
}
</style>
