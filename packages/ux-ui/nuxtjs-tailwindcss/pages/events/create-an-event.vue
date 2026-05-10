<template>
  <CommonPageTitle pageTitle="Create An Event" subTitle="Events" />

  <CreateAnEvent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import CreateAnEvent from "@/components/Pages/Events/CreateAnEvent/index.vue";

export default defineComponent({
  name: "EventDetailsPage",
  components: {
    PageTitle,
    CreateAnEvent,
  },
});
</script>
