<template>
  <div class="trezo-tabs product-details-tabs" id="trezo-tabs">
    <ul class="navs">
      <li class="nav-item inline-block">
        <button
          type="button"
          class="nav-link block md:text-md py-[10px] md:py-[12px] px-[15px] md:px-[20px] transition-all relative font-medium rounded-t-md ltr:-mr-[4px] rtl:-ml-[4px]"
          :class="['tab', { active: activeTab === 'description' }]"
          @click="setActiveTab('description')"
        >
          Description
        </button>
      </li>
      <li class="nav-item inline-block">
        <button
          type="button"
          class="nav-link block md:text-md py-[10px] md:py-[12px] px-[15px] md:px-[20px] transition-all relative font-medium rounded-t-md ltr:-mr-[4px] rtl:-ml-[4px]"
          :class="['tab', { active: activeTab === 'specifications' }]"
          @click="setActiveTab('specifications')"
        >
          Specifications
        </button>
      </li>
      <li class="nav-item inline-block">
        <button
          type="button"
          class="nav-link block md:text-md py-[10px] md:py-[12px] px-[15px] md:px-[20px] transition-all relative font-medium rounded-t-md ltr:-mr-[4px] rtl:-ml-[4px]"
          :class="['tab', { active: activeTab === 'reviews' }]"
          @click="setActiveTab('reviews')"
        >
          Reviews
        </button>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane" v-show="activeTab === 'description'">
        <div
          class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
        >
          <div class="trezo-card-content">
            <p>
              The Apple MacBook Pro 16.2 is a cutting-edge laptop designed to
              deliver exceptional performance and advanced features for
              professionals and creative enthusiasts. With its sleek aluminum
              body and precision engineering, this MacBook Pro represents the
              pinnacle of Apple's laptop technology.
            </p>
            <p>
              Stay connected with a variety of ports, including Thunderbolt 3,
              USB-C, and audio jacks. These versatile ports support high-speed
              data transfer and external device connections. Enjoy a rich audio
              experience with high-fidelity speakers that deliver clear and
              immersive sound. Perfect for content creators and multimedia
              enthusiasts.
            </p>
            <p>
              Equipped with the latest processors, ample RAM, and
              high-performance graphics, the MacBook Pro 16.2 ensures smooth
              multitasking, fast rendering, and efficient handling of
              resource-intensive tasks. Seamlessly integrate with the macOS
              ecosystem, benefiting from features like iCloud, Siri, and a vast
              selection of applications available on the App Store.
            </p>
          </div>
        </div>
      </div>
      <div class="tab-pane" v-show="activeTab === 'specifications'">
        <div
          class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
        >
          <div class="trezo-card-content">
            <h6 class="!font-semibold !mb-[12px] !text-[15px]">General</h6>
            <ul>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Brand: </span>
                Apple
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Model: </span>
                MacBook Pro
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Price: </span>
                $2499
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white">
                  Dimensions (mm):
                </span>
                304.10 x 212.40 x 14.90
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Weight (kg): </span>
                1.37
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Colors: </span>
                Space Grey
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white">
                  Operating system:
                </span>
                macOS
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white">
                  Battery Life (up to hours):
                </span>
                10
              </li>
            </ul>
            <h6
              class="font-semibold mb-[12px] mt-[20px] md:mt-[25px] text-[15px]"
            >
              Display
            </h6>
            <ul>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Size: </span>
                13.30-inch
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Resolution: </span>
                2560x1600 pixels
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Touch Screen: </span>
                No
              </li>
            </ul>
            <h6
              class="font-semibold mb-[12px] mt-[20px] md:mt-[25px] text-[15px]"
            >
              Processor
            </h6>
            <ul>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Processor: </span>
                Intel Core i5 7th Gen
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white">
                  Base Clock Speed:
                </span>
                2.3 GHz
              </li>
            </ul>
            <h6
              class="font-semibold mb-[12px] mt-[20px] md:mt-[25px] text-[15px]"
            >
              Memory
            </h6>
            <ul>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> RAM: </span>
                12GB
              </li>
            </ul>
            <h6
              class="font-semibold mb-[12px] mt-[20px] md:mt-[25px] text-[15px]"
            >
              Storage
            </h6>
            <ul>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Hard disk: </span>
                No
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> SSD: </span>
                512GB
              </li>
            </ul>
            <h6
              class="font-semibold mb-[12px] mt-[20px] md:mt-[25px] text-[15px]"
            >
              Connectivity
            </h6>
            <ul>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white">
                  Wi-Fi standards supported:
                </span>
                Apple
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white">
                  Bluetooth version:
                </span>
                4.2
              </li>
            </ul>
            <h6
              class="font-semibold mb-[12px] mt-[20px] md:mt-[25px] text-[15px]"
            >
              Inputs
            </h6>
            <ul>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Web Camera: </span>
                Yes
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white">
                  Pointer Device:
                </span>
                Touchpad
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Touchpad: </span>
                Yes
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Internal Mic: </span>
                Yes
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Speakers: </span>
                Stereo Speakers
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white">
                  Finger Print Sensor:
                </span>
                Yes
              </li>
            </ul>
            <h6
              class="font-semibold mb-[12px] mt-[20px] md:mt-[25px] text-[15px]"
            >
              Ports and slots
            </h6>
            <ul>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white">
                  Number of USB Ports:
                </span>
                2
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> USB Ports: </span>
                2 x USB 3.0
              </li>
              <li
                class="py-[11px] px-[20px] border-b border-l border-r border-gray-100 dark:border-[#172036] first:border-t"
              >
                <span class="text-black dark:text-white"> Mic In: </span>
                Yes
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="tab-pane" v-show="activeTab === 'reviews'">
        <div
          class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
        >
          <div class="trezo-card-content">
            <div class="md:grid md:grid-cols-3 gap-[25px] items-center">
              <div class="md:col-span-2">
                <div
                  class="flex items-center relative gap-[15px] mb-[15px] ltr:pr-[48px] rtl:pl-[48px] last:mb-0"
                >
                  <div
                    class="flex items-center justify-center text-[#ee8336] text-lg gap-[5px]"
                  >
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                  <div
                    class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
                  >
                    <div
                      class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                      style="width: 85%"
                    ></div>
                  </div>
                  <span
                    class="absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2"
                  >
                    359
                  </span>
                </div>
                <div
                  class="flex items-center relative gap-[15px] mb-[15px] ltr:pr-[48px] rtl:pl-[48px] last:mb-0"
                >
                  <div
                    class="flex items-center justify-center text-[#ee8336] text-lg gap-[5px]"
                  >
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i
                      class="ri-star-line text-[#e2e8f0] dark:text-[#334161]"
                    ></i>
                  </div>
                  <div
                    class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
                  >
                    <div
                      class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                      style="width: 50%"
                    ></div>
                  </div>
                  <span
                    class="absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2"
                  >
                    208
                  </span>
                </div>
                <div
                  class="flex items-center relative gap-[15px] mb-[15px] ltr:pr-[48px] rtl:pl-[48px] last:mb-0"
                >
                  <div
                    class="flex items-center justify-center text-[#ee8336] text-lg gap-[5px]"
                  >
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i
                      class="ri-star-line text-[#e2e8f0] dark:text-[#334161]"
                    ></i>
                    <i
                      class="ri-star-line text-[#e2e8f0] dark:text-[#334161]"
                    ></i>
                  </div>
                  <div
                    class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
                  >
                    <div
                      class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                      style="width: 35%"
                    ></div>
                  </div>
                  <span
                    class="absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2"
                  >
                    124
                  </span>
                </div>
                <div
                  class="flex items-center relative gap-[15px] mb-[15px] ltr:pr-[48px] rtl:pl-[48px] last:mb-0"
                >
                  <div
                    class="flex items-center justify-center text-[#ee8336] text-lg gap-[5px]"
                  >
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i
                      class="ri-star-line text-[#e2e8f0] dark:text-[#334161]"
                    ></i>
                    <i
                      class="ri-star-line text-[#e2e8f0] dark:text-[#334161]"
                    ></i>
                    <i
                      class="ri-star-line text-[#e2e8f0] dark:text-[#334161]"
                    ></i>
                  </div>
                  <div
                    class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
                  >
                    <div
                      class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                      style="width: 15%"
                    ></div>
                  </div>
                  <span
                    class="absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2"
                  >
                    89
                  </span>
                </div>
                <div
                  class="flex items-center relative gap-[15px] mb-[15px] ltr:pr-[48px] rtl:pl-[48px] last:mb-0"
                >
                  <div
                    class="flex items-center justify-center text-[#ee8336] text-lg gap-[5px]"
                  >
                    <i class="ri-star-fill"></i>
                    <i
                      class="ri-star-line text-[#e2e8f0] dark:text-[#334161]"
                    ></i>
                    <i
                      class="ri-star-line text-[#e2e8f0] dark:text-[#334161]"
                    ></i>
                    <i
                      class="ri-star-line text-[#e2e8f0] dark:text-[#334161]"
                    ></i>
                    <i
                      class="ri-star-line text-[#e2e8f0] dark:text-[#334161]"
                    ></i>
                  </div>
                  <div
                    class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
                  >
                    <div
                      class="flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md"
                      style="width: 5%"
                    ></div>
                  </div>
                  <span
                    class="absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2"
                  >
                    4
                  </span>
                </div>
              </div>
              <div class="md:col-span-1">
                <div class="text-center mt-[25px] md:mt-0">
                  <h3 class="!mb-[7px] !leading-none !text-5xl">4.28</h3>
                  <div
                    class="flex items-center justify-center mb-[10px] text-[#ee8336] text-[30px] gap-[4px]"
                  >
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i
                      class="ri-star-line text-[#e2e8f0] dark:text-[#334161]"
                    ></i>
                  </div>
                  <span class="block"> of 3250 Reviews </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
        >
          <div
            class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
          >
            <div class="trezo-card-title">
              <h5 class="!mb-0">Manage Reviews</h5>
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
                      ID
                    </th>
                    <th
                      class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
                    >
                      Reviewer
                    </th>
                    <th
                      class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
                    >
                      Review
                    </th>
                    <th
                      class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
                    >
                      Date
                    </th>
                    <th
                      class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
                    >
                      Status
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
                      class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      #999
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
                          <span class="block font-medium"> Olivia Clark </span>
                          <span
                            class="block mt-[2px] text-gray-500 dark:text-gray-400"
                          >
                            olivia@trezo.com
                          </span>
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <div
                        class="leading-none flex items-center gap-[2px] text-lg text-[#ee8336]"
                      >
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                      </div>
                      <p class="mt-[10px] w-[350px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </td>
                    <td
                      class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <span class="block"> 17 Dec 2025 </span>
                      <span class="block"> 08:30 PM </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs"
                      >
                        Pending
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <div class="flex items-center gap-[9px]">
                        <button
                          type="button"
                          class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          v-tooltip="'Approve'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            download_done
                          </i>
                        </button>
                        <button
                          type="button"
                          class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          v-tooltip="'Reply'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            reply
                          </i>
                        </button>
                        <button
                          type="button"
                          class="text-danger-500 leading-none custom-tooltip"
                          v-tooltip="'Delete'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            delete
                          </i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      #998
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
                          <span class="block font-medium"> Zephyr Zing </span>
                          <span
                            class="block mt-[2px] text-gray-500 dark:text-gray-400"
                          >
                            zephyr@trezo.com
                          </span>
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <div
                        class="leading-none flex items-center gap-[2px] text-lg text-[#ee8336]"
                      >
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </div>
                      <p class="mt-[10px] w-[350px]">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type.
                      </p>
                    </td>
                    <td
                      class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <span class="block"> 16 Dec 2025 </span>
                      <span class="block"> 10:11 PM </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs"
                      >
                        Pending
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <div class="flex items-center gap-[9px]">
                        <button
                          type="button"
                          class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          v-tooltip="'Approve'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            download_done
                          </i>
                        </button>
                        <button
                          type="button"
                          class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          v-tooltip="'Reply'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            reply
                          </i>
                        </button>
                        <button
                          type="button"
                          class="text-danger-500 leading-none custom-tooltip"
                          v-tooltip="'Delete'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            delete
                          </i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      #997
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
                          <span class="block font-medium"> Nova Nectar </span>
                          <span
                            class="block mt-[2px] text-gray-500 dark:text-gray-400"
                          >
                            nova@trezo.com
                          </span>
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <div
                        class="leading-none flex items-center gap-[2px] text-lg text-[#ee8336]"
                      >
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-line"></i>
                      </div>
                      <p class="mt-[10px] w-[350px]">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </p>
                    </td>
                    <td
                      class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <span class="block"> 15 Dec 2025 </span>
                      <span class="block"> 11:11 AM </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs"
                      >
                        Pending
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <div class="flex items-center gap-[9px]">
                        <button
                          type="button"
                          class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          v-tooltip="'Approve'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            download_done
                          </i>
                        </button>
                        <button
                          type="button"
                          class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          v-tooltip="'Reply'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            reply
                          </i>
                        </button>
                        <button
                          type="button"
                          class="text-danger-500 leading-none custom-tooltip"
                          v-tooltip="'Delete'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            delete
                          </i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      #996
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
                          <span class="block font-medium">
                            Isabella Chang
                          </span>
                          <span
                            class="block mt-[2px] text-gray-500 dark:text-gray-400"
                          >
                            isabella@trezo.com
                          </span>
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <div
                        class="leading-none flex items-center gap-[2px] text-lg text-[#ee8336]"
                      >
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                        <i class="ri-star-line"></i>
                      </div>
                      <p class="mt-[10px] w-[350px]">
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing.
                      </p>
                    </td>
                    <td
                      class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <span class="block"> 17 Dec 2025 </span>
                      <span class="block"> 08:30 PM </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs"
                      >
                        Pending
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <div class="flex items-center gap-[9px]">
                        <button
                          type="button"
                          class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          v-tooltip="'Approve'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            download_done
                          </i>
                        </button>
                        <button
                          type="button"
                          class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          v-tooltip="'Reply'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            reply
                          </i>
                        </button>
                        <button
                          type="button"
                          class="text-danger-500 leading-none custom-tooltip"
                          v-tooltip="'Delete'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            delete
                          </i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      #995
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
                          <span class="block font-medium"> Alina Bennett </span>
                          <span
                            class="block mt-[2px] text-gray-500 dark:text-gray-400"
                          >
                            alina@trezo.com
                          </span>
                        </div>
                      </div>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <div
                        class="leading-none flex items-center gap-[2px] text-lg text-[#ee8336]"
                      >
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                      </div>
                      <p class="mt-[10px] w-[350px]">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </td>
                    <td
                      class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <span class="block"> 17 Dec 2025 </span>
                      <span class="block"> 08:30 PM </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <span
                        class="px-[8px] py-[3px] inline-block bg-danger-50 dark:bg-[#15203c] text-danger-500 rounded-sm font-medium text-xs"
                      >
                        Published
                      </span>
                    </td>
                    <td
                      class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
                    >
                      <div class="flex items-center gap-[9px]">
                        <button
                          type="button"
                          class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          v-tooltip="'Approve'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            download_done
                          </i>
                        </button>
                        <button
                          type="button"
                          class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                          v-tooltip="'Reply'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            reply
                          </i>
                        </button>
                        <button
                          type="button"
                          class="text-danger-500 leading-none custom-tooltip"
                          v-tooltip="'Delete'"
                        >
                          <i class="material-symbols-outlined !text-md">
                            delete
                          </i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Pagination
              items="5"
              total="36"
              class="px-[20px] py-[12px] md:py-[14px] rounded-b-md border-l border-r border-b border-gray-100 dark:border-[#172036]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "ProductsDetailsTabs",
  components: {
    Pagination,
  },
  setup() {
    const activeTab = ref("description");

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
