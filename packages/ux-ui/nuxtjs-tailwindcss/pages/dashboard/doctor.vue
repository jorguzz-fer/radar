<template>
  <div>
    <DashboardDoctorWelcomeDoctor />

    <div
      class="lg:px-[30px] 2xl:px-[80px] mt-[25px] lg:-mt-[25px] relative z-[1]"
    >
      <DashboardDoctorStats />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div class="lg:col-span-2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-[25px] mb-[25px]">
            <DashboardDoctorPatientRetentionChart />

            <DashboardDoctorPatientDistributionChart />
          </div>

          <DashboardDoctorUpgradePlan />

          <DashboardDoctorIncomeExpenseChart />
        </div>
        <div class="lg:col-span-1">
          <DashboardDoctorTodaysSchedule />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mb-[25px]">
        <div class="lg:col-span-3">
          <DashboardDoctorMyRecentPatients />
        </div>
        <div class="lg:col-span-1">
          <DashboardDoctorRecentLabReports />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DoctorPage",
});
</script>
