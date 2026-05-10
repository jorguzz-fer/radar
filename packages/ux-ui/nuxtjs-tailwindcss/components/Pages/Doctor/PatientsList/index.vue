<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <form class="relative sm:w-[265px]">
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2"
          >
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
            @input="filterPatients"
          />
        </form>
      </div>

      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <NuxtLink
          to="/doctor/add-patient"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add New Patient
          </span>
        </NuxtLink>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                v-for="header in headers"
                :key="header.key"
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[12.5px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                {{ header.label }}
              </th>
            </tr>
          </thead>

          <tbody class="text-black dark:text-white">
            <tr v-for="patient in paginatedPatients" :key="patient.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="form-check relative top-[1.2px]">
                    <input
                      type="checkbox"
                      class="cursor-pointer"
                      v-model="selectedPatients"
                      :value="patient.id"
                    />
                  </div>
                  <span
                    class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                  >
                    {{ patient.code }}
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[35px]">
                    <img
                      :src="patient.image"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <span class="font-semibold inline-block">
                    {{ patient.name }}
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span class="block text-xs font-semibold text-primary-500">
                  {{ patient.email }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-500 dark:text-gray-400"
                >
                  {{ patient.phone }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-500 dark:text-gray-400"
                >
                  {{ patient.disease }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-500 dark:text-gray-400"
                >
                  {{ formatDate(patient.appointmentDate) }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    data-text="View"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Edit"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    @click="deletePatient(patient.id)"
                    data-text="Delete"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pt-[12.5px] sm:flex sm:items-center justify-between">
        <p class="!mb-0 text-xs">
          Showing {{ showingFrom }} to {{ showingTo }} of
          {{ filteredPatients.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              :disabled="currentPage === 1"
              @click="changePage(currentPage - 1)"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500 disabled:opacity-50"
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
              @click="changePage(page)"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              :class="{
                'border-primary-500 bg-primary-500 text-white':
                  currentPage === page,
                'border-gray-100 dark:border-[#172036]': currentPage !== page,
              }"
            >
              {{ page }}
            </button>
          </li>
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              :disabled="currentPage === totalPages"
              @click="changePage(currentPage + 1)"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500 disabled:opacity-50"
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
import { defineComponent } from "vue";

import image1 from "@/assets/images/users/user33.jpg";
import image2 from "@/assets/images/users/user34.jpg";
import image3 from "@/assets/images/users/user35.jpg";
import image4 from "@/assets/images/users/user36.jpg";
import image5 from "@/assets/images/users/user37.jpg";

interface Patient {
  id: number;
  image: string;
  code: string;
  name: string;
  email: string;
  phone: string;
  disease: string;
  appointmentDate: string | Date;
}

export default defineComponent({
  name: "PatientsList",
  data() {
    return {
      searchQuery: "",
      selectedPatients: [] as number[],
      currentPage: 1,
      itemsPerPage: 10,
      headers: [
        { key: "code", label: "Code" },
        { key: "patient", label: "Patient" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone No." },
        { key: "disease", label: "Disease" },
        { key: "appointmentDate", label: "Appoint. Date" },
        { key: "actions", label: "Action" },
      ],
      patients: [
        {
          id: 1,
          code: "#001",
          image: image1,
          name: "Johhna Loren",
          email: "lorenjohna@gmail.com",
          phone: "+1 555-225-4488",
          disease: "Heart Attack",
          appointmentDate: "05 Nov, 2025",
        },
        {
          id: 2,
          code: "#002",
          image: image2,
          name: "Skyler White",
          email: "skylerwhite@gmail.com",
          phone: "+1 555-123-4567",
          disease: "HBP",
          appointmentDate: "04 Nov, 2025",
        },
        {
          id: 3,
          code: "#003",
          image: image3,
          name: "Jonathon Watson",
          email: "jonathonwatson@gmail.com",
          phone: "+1 555-987-6543",
          disease: "Chest Pain",
          appointmentDate: "03 Nov, 2025",
        },
        {
          id: 4,
          code: "#004",
          image: image4,
          name: "Walter White",
          email: "walterwhite@gmail.com",
          phone: "+1 555-456-7890",
          disease: "Breathing Problem",
          appointmentDate: "03 Nov, 2025",
        },
        {
          id: 5,
          code: "#005",
          image: image5,
          name: "David Carlen",
          email: "davidcarlen@gmail.com",
          phone: "+1 555-369-7878",
          disease: "Minor Heart Attack",
          appointmentDate: "02 Nov, 2025",
        },
        {
          id: 6,
          code: "#006",
          image: image3,
          name: "Jenny Loren",
          email: "jennyloren@gmail.com",
          phone: "+1 555-658-4488",
          disease: "Artery Blockage",
          appointmentDate: "02 Nov, 2025",
        },
        {
          id: 7,
          code: "#007",
          image: image4,
          name: "Bradly Smith",
          email: "bradlysmith@gmail.com",
          phone: "+1 555-558-9966",
          disease: "Chest Pain",
          appointmentDate: "01 Nov, 2025",
        },
        {
          id: 8,
          code: "#008",
          image: image5,
          name: "Victor James",
          email: "victorjames@gmail.com",
          phone: "+1 555-357-5888",
          disease: "Heart Attack",
          appointmentDate: "01 Nov, 2025",
        },
        {
          id: 9,
          code: "#009",
          image: image1,
          name: "Jenny Carla",
          email: "jennycarla@gmail.com",
          phone: "+1 555-456-8877",
          disease: "Breathing Problem",
          appointmentDate: "01 Nov, 2025",
        },
        {
          id: 10,
          code: "#010",
          image: image2,
          name: "Jane Ronan",
          email: "janeronan@gmail.com",
          phone: "+1 555-622-4488",
          disease: "HBP",
          appointmentDate: "30 Oct, 2025",
        },
        {
          id: 11,
          code: "#006",
          image: image3,
          name: "Jenny Loren",
          email: "jennyloren@gmail.com",
          phone: "+1 555-658-4488",
          disease: "Artery Blockage",
          appointmentDate: "02 Nov, 2025",
        },
        {
          id: 12,
          code: "#007",
          image: image4,
          name: "Bradly Smith",
          email: "bradlysmith@gmail.com",
          phone: "+1 555-558-9966",
          disease: "Chest Pain",
          appointmentDate: "01 Nov, 2025",
        },
        {
          id: 13,
          code: "#008",
          image: image5,
          name: "Victor James",
          email: "victorjames@gmail.com",
          phone: "+1 555-357-5888",
          disease: "Heart Attack",
          appointmentDate: "01 Nov, 2025",
        },
      ] as unknown as Patient[],
    };
  },
  computed: {
    filteredPatients(): Patient[] {
      if (!this.searchQuery) return this.patients;

      const query = this.searchQuery.toLowerCase();
      return this.patients.filter(
        (patient) =>
          patient.name.toLowerCase().includes(query) ||
          patient.email.toLowerCase().includes(query) ||
          patient.phone.toLowerCase().includes(query) ||
          patient.disease.toLowerCase().includes(query) ||
          patient.code.toLowerCase().includes(query)
      );
    },
    paginatedPatients(): Patient[] {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredPatients.slice(start, end);
    },
    totalPages(): number {
      return Math.ceil(this.filteredPatients.length / this.itemsPerPage);
    },
    showingFrom(): number {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    showingTo(): number {
      const end = this.currentPage * this.itemsPerPage;
      return end > this.filteredPatients.length
        ? this.filteredPatients.length
        : end;
    },
  },
  methods: {
    filterPatients() {
      // Reset to first page when searching
      this.currentPage = 1;
    },
    changePage(page: number) {
      this.currentPage = page;
    },
    formatDate(date: string | Date): string {
      // Implement date formatting logic
      return new Date(date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },

    deletePatient(id: number) {
      console.log(`Delete patient ${id}`);
      this.patients = this.patients.filter((patient) => patient.id !== id);
    },
  },
});
</script>
