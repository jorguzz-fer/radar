<template>
  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardHospitalYourScheduleToday />

      <div class="sm:grid sm:grid-cols-2 gap-[25px]">
        <DashboardHospitalOverallVisitorsChart />
        <DashboardHospitalPatientsChart />
      </div>
    </div>
    <div class="lg:col-span-3">
      <DashboardHospitalPatientAdmissionsDischargesChart />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardHospitalEmergencyRoomVisitsChart />
    </div>
    <div class="lg:col-span-3">
      <div class="lg:grid lg:grid-cols-3 gap-[25px]">
        <div class="lg:col-span-1">
          <DashboardHospitalCriticalPatientsChart />
        </div>
        <div class="lg:col-span-2">
          <DashboardHospitalBedOccupancyRateChart />
        </div>
      </div>
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-2">
      <DashboardHospitalPatientAppointments />
    </div>
    <div class="lg:col-span-1">
      <DashboardHospitalScheduleAppointment />
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 gap-[25px]">
    <div class="lg:col-span-1">
      <DashboardHospitalPatientByAgeChart />
    </div>
    <div class="lg:col-span-2">
      <DashboardHospitalEarnings />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HospitalPage",
});
</script>
