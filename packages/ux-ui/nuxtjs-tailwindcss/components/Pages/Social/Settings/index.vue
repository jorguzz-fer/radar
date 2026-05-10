<template>
  <form>
    <div class="xl:grid xl:grid-cols-5 2xl:grid-cols-3 gap-[25px]">
      <div class="xl:col-span-3 2xl:col-span-2">
        <div
          class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
        >
          <div
            class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
          >
            <div class="trezo-card-title">
              <h5 class="!mb-0">Profile Settings</h5>
            </div>
          </div>
          <div class="trezo-card-content">
            <div class="sm:grid sm:grid-cols-2 sm:gap-[25px]">
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  First Name
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="Alice"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="Johnson"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="johnson@trezo.com"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="+1 444 555 6699"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Address
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="84 S. Arrowhead Court Branford"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Country
                </label>
                <select
                  class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500 text-black dark:text-white"
                >
                  <option>Select</option>
                  <option value="1">Switzerland</option>
                  <option value="2">New Zealand</option>
                  <option value="3">Germany</option>
                  <option value="4">United States</option>
                  <option value="5">Japan</option>
                  <option value="6">Netherlands</option>
                  <option value="7">Sweden</option>
                  <option value="8">Canada</option>
                  <option value="9" selected>United Kingdom</option>
                  <option value="10">Australia</option>
                </select>
              </div>
              <div class="sm:col-span-2 mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Add Your Bio
                </label>
                <textarea
                  class="h-[140px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] p-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                >
It makes me feel...
                </textarea>
              </div>
              <div class="sm:col-span-2 mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Who will be able to see your profile?
                </label>
                <div class="flex items-center gap-[15px]">
                  <div class="form-radio flex items-center gap-[5px]">
                    <input
                      type="radio"
                      class="cursor-pointer"
                      name="whoWillSeeMyProfile"
                      id="onlyMe"
                    />
                    <label class="inline-block cursor-pointer" for="onlyMe">
                      Only me
                    </label>
                  </div>
                  <div class="form-radio flex items-center gap-[5px]">
                    <input
                      type="radio"
                      class="cursor-pointer"
                      name="whoWillSeeMyProfile"
                      id="myFollowers"
                    />
                    <label
                      class="inline-block cursor-pointer"
                      for="myFollowers"
                    >
                      My followers
                    </label>
                  </div>
                  <div class="form-radio flex items-center gap-[5px]">
                    <input
                      type="radio"
                      class="cursor-pointer"
                      name="whoWillSeeMyProfile"
                      id="everyone"
                    />
                    <label class="inline-block cursor-pointer" for="everyone">
                      Everyone
                    </label>
                  </div>
                </div>
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Your Skills
                </label>
                <select
                  class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500 text-black dark:text-white"
                >
                  <option>Select</option>
                  <option value="1">Leadership</option>
                  <option value="2" selected>Project Management</option>
                  <option value="3">Data Analysis</option>
                  <option value="4">Teamwork</option>
                  <option value="5">Web Development</option>
                </select>
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Your Profession
                </label>
                <select
                  class="h-[55px] rounded-md border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[13px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500 text-black dark:text-white"
                >
                  <option>Select</option>
                  <option value="1">Financial Manager</option>
                  <option value="2" selected>IT Manager</option>
                  <option value="3">Software Developer</option>
                  <option value="4">Physician Assistant</option>
                  <option value="5">Data Scientist</option>
                </select>
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="Trezo Admin"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Company Website
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="http://website.com/"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Facebook
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="https://www.facebook.com/"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  X
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="https://x.com/"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Linkedin
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="https://www.linkedin.com/"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  YouTube
                </label>
                <input
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  value="https://www.youtube.com/"
                />
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Profile Picture
                </label>
                <div id="fileUploader">
                  <div
                    class="relative flex items-center justify-center overflow-hidden rounded-md py-[88px] px-[20px] border border-gray-200 dark:border-[#172036]"
                  >
                    <div class="flex items-center justify-center">
                      <div
                        class="w-[35px] h-[35px] border border-gray-100 dark:border-[#15203c] flex items-center justify-center rounded-md text-primary-500 text-lg ltr:mr-[12px] rtl:ml-[12px]"
                      >
                        <i class="ri-upload-2-line"></i>
                      </div>
                      <p class="leading-[1.5]">
                        <strong class="text-black dark:text-white">
                          Click to upload
                        </strong>
                        <br />
                        you file here
                      </p>
                    </div>
                    <input
                      type="file"
                      id="fileInput"
                      class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-[20px] sm:mb-0">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Cover Photo
                </label>
                <div id="fileUploader2">
                  <div
                    class="relative flex items-center justify-center overflow-hidden rounded-md py-[88px] px-[20px] border border-gray-200 dark:border-[#172036]"
                  >
                    <div class="flex items-center justify-center">
                      <div
                        class="w-[35px] h-[35px] border border-gray-100 dark:border-[#15203c] flex items-center justify-center rounded-md text-primary-500 text-lg ltr:mr-[12px] rtl:ml-[12px]"
                      >
                        <i class="ri-upload-2-line"></i>
                      </div>
                      <p class="leading-[1.5]">
                        <strong class="text-black dark:text-white"
                          >Click to upload</strong
                        ><br />
                        you file here
                      </p>
                    </div>
                    <input
                      type="file"
                      id="fileInput2"
                      class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-[20px] sm:mt-[25px]">
              <button
                type="button"
                class="font-medium inline-block transition-all rounded-md 2xl:text-md ltr:mr-[15px] rtl:ml-[15px] py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-danger-500 text-white hover:bg-danger-400"
              >
                Cancel
              </button>
              <button
                type="button"
                class="font-medium inline-block transition-all rounded-md 2xl:text-md py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-primary-500 text-white hover:bg-primary-400"
              >
                <span class="inline-block relative ltr:pl-[29px] rtl:pr-[29px]">
                  <i
                    class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2"
                  >
                    add
                  </i>
                  Save Information
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="xl:col-span-2 2xl:col-span-1">
        <PrivacyPolicy />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PrivacyPolicy from "./PrivacyPolicy.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Settings",
  components: {
    PrivacyPolicy,
  },
});
</script>
