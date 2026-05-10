<template>
  <DashboardHRMWelcomeBack />

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <DashboardHRMTotalEmployees />

    <DashboardHRMResignedEmployees />

    <DashboardHRMNewEmployees />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-2">
      <DashboardHRMEmployeeAttendanceTrendsChart />
    </div>
    <div class="lg:col-span-1">
      <DashboardHRMEmployeeWorkFormatChart />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <DashboardHRMEmployeeSalaryChart />
    </div>
    <div class="lg:col-span-2">
      <DashboardHRMEmployeeLeaveRequest />
    </div>
  </div>

  <DashboardHRMEmployeeList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HRMPage",
});
</script>
