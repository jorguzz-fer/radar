<template>
  <div
    class="trezo-card p-[20px] md:p-[25px] rounded-md relative z-[1]"
    style="background: linear-gradient(84deg, #23272e 3.5%, #526077 94.93%)"
  >
    <div class="trezo-card-header mb-[12px] flex items-center justify-between">
      <div class="trezo-card-title">
        <span
          class="inline-block text-xs text-white font-medium py-[1.5px] px-[15px] rounded-[30px] bg-gray-600"
        >
          Featured
        </span>
      </div>
    </div>

    <div class="trezo-card-content relative" id="podcastFeaturedSlides">
      <Swiper
        :slides-per-view="1"
        :space-between="25"
        :centered-slides="false"
        :prevent-clicks="true"
        :loop="false"
        :autoplay="{
          delay: 15000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }"
        :modules="modules"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h1
                class="!text-[22px] md:!text-2xl !text-white !font-medium !mb-[7px]"
              >
                {{ slide.title }}
              </h1>
              <p class="md:max-w-[370px] text-gray-200">
                {{ slide.description }}
              </p>

              <div class="-mt-[5px]">
                <div
                  class="inline-block text-gray-50 ltr:mr-[5px] rtl:ml-[5px] rounded-[30px] py-[3.5px] px-[12.5px] border border-gray-500 mt-[10px]"
                >
                  <span class="text-white font-semibold">Host:</span>
                  {{ slide.host }}
                </div>
                <div
                  class="inline-block text-gray-50 ltr:mr-[5px] rtl:ml-[5px] rounded-[30px] py-[3.5px] px-[12.5px] border border-gray-500 mt-[10px]"
                >
                  <span class="text-white font-semibold">Guest:</span>
                  {{ slide.guest }}
                </div>
              </div>

              <div class="mt-[20px] md:mt-[30px] md:max-w-[370px]">
                <audio
                  :ref="`audioElement${index}`"
                  :src="slide.audioSrc"
                  @timeupdate="updateProgress(index)"
                  @ended="onAudioEnded(index)"
                ></audio>

                <div class="flex items-center gap-[15px]">
                  <button
                    type="button"
                    class="playPauseBtn flex items-center justify-center w-[44px] h-[44px] text-xl transition-all text-primary-500 bg-primary-200 rounded-full hover:bg-primary-500 hover:text-white dark:bg-dark text-[20px]"
                    @click="togglePlayPause(index)"
                  >
                    <span class="playPauseIcon">
                      {{ slide.isPlaying ? "❚❚" : "▶" }}
                    </span>
                  </button>

                  <div class="relative z-[1] grow">
                    <span
                      class="duration block ltr:text-right rtl:text-left text-white"
                    >
                      {{
                        slide.isPlaying
                          ? formatTime(slide.currentTime)
                          : formatTime(slide.duration || 0)
                      }}
                    </span>

                    <div
                      class="progress mt-[5px] h-[4px] w-full relative rounded-[30px] bg-gray-400"
                    >
                      <div
                        class="progress-bar bg-primary-500 w-0 h-full rounded-[30px]"
                        :style="{ width: `${slide.progress}%` }"
                      ></div>
                    </div>

                    <div
                      class="wave-container flex items-center absolute rtl:left-0 rtl:right-0 bottom-0 -z-[1]"
                    >
                      <span
                        v-for="i in 50"
                        :key="i"
                        class="wave-bar w-[2px] h-[30px] ltr:ml-px rtl:mr-px ltr:md:ml-[2.5px] rtl:md:mr-[2.5px] ltr:xl:ml-[3px] rtl:xl:mr-[3px] ltr:first:ml-0 rtl:first:mr-0 bg-gray-600 transition-all"
                        :class="{ 'animate-pulse': slide.isPlaying }"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center mx-auto mt-5 md:mt-0 md:max-w-[332px]">
              <img
                :src="slide.imageSrc"
                :alt="`${slide.title} featured image`"
                class="max-w-full h-auto"
              />
            </div>
          </div>

          <div class="md:flex items-center md:mt-[20px] lg:mt-[9px] gap-[20px]">
            <div
              class="inline-block relative ltr:pl-[40px] rtl:pr-[40px] mt-[15px] ltr:mr-[15px] rtl:ml-[15px] ltr:md:mr-0 rtl:md:ml-0 md:mt-0"
            >
              <div
                class="ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-3xl text-primary-400"
              >
                <i class="ri-customer-service-line"></i>
              </div>
              <span class="block font-medium text-xs text-gray-200">
                Listens
              </span>
              <h6 class="!mb-0 !font-medium !text-white !text-base mt-[3px]">
                8,200
              </h6>
            </div>
            <div
              class="inline-block relative ltr:pl-[40px] rtl:pr-[40px] mt-[15px] ltr:mr-[15px] rtl:ml-[15px] ltr:md:mr-0 rtl:md:ml-0 md:mt-0"
            >
              <div
                class="ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-3xl text-primary-400"
              >
                <i class="ri-thumb-up-line"></i>
              </div>
              <span class="block font-medium text-xs text-gray-200">
                Likes
              </span>
              <h6 class="!mb-0 !font-medium !text-white !text-base mt-[3px]">
                1,500
              </h6>
            </div>
            <div
              class="inline-block relative ltr:pl-[40px] rtl:pr-[40px] mt-[15px] ltr:mr-[15px] rtl:ml-[15px] ltr:md:mr-0 rtl:md:ml-0 md:mt-0"
            >
              <div
                class="ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-3xl text-primary-400"
              >
                <i class="ri-share-line"></i>
              </div>
              <span class="block font-medium text-xs text-gray-200">
                Shares
              </span>
              <h6 class="!mb-0 !font-medium !text-white !text-base mt-[3px]">
                350
              </h6>
            </div>
            <div
              class="inline-block relative ltr:pl-[40px] rtl:pr-[40px] mt-[15px] ltr:mr-[15px] rtl:ml-[15px] ltr:md:mr-0 rtl:md:ml-0 md:mt-0"
            >
              <div
                class="ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2 !text-3xl text-primary-400"
              >
                <i class="ri-bookmark-line"></i>
              </div>
              <span class="block font-medium text-xs text-gray-200">
                Save for
              </span>
              <h6 class="!mb-0 !font-medium !text-white !text-base mt-[3px]">
                Later
              </h6>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="swiper-pagination"></div>
    </div>

    <div
      class="absolute -z-[1] bottom-0 ltr:right-0 rtl:left-0 rtl:-scale-x-[1]"
    >
      <img
        src="@/assets/images/featured/featured-shape.png"
        alt="decorative shape"
        class="max-w-full"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

// Import images
import image1 from "@/assets/images/featured/featured1.png";
import image2 from "@/assets/images/featured/featured2.png";
import image3 from "@/assets/images/featured/featured3.png";

export default defineComponent({
  name: "Featured",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // Define stats configuration
    const stats = [
      {
        icon: "ri-customer-service-line",
        label: "Listens",
        key: "listens" as keyof (typeof slides.value)[0],
      },
      {
        icon: "ri-thumb-up-line",
        label: "Likes",
        key: "likes" as keyof (typeof slides.value)[0],
      },
      {
        icon: "ri-share-line",
        label: "Shares",
        key: "shares" as keyof (typeof slides.value)[0],
      },
      {
        icon: "ri-bookmark-line",
        label: "Save for",
        key: "saved" as keyof (typeof slides.value)[0],
        fallback: "Later" as string | number | undefined,
      },
    ];

    const slides = ref([
      {
        tag: "Featured",
        title: "Mastering Digital Marketing",
        description:
          "Learn the latest digital marketing strategies with insights from SEO expert James Lee.",
        host: "Sarah J.",
        guest: "James Lee, SEO Expert",
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        imageSrc: image1,
        listens: 8200,
        likes: 1500,
        shares: 350,
        isPlaying: false,
        currentTime: 0,
        progress: 0,
        duration: 0,
      },
      {
        tag: "Featured",
        title: "Content Marketing Essentials",
        description:
          "This episode covers creating impactful content that resonates with audiences.",
        host: "Tom R.",
        guest: "Lisa Kim",
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        imageSrc: image2,
        listens: 8200,
        likes: 1500,
        shares: 350,
        isPlaying: false,
        currentTime: 0,
        progress: 0,
        duration: 0,
      },
      {
        tag: "Featured",
        title: "Social Media Trends",
        description:
          "Learn the latest digital marketing strategies with insights from SEO expert James Lee.",
        host: "Amanda G.",
        guest: "David Chen",
        audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
        imageSrc: image3,
        listens: 8200,
        likes: 1500,
        shares: 350,
        isPlaying: false,
        currentTime: 0,
        progress: 0,
        duration: 0,
      },
    ]);

    // Load audio metadata when component mounts
    onMounted(() => {
      slides.value.forEach((slide, index) => {
        const audio = document.querySelectorAll("audio")[
          index
        ] as HTMLAudioElement;
        if (audio) {
          audio.addEventListener("loadedmetadata", () => {
            slide.duration = audio.duration;
          });
        }
      });
    });

    const togglePlayPause = (index: number) => {
      const audioElements = document.querySelectorAll("audio");
      const audioElement = audioElements[index] as HTMLAudioElement;

      if (audioElement) {
        // Pause all other audio elements
        slides.value.forEach((slide, i) => {
          if (i !== index && slide.isPlaying) {
            (audioElements[i] as HTMLAudioElement).pause();
            slide.isPlaying = false;
          }
        });

        if (audioElement.paused) {
          audioElement.play();
          slides.value[index].isPlaying = true;
        } else {
          audioElement.pause();
          slides.value[index].isPlaying = false;
        }
      }
    };

    const updateProgress = (index: number) => {
      const audioElement = document.querySelectorAll("audio")[
        index
      ] as HTMLAudioElement;
      if (audioElement) {
        const slide = slides.value[index];
        slide.currentTime = audioElement.currentTime;
        slide.progress =
          (audioElement.currentTime / audioElement.duration) * 100;
      }
    };

    const onAudioEnded = (index: number) => {
      const slide = slides.value[index];
      slide.isPlaying = false;
      slide.progress = 0;
      slide.currentTime = 0;
    };

    const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    return {
      slides,
      stats,
      togglePlayPause,
      updateProgress,
      onAudioEnded,
      formatTime,
      modules: [Autoplay, Pagination],
    };
  },
});
</script>

<style scoped>
/* Animation for wave bars when audio is playing */
.animate-pulse {
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0%,
  100% {
    height: 8px;
  }
  50% {
    height: 20px;
  }
}

/* Different animation delays for each bar to create wave effect */
.wave-bar:nth-child(1) {
  animation-delay: 0.1s;
}
.wave-bar:nth-child(2) {
  animation-delay: 0.2s;
}
.wave-bar:nth-child(3) {
  animation-delay: 0.3s;
}
/* Add more as needed for all 50 bars */
</style>
