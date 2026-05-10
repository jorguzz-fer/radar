<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Player</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative ltr:-mr-[7px] rtl:-ml-[7px]">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all text-[22px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <i class="ri-more-2-fill"></i>
          </button>

          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Add Music
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Block Music
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Delete Music
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <div
        class="rounded-md h-[205px] bg-cover bg-no-repeat bg-center"
        :style="{ backgroundImage: `url(${bgImage})` }"
      ></div>
      <div class="flex justify-between mt-[19px]">
        <div>
          <h6 class="!font-medium !text-base !mb-[7px]">
            Building an Online Presence
          </h6>
          <span class="block text-xs"> Ethan Cooper </span>
        </div>
        <button
          type="button"
          class="leading-none relative text-[25px] text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500 -top-[5px]"
        >
          <i class="ri-heart-line"></i>
        </button>
      </div>
      <div id="musicPlayer" class="mt-[15px]" ref="playerContainer">
        <div
          class="time-info flex justify-between text-xs text-gray-500 dark:text-gray-400"
        >
          <span class="current-time">{{ formatTime(currentTime) }}</span>
          <span class="duration">{{ formatTime(duration) }}</span>
        </div>
        <div
          class="progress mt-[6px] h-[4px] w-full relative rounded-[30px] bg-gray-200 dark:bg-dark"
          @click="seekAudio"
          ref="progressBar"
        >
          <div
            class="progress-bar bg-primary-500 h-full rounded-[30px]"
            :style="{ width: progressBarWidth }"
          ></div>
        </div>
        <audio
          ref="audioElement"
          :src="currentTrack.url"
          @timeupdate="updateTime"
          @loadedmetadata="updateDuration"
          @ended="handleAudioEnd"
        ></audio>
        <div class="flex items-center justify-between mt-[15px]">
          <div class="flex items-center ltr:-ml-[5px] rtl:-mr-[5px]">
            <button
              class="rewindBtn leading-none text-[21px] transition-all text-primary-300 dark:text-gray-400 hover:text-primary-500"
              type="button"
              @click="skipBackward"
            >
              <i class="ri-skip-left-fill"></i>
            </button>
            <button
              class="fastForwardBtn leading-none text-[21px] transition-all text-primary-300 dark:text-gray-400 hover:text-primary-500"
              type="button"
              @click="skipForward"
            >
              <i class="ri-skip-right-fill"></i>
            </button>
          </div>
          <button
            type="button"
            class="playPauseBtn flex items-center justify-center w-[44px] h-[44px] text-[20px] transition-all text-primary-500 bg-primary-50 rounded-full hover:bg-primary-500 hover:text-white dark:bg-dark"
            @click="togglePlay"
          >
            <span class="playPauseIcon">{{ isPlaying ? "❚❚" : "▶" }}</span>
          </button>
          <button
            class="restartBtn leading-none text-lg transition-all text-primary-300 dark:text-gray-400 hover:text-primary-500"
            type="button"
            @click="restartAudio"
          >
            <i class="ri-reset-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import bgImage from "@/assets/images/player.jpg";

interface Track {
  title: string;
  artist: string;
  url: string;
}

export default defineComponent({
  name: "Player",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    // Audio player state
    const audioElement = ref<HTMLAudioElement | null>(null);
    const isPlaying = ref(false);
    const currentTime = ref(0);
    const duration = ref(0);
    const progressBarWidth = ref("0%");
    const playerContainer = ref<HTMLElement | null>(null);
    const progressBar = ref<HTMLElement | null>(null);

    // Track information
    const currentTrack = ref<Track>({
      title: "Building an Online Presence",
      artist: "Ethan Cooper",
      url: "https://cldup.com/qR72ozoaiQ.mp3",
    });

    // Format time (seconds to MM:SS)
    const formatTime = (time: number): string => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    // Toggle play/pause
    const togglePlay = (): void => {
      if (!audioElement.value) return;

      if (isPlaying.value) {
        audioElement.value.pause();
      } else {
        audioElement.value.play();
      }
      isPlaying.value = !isPlaying.value;
    };

    // Update current time and progress bar
    const updateTime = (): void => {
      if (!audioElement.value) return;

      currentTime.value = audioElement.value.currentTime;
      const progress = (currentTime.value / duration.value) * 100;
      progressBarWidth.value = `${progress}%`;
    };

    // Update duration when metadata is loaded
    const updateDuration = (): void => {
      if (!audioElement.value) return;

      duration.value = audioElement.value.duration;
    };

    // Handle audio end
    const handleAudioEnd = (): void => {
      isPlaying.value = false;
      currentTime.value = 0;
      progressBarWidth.value = "0%";
    };

    // Restart audio
    const restartAudio = (): void => {
      if (!audioElement.value) return;

      audioElement.value.currentTime = 0;
      if (!isPlaying.value) {
        audioElement.value.play();
        isPlaying.value = true;
      }
    };

    // Skip forward/backward
    const skipForward = (): void => {
      if (!audioElement.value) return;

      audioElement.value.currentTime = Math.min(
        audioElement.value.currentTime + 10,
        duration.value
      );
    };

    const skipBackward = (): void => {
      if (!audioElement.value) return;

      audioElement.value.currentTime = Math.max(
        audioElement.value.currentTime - 10,
        0
      );
    };

    // Seek audio by clicking on progress bar
    const seekAudio = (e: MouseEvent): void => {
      if (!audioElement.value || !progressBar.value) return;

      const progressBarRect = progressBar.value.getBoundingClientRect();
      const clickPosition = e.clientX - progressBarRect.left;
      const progressBarWidth = progressBarRect.width;
      const seekPercentage = clickPosition / progressBarWidth;
      audioElement.value.currentTime = seekPercentage * duration.value;

      if (!isPlaying.value) {
        audioElement.value.play();
        isPlaying.value = true;
      }
    };

    // Keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!playerContainer.value?.contains(e.target as Node)) return;

      switch (e.code) {
        case "Space":
          e.preventDefault();
          togglePlay();
          break;
        case "ArrowRight":
          skipForward();
          break;
        case "ArrowLeft":
          skipBackward();
          break;
        case "KeyR":
          restartAudio();
          break;
      }
    };

    // Add event listeners
    onMounted(() => {
      window.addEventListener("keydown", handleKeyDown);
    });

    // Clean up event listeners
    onUnmounted(() => {
      window.removeEventListener("keydown", handleKeyDown);
    });

    return {
      isActive,
      toggleActive,
      bgImage,
      audioElement,
      isPlaying,
      currentTime,
      duration,
      progressBarWidth,
      playerContainer,
      progressBar,
      currentTrack,
      formatTime,
      togglePlay,
      updateTime,
      updateDuration,
      handleAudioEnd,
      restartAudio,
      skipForward,
      skipBackward,
      seekAudio,
    };
  },
});
</script>
