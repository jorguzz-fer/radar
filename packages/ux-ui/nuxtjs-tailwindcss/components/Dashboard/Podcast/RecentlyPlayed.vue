<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Recently Played</h5>
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

    <div
      class="trezo-card-content -mx-[20px] md:-mx-[25px] -mb-[19px] md:-mb-[23px]"
    >
      <div
        class="table-responsive overflow-x-auto -mt-[14px] pb-[19px] md:pb-[23px]"
      >
        <table class="w-full without-top-bottom-border">
          <tbody class="text-black dark:text-white">
            <tr v-for="(item, index) in recentlyPlayed" :key="index">
              <td
                class="ltr:text-left rtl:text-right ltr:last:text-right rtl:last:text-left whitespace-nowrap px-[20px] py-[12.5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] md:ltr:last:pr-[25px] md:rtl:last:pl-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[10px]">
                  <button
                    type="button"
                    class="inline-block leading-none text-xl text-primary-500"
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
                      :src="item.audioSrc"
                      @ended="onTrackEnd(index)"
                      hidden
                    />
                  </button>
                  <div class="rounded-md w-[34px]">
                    <img
                      :alt="item.title"
                      class="rounded-md"
                      :src="item.image"
                    />
                  </div>
                  <div>
                    <span class="font-medium inline-block mb-[2.5px]">
                      {{ item.title }}
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      {{ item.author }}
                    </span>
                  </div>
                </div>
              </td>

              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right ltr:last:text-right rtl:last:text-left whitespace-nowrap px-[20px] py-[12.5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] md:ltr:last:pr-[25px] md:rtl:last:pl-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ item.lastPlayed }}
              </td>

              <td
                class="ltr:text-left rtl:text-right ltr:last:text-right rtl:last:text-left whitespace-nowrap px-[20px] py-[12.5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] md:ltr:last:pr-[25px] md:rtl:last:pl-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="block text-gray-500 dark:text-gray-400 relative ltr:pl-[27px] rtl:pr-[27px]"
                >
                  <i
                    class="material-symbols-outlined !text-[20px] absolute top-1/2 -translate-y-1/2 ltr:left-0 rtl:right-0 text-primary-500"
                  >
                    headset_mic
                  </i>
                  {{ item.views }}
                </span>
              </td>

              <td
                class="ltr:text-left rtl:text-right ltr:last:text-right rtl:last:text-left whitespace-nowrap px-[20px] py-[12.5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] md:ltr:last:pr-[25px] md:rtl:last:pl-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <button
                  type="button"
                  class="leading-none text-xl text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
                  @click="toggleFavorite(item)"
                >
                  <i
                    :class="item.isFavorite ? 'ri-heart-fill' : 'ri-heart-line'"
                  ></i>
                </button>
              </td>

              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right ltr:last:text-right rtl:last:text-left whitespace-nowrap px-[20px] py-[12.5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] md:ltr:last:pr-[25px] md:rtl:last:pl-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ item.duration }}
              </td>
              <td
                class="ltr:text-left rtl:text-right ltr:last:text-right rtl:last:text-left whitespace-nowrap px-[20px] py-[12.5px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] md:ltr:last:pr-[25px] md:rtl:last:pl-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div
                  class="trezo-card-dropdown relative ltr:-mr-[7px] rtl:-ml-[7px]"
                >
                  <button
                    type="button"
                    :class="{
                      'trezo-card-dropdown-btn inline-block transition-all text-[20px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
                      active: activeDropdown === index,
                    }"
                    :id="`dropdownToggle-${index}`"
                    @click.stop="toggleActive(index)"
                  >
                    <i class="ri-more-fill"></i>
                  </button>

                  <ul
                    v-if="activeDropdown === index"
                    class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
                    :class="{
                      'bottom-full mb-[5px]': isLastItem(index),
                      'top-full': !isLastItem(index),
                    }"
                  >
                    <li>
                      <button
                        type="button"
                        class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        <i class="ri-add-fill text-primary-500"></i>
                        Add to Playlist
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        <i class="ri-image-line text-primary-500"></i>
                        Go to Album
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        <i class="ri-dropbox-line text-primary-500"></i>
                        View Credits
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";

import image1 from "@/assets/images/playlists/playlist1.jpg";
import image2 from "@/assets/images/playlists/playlist2.jpg";
import image3 from "@/assets/images/playlists/playlist3.jpg";
import image4 from "@/assets/images/playlists/playlist4.jpg";
import image5 from "@/assets/images/playlists/playlist5.jpg";
import image6 from "@/assets/images/playlists/playlist6.jpg";

export default defineComponent({
  name: "RecentlyPlayed",
  setup() {
    const activeDropdown = ref<number | null>(null);

    const recentlyPlayed = ref([
      {
        title: "Mastering Digital Marketing",
        author: "Sarah Johnson",
        image: image1,
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        link: "#",
        lastPlayed: "Played 40min. ago",
        views: "8,200",
        duration: "45:30",
        isFavorite: false,
      },
      {
        title: "Content Marketing Essentials",
        author: "Tom Richards",
        image: image2,
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        link: "#",
        lastPlayed: "Played 1h. ago",
        views: "9,500",
        duration: "25:50",
        isFavorite: false,
      },
      {
        title: "Social Media Trends for 2025",
        author: "David Chen",
        image: image3,
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        link: "#",
        lastPlayed: "Played 1day ago",
        views: "7,400",
        duration: "30:20",
        isFavorite: false,
      },
      {
        title: "Building Brand Loyalty",
        author: "Michael Young",
        image: image4,
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        link: "#",
        lastPlayed: "Played 2days ago",
        views: "10,200",
        duration: "15:35",
        isFavorite: false,
      },
      {
        title: "Content Creation Techniques",
        author: "Lisa Kim",
        image: image5,
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        link: "#",
        lastPlayed: "Played 3days ago",
        views: "9,300",
        duration: "18:45",
        isFavorite: false,
      },
      {
        title: "The Future of AI in Marketing",
        author: "Tom Richards",
        image: image6,
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        link: "#",
        lastPlayed: "Played 4days ago",
        views: "6,300",
        duration: "22:15",
        isFavorite: false,
      },
    ]);

    // Toggle favorite status
    const toggleFavorite = (item: any) => {
      item.isFavorite = !item.isFavorite;
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

    const toggleActive = (index: number) => {
      if (activeDropdown.value === index) {
        activeDropdown.value = null;
      } else {
        activeDropdown.value = index;
      }
    };

    // Handle click outside to close dropdown
    const handleClickOutside = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;
      if (!clickedElement.closest(".trezo-card-dropdown")) {
        activeDropdown.value = null;
      }
    };

    const isLastItem = (index: number) => {
      const totalItems = recentlyPlayed.value.length;
      return index >= totalItems - 3;
    };

    // Add event listener when component mounts
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    // Remove event listener when component unmounts
    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    // Clean up audio elements when component unmounts
    onBeforeUnmount(() => {
      audioRefs.value.forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.src = "";
        }
      });
    });

    return {
      recentlyPlayed,
      activeDropdown,
      toggleActive,
      toggleFavorite,
      audioRefs,
      isPlaying,
      togglePlayback,
      onTrackEnd,
      isLastItem,
    };
  },
});
</script>
