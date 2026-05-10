<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">My Recent Patients</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md border border-[#F5F7F8] bg-[#F5F7F8] dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              {{ selectedTimePeriod }}
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"
              ></i>
            </span>
          </button>

          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li v-for="period in timePeriods" :key="period">
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                @click="selectTimePeriod(period)"
              >
                {{ period }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[9px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                ID
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[9px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Patient Name
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[9px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Disease
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[9px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Payment Status
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[9px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                Status
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[9px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0 ltr:last:text-right rtl:last:text-left"
              ></th>
            </tr>
          </thead>

          <tbody class="text-black dark:text-white">
            <tr v-for="(patient, index) in paginatedPatients" :key="patient.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  #{{ patient.id.toString().padStart(3, "0") }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      :src="patient.avatar"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-px">
                      {{ patient.name }}
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      {{ patient.email }}
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  {{ patient.disease }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  {{ patient.paymentStatus }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <span
                  :class="`inline-block text-xs px-[9px] ${getStatusClasses(
                    patient.status
                  )} text-sm rounded-[100px]`"
                >
                  {{ patient.status }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[9.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="trezo-card-dropdown relative">
                  <button
                    type="button"
                    :class="{
                      'trezo-card-dropdown-btn inline-block transition-all text-[20px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
                      active: activeDropdown === index,
                    }"
                    :id="`dropdownToggle-${index}`"
                    @click.stop="togglePatientDropdown(index)"
                  >
                    <i class="ri-more-2-fill"></i>
                  </button>

                  <ul
                    v-if="activeDropdown === index"
                    class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
                    :class="{
                      'bottom-full mb-[5px]': isLastItem(index),
                      'top-full': !isLastItem(index),
                    }"
                  >
                    <li>
                      <button
                        type="button"
                        class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        <i class="ri-add-fill text-primary-500"></i>
                        View
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                      >
                        <i class="ri-image-line text-primary-500"></i>
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
                        @click="deletePatient(patient.id)"
                      >
                        <i class="ri-dropbox-line text-primary-500"></i>
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pt-[9px] sm:flex sm:items-center justify-between">
        <p class="!mb-0 text-xs">
          Showing {{ showingRange }} of {{ filteredPatients.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click="prevPage"
              :disabled="currentPage === 1"
            >
              <span class="opacity-0"> 0 </span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_left
              </i>
            </button>
          </li>
          <li
            v-for="page in totalPages"
            :key="page"
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              :class="`w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border ${
                currentPage === page
                  ? 'border-primary-500 bg-primary-500 text-white'
                  : 'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500'
              }`"
              @click="goToPage(page)"
            >
              {{ page }}
            </button>
          </li>
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click="nextPage"
              :disabled="currentPage === totalPages"
            >
              <span class="opacity-0"> 0 </span>
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
import {
  defineComponent,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/users/user33.jpg";
import image2 from "@/assets/images/users/user34.jpg";
import image3 from "@/assets/images/users/user35.jpg";
import image4 from "@/assets/images/users/user36.jpg";
import image5 from "@/assets/images/users/user37.jpg";

interface Patient {
  id: number;
  name: string;
  email: string;
  avatar: string;
  disease: string;
  paymentStatus: string;
  status: string;
  date: Date;
}

export default defineComponent({
  name: "MyRecentPatients",
  setup() {
    // const isActive = ref(false);
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    // const toggleActive = () => {
    //   isActive.value = !isActive.value;
    // };

    const patients = ref<Patient[]>([
      {
        id: 1,
        name: "Johhna Loren",
        email: "loren123@gmail.com",
        avatar: image1,
        disease: "Heart Attack",
        paymentStatus: "Paid",
        status: "Completed",
        date: new Date(),
      },
      {
        id: 2,
        name: "Skyler White",
        email: "skyqueen@gmail.com",
        avatar: image2,
        disease: "Chest Pain",
        paymentStatus: "Paid",
        status: "Pending",
        date: new Date(Date.now() - 86400000),
      },
      {
        id: 3,
        name: "Jonathon Watson",
        email: "jona2134@gmail.com",
        avatar: image3,
        disease: "Breathing Issue",
        paymentStatus: "Unpaid",
        status: "Failed",
        date: new Date(Date.now() - 172800000),
      },
      {
        id: 4,
        name: "Walter White",
        email: "puzzleworld@gmail.com",
        avatar: image4,
        disease: "Heart Surgery",
        paymentStatus: "Paid",
        status: "Completed",
        date: new Date(Date.now() - 259200000),
      },
      {
        id: 5,
        name: "David Carlen",
        email: "liveslong@gmail.com",
        avatar: image5,
        disease: "CVD",
        paymentStatus: "Unpaid",
        status: "Pending",
        date: new Date(Date.now() - 345600000),
      },
      {
        id: 6,
        name: "Walter White",
        email: "puzzleworld@gmail.com",
        avatar: image4,
        disease: "Heart Surgery",
        paymentStatus: "Paid",
        status: "Completed",
        date: new Date(Date.now() - 259200000),
      },
      {
        id: 7,
        name: "David Carlen",
        email: "liveslong@gmail.com",
        avatar: image5,
        disease: "CVD",
        paymentStatus: "Unpaid",
        status: "Pending",
        date: new Date(Date.now() - 345600000),
      },
      {
        id: 8,
        name: "Johhna Loren",
        email: "loren123@gmail.com",
        avatar: image1,
        disease: "Heart Attack",
        paymentStatus: "Paid",
        status: "Completed",
        date: new Date(),
      },
      {
        id: 9,
        name: "Skyler White",
        email: "skyqueen@gmail.com",
        avatar: image2,
        disease: "Chest Pain",
        paymentStatus: "Paid",
        status: "Pending",
        date: new Date(Date.now() - 86400000),
      },
      {
        id: 10,
        name: "Jonathon Watson",
        email: "jona2134@gmail.com",
        avatar: image3,
        disease: "Breathing Issue",
        paymentStatus: "Unpaid",
        status: "Failed",
        date: new Date(Date.now() - 172800000),
      },
    ]);

    // Time period filter
    const timePeriods = ["This Day", "This Week", "This Month", "This Year"];
    const selectedTimePeriod = ref("This Month");
    const showTimePeriodDropdown = ref(false);

    // Pagination
    const itemsPerPage = 5;
    const currentPage = ref(1);

    // Dropdown management
    const activeDropdown = ref<number | null>(null); // Added missing ref

    // Filter patients based on selected time period
    const filteredPatients = computed(() => {
      const now = new Date();
      let startDate: Date;

      switch (selectedTimePeriod.value) {
        case "This Day":
          startDate = new Date(now.setHours(0, 0, 0, 0));
          break;
        case "This Week":
          const day = now.getDay();
          const diff = now.getDate() - day + (day === 0 ? -6 : 1);
          startDate = new Date(now.setDate(diff));
          startDate.setHours(0, 0, 0, 0);
          break;
        case "This Month":
          startDate = new Date(now.getFullYear(), now.getMonth(), 1);
          break;
        case "This Year":
          startDate = new Date(now.getFullYear(), 0, 1);
          break;
        default:
          return patients.value;
      }

      return patients.value.filter(
        (patient: { date: Date }) =>
          patient.date >= startDate && patient.date <= new Date()
      );
    });

    // Pagination calculations
    const totalPages = computed(() =>
      Math.ceil(filteredPatients.value.length / itemsPerPage)
    );

    const paginatedPatients = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredPatients.value.slice(start, end);
    });

    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage,
        filteredPatients.value.length
      );
      return `${start}-${end}`;
    });

    // Methods
    const toggleTimePeriodDropdown = () => {
      showTimePeriodDropdown.value = !showTimePeriodDropdown.value;
      if (showTimePeriodDropdown.value) {
        activeDropdown.value = null;
      }
    };

    const selectTimePeriod = (period: string) => {
      selectedTimePeriod.value = period;
      showTimePeriodDropdown.value = false;
      currentPage.value = 1;
    };

    const togglePatientDropdown = (patientId: number) => {
      activeDropdown.value =
        activeDropdown.value === patientId ? null : patientId;
      if (activeDropdown.value !== null) {
        showTimePeriodDropdown.value = false;
      }
    };

    const isLastItem = (index: number) => {
      return index === paginatedPatients.value.length - 1;
    };

    const getStatusClasses = (status: string) => {
      switch (status) {
        case "Completed":
          return "text-success-700 border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c]";
        case "Pending":
          return "text-purple-700 border-purple-300 bg-purple-100 dark:bg-[#15203c] dark:border-[#15203c]";
        case "Failed":
          return "text-danger-700 border-danger-300 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c]";
        default:
          return "";
      }
    };

    // Pagination methods
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

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const deletePatient = (patientId: number) => {
      patients.value = patients.value.filter(
        (p: { id: number }) => p.id !== patientId
      );
      activeDropdown.value = null;
      if (paginatedPatients.value.length === 0 && currentPage.value > 1) {
        currentPage.value--;
      }
    };

    // Click outside handler
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".trezo-card-dropdown")) {
        showTimePeriodDropdown.value = false;
        activeDropdown.value = null;
      }
    };

    // Event listeners
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      isActive,
      toggleActive,
      patients,
      timePeriods,
      selectedTimePeriod,
      showTimePeriodDropdown,
      activeDropdown,
      filteredPatients,
      paginatedPatients,
      currentPage,
      totalPages,
      showingRange,
      toggleTimePeriodDropdown,
      selectTimePeriod,
      togglePatientDropdown,
      isLastItem,
      getStatusClasses,
      prevPage,
      nextPage,
      goToPage,
      deletePatient,
    };
  },
});
</script>
