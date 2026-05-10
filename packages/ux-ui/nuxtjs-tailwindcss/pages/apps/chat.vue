<template>
  <CommonPageTitle pageTitle="Chat" subTitle="Apps" />
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <AppsChatSidebar />
    </div>
    <div class="lg:col-span-2">
      <AppsChat />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatPage",
});
</script>
