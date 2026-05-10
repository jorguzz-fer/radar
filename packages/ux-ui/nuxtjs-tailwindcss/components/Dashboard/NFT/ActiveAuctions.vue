<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Active Auctions</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 bg-gray-100 dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Monthly
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"
              ></i>
            </span>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Weekly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Monthly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Yearly
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Item
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Open Price
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Your Offer
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Recent Offer
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Time Left
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                View
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[50px]">
                    <img
                      src="@/assets/images/nfts/auction1.gif"
                      class="inline-block rounded-[6px]"
                      alt="auction-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      Christmas Eve
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      by John Lira
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  11.75 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  10.00 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[5px]">
                  <img
                    src="@/assets/images/users/user58.jpg"
                    class="w-[22px] rounded-full"
                    alt="user-image"
                  />
                  <span
                    class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                  >
                    10.00 ETH
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="active-auctions-timer block text-xs font-semibold text-gray-600 dark:text-gray-400"
                  data-duration="9900"
                  id="active-auctions-timer"
                >
                  <span class="hours-span">
                    <span class="hours">00</span>h
                  </span>
                  <span class="minutes-span">
                    <span class="minutes">00</span>m
                  </span>
                  <span class="seconds-span">
                    <span class="seconds">00</span>s
                  </span>
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                >
                  <i class="ri-arrow-right-line"></i>
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[50px]">
                    <img
                      src="@/assets/images/nfts/auction2.gif"
                      class="inline-block rounded-[6px]"
                      alt="auction-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      Rotating Flower
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      by WalterW.
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  9.25 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  6.10 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[5px]">
                  <img
                    src="@/assets/images/users/user59.jpg"
                    class="w-[22px] rounded-full"
                    alt="user-image"
                  />
                  <span
                    class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                  >
                    7.15 ETH
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="active-auctions-timer block text-xs font-semibold text-gray-600 dark:text-gray-400"
                  data-duration="4860"
                  id="active-auctions-timer"
                >
                  <span class="hours-span">
                    <span class="hours">00</span>h
                  </span>
                  <span class="minutes-span">
                    <span class="minutes">00</span>m
                  </span>
                  <span class="seconds-span">
                    <span class="seconds">00</span>s
                  </span>
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                >
                  <i class="ri-arrow-right-line"></i>
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[50px]">
                    <img
                      src="@/assets/images/nfts/auction3.jpg"
                      class="inline-block rounded-[6px]"
                      alt="auction-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      Windows Art
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      by Christino
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  17.24 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  11.75 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[5px]">
                  <img
                    src="@/assets/images/users/user60.jpg"
                    class="w-[22px] rounded-full"
                    alt="user-image"
                  />
                  <span
                    class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                  >
                    14.11 ETH
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="active-auctions-timer block text-xs font-semibold text-gray-600 dark:text-gray-400"
                  data-duration="2580"
                  id="active-auctions-timer"
                >
                  <span class="hours-span">
                    <span class="hours">00</span>h
                  </span>
                  <span class="minutes-span">
                    <span class="minutes">00</span>m
                  </span>
                  <span class="seconds-span">
                    <span class="seconds">00</span>s
                  </span>
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                >
                  <i class="ri-arrow-right-line"></i>
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[50px]">
                    <img
                      src="@/assets/images/nfts/auction4.jpg"
                      class="inline-block rounded-[6px]"
                      alt="auction-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      3D Logo
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      by Hater
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  12.12 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  10.24 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[5px]">
                  <img
                    src="@/assets/images/users/user61.jpg"
                    class="w-[22px] rounded-full"
                    alt="user-image"
                  />
                  <span
                    class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                  >
                    12.08 ETH
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="active-auctions-timer block text-xs font-semibold text-gray-600 dark:text-gray-400"
                  data-duration="6600"
                  id="active-auctions-timer"
                >
                  <span class="hours-span">
                    <span class="hours">00</span>h
                  </span>
                  <span class="minutes-span">
                    <span class="minutes">00</span>m
                  </span>
                  <span class="seconds-span">
                    <span class="seconds">00</span>s
                  </span>
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                >
                  <i class="ri-arrow-right-line"></i>
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[50px]">
                    <img
                      src="@/assets/images/nfts/auction5.jpg"
                      class="inline-block rounded-[6px]"
                      alt="auction-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      Awesome Bird
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      by Liveslong
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  8.15 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  7.15 ETH
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[5px]">
                  <img
                    src="@/assets/images/users/user62.jpg"
                    class="w-[22px] rounded-full"
                    alt="user-image"
                  />
                  <span
                    class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                  >
                    8.08 ETH
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="active-auctions-timer block text-xs font-semibold text-gray-600 dark:text-gray-400"
                  data-duration="15300"
                  id="active-auctions-timer"
                >
                  <span class="hours-span">
                    <span class="hours">00</span>h
                  </span>
                  <span class="minutes-span">
                    <span class="minutes">00</span>m
                  </span>
                  <span class="seconds-span">
                    <span class="seconds">00</span>s
                  </span>
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <NuxtLink
                  to="/nft-marketplace/nft-details"
                  class="inline-block rounded-full w-[30px] h-[30px] bg-gray-100 dark:bg-[#172036] text-center leading-[30px] text-[18px] text-gray-400 transition-all hover:bg-primary-500 hover:text-white"
                >
                  <i class="ri-arrow-right-line"></i>
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination items="5" total="30" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "ActiveAuctions",
  components: {
    Pagination,
  },
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    return {
      isActive,
      toggleActive,
    };
  },
});
</script>
