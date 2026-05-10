<template>
  <DashboardSchoolOverview />

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardSchoolStats />
    </div>
    <div class="lg:col-span-1">
      <DashboardSchoolUpcomingEvents />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardSchoolAttendanceAnalyticsChart />
    </div>
    <div class="lg:col-span-1">
      <DashboardSchoolTeachers />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <DashboardSchoolStudentsOverviewChart />

    <DashboardSchoolNewAdmissionsChart />

    <DashboardSchoolNoticeBoard />
  </div>

  <DashboardSchoolStudentsList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SchoolPage",
});
</script>
