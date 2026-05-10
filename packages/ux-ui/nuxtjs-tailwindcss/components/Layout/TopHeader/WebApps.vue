<template>
  <div
    class="connected-apps-menu relative ltr:ml-[13px] ltr:md:ml-[18px] ltr:lg:ml-[25px] rtl:ml-[r3px] rtl:md:mr-[18px] rtl:lg:mr-[25px]"
  >
    <button
      type="button"
      :class="{
        'transition-all relative top-[2px] hover:text-primary-500': true,
        active: isActive,
      }"
      id="dropdownToggleBtn"
      @click.stop="toggleActive"
    >
      <i class="material-symbols-outlined !text-[22px] md:!text-[24px]">
        apps
      </i>
    </button>
    <div
      class="connected-apps-dropdown bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none pt-[20px] md:pt-[25px] px-[10px] md:px-[15px] pb-[5px] md:pb-[8px] absolute mt-[9px] md:mt-[20px] w-[240px] z-[1] top-full right-0 rounded-md"
    >
      <ul class="grid grid-cols-3 text-center gap-[5px]">
        <li>
          <a
            href="https://www.figma.com/"
            class="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
            target="_blank"
          >
            <img
              src="@/assets/images/icons/figma.svg"
              class="inline-block"
              alt="figma"
            />
            <span class="block mt-[7px]"> Figma </span>
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/"
            class="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
            target="_blank"
          >
            <img
              src="@/assets/images/icons/dribbble.svg"
              class="inline-block"
              alt="dribbble"
            />
            <span class="block mt-[7px]"> Dribbble </span>
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/"
            class="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
            target="_blank"
          >
            <img
              src="@/assets/images/icons/spotify.svg"
              class="inline-block"
              alt="spotify"
            />
            <span class="block mt-[7px]"> Spotify </span>
          </a>
        </li>
        <li>
          <a
            href="https://gitlab.com/"
            class="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
            target="_blank"
          >
            <img
              src="@/assets/images/icons/gitlab.svg"
              class="inline-block"
              alt="gitlab"
            />
            <span class="block mt-[7px]"> Gitlab </span>
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/"
            class="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
            target="_blank"
          >
            <img
              src="@/assets/images/icons/google-drive.svg"
              class="inline-block"
              alt="google-drive"
            />
            <span class="block mt-[7px]"> GDrive </span>
          </a>
        </li>
        <li>
          <a
            href="https://trello.com/"
            class="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
            target="_blank"
          >
            <img
              src="@/assets/images/icons/trello.svg"
              class="inline-block"
              alt="trello"
            />
            <span class="block mt-[7px]"> Trello </span>
          </a>
        </li>
        <li>
          <a
            href="https://slack.com/"
            class="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
            target="_blank"
          >
            <img
              src="@/assets/images/icons/slack.svg"
              class="inline-block"
              alt="slack"
            />
            <span class="block mt-[7px]"> Slack </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.pinterest.com/"
            class="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
            target="_blank"
          >
            <img
              src="@/assets/images/icons/pinterest.svg"
              class="inline-block"
              alt="pinterest"
            />
            <span class="block mt-[7px]"> Pinterest </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/"
            class="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
            target="_blank"
          >
            <img
              src="@/assets/images/icons/facebook.svg"
              class="inline-block"
              alt="facebook"
            />
            <span class="block mt-[7px]"> Facebook </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/"
            class="block text-xs mb-[15px] text-black transition-all hover:text-primary-500 dark:text-white"
            target="_blank"
          >
            <img
              src="@/assets/images/icons/linkedin.svg"
              class="inline-block"
              alt="linkedIn"
            />
            <span class="block mt-[7px]"> LinkedIn </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "WebApps",
  setup() {
    // Reactive property to track active state
    const isActive = ref(false);

    // Method to toggle active state
    const toggleActive = () => {
      isActive.value = !isActive.value;
    };

    // Method to deactivate when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const button = document.getElementById("dropdownToggleBtn");
      if (button && !button.contains(target)) {
        isActive.value = false;
      }
    };

    // Add and remove the event listener
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      isActive,
      toggleActive,
    };
  },
});
</script>
