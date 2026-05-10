<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Upcoming VIP Reservations</h5>
      </div>

      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md bg-[#f5f7f8] dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-100 dark:hover:bg-dark': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Monthly
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"
              ></i>
            </span>
          </button>

          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
          >
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Weekly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Monthly
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Yearly
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
                v-for="header in headers"
                :key="header"
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[10px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                {{ header }}
              </th>
            </tr>
          </thead>

          <tbody class="text-black dark:text-white">
            <tr
              v-for="reservation in paginatedReservations"
              :key="reservation.id"
            >
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  {{ reservation.code }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <a
                  href="#"
                  class="font-semibold text-black dark:text-white hover:text-primary-500 transition-all"
                >
                  {{ reservation.room }}
                </a>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-500 dark:text-gray-400"
                >
                  {{ reservation.customer }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="inline-block text-xs px-[8px] text-primary-500 bg-primary-50 dark:bg-[#15203c] py-[3px] font-medium rounded-[4px]"
                >
                  {{
                    formatDateRange(reservation.startDate, reservation.endDate)
                  }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[10px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    data-text="View"
                  >
                    <i class="material-symbols-outlined !text-md">visibility</i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    data-text="Edit"
                  >
                    <i class="material-symbols-outlined !text-md">edit</i>
                  </button>
                  <button
                    type="button"
                    @click="deleteReservation(reservation)"
                    class="text-danger-500 leading-none custom-tooltip"
                    data-text="Delete"
                  >
                    <i class="material-symbols-outlined !text-md">delete</i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pt-[10px] sm:flex sm:items-center justify-between">
        <p class="!mb-0 text-xs">
          Showing {{ showingStart }}-{{ showingEnd }} of
          {{ reservations.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-current disabled:hover:border-gray-100"
            >
              <span class="opacity-0">0</span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
                >chevron_left</i
              >
            </button>
          </li>
          <li
            v-for="page in totalPages"
            :key="page"
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              @click="goToPage(page)"
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
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-current disabled:hover:border-gray-100"
            >
              <span class="opacity-0">0</span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
                >chevron_right</i
              >
            </button>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

interface Reservation {
  id: number;
  code: string;
  room: string;
  customer: string;
  startDate: Date;
  endDate: Date;
  status: "confirmed" | "pending" | "cancelled";
}

export default defineComponent({
  name: "UpcomingVIPReservations",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    // Table headers
    const headers = ["Code", "Room", "Customer", "Duration", ""];

    // Sample reservations data
    const reservations = ref<Reservation[]>([
      {
        id: 1,
        code: "TRZ-32",
        room: "Deluxe Room - G - 3215",
        customer: "Angela Carter",
        startDate: new Date(2023, 11, 10),
        endDate: new Date(2023, 11, 15),
        status: "confirmed",
      },
      {
        id: 2,
        code: "TRZ-34",
        room: "Sweet Suite - S - 1265",
        customer: "Walter White",
        startDate: new Date(2023, 11, 12),
        endDate: new Date(2023, 11, 16),
        status: "confirmed",
      },
      {
        id: 3,
        code: "TRZ-42",
        room: "The Queensland - Q32",
        customer: "Zennifer Loren",
        startDate: new Date(2023, 11, 15),
        endDate: new Date(2023, 11, 20),
        status: "confirmed",
      },
      {
        id: 4,
        code: "TRZ-15",
        room: "Sweet Suite - S - 3214",
        customer: "Johna Mandala",
        startDate: new Date(2023, 11, 11),
        endDate: new Date(2023, 11, 14),
        status: "pending",
      },
      {
        id: 5,
        code: "TRZ-29",
        room: "Deluxe Room - F - 7213",
        customer: "Viktor James",
        startDate: new Date(2023, 11, 10),
        endDate: new Date(2023, 11, 15),
        status: "confirmed",
      },
      {
        id: 6,
        code: "TRZ-45",
        room: "Presidential Suite - P - 1001",
        customer: "Michael Scott",
        startDate: new Date(2023, 11, 18),
        endDate: new Date(2023, 11, 25),
        status: "confirmed",
      },
      {
        id: 7,
        code: "TRZ-22",
        room: "Ocean View - O - 2105",
        customer: "Pam Beesly",
        startDate: new Date(2023, 11, 8),
        endDate: new Date(2023, 11, 12),
        status: "confirmed",
      },
      {
        id: 8,
        code: "TRZ-42",
        room: "The Queensland - Q32",
        customer: "Zennifer Loren",
        startDate: new Date(2023, 11, 15),
        endDate: new Date(2023, 11, 20),
        status: "confirmed",
      },
      {
        id: 9,
        code: "TRZ-15",
        room: "Sweet Suite - S - 3214",
        customer: "Johna Mandala",
        startDate: new Date(2023, 11, 11),
        endDate: new Date(2023, 11, 14),
        status: "pending",
      },
      {
        id: 10,
        code: "TRZ-29",
        room: "Deluxe Room - F - 7213",
        customer: "Viktor James",
        startDate: new Date(2023, 11, 10),
        endDate: new Date(2023, 11, 15),
        status: "confirmed",
      },
    ]);

    // Pagination
    const itemsPerPage = 5;
    const currentPage = ref(1);

    const totalPages = computed(() =>
      Math.ceil(reservations.value.length / itemsPerPage)
    );
    const paginatedReservations = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return reservations.value.slice(start, end);
    });

    const showingStart = computed(
      () => (currentPage.value - 1) * itemsPerPage + 1
    );
    const showingEnd = computed(() =>
      Math.min(currentPage.value * itemsPerPage, reservations.value.length)
    );

    const formatDateRange = (startDate: Date, endDate: Date) => {
      const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
      };
      return `${startDate.toLocaleDateString(
        "en-US",
        options
      )} - ${endDate.toLocaleDateString("en-US", options)}`;
    };

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const deleteReservation = (reservation: Reservation) => {
      console.log("Delete reservation:", reservation);
      // Implement delete functionality
      const index = reservations.value.findIndex(
        (r: { id: number }) => r.id === reservation.id
      );
      if (index !== -1) {
        reservations.value.splice(index, 1);
      }
    };

    return {
      isActive,
      toggleActive,
      headers,
      reservations,
      paginatedReservations,
      currentPage,
      totalPages,
      showingStart,
      showingEnd,
      formatDateRange,
      prevPage,
      nextPage,
      goToPage,
      deleteReservation,
    };
  },
});
</script>
