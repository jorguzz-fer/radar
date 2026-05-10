<template>
  <div
    class="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-[25px] lg:gap-[25px]"
  >
    <RevenueGrowthChart />

    <LeadConversionChart />

    <TotalOrdersChart />

    <AnnualProfitChart />
  </div>

  <div
    class="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-[25px] lg:gap-[25px]"
  >
    <TicketsResolvedChart />

    <TicketsInProgressChart />

    <TicketsDueChart />

    <TicketsNewOpenChart />
  </div>

  <div class="2xl:grid 2xl:grid-cols-2 gap-[25px]">
    <WelcomeBack />

    <div class="sm:grid sm:grid-cols-3 gap-[25px]">
      <TotalCourses />
      <TotalEnrolled />
      <TotalMentors />
    </div>
  </div>

  <div class="md:grid md:grid-cols-3 gap-[25px]">
    <TotalOrdersChartTwo />

    <TotalCustomersChart />

    <TotalRevenueChart />
  </div>

  <div class="2xl:grid 2xl:grid-cols-2 gap-[25px]">
    <ProjectsOverview />

    <ProjectsRoadmapChart />
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <CoursesSalesChart />

    <TimeSpentChart />

    <OurTopCourses />
  </div>
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <ProjectsAnalysisChart />
    <TeamMembers />
    <WorkingSchedule />
  </div>
</template>

<script>
import RevenueGrowthChart from "./RevenueGrowthChart.vue";
import LeadConversionChart from "./LeadConversionChart.vue";
import TotalOrdersChart from "./TotalOrdersChart.vue";
import AnnualProfitChart from "./AnnualProfitChart.vue";
import TicketsResolvedChart from "./TicketsResolvedChart.vue";
import TicketsInProgressChart from "./TicketsInProgressChart.vue";
import TicketsDueChart from "./TicketsDueChart.vue";
import TicketsNewOpenChart from "./TicketsNewOpenChart.vue";
import WelcomeBack from "./WelcomeBack.vue";
import TotalCourses from "./TotalCourses.vue";
import TotalEnrolled from "./TotalEnrolled.vue";
import TotalMentors from "./TotalMentors.vue";
import TotalOrdersChartTwo from "./TotalOrdersChartTwo.vue";
import TotalCustomersChart from "./TotalCustomersChart.vue";
import TotalRevenueChart from "./TotalRevenueChart.vue";
import ProjectsOverview from "./ProjectsOverview.vue";
import ProjectsRoadmapChart from "./ProjectsRoadmapChart.vue";
import CoursesSalesChart from "./CoursesSalesChart.vue";
import TimeSpentChart from "./TimeSpentChart.vue";
import OurTopCourses from "./OurTopCourses.vue";
import ProjectsAnalysisChart from "./ProjectsAnalysisChart.vue";
import TeamMembers from "./TeamMembers.vue";
import WorkingSchedule from "./WorkingSchedule.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Widgets",
  components: {
    RevenueGrowthChart,
    LeadConversionChart,
    TotalOrdersChart,
    AnnualProfitChart,
    TicketsResolvedChart,
    TicketsInProgressChart,
    TicketsDueChart,
    TicketsNewOpenChart,
    WelcomeBack,
    TotalCourses,
    TotalEnrolled,
    TotalMentors,
    TotalOrdersChartTwo,
    TotalCustomersChart,
    TotalRevenueChart,
    ProjectsOverview,
    ProjectsRoadmapChart,
    CoursesSalesChart,
    TimeSpentChart,
    OurTopCourses,
    ProjectsAnalysisChart,
    TeamMembers,
    WorkingSchedule,
  },
};
</script>
