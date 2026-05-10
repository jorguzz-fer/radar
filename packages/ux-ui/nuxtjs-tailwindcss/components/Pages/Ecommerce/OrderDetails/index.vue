<template>
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <TrackingID />

      <RecentOrders />
    </div>

    <div class="lg:col-span-1">
      <OrderSummary />
    </div>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[25px]"
  >
    <BillingDetails />

    <ShippingDetails />

    <DeliveryDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TrackingID from "./TrackingID.vue";
import RecentOrders from "./RecentOrders.vue";
import OrderSummary from "./OrderSummary.vue";
import BillingDetails from "./BillingDetails.vue";
import ShippingDetails from "./ShippingDetails.vue";
import DeliveryDetails from "./DeliveryDetails.vue";

export default defineComponent({
  name: "OrderDetails",
  components: {
    TrackingID,
    RecentOrders,
    OrderSummary,
    BillingDetails,
    ShippingDetails,
    DeliveryDetails,
  },
});
</script>
