<template>
  <div
    :class="[
      'add-new-popup z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px]',
      { active: stateStoreInstance.active },
    ]"
  >
    <div
      class="popup-dialog flex transition-all sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1320px] min-h-full items-center mx-auto"
    >
      <div
        class="trezo-card w-full bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] lg:p-[50px]"
      >
        <div
          class="trezo-card-header mb-[20px] md:mb-[25px] lg:mb-[56px] flex items-center justify-between"
        >
          <div class="trezo-card-title">
            <h5 class="mb-0 lg:text-xl">Create Campaign</h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              type="button"
              class="text-[28px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
              @click="stateStoreInstance.activeBtn"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>

        <div class="trezo-card-content mx-auto lg:max-w-[835px]">
          <div class="trezo-tabs" id="trezo-tabs">
            <ul class="navs mb-[20px] md:mb-[30px] lg:mb-[50px] text-center">
              <li
                class="nav-item inline-block mb-[10px] md:mb-0 mx-[10px] md:mx-[15px] lg:mx-[23px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0"
              >
                <button
                  type="button"
                  class="nav-link block lg:tracking-[2px] text-xs uppercase font-medium pb-[5px] md:pb-[10px] transition-all relative font-medium"
                  :class="['tab', { active: activeTab === 'campaignDetails' }]"
                  @click="setActiveTab('campaignDetails')"
                >
                  CAMPAIGN DETAILS
                </button>
              </li>
              <li
                class="nav-item inline-block mb-[10px] md:mb-0 mx-[10px] md:mx-[15px] lg:mx-[23px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0"
              >
                <button
                  type="button"
                  class="nav-link block lg:tracking-[2px] text-xs uppercase font-medium pb-[5px] md:pb-[10px] transition-all relative font-medium"
                  :class="['tab', { active: activeTab === 'creativeUploads' }]"
                  @click="setActiveTab('creativeUploads')"
                >
                  CREATIVE UPLOADS
                </button>
              </li>
              <li
                class="nav-item inline-block mb-[10px] md:mb-0 mx-[10px] md:mx-[15px] lg:mx-[23px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0"
              >
                <button
                  type="button"
                  class="nav-link block lg:tracking-[2px] text-xs uppercase font-medium pb-[5px] md:pb-[10px] transition-all relative font-medium"
                  :class="['tab', { active: activeTab === 'audiences' }]"
                  @click="setActiveTab('audiences')"
                >
                  AUDIENCES
                </button>
              </li>
              <li
                class="nav-item inline-block mb-[10px] md:mb-0 mx-[10px] md:mx-[15px] lg:mx-[23px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0"
              >
                <button
                  type="button"
                  class="nav-link block lg:tracking-[2px] text-xs uppercase font-medium pb-[5px] md:pb-[10px] transition-all relative font-medium"
                  :class="['tab', { active: activeTab === 'budgetEstimates' }]"
                  @click="setActiveTab('budgetEstimates')"
                >
                  BUDGET ESTIMATES
                </button>
              </li>
              <li
                class="nav-item inline-block mb-[10px] md:mb-0 mx-[10px] md:mx-[15px] lg:mx-[23px] ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0"
              >
                <button
                  type="button"
                  class="nav-link block lg:tracking-[2px] text-xs uppercase font-medium pb-[5px] md:pb-[10px] transition-all relative font-medium"
                  :class="['tab', { active: activeTab === 'completed' }]"
                  @click="setActiveTab('completed')"
                >
                  COMPLETED
                </button>
              </li>
            </ul>

            <div class="tab-content md:px-[16px] lg:px-[85px]">
              <div class="tab-pane" v-show="activeTab === 'campaignDetails'">
                <h3
                  class="mb-[20px] md:mb-[25px] lg:mb-[35px] text-gray-900 dark:text-gray-400 text-lg"
                >
                  Campaign Details
                </h3>
                <form>
                  <div class="mb-[20px] mb-[25px] lg:mb-[45px]">
                    <label
                      class="mb-[10px] text-gray-500 dark:text-white font-medium block"
                    >
                      Campaign Name <span class="text-orange-600">*</span>
                    </label>
                    <input
                      type="text"
                      class="h-[55px] font-medium md:text-md rounded-[4px] text-gray-900 dark:text-white border border-gray-100 dark:border-[#0a0e19] bg-gray-100 dark:bg-[#0a0e19] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
                      value="Christmas Eve"
                    />
                  </div>
                  <div
                    class="mb-[20px] mb-[25px] lg:mb-[45px]"
                    id="fileUploader"
                  >
                    <label
                      class="mb-[10px] text-gray-500 dark:text-white font-medium block"
                    >
                      Company Logo <span class="text-orange-600">*</span>
                    </label>
                    <div
                      class="relative inline-block pb-[15px] ltr:pr-[15px] rtl:pl-[15px]"
                    >
                      <div
                        class="bg-gray-100 dark:bg-[#0a0e19] w-[134px] h-[134px] rounded-[4px] text-gray-400 flex items-center justify-center"
                      >
                        <i class="material-symbols-outlined !text-[42px]">
                          perm_media
                        </i>
                      </div>
                      <div
                        class="absolute bottom-0 ltr:right-0 rtl:left-0 w-[49px] h-[49px] bg-white rounded-full flex items-center justify-center text-primary-500 shadow-xl dark:bg-[#0c1427]"
                      >
                        <i class="material-symbols-outlined"> add </i>
                      </div>
                      <input
                        type="file"
                        id="fileInput"
                        class="absolute top-0 left-0 right-0 bottom-0 z-[1] opacity-0 cursor-pointer"
                      />
                    </div>
                    <span class="block mt-[10px] text-gray-400">
                      Allowed file types: png, jpg, jpeg. Max size: 1 MB
                    </span>
                  </div>
                  <div class="mb-[20px] mb-[25px] lg:mb-[45px]">
                    <label
                      class="mb-[20px] text-gray-500 dark:text-white font-semibold block"
                    >
                      Campaign Goal <span class="text-orange-600">*</span>
                    </label>
                    <div
                      class="form-radio border-b border-primary-50 dark:border-[#172036] pb-[12px] mb-[12px] last:mb-0"
                    >
                      <label
                        for="getMoreVisitors"
                        class="cursor-pointer relative block ltr:pl-[45px] rtl:pr-[45px]"
                      >
                        <input
                          checked
                          type="radio"
                          name="campaignGoalRadio"
                          class="absolute ltr:left-[2px] rtl:right-[2px] top-1/2 -translate-y-1/2 scale-[2] w-[26px]"
                          id="getMoreVisitors"
                        />
                        <span
                          class="block font-medium mb-[2px] text-gray-900 dark:text-gray-400"
                        >
                          Get more visitors
                        </span>
                        <span class="block text-gray-400">
                          Increase impression traffic onto the platform
                        </span>
                      </label>
                    </div>
                    <div
                      class="form-radio border-b border-primary-50 dark:border-[#172036] pb-[12px] mb-[12px] last:mb-0"
                    >
                      <label
                        for="getMoreMessagesOnChat"
                        class="cursor-pointer relative block ltr:pl-[45px] rtl:pr-[45px]"
                      >
                        <input
                          type="radio"
                          name="campaignGoalRadio"
                          class="absolute ltr:left-[2px] rtl:right-[2px] top-1/2 -translate-y-1/2 scale-[2] w-[26px]"
                          id="getMoreMessagesOnChat"
                        />
                        <span
                          class="block font-medium mb-[2px] text-gray-900 dark:text-gray-400"
                        >
                          Get more messages on chat
                        </span>
                        <span class="block text-gray-400">
                          Increase community interaction and communication
                        </span>
                      </label>
                    </div>
                    <div
                      class="form-radio border-b border-primary-50 dark:border-[#172036] pb-[12px] mb-[12px] last:mb-0"
                    >
                      <label
                        for="getMoreCalls"
                        class="cursor-pointer relative block ltr:pl-[45px] rtl:pr-[45px]"
                      >
                        <input
                          type="radio"
                          name="campaignGoalRadio"
                          class="absolute ltr:left-[2px] rtl:right-[2px] top-1/2 -translate-y-1/2 scale-[2] w-[26px]"
                          id="getMoreCalls"
                        />
                        <span
                          class="block font-medium mb-[2px] text-gray-900 dark:text-gray-400"
                        >
                          Get more calls
                        </span>
                        <span class="block text-gray-400">
                          Boost telecommunication feedback to provide precise
                          and accurate information
                        </span>
                      </label>
                    </div>
                    <div
                      class="form-radio border-b border-primary-50 dark:border-[#172036] pb-[12px] mb-[12px] last:mb-0"
                    >
                      <label
                        for="getMoreLikes"
                        class="cursor-pointer relative block ltr:pl-[45px] rtl:pr-[45px]"
                      >
                        <input
                          type="radio"
                          name="campaignGoalRadio"
                          class="absolute ltr:left-[2px] rtl:right-[2px] top-1/2 -translate-y-1/2 scale-[2] w-[26px]"
                          id="getMoreLikes"
                        />
                        <span
                          class="block font-medium mb-[2px] text-gray-900 dark:text-gray-400"
                        >
                          Get more likes
                        </span>
                        <span class="block text-gray-400">
                          Increase positive interactivity on social media
                          platforms
                        </span>
                      </label>
                    </div>
                    <div
                      class="form-radio border-b border-primary-50 dark:border-[#172036] pb-[12px] mb-[12px] last:mb-0"
                    >
                      <label
                        for="leadGeneration"
                        class="cursor-pointer relative block ltr:pl-[45px] rtl:pr-[45px]"
                      >
                        <input
                          type="radio"
                          name="campaignGoalRadio"
                          class="absolute ltr:left-[2px] rtl:right-[2px] top-1/2 -translate-y-1/2 scale-[2] w-[26px]"
                          id="leadGeneration"
                        />
                        <span
                          class="block font-medium mb-[2px] text-gray-900 dark:text-gray-400"
                        >
                          Lead generation
                        </span>
                        <span class="block text-gray-400">
                          Collect contact information for potential customers
                        </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="tab-pane" v-show="activeTab === 'creativeUploads'">
                <form>
                  <div class="mb-[20px] mb-[25px] lg:mb-[40px]">
                    <label
                      class="mb-[17px] text-black dark:text-white text-lg font-bold block"
                    >
                      Upload Files
                    </label>
                    <div id="fileUploader2">
                      <div
                        class="relative flex items-center overflow-hidden rounded-[4px] py-[34px] px-[30px] bg-gray-100 dark:bg-[#0a0e19] border-[2px] border-dashed border-secondary-400 dark:border-[#172036]"
                      >
                        <div class="flex items-center gap-[15px]">
                          <div class="text-primary-500 text-4xl">
                            <i class="ri-file-upload-line"></i>
                          </div>
                          <div>
                            <p class="leading-[1.5] text-md mb-[3px]">
                              <strong class="text-black dark:text-white"
                                >Click to upload</strong
                              >
                              you file here
                            </p>
                            <p class="text-xs text-gray-400">
                              Upload upto 12 files, max size each file: 5MB.
                            </p>
                          </div>
                        </div>
                        <input
                          type="file"
                          id="fileInput2"
                          multiple
                          class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
                        />
                      </div>
                      <ul id="fileList2"></ul>
                    </div>
                  </div>
                  <div class="mb-[20px] mb-[25px] lg:mb-[40px]">
                    <label
                      class="mb-[22px] text-black dark:text-white text-lg font-bold block"
                    >
                      Uploaded Files
                    </label>
                    <div
                      class="border-b border-primary-50 dark:border-[#172036] pb-[15px] mb-[15px] last:mb-0 flex items-center justify-between"
                    >
                      <div class="flex items-center gap-[15px]">
                        <img
                          src="@/assets/images/icons/pdf.png"
                          class="w-[36px]"
                          alt="pdf"
                        />
                        <div>
                          <span
                            class="block font-medium text-gray-900 dark:text-gray-400"
                          >
                            Campaign Requirements
                          </span>
                          <span class="block mt-[2px] text-gray-400">
                            Increase impression traffic onto the platform
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="inline-block bg-gray-100 dark:bg-black rounded-[7px] text-gray-500 dark:text-gray-400 transition-all hover:bg-primary-500 hover:text-white py-[7px] px-[15px]"
                      >
                        <span class="flex items-center gap-[5px]">
                          Edit
                          <i class="ri-pencil-line"></i>
                        </span>
                      </button>
                    </div>
                    <div
                      class="border-b border-primary-50 dark:border-[#172036] pb-[15px] mb-[15px] last:mb-0 flex items-center justify-between"
                    >
                      <div class="flex items-center gap-[15px]">
                        <img
                          src="@/assets/images/icons/doc.png"
                          class="w-[36px]"
                          alt="doc"
                        />
                        <div>
                          <span
                            class="block font-medium text-gray-900 dark:text-gray-400"
                          >
                            Campaign’s mission and vision
                          </span>
                          <span class="block mt-[2px] text-gray-400">
                            Increase impression traffic onto the platform
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="inline-block bg-gray-100 dark:bg-black rounded-[7px] text-gray-500 dark:text-gray-400 transition-all hover:bg-primary-500 hover:text-white py-[7px] px-[15px]"
                      >
                        <span class="flex items-center gap-[5px]">
                          Edit
                          <i class="ri-pencil-line"></i>
                        </span>
                      </button>
                    </div>
                    <div
                      class="border-b border-primary-50 dark:border-[#172036] pb-[15px] mb-[15px] last:mb-0 flex items-center justify-between"
                    >
                      <div class="flex items-center gap-[15px]">
                        <img
                          src="@/assets/images/icons/gif.svg"
                          class="w-[36px]"
                          alt="gif"
                        />
                        <div>
                          <span
                            class="block font-medium text-gray-900 dark:text-gray-400"
                          >
                            Campaign Banner
                          </span>
                          <span class="block mt-[2px] text-gray-400">
                            Increase impression traffic onto the platform
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="inline-block bg-gray-100 dark:bg-black rounded-[7px] text-gray-500 dark:text-gray-400 transition-all hover:bg-primary-500 hover:text-white py-[7px] px-[15px]"
                      >
                        <span class="flex items-center gap-[5px]">
                          Edit
                          <i class="ri-pencil-line"></i>
                        </span>
                      </button>
                    </div>
                    <div
                      class="border-b border-primary-50 dark:border-[#172036] pb-[15px] mb-[15px] last:mb-0 flex items-center justify-between"
                    >
                      <div class="flex items-center gap-[15px]">
                        <img
                          src="@/assets/images/icons/jpg.png"
                          class="w-[36px]"
                          alt="jpg"
                        />
                        <div>
                          <span
                            class="block font-medium text-gray-900 dark:text-gray-400"
                          >
                            Campaign Image
                          </span>
                          <span class="block mt-[2px] text-gray-400">
                            Increase impression traffic onto the platform
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="inline-block bg-gray-100 dark:bg-black rounded-[7px] text-gray-500 dark:text-gray-400 transition-all hover:bg-primary-500 hover:text-white py-[7px] px-[15px]"
                      >
                        <span class="flex items-center gap-[5px]">
                          Edit
                          <i class="ri-pencil-line"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="tab-pane" v-show="activeTab === 'audiences'">
                <h3
                  class="mb-[20px] md:mb-[25px] lg:mb-[33px] text-gray-900 dark:text-gray-400 text-lg"
                >
                  Configure Audiences
                </h3>
                <div class="mb-[20px] mb-[25px] lg:mb-[35px]">
                  <label
                    class="mb-[15px] text-gray-500 dark:text-white font-medium block"
                  >
                    Gender
                  </label>
                  <div class="grid grid-cols-3 gap-[25px]">
                    <div
                      class="form-radio border-[2px] rounded-[4px] border-dashed border-gray-100 dark:border-[#172036]"
                    >
                      <label
                        for="genderAll"
                        class="cursor-pointer relative block py-[18px] ltr:pl-[48px] rtl:pr-[48px] ltr:pr-[20px] rtl:pl-[20px]"
                      >
                        <input
                          checked
                          type="radio"
                          name="genderRadio"
                          class="absolute ltr:left-[20px] rtl:right-[20px] top-1/2 -translate-y-1/2 scale-[1.5] w-[15px]"
                          id="genderAll"
                        />
                        <span
                          class="block font-medium text-gray-900 dark:text-gray-400"
                        >
                          All
                        </span>
                      </label>
                    </div>
                    <div
                      class="form-radio border-[2px] rounded-[4px] border-dashed border-gray-100 dark:border-[#172036]"
                    >
                      <label
                        for="genderMale"
                        class="cursor-pointer relative block py-[18px] ltr:pl-[48px] rtl:pr-[48px] ltr:pr-[20px] rtl:pl-[20px]"
                      >
                        <input
                          type="radio"
                          name="genderRadio"
                          class="absolute ltr:left-[20px] rtl:right-[20px] top-1/2 -translate-y-1/2 scale-[1.5] w-[15px]"
                          id="genderMale"
                        />
                        <span
                          class="block font-medium text-gray-900 dark:text-gray-400"
                        >
                          Male
                        </span>
                      </label>
                    </div>
                    <div
                      class="form-radio border-[2px] rounded-[4px] border-dashed border-gray-100 dark:border-[#172036]"
                    >
                      <label
                        for="genderFemale"
                        class="cursor-pointer relative block py-[18px] ltr:pl-[48px] rtl:pr-[48px] ltr:pr-[20px] rtl:pl-[20px]"
                      >
                        <input
                          type="radio"
                          name="genderRadio"
                          class="absolute ltr:left-[20px] rtl:right-[20px] top-1/2 -translate-y-1/2 scale-[1.5] w-[15px]"
                          id="genderFemale"
                        />
                        <span
                          class="block font-medium text-gray-900 dark:text-gray-400"
                        >
                          Female
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="mb-[20px] mb-[25px] lg:mb-[35px]">
                  <label
                    class="mb-[18px] text-gray-500 dark:text-white font-medium block"
                  >
                    Age
                  </label>
                  <div id="priceRangeSlider">
                    <div id="rangeSlider" class="range-slider">
                      <div
                        class="number-group flex items-center justify-between"
                      >
                        <input
                          class="number-input md:text-md font-semibold text-gray-900 dark:text-gray-400 dark:bg-[#0c1427] !outline-0 pointer-events-none"
                          type="number"
                          v-model="price.min"
                          :min="range.min"
                          :max="price.max"
                        />
                        <input
                          class="number-input md:text-md font-semibold text-gray-900 dark:text-gray-400 dark:bg-[#0c1427] !outline-0 pointer-events-none text-right"
                          type="number"
                          v-model="price.max"
                          :min="price.min"
                          :max="range.max"
                        />
                      </div>
                      <div
                        class="range-group relative -mt-[10px] ltr:ml-[32px] rtl:mr-[32px] ltr:mr-[40px] rtl:ml-[40px]"
                      >
                        <input
                          class="range-input"
                          v-model="price.min"
                          :min="range.min"
                          :max="range.max"
                          step="1"
                          type="range"
                        />
                        <input
                          class="range-input"
                          v-model="price.max"
                          :min="range.min"
                          :max="range.max"
                          step="1"
                          type="range"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-[20px] mb-[25px] lg:mb-[35px]">
                  <label
                    class="mb-[15px] text-gray-500 dark:text-white font-medium block"
                  >
                    Location
                  </label>
                  <select
                    class="h-[55px] font-medium md:text-md rounded-[4px] text-gray-900 dark:text-white border border-gray-100 dark:border-[#0a0e19] bg-gray-100 dark:bg-[#0a0e19] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  >
                    <option selected>Select</option>
                    <option>United States</option>
                    <option>Switzerland</option>
                    <option>Germany</option>
                    <option>Sweden</option>
                    <option>Denmark</option>
                  </select>
                </div>
                <div class="mb-[20px] mb-[25px] lg:mb-[35px]">
                  <label
                    class="mb-[15px] text-gray-500 dark:text-white font-medium block"
                  >
                    Media
                  </label>
                  <select
                    class="h-[55px] font-medium md:text-md rounded-[4px] text-gray-900 dark:text-white border border-gray-100 dark:border-[#0a0e19] bg-gray-100 dark:bg-[#0a0e19] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  >
                    <option selected>Select</option>
                    <option>Facebook</option>
                    <option>Instagram</option>
                    <option>LinkedIn</option>
                    <option>Twitter</option>
                    <option>Threads</option>
                  </select>
                </div>
                <div class="mb-[20px] mb-[25px] lg:mb-[35px]">
                  <label
                    class="mb-[15px] text-gray-500 dark:text-white font-medium block"
                  >
                    Team Member
                  </label>
                  <select
                    class="h-[55px] font-medium md:text-md rounded-[4px] text-gray-900 dark:text-white border border-gray-100 dark:border-[#0a0e19] bg-gray-100 dark:bg-[#0a0e19] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  >
                    <option selected>Select</option>
                    <option>Olivia Smith</option>
                    <option>Jason Smith</option>
                    <option>Alina Lyes</option>
                    <option>Jonathon Ronan</option>
                    <option>Walter White</option>
                  </select>
                </div>
              </div>
              <div class="tab-pane" v-show="activeTab === 'budgetEstimates'">
                <h3
                  class="mb-[20px] md:mb-[25px] text-gray-900 dark:text-gray-400 text-lg"
                >
                  Budgets Estimates
                </h3>
                <div
                  class="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[25px]"
                >
                  <div
                    class="form-radio border-[2px] rounded-[4px] border-dashed border-gray-100 dark:border-[#172036]"
                  >
                    <label
                      for="continuousDuration"
                      class="cursor-pointer relative block py-[18px] ltr:pl-[52px] rtl:pr-[52px] ltr:pr-[20px] rtl:pl-[20px]"
                    >
                      <input
                        checked
                        type="radio"
                        name="budgetEstimatesRatio"
                        class="absolute ltr:left-[20px] rtl:right-[20px] top-1/2 -translate-y-1/2 scale-[1.5] w-[15px]"
                        id="continuousDuration"
                      />
                      <span
                        class="block mb-[5px] font-medium text-gray-900 dark:text-gray-400"
                      >
                        Continuous Duration
                      </span>
                      <span class="block text-gray-400">
                        Your Ad will run continuously for a daily budget.
                      </span>
                    </label>
                  </div>
                  <div
                    class="form-radio border-[2px] rounded-[4px] border-dashed border-gray-100 dark:border-[#172036]"
                  >
                    <label
                      for="fixedDuration"
                      class="cursor-pointer relative block py-[18px] ltr:pl-[52px] rtl:pr-[52px] ltr:pr-[20px] rtl:pl-[20px]"
                    >
                      <input
                        type="radio"
                        name="budgetEstimatesRatio"
                        class="absolute ltr:left-[20px] rtl:right-[20px] top-1/2 -translate-y-1/2 scale-[1.5] w-[15px]"
                        id="fixedDuration"
                      />
                      <span
                        class="block mb-[5px] font-medium text-gray-900 dark:text-gray-400"
                      >
                        Fixed Duration
                      </span>
                      <span class="block text-gray-400">
                        Your Ad will run only specified dates only.
                      </span>
                    </label>
                  </div>
                </div>
                <div class="my-[20px] my-[25px] lg:my-[35px]">
                  <label
                    class="mb-[15px] text-gray-500 dark:text-white font-medium block"
                  >
                    Daily Budget
                  </label>
                  <div id="priceRangeSlider2">
                    <div id="rangeSlider2" class="range-slider2">
                      <div
                        class="number-group flex items-center justify-between"
                      >
                        <div class="flex items-center">
                          <span
                            class="md:text-md font-semibold text-gray-900 dark:text-gray-400"
                          >
                            $
                          </span>
                          <input
                            class="number-input md:text-md font-semibold text-gray-900 dark:text-gray-400 dark:bg-[#0c1427] !outline-0 pointer-events-none"
                            type="number"
                            v-model="price.min"
                            :min="range.min"
                            :max="price.max"
                          />
                        </div>
                        <div class="flex items-center text-right">
                          <span
                            class="md:text-md font-semibold text-gray-900 dark:text-gray-400"
                          >
                            $
                          </span>
                          <input
                            class="number-input md:text-md font-semibold text-gray-900 dark:text-gray-400 dark:bg-[#0c1427] !outline-0 pointer-events-none"
                            type="number"
                            v-model="price.max"
                            :min="price.min"
                            :max="range.max"
                          />
                        </div>
                      </div>
                      <div
                        class="range-group relative -mt-[10px] ltr:ml-[40px] rtl:mr-[40px] ltr:mr-[55px] rtl:ml-[55px]"
                      >
                        <input
                          class="range-input"
                          v-model="price.min"
                          :min="range.min"
                          :max="range.max"
                          step="1"
                          type="range"
                        />
                        <input
                          class="range-input"
                          v-model="price.max"
                          :min="range.min"
                          :max="range.max"
                          step="1"
                          type="range"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="h-[15px]"></div>
                <div class="flex items-center justify-between">
                  <button
                    type="button"
                    class="inline-block md:text-md font-medium bg-primary-500 text-white rounded-[7px] py-[8px] px-[19px] transition-all hover:bg-primary-400"
                  >
                    <span class="flex items-center gap-[5px]">
                      Create Campaign
                      <i class="ri-arrow-right-line"></i>
                    </span>
                  </button>
                </div>
                <div class="pb-[20px]"></div>
              </div>
              <div class="tab-pane" v-show="activeTab === 'completed'">
                <div class="text-center pb-[20px]">
                  <img
                    src="@/assets/images/created.png"
                    class="inline-block"
                    alt="created-image"
                  />
                  <h3
                    class="text-gray-900 dark:text-gray-400 text-xl mt-[25px] mb-[12px]"
                  >
                    Campaign Created!
                  </h3>
                  <p class="mx-auto max-w-[455px]">
                    You will receive an email with with the summary of your
                    newly created campaign!
                  </p>
                  <div
                    class="mt-[28px] flex items-center justify-center gap-[20px]"
                  >
                    <button
                      type="button"
                      class="inline-block md:text-md font-medium bg-gray-600 text-white rounded-[7px] py-[8px] px-[19px] transition-all hover:bg-gray-500"
                    >
                      <span class="flex items-center gap-[5px]">
                        Create New Campaign
                        <i class="ri-arrow-left-line"></i>
                      </span>
                    </button>
                    <button
                      type="button"
                      class="inline-block md:text-md font-medium bg-primary-500 text-white rounded-[7px] py-[8px] px-[19px] transition-all hover:bg-primary-400"
                    >
                      <span class="flex items-center gap-[5px]">
                        View Campaign
                        <i class="ri-arrow-right-line"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <button
                  type="button"
                  class="inline-block md:text-md font-medium bg-primary-500 text-white rounded-[7px] py-[8px] px-[19px] transition-all hover:bg-primary-400"
                  @click="previousTab"
                  :disabled="activeTab === 'campaignDetails'"
                >
                  <span class="flex items-center gap-[5px]">
                    <i class="ri-arrow-left-line"></i>
                    Back
                  </span>
                </button>
                <button
                  type="button"
                  class="inline-block md:text-md font-medium bg-primary-500 text-white rounded-[7px] py-[8px] px-[19px] transition-all hover:bg-primary-400"
                  @click="nextTab"
                  :disabled="activeTab === 'completed'"
                >
                  <span class="flex items-center gap-[5px]">
                    Continue
                    <i class="ri-arrow-right-line"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import stateStore from "@/utils/store";

export default defineComponent({
  name: "CreateCampaignModal",
  setup() {
    const stateStoreInstance = stateStore;
    const activeTab = ref("campaignDetails");
    const range = reactive({ min: 0, max: 50 });
    const price = reactive({ min: 18, max: 50 });

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    const previousTab = () => {
      if (activeTab.value === "creativeUploads") {
        activeTab.value = "campaignDetails";
      }
      if (activeTab.value === "audiences") {
        activeTab.value = "creativeUploads";
      }
      if (activeTab.value === "budgetEstimates") {
        activeTab.value = "audiences";
      }
      if (activeTab.value === "completed") {
        activeTab.value = "budgetEstimates";
      }
    };

    const nextTab = () => {
      if (activeTab.value === "budgetEstimates") {
        activeTab.value = "completed";
      }
      if (activeTab.value === "audiences") {
        activeTab.value = "budgetEstimates";
      }
      if (activeTab.value === "creativeUploads") {
        activeTab.value = "audiences";
      }
      if (activeTab.value === "campaignDetails") {
        activeTab.value = "creativeUploads";
      }
    };

    return {
      activeTab,
      setActiveTab,
      previousTab,
      nextTab,
      range,
      price,
      stateStoreInstance,
    };
  },
});
</script>

<style lang="scss" scoped>
.range-slider2 {
  .number-group {
    .text-right {
      position: relative;
      left: 30px;
    }
  }
}
button {
  &:disabled {
    cursor: no-drop;
    --tw-bg-opacity: 1;
    background-color: rgb(82 96 119 / var(--tw-bg-opacity, 1));
  }
}
</style>
