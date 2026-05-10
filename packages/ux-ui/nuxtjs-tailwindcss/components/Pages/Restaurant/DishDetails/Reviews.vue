<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Reviews</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                v-for="header in headers"
                :key="header.key"
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[11px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                {{ header.label }}
              </th>
            </tr>
          </thead>

          <tbody class="text-black dark:text-white">
            <tr v-for="review in paginatedReviews" :key="review.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 align-top"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  {{ review.id }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 align-top"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[30px]">
                    <img
                      :src="review.avatar"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <span class="font-semibold inline-block">
                    {{ review.name }}
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 align-top"
              >
                <div class="flex items-center leading-none gap-[2px]">
                  <i class="ri-star-fill text-orange-500"></i>
                  <span
                    class="block relative top-px text-xs text-gray-500 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px] font-semibold"
                  >
                    {{ review.rating }}
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 align-top"
              >
                <div class="whitespace-normal w-[620px]">
                  <span
                    class="block text-xs mb-[5px] font-semibold text-gray-600 dark:text-gray-400"
                  >
                    {{ review.title }}
                  </span>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ review.comment }}
                  </p>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 align-top"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  {{ formatDate(review.date) }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 align-top"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    data-text="View"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Edit"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    data-text="Delete"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pt-[11px] sm:flex sm:items-center justify-between">
        <p class="!mb-0 text-xs">
          Showing {{ showingStart }}-{{ showingEnd }} of
          {{ totalReviews }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              :disabled="currentPage === 1"
              @click="prevPage"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span class="opacity-0"> 0 </span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_left
              </i>
            </button>
          </li>
          <li
            v-for="page in totalPages"
            :key="page"
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              @click="goToPage(page)"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              :class="{
                'border-primary-500 bg-primary-500 text-white':
                  currentPage === page,
                'border-gray-100 dark:border-[#172036]': currentPage !== page,
              }"
            >
              {{ page }}
            </button>
          </li>
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              :disabled="currentPage === totalPages"
              @click="nextPage"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span class="opacity-0"> 0 </span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_right
              </i>
            </button>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "@/assets/images/users/user58.jpg";
import image2 from "@/assets/images/users/user59.jpg";
import image3 from "@/assets/images/users/user60.jpg";

interface Review {
  id: string;
  avatar: string;
  name: string;
  rating: number;
  title: string;
  comment: string;
  date: Date | string;
}

export default defineComponent({
  name: "Reviews",
  setup() {
    const currentPage = ref(1);
    const itemsPerPage = ref(3);

    const headers = ref([
      { key: "id", label: "User ID" },
      { key: "name", label: "Customer Name" },
      { key: "rating", label: "Ratings" },
      { key: "comment", label: "Reviews" },
      { key: "date", label: "Date" },
      { key: "actions", label: "" },
    ]);

    const reviews = ref<Review[]>([
      {
        id: "#001",
        avatar: image1,
        name: "Joanna Watson",
        rating: 5.0,
        title: "Amazing Ambiance and Delicious Food!",
        comment:
          "Trezo was a fantastic dining experience. The ambiance is warm and inviting, perfect for a date night or celebration. I ordered the truffle pasta, which was rich and perfectly seasoned. The service was impeccable, and the staff made us feel like family. Highly recommend!",
        date: "2025-11-13",
      },
      {
        id: "#002",
        avatar: image2,
        name: "Jenelia Anderson",
        rating: 4.9,
        title: "Best Brunch Spot in Town",
        comment:
          "Visited Trezo for brunch with friends, and it exceeded our expectations. The avocado toast was fresh, and their mimosas were spot-on. Our server was attentive without being intrusive. Definitely coming back!",
        date: "2025-11-14",
      },
      {
        id: "#003",
        avatar: image3,
        name: "Jonathon Ronan",
        rating: 4.0,
        title: "Good Food, Slow Service",
        comment:
          "The food at Trezo was delicious, but the service was a bit slow. We had to wait a while for our appetizers, and our main course was delayed. It's a nice spot, but they could work on speeding up their service.",
        date: "2025-11-15",
      },
      {
        id: "#004",
        avatar: image3,
        name: "Jonathon Ronan",
        rating: 4.0,
        title: "Good Food, Slow Service",
        comment:
          "The food at Trezo was delicious, but the service was a bit slow. We had to wait a while for our appetizers, and our main course was delayed. It's a nice spot, but they could work on speeding up their service.",
        date: "2025-11-15",
      },
      {
        id: "#005",
        avatar: image1,
        name: "Joanna Watson",
        rating: 5.0,
        title: "Amazing Ambiance and Delicious Food!",
        comment:
          "Trezo was a fantastic dining experience. The ambiance is warm and inviting, perfect for a date night or celebration. I ordered the truffle pasta, which was rich and perfectly seasoned. The service was impeccable, and the staff made us feel like family. Highly recommend!",
        date: "2025-11-13",
      },
      {
        id: "#006",
        avatar: image2,
        name: "Jenelia Anderson",
        rating: 4.9,
        title: "Best Brunch Spot in Town",
        comment:
          "Visited Trezo for brunch with friends, and it exceeded our expectations. The avocado toast was fresh, and their mimosas were spot-on. Our server was attentive without being intrusive. Definitely coming back!",
        date: "2025-11-14",
      },
    ]);

    const totalReviews = computed(() => reviews.value.length);

    const totalPages = computed(() =>
      Math.ceil(totalReviews.value / itemsPerPage.value)
    );

    const paginatedReviews = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return reviews.value.slice(start, end);
    });

    const showingStart = computed(
      () => (currentPage.value - 1) * itemsPerPage.value + 1
    );

    const showingEnd = computed(() => {
      const end = currentPage.value * itemsPerPage.value;
      return end > totalReviews.value ? totalReviews.value : end;
    });

    const formatDate = (date: Date | string): string => {
      if (typeof date === "string") {
        date = new Date(date);
      }
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    return {
      currentPage,
      headers,
      reviews,
      totalReviews,
      totalPages,
      paginatedReviews,
      showingStart,
      showingEnd,
      formatDate,
      prevPage,
      nextPage,
      goToPage,
    };
  },
});
</script>
