<template>
  <div>
    <FrontPagesCommonNavbar />
    <FrontPagesCommonPageTitle pageTitle="Contact Us" />
    <FrontPagesCommonContactUs />
    <FrontPagesCommonCTA />
    <FrontPagesCommonFooter />
    <FrontPagesCommonLightDarkModeBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactPage",
});
</script>
