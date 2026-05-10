<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Top Performers</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              This Week
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
              ></i>
            </span>
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
            <tr v-for="item in paginatedItems" :key="item.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center">
                  <div class="w-[44px] h-[44px] ltr:mr-[12px] rtl:ml-[12px]">
                    <img
                      :src="item.user.image"
                      class="rounded-full inline-block"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="block font-medium">
                      {{ item.user.name }}
                    </span>
                    <span class="text-gray-500 dark:text-gray-400 block mt-px">
                      {{ item.user.email }}
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[17px] border-b border-gray-100 dark:border-[#172036] ltr:first:pl-0 ltr:last:pr-0 rtl:first:pr-0 rtl:last:pl-0"
              >
                <a
                  href="javascript:void(0);"
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

      <div class="flex items-center justify-between mt-[17px]">
        <p class="!mb-0 text-sm">
          Items per pages: <strong>{{ perPage }}</strong>
        </p>
        <div class="flex items-center">
          <p class="!mb-0 text-sm">
            {{ startItem }} – {{ endItem }} of {{ items.length }}
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

import image1 from "@/assets/images/users/user6.jpg";
import image2 from "@/assets/images/users/user7.jpg";
import image3 from "@/assets/images/users/user8.jpg";
import image4 from "@/assets/images/users/user9.jpg";
import image5 from "@/assets/images/users/user10.jpg";

export default defineComponent({
  name: "TopPerformers",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const currentPage = ref(1);
    const perPage = ref(5);
    interface User {
      image: string;
      name: string;
      email: string;
    }

    interface Item {
      id: number;
      user: User;
    }

    const items = ref<Item[]>([
      {
        id: 1,
        user: {
          image: image1,
          name: "Alex Davis",
          email: "alex@trezo.com",
        },
      },
      {
        id: 2,
        user: {
          image: image2,
          name: "Laura Martinez",
          email: "laura@trezo.com",
        },
      },
      {
        id: 3,
        user: {
          image: image3,
          name: "Mark Thompson",
          email: "mark@trezo.com",
        },
      },
      {
        id: 4,
        user: {
          image: image4,
          name: "Rachel White",
          email: "rachel@trezo.com",
        },
      },
      {
        id: 5,
        user: {
          image: image5,
          name: "Kevin Lee",
          email: "kevin@trezo.com",
        },
      },
      {
        id: 6,
        user: {
          image: image2,
          name: "Kevin Lee",
          email: "kevin@trezo.com",
        },
      },
    ]);

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * perPage.value;
      return items.value.slice(start, start + perPage.value);
    });

    const totalPages = computed(() => {
      return Math.ceil(items.value.length / perPage.value);
    });

    const startItem = computed(() => {
      return (currentPage.value - 1) * perPage.value + 1;
    });

    const endItem = computed(() => {
      return Math.min(currentPage.value * perPage.value, items.value.length);
    });

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

    return {
      prevPage,
      nextPage,
      startItem,
      endItem,
      isActive,
      toggleActive,
      currentPage,
      perPage,
      items,
      paginatedItems,
      totalPages,
    };
  },
});
</script>
