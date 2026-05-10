<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] mb-[25px]"
  >
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content flex justify-between">
        <div>
          <span class="block">{{ stat.title }}</span>
          <h2 class="!text-xl md:!text-2xl !font-black mt-[5px] !mb-[8px]">
            {{ stat.value }}
          </h2>
          <span
            class="inline-block text-xs rounded-[30px] py-px px-[10px] border"
            :class="[
              stat.trend >= 0
                ? 'border-success-300 text-success-700 bg-success-100'
                : 'border-orange-300 text-danger-500 bg-orange-100',
              'dark:border-[#15203c] dark:bg-[#15203c]',
            ]"
          >
            {{ stat.trend >= 0 ? "+" : "" }}{{ stat.trend }}%
          </span>
        </div>
        <div class="mt-[5px]">
          <img :src="stat.icon" :alt="stat.title.toLowerCase()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "@/assets/images/icons/add-event.svg";
import image2 from "@/assets/images/icons/examination.svg";
import image3 from "@/assets/images/icons/scissors.svg";
import image4 from "@/assets/images/icons/money-bag.svg";

interface StatItem {
  title: string;
  value: string | number;
  trend: number;
  icon: string;
}

export default defineComponent({
  name: "Stats",
  data() {
    return {
      stats: [
        {
          title: "Appointments",
          value: 32,
          trend: -0.04,
          icon: image1,
        },
        {
          title: "Patients",
          value: 334,
          trend: 7,
          icon: image2,
        },
        {
          title: "Operations",
          value: 12,
          trend: 5.4,
          icon: image3,
        },
        {
          title: "Earnings",
          value: "$312",
          trend: -1.4,
          icon: image4,
        },
      ] as StatItem[],
    };
  },
});
</script>
