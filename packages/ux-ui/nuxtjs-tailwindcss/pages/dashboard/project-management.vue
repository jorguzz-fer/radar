<template>
  <div class="2xl:grid 2xl:grid-cols-2 gap-[25px]">
    <DashboardProjectManagementProjectsOverview />

    <DashboardProjectManagementProjectsRoadmapChart />
  </div>

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-3">
      <DashboardProjectManagementProjectsProgressChart />
    </div>
    <div class="lg:col-span-2">
      <DashboardProjectManagementMyTasks />
    </div>
  </div>

  <DashboardProjectManagementAllProjects />

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <DashboardProjectManagementProjectsAnalysisChart />

    <DashboardProjectManagementTeamMembers />

    <DashboardProjectManagementWorkingSchedule />
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardProjectManagementToDoList />
    </div>
    <div class="lg:col-span-1">
      <DashboardProjectManagementTasksOverviewChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectManagementPage",
});
</script>
