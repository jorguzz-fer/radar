<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Campaigns</h5>
      </div>
      <div class="trezo-card-subtitle">
        <button
          type="button"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          @click="stateStoreInstance.activeBtn"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add Campaign
          </span>
        </button>
      </div>
    </div>

    <div class="trezo-card-content min-h-[377px]">
      <div class="trezo-tabs" id="trezo-tabs">
        <ul class="campaigns-navs mb-[15px]">
          <li
            class="nav-item inline-block ltr:mr-[35px] rtl:ml-[35px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="nav-link text-xs block font-semibold text-gray-500 dark:text-gray-400 uppercase transition-all tracking-[2px]"
              :class="['tab', { active: activeTab === 'all' }]"
              @click="setActiveTab('all')"
            >
              All (05)
            </button>
          </li>
          <li
            class="nav-item inline-block ltr:mr-[35px] rtl:ml-[35px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="nav-link text-xs block font-semibold text-gray-500 dark:text-gray-400 uppercase transition-all tracking-[2px]"
              :class="['tab', { active: activeTab === 'pending' }]"
              @click="setActiveTab('pending')"
            >
              Pending (034)
            </button>
          </li>
          <li
            class="nav-item inline-block ltr:mr-[35px] rtl:ml-[35px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="nav-link text-xs block font-semibold text-gray-500 dark:text-gray-400 uppercase transition-all tracking-[2px]"
              :class="['tab', { active: activeTab === 'completed' }]"
              @click="setActiveTab('completed')"
            >
              Completed (07)
            </button>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane" v-show="activeTab === 'all'">
            <div class="table-responsive overflow-x-auto">
              <table class="w-full">
                <tbody class="text-black dark:text-white">
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div
                        class="relative py-[3.5px] ltr:pl-[13px] rtl:pr-[13px]"
                      >
                        <span class="block font-semibold mb-[3px]">
                          Christmas Eve
                        </span>
                        <span
                          class="block text-xs text-gray-500 dark:text-gray-400"
                        >
                          From 10 Oct - 15 Oct, 24
                        </span>
                        <div
                          class="absolute ltr:left-0 rtl:right-0 top-0 bottom-0 w-[2px] bg-orange-500"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center gap-[10px]">
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/facebook3.svg"
                            class="w-[18px]"
                            alt="facebook"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/instagram2.svg"
                            class="w-[18px]"
                            alt="instagram"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/google3.svg"
                            class="w-[18px]"
                            alt="google"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/linkedin2.svg"
                            class="w-[18px]"
                            alt="linkedin"
                          />
                        </a>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-orange-100 dark:bg-[#15203c] text-orange-600 rounded-sm font-medium text-xs"
                      >
                        Live Now
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center">
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user53.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user54.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user56.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user57.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] text-xs rounded-full border border-white bg-gray-700 text-white font-medium flex items-center justify-center"
                        >
                          +3
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <button
                        class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                        type="button"
                        id="scrollingLongContentModalToggle"
                      >
                        <i class="ri-arrow-right-line"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div
                        class="relative py-[3.5px] ltr:pl-[13px] rtl:pr-[13px]"
                      >
                        <span class="block font-semibold mb-[3px]">
                          Teacher’s Day
                        </span>
                        <span
                          class="block text-xs text-gray-500 dark:text-gray-400"
                        >
                          From 08 Oct - 12 Oct, 24
                        </span>
                        <div
                          class="absolute ltr:left-0 rtl:right-0 top-0 bottom-0 w-[2px] bg-primary-500"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center gap-[10px]">
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/facebook3.svg"
                            class="w-[18px]"
                            alt="facebook"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/instagram2.svg"
                            class="w-[18px]"
                            alt="instagram"
                          />
                        </a>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-success-100 dark:bg-[#15203c] text-success-700 rounded-sm font-medium text-xs"
                      >
                        Reviewing
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center">
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user52.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user51.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user50.jpg"
                          />
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <button
                        class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                        type="button"
                        id="scrollingLongContentModalToggle"
                      >
                        <i class="ri-arrow-right-line"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div
                        class="relative py-[3.5px] ltr:pl-[13px] rtl:pr-[13px]"
                      >
                        <span class="block font-semibold mb-[3px]">
                          ThanksGiving
                        </span>
                        <span
                          class="block text-xs text-gray-500 dark:text-gray-400"
                        >
                          From 01 Oct - 05 Oct, 24
                        </span>
                        <div
                          class="absolute ltr:left-0 rtl:right-0 top-0 bottom-0 w-[2px] bg-purple-500"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center gap-[10px]">
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/facebook3.svg"
                            class="w-[18px]"
                            alt="facebook"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/google3.svg"
                            class="w-[18px]"
                            alt="google"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/linkedin2.svg"
                            class="w-[18px]"
                            alt="linkedin"
                          />
                        </a>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-secondary-100 dark:bg-[#15203c] text-secondary-500 rounded-sm font-medium text-xs"
                      >
                        Paused
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center">
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user1.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user2.jpg"
                          />
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <button
                        class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                        type="button"
                        id="scrollingLongContentModalToggle"
                      >
                        <i class="ri-arrow-right-line"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div
                        class="relative py-[3.5px] ltr:pl-[13px] rtl:pr-[13px]"
                      >
                        <span class="block font-semibold mb-[3px]">
                          Team Gateway
                        </span>
                        <span
                          class="block text-xs text-gray-500 dark:text-gray-400"
                        >
                          From 05 Oct - 17 Oct, 24
                        </span>
                        <div
                          class="absolute ltr:left-0 rtl:right-0 top-0 bottom-0 w-[2px] bg-secondary-500"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center gap-[10px]">
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/google3.svg"
                            class="w-[18px]"
                            alt="google"
                          />
                        </a>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-orange-100 dark:bg-[#15203c] text-orange-600 rounded-sm font-medium text-xs"
                      >
                        Live Now
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center">
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user3.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user4.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user5.jpg"
                          />
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <button
                        class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                        type="button"
                        id="scrollingLongContentModalToggle"
                      >
                        <i class="ri-arrow-right-line"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div
                        class="relative py-[3.5px] ltr:pl-[13px] rtl:pr-[13px]"
                      >
                        <span class="block font-semibold mb-[3px]">
                          Halloween
                        </span>
                        <span
                          class="block text-xs text-gray-500 dark:text-gray-400"
                        >
                          From 20 Oct - 31 Oct, 24
                        </span>
                        <div
                          class="absolute ltr:left-0 rtl:right-0 top-0 bottom-0 w-[2px] bg-success-500"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center gap-[10px]">
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/facebook3.svg"
                            class="w-[18px]"
                            alt="facebook"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/instagram2.svg"
                            class="w-[18px]"
                            alt="instagram"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/google3.svg"
                            class="w-[18px]"
                            alt="google"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/linkedin2.svg"
                            class="w-[18px]"
                            alt="linkedin"
                          />
                        </a>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-success-100 dark:bg-[#15203c] text-success-700 rounded-sm font-medium text-xs"
                      >
                        Reviewing
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center">
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user45.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user46.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user47.jpg"
                          />
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <button
                        class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                        type="button"
                        id="scrollingLongContentModalToggle"
                      >
                        <i class="ri-arrow-right-line"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane" v-show="activeTab === 'pending'">
            <div class="table-responsive overflow-x-auto">
              <table class="w-full">
                <tbody class="text-black dark:text-white">
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div
                        class="relative py-[3.5px] ltr:pl-[13px] rtl:pr-[13px]"
                      >
                        <span class="block font-semibold mb-[3px]">
                          Teacher’s Day
                        </span>
                        <span
                          class="block text-xs text-gray-500 dark:text-gray-400"
                        >
                          From 08 Oct - 12 Oct, 24
                        </span>
                        <div
                          class="absolute ltr:left-0 rtl:right-0 top-0 bottom-0 w-[2px] bg-primary-500"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center gap-[10px]">
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/facebook3.svg"
                            class="w-[18px]"
                            alt="facebook"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/instagram2.svg"
                            class="w-[18px]"
                            alt="instagram"
                          />
                        </a>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-success-100 dark:bg-[#15203c] text-success-700 rounded-sm font-medium text-xs"
                      >
                        Reviewing
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center">
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user52.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user51.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user50.jpg"
                          />
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <button
                        class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                        type="button"
                        id="scrollingLongContentModalToggle"
                      >
                        <i class="ri-arrow-right-line"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div
                        class="relative py-[3.5px] ltr:pl-[13px] rtl:pr-[13px]"
                      >
                        <span class="block font-semibold mb-[3px]">
                          ThanksGiving
                        </span>
                        <span
                          class="block text-xs text-gray-500 dark:text-gray-400"
                        >
                          From 01 Oct - 05 Oct, 24
                        </span>
                        <div
                          class="absolute ltr:left-0 rtl:right-0 top-0 bottom-0 w-[2px] bg-purple-500"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center gap-[10px]">
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/facebook3.svg"
                            class="w-[18px]"
                            alt="facebook"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/google3.svg"
                            class="w-[18px]"
                            alt="google"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/linkedin2.svg"
                            class="w-[18px]"
                            alt="linkedin"
                          />
                        </a>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-secondary-100 dark:bg-[#15203c] text-secondary-500 rounded-sm font-medium text-xs"
                      >
                        Paused
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center">
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user1.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user2.jpg"
                          />
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <button
                        class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                        type="button"
                        id="scrollingLongContentModalToggle"
                      >
                        <i class="ri-arrow-right-line"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div
                        class="relative py-[3.5px] ltr:pl-[13px] rtl:pr-[13px]"
                      >
                        <span class="block font-semibold mb-[3px]">
                          Halloween
                        </span>
                        <span
                          class="block text-xs text-gray-500 dark:text-gray-400"
                        >
                          From 20 Oct - 31 Oct, 24
                        </span>
                        <div
                          class="absolute ltr:left-0 rtl:right-0 top-0 bottom-0 w-[2px] bg-success-500"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center gap-[10px]">
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/facebook3.svg"
                            class="w-[18px]"
                            alt="facebook"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/instagram2.svg"
                            class="w-[18px]"
                            alt="instagram"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/google3.svg"
                            class="w-[18px]"
                            alt="google"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/linkedin2.svg"
                            class="w-[18px]"
                            alt="linkedin"
                          />
                        </a>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-success-100 dark:bg-[#15203c] text-success-700 rounded-sm font-medium text-xs"
                      >
                        Reviewing
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center">
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user45.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user46.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user47.jpg"
                          />
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <button
                        class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                        type="button"
                        id="scrollingLongContentModalToggle"
                      >
                        <i class="ri-arrow-right-line"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane" v-show="activeTab === 'completed'">
            <div class="table-responsive overflow-x-auto">
              <table class="w-full">
                <tbody class="text-black dark:text-white">
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div
                        class="relative py-[3.5px] ltr:pl-[13px] rtl:pr-[13px]"
                      >
                        <span class="block font-semibold mb-[3px]">
                          Christmas Eve
                        </span>
                        <span
                          class="block text-xs text-gray-500 dark:text-gray-400"
                        >
                          From 10 Oct - 15 Oct, 24
                        </span>
                        <div
                          class="absolute ltr:left-0 rtl:right-0 top-0 bottom-0 w-[2px] bg-orange-500"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center gap-[10px]">
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/facebook3.svg"
                            class="w-[18px]"
                            alt="facebook"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/instagram2.svg"
                            class="w-[18px]"
                            alt="instagram"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/google3.svg"
                            class="w-[18px]"
                            alt="google"
                          />
                        </a>
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/linkedin2.svg"
                            class="w-[18px]"
                            alt="linkedin"
                          />
                        </a>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-orange-100 dark:bg-[#15203c] text-orange-600 rounded-sm font-medium text-xs"
                      >
                        Live Now
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center">
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user53.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user54.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user56.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user57.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] text-xs rounded-full border border-white bg-gray-700 text-white font-medium flex items-center justify-center"
                        >
                          +3
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <button
                        class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                        type="button"
                        id="scrollingLongContentModalToggle"
                      >
                        <i class="ri-arrow-right-line"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div
                        class="relative py-[3.5px] ltr:pl-[13px] rtl:pr-[13px]"
                      >
                        <span class="block font-semibold mb-[3px]">
                          Team Gateway
                        </span>
                        <span
                          class="block text-xs text-gray-500 dark:text-gray-400"
                        >
                          From 05 Oct - 17 Oct, 24
                        </span>
                        <div
                          class="absolute ltr:left-0 rtl:right-0 top-0 bottom-0 w-[2px] bg-secondary-500"
                        ></div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center gap-[10px]">
                        <a href="#" target="_blank" class="inline-block">
                          <img
                            src="@/assets/images/icons/google3.svg"
                            class="w-[18px]"
                            alt="google"
                          />
                        </a>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-orange-100 dark:bg-[#15203c] text-orange-600 rounded-sm font-medium text-xs"
                      >
                        Live Now
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <div class="flex items-center">
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user3.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user4.jpg"
                          />
                        </div>
                        <div
                          class="w-[26px] h-[26px] rounded-full ltr:-mr-[7px] rtl:-ml-[7px] border border-white"
                        >
                          <img
                            alt="user-image"
                            class="rounded-full"
                            src="@/assets/images/users/user5.jpg"
                          />
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
                    >
                      <button
                        class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                        type="button"
                        id="scrollingLongContentModalToggle"
                      >
                        <i class="ri-arrow-right-line"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import stateStore from "@/utils/store";

export default defineComponent({
  name: "CampaignsContent",
  setup() {
    const activeTab = ref("all");
    const stateStoreInstance = stateStore;

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
      stateStoreInstance,
    };
  },
});
</script>
