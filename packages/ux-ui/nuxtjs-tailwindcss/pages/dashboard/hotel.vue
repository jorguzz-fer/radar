<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardHotelStats />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
        <DashboardHotelRoomsAvailabiliityChart />

        <DashboardHotelGuestActivityChart />
      </div>

      <DashboardHotelUpcomingVIPReservations />
    </div>
    <div class="lg:col-span-1">
      <DashboardHotelRecentBookings />
    </div>
  </div>

  <DashboardHotelPopularRooms />

  <DashboardHotelCustomerReviews />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HotelPage",
});
</script>
