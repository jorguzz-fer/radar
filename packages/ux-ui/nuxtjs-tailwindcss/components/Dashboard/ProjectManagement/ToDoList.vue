<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">To Do List</h5>
      </div>
      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <form class="relative sm:w-[265px]">
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2"
          >
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
      </div>
    </div>

    <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                <div class="form-check relative top-[2px]">
                  <input
                    type="checkbox"
                    class="cursor-pointer"
                    :checked="allSelected"
                    @change="toggleSelectAll"
                  />
                </div>
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                ID
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Task Title
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Assigned To
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Due Date
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Priority
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Status
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="task in filteredTasks" :key="task.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="form-check relative top-[2px]">
                  <input
                    type="checkbox"
                    class="cursor-pointer"
                    v-model="task.selected"
                    @change="updateSelectAll"
                  />
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  #{{ task.id }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="block font-medium text-gray-500 dark:text-gray-400"
                >
                  {{ task.title }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                {{ task.assignedTo }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 distance-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  {{ task.dueDate }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  {{ task.priority }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  :class="{
                    'bg-primary-50 dark:bg-[#15203c] text-primary-500':
                      task.status === 'Finished',
                    'bg-warning-50 dark:bg-[#15203c] text-warning-500':
                      task.status === 'Pending',
                    'bg-success-50 dark:bg-[#15203c] text-success-500':
                      task.status === 'In Progress',
                    'bg-danger-50 dark:bg-[#15203c] text-danger-500':
                      task.status === 'Cancelled',
                  }"
                  class="px-[8px] py-[3px] inline-block rounded-sm font-medium text-xs"
                >
                  {{ task.status }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    v-tooltip="'View'"
                    @click="viewTask(task)"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    v-tooltip="'Edit'"
                    @click="editTask(task)"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                    @click="deleteTask(task)"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="px-[25px] pt-[12px] md:pt-[15px] ltr:text-right rtl:text-left"
      >
        <button
          type="button"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          @click="stateStoreInstance.taskModal"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add New Task
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import stateStore from "@/utils/store";

interface Task {
  id: number;
  title: string;
  assignedTo: string;
  dueDate: string;
  priority: string;
  status: string;
  selected: boolean;
}

export default defineComponent({
  name: "ToDoList",
  setup() {
    const stateStoreInstance = stateStore;

    const tasks = ref<Task[]>([
      {
        id: 854,
        title: "Network Infrastructure",
        assignedTo: "Oliver Clark",
        dueDate: "30 Apr 2025",
        priority: "High",
        status: "Finished",
        selected: false,
      },
      {
        id: 853,
        title: "Cloud Migration",
        assignedTo: "Ethan Baker",
        dueDate: "25 Apr 2025",
        priority: "Low",
        status: "Pending",
        selected: false,
      },
      {
        id: 852,
        title: "Website Revamp",
        assignedTo: "Sophia Carter",
        dueDate: "20 Apr 2025",
        priority: "Medium",
        status: "In Progress",
        selected: false,
      },
      {
        id: 851,
        title: "Mobile Application",
        assignedTo: "Ava Cooper",
        dueDate: "15 Apr 2025",
        priority: "High",
        status: "Finished",
        selected: false,
      },
      {
        id: 850,
        title: "System Deployment",
        assignedTo: "Isabella Evans",
        dueDate: "10 Apr 2025",
        priority: "Low",
        status: "Cancelled",
        selected: false,
      },
    ]);

    // Reactive search query
    const searchQuery = ref("");

    // Computed property for filtered tasks based on search query
    const filteredTasks = computed(() => {
      if (!searchQuery.value) return tasks.value;
      const query = searchQuery.value.toLowerCase();
      return tasks.value.filter(
        (task) =>
          task.title.toLowerCase().includes(query) ||
          task.assignedTo.toLowerCase().includes(query) ||
          task.status.toLowerCase().includes(query)
      );
    });

    // Computed property to check if all tasks are selected
    const allSelected = computed(() => {
      return (
        filteredTasks.value.length > 0 &&
        filteredTasks.value.every((task) => task.selected)
      );
    });

    // Toggle select all tasks
    const toggleSelectAll = () => {
      const selectAll = !allSelected.value;
      tasks.value.forEach((task) => {
        task.selected = selectAll;
      });
    };

    const deleteTask = (task: Task) => {
      tasks.value = tasks.value.filter((t) => t.id !== task.id);
      console.log("Deleted task:", task);
    };

    return {
      tasks,
      searchQuery,
      filteredTasks,
      allSelected,
      toggleSelectAll,
      deleteTask,
      stateStoreInstance,
    };
  },
});
</script>
