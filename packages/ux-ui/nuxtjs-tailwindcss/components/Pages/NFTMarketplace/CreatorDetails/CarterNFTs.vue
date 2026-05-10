<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Angela’s NFTs</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="trezo-tabs" id="trezo-tabs">
        <ul class="nfts-navs mb-[20px]">
          <li
            class="nav-item inline-block ltr:mr-[20px] rtl:ml-[20px] ltr:md:mr-[35px] rtl:md:ml-[35px]"
          >
            <button
              type="button"
              :class="['tab', { active: activeTab === 'all' }]"
              @click="setActiveTab('all')"
              class="nav-link block transition-all relative uppercase md:tracking-[2px] text-xs font-semibold"
            >
              All
            </button>
          </li>
          <li
            class="nav-item inline-block ltr:mr-[20px] rtl:ml-[20px] ltr:md:mr-[35px] rtl:md:ml-[35px]"
          >
            <button
              type="button"
              :class="['tab', { active: activeTab === 'inAuction' }]"
              @click="setActiveTab('inAuction')"
              class="nav-link block transition-all relative uppercase md:tracking-[2px] text-xs font-semibold"
            >
              IN AUCTION
            </button>
          </li>
          <li
            class="nav-item inline-block ltr:mr-[20px] rtl:ml-[20px] ltr:md:mr-[35px] rtl:md:ml-[35px]"
          >
            <button
              type="button"
              :class="['tab', { active: activeTab === 'sold' }]"
              @click="setActiveTab('sold')"
              class="nav-link block transition-all relative uppercase md:tracking-[2px] text-xs font-semibold"
            >
              SOLD
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane active" v-show="activeTab === 'all'">
            <div class="table-responsive overflow-x-auto">
              <table class="w-full">
                <tbody class="text-black dark:text-white">
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        11.75 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        10.00 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        30 mins ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        9.25 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        6.10 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        1 hr ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        17.24 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        11.75 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        1.30 hr ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        12.12 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        10.24 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        35 mins ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        8.15 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        7.15 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        2 hrs ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        11.75 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        10.00 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        30 mins ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        9.25 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        6.10 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        1 hr ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        17.24 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        11.75 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        1.30 hr ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        12.12 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        10.24 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        35 mins ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        8.15 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        7.15 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        2 hrs ago
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pt-[10px] sm:flex sm:items-center justify-between">
              <p class="!mb-0 text-sm">Showing 10 of 36 results</p>
              <ol class="mt-[10px] sm:mt-0">
                <li
                  class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
                >
                  <a
                    href="javascript:void(0);"
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
                    href="javascript:void(0);"
                    class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-primary-500 bg-primary-500 text-white"
                  >
                    1
                  </a>
                </li>
                <li
                  class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
                >
                  <a
                    href="javascript:void(0);"
                    class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                  >
                    2
                  </a>
                </li>
                <li
                  class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
                >
                  <a
                    href="javascript:void(0);"
                    class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                  >
                    3
                  </a>
                </li>
                <li
                  class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
                >
                  <a
                    href="javascript:void(0);"
                    class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
                  >
                    4
                  </a>
                </li>
                <li
                  class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
                >
                  <a
                    href="javascript:void(0);"
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
          <div class="tab-pane" v-show="activeTab === 'inAuction'">
            <div class="table-responsive overflow-x-auto">
              <table class="w-full">
                <tbody class="text-black dark:text-white">
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        11.75 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        10.00 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        30 mins ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        17.24 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        11.75 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        1.30 hr ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        9.25 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        6.10 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        1 hr ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        8.15 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        7.15 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        2 hrs ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        12.12 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        10.24 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        35 mins ago
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane" v-show="activeTab === 'sold'">
            <div class="table-responsive overflow-x-auto">
              <table class="w-full">
                <tbody class="text-black dark:text-white">
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        11.75 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        10.00 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        30 mins ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        9.25 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        6.10 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        1 hr ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        17.24 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        11.75 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        1.30 hr ago
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        12.12 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        10.24 ETH
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
                    >
                      <span
                        class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                      >
                        35 mins ago
                      </span>
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

export default defineComponent({
  name: "CarterNFTs",
  setup() {
    const activeTab = ref("all");

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
    };
  },
});
</script>
