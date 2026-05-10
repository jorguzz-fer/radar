<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Customers From Channels</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div
        v-for="channel in channels"
        :key="channel.id"
        class="flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[14.5px] mb-[14.5px] last:border-none last:mb-0 last:pb-0"
      >
        <div class="flex items-center gap-[15px]">
          <img :src="channel.icon" :alt="channel.name" />
          <div>
            <span class="block font-semibold text-black dark:text-white">
              {{ channel.name }}
            </span>
            <span class="block text-xs mt-[4px]">{{ channel.type }}</span>
          </div>
        </div>
        <div class="w-[150px]">
          <div class="leading-none flex items-center gap-[12px]">
            <div
              class="flex w-full h-[8px] overflow-hidden rounded-md"
              :class="`bg-${channel.color}-100 dark:bg-[#172036]`"
            >
              <div
                class="flex flex-col justify-center overflow-hidden rounded-md"
                :class="`bg-${channel.color}-400`"
                :style="`width: ${channel.percentage}%`"
              ></div>
            </div>
            <span class="block text-xs">{{ channel.percentage }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import icon1 from "@/assets/images/icons/facebook3.svg";
import icon2 from "@/assets/images/icons/dribbble2.svg";
import icon3 from "@/assets/images/icons/instagram2.svg";
import icon4 from "@/assets/images/icons/google3.svg";

interface Channel {
  id: number;
  name: string;
  type: string;
  icon: string;
  percentage: number;
  color: string;
}

export default defineComponent({
  name: "CustomersFromChannels",
  setup() {
    const channels: Channel[] = [
      {
        id: 1,
        name: "Facebook",
        type: "Community",
        icon: icon1,
        percentage: 50,
        color: "primary",
      },
      {
        id: 2,
        name: "Dribbble",
        type: "Community",
        icon: icon2,
        percentage: 75,
        color: "secondary",
      },
      {
        id: 3,
        name: "Instagram",
        type: "Reels",
        icon: icon3,
        percentage: 30,
        color: "orange",
      },
      {
        id: 4,
        name: "Google",
        type: "SEO & PPC",
        icon: icon4,
        percentage: 20,
        color: "success",
      },
    ];

    return {
      channels,
    };
  },
});
</script>
