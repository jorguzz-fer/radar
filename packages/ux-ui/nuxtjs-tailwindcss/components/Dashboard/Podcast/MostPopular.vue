<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[23px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Most Popular</h5>
      </div>
      <div class="trezo-card-subtitle">
        <a
          href="#"
          class="inline-block relative ltr:pr-[13px] rtl:pl-[13px] leading-none transition-all hover:text-primary-500"
        >
          View All
          <i
            class="ri-arrow-right-s-line absolute top-1/2 -translate-y-1/2 ltr:-right-[8px] rtl:-left-[8px] text-[23px] -mt-px"
          ></i>
        </a>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="trezo-tabs" id="trezo-tabs">
        <ul class="most-popular-navs mb-[18px]" role="tablist">
          <li
            v-for="tab in tabs"
            :key="tab.id"
            class="nav-item inline-block mb-[7px] ltr:mr-[4px] rtl:ml-[4px] ltr:last:mr-0 rtl:last:ml-0"
            role="presentation"
          >
            <button
              type="button"
              role="tab"
              :aria-selected="activeTab === tab.id"
              :aria-controls="`tab-${tab.id}`"
              :data-tab="tab.id"
              :class="[
                'nav-link inline-block font-medium text-xs rounded-[30px] py-[4px] px-[12px] text-gray-500 dark:text-gray-400 transition-all bg-gray-100 dark:bg-dark',
                { active: activeTab === tab.id },
              ]"
              @click="setActiveTab(tab.id)"
            >
              {{ tab.name }}
            </button>
          </li>
        </ul>

        <div class="tab-content">
          <div
            v-for="tab in tabs"
            :key="tab.id"
            :id="`tab-${tab.id}`"
            role="tabpanel"
            :aria-labelledby="`tab-${tab.id}`"
            :class="['tab-pane', { hidden: activeTab !== tab.id }]"
          >
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]"
            >
              <div
                v-for="(podcast, index) in getPodcastsForTab(tab.id)"
                :key="podcast.id"
                class="group"
              >
                <div
                  class="relative rounded-md h-[185.06px] bg-cover bg-center bg-no-repeat"
                  :style="{ backgroundImage: `url(${podcast.image})` }"
                >
                  <!-- <button
                    type="button"
                    class="bg-primary-500 text-white rounded-full flex items-center justify-center w-[44px] h-[44px] absolute ltr:left-[15px] rtl:right-[15px] bottom-[15px] text-[22px] transition-all hover:bg-primary-600 opacity-0 group-hover:opacity-100"
                  >
                    <i class="ri-play-large-fill"></i>
                  </button> -->
                  <button
                    type="button"
                    class="bg-primary-500 text-white rounded-full flex items-center justify-center w-[44px] h-[44px] absolute ltr:left-[15px] rtl:right-[15px] bottom-[15px] text-[22px] transition-all hover:bg-primary-600 opacity-0 group-hover:opacity-100"
                    @click="togglePlayback(index)"
                  >
                    <i
                      :class="
                        isPlaying === index
                          ? 'ri-pause-fill'
                          : 'ri-play-large-fill'
                      "
                    ></i>
                    <audio
                      ref="audioRefs"
                      :src="podcast.audioSrc"
                      @ended="onTrackEnd(index)"
                      hidden
                    />
                  </button>
                </div>
                <div class="mt-[16px]">
                  <h4 class="!font-medium !text-base !mb-[11px]">
                    <a
                      :href="podcast.link"
                      target="_blank"
                      class="transition-all hover:text-primary-500"
                    >
                      {{ podcast.title }}
                    </a>
                  </h4>
                  <div
                    class="flex items-center gap-[15px] md:gap-[20px] lg:gap-[25px] text-xs"
                  >
                    <span class="block"> By: {{ podcast.author }} </span>
                    <span class="relative block ltr:pl-[20px] rtl:pr-[20px]">
                      <i
                        class="material-symbols-outlined !text-base text-primary-500 absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 -mt-px"
                      >
                        headset_mic
                      </i>
                      {{ podcast.listeners }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount } from "vue";

import image1 from "@/assets/images/podcasts/podcast1.jpg";
import image2 from "@/assets/images/podcasts/podcast2.jpg";
import image3 from "@/assets/images/podcasts/podcast3.jpg";
import image4 from "@/assets/images/podcasts/podcast4.jpg";
import image5 from "@/assets/images/podcasts/podcast5.jpg";
import image6 from "@/assets/images/podcasts/podcast6.jpg";

interface Podcast {
  id: number;
  title: string;
  author: string;
  listeners: string;
  image: string;
  audioSrc: string;
  link: string;
}

interface Tab {
  id: string;
  name: string;
  podcastIds: number[];
}

export default defineComponent({
  name: "MostPopular",
  setup() {
    const activeTab = ref("tab1");

    // Define all podcasts once
    const allPodcasts: Podcast[] = [
      {
        id: 1,
        title: "Influencer Marketing",
        author: "Amanda Garcia",
        listeners: "6,300",
        image: image1,
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        link: "#",
      },
      {
        id: 2,
        title: "Data for Better Ads",
        author: "David Chen",
        listeners: "8,500",
        image: image2,
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        link: "#",
      },
      {
        id: 3,
        title: "Boosting Engagement",
        author: "Lisa Kim",
        listeners: "9,300",
        image: image3,
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        link: "#",
      },
      {
        id: 4,
        title: "Real Engagement Metrics",
        author: "Sarah Johnson",
        listeners: "8,700",
        image: image4,
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        link: "#",
      },
      {
        id: 5,
        title: "SEO for E-Commerce",
        author: "Johnson",
        listeners: "8,900",
        image: image5,
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        link: "#",
      },
      {
        id: 6,
        title: "Podcast Marketing 101",
        author: "Amanda",
        listeners: "9,400",
        image: image6,
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        link: "#",
      },
    ];

    const tabs: Tab[] = [
      { id: "tab1", name: "Marketing", podcastIds: [1, 2, 3, 4, 5, 6] },
      { id: "tab2", name: "Content", podcastIds: [6, 5, 4, 3, 2, 1] },
      { id: "tab3", name: "Social", podcastIds: [4, 2, 5, 6, 3] },
      { id: "tab4", name: "Analytics", podcastIds: [2, 1, 6, 5] },
      { id: "tab5", name: "Customer", podcastIds: [5, 6, 4, 2, 3, 1] },
      { id: "tab6", name: "Trends", podcastIds: [2, 3, 6, 1, 4, 5] },
    ];

    // Function to get podcasts for a specific tab
    const getPodcastsForTab = (tabId: string): Podcast[] => {
      const tab = tabs.find((t) => t.id === tabId);
      if (!tab) return [];

      return tab.podcastIds
        .map((id) => allPodcasts.find((podcast) => podcast.id === id))
        .filter((podcast): podcast is Podcast => podcast !== undefined);
    };

    const audioRefs = ref<HTMLAudioElement[]>([]);
    const isPlaying = ref<number | null>(null);

    // Add these new methods
    const togglePlayback = async (index: number) => {
      const audio = audioRefs.value[index];
      if (!audio) return;

      // Pause all other audio elements
      audioRefs.value.forEach((otherAudio, otherIndex) => {
        if (otherIndex !== index && otherAudio) {
          otherAudio.pause();
        }
      });

      if (isPlaying.value === index) {
        await audio.pause();
        isPlaying.value = null;
      } else {
        try {
          await audio.play();
          isPlaying.value = index;
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      }
    };

    const onTrackEnd = (index: number) => {
      if (isPlaying.value === index) {
        isPlaying.value = null;
      }
    };

    // Function to set active tab
    const setActiveTab = (tabId: string) => {
      activeTab.value = tabId;
    };

    onBeforeUnmount(() => {
      audioRefs.value.forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.src = "";
        }
      });
    });

    return {
      tabs,
      activeTab,
      setActiveTab,
      getPodcastsForTab,
      audioRefs,
      isPlaying,
      togglePlayback,
      onTrackEnd,
    };
  },
});
</script>
