<template>
  <form>
    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <div class="lg:col-span-2">
        <BillingInformation />
      </div>
      <div class="lg:col-span-1">
        <YourOrder />

        <PaymentMethod />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BillingInformation from "./BillingInformation.vue";
import YourOrder from "./YourOrder.vue";
import PaymentMethod from "./PaymentMethod.vue";

export default defineComponent({
  name: "CreateOrder",
  components: {
    BillingInformation,
    YourOrder,
    PaymentMethod,
  },
});
</script>
