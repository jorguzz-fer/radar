<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Featured Services</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <ul>
        <li
          v-for="(service, index) in services"
          :key="service.id"
          class="flex items-center justify-between border-b border-gray-100 dark:border-[#172036] pb-[12px] mb-[12px] last:border-none last:mb-0 last:pb-0"
        >
          <div class="flex items-center gap-[15px]">
            <img :src="service.icon" :alt="service.name" />
            <div>
              <span
                class="block font-medium text-black dark:text-white mb-[4px]"
              >
                {{ service.name }}
              </span>
              <span class="block text-xs">
                {{ service.served }} Served this week
              </span>
            </div>
          </div>
          <span
            class="font-medium text-primary-500 rounded-full flex items-center justify-center bg-primary-100 dark:bg-[#172036] w-[25px] h-[25px] text-xs pt-px"
          >
            {{ formatServiceNumber(index + 1) }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import icon1 from "@/assets/images/icons/hair-cutting.svg";
import icon2 from "@/assets/images/icons/manicure.svg";
import icon3 from "@/assets/images/icons/pedicure.svg";
import icon4 from "@/assets/images/icons/nail-polish.svg";
import icon5 from "@/assets/images/icons/woman.svg";

interface Service {
  id: number;
  name: string;
  icon: string;
  served: number;
}

export default defineComponent({
  name: "FeaturedServices",
  setup() {
    const services: Service[] = [
      {
        id: 1,
        name: "Hair Cut",
        icon: icon1,
        served: 132,
      },
      {
        id: 2,
        name: "Manicure",
        icon: icon2,
        served: 102,
      },
      {
        id: 3,
        name: "Pedicure",
        icon: icon3,
        served: 99,
      },
      {
        id: 4,
        name: "Nail Art",
        icon: icon4,
        served: 89,
      },
      {
        id: 5,
        name: "Facial Treatment",
        icon: icon5,
        served: 72,
      },
    ];

    const formatServiceNumber = (num: number) => {
      return num.toString().padStart(2, "0");
    };

    return {
      services,
      formatServiceNumber,
    };
  },
});
</script>
