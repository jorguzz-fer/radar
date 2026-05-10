<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
  >
    <div class="trezo-card-content">
      <div class="flex items-center gap-[20px] mb-[20px] md:mb-[25px]">
        <img
          src="@/assets/images/patient.jpg"
          alt="patient-image"
          class="rounded-full w-[100px]"
        />
        <div>
          <h4 class="!text-[20px] !mb-[6px]">Walter White</h4>
          <span class="block">
            Patient ID:
            <span class="text-black dark:text-white">#P-3214</span>
          </span>
        </div>
      </div>
      <h3 class="!text-lg !mb-[15px]">Personal Information</h3>
      <ul>
        <li class="mb-[12px] last:mb-0">
          Occupation:
          <span class="text-black dark:text-white">Teacher</span>
        </li>
        <li class="mb-[12px] last:mb-0">
          Age: <span class="text-black dark:text-white">65 Years</span>
        </li>
        <li class="mb-[12px] last:mb-0">
          Admitted On:
          <span class="text-black dark:text-white">21 October, 2025</span>
        </li>
        <li class="mb-[12px] last:mb-0">
          Bed No: <span class="text-black dark:text-white">L2 - 205</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PersonalInformation",
});
</script>
