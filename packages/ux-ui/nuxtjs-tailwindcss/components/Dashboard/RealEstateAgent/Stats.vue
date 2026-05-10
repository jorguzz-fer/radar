<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] mb-[25px]"
  >
    <div
      v-for="(stat, index) in statsData"
      :key="index"
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md hover:shadow-lg transition-shadow duration-300"
    >
      <div class="trezo-card-content flex items-center justify-between">
        <div>
          <span class="block text-gray-500 dark:text-gray-400">
            {{ stat.title }}
          </span>
          <h3 class="!leading-none !text-xl mt-[6px] !mb-[11px]">
            {{ formatValue(stat.value, stat.type) }}
          </h3>
          <span
            :class="[
              'inline-block text-xs font-medium px-[8px] rounded-[100px]',
              stat.trend >= 0
                ? 'text-success-700 border border-success-500 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c]'
                : 'text-danger-700 border border-danger-400 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c]',
            ]"
          >
            {{ stat.trend >= 0 ? "+" : "" }}{{ stat.trend }}%
          </span>
          <!-- <div
            v-if="stat.details"
            class="text-xs text-gray-500 dark:text-gray-400 mt-1"
          >
            {{ stat.details }}
          </div> -->
        </div>

        <div class="relative">
          <img
            :src="stat.image"
            :alt="stat.title + ' image'"
            class="h-[60px] w-auto"
          />
          <!-- <div
            v-if="stat.notifications"
            class="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
          >
            {{ stat.notifications }}
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import image1 from "@/assets/images/buildings/building1.png";
import image2 from "@/assets/images/buildings/building2.png";
import image3 from "@/assets/images/buildings/building3.png";
import image4 from "@/assets/images/buildings/building4.png";

interface StatItem {
  title: string;
  value: number;
  type: "number" | "currency" | "percentage";
  trend: number;
  image: string;
  details?: string;
  notifications?: number;
}

export default defineComponent({
  name: "Stats",
  setup() {
    const statsData = ref<StatItem[]>([]);

    const formatValue = (value: number, type: string) => {
      switch (type) {
        case "currency":
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: value > 1000 ? 0 : 2,
            ...(value > 1000000
              ? { notation: "compact" }
              : { notation: "standard" }),
          }).format(value);
        case "percentage":
          return `${value}%`;
        default:
          return new Intl.NumberFormat().format(value);
      }
    };

    const fetchStatsData = () => {
      return new Promise<StatItem[]>((resolve) => {
        setTimeout(() => {
          resolve([
            {
              title: "Total Listings",
              value: 3251,
              type: "number",
              trend: 3.4,
              image: image1,
              details: "12 new this week",
            },
            {
              title: "Sales Volume",
              value: 1200000,
              type: "currency",
              trend: -3.2,
              image: image2,
              notifications: 3,
            },
            {
              title: "Active Deals",
              value: 1124,
              type: "number",
              trend: 1.4,
              image: image3,
              details: "24 in progress",
            },
            {
              title: "Closed Deals",
              value: 2312,
              type: "number",
              trend: -1.2,
              image: image4,
              details: "18 this month",
            },
          ]);
        }, 300);
      });
    };

    onMounted(async () => {
      statsData.value = await fetchStatsData();

      setInterval(async () => {
        const updatedStats = await fetchStatsData();
        if (JSON.stringify(updatedStats) !== JSON.stringify(statsData.value)) {
          statsData.value = updatedStats;
        }
      }, 30000);
    });

    return {
      statsData,
      formatValue,
    };
  },
});
</script>
