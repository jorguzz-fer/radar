<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Top Channels</h5>
      </div>
      <div class="trezo-card-subtitle">
        <a
          href="#"
          class="inline-block relative ltr:pr-[13px] rtl:pl-[13px] leading-none transition-all hover:text-primary-500"
          @click.prevent="refreshChannels"
        >
          {{ loading ? "Refreshing..." : "Browse All" }}
          <i
            class="ri-arrow-right-s-line absolute top-1/2 -translate-y-1/2 ltr:-right-[8px] rtl:-left-[8px] text-[23px] -mt-px"
          ></i>
        </a>
      </div>
    </div>

    <div class="trezo-card-content">
      <div
        v-for="(channel, index) in channels"
        :key="index"
        class="flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[10px] mb-[10px] last:border-none last:mb-0 last:pb-0 hover:bg-gray-50 dark:hover:bg-[#0f172a] transition-colors duration-200 rounded px-2"
      >
        <div class="flex items-center gap-[15px] min-w-0">
          <img
            :src="channel.icon"
            :alt="channel.name"
            class="w-7 h-7 flex-shrink-0"
          />
          <div class="min-w-0">
            <span
              class="block font-semibold text-black dark:text-white truncate"
            >
              {{ channel.name }}
            </span>
            <span
              class="block text-xs mt-[2px] text-gray-500 dark:text-gray-400"
            >
              {{ channel.type }}
            </span>
          </div>
        </div>
        <div class="rounded-full relative w-[50px] h-[50px] flex-shrink-0">
          <svg
            width="60"
            height="60"
            viewBox="-25 -25 250 250"
            class="relative -top-[5px] ltr:-left-[5px] rtl:-right-[5px]"
            :style="`transform: rotate(-90deg); color: ${channel.color}`"
          >
            <circle
              r="90"
              cx="100"
              cy="100"
              fill="transparent"
              stroke="currentColor"
              stroke-opacity="0.1"
              stroke-width="16px"
              stroke-dasharray="565.48px"
              stroke-dashoffset="0"
            ></circle>
            <circle
              r="90"
              cx="100"
              cy="100"
              :stroke="channel.color"
              stroke-width="16px"
              stroke-linecap="round"
              :stroke-dashoffset="getStrokeDashoffset(channel.percentage)"
              fill="transparent"
              stroke-dasharray="565.48px"
            ></circle>
          </svg>
          <span
            class="block text-gray-500 dark:text-gray-400 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[10px] absolute"
          >
            {{ channel.percentage }}%
          </span>
        </div>
      </div>
      <div v-if="loading" class="text-center py-4">
        <i class="ri-loader-4-line animate-spin text-primary-500"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import icon1 from "@/assets/images/icons/facebook3.svg";
import icon2 from "@/assets/images/icons/dribbble2.svg";
import icon3 from "@/assets/images/icons/instagram2.svg";
import icon4 from "@/assets/images/icons/google3.svg";
import icon5 from "@/assets/images/icons/figma2.svg";

interface Channel {
  id: number;
  name: string;
  type: string;
  icon: string;
  percentage: number;
  color: string;
  trend: "up" | "down" | "neutral";
}

export default defineComponent({
  name: "TopChannels",
  setup() {
    const channels = ref<Channel[]>([]);
    const loading = ref(false);

    const getStrokeDashoffset = (percentage: number) => {
      const circumference = 565.48;
      return circumference - (circumference * percentage) / 100;
    };

    const fetchChannels = () => {
      loading.value = true;
      return new Promise<Channel[]>((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              name: "Facebook",
              type: "Community",
              icon: icon1,
              percentage: 80,
              color: "#605DFF",
              trend: "up",
            },
            {
              id: 2,
              name: "Dribbble",
              type: "Design Community",
              icon: icon2,
              percentage: 75,
              color: "#5DA8FF",
              trend: "up",
            },
            {
              id: 3,
              name: "Instagram",
              type: "Reels & Stories",
              icon: icon3,
              percentage: 80,
              color: "#FE7A36",
              trend: "neutral",
            },
            {
              id: 4,
              name: "Google",
              type: "SEO & PPC",
              icon: icon4,
              percentage: 100,
              color: "#58F229",
              trend: "up",
            },
            {
              id: 5,
              name: "Figma",
              type: "Design Community",
              icon: icon5,
              percentage: 60,
              color: "#BF85FB",
              trend: "down",
            },
          ]);
          loading.value = false;
        }, 800);
      });
    };

    const refreshChannels = async () => {
      channels.value = await fetchChannels();
    };

    onMounted(async () => {
      await refreshChannels();
    });

    return {
      channels,
      loading,
      getStrokeDashoffset,
      refreshChannels,
    };
  },
});
</script>
