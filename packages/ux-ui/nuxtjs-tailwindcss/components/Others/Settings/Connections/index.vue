<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <SettingsNav />

      <h5 class="!mb-[22px]">Connected Accounts</h5>
      <ul>
        <li class="flex items-center justify-between mb-[20px] last:mb-0">
          <div class="flex items-center gap-[15px]">
            <img
              src="@/assets/images/socials/google.svg"
              class="w-[40px]"
              alt="google"
            />
            <div>
              <span class="block text-black dark:text-white font-semibold">
                Google
              </span>
              <span class="block mt-[3px]"> Calendar and Contacts </span>
            </div>
          </div>
          <button
            type="button"
            class="inline-block transition-all text-primary-500 hover:underline"
          >
            Click to Disconnect
          </button>
        </li>
        <li class="flex items-center justify-between mb-[20px] last:mb-0">
          <div class="flex items-center gap-[15px]">
            <img
              src="@/assets/images/socials/slack.svg"
              class="w-[40px]"
              alt="slack"
            />
            <div>
              <span class="block text-black dark:text-white font-semibold">
                Slack
              </span>
              <span class="block mt-[3px]"> Communications </span>
            </div>
          </div>
          <button
            type="button"
            class="inline-block transition-all text-primary-500 hover:underline"
          >
            Click to Disconnect
          </button>
        </li>
        <li class="flex items-center justify-between mb-[20px] last:mb-0">
          <div class="flex items-center gap-[15px]">
            <img
              src="@/assets/images/socials/github.svg"
              class="w-[40px]"
              alt="github"
            />
            <div>
              <span class="block text-black dark:text-white font-semibold">
                GitHub
              </span>
              <span class="block mt-[3px]"> Manage your Git repositories </span>
            </div>
          </div>
          <button
            type="button"
            class="inline-block transition-all text-primary-500 hover:underline"
          >
            Click to Disconnect
          </button>
        </li>
        <li class="flex items-center justify-between mb-[20px] last:mb-0">
          <div class="flex items-center gap-[15px]">
            <img
              src="@/assets/images/socials/mailchimp.svg"
              class="w-[40px]"
              alt="mailchimp"
            />
            <div>
              <span class="block text-black dark:text-white font-semibold">
                Mailchimp
              </span>
              <span class="block mt-[3px]"> Email marketing service </span>
            </div>
          </div>
          <button
            type="button"
            class="inline-block transition-all text-primary-500 hover:underline"
          >
            Click to Disconnect
          </button>
        </li>
        <li class="flex items-center justify-between mb-[20px] last:mb-0">
          <div class="flex items-center gap-[15px]">
            <img
              src="@/assets/images/socials/figma.svg"
              class="w-[40px]"
              alt="figma"
            />
            <div>
              <span class="block text-black dark:text-white font-semibold">
                Figma
              </span>
              <span class="block mt-[3px]"> Design </span>
            </div>
          </div>
          <button
            type="button"
            class="inline-block transition-all text-primary-500 hover:underline"
          >
            Click to Disconnect
          </button>
        </li>
      </ul>
      <div
        class="border-t border-gray-100 dark:border-[#172036] my-[20px] md:my-[25px]"
      ></div>
      <h5 class="!mb-[22px]">Social Accounts</h5>
      <ul>
        <li class="flex items-center justify-between mb-[20px] last:mb-0">
          <div class="flex items-center gap-[15px]">
            <img
              src="@/assets/images/socials/facebook.svg"
              class="w-[40px]"
              alt="facebook"
            />
            <span class="block text-black dark:text-white font-semibold">
              Facebook
            </span>
          </div>
          <button
            type="button"
            class="inline-block transition-all text-primary-500 hover:underline"
          >
            Click to Disconnect
          </button>
        </li>
        <li class="flex items-center justify-between mb-[20px] last:mb-0">
          <div class="flex items-center gap-[15px]">
            <img
              src="@/assets/images/socials/twitter.svg"
              class="w-[40px]"
              alt="twitter"
            />
            <span class="block text-black dark:text-white font-semibold">
              X
            </span>
          </div>
          <button
            type="button"
            class="inline-block transition-all text-primary-500 hover:underline"
          >
            Click to Disconnect
          </button>
        </li>
        <li class="flex items-center justify-between mb-[20px] last:mb-0">
          <div class="flex items-center gap-[15px]">
            <img
              src="@/assets/images/socials/instagram.svg"
              class="w-[40px]"
              alt="instagram"
            />
            <span class="block text-black dark:text-white font-semibold">
              Instagram
            </span>
          </div>
          <button type="button" class="inline-block">Not Connected</button>
        </li>
        <li class="flex items-center justify-between mb-[20px] last:mb-0">
          <div class="flex items-center gap-[15px]">
            <img
              src="@/assets/images/socials/dribbble.svg"
              class="w-[40px]"
              alt="dribbble"
            />
            <span class="block text-black dark:text-white font-semibold">
              Dribbble
            </span>
          </div>
          <button
            type="button"
            class="inline-block transition-all text-primary-500 hover:underline"
          >
            Click to Disconnect
          </button>
        </li>
        <li class="flex items-center justify-between mb-[20px] last:mb-0">
          <div class="flex items-center gap-[15px]">
            <img
              src="@/assets/images/socials/behance.svg"
              class="w-[40px]"
              alt="behance"
            />
            <span class="block text-black dark:text-white font-semibold">
              Behance
            </span>
          </div>
          <button
            type="button"
            class="inline-block transition-all text-primary-500 hover:underline"
          >
            Click to Disconnect
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SettingsNav from "../SettingsNav.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Connections",
  components: {
    SettingsNav,
  },
});
</script>
