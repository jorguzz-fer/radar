<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Quill Editor</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <TextEditor class="h-[180px]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextEditor from "@/components/Common/TextEditor.vue";

export default defineComponent({
  name: "RichTextEditor",
  components: {
    TextEditor,
  },
});
</script>
