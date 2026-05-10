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
            placeholder="Search agent here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
      </div>
      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <NuxtLink
          to="/real-estate/add-agent"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add Agent
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content relative -mt-[7px]">
        <div
          class="absolute -top-[18px] ltr:-left-[20px] rtl:-right-[20px] ltr:md:-left-[25px] rtl:md:-right-[25px] w-[90px] bg-gray-50 dark:bg-[#0a0e19] border-b-[10px] ltr:border-r-[10px] rtl:border-l-[10px] border-gray-50 dark:border-[#0a0e19] ltr:rounded-br-md rtl:rounded-bl-md"
        >
          <img
            src="@/assets/images/users/user1.jpg"
            alt="user-image"
            class="rounded-md"
          />
        </div>
        <div class="mb-[40px] ltr:pl-[88px] rtl:pr-[88px]">
          <span
            class="font-medium text-black dark:text-white block text-md mb-[2px]"
          >
            Sarah Johnson
          </span>
          <span class="block"> sarah@trezo.com </span>
        </div>
        <ul>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Phone:
            </span>
            (123) 456-7890
          </li>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Location:
            </span>
            74 Grim Avenue San Diego
          </li>
        </ul>
        <div class="my-[15px] md:my-[20px] flex items-center gap-[7px]">
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
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
            target="_blank"
          >
            <i
              class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
        <a
          href="mailto:sarah@trezo.com"
          class="inline-block rounded-md font-medium border border-primary-500 text-white bg-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-400 hover:border-primary-400 ltr:mr-[10px] rtl:ml-[10px]"
        >
          Message
        </a>
        <NuxtLink
          to="/real-estate/agent-details"
          class="inline-block rounded-md font-medium border border-primary-500 text-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-500 hover:text-white"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>

    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content relative -mt-[7px]">
        <div
          class="absolute -top-[18px] ltr:-left-[20px] rtl:-right-[20px] ltr:md:-left-[25px] rtl:md:-right-[25px] w-[90px] bg-gray-50 dark:bg-[#0a0e19] border-b-[10px] ltr:border-r-[10px] rtl:border-l-[10px] border-gray-50 dark:border-[#0a0e19] ltr:rounded-br-md rtl:rounded-bl-md"
        >
          <img
            src="@/assets/images/users/user2.jpg"
            alt="user-image"
            class="rounded-md"
          />
        </div>
        <div class="mb-[40px] ltr:pl-[88px] rtl:pr-[88px]">
          <span
            class="font-medium text-black dark:text-white block text-md mb-[2px]"
          >
            Pauline Knott
          </span>
          <span class="block"> pauline@trezo.com </span>
        </div>
        <ul>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Phone:
            </span>
            (987) 654-3210
          </li>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Location:
            </span>
            9 Paul Wayne Haggerty Road
          </li>
        </ul>
        <div class="my-[15px] md:my-[20px] flex items-center gap-[7px]">
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
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
            target="_blank"
          >
            <i
              class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
        <a
          href="mailto:sarah@trezo.com"
          class="inline-block rounded-md font-medium border border-primary-500 text-white bg-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-400 hover:border-primary-400 ltr:mr-[10px] rtl:ml-[10px]"
        >
          Message
        </a>
        <NuxtLink
          to="/real-estate/agent-details"
          class="inline-block rounded-md font-medium border border-primary-500 text-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-500 hover:text-white"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content relative -mt-[7px]">
        <div
          class="absolute -top-[18px] ltr:-left-[20px] rtl:-right-[20px] ltr:md:-left-[25px] rtl:md:-right-[25px] w-[90px] bg-gray-50 dark:bg-[#0a0e19] border-b-[10px] ltr:border-r-[10px] rtl:border-l-[10px] border-gray-50 dark:border-[#0a0e19] ltr:rounded-br-md rtl:rounded-bl-md"
        >
          <img
            src="@/assets/images/users/user3.jpg"
            alt="user-image"
            class="rounded-md"
          />
        </div>
        <div class="mb-[40px] ltr:pl-[88px] rtl:pr-[88px]">
          <span
            class="font-medium text-black dark:text-white block text-md mb-[2px]"
          >
            James Combs
          </span>
          <span class="block"> james@trezo.com </span>
        </div>
        <ul>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Phone:
            </span>
            (555) 258-1598
          </li>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Location:
            </span>
            61 Ottis Street Oklahoma City
          </li>
        </ul>
        <div class="my-[15px] md:my-[20px] flex items-center gap-[7px]">
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
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
            target="_blank"
          >
            <i
              class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
        <a
          href="mailto:sarah@trezo.com"
          class="inline-block rounded-md font-medium border border-primary-500 text-white bg-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-400 hover:border-primary-400 ltr:mr-[10px] rtl:ml-[10px]"
        >
          Message
        </a>
        <NuxtLink
          to="/real-estate/agent-details"
          class="inline-block rounded-md font-medium border border-primary-500 text-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-500 hover:text-white"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content relative -mt-[7px]">
        <div
          class="absolute -top-[18px] ltr:-left-[20px] rtl:-right-[20px] ltr:md:-left-[25px] rtl:md:-right-[25px] w-[90px] bg-gray-50 dark:bg-[#0a0e19] border-b-[10px] ltr:border-r-[10px] rtl:border-l-[10px] border-gray-50 dark:border-[#0a0e19] ltr:rounded-br-md rtl:rounded-bl-md"
        >
          <img
            src="@/assets/images/users/user4.jpg"
            alt="user-image"
            class="rounded-md"
          />
        </div>
        <div class="mb-[40px] ltr:pl-[88px] rtl:pr-[88px]">
          <span
            class="font-medium text-black dark:text-white block text-md mb-[2px]"
          >
            Margaret Wade
          </span>
          <span class="block"> margaret@trezo.com </span>
        </div>
        <ul>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Phone:
            </span>
            (431) 335-2321
          </li>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Location:
            </span>
            69 Leverton Cove Road Springfield
          </li>
        </ul>
        <div class="my-[15px] md:my-[20px] flex items-center gap-[7px]">
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
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
            target="_blank"
          >
            <i
              class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
        <a
          href="mailto:sarah@trezo.com"
          class="inline-block rounded-md font-medium border border-primary-500 text-white bg-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-400 hover:border-primary-400 ltr:mr-[10px] rtl:ml-[10px]"
        >
          Message
        </a>
        <NuxtLink
          to="/real-estate/agent-details"
          class="inline-block rounded-md font-medium border border-primary-500 text-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-500 hover:text-white"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content relative -mt-[7px]">
        <div
          class="absolute -top-[18px] ltr:-left-[20px] rtl:-right-[20px] ltr:md:-left-[25px] rtl:md:-right-[25px] w-[90px] bg-gray-50 dark:bg-[#0a0e19] border-b-[10px] ltr:border-r-[10px] rtl:border-l-[10px] border-gray-50 dark:border-[#0a0e19] ltr:rounded-br-md rtl:rounded-bl-md"
        >
          <img
            src="@/assets/images/users/user5.jpg"
            alt="user-image"
            class="rounded-md"
          />
        </div>
        <div class="mb-[40px] ltr:pl-[88px] rtl:pr-[88px]">
          <span
            class="font-medium text-black dark:text-white block text-md mb-[2px]"
          >
            Mike Harris
          </span>
          <span class="block"> harris@trezo.com </span>
        </div>
        <ul>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Phone:
            </span>
            (605) 823-8868
          </li>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Location:
            </span>
            30 Hartway Street Mclaughlin
          </li>
        </ul>
        <div class="my-[15px] md:my-[20px] flex items-center gap-[7px]">
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
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
            target="_blank"
          >
            <i
              class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
        <a
          href="mailto:sarah@trezo.com"
          class="inline-block rounded-md font-medium border border-primary-500 text-white bg-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-400 hover:border-primary-400 ltr:mr-[10px] rtl:ml-[10px]"
        >
          Message
        </a>
        <NuxtLink
          to="/real-estate/agent-details"
          class="inline-block rounded-md font-medium border border-primary-500 text-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-500 hover:text-white"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content relative -mt-[7px]">
        <div
          class="absolute -top-[18px] ltr:-left-[20px] rtl:-right-[20px] ltr:md:-left-[25px] rtl:md:-right-[25px] w-[90px] bg-gray-50 dark:bg-[#0a0e19] border-b-[10px] ltr:border-r-[10px] rtl:border-l-[10px] border-gray-50 dark:border-[#0a0e19] ltr:rounded-br-md rtl:rounded-bl-md"
        >
          <img
            src="@/assets/images/users/user61.jpg"
            alt="user-image"
            class="rounded-md"
          />
        </div>
        <div class="mb-[40px] ltr:pl-[88px] rtl:pr-[88px]">
          <span
            class="font-medium text-black dark:text-white block text-md mb-[2px]"
          >
            Emily Jones
          </span>
          <span class="block"> emily@trezo.com </span>
        </div>
        <ul>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Phone:
            </span>
            (617) 756-9911
          </li>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Location:
            </span>
            1654 Valley View Drive Brighton
          </li>
        </ul>
        <div class="my-[15px] md:my-[20px] flex items-center gap-[7px]">
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
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
            target="_blank"
          >
            <i
              class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
        <a
          href="mailto:sarah@trezo.com"
          class="inline-block rounded-md font-medium border border-primary-500 text-white bg-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-400 hover:border-primary-400 ltr:mr-[10px] rtl:ml-[10px]"
        >
          Message
        </a>
        <NuxtLink
          to="/real-estate/agent-details"
          class="inline-block rounded-md font-medium border border-primary-500 text-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-500 hover:text-white"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content relative -mt-[7px]">
        <div
          class="absolute -top-[18px] ltr:-left-[20px] rtl:-right-[20px] ltr:md:-left-[25px] rtl:md:-right-[25px] w-[90px] bg-gray-50 dark:bg-[#0a0e19] border-b-[10px] ltr:border-r-[10px] rtl:border-l-[10px] border-gray-50 dark:border-[#0a0e19] ltr:rounded-br-md rtl:rounded-bl-md"
        >
          <img
            src="@/assets/images/users/user62.jpg"
            alt="user-image"
            class="rounded-md"
          />
        </div>
        <div class="mb-[40px] ltr:pl-[88px] rtl:pr-[88px]">
          <span
            class="font-medium text-black dark:text-white block text-md mb-[2px]"
          >
            Trent Heiser
          </span>
          <span class="block"> heiser@trezo.com </span>
        </div>
        <ul>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Phone:
            </span>
            (507) 646-1869
          </li>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Location:
            </span>
            46 Trymore Road Northfield
          </li>
        </ul>
        <div class="my-[15px] md:my-[20px] flex items-center gap-[7px]">
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
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
            target="_blank"
          >
            <i
              class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
        <a
          href="mailto:sarah@trezo.com"
          class="inline-block rounded-md font-medium border border-primary-500 text-white bg-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-400 hover:border-primary-400 ltr:mr-[10px] rtl:ml-[10px]"
        >
          Message
        </a>
        <NuxtLink
          to="/real-estate/agent-details"
          class="inline-block rounded-md font-medium border border-primary-500 text-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-500 hover:text-white"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content relative -mt-[7px]">
        <div
          class="absolute -top-[18px] ltr:-left-[20px] rtl:-right-[20px] ltr:md:-left-[25px] rtl:md:-right-[25px] w-[90px] bg-gray-50 dark:bg-[#0a0e19] border-b-[10px] ltr:border-r-[10px] rtl:border-l-[10px] border-gray-50 dark:border-[#0a0e19] ltr:rounded-br-md rtl:rounded-bl-md"
        >
          <img
            src="@/assets/images/users/user63.jpg"
            alt="user-image"
            class="rounded-md"
          />
        </div>
        <div class="mb-[40px] ltr:pl-[88px] rtl:pr-[88px]">
          <span
            class="font-medium text-black dark:text-white block text-md mb-[2px]"
          >
            Amiee Brown
          </span>
          <span class="block"> brown@trezo.com </span>
        </div>
        <ul>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Phone:
            </span>
            (602) 525-5444
          </li>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Location:
            </span>
            79 Hall Street Las Vegas
          </li>
        </ul>
        <div class="my-[15px] md:my-[20px] flex items-center gap-[7px]">
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
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
            target="_blank"
          >
            <i
              class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
        <a
          href="mailto:sarah@trezo.com"
          class="inline-block rounded-md font-medium border border-primary-500 text-white bg-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-400 hover:border-primary-400 ltr:mr-[10px] rtl:ml-[10px]"
        >
          Message
        </a>
        <NuxtLink
          to="/real-estate/agent-details"
          class="inline-block rounded-md font-medium border border-primary-500 text-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-500 hover:text-white"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content relative -mt-[7px]">
        <div
          class="absolute -top-[18px] ltr:-left-[20px] rtl:-right-[20px] ltr:md:-left-[25px] rtl:md:-right-[25px] w-[90px] bg-gray-50 dark:bg-[#0a0e19] border-b-[10px] ltr:border-r-[10px] rtl:border-l-[10px] border-gray-50 dark:border-[#0a0e19] ltr:rounded-br-md rtl:rounded-bl-md"
        >
          <img
            src="@/assets/images/users/user64.jpg"
            alt="user-image"
            class="rounded-md"
          />
        </div>
        <div class="mb-[40px] ltr:pl-[88px] rtl:pr-[88px]">
          <span
            class="font-medium text-black dark:text-white block text-md mb-[2px]"
          >
            Edward Lebouef
          </span>
          <span class="block"> lebouef@trezo.com </span>
        </div>
        <ul>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Phone:
            </span>
            (337) 456-7858
          </li>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Location:
            </span>
            05 Sherwood Circle Lafayette
          </li>
        </ul>
        <div class="my-[15px] md:my-[20px] flex items-center gap-[7px]">
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
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
            target="_blank"
          >
            <i
              class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
        <a
          href="mailto:sarah@trezo.com"
          class="inline-block rounded-md font-medium border border-primary-500 text-white bg-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-400 hover:border-primary-400 ltr:mr-[10px] rtl:ml-[10px]"
        >
          Message
        </a>
        <NuxtLink
          to="/real-estate/agent-details"
          class="inline-block rounded-md font-medium border border-primary-500 text-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-500 hover:text-white"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content relative -mt-[7px]">
        <div
          class="absolute -top-[18px] ltr:-left-[20px] rtl:-right-[20px] ltr:md:-left-[25px] rtl:md:-right-[25px] w-[90px] bg-gray-50 dark:bg-[#0a0e19] border-b-[10px] ltr:border-r-[10px] rtl:border-l-[10px] border-gray-50 dark:border-[#0a0e19] ltr:rounded-br-md rtl:rounded-bl-md"
        >
          <img
            src="@/assets/images/users/user65.jpg"
            alt="user-image"
            class="rounded-md"
          />
        </div>
        <div class="mb-[40px] ltr:pl-[88px] rtl:pr-[88px]">
          <span
            class="font-medium text-black dark:text-white block text-md mb-[2px]"
          >
            Marilyn Kelly
          </span>
          <span class="block"> marilyn@trezo.com </span>
        </div>
        <ul>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Phone:
            </span>
            (864) 933-2339
          </li>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Location:
            </span>
            46 Brown Avenue Anderson
          </li>
        </ul>
        <div class="my-[15px] md:my-[20px] flex items-center gap-[7px]">
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
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
            target="_blank"
          >
            <i
              class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
        <a
          href="mailto:sarah@trezo.com"
          class="inline-block rounded-md font-medium border border-primary-500 text-white bg-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-400 hover:border-primary-400 ltr:mr-[10px] rtl:ml-[10px]"
        >
          Message
        </a>
        <NuxtLink
          to="/real-estate/agent-details"
          class="inline-block rounded-md font-medium border border-primary-500 text-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-500 hover:text-white"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content relative -mt-[7px]">
        <div
          class="absolute -top-[18px] ltr:-left-[20px] rtl:-right-[20px] ltr:md:-left-[25px] rtl:md:-right-[25px] w-[90px] bg-gray-50 dark:bg-[#0a0e19] border-b-[10px] ltr:border-r-[10px] rtl:border-l-[10px] border-gray-50 dark:border-[#0a0e19] ltr:rounded-br-md rtl:rounded-bl-md"
        >
          <img
            src="@/assets/images/users/user66.jpg"
            alt="user-image"
            class="rounded-md"
          />
        </div>
        <div class="mb-[40px] ltr:pl-[88px] rtl:pr-[88px]">
          <span
            class="font-medium text-black dark:text-white block text-md mb-[2px]"
          >
            Gary Manes
          </span>
          <span class="block"> manes@trezo.com </span>
        </div>
        <ul>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Phone:
            </span>
            (603) 258-7598
          </li>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Location:
            </span>
            75 Wildrose Lane Southfield
          </li>
        </ul>
        <div class="my-[15px] md:my-[20px] flex items-center gap-[7px]">
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
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
            target="_blank"
          >
            <i
              class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
        <a
          href="mailto:sarah@trezo.com"
          class="inline-block rounded-md font-medium border border-primary-500 text-white bg-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-400 hover:border-primary-400 ltr:mr-[10px] rtl:ml-[10px]"
        >
          Message
        </a>
        <NuxtLink
          to="/real-estate/agent-details"
          class="inline-block rounded-md font-medium border border-primary-500 text-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-500 hover:text-white"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content relative -mt-[7px]">
        <div
          class="absolute -top-[18px] ltr:-left-[20px] rtl:-right-[20px] ltr:md:-left-[25px] rtl:md:-right-[25px] w-[90px] bg-gray-50 dark:bg-[#0a0e19] border-b-[10px] ltr:border-r-[10px] rtl:border-l-[10px] border-gray-50 dark:border-[#0a0e19] ltr:rounded-br-md rtl:rounded-bl-md"
        >
          <img
            src="@/assets/images/users/user67.jpg"
            alt="user-image"
            class="rounded-md"
          />
        </div>
        <div class="mb-[40px] ltr:pl-[88px] rtl:pr-[88px]">
          <span
            class="font-medium text-black dark:text-white block text-md mb-[2px]"
          >
            Francis Berg
          </span>
          <span class="block"> francis@trezo.com </span>
        </div>
        <ul>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Phone:
            </span>
            (651) 778-2290
          </li>
          <li class="text-black dark:text-white font-medium mb-[5px] last:mb-0">
            <span
              class="ltr:mr-[7px] rtl:ml-[7px] text-gray-500 dark:text-gray-400 font-normal"
            >
              Location:
            </span>
            93 Park Boulevard Ottumwa
          </li>
        </ul>
        <div class="my-[15px] md:my-[20px] flex items-center gap-[7px]">
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
            class="inline-block relative text-center rounded-full w-[28px] h-[28px] text-white bg-[#2196f3]"
            target="_blank"
          >
            <i
              class="ri-mail-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"
            ></i>
          </a>
        </div>
        <a
          href="mailto:sarah@trezo.com"
          class="inline-block rounded-md font-medium border border-primary-500 text-white bg-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-400 hover:border-primary-400 ltr:mr-[10px] rtl:ml-[10px]"
        >
          Message
        </a>
        <NuxtLink
          to="/real-estate/agent-details"
          class="inline-block rounded-md font-medium border border-primary-500 text-primary-500 py-[4.5px] px-[15.5px] transition-all hover:bg-primary-500 hover:text-white"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
  </div>

  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <Pagination items="12" total="30" class="pt-[0] md:pt-[0]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Agents",
  components: {
    Pagination,
  },
});
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
