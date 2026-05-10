<template>
  <CommonPageTitle pageTitle="Deals" subTitle="CRM" />

  <PagesCRMDeals />
  <PagesCRMDealsAddNewDealPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DealsPage",
});
</script>
