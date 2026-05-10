<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">All Projects</h5>
      </div>
      <div class="trezo-card-subtitle flex items-center gap-4">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Search projects..."
          class="border border-gray-200 rounded-md px-3 py-2 dark:bg-dark dark:border-[#172036] dark:text-white"
        />
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
              This Day
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
              ></i>
            </span>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
            v-show="isActive"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Day
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Week
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Month
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                This Year
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
                v-for="header in tableHeaders"
                :key="header"
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="project in paginatedProjects" :key="project.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  #{{ project.id }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <NuxtLink
                  to="/project-management/project-overview"
                  class="inline-block font-medium transition-all text-gray-500 dark:text-gray-400 hover:text-primary-500"
                >
                  {{ project.name }}
                </NuxtLink>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                {{ project.client }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center">
                  <div
                    v-for="(assignee, index) in project.assignees.slice(0, 3)"
                    :key="index"
                    class="w-[34px] h-[34px] rounded-full ltr:-mr-[13px] rtl:-ml-[13px] border border-white"
                  >
                    <img
                      :alt="`user-${index}-image`"
                      class="rounded-full"
                      :src="assignee.avatar"
                    />
                  </div>
                  <div
                    v-if="project.assignees.length > 3"
                    class="w-[34px] h-[34px] text-xs rounded-full border border-white bg-primary-500 text-white font-medium flex items-center justify-center"
                  >
                    +{{ project.assignees.length - 3 }}
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  ${{ project.budget.toLocaleString() }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  {{ formatDate(project.startDate) }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">
                  {{ formatDate(project.endDate) }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  :class="`px-[8px] py-[3px] inline-block ${getStatusClass(
                    project.status
                  )} rounded-sm font-medium text-xs`"
                >
                  {{ project.status }}
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
                    @click="viewProject(project.id)"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    v-tooltip="'Edit'"
                    @click="editProject(project.id)"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    v-tooltip="'Delete'"
                    @click="deleteProject(project.id)"
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
        class="pt-[12px] md:pt-[14px] sm:flex sm:items-center justify-between px-[20px] md:px-[25px]"
      >
        <p class="!mb-0 text-sm">
          Showing {{ startItem + 1 }}-{{ endItem }} of
          {{ filteredProjects.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <!-- Previous Page Button -->
          <li
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              :class="`w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border ${
                currentPage === 1
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                  : 'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500'
              }`"
            >
              <span class="opacity-0">0</span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_left
              </i>
            </button>
          </li>

          <!-- Page Numbers -->
          <li
            v-for="page in totalPages"
            :key="page"
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              @click="goToPage(page)"
              :class="`w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md ${
                currentPage === page
                  ? 'border border-primary-500 bg-primary-500 text-white'
                  : 'border border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500'
              }`"
            >
              {{ page }}
            </button>
          </li>

          <!-- Next Page Button -->
          <li
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              :class="`w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border ${
                currentPage === totalPages
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                  : 'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500'
              }`"
            >
              <span class="opacity-0">0</span>
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
import { defineComponent, ref, computed } from "vue";
import Pagination from "@/components/Common/Pagination.vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image6 from "@/assets/images/users/user6.jpg";
import image7 from "@/assets/images/users/user7.jpg";
import image8 from "@/assets/images/users/user8.jpg";
import image9 from "@/assets/images/users/user9.jpg";
import image10 from "@/assets/images/users/user10.jpg";
import image11 from "@/assets/images/users/user11.jpg";
import image12 from "@/assets/images/users/user12.jpg";
import image13 from "@/assets/images/users/user13.jpg";
import image14 from "@/assets/images/users/user14.jpg";
import image15 from "@/assets/images/users/user15.jpg";

interface Assignee {
  name: string;
  avatar: string;
}

interface Project {
  id: number;
  name: string;
  client: string;
  assignees: Assignee[];
  budget: number;
  startDate: string;
  endDate: string;
  status: "Finished" | "In Progress" | "Pending";
}

export default defineComponent({
  name: "AllProjects",
  components: {
    Pagination,
  },
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    // Projects data with correct image imports
    const projects = ref<Project[]>([
      {
        id: 854,
        name: "Project CyberSphere",
        client: "NovaTech Solutions",
        assignees: [
          { name: "User 15", avatar: image15 },
          { name: "User 11", avatar: image11 },
          { name: "User 6", avatar: image6 },
          { name: "User 9", avatar: image9 },
          ...Array(10).fill({ name: "Extra User", avatar: "" }),
        ],
        budget: 4500,
        startDate: "2025-03-25",
        endDate: "2025-04-25",
        status: "Finished",
      },
      {
        id: 853,
        name: "Digital Oasis Initiative",
        client: "AlphaWave Innovations",
        assignees: [
          { name: "User 7", avatar: image7 },
          { name: "User 8", avatar: image8 },
          { name: "User 9", avatar: image9 },
          ...Array(4).fill({ name: "Extra User", avatar: "" }),
        ],
        budget: 6800,
        startDate: "2025-03-20",
        endDate: "2025-04-20",
        status: "In Progress",
      },
      {
        id: 852,
        name: "CloudScape Evolution",
        client: "InnovateIQ Inc.",
        assignees: [
          { name: "User 10", avatar: image10 },
          { name: "User 12", avatar: image12 },
          { name: "User 13", avatar: image13 },
          ...Array(7).fill({ name: "Extra User", avatar: "" }),
        ],
        budget: 2500,
        startDate: "2025-03-15",
        endDate: "2025-04-15",
        status: "Pending",
      },
      {
        id: 851,
        name: "Data Dynamo Drive",
        client: "BlueSky Technologies",
        assignees: [
          { name: "User 13", avatar: image13 },
          { name: "User 14", avatar: image14 },
          { name: "User 15", avatar: image15 },
          { name: "User 12", avatar: image12 },
          ...Array(15).fill({ name: "Extra User", avatar: "" }),
        ],
        budget: 7500,
        startDate: "2025-03-10",
        endDate: "2025-04-10",
        status: "In Progress",
      },
      {
        id: 850,
        name: "QuantumLeap Quest",
        client: "NexGen Systems",
        assignees: [
          { name: "User 7", avatar: image7 },
          { name: "User 9", avatar: image9 },
          { name: "User 6", avatar: image6 },
          ...Array(3).fill({ name: "Extra User", avatar: "" }),
        ],
        budget: 3400,
        startDate: "2025-03-05",
        endDate: "2025-04-05",
        status: "Finished",
      },
      {
        id: 852,
        name: "CloudScape Evolution",
        client: "InnovateIQ Inc.",
        assignees: [
          { name: "User 10", avatar: image10 },
          { name: "User 12", avatar: image12 },
          { name: "User 13", avatar: image13 },
          ...Array(7).fill({ name: "Extra User", avatar: "" }),
        ],
        budget: 2500,
        startDate: "2025-03-15",
        endDate: "2025-04-15",
        status: "Pending",
      },
      {
        id: 851,
        name: "Data Dynamo Drive",
        client: "BlueSky Technologies",
        assignees: [
          { name: "User 13", avatar: image13 },
          { name: "User 14", avatar: image14 },
          { name: "User 15", avatar: image15 },
          { name: "User 12", avatar: image12 },
          ...Array(15).fill({ name: "Extra User", avatar: "" }),
        ],
        budget: 7500,
        startDate: "2025-03-10",
        endDate: "2025-04-10",
        status: "In Progress",
      },
      {
        id: 850,
        name: "QuantumLeap Quest",
        client: "NexGen Systems",
        assignees: [
          { name: "User 7", avatar: image7 },
          { name: "User 9", avatar: image9 },
          { name: "User 6", avatar: image6 },
          ...Array(3).fill({ name: "Extra User", avatar: "" }),
        ],
        budget: 3400,
        startDate: "2025-03-05",
        endDate: "2025-04-05",
        status: "Finished",
      },
      {
        id: 854,
        name: "Project CyberSphere",
        client: "NovaTech Solutions",
        assignees: [
          { name: "User 15", avatar: image15 },
          { name: "User 11", avatar: image11 },
          { name: "User 6", avatar: image6 },
          { name: "User 9", avatar: image9 },
          ...Array(10).fill({ name: "Extra User", avatar: "" }),
        ],
        budget: 4500,
        startDate: "2025-03-25",
        endDate: "2025-04-25",
        status: "Finished",
      },
      {
        id: 853,
        name: "Digital Oasis Initiative",
        client: "AlphaWave Innovations",
        assignees: [
          { name: "User 7", avatar: image7 },
          { name: "User 8", avatar: image8 },
          { name: "User 9", avatar: image9 },
          ...Array(4).fill({ name: "Extra User", avatar: "" }),
        ],
        budget: 6800,
        startDate: "2025-03-20",
        endDate: "2025-04-20",
        status: "In Progress",
      },
    ]);

    // Table headers
    const tableHeaders = [
      "ID",
      "Project Name",
      "Client",
      "Assignees",
      "Budget",
      "Start Date",
      "End Date",
      "Status",
      "Action",
    ];

    // Search and pagination
    const searchTerm = ref("");
    const currentPage = ref(1);
    const itemsPerPage = ref(5);

    const totalPages = computed(() =>
      Math.ceil(filteredProjects.value.length / itemsPerPage.value)
    );

    const startItem = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endItem = computed(() =>
      Math.min(
        startItem.value + itemsPerPage.value,
        filteredProjects.value.length
      )
    );

    const filteredProjects = computed(() => {
      return projects.value.filter(
        (project) =>
          project.id
            .toString()
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          project.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          project.client
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          project.status
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          project.budget
            .toString()
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          project.startDate
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          project.endDate
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          project.assignees.some((assignee) =>
            assignee.name.toLowerCase().includes(searchTerm.value.toLowerCase())
          )
      );
    });

    const paginatedProjects = computed(() => {
      return filteredProjects.value.slice(startItem.value, endItem.value);
    });

    const formatDate = (dateString: string) => {
      const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
      };
      return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const getStatusClass = (status: string) => {
      switch (status) {
        case "Finished":
          return "bg-success-50 dark:bg-[#15203c] text-success-500";
        case "In Progress":
          return "bg-danger-50 dark:bg-[#15203c] text-danger-500";
        case "Pending":
          return "bg-purple-50 dark:bg-[#15203c] text-purple-500";
        default:
          return "";
      }
    };

    const viewProject = (id: number) => {
      console.log("View project", id);
      // Navigate to project overview or show details
    };

    const editProject = (id: number) => {
      console.log("Edit project", id);
      // Open edit modal or navigate to edit page
    };

    const deleteProject = (id: number) => {
      console.log("Delete project", id);
      projects.value = projects.value.filter((project) => project.id !== id);
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    return {
      isActive,
      toggleActive,
      tableHeaders,
      projects,
      filteredProjects,
      paginatedProjects,
      formatDate,
      getStatusClass,
      viewProject,
      editProject,
      deleteProject,
      searchTerm,
      currentPage,
      itemsPerPage,
      totalPages,
      startItem,
      endItem,
      nextPage,
      prevPage,
      goToPage,
    };
  },
});
</script>
