<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Upcoming Episodes</h5>
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
                Add Episode
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Block Episode
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Delete Episode
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
      <div
        v-for="(episode, index) in episodes"
        :key="index"
        class="relative border-b border-gray-50 dark:border-[#172036] pb-[16px] mb-[16px] px-[70px] md:px-[76px] last:border-b-0 last:pb-0 last:mb-0"
      >
        <div
          class="w-[40px] h-[40px] rounded-full flex items-center justify-center absolute ltr:left-[20px] ltr:md:left-[25px] rtl:right-[20px] rtl:md:right-[25px] mt-[2px]"
          :class="getBgColor(episode)"
        >
          <img :src="episode.icon" :alt="episode.icon" />
        </div>
        <h6 class="!text-base !font-medium !mb-[5px]">
          <a
            href="#"
            class="text-gray-700 dark:text-gray-400 transition-all hover:text-primary-500"
          >
            {{ episode.title }}
          </a>
        </h6>
        <p class="text-xs max-w-[166px] !leading-[1.4] !mb-[5px]">
          {{ episode.host }}
        </p>
        <span
          class="block relative text-primary-500 text-xs ltr:pl-[16px] rtl:pr-[16px]"
        >
          <i
            class="ri-calendar-line absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 -mt-px"
          ></i>
          {{ formatDate(episode.date) }}
        </span>
        <a
          href="#"
          class="inline-block absolute ltr:right-[20px] rtl:left-[20px] ltr:md:right-[25px] rtl:md:left-[25px] top-1/2 -translate-y-1/2 -mt-[10px] w-[40px] h-[40px] md:w-[43px] md:h-[43px] text-center text-gray-400 transition-all border border-gray-100 dark:border-[#172036] rounded-full hover:bg-primary-500 hover:border-primary-500 hover:text-white"
        >
          <i
            class="material-symbols-outlined absolute left-0 right-0 !text-[22px] top-1/2 -translate-y-1/2"
          >
            arrow_outward
          </i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import icon1 from "@/assets/images/icons/note.svg";
import icon2 from "@/assets/images/icons/video-chat.svg";
import icon3 from "@/assets/images/icons/ball.svg";
import icon4 from "@/assets/images/icons/celebration.svg";

interface Episode {
  id: number;
  title: string;
  host: string;
  date: Date;
  icon: string;
}

export default defineComponent({
  name: "UpcomingEpisodes",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const episodes: Episode[] = [
      {
        id: 1,
        title: "AI for Content Strategy",
        host: "Amanda Garcia",
        date: new Date("2025-10-28"),
        icon: icon1,
      },
      {
        id: 2,
        title: "Secrets to Viral Marketing",
        host: "Sarah Johnson",
        date: new Date("2025-11-01"),
        icon: icon2,
      },
      {
        id: 3,
        title: "Social Media Strategy",
        host: "David Chen",
        date: new Date("2025-11-12"),
        icon: icon3,
      },
      {
        id: 4,
        title: "Content Trends for 2025",
        host: "Tom Richards",
        date: new Date("2025-11-28"),
        icon: icon4,
      },
    ];

    const formatDate = (date: Date): string => {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    const getBgColor = (episode: Episode): string => {
      if (episode.id === 1) return "bg-purple-500";
      if (episode.id === 2) return "bg-primary-500";
      if (episode.id === 3) return "bg-orange-500";
      return "bg-secondary-500"; // Default
    };

    return {
      isActive,
      toggleActive,
      episodes,
      formatDate,
      getBgColor,
    };
  },
});
</script>
