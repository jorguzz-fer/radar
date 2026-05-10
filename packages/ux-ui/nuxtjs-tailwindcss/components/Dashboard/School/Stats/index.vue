<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] relative rounded-md"
  >
    <div class="trezo-card-content">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-[25px]">
        <TotalStudents />

        <TotalTeachers />

        <AttendanceToday />
      </div>
    </div>
    <div
      class="w-[1px] absolute top-0 bottom-0 bg-gray-100 dark:bg-[#172036] left-[33.3333333333%] -translate-x-[33.3333333333%] hidden sm:block"
    ></div>
    <div
      class="w-[1px] absolute top-0 bottom-0 bg-gray-100 dark:bg-[#172036] right-[33.3333333333%] translate-x-[33.3333333333%] hidden sm:block"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TotalStudents from "./TotalStudents.vue";
import TotalTeachers from "./TotalTeachers.vue";
import AttendanceToday from "./AttendanceToday.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Stats",
  components: {
    TotalStudents,
    TotalTeachers,
    AttendanceToday,
  },
});
</script>
