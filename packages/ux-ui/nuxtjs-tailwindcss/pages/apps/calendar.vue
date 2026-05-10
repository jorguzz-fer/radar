<template>
  <CommonPageTitle pageTitle="Calendar" subTitle="Apps" />

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <AppsCalendarContent />
    </div>
    <div class="lg:col-span-1">
      <AppsCalendarWorkingSchedule />
    </div>
  </div>
  <AppsCalendarAddEventModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CalendarPage",
});
</script>
