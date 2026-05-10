<template>
  <div>
    <FrontPagesCommonNavbar />
    <FrontPagesCommonPageTitle pageTitle="Features" />
    <FrontPagesCommonKeyFeatures />
    <FrontPagesCommonOurTeam />
    <FrontPagesCommonCTA />
    <FrontPagesCommonFooter />
    <FrontPagesCommonLightDarkModeBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeaturesPage",
});
</script>
