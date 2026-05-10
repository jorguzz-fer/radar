<template>
  <CommonPageTitle pageTitle="Categories" subTitle="eCommerce" />
  <PagesEcommerceCategories />
  <PagesEcommerceCategoriesAddNewCategoryPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoriesPage",
});
</script>
