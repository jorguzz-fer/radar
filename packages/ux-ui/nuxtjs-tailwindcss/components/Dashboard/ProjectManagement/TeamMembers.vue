<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Team Members</h5>
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
      <div class="table-responsive overflow-x-auto without-border">
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
                Tasks
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="member in teamMembers" :key="member.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div class="rounded-full w-[44px]">
                    <img
                      :src="member.image"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="font-medium inline-block">{{
                      member.name
                    }}</span>
                    <span class="block text-gray-500 dark:text-gray-400">
                      {{ member.role }}
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">{{
                  member.tasks
                }}</span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div
                  class="flex w-full h-[4px] overflow-hidden rounded-md"
                  :class="getStatusBarBg(member.status)"
                >
                  <div
                    class="flex flex-col justify-center overflow-hidden rounded-md"
                    :class="getStatusBarColor(member.status)"
                    :style="{ width: `${member.status}%` }"
                  ></div>
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
import { defineComponent, ref, computed } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/users/user6.jpg";
import image2 from "@/assets/images/users/user7.jpg";
import image3 from "@/assets/images/users/user8.jpg";
import image4 from "@/assets/images/users/user9.jpg";
import image5 from "@/assets/images/users/user10.jpg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  tasks: number;
  status: number;
}

export default defineComponent({
  name: "TeamMembers",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    // Sample dynamic data (replace with API call in real application)
    const teamMembers = ref<TeamMember[]>([
      {
        id: 1,
        name: "Alex Davis",
        role: "Head of HR",
        image: image1,
        tasks: 55,
        status: 55,
      },
      {
        id: 2,
        name: "Laura Martinez",
        role: "laura@trezo.com",
        image: image2,
        tasks: 125,
        status: 70,
      },
      {
        id: 3,
        name: "Mark Thompson",
        role: "mark@trezo.com",
        image: image3,
        tasks: 78,
        status: 30,
      },
      {
        id: 4,
        name: "Rachel White",
        role: "rachel@trezo.com",
        image: image4,
        tasks: 95,
        status: 90,
      },
      {
        id: 5,
        name: "Kevin Lee",
        role: "kevin@trezo.com",
        image: image5,
        tasks: 134,
        status: 50,
      },
    ]);

    // Determine status bar background color
    const getStatusBarBg = (status: number) => {
      if (status >= 80) return "bg-danger-50 dark:bg-[#172036]";
      if (status >= 60) return "bg-success-50 dark:bg-[#172036]";
      if (status >= 40) return "bg-primary-50 dark:bg-[#172036]";
      if (status >= 20) return "bg-purple-50 dark:bg-[#172036]";
      return "bg-secondary-50 dark:bg-[#172036]";
    };

    // Determine status bar color
    const getStatusBarColor = (status: number) => {
      if (status >= 80) return "bg-danger-500";
      if (status >= 60) return "bg-success-500";
      if (status >= 40) return "bg-primary-500";
      if (status >= 20) return "bg-purple-500";
      return "bg-secondary-500";
    };

    return {
      isActive,
      toggleActive,
      teamMembers,
      getStatusBarBg,
      getStatusBarColor,
    };
  },
});
</script>
