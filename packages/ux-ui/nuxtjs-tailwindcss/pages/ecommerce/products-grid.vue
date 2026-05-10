<template>
  <CommonPageTitle pageTitle="Products Grid" subTitle="eCommerce" />
  <PagesEcommerceProductsGridProductsFilter />
  <PagesEcommerceProductsGrid />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductsGridPage",
});
</script>
