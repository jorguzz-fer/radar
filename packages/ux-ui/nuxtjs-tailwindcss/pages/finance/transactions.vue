<template>
  <CommonPageTitle pageTitle="Transaction" subTitle="Finance" />

  <PagesFinanceTransaction />
  <PagesFinanceTransactionAddNewTransactionModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TransactionPage",
});
</script>
