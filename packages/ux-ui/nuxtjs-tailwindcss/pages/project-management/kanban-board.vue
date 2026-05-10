<template>
  <CommonPageTitle pageTitle="Kanban Board" subTitle="Apps" />

  <PagesProjectManagementKanbanBoard />
  <PagesProjectManagementKanbanBoardAddNewContactPopup />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "KanbanBoardsPage",
});
</script>
