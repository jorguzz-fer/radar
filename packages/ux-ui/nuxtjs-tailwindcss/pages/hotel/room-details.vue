<template>
  <CommonPageTitle pageTitle="Room Details" subTitle="Hotel" />

  <PagesHotelRoomDetails />
  <PagesHotelRoomDetailsReviews />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RoomDetailsPage",
});
</script>
