<template>
  <div class="2xl:grid 2xl:grid-cols-2 gap-[25px]">
    <WelcomeBack />

    <div>
      <div class="sm:grid sm:grid-cols-3 gap-[25px]">
        <TotalProjects />

        <TotalOrders />

        <TotalRevenue />
      </div>
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 2xl:grid-cols-4 gap-[25px]">
    <div class="lg:col-span-1">
      <ProfileIntro />

      <ProfileInformation />

      <AdditionalInformation />
    </div>

    <div class="lg:col-span-2 2xl:col-span-3">
      <ProjectsAnalysisChart />

      <ToDoList />

      <RecentActivity />
    </div>
  </div>
</template>

<script>
import WelcomeBack from "./WelcomeBack.vue";
import TotalProjects from "./TotalProjects.vue";
import TotalOrders from "./TotalOrders.vue";
import TotalRevenue from "./TotalRevenue.vue";
import ProfileIntro from "./ProfileIntro.vue";
import ProfileInformation from "./ProfileInformation.vue";
import AdditionalInformation from "./AdditionalInformation.vue";
import ProjectsAnalysisChart from "./ProjectsAnalysisChart.vue";
import ToDoList from "./ToDoList.vue";
import RecentActivity from "./RecentActivity.vue";

export default {
  name: "MyProfile",
  components: {
    WelcomeBack,
    TotalProjects,
    TotalOrders,
    TotalRevenue,
    ProfileIntro,
    ProfileInformation,
    AdditionalInformation,
    ProjectsAnalysisChart,
    ToDoList,
    RecentActivity,
  },
};
</script>
