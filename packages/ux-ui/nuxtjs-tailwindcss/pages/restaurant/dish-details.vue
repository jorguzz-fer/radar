<template>
  <CommonPageTitle pageTitle="Dish Details" subTitle="Restaurant" />

  <PagesRestaurantDishDetails />
  <PagesRestaurantDishDetailsReviews />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DishDetailsPage",
});
</script>
