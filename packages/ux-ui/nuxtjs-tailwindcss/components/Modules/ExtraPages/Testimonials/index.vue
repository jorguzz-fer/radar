<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Testimonials Style - 1</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-[25px]">
        <div
          class="bg-[#f5f7f8] dark:bg-[#15203c] rounded-md p-[20px] md:p-[25px]"
        >
          <img
            src="@/assets/images/users/user6.jpg"
            width="100"
            alt="user-image"
            class="rounded-full"
          />
          <h5 class="mt-[15px] !mb-[7px]">Sarah Johnson</h5>
          <span class="block"> Financial Manager </span>
          <div
            class="leading-none text-[#fe7a36] my-[15px] text-md flex items-center gap-[2px]"
          >
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>
          <p>
            "Statistics is the science of using data to make decisions. This is
            relevant in almost all fields of work and there are many
            opportunities for employment."
          </p>
        </div>
        <div
          class="bg-[#f5f7f8] dark:bg-[#15203c] rounded-md p-[20px] md:p-[25px]"
        >
          <img
            src="@/assets/images/users/user7.jpg"
            width="100"
            alt="user-image"
            class="rounded-full"
          />
          <h5 class="mt-[15px] !mb-[7px]">Michael Smith</h5>
          <span class="block"> Software Developer </span>
          <div
            class="leading-none text-[#fe7a36] my-[15px] text-md flex items-center gap-[2px]"
          >
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-line"></i>
          </div>
          <p>
            "Statistics is the science of using data to make decisions. This is
            relevant in almost all fields of work and there are many
            opportunities for employment."
          </p>
        </div>
        <div
          class="bg-[#f5f7f8] dark:bg-[#15203c] rounded-md p-[20px] md:p-[25px]"
        >
          <img
            src="@/assets/images/users/user8.jpg"
            width="100"
            alt="user-image"
            class="rounded-full"
          />
          <h5 class="mt-[15px] !mb-[7px]">Emily Brown</h5>
          <span class="block"> Web Developer </span>
          <div
            class="leading-none text-[#fe7a36] my-[15px] text-md flex items-center gap-[2px]"
          >
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-line"></i>
          </div>
          <p>
            "Statistics is the science of using data to make decisions. This is
            relevant in almost all fields of work and there are many
            opportunities for employment."
          </p>
        </div>
      </div>
    </div>
  </div>

  <TestimonialsStyleTwo />

  <TestimonialsStyleThree />

  <TestimonialsStyleFour />

  <TestimonialsStyleFive />

  <TestimonialsStyleSix />

  <TestimonialsStyleSeven />

  <TestimonialsStyleEight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TestimonialsStyleTwo from "./TestimonialsStyleTwo.vue";
import TestimonialsStyleThree from "./TestimonialsStyleThree.vue";
import TestimonialsStyleFour from "./TestimonialsStyleFour.vue";
import TestimonialsStyleFive from "./TestimonialsStyleFive.vue";
import TestimonialsStyleSix from "./TestimonialsStyleSix.vue";
import TestimonialsStyleSeven from "./TestimonialsStyleSeven.vue";
import TestimonialsStyleEight from "./TestimonialsStyleEight.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Testimonials",
  components: {
    TestimonialsStyleTwo,
    TestimonialsStyleThree,
    TestimonialsStyleFour,
    TestimonialsStyleFive,
    TestimonialsStyleSix,
    TestimonialsStyleSeven,
    TestimonialsStyleEight,
  },
});
</script>
