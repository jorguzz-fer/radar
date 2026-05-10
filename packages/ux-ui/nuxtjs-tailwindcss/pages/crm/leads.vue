<template>
  <CommonPageTitle pageTitle="Leads" subTitle="CRM" />

  <PagesCRMLeads />
  <PagesCRMLeadsAddNewLeadPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LeadsPage",
});
</script>
