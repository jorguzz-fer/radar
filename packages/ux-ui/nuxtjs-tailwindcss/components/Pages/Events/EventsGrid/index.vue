<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[25px] mb-[25px]"
  >
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="relative mb-[22px]">
          <NuxtLink to="/events/event-details" class="block rounded-md">
            <img
              src="@/assets/images/events/event1.jpg"
              alt="event-image"
              class="rounded-md"
            />
          </NuxtLink>
          <div
            class="absolute bg-primary-500 top-0 text-white font-bold flex items-center justify-center ltr:right-0 rtl:left-0 text-md w-[60px] h-[60px] rounded-md z-[1]"
          >
            $120
          </div>
          <div
            class="absolute top-0 ltr:right-0 rtl:left-0 w-[65px] h-[65px] bg-white dark:bg-[#0a0e19] ltr:rounded-bl-md rtl:rounded-br-md"
          ></div>
        </div>
        <h6 class="!text-lg !mb-[10px]">
          <NuxtLink
            to="/events/event-details"
            class="text-black dark:text-white transition-all hover:text-primary-500"
          >
            Annual Conference 2025
          </NuxtLink>
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user6.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user7.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user8.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <div
            class="w-[40px] h-[40px] rounded-full flex items-center justify-center ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036] bg-primary-500 text-white"
          >
            +4
          </div>
        </div>

        <div class="mt-[20px]">
          <div class="flex items-center justify-between mb-[8px]">
            <span class="block"> Seat Booked </span>
            <span class="block font-semibold text-black dark:text-white">
              1156
            </span>
          </div>
          <div
            class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
          >
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
              style="width: 85%"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="relative mb-[22px]">
          <NuxtLink to="/events/event-details" class="block rounded-md">
            <img
              src="@/assets/images/events/event2.jpg"
              alt="event-image"
              class="rounded-md"
            />
          </NuxtLink>
          <div
            class="absolute bg-primary-500 top-0 text-white font-bold flex items-center justify-center ltr:right-0 rtl:left-0 text-md w-[60px] h-[60px] rounded-md z-[1]"
          >
            $59
          </div>
          <div
            class="absolute top-0 ltr:right-0 rtl:left-0 w-[65px] h-[65px] bg-white dark:bg-[#0a0e19] ltr:rounded-bl-md rtl:rounded-br-md"
          ></div>
        </div>
        <h6 class="!text-lg !mb-[10px]">
          <NuxtLink
            to="/events/event-details"
            class="text-black dark:text-white transition-all hover:text-primary-500"
          >
            Leadership Summit 2025
          </NuxtLink>
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user10.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user11.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] border-[2px] border-gray-100 dark:border-[#172036]"
          />
        </div>
        <div class="mt-[20px]">
          <div class="flex items-center justify-between mb-[8px]">
            <span class="block"> Seat Booked </span>
            <span class="block font-semibold text-black dark:text-white">
              556
            </span>
          </div>
          <div
            class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
          >
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
              style="width: 24%"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="relative mb-[22px]">
          <NuxtLink to="/events/event-details" class="block rounded-md">
            <img
              src="@/assets/images/events/event3.jpg"
              alt="event-image"
              class="rounded-md"
            />
          </NuxtLink>
          <div
            class="absolute bg-primary-500 top-0 text-white font-bold flex items-center justify-center ltr:right-0 rtl:left-0 text-md w-[60px] h-[60px] rounded-md z-[1]"
          >
            $123
          </div>
          <div
            class="absolute top-0 ltr:right-0 rtl:left-0 w-[65px] h-[65px] bg-white dark:bg-[#0a0e19] ltr:rounded-bl-md rtl:rounded-br-md"
          ></div>
        </div>
        <h6 class="!text-lg !mb-[10px]">
          <NuxtLink
            to="/events/event-details"
            class="text-black dark:text-white transition-all hover:text-primary-500"
          >
            Product Launch Webinar
          </NuxtLink>
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user12.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user13.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user14.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
        </div>
        <div class="mt-[20px]">
          <div class="flex items-center justify-between mb-[8px]">
            <span class="block"> Seat Booked </span>
            <span class="block font-semibold text-black dark:text-white">
              356
            </span>
          </div>
          <div
            class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
          >
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
              style="width: 65%"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="relative mb-[22px]">
          <NuxtLink to="/events/event-details" class="block rounded-md">
            <img
              src="@/assets/images/events/event4.jpg"
              alt="event-image"
              class="rounded-md"
            />
          </NuxtLink>
          <div
            class="absolute bg-primary-500 top-0 text-white font-bold flex items-center justify-center ltr:right-0 rtl:left-0 text-md w-[60px] h-[60px] rounded-md z-[1]"
          >
            $99
          </div>
          <div
            class="absolute top-0 ltr:right-0 rtl:left-0 w-[65px] h-[65px] bg-white dark:bg-[#0a0e19] ltr:rounded-bl-md rtl:rounded-br-md"
          ></div>
        </div>
        <h6 class="!text-lg !mb-[10px]">
          <NuxtLink
            to="/events/event-details"
            class="text-black dark:text-white transition-all hover:text-primary-500"
          >
            AI in Healthcare Symposium
          </NuxtLink>
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user15.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
        </div>
        <div class="mt-[20px]">
          <div class="flex items-center justify-between mb-[8px]">
            <span class="block"> Seat Booked </span>
            <span class="block font-semibold text-black dark:text-white">
              3226
            </span>
          </div>
          <div
            class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
          >
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
              style="width: 82%"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="relative mb-[22px]">
          <NuxtLink to="/events/event-details" class="block rounded-md">
            <img
              src="@/assets/images/events/event5.jpg"
              alt="event-image"
              class="rounded-md"
            />
          </NuxtLink>
          <div
            class="absolute bg-primary-500 top-0 text-white font-bold flex items-center justify-center ltr:right-0 rtl:left-0 text-md w-[60px] h-[60px] rounded-md z-[1]"
          >
            $35
          </div>
          <div
            class="absolute top-0 ltr:right-0 rtl:left-0 w-[65px] h-[65px] bg-white dark:bg-[#0a0e19] ltr:rounded-bl-md rtl:rounded-br-md"
          ></div>
        </div>
        <h6 class="!text-lg !mb-[10px]">
          <NuxtLink
            to="/events/event-details"
            class="text-black dark:text-white transition-all hover:text-primary-500"
          >
            Tech Summit 2025
          </NuxtLink>
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user16.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user17.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] border-[2px] border-gray-100 dark:border-[#172036]"
          />
        </div>
        <div class="mt-[20px]">
          <div class="flex items-center justify-between mb-[8px]">
            <span class="block"> Seat Booked </span>
            <span class="block font-semibold text-black dark:text-white">
              4109
            </span>
          </div>
          <div
            class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
          >
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
              style="width: 48%"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="relative mb-[22px]">
          <NuxtLink to="/events/event-details" class="block rounded-md">
            <img
              src="@/assets/images/events/event6.jpg"
              alt="event-image"
              class="rounded-md"
            />
          </NuxtLink>
          <div
            class="absolute bg-primary-500 top-0 text-white font-bold flex items-center justify-center ltr:right-0 rtl:left-0 text-md w-[60px] h-[60px] rounded-md z-[1]"
          >
            $76
          </div>
          <div
            class="absolute top-0 ltr:right-0 rtl:left-0 w-[65px] h-[65px] bg-white dark:bg-[#0a0e19] ltr:rounded-bl-md rtl:rounded-br-md"
          ></div>
        </div>
        <h6 class="!text-lg !mb-[10px]">
          <NuxtLink
            to="/events/event-details"
            class="text-black dark:text-white transition-all hover:text-primary-500"
          >
            Startup Pitch Day
          </NuxtLink>
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user18.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user19.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user20.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
        </div>
        <div class="mt-[20px]">
          <div class="flex items-center justify-between mb-[8px]">
            <span class="block"> Seat Booked </span>
            <span class="block font-semibold text-black dark:text-white">
              432
            </span>
          </div>
          <div
            class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
          >
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
              style="width: 37%"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="relative mb-[22px]">
          <NuxtLink to="/events/event-details" class="block rounded-md">
            <img
              src="@/assets/images/events/event7.jpg"
              alt="event-image"
              class="rounded-md"
            />
          </NuxtLink>
          <div
            class="absolute bg-primary-500 top-0 text-white font-bold flex items-center justify-center ltr:right-0 rtl:left-0 text-md w-[60px] h-[60px] rounded-md z-[1]"
          >
            $30
          </div>
          <div
            class="absolute top-0 ltr:right-0 rtl:left-0 w-[65px] h-[65px] bg-white dark:bg-[#0a0e19] ltr:rounded-bl-md rtl:rounded-br-md"
          ></div>
        </div>
        <h6 class="!text-lg !mb-[10px]">
          <NuxtLink
            to="/events/event-details"
            class="text-black dark:text-white transition-all hover:text-primary-500"
          >
            Workshop: Digital Marketing
          </NuxtLink>
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user21.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
        </div>
        <div class="mt-[20px]">
          <div class="flex items-center justify-between mb-[8px]">
            <span class="block"> Seat Booked </span>
            <span class="block font-semibold text-black dark:text-white">
              1728
            </span>
          </div>
          <div
            class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
          >
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
              style="width: 65%"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="relative mb-[22px]">
          <NuxtLink to="/events/event-details" class="block rounded-md">
            <img
              src="@/assets/images/events/event8.jpg"
              alt="event-image"
              class="rounded-md"
            />
          </NuxtLink>
          <div
            class="absolute bg-primary-500 top-0 text-white font-bold flex items-center justify-center ltr:right-0 rtl:left-0 text-md w-[60px] h-[60px] rounded-md z-[1]"
          >
            $87
          </div>
          <div
            class="absolute top-0 ltr:right-0 rtl:left-0 w-[65px] h-[65px] bg-white dark:bg-[#0a0e19] ltr:rounded-bl-md rtl:rounded-br-md"
          ></div>
        </div>
        <h6 class="!text-lg !mb-[10px]">
          <NuxtLink
            to="/events/event-details"
            class="text-black dark:text-white transition-all hover:text-primary-500"
          >
            Charity Gala Dinner
          </NuxtLink>
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user22.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user23.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user24.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user25.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
        </div>
        <div class="mt-[20px]">
          <div class="flex items-center justify-between mb-[8px]">
            <span class="block"> Seat Booked </span>
            <span class="block font-semibold text-black dark:text-white">
              1306
            </span>
          </div>
          <div
            class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
          >
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
              style="width: 80%"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="relative mb-[22px]">
          <NuxtLink to="/events/event-details" class="block rounded-md">
            <img
              src="@/assets/images/events/event9.jpg"
              alt="event-image"
              class="rounded-md"
            />
          </NuxtLink>
          <div
            class="absolute bg-primary-500 top-0 text-white font-bold flex items-center justify-center ltr:right-0 rtl:left-0 text-md w-[60px] h-[60px] rounded-md z-[1]"
          >
            $50
          </div>
          <div
            class="absolute top-0 ltr:right-0 rtl:left-0 w-[65px] h-[65px] bg-white dark:bg-[#0a0e19] ltr:rounded-bl-md rtl:rounded-br-md"
          ></div>
        </div>
        <h6 class="!text-lg !mb-[10px]">
          <NuxtLink
            to="/events/event-details"
            class="text-black dark:text-white transition-all hover:text-primary-500"
          >
            Web Development Seminar
          </NuxtLink>
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user26.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user27.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] border-[2px] border-gray-100 dark:border-[#172036]"
          />
        </div>
        <div class="mt-[20px]">
          <div class="flex items-center justify-between mb-[8px]">
            <span class="block"> Seat Booked </span>
            <span class="block font-semibold text-black dark:text-white">
              2756
            </span>
          </div>
          <div
            class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
          >
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
              style="width: 78%"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="relative mb-[22px]">
          <NuxtLink to="/events/event-details" class="block rounded-md">
            <img
              src="@/assets/images/events/event10.jpg"
              alt="event-image"
              class="rounded-md"
            />
          </NuxtLink>
          <div
            class="absolute bg-primary-500 top-0 text-white font-bold flex items-center justify-center ltr:right-0 rtl:left-0 text-md w-[60px] h-[60px] rounded-md z-[1]"
          >
            $89
          </div>
          <div
            class="absolute top-0 ltr:right-0 rtl:left-0 w-[65px] h-[65px] bg-white dark:bg-[#0a0e19] ltr:rounded-bl-md rtl:rounded-br-md"
          ></div>
        </div>
        <h6 class="!text-lg !mb-[10px]">
          <NuxtLink
            to="/events/event-details"
            class="text-black dark:text-white transition-all hover:text-primary-500"
          >
            Networking Mixer
          </NuxtLink>
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user28.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user29.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] border-[2px] border-gray-100 dark:border-[#172036]"
          />
        </div>
        <div class="mt-[20px]">
          <div class="flex items-center justify-between mb-[8px]">
            <span class="block"> Seat Booked </span>
            <span class="block font-semibold text-black dark:text-white">
              1467
            </span>
          </div>
          <div
            class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
          >
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
              style="width: 30%"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="relative mb-[22px]">
          <NuxtLink to="/events/event-details" class="block rounded-md">
            <img
              src="@/assets/images/events/event1.jpg"
              alt="event-image"
              class="rounded-md"
            />
          </NuxtLink>
          <div
            class="absolute bg-primary-500 top-0 text-white font-bold flex items-center justify-center ltr:right-0 rtl:left-0 text-md w-[60px] h-[60px] rounded-md z-[1]"
          >
            $120
          </div>
          <div
            class="absolute top-0 ltr:right-0 rtl:left-0 w-[65px] h-[65px] bg-white dark:bg-[#0a0e19] ltr:rounded-bl-md rtl:rounded-br-md"
          ></div>
        </div>
        <h6 class="!text-lg !mb-[10px]">
          <NuxtLink
            to="/events/event-details"
            class="text-black dark:text-white transition-all hover:text-primary-500"
          >
            Annual Conference 2025
          </NuxtLink>
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user6.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user7.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user8.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <div
            class="w-[40px] h-[40px] rounded-full flex items-center justify-center ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036] bg-primary-500 text-white"
          >
            +4
          </div>
        </div>
        <div class="mt-[20px]">
          <div class="flex items-center justify-between mb-[8px]">
            <span class="block"> Seat Booked </span>
            <span class="block font-semibold text-black dark:text-white">
              1156
            </span>
          </div>
          <div
            class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
          >
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
              style="width: 85%"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="relative mb-[22px]">
          <NuxtLink to="/events/event-details" class="block rounded-md">
            <img
              src="@/assets/images/events/event2.jpg"
              alt="event-image"
              class="rounded-md"
            />
          </NuxtLink>
          <div
            class="absolute bg-primary-500 top-0 text-white font-bold flex items-center justify-center ltr:right-0 rtl:left-0 text-md w-[60px] h-[60px] rounded-md z-[1]"
          >
            $59
          </div>
          <div
            class="absolute top-0 ltr:right-0 rtl:left-0 w-[65px] h-[65px] bg-white dark:bg-[#0a0e19] ltr:rounded-bl-md rtl:rounded-br-md"
          ></div>
        </div>
        <h6 class="!text-lg !mb-[10px]">
          <NuxtLink
            to="/events/event-details"
            class="text-black dark:text-white transition-all hover:text-primary-500"
          >
            Leadership Summit 2025
          </NuxtLink>
        </h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div class="flex items-center">
          <img
            src="@/assets/images/users/user10.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-gray-100 dark:border-[#172036]"
          />
          <img
            src="@/assets/images/users/user11.jpg"
            alt="user-image"
            class="rounded-full w-[40px] h-[40px] ltr:-mr-[12px] rtl:-ml-[12px] border-[2px] border-gray-100 dark:border-[#172036]"
          />
        </div>
        <div class="mt-[20px]">
          <div class="flex items-center justify-between mb-[8px]">
            <span class="block"> Seat Booked </span>
            <span class="block font-semibold text-black dark:text-white">
              556
            </span>
          </div>
          <div
            class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
          >
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
              style="width: 24%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <Pagination items="9" total="36" class="pt-[0] md:pt-[0]" />
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Common/Pagination.vue";

export default {
  name: "EventsGrid",
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
