<template>
  <div>
    <div class="2xl:grid 2xl:grid-cols-2 gap-[25px]">
      <DashboardLMSWelcomeDashboard />

      <div class="sm:grid sm:grid-cols-3 gap-[25px]">
        <DashboardLMSTotalCourses />

        <DashboardLMSTotalEnrolled />

        <DashboardLMSTotalMentors />
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-5 gap-[25px]">
      <div class="lg:col-span-3">
        <DashboardLMSStudentsInterestedTopicsChart />
      </div>
      <div class="lg:col-span-2">
        <DashboardLMSTopInstructors />
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <DashboardLMSStudentsProgress />

      <DashboardLMSGroupLessons />

      <DashboardLMSEnrolledByCountries />
    </div>

    <DashboardLMSCourses />

    <div class="lg:grid lg:grid-cols-3 gap-[25px]">
      <DashboardLMSCoursesSalesChart />

      <DashboardLMSTimeSpentChart />

      <DashboardLMSOurTopCourses />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LMSPage",
});
</script>
