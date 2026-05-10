<template>
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <EmailSidebar />
    </div>

    <div class="lg:col-span-2">
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
      >
        <div
          class="trezo-card-header mb-[15px] md:mb-[20px] flex items-center justify-between"
        >
          <div class="trezo-card-subtitle flex items-center">
            <div class="form-check relative top-[1px]">
              <input type="checkbox" class="cursor-pointer" />
            </div>
            <div
              class="trezo-card-dropdown relative ltr:ml-[2px] rtl:mr-[2px] ltr:mr-[15px] rtl:ml-[15px] ltr:md:mr-[25px] rtl:md:ml-[25px]"
            >
              <button
                type="button"
                :class="{
                  'trezo-card-dropdown-btn inline-block transition-all text-[25px] leading-none hover:text-primary-500': true,
                  active: isActive,
                }"
                id="dropdownToggle"
                @click.stop="toggleActive"
              >
                <i class="material-symbols-outlined !text-[18px]">
                  arrow_drop_down
                </i>
              </button>

              <ul
                class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
              >
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    None
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    Read
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    Unread
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    Starred
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    Unstarred
                  </button>
                </li>
              </ul>
            </div>

            <button
              type="button"
              class="inline-block transition-all leading-none hover:text-primary-500 ltr:mr-[10px] rtl:ml-[10px]"
            >
              <i class="material-symbols-outlined !text-lg"> archive </i>
            </button>
            <button
              type="button"
              class="inline-block transition-all leading-none hover:text-primary-500 ltr:mr-[10px] rtl:ml-[10px]"
            >
              <i class="material-symbols-outlined !text-lg"> help_clinic </i>
            </button>
            <button
              type="button"
              class="inline-block transition-all leading-none hover:text-primary-500 ltr:mr-[10px] rtl:ml-[10px]"
            >
              <i class="material-symbols-outlined !text-lg"> delete </i>
            </button>
            <div class="trezo-card-dropdown relative">
              <button
                type="button"
                class="trezo-card-dropdown-btn inline-block transition-all text-[26px] text-black dark:text-white leading-none hover:text-primary-500"
                :class="{
                  'trezo-card-dropdown-btn inline-block transition-all text-[25px] leading-none hover:text-primary-500': true,
                  active: isActive2,
                }"
                id="dropdownToggle"
                @click.stop="toggleActive2"
              >
                <i class="material-symbols-outlined !text-[18px]">
                  more_vert
                </i>
              </button>
              <ul
                class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
              >
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    Mark as unread
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    Snooze
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    Add star
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    Mark as important
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    Mark as not important
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    Forward as attachment
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    Filter
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                  >
                    Mute
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="trezo-card-content relative">
          <div class="trezo-tabs" id="trezo-tabs">
            <ul class="inbox-navs">
              <li
                class="nav-item inline-block ltr:mr-[35px] rtl:ml-[35px] ltr:last:mr-0 rtl:last:ml-0"
              >
                <button
                  class="nav-link relative inline-block font-medium pb-[9px] md:pb-[14px] transition-all"
                  :class="['tab', { active: activeTab === 'primary' }]"
                  @click="setActiveTab('primary')"
                >
                  <span
                    class="inline-block relative ltr:pl-[27px] rtl:pr-[27px]"
                  >
                    <i
                      class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-px md:mt-0"
                    >
                      inbox
                    </i>
                    Primary
                  </span>
                </button>
              </li>

              <li
                class="nav-item inline-block ltr:mr-[35px] rtl:ml-[35px] ltr:last:mr-0 rtl:last:ml-0"
              >
                <button
                  class="nav-link relative inline-block font-medium pb-[9px] md:pb-[14px] transition-all"
                  :class="['tab', { active: activeTab === 'promotions' }]"
                  @click="setActiveTab('promotions')"
                >
                  <span
                    class="inline-block relative ltr:pl-[27px] rtl:pr-[27px]"
                  >
                    <i
                      class="material-symbols-outlined !text-lg absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-px md:mt-0"
                    >
                      shoppingmode
                    </i>
                    Promotions
                  </span>
                </button>
              </li>
            </ul>

            <div class="tab-content">
              <div class="tab-pane" v-show="activeTab === 'primary'">
                <div class="table-responsive overflow-x-auto">
                  <table class="w-full">
                    <tbody class="text-black dark:text-white">
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Google
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          2-Step Verification Turn Off
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Integer nec arcu ac nisi...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          3:36 PM
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Facebook
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Friend Request
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Sed in libero eget lorem fermentum...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          9:25 AM
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          LinkedIn
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Travel Information
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Vivamus vestibulum ligula in mauris...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 25
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Ethan Parker
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Leave Application
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Integer nec arcu ac nisi...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 22
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Dribbble
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Design Inspiration
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Sed in libero eget lorem fermentum...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 21
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Instagram
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Training Schedule
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Vivamus vestibulum ligula in mauris...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 21
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Isabella Cooper
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Internal Auditor
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Sed in libero eget lorem fermentum...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 19
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Google
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Password Changed
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Integer nec arcu ac nisi...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 17
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Olivia Rodriguez
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Virtual Training
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Vivamus vestibulum ligula in mauris...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 15
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          YouTube
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          New Subscriber
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Sed in libero eget lorem fermentum...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 12
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Google
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Security Alert
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Vivamus vestibulum ligula in mauris...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 10
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="tab-pane" v-show="activeTab === 'promotions'">
                <div class="table-responsive overflow-x-auto">
                  <table class="w-full">
                    <tbody class="text-black dark:text-white">
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Instagram
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Training Schedule
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Vivamus vestibulum ligula in mauris...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 21
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Isabella Cooper
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Internal Auditor
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Sed in libero eget lorem fermentum...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 19
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Google
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Password Changed
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Integer nec arcu ac nisi...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 17
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Olivia Rodriguez
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Virtual Training
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Vivamus vestibulum ligula in mauris...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 15
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          YouTube
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          New Subscriber
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Sed in libero eget lorem fermentum...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 12
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Google
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Security Alert
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Vivamus vestibulum ligula in mauris...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 10
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Google
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          2-Step Verification Turn Off
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Integer nec arcu ac nisi...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          3:36 PM
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Facebook
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Friend Request
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Sed in libero eget lorem fermentum...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          9:25 AM
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          LinkedIn
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Travel Information
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Vivamus vestibulum ligula in mauris...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 25
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Ethan Parker
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Leave Application
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Integer nec arcu ac nisi...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 22
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          <div class="flex items-center">
                            <div class="form-check relative top-[2px]">
                              <input type="checkbox" class="cursor-pointer" />
                            </div>
                            <button
                              type="button"
                              class="ltr:ml-[15px] rtl:mr-[15px] leading-none text-lg"
                            >
                              <i class="ri-star-line"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          class="font-medium text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Dribbble
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="text-black dark:text-white relative ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Design Inspiration
                          <span class="text-gray-500 dark:text-gray-400"
                            >- Sed in libero eget lorem fermentum...</span
                          >
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                        <td
                          class="relative ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[13px] md:py-[15.5px] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 border-b border-gray-100 dark:border-[#172036]"
                        >
                          Jun 21
                          <NuxtLink
                            to="/apps/email/read"
                            class="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                          ></NuxtLink>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div
              class="flex items-center md:absolute -top-[48px] ltr:right-0 rtl:left-0 mt-[15px] md:mt-0"
            >
              <p class="!mb-0 text-sm">1 – 11 of 100</p>
              <ol class="ltr:ml-[10px] rtl:mr-[10px]">
                <li
                  class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
                >
                  <a
                    href="#"
                    class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                  >
                    <span class="opacity-0"> 0 </span>
                    <i
                      class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
                    >
                      chevron_left
                    </i>
                  </a>
                </li>
                <li
                  class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
                >
                  <a
                    href="#"
                    class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                  >
                    <span class="opacity-0"> 0 </span>
                    <i
                      class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
                    >
                      chevron_right
                    </i>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";
import EmailSidebar from "../../Email/EmailSidebar.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Inbox",
  components: {
    EmailSidebar,
  },
  setup() {
    const { isActive, toggleActive, isActive2, toggleActive2 } =
      useClickOutside("dropdownToggle");

    const activeTab = ref("primary");

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    return {
      isActive,
      toggleActive,
      isActive2,
      toggleActive2,
      activeTab,
      setActiveTab,
    };
  },
});
</script>
