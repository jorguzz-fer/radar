<template>
  <div>
    <FrontPagesCommonNavbar />
    <FrontPagesCommonPageTitle pageTitle="Frequently Asked Questions" />
    <FrontPagesCommonFAQ />
    <FrontPagesCommonCTA />
    <FrontPagesCommonFooter />
    <FrontPagesCommonLightDarkModeBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FAQPage",
});
</script>
