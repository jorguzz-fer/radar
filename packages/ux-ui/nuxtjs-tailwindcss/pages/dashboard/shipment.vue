<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
      <DashboardShipmentTotalIncome />

      <DashboardShipmentTotalShipment />

      <DashboardShipmentTotalCustomer />

      <DashboardShipmentTotalOrder />
    </div>

    <DashboardShipmentDeliveredChart />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[25px] mb-[25px]"
      >
        <DashboardShipmentAverageDeliveryTimeChart />

        <DashboardShipmentLiveShipmentStatusChart />
      </div>

      <DashboardShipmentTrackingOrder />
    </div>
    <div class="lg:col-span-1">
      <DashboardShipmentToTopCountries />

      <DashboardShipmentChatContent />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <DashboardShipmentTopShippingMethodsChart />

    <DashboardShipmentTodaysShipmentsChart />

    <DashboardShipmentOnTimeDeliveryChart />
  </div>

  <DashboardShipmentList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShipmentPage",
});
</script>
