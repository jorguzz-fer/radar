<template>
  <SellerOverview />

  <div class="lg:grid lg:grid-cols-4 gap-[25px]">
    <div class="lg:col-span-1">
      <SellerID />
    </div>
    <div class="lg:col-span-3">
      <RevenueChart />
    </div>
  </div>

  <ProductsList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SellerOverview from "./SellerOverview.vue";
import SellerID from "./SellerID.vue";
import RevenueChart from "./RevenueChart.vue";
import ProductsList from "./ProductsList.vue";

export default defineComponent({
  name: "SellerDetails",
  components: {
    SellerOverview,
    SellerID,
    RevenueChart,
    ProductsList,
  },
});
</script>
