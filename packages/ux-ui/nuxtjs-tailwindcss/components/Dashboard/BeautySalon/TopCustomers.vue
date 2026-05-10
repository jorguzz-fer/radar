<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Top Customers</h5>
      </div>

      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md border border-[#f5f7f8] bg-[#f5f7f8] dark:bg-[#0a0e19] py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
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
    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                v-for="header in headers"
                :key="header"
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[11px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="customer in paginatedCustomers" :key="customer.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  #{{ customer.id.toString().padStart(3, "0") }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      :src="customer.avatar"
                      class="inline-block rounded-full"
                      alt="user-image"
                    />
                  </div>
                  <span class="font-semibold inline-block">{{
                    customer.name
                  }}</span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  {{ customer.phone }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span class="block text-xs text-gray-600 dark:text-gray-400">
                  {{ customer.email }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  {{ customer.service }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  {{ formatDate(customer.lastVisit) }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span :class="getStatusClasses(customer.status)">
                  {{ customer.status }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    id="customTooltip"
                    data-text="View"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    id="customTooltip"
                    data-text="Edit"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    id="customTooltip"
                    data-text="Delete"
                    @click="deleteCustomer(customer)"
                  >
                    <i class="material-symbols-outlined !text-md"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pt-[11px] sm:flex sm:items-center justify-between">
        <p class="!mb-0 text-xs">
          Showing {{ showingRange }} of {{ customers.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              :class="{
                'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500': true,
                'opacity-50 cursor-not-allowed': currentPage === 1,
              }"
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
              @click="goToPage(page)"
              :class="{
                'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md': true,
                'border border-primary-500 bg-primary-500 text-white':
                  currentPage === page,
                'border border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500':
                  currentPage !== page,
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
              :class="{
                'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500': true,
                'opacity-50 cursor-not-allowed': currentPage === totalPages,
              }"
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
import { defineComponent, ref, computed } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/users/user36.jpg";
import image2 from "@/assets/images/users/user37.jpg";
import image3 from "@/assets/images/users/user38.jpg";
import image4 from "@/assets/images/users/user39.jpg";
import image5 from "@/assets/images/users/user40.jpg";

interface Customer {
  id: number;
  name: string;
  avatar: string;
  phone: string;
  email: string;
  service: string;
  lastVisit: Date;
  status: "VIP" | "Royal" | "Normal";
}

export default defineComponent({
  name: "TopCustomers",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const headers = [
      "ID",
      "Customer Name",
      "Phone No",
      "Email",
      "Preferred Service",
      "Last Visit",
      "Status",
      "",
    ];

    const customers = ref<Customer[]>([
      {
        id: 1,
        name: "Johhna Loren",
        avatar: image1,
        phone: "+321 427 8690",
        email: "loren123@gmail.com",
        service: "Nail Art",
        lastVisit: new Date(2025, 9, 17),
        status: "VIP",
      },
      {
        id: 2,
        name: "Skyler White",
        avatar: image2,
        phone: "+321 427 3980",
        email: "skyqueen@gmail.com",
        service: "Hair Cut",
        lastVisit: new Date(2025, 9, 18),
        status: "Royal",
      },
      {
        id: 3,
        name: "Jonathon Watson",
        avatar: image3,
        phone: "+321 427 1243",
        email: "jona2134@gmail.com",
        service: "Manicure",
        lastVisit: new Date(2025, 9, 19),
        status: "Royal",
      },
      {
        id: 4,
        name: "Walter Olivia",
        avatar: image4,
        phone: "+321 427 7685",
        email: "puzzleworld@gmail.com",
        service: "Pedicure",
        lastVisit: new Date(2025, 9, 21),
        status: "VIP",
      },
      {
        id: 5,
        name: "David Carlen",
        avatar: image5,
        phone: "+321 427 9021",
        email: "liveslong@gmail.com",
        service: "Facial",
        lastVisit: new Date(2025, 9, 25),
        status: "Normal",
      },
      {
        id: 6,
        name: "Walter Olivia",
        avatar: image4,
        phone: "+321 427 7685",
        email: "puzzleworld@gmail.com",
        service: "Pedicure",
        lastVisit: new Date(2025, 9, 21),
        status: "VIP",
      },
      {
        id: 7,
        name: "David Carlen",
        avatar: image5,
        phone: "+321 427 9021",
        email: "liveslong@gmail.com",
        service: "Facial",
        lastVisit: new Date(2025, 9, 25),
        status: "Normal",
      },
      {
        id: 8,
        name: "Johhna Loren",
        avatar: image1,
        phone: "+321 427 8690",
        email: "loren123@gmail.com",
        service: "Nail Art",
        lastVisit: new Date(2025, 9, 17),
        status: "VIP",
      },
      {
        id: 9,
        name: "Skyler White",
        avatar: image2,
        phone: "+321 427 3980",
        email: "skyqueen@gmail.com",
        service: "Hair Cut",
        lastVisit: new Date(2025, 9, 18),
        status: "Royal",
      },
      {
        id: 10,
        name: "Jonathon Watson",
        avatar: image3,
        phone: "+321 427 1243",
        email: "jona2134@gmail.com",
        service: "Manicure",
        lastVisit: new Date(2025, 9, 19),
        status: "Royal",
      },
    ]);

    // Pagination
    const itemsPerPage = 5;
    const currentPage = ref(1);

    const totalPages = computed(() =>
      Math.ceil(customers.value.length / itemsPerPage)
    );

    const paginatedCustomers = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return customers.value.slice(start, end);
    });

    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage,
        customers.value.length
      );
      return `${start}-${end}`;
    });

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    // Helper functions
    const formatDate = (date: Date) => {
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
      };
      return date.toLocaleDateString("en-US", options);
    };

    const getStatusClasses = (status: string) => {
      const baseClasses =
        "inline-block text-xs px-[9px] border text-sm rounded-[100px] dark:bg-[#15203c] dark:border-[#15203c]";

      switch (status) {
        case "VIP":
          return `${baseClasses} text-success-700 border-success-300 bg-success-100`;
        case "Royal":
          return `${baseClasses} text-purple-700 border-purple-300 bg-purple-100`;
        default:
          return `${baseClasses} text-primary-700 border-primary-300 bg-primary-100`;
      }
    };

    const deleteCustomer = (customer: Customer) => {
      console.log("Delete customer:", customer);
      // Implement delete logic
      customers.value = customers.value.filter(
        (c: { id: number }) => c.id !== customer.id
      );
    };

    return {
      isActive,
      toggleActive,
      headers,
      customers,
      paginatedCustomers,
      currentPage,
      totalPages,
      showingRange,
      prevPage,
      nextPage,
      goToPage,
      formatDate,
      getStatusClasses,
      deleteCustomer,
    };
  },
});
</script>
