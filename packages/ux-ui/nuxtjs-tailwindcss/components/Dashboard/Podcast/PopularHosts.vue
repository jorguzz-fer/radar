<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-header mb-[20px] flex items-center justify-between">
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Popular Hosts</h5>
      </div>
      <div class="trezo-card-subtitle">
        <a
          href="#"
          class="inline-block relative ltr:pr-[13px] rtl:pl-[13px] leading-none transition-all hover:text-primary-500"
        >
          View All
          <i
            class="ri-arrow-right-s-line absolute top-1/2 -translate-y-1/2 ltr:-right-[8px] rtl:-left-[8px] text-[23px] -mt-px"
          ></i>
        </a>
      </div>
    </div>
    <div
      class="trezo-card-content -mx-[20px] md:-mx-[25px] -mb-[19px] md:-mb-[23px]"
    >
      <div
        class="table-responsive overflow-x-auto -mt-[9px] pb-[19px] md:pb-[23px]"
      >
        <table class="w-full without-top-bottom-border">
          <tbody class="text-black dark:text-white">
            <tr v-for="host in hosts" :key="host.id">
              <td
                class="ltr:text-left rtl:text-right ltr:last:text-right rtl:last:text-left whitespace-nowrap px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] md:ltr:last:pr-[25px] md:rtl:last:pl-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      :src="host.avatar"
                      class="inline-block rounded-full"
                      :alt="host.name"
                    />
                  </div>
                  <div>
                    <span class="font-medium inline-block mb-px">
                      {{ host.name }}
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      {{ host.category }}
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right ltr:last:text-right rtl:last:text-left whitespace-nowrap px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] md:ltr:last:pr-[25px] md:rtl:last:pl-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="font-medium inline-block mb-px">
                  {{ host.hostedCount }}
                </span>
                <span class="block text-gray-500 dark:text-gray-400 text-xs">
                  Hosted
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right ltr:last:text-right rtl:last:text-left whitespace-nowrap px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] md:ltr:last:pr-[25px] md:rtl:last:pl-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <button
                  type="button"
                  @click="toggleFollow(host.id)"
                  :class="{
                    'inline-block rounded-md py-[3.5px] px-[9.5px] transition-all hover:bg-primary-500 hover:text-white': true,
                    'text-primary-500 bg-primary-50 dark:bg-dark':
                      !host.isFollowing,
                    'text-white bg-primary-500': host.isFollowing,
                  }"
                >
                  {{ host.isFollowing ? "Following" : "Follow" }}
                </button>
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

import image1 from "@/assets/images/users/user54.jpg";
import image2 from "@/assets/images/users/user53.jpg";
import image3 from "@/assets/images/users/user55.jpg";
import image4 from "@/assets/images/users/user41.jpg";
import image5 from "@/assets/images/users/user43.jpg";

interface Host {
  id: number;
  name: string;
  avatar: string;
  category: string;
  hostedCount: number;
  isFollowing: boolean;
}

export default defineComponent({
  name: "PopularHosts",
  setup() {
    const hosts = ref<Host[]>([
      {
        id: 1,
        name: "Sarah W.",
        avatar: image1,
        category: "Marketing",
        hostedCount: 25,
        isFollowing: false,
      },
      {
        id: 2,
        name: "Tom R.",
        avatar: image2,
        category: "Blogging",
        hostedCount: 30,
        isFollowing: false,
      },
      {
        id: 3,
        name: "Amanda G.",
        avatar: image3,
        category: "Branding",
        hostedCount: 28,
        isFollowing: true,
      },
      {
        id: 4,
        name: "Lisa Kim",
        avatar: image4,
        category: "Storytelling",
        hostedCount: 20,
        isFollowing: false,
      },
      {
        id: 5,
        name: "David C.",
        avatar: image5,
        category: "Social Media",
        hostedCount: 18,
        isFollowing: false,
      },
    ]);

    const toggleFollow = (id: number) => {
      hosts.value = hosts.value.map((host) => {
        if (host.id === id) {
          return {
            ...host,
            isFollowing: !host.isFollowing,
          };
        }
        return host;
      });
    };

    return {
      hosts,
      toggleFollow,
    };
  },
});
</script>
