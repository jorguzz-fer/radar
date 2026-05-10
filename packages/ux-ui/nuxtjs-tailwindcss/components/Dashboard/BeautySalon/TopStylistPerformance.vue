<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Top Stylist Performance</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <tbody class="text-black dark:text-white">
            <tr v-for="stylist in stylists" :key="stylist.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-md w-[40px]">
                    <img
                      :src="stylist.image"
                      class="inline-block rounded-md"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-[2px]">
                      {{ stylist.name }}
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      {{ stylist.bookings }} Total Bookings
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div
                  class="flex items-center justify-end leading-none gap-[2px]"
                >
                  <i
                    v-for="star in fullStars(stylist.rating)"
                    :key="'full' + star"
                    class="ri-star-fill text-orange-500"
                  ></i>
                  <i
                    v-if="hasHalfStar(stylist.rating)"
                    class="ri-star-half-line text-orange-500"
                  ></i>
                  <i
                    v-for="empty in emptyStars(stylist.rating)"
                    :key="'empty' + empty"
                    class="ri-star-line text-orange-500"
                  ></i>
                  <span
                    class="block relative top-px text-xs text-gray-500 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >
                    {{ stylist.rating.toFixed(1) }}
                  </span>
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

import user75 from "@/assets/images/users/user75.jpg";
import user76 from "@/assets/images/users/user76.jpg";
import user77 from "@/assets/images/users/user77.jpg";
import user78 from "@/assets/images/users/user78.jpg";
import user79 from "@/assets/images/users/user79.jpg";

interface Stylist {
  id: number;
  name: string;
  image: string;
  bookings: number;
  rating: number;
}

export default defineComponent({
  name: "TopStylistPerformance",
  setup() {
    const stylists: Stylist[] = [
      {
        id: 1,
        name: "Johhna Loren",
        image: user75,
        bookings: 2032,
        rating: 5.0,
      },
      {
        id: 2,
        name: "Angela Carter",
        image: user76,
        bookings: 1020,
        rating: 4.5,
      },
      {
        id: 3,
        name: "Skyler White",
        image: user77,
        bookings: 99,
        rating: 4.0,
      },
      {
        id: 4,
        name: "Jane Ronan",
        image: user78,
        bookings: 89,
        rating: 3.5,
      },
      {
        id: 5,
        name: "Angel Peril",
        image: user79,
        bookings: 72,
        rating: 3.0,
      },
    ];

    const fullStars = (rating: number) => {
      return Math.floor(rating);
    };

    const hasHalfStar = (rating: number) => {
      return rating % 1 >= 0.5;
    };

    const emptyStars = (rating: number) => {
      return 5 - Math.ceil(rating);
    };

    return {
      stylists,
      fullStars,
      hasHalfStar,
      emptyStars,
    };
  },
});
</script>
