<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Recent Clients</h5>
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
      <ul>
        <li
          v-for="client in clients"
          :key="client.id"
          class="relative flex items-center gap-[12px] py-[10.5px] border-b first:border-t border-primary-50 dark:border-[#172036]"
        >
          <div class="relative ltr:pr-[2px] rtl:pl-[2px] pb-[2px]">
            <img
              :src="client.avatar"
              :alt="`${client.name}-image`"
              class="rounded-full w-[35px]"
            />
            <span
              class="absolute ltr:right-0 rtl:left-0 bottom-0 w-[12px] h-[12px] rounded-full"
              :class="client.online ? 'bg-success-500' : 'bg-gray-400'"
              :style="{
                border: '1px solid',
                borderColor: client.online ? 'white' : '#0c1427',
              }"
            ></span>
          </div>
          <div>
            <span class="block font-semibold text-gray-900 dark:text-gray-400">
              {{ client.name }}
            </span>
            <span class="block text-xs mt-[3px]">{{ client.profession }}</span>
          </div>
          <a
            href="#"
            class="absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 text-lg inline-block transition-all hover:text-primary-500"
          >
            <i class="ri-arrow-right-line"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/users/user48.jpg";
import image2 from "@/assets/images/users/user37.jpg";
import image3 from "@/assets/images/users/user38.jpg";
import image4 from "@/assets/images/users/user39.jpg";
import image5 from "@/assets/images/users/user40.jpg";
import image6 from "@/assets/images/users/user42.jpg";

interface Client {
  id: number;
  name: string;
  profession: string;
  avatar: string;
  online: boolean;
}

export default defineComponent({
  name: "RecentClients",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const clients = ref<Client[]>([
      {
        id: 1,
        name: "Johhna Loren",
        profession: "Doctor",
        avatar: image1,
        online: true,
      },
      {
        id: 2,
        name: "Zinia Watson",
        profession: "Lawyer",
        avatar: image2,
        online: true,
      },
      {
        id: 3,
        name: "Angela Carter",
        profession: "Businesswoman",
        avatar: image3,
        online: true,
      },
      {
        id: 4,
        name: "Skyler White",
        profession: "Enterpreuner",
        avatar: image4,
        online: false,
      },
      {
        id: 5,
        name: "Jane Ronan",
        profession: "Editor",
        avatar: image5,
        online: true,
      },
      {
        id: 6,
        name: "Viktor James",
        profession: "Businessman",
        avatar: image6,
        online: false,
      },
    ]);

    return {
      isActive,
      toggleActive,
      clients,
    };
  },
});
</script>
