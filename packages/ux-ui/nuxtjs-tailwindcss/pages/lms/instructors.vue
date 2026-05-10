<template>
  <CommonPageTitle pageTitle="Instructors" subTitle="LMS" />

  <PagesLMSInstructors />
  <PagesLMSInstructorsAddNewInstructorPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InstructorsPage",
});
</script>
