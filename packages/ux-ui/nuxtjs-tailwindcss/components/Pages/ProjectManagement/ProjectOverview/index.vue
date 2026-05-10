<template>
  <div class="lg:grid xl:grid-cols-2 gap-[25px]">
    <div>
      <ThemeDevelopment />

      <RecentActivity />
    </div>
    <div>
      <ProjectRoadmapChart />

      <ProjectsOverview />

      <TeamMembers />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <ToDoList />
    </div>
    <div class="lg:col-span-1">
      <TasksOverviewChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThemeDevelopment from "./ThemeDevelopment.vue";
import RecentActivity from "./RecentActivity.vue";
import ProjectRoadmapChart from "./ProjectRoadmapChart.vue";
import ProjectsOverview from "./ProjectsOverview.vue";
import TeamMembers from "./TeamMembers.vue";
import ToDoList from "./ToDoList.vue";
import TasksOverviewChart from "./TasksOverviewChart.vue";

export default defineComponent({
  name: "ProjectOverview",
  components: {
    ThemeDevelopment,
    RecentActivity,
    ProjectRoadmapChart,
    ProjectsOverview,
    TeamMembers,
    ToDoList,
    TasksOverviewChart,
  },
});
</script>
