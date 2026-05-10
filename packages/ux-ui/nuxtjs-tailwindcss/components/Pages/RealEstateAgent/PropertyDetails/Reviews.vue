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
          <thead class="text-black dark:text-white">
            <tr>
              <th
                v-for="header in headers"
                :key="header"
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="review in paginatedReviews" :key="review.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l align-top"
              >
                {{ review.id }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l align-top"
              >
                <div class="flex items-center gap-[12px]">
                  <img
                    :src="review.avatar"
                    class="inline-block rounded-full w-[30px]"
                    alt="user-image"
                  />
                  <span class="block font-medium">{{ review.name }}</span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l align-top"
              >
                <div class="flex items-center leading-none gap-[2px]">
                  <i class="ri-star-fill text-orange-500"></i>
                  <span
                    class="block relative top-px text-xs text-gray-500 dark:text-gray-400 ltr:ml-[2px] rtl:mr-[2px]"
                  >
                    {{ review.rating }}
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l align-top"
              >
                <div class="w-[620px] whitespace-normal">
                  <span class="block mb-[6px] font-medium">
                    {{ review.title }}
                  </span>
                  <p
                    class="text-[13px] text-gray-500 dark:text-gray-400 leading-[1.6]"
                  >
                    {{ review.content }}
                  </p>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l align-top"
              >
                {{ formatDate(review.date) }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l align-top"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    id="customTooltip"
                    data-text="View"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    id="customTooltip"
                    data-text="Edit"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    id="customTooltip"
                    data-text="Delete"
                    @click="deleteReview(review)"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="px-[20px] py-[12px] md:py-[15px] rounded-b-md border-l border-r border-b border-gray-100 dark:border-[#172036] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ startItem }}-{{ endItem }} of {{ reviews.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click="prevPage"
              :disabled="currentPage === 1"
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
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md"
              :class="{
                'border border-primary-500 bg-primary-500 text-white':
                  currentPage === page,
                'border border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500':
                  currentPage !== page,
              }"
              @click="goToPage(page)"
            >
              {{ page }}
            </button>
          </li>
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click="nextPage"
              :disabled="currentPage === totalPages"
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
import image4 from "@/assets/images/users/user61.jpg";
import image5 from "@/assets/images/users/user62.jpg";
import image6 from "@/assets/images/users/user63.jpg";

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  title: string;
  content: string;
  date: Date;
}

export default defineComponent({
  name: "Reviews",
  setup() {
    const headers = [
      "User ID",
      "Customer Name",
      "Ratings",
      "Reviews",
      "Date",
      "",
    ];

    const reviews = ref<Review[]>([
      {
        id: "#001",
        name: "Joanna Watson",
        avatar: image1,
        rating: 5.0,
        title: "Amazing Ambiance and Delicious Food!",
        content:
          "Trezo was a fantastic dining experience. The ambiance is warm and inviting, perfect for a date night or celebration. I ordered the truffle pasta, which was rich and perfectly seasoned. The service was impeccable, and the staff made us feel like family. Highly recommend!",
        date: new Date("2025-11-13"),
      },
      {
        id: "#002",
        name: "Jenelia Anderson",
        avatar: image2,
        rating: 4.9,
        title: "Best Brunch Spot in Town",
        content:
          "Visited Trezo for brunch with friends, and it exceeded our expectations. The avocado toast was fresh, and their mimosas were spot-on. Our server was attentive without being intrusive. Definitely coming back!",
        date: new Date("2025-11-14"),
      },
      {
        id: "#003",
        name: "Jonathon Ronan",
        avatar: image3,
        rating: 4.0,
        title: "Good Food, Slow Service",
        content:
          "The food at Trezo was delicious, but the service was a bit slow. We had to wait a while for our appetizers, and our main course was delayed. It's a nice spot, but they could work on speeding up their service.",
        date: new Date("2025-11-15"),
      },
      {
        id: "#004",
        name: "Joanna Watson",
        avatar: image4,
        rating: 5.0,
        title: "Amazing Ambiance and Delicious Food!",
        content:
          "Trezo was a fantastic dining experience. The ambiance is warm and inviting, perfect for a date night or celebration. I ordered the truffle pasta, which was rich and perfectly seasoned. The service was impeccable, and the staff made us feel like family. Highly recommend!",
        date: new Date("2025-11-13"),
      },
      {
        id: "#005",
        name: "Jenelia Anderson",
        avatar: image5,
        rating: 4.9,
        title: "Best Brunch Spot in Town",
        content:
          "Visited Trezo for brunch with friends, and it exceeded our expectations. The avocado toast was fresh, and their mimosas were spot-on. Our server was attentive without being intrusive. Definitely coming back!",
        date: new Date("2025-11-14"),
      },
      {
        id: "#006",
        name: "Jonathon Ronan",
        avatar: image6,
        rating: 4.0,
        title: "Good Food, Slow Service",
        content:
          "The food at Trezo was delicious, but the service was a bit slow. We had to wait a while for our appetizers, and our main course was delayed. It's a nice spot, but they could work on speeding up their service.",
        date: new Date("2025-11-15"),
      },
    ]);

    const itemsPerPage = 3;
    const currentPage = ref(1);

    const totalPages = computed(() =>
      Math.ceil(reviews.value.length / itemsPerPage)
    );

    const paginatedReviews = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return reviews.value.slice(start, end);
    });

    const startItem = computed(
      () => (currentPage.value - 1) * itemsPerPage + 1
    );
    const endItem = computed(() => {
      const end = currentPage.value * itemsPerPage;
      return end > reviews.value.length ? reviews.value.length : end;
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    const formatDate = (date: Date) => {
      return new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
        year: "2-digit",
      }).format(date);
    };

    const deleteReview = (review: Review) => {
      console.log("Delete review:", review);
      // Implement delete logic
      reviews.value = reviews.value.filter(
        (r: { id: string }) => r.id !== review.id
      );
    };

    return {
      headers,
      reviews,
      paginatedReviews,
      currentPage,
      totalPages,
      startItem,
      endItem,
      nextPage,
      prevPage,
      goToPage,
      formatDate,
      deleteReview,
    };
  },
});
</script>
