<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Tickets</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative ltr:-mr-[7px] rtl:-ml-[7px]">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all text-[22px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <i class="ri-more-2-fill"></i>
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
          <tbody class="text-black dark:text-white">
            <tr v-for="ticket in tickets" :key="ticket.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.2px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 align-top"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  #{{ ticket.id }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.2px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 align-top"
              >
                <span class="block -mt-px mb-[4px] text-base font-semibold">
                  {{ ticket.title }}
                </span>
                <span class="block text-xs text-gray-500 dark:text-gray-400">
                  Updated on: {{ formatDate(ticket.updatedAt) }}
                </span>
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[12.2px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 align-top"
              >
                <span
                  class="inline-block text-xs px-[9px] border text-sm rounded-[100px]"
                  :class="getStatusClasses(ticket.status)"
                >
                  {{ ticket.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

interface Ticket {
  id: number;
  title: string;
  status: "Solved" | "Pending" | "In Progress" | "Rejected";
  updatedAt: Date;
  priority?: "Low" | "Medium" | "High";
}

export default defineComponent({
  name: "Tickets",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const tickets = ref<Ticket[]>([
      {
        id: 3242,
        title: "Order delayed for 5 mins",
        status: "Solved",
        updatedAt: new Date(2025, 10, 10),
      },
      {
        id: 3243,
        title: "Provided rotten Burger",
        status: "Pending",
        updatedAt: new Date(2025, 10, 10),
      },
      {
        id: 3244,
        title: "Too much salt in pizza",
        status: "Solved",
        updatedAt: new Date(2025, 10, 9),
      },
      {
        id: 3246,
        title: "Delivery man misbehaved",
        status: "Pending",
        updatedAt: new Date(2025, 10, 7),
      },
      {
        id: 3247,
        title: "App doesn't work",
        status: "Solved",
        updatedAt: new Date(2025, 10, 6),
      },
      {
        id: 3248,
        title: "Missing items in order",
        status: "In Progress",
        updatedAt: new Date(2025, 10, 5),
      },
      {
        id: 3249,
        title: "Payment issue",
        status: "Rejected",
        updatedAt: new Date(2025, 10, 4),
      },
    ]);

    const formatDate = (date: Date) => {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    };

    const getStatusClasses = (status: string) => {
      const baseClasses = {
        Solved:
          "text-success-700 border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#15203c]",
        Pending:
          "text-purple-700 border-purple-300 bg-purple-100 dark:bg-[#15203c] dark:border-[#15203c]",
        "In Progress":
          "text-warning-700 border-warning-300 bg-warning-100 dark:bg-[#15203c] dark:border-[#15203c]",
        Rejected:
          "text-danger-700 border-danger-300 bg-danger-100 dark:bg-[#15203c] dark:border-[#15203c]",
      };
      return (
        baseClasses[status as keyof typeof baseClasses] || baseClasses.Pending
      );
    };

    return {
      isActive,
      toggleActive,
      tickets,
      formatDate,
      getStatusClasses,
    };
  },
});
</script>
