<template>
  <CommonPageTitle pageTitle="Users" subTitle="Project Management" />

  <PagesProjectManagementUsers />
  <PagesProjectManagementUsersAddNewUserPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserPage",
});
</script>
