<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">New York</h5>
        </div>
        <div class="trezo-card-subtitle">
          <DropdownBtn />
        </div>
      </div>
      <div class="trezo-card-content">
        <NuxtLink
          to="/real-estate/property-details"
          class="block rounded-[5px]"
        >
          <img
            src="@/assets/images/properties/property1.jpg"
            class="inline-block rounded-[5px]"
            alt="property-image"
          />
        </NuxtLink>
        <div class="flex items-center justify-between mb-[9px] mt-[20px]">
          <h3 class="!text-lg !mb-0 !text-orange-500">$18,000</h3>
          <span
            class="inline-block text-xs rounded-[4px] bg-success-100 text-success-600 text-xs py-px px-[9px]"
          >
            Sale
          </span>
        </div>
        <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
          >
            location_on
          </i>
          35 Prince Consort Road
        </span>
        <ul
          class="mt-[17px] py-[10px] border-y border-primary-50 dark:border-[#172036]"
        >
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bed
            </i>
            6Bed
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bathtub
            </i>
            5Bath
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              square_foot
            </i>
            1800sqft
          </li>
        </ul>
        <div class="mt-[20px] flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <img
              src="@/assets/images/users/user1.jpg"
              class="rounded-full w-[40px]"
              alt="user-image"
            />
            <div>
              <span
                class="sm:text-[15px] md:text-md block font-semibold text-black dark:text-white"
              >
                Harold Cook
              </span>
              <span class="block"> Owner </span>
            </div>
          </div>
          <NuxtLink
            to="/real-estate/property-details"
            class="inline-block font-medium sm:text-[15px] md:text-md text-primary-500 transition-all hover:text-primary-400 hover:underline"
          >
            View More
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">London</h5>
        </div>
        <div class="trezo-card-subtitle">
          <DropdownBtn />
        </div>
      </div>
      <div class="trezo-card-content">
        <NuxtLink
          to="/real-estate/property-details"
          class="block rounded-[5px]"
        >
          <img
            src="@/assets/images/properties/property2.jpg"
            class="inline-block rounded-[5px]"
            alt="property-image"
          />
        </NuxtLink>
        <div class="flex items-center justify-between mb-[9px] mt-[20px]">
          <h3 class="!text-lg !mb-0 !text-orange-500">$220,000</h3>
          <span
            class="inline-block text-xs rounded-[4px] bg-secondary-100 text-secondary-600 text-xs py-px px-[9px]"
          >
            Rent
          </span>
        </div>
        <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
          >
            location_on
          </i>
          58 Gateway Road Portland
        </span>
        <ul
          class="mt-[17px] py-[10px] border-y border-primary-50 dark:border-[#172036]"
        >
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bed
            </i>
            8Bed
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bathtub
            </i>
            6Bath
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              square_foot
            </i>
            2000sqft
          </li>
        </ul>
        <div class="mt-[20px] flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <img
              src="@/assets/images/users/user2.jpg"
              class="rounded-full w-[40px]"
              alt="user-image"
            />
            <div>
              <span
                class="sm:text-[15px] md:text-md block font-semibold text-black dark:text-white"
              >
                Debra Sisk
              </span>
              <span class="block"> Owner </span>
            </div>
          </div>
          <NuxtLink
            to="/real-estate/property-details"
            class="inline-block font-medium sm:text-[15px] md:text-md text-primary-500 transition-all hover:text-primary-400 hover:underline"
          >
            View More
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">France</h5>
        </div>
        <div class="trezo-card-subtitle">
          <DropdownBtn />
        </div>
      </div>
      <div class="trezo-card-content">
        <NuxtLink
          to="/real-estate/property-details"
          class="block rounded-[5px]"
        >
          <img
            src="@/assets/images/properties/property3.jpg"
            class="inline-block rounded-[5px]"
            alt="property-image"
          />
        </NuxtLink>
        <div class="flex items-center justify-between mb-[9px] mt-[20px]">
          <h3 class="!text-lg !mb-0 !text-orange-500">$350,000</h3>
          <span
            class="inline-block text-xs rounded-[4px] bg-orange-100 text-orange-600 text-xs py-px px-[9px]"
          >
            Sold
          </span>
        </div>
        <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
          >
            location_on
          </i>
          18 Chemin Challet
        </span>
        <ul
          class="mt-[17px] py-[10px] border-y border-primary-50 dark:border-[#172036]"
        >
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bed
            </i>
            8Bed
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bathtub
            </i>
            7Bath
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              square_foot
            </i>
            2200sqft
          </li>
        </ul>
        <div class="mt-[20px] flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <img
              src="@/assets/images/users/user3.jpg"
              class="rounded-full w-[40px]"
              alt="user-image"
            />
            <div>
              <span
                class="sm:text-[15px] md:text-md block font-semibold text-black dark:text-white"
              >
                Herbert Rojas
              </span>
              <span class="block"> Owner </span>
            </div>
          </div>
          <NuxtLink
            to="/real-estate/property-details"
            class="inline-block font-medium sm:text-[15px] md:text-md text-primary-500 transition-all hover:text-primary-400 hover:underline"
          >
            View More
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Australia</h5>
        </div>
        <div class="trezo-card-subtitle">
          <DropdownBtn />
        </div>
      </div>
      <div class="trezo-card-content">
        <NuxtLink
          to="/real-estate/property-details"
          class="block rounded-[5px]"
        >
          <img
            src="@/assets/images/properties/property4.jpg"
            class="inline-block rounded-[5px]"
            alt="property-image"
          />
        </NuxtLink>
        <div class="flex items-center justify-between mb-[9px] mt-[20px]">
          <h3 class="!text-lg !mb-0 !text-orange-500">$158,000</h3>
          <span
            class="inline-block text-xs rounded-[4px] bg-secondary-100 text-secondary-600 text-xs py-px px-[9px]"
          >
            Rent
          </span>
        </div>
        <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
          >
            location_on
          </i>
          51 Decca Road GUNN
        </span>
        <ul
          class="mt-[17px] py-[10px] border-y border-primary-50 dark:border-[#172036]"
        >
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bed
            </i>
            8Bed
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bathtub
            </i>
            8Bath
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              square_foot
            </i>
            2000sqft
          </li>
        </ul>
        <div class="mt-[20px] flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <img
              src="@/assets/images/users/user4.jpg"
              class="rounded-full w-[40px]"
              alt="user-image"
            />
            <div>
              <span
                class="sm:text-[15px] md:text-md block font-semibold text-black dark:text-white"
              >
                Steven Bryant
              </span>
              <span class="block"> Owner </span>
            </div>
          </div>
          <NuxtLink
            to="/real-estate/property-details"
            class="inline-block font-medium sm:text-[15px] md:text-md text-primary-500 transition-all hover:text-primary-400 hover:underline"
          >
            View More
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Italy</h5>
        </div>
        <div class="trezo-card-subtitle">
          <DropdownBtn />
        </div>
      </div>
      <div class="trezo-card-content">
        <NuxtLink
          to="/real-estate/property-details"
          class="block rounded-[5px]"
        >
          <img
            src="@/assets/images/properties/property5.jpg"
            class="inline-block rounded-[5px]"
            alt="property-image"
          />
        </NuxtLink>
        <div class="flex items-center justify-between mb-[9px] mt-[20px]">
          <h3 class="!text-lg !mb-0 !text-orange-500">$99,000</h3>
          <span
            class="inline-block text-xs rounded-[4px] bg-orange-100 text-orange-600 text-xs py-px px-[9px]"
          >
            Sold
          </span>
        </div>
        <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
          >
            location_on
          </i>
          35 Vicolo Tre Marchetti
        </span>
        <ul
          class="mt-[17px] py-[10px] border-y border-primary-50 dark:border-[#172036]"
        >
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bed
            </i>
            6Bed
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bathtub
            </i>
            5Bath
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              square_foot
            </i>
            1500sqft
          </li>
        </ul>
        <div class="mt-[20px] flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <img
              src="@/assets/images/users/user5.jpg"
              class="rounded-full w-[40px]"
              alt="user-image"
            />
            <div>
              <span
                class="sm:text-[15px] md:text-md block font-semibold text-black dark:text-white"
              >
                Jannie James
              </span>
              <span class="block"> Owner </span>
            </div>
          </div>
          <NuxtLink
            to="/real-estate/property-details"
            class="inline-block font-medium sm:text-[15px] md:text-md text-primary-500 transition-all hover:text-primary-400 hover:underline"
          >
            View More
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Germany</h5>
        </div>
        <div class="trezo-card-subtitle">
          <DropdownBtn />
        </div>
      </div>
      <div class="trezo-card-content">
        <NuxtLink
          to="/real-estate/property-details"
          class="block rounded-[5px]"
        >
          <img
            src="@/assets/images/properties/property6.jpg"
            class="inline-block rounded-[5px]"
            alt="property-image"
          />
        </NuxtLink>
        <div class="flex items-center justify-between mb-[9px] mt-[20px]">
          <h3 class="!text-lg !mb-0 !text-orange-500">$110,000</h3>
          <span
            class="inline-block text-xs rounded-[4px] bg-success-100 text-success-600 text-xs py-px px-[9px]"
          >
            Sale
          </span>
        </div>
        <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
          >
            location_on
          </i>
          Ansbacher Strasse 44
        </span>
        <ul
          class="mt-[17px] py-[10px] border-y border-primary-50 dark:border-[#172036]"
        >
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bed
            </i>
            10Bed
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bathtub
            </i>
            10Bath
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              square_foot
            </i>
            2500sqft
          </li>
        </ul>
        <div class="mt-[20px] flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <img
              src="@/assets/images/users/user6.jpg"
              class="rounded-full w-[40px]"
              alt="user-image"
            />
            <div>
              <span
                class="sm:text-[15px] md:text-md block font-semibold text-black dark:text-white"
              >
                Larry Greenberg
              </span>
              <span class="block"> Owner </span>
            </div>
          </div>
          <NuxtLink
            to="/real-estate/property-details"
            class="inline-block font-medium sm:text-[15px] md:text-md text-primary-500 transition-all hover:text-primary-400 hover:underline"
          >
            View More
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Poland</h5>
        </div>
        <div class="trezo-card-subtitle">
          <DropdownBtn />
        </div>
      </div>
      <div class="trezo-card-content">
        <NuxtLink
          to="/real-estate/property-details"
          class="block rounded-[5px]"
        >
          <img
            src="@/assets/images/properties/property7.jpg"
            class="inline-block rounded-[5px]"
            alt="property-image"
          />
        </NuxtLink>
        <div class="flex items-center justify-between mb-[9px] mt-[20px]">
          <h3 class="!text-lg !mb-0 !text-orange-500">$150,500</h3>
          <span
            class="inline-block text-xs rounded-[4px] bg-secondary-100 text-secondary-600 text-xs py-px px-[9px]"
          >
            Rent
          </span>
        </div>
        <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
          >
            location_on
          </i>
          Czerwonych Beretów 124
        </span>
        <ul
          class="mt-[17px] py-[10px] border-y border-primary-50 dark:border-[#172036]"
        >
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bed
            </i>
            6Bed
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bathtub
            </i>
            5Bath
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              square_foot
            </i>
            1800sqft
          </li>
        </ul>
        <div class="mt-[20px] flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <img
              src="@/assets/images/users/user7.jpg"
              class="rounded-full w-[40px]"
              alt="user-image"
            />
            <div>
              <span
                class="sm:text-[15px] md:text-md block font-semibold text-black dark:text-white"
              >
                Kara Spangler
              </span>
              <span class="block"> Owner </span>
            </div>
          </div>
          <NuxtLink
            to="/real-estate/property-details"
            class="inline-block font-medium sm:text-[15px] md:text-md text-primary-500 transition-all hover:text-primary-400 hover:underline"
          >
            View More
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Norway</h5>
        </div>
        <div class="trezo-card-subtitle">
          <DropdownBtn />
        </div>
      </div>
      <div class="trezo-card-content">
        <NuxtLink
          to="/real-estate/property-details"
          class="block rounded-[5px]"
        >
          <img
            src="@/assets/images/properties/property8.jpg"
            class="inline-block rounded-[5px]"
            alt="property-image"
          />
        </NuxtLink>
        <div class="flex items-center justify-between mb-[9px] mt-[20px]">
          <h3 class="!text-lg !mb-0 !text-orange-500">$120,000</h3>
          <span
            class="inline-block text-xs rounded-[4px] bg-secondary-100 text-secondary-600 text-xs py-px px-[9px]"
          >
            Rent
          </span>
        </div>
        <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
          >
            location_on
          </i>
          Moeneveien 228 VARTEIG
        </span>
        <ul
          class="mt-[17px] py-[10px] border-y border-primary-50 dark:border-[#172036]"
        >
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bed
            </i>
            5Bed
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bathtub
            </i>
            5Bath
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              square_foot
            </i>
            1400sqft
          </li>
        </ul>
        <div class="mt-[20px] flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <img
              src="@/assets/images/users/user8.jpg"
              class="rounded-full w-[40px]"
              alt="user-image"
            />
            <div>
              <span
                class="sm:text-[15px] md:text-md block font-semibold text-black dark:text-white"
              >
                Benjamin Dinh
              </span>
              <span class="block"> Owner </span>
            </div>
          </div>
          <NuxtLink
            to="/real-estate/property-details"
            class="inline-block font-medium sm:text-[15px] md:text-md text-primary-500 transition-all hover:text-primary-400 hover:underline"
          >
            View More
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Netherlands</h5>
        </div>
        <div class="trezo-card-subtitle">
          <DropdownBtn />
        </div>
      </div>
      <div class="trezo-card-content">
        <NuxtLink
          to="/real-estate/property-details"
          class="block rounded-[5px]"
        >
          <img
            src="@/assets/images/properties/property9.jpg"
            class="inline-block rounded-[5px]"
            alt="property-image"
          />
        </NuxtLink>
        <div class="flex items-center justify-between mb-[9px] mt-[20px]">
          <h3 class="!text-lg !mb-0 !text-orange-500">$190,000</h3>
          <span
            class="inline-block text-xs rounded-[4px] bg-success-100 text-success-600 text-xs py-px px-[9px]"
          >
            Sale
          </span>
        </div>
        <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
          >
            location_on
          </i>
          Overburgkade 23
        </span>
        <ul
          class="mt-[17px] py-[10px] border-y border-primary-50 dark:border-[#172036]"
        >
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bed
            </i>
            6Bed
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bathtub
            </i>
            6Bath
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              square_foot
            </i>
            1900sqft
          </li>
        </ul>
        <div class="mt-[20px] flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <img
              src="@/assets/images/users/user9.jpg"
              class="rounded-full w-[40px]"
              alt="user-image"
            />
            <div>
              <span
                class="sm:text-[15px] md:text-md block font-semibold text-black dark:text-white"
              >
                Jane Wright
              </span>
              <span class="block"> Owner </span>
            </div>
          </div>
          <NuxtLink
            to="/real-estate/property-details"
            class="inline-block font-medium sm:text-[15px] md:text-md text-primary-500 transition-all hover:text-primary-400 hover:underline"
          >
            View More
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Spain</h5>
        </div>
        <div class="trezo-card-subtitle">
          <DropdownBtn />
        </div>
      </div>
      <div class="trezo-card-content">
        <NuxtLink
          to="/real-estate/property-details"
          class="block rounded-[5px]"
        >
          <img
            src="@/assets/images/properties/property10.jpg"
            class="inline-block rounded-[5px]"
            alt="property-image"
          />
        </NuxtLink>
        <div class="flex items-center justify-between mb-[9px] mt-[20px]">
          <h3 class="!text-lg !mb-0 !text-orange-500">$155,000</h3>
          <span
            class="inline-block text-xs rounded-[4px] bg-success-100 text-success-600 text-xs py-px px-[9px]"
          >
            Sale
          </span>
        </div>
        <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
          >
            location_on
          </i>
          Paseo Junquera, 98
        </span>
        <ul
          class="mt-[17px] py-[10px] border-y border-primary-50 dark:border-[#172036]"
        >
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bed
            </i>
            6Bed
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bathtub
            </i>
            5Bath
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              square_foot
            </i>
            1800sqft
          </li>
        </ul>
        <div class="mt-[20px] flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <img
              src="@/assets/images/users/user10.jpg"
              class="rounded-full w-[40px]"
              alt="user-image"
            />
            <div>
              <span
                class="sm:text-[15px] md:text-md block font-semibold text-black dark:text-white"
              >
                Kirk Jensen
              </span>
              <span class="block"> Owner </span>
            </div>
          </div>
          <NuxtLink
            to="/real-estate/property-details"
            class="inline-block font-medium sm:text-[15px] md:text-md text-primary-500 transition-all hover:text-primary-400 hover:underline"
          >
            View More
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Hungary</h5>
        </div>
        <div class="trezo-card-subtitle">
          <DropdownBtn />
        </div>
      </div>
      <div class="trezo-card-content">
        <NuxtLink
          to="/real-estate/property-details"
          class="block rounded-[5px]"
        >
          <img
            src="@/assets/images/properties/property11.jpg"
            class="inline-block rounded-[5px]"
            alt="property-image"
          />
        </NuxtLink>
        <div class="flex items-center justify-between mb-[9px] mt-[20px]">
          <h3 class="!text-lg !mb-0 !text-orange-500">$340,000</h3>
          <span
            class="inline-block text-xs rounded-[4px] bg-orange-100 text-orange-600 text-xs py-px px-[9px]"
          >
            Sold
          </span>
        </div>
        <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
          >
            location_on
          </i>
          8985 Becsvölgye Nyár utca
        </span>
        <ul
          class="mt-[17px] py-[10px] border-y border-primary-50 dark:border-[#172036]"
        >
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bed
            </i>
            10Bed
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bathtub
            </i>
            10Bath
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              square_foot
            </i>
            2500sqft
          </li>
        </ul>
        <div class="mt-[20px] flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <img
              src="@/assets/images/users/user1.jpg"
              class="rounded-full w-[40px]"
              alt="user-image"
            />
            <div>
              <span
                class="sm:text-[15px] md:text-md block font-semibold text-black dark:text-white"
              >
                Harold Cook
              </span>
              <span class="block"> Owner </span>
            </div>
          </div>
          <NuxtLink
            to="/real-estate/property-details"
            class="inline-block font-medium sm:text-[15px] md:text-md text-primary-500 transition-all hover:text-primary-400 hover:underline"
          >
            View More
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Portugal</h5>
        </div>
        <div class="trezo-card-subtitle">
          <DropdownBtn />
        </div>
      </div>
      <div class="trezo-card-content">
        <NuxtLink
          to="/real-estate/property-details"
          class="block rounded-[5px]"
        >
          <img
            src="@/assets/images/properties/property12.jpg"
            class="inline-block rounded-[5px]"
            alt="property-image"
          />
        </NuxtLink>
        <div class="flex items-center justify-between mb-[9px] mt-[20px]">
          <h3 class="!text-lg !mb-0 !text-orange-500">$250,000</h3>
          <span
            class="inline-block text-xs rounded-[4px] bg-secondary-100 text-secondary-600 text-xs py-px px-[9px]"
          >
            Rent
          </span>
        </div>
        <span class="block relative pt-px ltr:pl-[22px] rtl:pr-[22px]">
          <i
            class="material-symbols-outlined text-primary-500 absolute ltr:-left-[2px] rtl:-right-[2px] top-1/2 -translate-y-1/2 !text-[19px]"
          >
            location_on
          </i>
          Largo Prazeres 32
        </span>
        <ul
          class="mt-[17px] py-[10px] border-y border-primary-50 dark:border-[#172036]"
        >
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bed
            </i>
            6Bed
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              bathtub
            </i>
            5Bath
          </li>
          <li
            class="relative inline-block relative ltr:pl-[24px] rtl:pr-[24px] ltr:mr-[20px] rtl:ml-[20px] ltr:last:mr-0 rtl:last:ml-0"
          >
            <i
              class="material-symbols-outlined absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 text-primary-500 !text-[18px]"
            >
              square_foot
            </i>
            1800sqft
          </li>
        </ul>
        <div class="mt-[20px] flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <img
              src="@/assets/images/users/user11.jpg"
              class="rounded-full w-[40px]"
              alt="user-image"
            />
            <div>
              <span
                class="sm:text-[15px] md:text-md block font-semibold text-black dark:text-white"
              >
                Judith Brooks
              </span>
              <span class="block"> Owner </span>
            </div>
          </div>
          <NuxtLink
            to="/real-estate/property-details"
            class="inline-block font-medium sm:text-[15px] md:text-md text-primary-500 transition-all hover:text-primary-400 hover:underline"
          >
            View More
          </NuxtLink>
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

<script lang="ts">
import { defineComponent } from "vue";
import DropdownBtn from "./DropdownBtn.vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "PropertyList",
  components: {
    DropdownBtn,
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
