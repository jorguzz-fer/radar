<template>
  <ProfileCard />

  <ul class="mb-[25px] text-center">
    <li
      class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
    >
      <NuxtLink
        to="/profile/user-profile"
        class="block py-[8.5px] px-[15px] font-medium rounded-md text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
      >
        Profile
      </NuxtLink>
    </li>
    <li
      class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
    >
      <NuxtLink
        to="/profile/teams"
        class="block py-[8.5px] px-[15px] font-medium rounded-md text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
      >
        Teams
      </NuxtLink>
    </li>
    <li
      class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
    >
      <NuxtLink
        to="/profile/projects"
        class="block py-[8.5px] px-[15px] font-medium rounded-md text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
      >
        Projects
      </NuxtLink>
    </li>
  </ul>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <AboutMe />
    </div>

    <div class="lg:col-span-1">
      <Followers />
    </div>
  </div>

  <MyProjects />
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
import AboutMe from "./AboutMe.vue";
import Followers from "./Followers.vue";
import MyProjects from "./MyProjects.vue";

export default {
  name: "UserProfile",
  components: {
    ProfileCard,
    AboutMe,
    Followers,
    MyProjects,
  },
};
</script>

<style lang="scss" scoped>
ul {
  li {
    a {
      &.active {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity, 1));
        --tw-bg-opacity: 1;
        background-color: rgb(96 93 255 / var(--tw-bg-opacity, 1));
      }
    }
  }
}
</style>
