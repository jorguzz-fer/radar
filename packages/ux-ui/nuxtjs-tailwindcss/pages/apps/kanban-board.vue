<template>
  <CommonPageTitle pageTitle="Kanban Board" subTitle="Apps" />
  <AppsKanbanBoard />
  <AppsKanbanBoardAddNewCardPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "KanbanBoardPage",
});
</script>
