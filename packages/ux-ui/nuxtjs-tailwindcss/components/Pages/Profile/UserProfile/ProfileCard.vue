<template>
  <div class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] rounded-md">
    <div class="trezo-card-content">
      <div class="relative rounded-t-md">
        <img
          src="@/assets/images/profile-cover.jpg"
          alt="cover-image"
          class="rounded-t-md"
        />
        <button
          type="button"
          class="rounded-md md:text-white border md:border-white inline-block md:absolute ltr:md:right-[28px] rtl:md:left-[28px] bottom-[28px] py-[8.5px] px-[16px] transition-all hover:bg-primary-500 hover:border-primary-500 hover:text-white mt-[20px] ltr:ml-[20px] rtl:mr-[20px] md:mt-[20px] ltr:md:ml-[20px] rtl:md:mr-[20px]"
        >
          Update Cover Photo
        </button>
      </div>

      <div
        class="px-[20px] md:px-[30px] pb-[20px] md:pb-[45px] mt-[20px] md:-mt-[60px]"
      >
        <div class="md:flex items-end justify-between">
          <div class="md:flex items-end">
            <div class="relative w-[160px]">
              <img
                src="@/assets/images/profile.jpg"
                alt="profile-image"
                class="rounded-full border-[2px] border-white dark:border-[#0c1427]"
              />
              <img
                src="@/assets/images/icons/verified.svg"
                alt="verified"
                class="absolute bottom-[11px] ltr:-right-[7px] rtl:-left-[7px]"
              />
            </div>
            <div class="ltr:md:ml-[30px] rtl:md:mr-[30px] mt-[12px] md:mt-0">
              <span
                class="block text-lg md:text-[20px] lg:text-xl text-black darl:text-wihte font-bold"
              >
                Alice Johnson
              </span>
              <span class="block xl:text-md font-medium mt-[2px] md:mt-0">
                Product Designer
              </span>
            </div>
          </div>
          <div class="mt-[5px] md:mt-0">
            <button
              type="button"
              class="inline-block rounded-md font-medium lg:text-md border border-gray-100 dark:border-[#172036] py-[11px] px-[27px] transition-all hover:border-primary-500 mt-[10px] ltr:mr-[8px] rtl:ml-[8px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <span class="flex items-center">
                <i
                  class="material-symbols-outlined !text-[20px] ltr:mr-[8px] rtl:ml-[8px]"
                >
                  edit
                </i>
                Edit
              </span>
            </button>
            <button
              type="button"
              class="inline-block rounded-md font-medium lg:text-md bg-primary-500 border border-primary-500 text-white py-[11px] px-[27px] transition-all hover:bg-primary-400 hover:border-primary-400 mt-[10px] ltr:mr-[8px] rtl:ml-[8px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <span class="flex items-center">
                <i
                  class="material-symbols-outlined !text-[20px] ltr:mr-[8px] rtl:ml-[8px]"
                >
                  share
                </i>
                Share
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
};
</script>
