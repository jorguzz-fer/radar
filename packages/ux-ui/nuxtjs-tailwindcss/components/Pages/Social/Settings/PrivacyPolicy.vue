<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Privacy Policy</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="mb-[20px] sm:mb-[25px]">
        <div class="form-check flex items-center gap-[8px] mb-[10px] last:mb-0">
          <input
            type="checkbox"
            class="cursor-pointer"
            id="allowUsersToShowYourEmail"
          />
          <label for="allowUsersToShowYourEmail" class="cursor-pointer">
            Allow users to show your email
          </label>
        </div>
        <div class="form-check flex items-center gap-[8px] mb-[10px] last:mb-0">
          <input
            type="checkbox"
            class="cursor-pointer"
            id="allowUsersToShowYourExperiences"
          />
          <label for="allowUsersToShowYourExperiences" class="cursor-pointer">
            Allow users to show your experiences
          </label>
        </div>
        <div class="form-check flex items-center gap-[8px] mb-[10px] last:mb-0">
          <input
            type="checkbox"
            class="cursor-pointer"
            id="allowUsersToShowYourFollowers"
          />
          <label for="allowUsersToShowYourFollowers" class="cursor-pointer">
            Allow users to show your followers
          </label>
        </div>
      </div>
      <div class="mb-[20px] sm:mb-[25px]">
        <label class="mb-[10px] text-black dark:text-white font-medium block">
          Who can tag you?
        </label>
        <div class="flex items-center gap-[15px]">
          <div class="form-radio flex items-center gap-[5px]">
            <input
              type="radio"
              class="cursor-pointer"
              name="whoCanTagYou"
              id="wctyOnlyMe"
            />
            <label class="inline-block cursor-pointer" for="wctyOnlyMe">
              Everyone
            </label>
          </div>
          <div class="form-radio flex items-center gap-[5px]">
            <input
              type="radio"
              class="cursor-pointer"
              name="whoCanTagYou"
              id="wctyMyFollowers"
            />
            <label class="inline-block cursor-pointer" for="wctyMyFollowers">
              Group Member
            </label>
          </div>
        </div>
      </div>
      <span class="block font-medium mb-[7px] text-black dark:text-white">
        Account Deletion Or Transfer
      </span>
      <p>
        Transfer this account to another person or to a company repositories.
      </p>
      <div class="mt-[20px] sm:mt-[25px]">
        <button
          type="button"
          class="font-medium inline-block transition-all rounded-md 2xl:text-md ltr:mr-[15px] rtl:ml-[15px] py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-danger-500 text-white hover:bg-danger-400"
        >
          Delete Account
        </button>
        <button
          type="button"
          class="font-medium inline-block transition-all rounded-md 2xl:text-md py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-primary-500 text-white hover:bg-primary-400"
        >
          <span class="inline-block relative ltr:pl-[29px] rtl:pr-[29px]">
            <i
              class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2"
            >
              swap_horiz
            </i>
            Transfer Account
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrivacyPolicy",
});
</script>
