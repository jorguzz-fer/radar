<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Top Instructors</h5>
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

    <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Name
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Courses
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Ratings
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr
              v-for="instructor in paginatedInstructors"
              :key="instructor.name"
            >
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="w-[44px] h-[44px] ltr:mr-[12px] rtl:ml-[12px]">
                    <img
                      :src="instructor.image"
                      class="rounded-full inline-block"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="block font-medium">
                      {{ instructor.name }}
                    </span>
                    <span class="text-gray-500 dark:text-gray-400 block mt-px">
                      {{ instructor.category }}
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  {{ instructor.courses }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="text-[15px] leading-none text-orange-400">
                  <i
                    v-for="star in 5"
                    :key="star"
                    :class="getStarClass(instructor.rating, star)"
                  ></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="flex items-center justify-between mt-[17px] px-[20px] md:px-[25px] pt-[12px] md:pt-[14px] mt-[0px] md:mt-0"
      >
        <p class="!mb-0 text-sm">
          Items per pages: <strong>{{ itemsPerPage }}</strong>
        </p>
        <div class="flex items-center">
          <p class="!mb-0 text-sm">
            {{ (currentPage - 1) * itemsPerPage + 1 }} –
            {{ Math.min(currentPage * itemsPerPage, instructors.length) }} of
            {{ instructors.length }}
          </p>
          <ol class="ltr:ml-[10px] rtl:mr-[10px]">
            <li
              class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            >
              <button
                @click="prevPage"
                :disabled="currentPage === 1"
                class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
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
              class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            >
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/users/user13.jpg";
import image2 from "@/assets/images/users/user16.jpg";
import image3 from "@/assets/images/users/user17.jpg";
import image4 from "@/assets/images/users/user18.jpg";

interface Instructor {
  name: string;
  category: string;
  courses: number;
  rating: number;
  image: string;
}

export default defineComponent({
  name: "TopInstructors",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const instructors = ref<Instructor[]>([
      {
        name: "Olivia Clark",
        category: "Big Data",
        courses: 55,
        rating: 5,
        image: image1,
      },
      {
        name: "Ava Turner",
        category: "UX/UI",
        courses: 120,
        rating: 4.5,
        image: image2,
      },
      {
        name: "Lucas Morgan",
        category: "Developer",
        courses: 86,
        rating: 4,
        image: image3,
      },
      {
        name: "Isabella Cooper",
        category: "Designer",
        courses: 75,
        rating: 4.5,
        image: image4,
      },
      {
        name: "Ava Turner",
        category: "UX/UI",
        courses: 120,
        rating: 4.5,
        image: image2,
      },
      {
        name: "Lucas Morgan",
        category: "Developer",
        courses: 86,
        rating: 4,
        image: image3,
      },
    ]);

    const currentPage = ref(1);
    const itemsPerPage = ref(4);

    const totalPages = computed(() =>
      Math.ceil(instructors.value.length / itemsPerPage.value)
    );

    const paginatedInstructors = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return instructors.value.slice(start, end);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    function getStarClass(rating: number, index: number): string {
      if (rating >= index) return "ri-star-fill";
      if (rating >= index - 0.5) return "ri-star-half-fill";
      return "ri-star-line";
    }

    return {
      isActive,
      toggleActive,
      instructors,
      paginatedInstructors,
      getStarClass,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      itemsPerPage,
    };
  },
});
</script>
