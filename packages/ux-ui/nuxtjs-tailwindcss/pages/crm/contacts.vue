<template>
  <CommonPageTitle pageTitle="Contacts" subTitle="CRM" />
  <PagesCRMContacts />
  <PagesCRMContactsAddNewContactPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CRMContactsPage",
});
</script>
