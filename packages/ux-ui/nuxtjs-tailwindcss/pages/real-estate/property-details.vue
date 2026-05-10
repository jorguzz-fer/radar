<template>
  <CommonPageTitle pageTitle="Property List" subTitle="Real Estate" />

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <PagesRealEstatePropertyDetails />
    </div>

    <div class="lg:col-span-1">
      <PagesRealEstatePropertyDetailsOwner />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PropertyDetailsPage",
});
</script>
