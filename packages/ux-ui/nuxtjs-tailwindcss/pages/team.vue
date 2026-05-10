<template>
  <div>
    <FrontPagesCommonNavbar />
    <FrontPagesCommonPageTitle pageTitle="Our Team" />
    <div class="pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[150px]">
      <FrontPagesCommonOurTeam />
    </div>
    <FrontPagesCommonCTA />
    <FrontPagesCommonFooter />
    <FrontPagesCommonLightDarkModeBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurTeamPage",
});
</script>
