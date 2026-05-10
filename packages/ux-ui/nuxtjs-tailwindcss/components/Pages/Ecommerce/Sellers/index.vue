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
            placeholder="Search seller here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
      </div>
      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <NuxtLink
          to="/ecommerce/create-seller"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          id="add-new-popup-toggle"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add New Seller
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
            <img src="@/assets/images/sellers/seller1.png" alt="seller-image" />
            <div class="ltr:ml-[15px] rtl:mr-[15px]">
              <NuxtLink
                to="/ecommerce/seller-details"
                class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500"
              >
                Ava Turner
              </NuxtLink>
              <span class="block"> turner@trezo.com </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <NuxtLink
              to="/ecommerce/seller-details"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </NuxtLink>
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
        <ul class="mt-[20px]">
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Last Sale Date:
            </span>
            25 Nov 2025
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
            50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Wallet Balance:
            </span>
            $9,999.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
            $5,999.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Store: </span>
            TechMaster Store
          </li>
        </ul>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img src="@/assets/images/sellers/seller2.png" alt="seller-image" />
            <div class="ltr:ml-[15px] rtl:mr-[15px]">
              <NuxtLink
                to="/ecommerce/seller-details"
                class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500"
              >
                Ethan Parker
              </NuxtLink>
              <span class="block"> ethan@trezo.com </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <NuxtLink
              to="/ecommerce/seller-details"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </NuxtLink>
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
        <ul class="mt-[20px]">
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Last Sale Date:
            </span>
            01 Nov 2025
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
            39
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Wallet Balance:
            </span>
            $6,756.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
            $4,645.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Store: </span>
            RisionTech Outlet
          </li>
        </ul>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img src="@/assets/images/sellers/seller3.png" alt="seller-image" />
            <div class="ltr:ml-[15px] rtl:mr-[15px]">
              <NuxtLink
                to="/ecommerce/seller-details"
                class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500"
              >
                Isabella Lee
              </NuxtLink>
              <span class="block"> isabella@trezo.com </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <NuxtLink
              to="/ecommerce/seller-details"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </NuxtLink>
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
        <ul class="mt-[20px]">
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Last Sale Date:
            </span>
            30 Sep 2025
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
            75
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Wallet Balance:
            </span>
            $5,550.00
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
            $4,350.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Store: </span>
            ComfotLiving
          </li>
        </ul>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img src="@/assets/images/sellers/seller4.png" alt="seller-image" />
            <div class="ltr:ml-[15px] rtl:mr-[15px]">
              <NuxtLink
                to="/ecommerce/seller-details"
                class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500"
              >
                Thompson Torres
              </NuxtLink>
              <span class="block"> thompson@trezo.com </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <NuxtLink
              to="/ecommerce/seller-details"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </NuxtLink>
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
        <ul class="mt-[20px]">
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Last Sale Date:
            </span>
            02 Aug 2025
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
            99
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Wallet Balance:
            </span>
            $2,100.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
            $1,500.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Store: </span>
            SportFit Store
          </li>
        </ul>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img src="@/assets/images/sellers/seller5.png" alt="seller-image" />
            <div class="ltr:ml-[15px] rtl:mr-[15px]">
              <NuxtLink
                to="/ecommerce/seller-details"
                class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500"
              >
                Lucas Lyon
              </NuxtLink>
              <span class="block"> lucas@trezo.com </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <NuxtLink
              to="/ecommerce/seller-details"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </NuxtLink>
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
        <ul class="mt-[20px]">
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Last Sale Date:
            </span>
            22 July 2025
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
            350
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Wallet Balance:
            </span>
            $15,250.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
            $10,200.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Store: </span>
            Velas Store
          </li>
        </ul>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img src="@/assets/images/sellers/seller6.png" alt="seller-image" />
            <div class="ltr:ml-[15px] rtl:mr-[15px]">
              <NuxtLink
                to="/ecommerce/seller-details"
                class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500"
              >
                Morgan Sturges
              </NuxtLink>
              <span class="block"> morgan@trezo.com </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <NuxtLink
              to="/ecommerce/seller-details"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </NuxtLink>
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
        <ul class="mt-[20px]">
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Last Sale Date:
            </span>
            10 Jun 2025
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
            200
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Wallet Balance:
            </span>
            $10,500.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
            $5,458.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Store: </span>
            Herna Store
          </li>
        </ul>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img src="@/assets/images/sellers/seller7.png" alt="seller-image" />
            <div class="ltr:ml-[15px] rtl:mr-[15px]">
              <NuxtLink
                to="/ecommerce/seller-details"
                class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500"
              >
                Sophia McNeel
              </NuxtLink>
              <span class="block"> sophia@trezo.com </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <NuxtLink
              to="/ecommerce/seller-details"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </NuxtLink>
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
        <ul class="mt-[20px]">
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Last Sale Date:
            </span>
            16 Feb 2025
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
            80
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Wallet Balance:
            </span>
            $2,580.00
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
            $1,500.00
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Store: </span>
            Dona Store
          </li>
        </ul>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img src="@/assets/images/sellers/seller8.png" alt="seller-image" />
            <div class="ltr:ml-[15px] rtl:mr-[15px]">
              <NuxtLink
                to="/ecommerce/seller-details"
                class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500"
              >
                Rodriguez Meade
              </NuxtLink>
              <span class="block"> rodriguez@trezo.com </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <NuxtLink
              to="/ecommerce/seller-details"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </NuxtLink>
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
        <ul class="mt-[20px]">
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Last Sale Date:
            </span>
            12 May 2025
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
            150
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Wallet Balance:
            </span>
            $9,000.00
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
            $6,000.00
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Store: </span>
            Willi Dav Store
          </li>
        </ul>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img src="@/assets/images/sellers/seller9.png" alt="seller-image" />
            <div class="ltr:ml-[15px] rtl:mr-[15px]">
              <NuxtLink
                to="/ecommerce/seller-details"
                class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500"
              >
                Olivia Taylor
              </NuxtLink>
              <span class="block"> olivia@trezo.com </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <NuxtLink
              to="/ecommerce/seller-details"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </NuxtLink>
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
        <ul class="mt-[20px]">
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Last Sale Date:
            </span>
            10 Apr 2025
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
            75
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Wallet Balance:
            </span>
            $7,500.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
            $4,500.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Store: </span>
            Donne Store
          </li>
        </ul>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/sellers/seller10.png"
              alt="seller-image"
            />
            <div class="ltr:ml-[15px] rtl:mr-[15px]">
              <NuxtLink
                to="/ecommerce/seller-details"
                class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500"
              >
                David Smith
              </NuxtLink>
              <span class="block"> david@trezo.com </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <NuxtLink
              to="/ecommerce/seller-details"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </NuxtLink>
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
        <ul class="mt-[20px]">
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Last Sale Date:
            </span>
            03 Dec 2025
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
            500
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Wallet Balance:
            </span>
            $18,500.00
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
            $13,200.00
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Store: </span>
            RichMaster Store
          </li>
        </ul>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/sellers/seller11.png"
              alt="seller-image"
            />
            <div class="ltr:ml-[15px] rtl:mr-[15px]">
              <NuxtLink
                to="/ecommerce/seller-details"
                class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500"
              >
                Alice Johnson
              </NuxtLink>
              <span class="block"> alice@trezo.com </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <NuxtLink
              to="/ecommerce/seller-details"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </NuxtLink>
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
        <ul class="mt-[20px]">
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Last Sale Date:
            </span>
            23 Mar 2025
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
            50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Wallet Balance:
            </span>
            $6,300.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
            $4,000.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Store: </span>
            Dajon Store
          </li>
        </ul>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="@/assets/images/sellers/seller12.png"
              alt="seller-image"
            />
            <div class="ltr:ml-[15px] rtl:mr-[15px]">
              <NuxtLink
                to="/ecommerce/seller-details"
                class="text-md inline-block mb-[2px] font-medium transition-all text-black dark:text-white hover:text-primary-500"
              >
                Emily Brown
              </NuxtLink>
              <span class="block"> emily@trezo.com </span>
            </div>
          </div>
          <div class="flex items-center gap-[9px]">
            <NuxtLink
              to="/ecommerce/seller-details"
              class="text-primary-500 leading-none custom-tooltip"
              v-tooltip="'View'"
            >
              <i class="material-symbols-outlined !text-md"> visibility </i>
            </NuxtLink>
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
        <ul class="mt-[20px]">
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Last Sale Date:
            </span>
            20 Jan 2025
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Item Stock: </span>
            99
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400">
              Wallet Balance:
            </span>
            $3,699.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Revenue: </span>
            $2,599.50
          </li>
          <li class="text-black dark:text-white mb-[10px] last:mb-0">
            <span class="text-gray-500 dark:text-gray-400"> Store: </span>
            Barbahall Store
          </li>
        </ul>
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

<script lang="ts">
import { defineComponent } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sellers",
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
