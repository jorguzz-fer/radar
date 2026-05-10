<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <form class="relative sm:w-[265px]">
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2"
          >
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input
            type="text"
            placeholder="Search invoice here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
      </div>

      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              This Week
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
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
                This Day
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Week
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Month
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Year
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Invoice ID
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Customer
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Email
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Issued Date
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Total
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Quantity
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Wallet Balance
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-158
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center">
                  <div class="rounded-md w-[40px] rounded-full">
                    <img
                      src="@/assets/images/users/user6.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Marcia Baker </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                marcia@trezo.com
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                10 Nov 2025
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $5,000
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                6
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $2,000
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[9px]">
                  <NuxtLink
                    to="/invoices/invoice-details"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </NuxtLink>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Print"
                  >
                    <i class="material-symbols-outlined !text-md"> print </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-325
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center">
                  <div class="rounded-md w-[40px] rounded-full">
                    <img
                      src="@/assets/images/users/user7.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Carolyn Barnes </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                barnes@trezo.com
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                11 Nov 2025
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $8,750
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                10
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $4,500
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[9px]">
                  <NuxtLink
                    to="/invoices/invoice-details"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </NuxtLink>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Print"
                  >
                    <i class="material-symbols-outlined !text-md"> print </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-286
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center">
                  <div class="rounded-md w-[40px] rounded-full">
                    <img
                      src="@/assets/images/users/user8.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Donna Miller </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                donna@trezo.com
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                12 Nov 2025
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $3,200
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                6
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $1,550
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[9px]">
                  <NuxtLink
                    to="/invoices/invoice-details"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </NuxtLink>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Print"
                  >
                    <i class="material-symbols-outlined !text-md"> print </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-463
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center">
                  <div class="rounded-md w-[40px] rounded-full">
                    <img
                      src="@/assets/images/users/user9.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Barbara Cross </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                cross@trezo.com
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                13 Nov 2025
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $3,750
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                4
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $2,490
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[9px]">
                  <NuxtLink
                    to="/invoices/invoice-details"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </NuxtLink>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Print"
                  >
                    <i class="material-symbols-outlined !text-md"> print </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-998
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center">
                  <div class="rounded-md w-[40px] rounded-full">
                    <img
                      src="@/assets/images/users/user10.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Rebecca Block </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                block@trezo.com
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                14 Nov 2025
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $6,000
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                2
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $3,599
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[9px]">
                  <NuxtLink
                    to="/invoices/invoice-details"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </NuxtLink>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Print"
                  >
                    <i class="material-symbols-outlined !text-md"> print </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-436
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center">
                  <div class="rounded-md w-[40px] rounded-full">
                    <img
                      src="@/assets/images/users/user11.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Ramiro McCarty </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                ramiro@trezo.com
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                15 Nov 2025
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $9,200
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                8
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $5,800
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[9px]">
                  <NuxtLink
                    to="/invoices/invoice-details"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </NuxtLink>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Print"
                  >
                    <i class="material-symbols-outlined !text-md"> print </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-860
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center">
                  <div class="rounded-md w-[40px] rounded-full">
                    <img
                      src="@/assets/images/users/user12.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Robert Fairweather </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                robert@trezo.com
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                16 Nov 2025
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $2,500
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                6
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $1,200
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[9px]">
                  <NuxtLink
                    to="/invoices/invoice-details"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </NuxtLink>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Print"
                  >
                    <i class="material-symbols-outlined !text-md"> print </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-491
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center">
                  <div class="rounded-md w-[40px] rounded-full">
                    <img
                      src="@/assets/images/users/user13.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Marcelino Haddock </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                haddock@trezo.com
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                17 Nov 2025
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $7,300
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                9
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $4,850
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[9px]">
                  <NuxtLink
                    to="/invoices/invoice-details"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </NuxtLink>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Print"
                  >
                    <i class="material-symbols-outlined !text-md"> print </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-125
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center">
                  <div class="rounded-md w-[40px] rounded-full">
                    <img
                      src="@/assets/images/users/user14.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Thomas Wilson </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                wildon@trezo.com
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                18 Nov 2025
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $4,800
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                5
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $2,300
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[9px]">
                  <NuxtLink
                    to="/invoices/invoice-details"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </NuxtLink>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Print"
                  >
                    <i class="material-symbols-outlined !text-md"> print </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                #JAN-579
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center">
                  <div class="rounded-md w-[40px] rounded-full">
                    <img
                      src="@/assets/images/users/user15.jpg"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium"> Nathaniel Hulsey </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                hulsey@trezo.com
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                19 Nov 2025
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $6,500
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                6
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                $4,560
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[9px]">
                  <NuxtLink
                    to="/invoices/invoice-details"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </NuxtLink>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Print"
                  >
                    <i class="material-symbols-outlined !text-md"> print </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination
        items="10"
        total="36"
        class="px-[20px] py-[12px] md:py-[14px] rounded-b-md border-l border-r border-b border-gray-100 dark:border-[#172036]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "InvoicesList",
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
