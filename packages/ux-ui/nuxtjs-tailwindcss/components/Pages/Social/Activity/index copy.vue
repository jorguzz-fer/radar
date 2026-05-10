<template>
  <div class="lg:grid 2xl:grid-cols-4 gap-[25px]">
    <div class="2xl:col-span-3">
      <ProfileCard />

      <ul class="mb-[25px] text-center">
        <li
          class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
        >
          <NuxtLink
            to="/social/profile"
            class="block py-[8.5px] px-[15px] font-medium rounded-md text-white bg-primary-500 border border-primary-500"
          >
            Timeline
          </NuxtLink>
        </li>
        <li
          class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
        >
          <NuxtLink
            to="/social/about"
            class="block py-[8.5px] px-[15px] font-medium rounded-md text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          >
            About
          </NuxtLink>
        </li>
        <li
          class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
        >
          <NuxtLink
            to="/social/activity"
            class="block py-[8.5px] px-[15px] font-medium rounded-md text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          >
            Activity
          </NuxtLink>
        </li>
      </ul>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div class="lg:col-span-1 order-2 lg:order-1">
          <Friends />
        </div>
        <div class="lg:col-span-2 order-1 lg:order-2">
          <CreatePost />

          <Timeline />
        </div>
      </div>
    </div>
    <div class="2xl:col-span-1">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
        <div class="2xl:col-span-2">
          <ProfileIntro />
        </div>
        <div class="2xl:col-span-2">
          <Followers />
        </div>
        <div class="2xl:col-span-2">
          <Following />
        </div>
        <div class="2xl:col-span-2">
          <Photos />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProfileCard from "./ProfileCard.vue";
import Friends from "./Friends.vue";
import CreatePost from "./CreatePost.vue";
import Timeline from "./Timeline.vue";
import ProfileIntro from "./ProfileIntro.vue";
import Followers from "./Followers.vue";
import Following from "./Following.vue";
import Photos from "./Photos.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Profile",
  components: {
    ProfileCard,
    Friends,
    CreatePost,
    Timeline,
    ProfileIntro,
    Followers,
    Following,
    Photos,
  },
});
</script>
