<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <BasicAlerts />
    <BGBasicAlerts />
    <AlertsWithIcon />
    <BGAlertsWithIcon />
    <OutlineAlerts />
    <DismissingAlerts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasicAlerts from "./BasicAlerts.vue";
import BGBasicAlerts from "./BGBasicAlerts.vue";
import AlertsWithIcon from "./AlertsWithIcon.vue";
import BGAlertsWithIcon from "./BGAlertsWithIcon.vue";
import OutlineAlerts from "./OutlineAlerts.vue";
import DismissingAlerts from "./DismissingAlerts.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Alerts",
  components: {
    BasicAlerts,
    BGBasicAlerts,
    AlertsWithIcon,
    BGAlertsWithIcon,
    OutlineAlerts,
    DismissingAlerts,
  },
});
</script>
