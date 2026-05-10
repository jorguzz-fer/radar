<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content">
      <video controls class="rounded-md w-full h-auto">
        <source
          src="@/assets/images/video.mp4"
          class="rounded-full"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h4 class="mt-[20px] md:mt-[25px] mb-[10px] text-lg md:text-xl">
        Introduction to Cybersecurity
      </h4>
      <p>
        Node.js for Beginners: Alias animi labque, deserunt distinctio eum
        excepturi fuga iure labore magni molestias mollitia natus, officia pofro
        quis sunt temporibus veritatis voluptatem voluptatum.
      </p>
      <a
        href="#"
        class="inline-block font-medium rounded-md md:text-md py-[12px] px-[22px] bg-primary-500 text-white transition-all hover:bg-primary-400"
      >
        Next Tutorial
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LessonPreview",
});
</script>
