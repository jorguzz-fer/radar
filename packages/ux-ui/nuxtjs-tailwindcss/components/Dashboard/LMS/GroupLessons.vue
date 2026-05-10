<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Group Lessons</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all text-[26px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <i class="ri-more-fill"></i>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Day
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Week
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Month
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Year
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <tbody class="text-black dark:text-white">
            <tr v-for="lesson in paginatedLessons" :key="lesson.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center">
                  <div class="flex items-center">
                    <div
                      v-for="(user, index) in lesson.users"
                      :key="index"
                      class="rounded-full w-[45px] h-[45px] text-xs ltr:-mr-[21px] rtl:-ml-[21px] ltr:last:mr-0 rtl:last:ml-0 border-[2px] border-white"
                    >
                      <img
                        :alt="'user-image-' + index"
                        :src="user.image"
                        class="rounded-full"
                      />
                    </div>
                  </div>
                  <div class="ltr:ml-[10px] rtl:mr-[10px]">
                    <span class="block font-medium">{{ lesson.title }}</span>
                    <span
                      class="block mt-[5px] text-gray-500 dark:text-gray-400"
                    >
                      {{ formatDate(lesson.date) }}
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0"
              >
                <a
                  href="#"
                  class="inline-block relative w-[36px] h-[36px] text-center text-gray-500 dark:text-gray-400 transition-all border border-gray-100 dark:border-[#172036] rounded-full hover:bg-primary-500 hover:border-primary-500 hover:text-white"
                >
                  <i
                    class="material-symbols-outlined absolute left-0 right-0 !text-lg top-1/2 -translate-y-1/2"
                  >
                    arrow_outward
                  </i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div
        class="flex items-center justify-between mt-[17px] px-[20px] md:px-[25px] pt-[12px] md:pt-[14px]"
      >
        <p class="!mb-0 text-sm">
          Items per page: <strong>{{ itemsPerPage }}</strong>
        </p>
        <div class="flex items-center">
          <p class="!mb-0 text-sm">
            {{ paginationInfo }}
          </p>
          <ol class="ltr:ml-[10px] rtl:mr-[10px]">
            <li
              class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            >
              <button
                @click="prevPage"
                :disabled="currentPage === 1"
                class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              >
                <i
                  class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
                >
                  chevron_left
                </i>
              </button>
            </li>
            <li
              class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            >
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              >
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/users/user20.jpg";
import image2 from "@/assets/images/users/user21.jpg";
import image3 from "@/assets/images/users/user6.jpg";
import image4 from "@/assets/images/users/user22.jpg";
import image5 from "@/assets/images/users/user23.jpg";
import image6 from "@/assets/images/users/user24.jpg";
import image7 from "@/assets/images/users/user25.jpg";
import image8 from "@/assets/images/users/user26.jpg";
import image9 from "@/assets/images/users/user27.jpg";
import image10 from "@/assets/images/users/user28.jpg";
import image11 from "@/assets/images/users/user29.jpg";
import image12 from "@/assets/images/users/user30.jpg";

export default defineComponent({
  name: "GroupLessons",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    // Mock data (replace with API call in a real application)
    const lessons = ref([
      {
        id: 1,
        title: "Digital Marketing",
        date: "2025-03-15",
        users: [{ image: image1 }, { image: image2 }, { image: image3 }],
        link: "#",
      },
      {
        id: 2,
        title: "Web Development",
        date: "2025-03-10",
        users: [{ image: image4 }, { image: image5 }, { image: image6 }],
        link: "#",
      },
      {
        id: 3,
        title: "UX/UI Design",
        date: "2025-03-05",
        users: [{ image: image7 }, { image: image8 }, { image: image9 }],
        link: "#",
      },
      {
        id: 4,
        title: "Content Writer",
        date: "2025-03-02",
        users: [{ image: image10 }, { image: image11 }, { image: image12 }],
        link: "#",
      },
      {
        id: 5,
        title: "Data Science",
        date: "2025-02-28",
        users: [{ image: image1 }, { image: image2 }, { image: image3 }],
        link: "#",
      },
      {
        id: 6,
        title: "Mobile App Development",
        date: "2025-02-25",
        users: [{ image: image4 }, { image: image5 }, { image: image6 }],
        link: "#",
      },
      {
        id: 7,
        title: "Graphic Design",
        date: "2025-02-20",
        users: [{ image: image7 }, { image: image8 }, { image: image9 }],
        link: "#",
      },
      {
        id: 8,
        title: "Cybersecurity",
        date: "2025-02-15",
        users: [{ image: image10 }, { image: image11 }, { image: image12 }],
        link: "#",
      },
    ]);

    // Pagination state
    const currentPage = ref(1);
    const itemsPerPage = ref(4);

    // Computed properties for pagination
    const totalItems = computed(() => lessons.value.length);
    const totalPages = computed(() =>
      Math.ceil(totalItems.value / itemsPerPage.value)
    );
    const paginatedLessons = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return lessons.value.slice(start, end);
    });
    const paginationInfo = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage.value,
        totalItems.value
      );
      return `${start} – ${end} of ${totalItems.value}`;
    });

    // Pagination methods
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

    // Date formatting
    const formatDate = (date: string) => {
      const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "long",
        year: "numeric",
      };
      return new Date(date).toLocaleDateString("en-US", options);
    };

    // Fetch lessons (mocked for different time ranges)
    const fetchLessons = async (range: string) => {
      // Reset to first page when fetching new data
      currentPage.value = 1;

      // Simulate API call based on range
      // In a real application, replace with actual API call
      let filteredLessons = [];
      const today = new Date();
      const ranges = {
        day: 1,
        week: 7,
        month: 30,
        year: 365,
      };

      const days = ranges[range as keyof typeof ranges] || 365;
      const cutoffDate = new Date(today);
      cutoffDate.setDate(today.getDate() - days);

      filteredLessons = lessons.value.filter(
        (lesson) => new Date(lesson.date) >= cutoffDate
      );

      lessons.value = filteredLessons.length ? filteredLessons : lessons.value; // Fallback to all lessons if none match
    };

    return {
      isActive,
      toggleActive,
      lessons,
      currentPage,
      itemsPerPage,
      totalPages,
      paginatedLessons,
      paginationInfo,
      prevPage,
      nextPage,
      formatDate,
      fetchLessons,
    };
  },
});
</script>
