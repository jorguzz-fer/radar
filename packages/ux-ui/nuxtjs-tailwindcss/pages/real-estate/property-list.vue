<template>
  <CommonPageTitle pageTitle="Property List" subTitle="Real Estate" />

  <PagesRealEstatePropertyListAddProperty />
  <PagesRealEstatePropertyList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PropertyListPage",
});
</script>
