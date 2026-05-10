<template>
  <DataTable />

  <!-- Tables -->
  <div class="lg:grid lg:grid-cols-2 gap-[25px]" id="clickToSeeCode">
    <TopSellingProducts />

    <RecentOrders />
  </div>
  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <TopPerformers />
    </div>
    <div class="lg:col-span-2">
      <RecentLeads />
    </div>
  </div>

  <AllProjects />

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <MyTasks />

    <StudentsProgress />

    <GroupLessons />
  </div>

  <PerformanceOfAgents />

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-2">
      <RecentCustomerRatings />
    </div>
    <div class="lg:col-span-3">
      <ToDoList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataTable from "./DataTable.vue";
import TopSellingProducts from "./TopSellingProducts.vue";
import RecentOrders from "./RecentOrders.vue";
import TopPerformers from "./TopPerformers.vue";
import RecentLeads from "./RecentLeads.vue";
import AllProjects from "./AllProjects.vue";
import MyTasks from "./MyTasks.vue";
import StudentsProgress from "./StudentsProgress.vue";
import GroupLessons from "./GroupLessons.vue";
import PerformanceOfAgents from "./PerformanceOfAgents.vue";
import RecentCustomerRatings from "./RecentCustomerRatings.vue";
import ToDoList from "./ToDoList.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tables",
  components: {
    DataTable,
    TopSellingProducts,
    RecentOrders,
    TopPerformers,
    RecentLeads,
    AllProjects,
    MyTasks,
    StudentsProgress,
    GroupLessons,
    PerformanceOfAgents,
    RecentCustomerRatings,
    ToDoList,
  },
});
</script>
