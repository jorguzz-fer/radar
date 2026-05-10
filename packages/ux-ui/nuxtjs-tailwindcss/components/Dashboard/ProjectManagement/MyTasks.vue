<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">My Tasks</h5>
      </div>

      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              All Tasks
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
              ></i>
            </span>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
            v-if="isActive"
          >
            <li v-for="option in dropdownOptions" :key="option">
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                @click="selectOption(option)"
              >
                {{ option }}
              </button>
            </li>
          </ul>
        </div>
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
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Project Name
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Deadline
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="task in paginatedItems" :key="task.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="form-check relative top-[2px]">
                  <input type="checkbox" class="cursor-pointer" />
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <NuxtLink
                  to="/project-management/project-overview"
                  class="font-medium transition-all hover:text-primary-500"
                >
                  {{ task.projectName }}
                </NuxtLink>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                {{ task.deadline }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  :class="getStatusClasses(task.status)"
                  class="px-[8px] py-[3px] inline-block rounded-sm font-medium text-xs"
                >
                  {{ task.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="px-[20px] md:px-[25px] pt-[12px] md:pt-[14px] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ startItem + 1 }} to {{ endItem }} of
          {{ tasks.length }} results
        </p>

        <ol class="mt-[10px] sm:mt-0 flex">
          <li
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              :class="{ disabled: currentPage === 1 }"
              @click.prevent="prevPage"
            >
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_left
              </i>
            </button>
          </li>
          <li
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <button
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click.prevent="goToPage(page)"
            >
              {{ page }}
            </button>
          </li>
          <li
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              :class="{ disabled: currentPage === totalPages }"
              @click.prevent="nextPage"
            >
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_right
              </i>
            </button>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

interface Task {
  id: number;
  projectName: string;
  deadline: string;
  status: string;
}

export default defineComponent({
  name: "MyTasks",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const dropdownOptions = ref([
      "This Day",
      "This Week",
      "This Month",
      "This Year",
    ]);
    const selectedOption = ref("All Tasks");

    // Status color mapping
    const statusStyles = {
      Completed: {
        bg: "bg-primary-50 dark:bg-[#15203c]",
        text: "text-primary-500",
      },
      "In Progress": {
        bg: "bg-success-50 dark:bg-[#15203c]",
        text: "text-success-500",
      },
      Cancelled: {
        bg: "bg-danger-50 dark:bg-[#15203c]",
        text: "text-danger-500",
      },
      Pending: {
        bg: "bg-warning-50 dark:bg-[#15203c]",
        text: "text-warning-500",
      },
    };

    // Function to get status classes based on status
    const getStatusClasses = (status: string) => {
      const styles = statusStyles[status as keyof typeof statusStyles] || {
        bg: "bg-gray-50 dark:bg-[#15203c]",
        text: "text-gray-500",
      };
      return `${styles.bg} ${styles.text}`;
    };

    const tasks = ref<Task[]>([
      {
        id: 1,
        projectName: "Web Development",
        deadline: "10 Jan 2025",
        status: "Completed",
      },
      {
        id: 2,
        projectName: "UX/UI Design",
        deadline: "05 Feb 2025",
        status: "In Progress",
      },
      {
        id: 3,
        projectName: "React Development",
        deadline: "28 Mar 2025",
        status: "Cancelled",
      },
      {
        id: 4,
        projectName: "Python Research",
        deadline: "09 Mar 2025",
        status: "Pending",
      },
      {
        id: 5,
        projectName: "React Development",
        deadline: "28 Mar 2025",
        status: "Cancelled",
      },
      {
        id: 6,
        projectName: "Python Research",
        deadline: "09 Mar 2025",
        status: "Pending",
      },
      {
        id: 7,
        projectName: "Web Development",
        deadline: "10 Jan 2025",
        status: "Completed",
      },
      {
        id: 8,
        projectName: "UX/UI Design",
        deadline: "05 Feb 2025",
        status: "In Progress",
      },
    ]);

    const selectOption = (option: string) => {
      selectedOption.value = option;
      toggleActive();
    };

    const currentPage = ref(1);
    const itemsPerPage = ref(4);

    const totalPages = computed(() =>
      Math.ceil(tasks.value.length / itemsPerPage.value)
    );

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return tasks.value.slice(start, end);
    });

    const startItem = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endItem = computed(() =>
      Math.min(currentPage.value * itemsPerPage.value, tasks.value.length)
    );

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    return {
      isActive,
      toggleActive,
      dropdownOptions,
      selectedOption,
      tasks,
      selectOption,
      currentPage,
      paginatedItems,
      totalPages,
      goToPage,
      prevPage,
      nextPage,
      startItem,
      endItem,
      getStatusClasses,
    };
  },
});
</script>

<style lang="scss" scoped>
ol {
  li {
    &.active {
      button {
        background-color: #605dff;
        color: #fff;
        border-color: #605dff;
      }
    }
  }
}
</style>
