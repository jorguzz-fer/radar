<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Responsive Images</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <img
        src="@/assets/images/profile-cover.jpg"
        class="inline-block"
        alt="img-fluid"
      />
    </div>
  </div>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Aligning Images</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <img
        src="@/assets/images/200.jpg"
        class="rounded-md inline-block"
        alt="image"
      />
    </div>
  </div>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <div class="text-center">
        <img
          src="@/assets/images/200.jpg"
          class="rounded-md inline-block"
          alt="image"
        />
      </div>
    </div>
  </div>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <div class="ltr:text-right rtl:text-left">
        <img
          src="@/assets/images/200.jpg"
          class="rounded-md inline-block"
          alt="image"
        />
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Picture</h5>
        </div>
      </div>
      <div class="trezo-card-content">
        <picture>
          <source
            media="(min-width: 650px)"
            srcset="@/assets/images/courses/course1.jpg"
          />
          <source
            media="(min-width: 465px)"
            srcset="@/assets/images/courses/course2.jpg"
          />
          <img
            src="@/assets/images/courses/course3.jpg"
            class="img-fluid"
            alt="image"
          />
        </picture>
      </div>
    </div>
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
    >
      <div
        class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
      >
        <div class="trezo-card-title">
          <h5 class="!mb-0">Image Thumbnails</h5>
        </div>
      </div>
      <div class="trezo-card-content">
        <img
          src="@/assets/images/200.jpg"
          class="inline-block p-[.25rem] border border-gray-100 rounded-md dark:border-[#172036]"
          alt="img-thumbnail"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Images",
});
</script>
