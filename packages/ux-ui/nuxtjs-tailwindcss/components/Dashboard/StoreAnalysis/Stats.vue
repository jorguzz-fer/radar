<template>
  <div class="relative mt-[25px] lg:-mt-[25px] lg:mx-[25px] 2xl:mx-[40px]">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-[25px]">
      <div
        v-for="stat in stats"
        :key="stat.id"
        class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
      >
        <div class="trezo-card-content flex justify-between">
          <div>
            <span class="block">{{ stat.title }}</span>
            <h3 class="!text-2xl mt-[4px] !mb-[8px]">
              {{ formatValue(stat.value) }}
            </h3>
            <span :class="getTrendClasses(stat.trend)">
              {{ formatTrend(stat.trend) }}
            </span>
          </div>
          <div
            :class="getIconBgClasses(stat)"
            class="rounded-full w-[48px] h-[48px] flex items-center justify-center text-xl"
          >
            <i :class="stat.icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface StatItem {
  id: number;
  title: string;
  value: number;
  trend: number;
  icon: string;
  valuePrefix?: string;
  trendType?: "success" | "danger" | "warning";
  iconBg?: "primary" | "success" | "purple" | "danger" | "warning";
}

export default defineComponent({
  name: "Stats",
  setup() {
    const stats = ref<StatItem[]>([
      {
        id: 1,
        title: "New Customers",
        value: 14500,
        trend: 7,
        icon: "ri-user-3-fill",
        iconBg: "primary",
      },
      {
        id: 2,
        title: "Sales",
        value: 64500,
        trend: -1.4,
        valuePrefix: "$",
        trendType: "danger",
        icon: "ri-money-dollar-circle-fill",
        iconBg: "success",
      },
      {
        id: 3,
        title: "Products",
        value: 11900,
        trend: 1.1,
        icon: "ri-price-tag-3-fill",
        iconBg: "purple",
      },
    ]);

    const formatValue = (value: number, prefix: string = "") => {
      if (value >= 1000) {
        return `${prefix}${(value / 1000).toFixed(1)}k`;
      }
      return `${prefix}${value}`;
    };

    const formatTrend = (trend: number) => {
      return `${trend > 0 ? "+" : ""}${trend}%`;
    };

    const getTrendClasses = (trend: number) => {
      const baseClasses =
        "inline-block text-xs py-px px-[9px] border text-sm rounded-[100px] dark:bg-[#15203c] dark:border-[#15203c]";

      if (trend > 0) {
        return `${baseClasses} text-success-700 border-success-300 bg-success-100`;
      } else if (trend < 0) {
        return `${baseClasses} text-danger-700 border-danger-300 bg-danger-100`;
      }
      return `${baseClasses} text-warning-700 border-warning-300 bg-warning-100`;
    };

    const getIconBgClasses = (stat: StatItem) => {
      const color =
        stat.iconBg ||
        (stat.trend > 0 ? "success" : stat.trend < 0 ? "danger" : "warning");

      return {
        [`bg-${color}-100`]: true,
        [`text-${color}-500`]: true,
        "dark:bg-[#15203c]": true,
      };
    };

    const updateStats = () => {
      stats.value = stats.value.map((stat) => ({
        ...stat,
        value: stat.value + (Math.random() * 1000 - 500),
        trend: stat.trend + (Math.random() * 2 - 1),
      }));
    };

    return {
      stats,
      formatValue,
      formatTrend,
      getTrendClasses,
      getIconBgClasses,
    };
  },
});
</script>
