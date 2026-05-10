<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Top Podcasters</h5>
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
      <div class="table-responsive overflow-x-auto pb-[19px] md:pb-[23px]">
        <table class="w-full without-top-bottom-border">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium text-xs ltr:text-left rtl:text-right px-[20px] py-[8px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-gray-50 dark:bg-[#15203c] whitespace-nowrap text-gray-500 dark:text-gray-400"
              >
                Name
              </th>
              <th
                class="font-medium text-xs ltr:text-left rtl:text-right px-[20px] py-[8px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-gray-50 dark:bg-[#15203c] whitespace-nowrap text-gray-500 dark:text-gray-400"
              >
                Episodes
              </th>
              <th
                class="font-medium text-xs ltr:text-left rtl:text-right px-[20px] py-[8px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-gray-50 dark:bg-[#15203c] whitespace-nowrap text-gray-500 dark:text-gray-400"
              >
                Earnings
              </th>
              <th
                class="font-medium text-xs ltr:text-left rtl:text-right px-[20px] py-[8px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-gray-50 dark:bg-[#15203c] whitespace-nowrap text-gray-500 dark:text-gray-400"
              >
                Ratings
              </th>
            </tr>
          </thead>

          <tbody class="text-black dark:text-white">
            <tr v-for="podcaster in podcasters" :key="podcaster.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      :src="podcaster.image"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-medium inline-block mb-px">{{
                      podcaster.name
                    }}</span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                      >{{ podcaster.role }}</span
                    >
                  </div>
                </div>
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                {{ podcaster.episodes }}
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                {{ podcaster.earnings }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="text-[15px] leading-none text-orange-400">
                  <i
                    v-for="n in 5"
                    :key="n"
                    :class="getStarClass(podcaster.rating, n)"
                  ></i>
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
import { defineComponent } from "vue";

import image1 from "@/assets/images/users/user24.jpg";
import image2 from "@/assets/images/users/user25.jpg";
import image3 from "@/assets/images/users/user26.jpg";
import image4 from "@/assets/images/users/user27.jpg";
import image5 from "@/assets/images/users/user28.jpg";

export default defineComponent({
  name: "TopPodcasters",
  data() {
    return {
      podcasters: [
        {
          id: 1,
          name: "Tom Richards",
          role: "Content Strategist",
          image: image1,
          episodes: 95,
          earnings: "$125,000",
          rating: 5,
        },
        {
          id: 2,
          name: "Amanda Garcia",
          role: "Social Media",
          image: image2,
          episodes: 110,
          earnings: "$140,000",
          rating: 4.5,
        },
        {
          id: 3,
          name: "Lisa Kim",
          role: "Branding Consultant",
          image: image3,
          episodes: 85,
          earnings: "$160,000",
          rating: 4,
        },
        {
          id: 4,
          name: "Michael Young",
          role: "Data Analytics",
          image: image4,
          episodes: 130,
          earnings: "$90,000",
          rating: 3.5,
        },
        {
          id: 5,
          name: "Ravi Patel",
          role: "SEO & SEM",
          image: image5,
          episodes: 75,
          earnings: "$85,000",
          rating: 5,
        },
      ],
    };
  },
  methods: {
    getStarClass(rating: number, index: number): string {
      if (rating >= index) {
        return "ri-star-fill";
      } else if (rating >= index - 0.5) {
        return "ri-star-half-line";
      } else {
        return "ri-star-line";
      }
    },
  },
});
</script>
