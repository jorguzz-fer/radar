<template>
  <CommonPageTitle pageTitle="Applications" subTitle="File Manager" />

  <div class="lg:grid lg:grid-cols-4 gap-[25px]">
    <div class="lg:col-span-1">
      <AppsFileManagerSidebar />
    </div>
    <div class="lg:col-span-3">
      <AppsFileManagerApplications />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ApplicationsPage",
});
</script>
