<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
    <div class="lg:col-span-1">
      <PersonalInformation />

      <div
        class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
      >
        <div class="trezo-card-content flex items-center gap-[15px]">
          <img src="@/assets/images/icons/email.svg" alt="email" />
          <div>
            <span class="block"> Email </span>
            <h5 class="!mb-0 !font-semibold !text-md mt-[4px]">
              walter32@gmail.com
            </h5>
          </div>
        </div>
      </div>

      <div
        class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
      >
        <div class="trezo-card-content flex items-center gap-[15px]">
          <img src="@/assets/images/icons/call9.svg" alt="call" />
          <div>
            <span class="block"> Phone No </span>
            <h5 class="!mb-0 !font-semibold !text-md mt-[4px]">
              +1 444 266 5599
            </h5>
          </div>
        </div>
      </div>

      <div
        class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
      >
        <div class="trezo-card-content flex items-center gap-[15px]">
          <img src="@/assets/images/icons/map.svg" alt="map" />
          <div>
            <span class="block"> Address </span>
            <h5 class="!mb-0 !font-semibold !text-md mt-[4px]">
              S. Arrowhead Court Branford9
            </h5>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-2">
      <DiseaseHistory />

      <NoteForPatient />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PersonalInformation from "./PersonalInformation.vue";
import DiseaseHistory from "./DiseaseHistory.vue";
import NoteForPatient from "./NoteForPatient.vue";

export default defineComponent({
  name: "PatientDetails",
  components: {
    PersonalInformation,
    DiseaseHistory,
    NoteForPatient,
  },
});
</script>
