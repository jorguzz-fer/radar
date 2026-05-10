<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <!-- Header -->
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Student's Progress</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative" ref="dropdownRef">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all text-[26px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <i class="ri-more-fill"></i>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
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

    <!-- Table -->
    <div class="trezo-card-content -mx-[20px] md:-mx-[25px]">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium text-left px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Name
              </th>
              <th
                class="font-medium text-left px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Course Name
              </th>
              <th
                class="font-medium text-left px-[20px] py-[11px] bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="student in paginatedStudents" :key="student.id">
              <td
                class="text-left whitespace-nowrap px-[20px] py-[13px] border-b border-gray-100 dark:border-[#172036] font-medium"
              >
                {{ student.name }}
              </td>
              <td
                class="text-left whitespace-nowrap px-[20px] py-[13px] border-b border-gray-100 dark:border-[#172036]"
              >
                <span class="text-gray-500 dark:text-gray-400">{{
                  student.course
                }}</span>
              </td>
              <td
                class="text-left whitespace-nowrap px-[20px] py-[13px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div
                  class="flex w-full h-[4px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036]"
                >
                  <div
                    class="flex flex-col justify-center overflow-hidden rounded-md"
                    :class="getColorClass(student)"
                    :style="{ width: student.progress + '%' }"
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div
        class="flex items-center justify-between mt-[17px] px-[20px] md:px-[25px] pt-[12px] md:pt-[14px]"
      >
        <p class="!mb-0 text-sm">
          Items per page: <strong>{{ itemsPerPage }}</strong>
        </p>
        <div class="flex items-center">
          <p class="!mb-0 text-sm">
            {{ (currentPage - 1) * itemsPerPage + 1 }} –
            {{ Math.min(currentPage * itemsPerPage, students.length) }} of
            {{ students.length }}
          </p>
          <ol class="ltr:ml-[10px] rtl:mr-[10px]">
            <li
              class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            >
              <button
                @click="prevPage"
                :disabled="currentPage === 1"
                class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              >
                <i
                  class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
                >
                  chevron_left
                </i>
              </button>
            </li>
            <li
              class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            >
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

interface Student {
  id: number;
  name: string;
  course: string;
  progress: number;
  lastActive: Date;
}

export default defineComponent({
  name: "StudentsProgress",
  setup() {
    const dropdownRef = ref<HTMLElement | null>(null);
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const students = ref<Student[]>([
      {
        id: 1,
        name: "Olivia Clark",
        course: "Web Design",
        progress: 65,
        lastActive: new Date(),
      },
      {
        id: 2,
        name: "Alexander Garcia",
        course: "Python Dev",
        progress: 85,
        lastActive: new Date(),
      },
      {
        id: 3,
        name: "Chloe Lewis",
        course: "Front-end",
        progress: 45,
        lastActive: new Date(),
      },
      {
        id: 4,
        name: "Ava Turner",
        course: "Back-end",
        progress: 29,
        lastActive: new Date(),
      },
      {
        id: 5,
        name: "Ryan Flores",
        course: "Data Analytics",
        progress: 70,
        lastActive: new Date(),
      },
      {
        id: 6,
        name: "John Doe",
        course: "Plugin Dev",
        progress: 50,
        lastActive: new Date(),
      },
      {
        id: 7,
        name: "Jane Smith",
        course: "Mobile App",
        progress: 65,
        lastActive: new Date(),
      },
      {
        id: 8,
        name: "Michael Brown",
        course: "UI/UX",
        progress: 40,
        lastActive: new Date(),
      },
      {
        id: 9,
        name: "Emily Davis",
        course: "DevOps",
        progress: 75,
        lastActive: new Date(),
      },
      {
        id: 10,
        name: "David Wilson",
        course: "Cloud Computing",
        progress: 60,
        lastActive: new Date(),
      },
      {
        id: 11,
        name: "Ava Turner",
        course: "Back-end",
        progress: 90,
        lastActive: new Date(2023, 5, 12),
      },
      {
        id: 12,
        name: "Ryan Flores",
        course: "Data Analytics",
        progress: 50,
        lastActive: new Date(2023, 5, 11),
      },
    ]);

    const currentPage = ref(1);
    const itemsPerPage = ref(6);

    const getColorClass = (student: { color: any; progress: number }) => {
      if (student.progress >= 85) return "bg-success-500";
      if (student.progress >= 65) return "bg-primary-500";
      if (student.progress >= 45) return "bg-purple-500";
      if (student.progress >= 30) return "bg-warning-500";
      return "bg-danger-500";
    };

    const totalPages = computed(() =>
      Math.ceil(students.value.length / itemsPerPage.value)
    );

    const paginatedStudents = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      return students.value.slice(start, start + itemsPerPage.value);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    return {
      dropdownRef,
      isActive,
      toggleActive,
      students,
      currentPage,
      getColorClass,
      itemsPerPage,
      totalPages,
      paginatedStudents,
      nextPage,
      prevPage,
    };
  },
});
</script>
