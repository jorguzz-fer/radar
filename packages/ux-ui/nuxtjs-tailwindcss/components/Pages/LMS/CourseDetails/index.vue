<template>
  <Course />

  <TablesOfContent />

  <div class="lg:grid lg:grid-cols-5 gap-[25px]">
    <div class="lg:col-span-3">
      <CourseInstructor />
    </div>
    <div class="lg:col-span-2">
      <EnrolledStudents />
    </div>
  </div>

  <Ratings />

  <ManageReviews />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Course from "./Course.vue";
import TablesOfContent from "./TablesOfContent.vue";
import CourseInstructor from "./CourseInstructor.vue";
import EnrolledStudents from "./EnrolledStudents.vue";
import Ratings from "./Ratings.vue";
import ManageReviews from "./ManageReviews.vue";

export default defineComponent({
  name: "CourseDetails",
  components: {
    Course,
    TablesOfContent,
    CourseInstructor,
    EnrolledStudents,
    Ratings,
    ManageReviews,
  },
});
</script>
