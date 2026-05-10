<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title">
        <h5 class="!mb-[3px] md:!mb-0 !text-lg md:!text-[20px]">Suggestions</h5>
        <p>People you may know</p>
      </div>

      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all text-[22px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <i class="ri-more-2-fill"></i>
          </button>

          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
            v-show="isActive"
          >
            <li v-for="period in timePeriods" :key="period">
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                @click="filterByPeriod(period)"
              >
                {{ period }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
      <ul>
        <li
          v-for="user in filteredUsers"
          :key="user.id"
          class="flex items-center justify-between mb-[10.7px] pb-[10.7px] border-b border-gray-50 dark:border-[#172036] px-[20px] md:px-[25px] last:border-b-[0] last:pb-0 last:mb-0"
        >
          <div class="flex items-center gap-[10px]">
            <img
              :src="user.avatar"
              class="rounded-full w-[44px]"
              alt="user-image"
            />
            <div>
              <span class="block text-black dark:text-white font-medium">
                {{ user.name }}
              </span>
              <span class="text-xs">
                {{ user.mutualFriends }} mutual friends
              </span>
            </div>
          </div>
          <div class="flex items-center gap-[5px]">
            <button
              type="button"
              class="flex items-center justify-center w-[34px] h-[34px] rounded-full border border-danger-200 dark:border-[#172036] text-orange-500 text-md transition-all hover:bg-orange-500 hover:text-white hover:border-orange-500"
              @click="removeSuggestion(user.id)"
            >
              <i class="ri-delete-bin-7-line"></i>
            </button>
            <button
              type="button"
              class="flex items-center justify-center w-[34px] h-[34px] rounded-full border border-primary-200 dark:border-[#172036] text-primary-500 text-md transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
            >
              <i class="ri-user-add-line"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/users/user40.jpg";
import image2 from "@/assets/images/users/user37.jpg";
import image3 from "@/assets/images/users/user54.jpg";
import image4 from "@/assets/images/users/user41.jpg";
import image5 from "@/assets/images/users/user43.jpg";

interface User {
  id: number;
  name: string;
  avatar: string;
  mutualFriends: number;
  joinedPeriod: string;
}

export default defineComponent({
  name: "Suggestions",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const timePeriods = ["This Day", "This Week", "This Month", "This Year"];
    const selectedPeriod = ref<string>("");

    const users = ref<User[]>([
      {
        id: 1,
        name: "Sophia Adams",
        avatar: image1,
        mutualFriends: 12,
        joinedPeriod: "This Week",
      },
      {
        id: 2,
        name: "Liam Roberts",
        avatar: image2,
        mutualFriends: 8,
        joinedPeriod: "This Month",
      },
      {
        id: 3,
        name: "Olivia Martinez",
        avatar: image3,
        mutualFriends: 15,
        joinedPeriod: "This Week",
      },
      {
        id: 4,
        name: "Ethan Clarke",
        avatar: image4,
        mutualFriends: 10,
        joinedPeriod: "This Year",
      },
      {
        id: 5,
        name: "Isabella Cruz",
        avatar: image5,
        mutualFriends: 7,
        joinedPeriod: "This Month",
      },
    ]);

    const filteredUsers = computed(() => {
      if (!selectedPeriod.value) return users.value;
      return users.value.filter(
        (user) => user.joinedPeriod === selectedPeriod.value
      );
    });

    const filterByPeriod = (period: string) => {
      selectedPeriod.value = period;
      toggleActive();
    };

    const removeSuggestion = (id: number) => {
      users.value = users.value.filter((user) => user.id !== id);
    };

    return {
      isActive,
      toggleActive,
      timePeriods,
      filteredUsers,
      filterByPeriod,
      removeSuggestion,
    };
  },
});
</script>
