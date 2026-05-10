<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Staff Performance Scores</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative ltr:-mr-[7px] rtl:-ml-[7px]">
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
            <tr v-for="staff in staffMembers" :key="staff.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[30px]">
                    <img
                      :src="staff.avatar"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <span class="font-medium inline-block">{{ staff.name }}</span>
                </div>
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block"
                  :class="{
                    'text-green-500': staff.score >= 90,
                    'text-blue-500': staff.score >= 80 && staff.score < 90,
                    'text-yellow-500': staff.score >= 70 && staff.score < 80,
                    'text-red-500': staff.score < 70,
                    'dark:text-green-400': staff.score >= 90,
                    'dark:text-blue-400': staff.score >= 80 && staff.score < 90,
                    'dark:text-yellow-400':
                      staff.score >= 70 && staff.score < 80,
                    'dark:text-red-400': staff.score < 70,
                  }"
                >
                  {{ staff.score }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/users/user58.jpg";
import image2 from "@/assets/images/users/user59.jpg";
import image3 from "@/assets/images/users/user60.jpg";
import image4 from "@/assets/images/users/user61.jpg";
import image5 from "@/assets/images/users/user62.jpg";
import image6 from "@/assets/images/users/user63.jpg";
import image7 from "@/assets/images/users/user64.jpg";
import image8 from "@/assets/images/users/user65.jpg";
import image9 from "@/assets/images/users/user66.jpg";

interface StaffMember {
  id: number;
  name: string;
  avatar: string;
  score: number;
  department: string;
  lastUpdated: Date;
}

export default defineComponent({
  name: "StaffPerformanceScores",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const staffMembers = ref<StaffMember[]>([
      {
        id: 1,
        name: "Joanna Watson",
        avatar: image1,
        score: 98,
        department: "Engineering",
        lastUpdated: new Date(2023, 5, 15),
      },
      {
        id: 2,
        name: "Angela Carter",
        avatar: image2,
        score: 97,
        department: "Marketing",
        lastUpdated: new Date(2023, 5, 14),
      },
      {
        id: 3,
        name: "Walter White",
        avatar: image3,
        score: 96,
        department: "Chemistry",
        lastUpdated: new Date(2023, 5, 13),
      },
      {
        id: 4,
        name: "Gary Simon",
        avatar: image4,
        score: 88,
        department: "Design",
        lastUpdated: new Date(2023, 5, 12),
      },
      {
        id: 5,
        name: "Zinia Anderson",
        avatar: image5,
        score: 85,
        department: "HR",
        lastUpdated: new Date(2023, 5, 11),
      },
      {
        id: 6,
        name: "Loren Walter",
        avatar: image6,
        score: 82,
        department: "Finance",
        lastUpdated: new Date(2023, 5, 10),
      },
      {
        id: 7,
        name: "Jessy Pinkman",
        avatar: image7,
        score: 80,
        department: "Sales",
        lastUpdated: new Date(2023, 5, 9),
      },
      {
        id: 8,
        name: "Handy Curter",
        avatar: image8,
        score: 77,
        department: "Support",
        lastUpdated: new Date(2023, 5, 8),
      },
      {
        id: 9,
        name: "Skyler Lorensa",
        avatar: image9,
        score: 75,
        department: "Management",
        lastUpdated: new Date(2023, 5, 7),
      },
    ]);

    return {
      isActive,
      toggleActive,
      staffMembers,
    };
  },
});
</script>
