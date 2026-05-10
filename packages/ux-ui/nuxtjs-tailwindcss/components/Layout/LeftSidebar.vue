<template>
  <div
    :class="[
      'sidebar-area bg-white dark:bg-[#0c1427] fixed overflow-hidden z-[7] top-0 h-screen transition-all rounded-r-md',
      { active: stateStoreInstance.open },
    ]"
  >
    <div
      class="logo bg-white dark:bg-[#0c1427] border-b border-gray-100 dark:border-[#172036] px-[25px] pt-[19px] pb-[15px] absolute z-[2] right-0 top-0 left-0"
    >
      <NuxtLink
        to="/dashboard"
        class="transition-none relative flex items-center"
      >
        <img src="@/assets/images/logo-icon.svg" alt="logo-icon" />
        <span
          class="font-bold text-black dark:text-white relative ltr:ml-[8px] rtl:mr-[8px] top-px text-xl"
        >
          Trezo
        </span>
      </NuxtLink>
      <button
        type="button"
        class="burger-menu inline-block absolute z-[3] top-[24px] ltr:right-[25px] rtl:left-[25px] transition-all hover:text-primary-500"
        @click="stateStoreInstance.onChange"
      >
        <i class="material-symbols-outlined"> close </i>
      </button>
    </div>

    <div class="pt-[89px] px-[25px] pb-[20px] h-screen hover-scroll-bar">
      <div class="accordion">
        <span
          class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs"
        >
          Main
        </span>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              dashboard
            </i>
            <span class="title leading-none"> Dashboard </span>
            <span
              class="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-orange-500 bg-orange-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto"
            >
              30
            </span>
          </button>

          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    eCommerce
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/crm"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    CRM
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/project-management"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Project Management
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/lms"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    LMS
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/helpdesk"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    HelpDesk
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      Hot
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/analytics"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Analytics
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/crypto"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Crypto
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/sales"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Sales
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/hospital"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Hospital
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/hrm"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    HRM
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/school"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    School
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/call-center"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Call Center
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-success-600 bg-success-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      Popular
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/marketing"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Marketing
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/nft"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    NFT
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/saas"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    SaaS
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/real-estate"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Real Estate
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-purple-500 bg-purple-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      Top
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/shipment"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Shipment
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/finance"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Finance
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/pos-system"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    POS System
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/podcast"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Podcast
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/social-media"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Social Media
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/doctor"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Doctor
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/beauty-salon"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Beauty Salon
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/store-analysis"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Store Analysis
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/restaurant"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Restaurant
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/hotel"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Hotel
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/real-estate-agent"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Real Estate Agent
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/credit-card"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Credit Card
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/crypto-trader"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Crypto Trader
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidemenu-item itemHidden mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/dashboard/crypto-performance"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Crypto Perf.
                    <span
                      class="text-[10px] font-medium py-[1px] px-[8px] ltr:ml-[8px] rtl:mr-[8px] text-orange-500 bg-orange-100 dark:bg-[#ffffff14] inline-block rounded-sm"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              note_stack
            </i>
            <span class="title leading-none"> Front Pages </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Home
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/features"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Features
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/team"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Our Team
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/faq"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    FAQ’s
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/contact"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Contact
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span
          class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]"
        >
          Apps
        </span>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/apps/to-do-list"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              format_list_bulleted
            </i>
            <span class="title leading-none"> To Do List </span>
          </NuxtLink>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/apps/calendar"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              date_range
            </i>
            <span class="title leading-none"> Calendar </span>
          </NuxtLink>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/apps/contacts"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              contact_page
            </i>
            <span class="title leading-none"> Contacts </span>
          </NuxtLink>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/apps/chat"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              chat
            </i>
            <span class="title leading-none"> Chat </span>
          </NuxtLink>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              mail
            </i>
            <span class="title leading-none"> Email </span>
            <span
              class="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-success-500 bg-success-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto"
            >
              3
            </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/apps/email/inbox"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Inbox
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/apps/email/compose"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Compose
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/apps/email/read"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Read
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/apps/kanban-board"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              team_dashboard
            </i>
            <span class="title leading-none"> Kanban Board </span>
          </NuxtLink>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              folder_open
            </i>
            <span class="title leading-none"> File Manager </span>
            <span
              class="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-danger-500 bg-danger-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto"
            >
              7
            </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/apps/file-manager/my-drive"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    My Drive
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/apps/file-manager/assets"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Assets
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/apps/file-manager/projects"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Projects
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/apps/file-manager/personal"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Personal
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/apps/file-manager/applications"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Applications
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/apps/file-manager/documents"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Documents
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/apps/file-manager/media"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Media
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span
          class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]"
        >
          PAGES
        </span>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              shopping_cart
            </i>
            <span class="title leading-none"> eCommerce </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/products-grid"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Products Grid
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/products-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Products List
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/product-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Product Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/create-product"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create Product
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/edit-product"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Edit Product
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/cart"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Cart
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/checkout"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Checkout
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/orders"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Orders
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/order-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Order Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/create-order"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create Order
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/order-tracking"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Order Tracking
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/customers"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Customers
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/customer-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Customer Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/categories"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Categories
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/sellers"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Sellers
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/seller-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Seller Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/create-seller"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create Seller
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/reviews"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Reviews
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ecommerce/refunds"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Refunds
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              handshake
            </i>
            <span class="title leading-none"> CRM </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/crm/contacts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Contacts
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/crm/customers"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Customers
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/crm/leads"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Leads
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/crm/deals"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Deals
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              description
            </i>
            <span class="title leading-none"> Project Management </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/project-management/project-overview"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Project Overview
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/project-management/projects-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Projects List
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/project-management/create-project"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create Project
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/project-management/clients"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Clients
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/project-management/teams"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Teams
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/project-management/kanban-board"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Kanban Board
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/project-management/users"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Users
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              auto_stories
            </i>
            <span class="title leading-none"> LMS </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/lms/courses-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Courses List
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/lms/course-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Course Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/lms/lesson-preview"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Lesson Preview
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/lms/create-course"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create Course
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/lms/edit-course"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Edit Course
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/lms/instructors"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Instructors
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              support
            </i>
            <span class="title leading-none"> HelpDesk </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/help-desk/tickets"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Tickets
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/help-desk/ticket-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Ticket Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/help-desk/agents"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Agents
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/help-desk/reports"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Reports
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              store
            </i>
            <span class="title leading-none"> NFT Marketplace </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/nft-marketplace/marketplace"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Marketplace
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/nft-marketplace/explore-all"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Explore All
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/nft-marketplace/live-auction"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Live Auction
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/nft-marketplace/nft-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    NFT Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/nft-marketplace/creators"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Creators
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/nft-marketplace/creator-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Creator Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/nft-marketplace/wallet-connect"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Wallet Connect
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/nft-marketplace/create-nft"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create NFT
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              real_estate_agent
            </i>
            <span class="title leading-none"> Real Estate </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/real-estate/property-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Property List
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/real-estate/property-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Property Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/real-estate/add-property"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Add Property
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/real-estate/agents"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Agents
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/real-estate/agent-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Agent Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/real-estate/add-agent"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Add Agent
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/real-estate/customers"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Customers
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              calculate
            </i>
            <span class="title leading-none"> Finance </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/finance/wallet"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Wallet
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/finance/transactions"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Transactions
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              badge
            </i>
            <span class="title leading-none"> Doctor </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/doctor/patients-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Patients List
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/doctor/add-patient"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Add Patient
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/doctor/patient-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Patient Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/doctor/appointments"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Appointments
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/doctor/prescriptions"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Prescriptions
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/doctor/write-prescription"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Write a Prescription
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              lunch_dining
            </i>
            <span class="title leading-none"> Restaurant </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/restaurant/menus"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Menus
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/restaurant/dish-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Dish Details
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              hotel
            </i>
            <span class="title leading-none"> Hotel </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/hotel/rooms-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Rooms List
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/hotel/room-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Room Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/hotel/guests-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Guests List
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              location_away
            </i>
            <span class="title leading-none"> Real Estate Agent </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/real-estate-agent/rea-properties"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Properties
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/real-estate-agent/rea-property-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Property Details
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              paid
            </i>
            <span class="title leading-none"> Crypto Trader </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/crypto-trader/transactions"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Transactions
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/crypto-trader/gainers-losers"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Gainers & Losers
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/crypto-trader/wallet"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Wallet
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              local_activity
            </i>
            <span class="title leading-none"> Events </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/events/events-grid"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Events Grid
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/events/events-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Events List
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/events/event-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Event Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/events/create-an-event"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create An Event
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/events/edit-an-event"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Edit An Event
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              share
            </i>
            <span class="title leading-none"> Social </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/social/profile"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Profile
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/social/settings"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Settings
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              content_paste
            </i>
            <span class="title leading-none"> Invoices </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/invoices/invoices-lists"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Invoices
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/invoices/invoice-details"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Invoice Details
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/invoices/create-invoice"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Create Invoice
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/invoices/edit-invoice"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Edit Invoice
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              person
            </i>
            <span class="title leading-none"> Users </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/users/team-members"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Team Members
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/users/users-list"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Users List
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/users/add-user"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Add User
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              account_box
            </i>
            <span class="title leading-none"> Profile </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/profile/user-profile"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    User Profile
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/profile/teams"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Teams
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/profile/projects"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Projects
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/starter"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              star_border
            </i>
            <span class="title leading-none"> Starter </span>
          </NuxtLink>
        </div>
        <span
          class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]"
        >
          MODULES
        </span>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              emoji_emotions
            </i>
            <span class="title leading-none"> Icons </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/icons/material-symbols"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Material Symbols
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/icons/remixicon"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    RemixIcon
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              qr_code_scanner
            </i>
            <span class="title leading-none"> UI Elements </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/alerts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Alerts
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/avatars"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Avatars
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/accordion"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Accordion
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/badges"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Badges
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/buttons"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Buttons
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/breadcrumb"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Breadcrumb
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/clipboard"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Clipboard
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/dropdowns"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Dropdowns
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/images"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Images
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/modal"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Modal
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/pagination"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Pagination
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/popover"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Popover
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/progress"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Progress
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/tooltips"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Tooltips
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/tabs"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Tabs
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/typography"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Typography
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/ui-elements/videos"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Videos
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <a
                    href="https://tailwindcss.com/docs/installation/using-vite"
                    target="_blank"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/tables"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              table_chart
            </i>
            <span class="title leading-none"> Tables </span>
          </NuxtLink>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              forum
            </i>
            <span class="title leading-none"> Forms </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/forms/input-select"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Input & Select
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/forms/checkboxes-radios"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Checkboxes & Radios
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/forms/rich-text-editor"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Rich Text Editor
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/forms/file-uploader"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    File Uploader
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              pie_chart
            </i>
            <span class="title leading-none"> Charts </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/charts/line-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Line
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/charts/area-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Area
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/charts/column-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Column
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/charts/mixed-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Mixed
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/charts/radialbar-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    RadialBar
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/charts/radar-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Radar
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/charts/pie-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Pie
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/charts/polar-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Polar
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/charts/more-charts"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    More
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              lock_open
            </i>
            <span class="title leading-none"> Authentication </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/authentication/sign-in"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Sign In
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/authentication/sign-up"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Sign Up
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/authentication/forgot-password"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Forgot Password
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/authentication/reset-password"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Reset Password
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/authentication/confirm-email"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Confirm Email
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/authentication/lock-screen"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Lock Screen
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/authentication/logout"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Logout
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              content_copy
            </i>
            <span class="title leading-none"> Extra Pages </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/extra-pages/pricing"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Pricing
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/extra-pages/timeline"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Timeline
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/extra-pages/faq"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    FAQ
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/extra-pages/gallery"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Gallery
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/extra-pages/testimonials"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Testimonials
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/extra-pages/search"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Search
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/extra-pages/coming-soon"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Coming Soon
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/extra-pages/blank-page"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Blank Page
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              error
            </i>
            <span class="title leading-none"> Errors </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <a
                    href="/error"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    404 Error Page
                  </a>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/error/internal-error"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Internal Error
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/widgets"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              widgets
            </i>
            <span class="title leading-none"> Widgets </span>
          </NuxtLink>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/maps"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              map
            </i>
            <span class="title leading-none"> Maps </span>
          </NuxtLink>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/notifications"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              notifications
            </i>
            <span class="title leading-none"> Notifications </span>
          </NuxtLink>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/members"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              people
            </i>
            <span class="title leading-none"> Members </span>
          </NuxtLink>
        </div>
        <span
          class="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]"
        >
          Others
        </span>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/my-profile"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              account_circle
            </i>
            <span class="title leading-none"> My Profile </span>
          </NuxtLink>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              settings
            </i>
            <span class="title leading-none"> Settings </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/settings/account-settings"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Account Settings
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/settings/change-password"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Change Password
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/settings/connections"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Connections
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/settings/privacy-policy"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Privacy Policy
                  </NuxtLink>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <NuxtLink
                    to="/settings/terms-conditions"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Terms & Conditions
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <button
            class="accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
            type="button"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              unfold_more
            </i>
            <span class="title leading-none"> Multi Level Menu </span>
          </button>
          <div class="accordion-collapse hidden">
            <div class="pt-[4px]">
              <ul class="sidebar-sub-menu">
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <a
                    href="#"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    First
                  </a>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <button
                    type="button"
                    class="sidemenu-link toggle rounded-md flex items-center relative transition-all font-medium text-gray-500 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Second
                    <span
                      class="rounded-full font-medium inline-block text-center w-[20px] h-[20px] text-[11px] leading-[20px] text-orange-500 bg-orange-50 dark:bg-[#ffffff14] ltr:ml-auto rtl:mr-auto"
                    >
                      2
                    </span>
                  </button>
                  <div class="accordion-collapse hidden">
                    <div class="pt-[6px] ltr:pl-[20px] rtl:pr-[20px]">
                      <ul class="sidebar-sub-menu">
                        <li class="sidemenu-item mb-[4px] last:mb-0">
                          <a
                            href="#"
                            class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                          >
                            Second 1
                          </a>
                        </li>
                        <li class="sidemenu-item mb-[4px] last:mb-0">
                          <a
                            href="#"
                            class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                          >
                            Second 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="sidemenu-item mb-[4px] last:mb-0">
                  <a
                    href="#"
                    class="sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c]"
                  >
                    Third
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap"
        >
          <NuxtLink
            to="/"
            class="accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c]"
          >
            <i
              class="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px"
            >
              logout
            </i>
            <span class="title leading-none"> Logout </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import stateStore from "@/utils/store";

export default defineComponent({
  name: "LeftSidebar",
  setup() {
    const stateStoreInstance = stateStore;
    const initializeAccordions = () => {
      const accordions = document.querySelectorAll<HTMLElement>(
        ".accordion-button.toggle, .sidemenu-link.toggle"
      );
      accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
          const siblingAccordions = Array.from(
            this.closest(".accordion-collapse")?.querySelectorAll<HTMLElement>(
              ".accordion-button.toggle, .sidemenu-link.toggle"
            ) || accordions
          );
          siblingAccordions.forEach((acc) => {
            if (acc !== accordion) {
              acc.classList.remove("open");
              acc.setAttribute("aria-expanded", "false");
              const nextSibling = acc.nextElementSibling as HTMLElement;
              if (nextSibling) nextSibling.style.display = "none";
            }
          });

          this.classList.toggle("open");
          const panel = this.nextElementSibling as HTMLElement;
          if (panel) {
            if (panel.style.display === "block") {
              panel.style.display = "none";
              this.setAttribute("aria-expanded", "false");
            } else {
              panel.style.display = "block";
              this.setAttribute("aria-expanded", "true");
            }
          }
        });
      });
    };

    onMounted(() => {
      initializeAccordions();
    });

    return {
      stateStoreInstance,
    };
  },
});
</script>
