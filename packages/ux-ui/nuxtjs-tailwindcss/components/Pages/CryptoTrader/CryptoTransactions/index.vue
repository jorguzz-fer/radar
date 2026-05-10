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
            placeholder="Search here....."
            v-model="searchQuery"
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
      </div>
      <div
        class="trezo-card-subtitle flex items-center gap-[15px] mt-[15px] sm:mt-0"
      >
        <button
          type="button"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          @click="showAddPopup = true"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add Transaction
          </span>
        </button>

        <div class="trezo-card-dropdown relative">
          <button
            type="button"
            :class="{
              'trezo-card-dropdown-btn inline-block rounded-md border border-gray-100 py-[5px] md:py-[6.5px] px-[12px] md:px-[19px] transition-all hover:bg-gray-50 dark:border-[#172036] dark:hover:bg-[#0a0e19]': true,
              active: isActive,
            }"
            id="dropdownToggle"
            @click.stop="toggleActive"
          >
            <span
              class="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]"
            >
              Last 30 Days
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
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
                Last 7 Days
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Last 15 Days
              </button>
            </li>
            <li>
              <button
                type="button"
                class="block w-full transition-all text-black ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black"
              >
                Last 30 Days
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
                Transaction ID
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Date
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Description
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Amount
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 bg-primary-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Type
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
            <tr
              v-for="transaction in filteredTransactions"
              :key="transaction.id"
            >
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[15px]">
                  <div class="form-check relative top-[1.5px]">
                    <input
                      type="checkbox"
                      class="cursor-pointer"
                      v-model="transaction.selected"
                    />
                  </div>
                  <span class="text-gray-500 dark:text-gray-400">
                    {{ transaction.id }}
                  </span>
                </div>
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                {{ formatDate(transaction.date) }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                {{ transaction.description }}
              </td>
              <td
                class="text-primary-500 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                ${{ transaction.amount.toLocaleString() }}
              </td>
              <td
                class="text-gray-500 dark:text-gray-400 ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                {{ transaction.type }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <span
                  class="px-[8px] py-[3px] inline-block rounded-sm font-medium text-xs"
                  :class="statusClasses(transaction.status)"
                >
                  {{ transaction.status }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[9px]">
                  <button
                    type="button"
                    class="text-primary-500 leading-none custom-tooltip"
                    @click="viewTransaction(transaction)"
                    data-text="View"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </button>
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-400 leading-none custom-tooltip"
                    @click="editTransaction(transaction)"
                    data-text="Edit"
                  >
                    <i class="material-symbols-outlined !text-md"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    @click="deleteTransaction(transaction.id)"
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
      <div
        class="px-[20px] md:px-[25px] pt-[12px] md:pt-[14px] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ filteredTransactions.length }} of
          {{ totalTransactions }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <a
              href="javascript:void(0);"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click="prevPage"
            >
              <span class="opacity-0"> 0 </span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_left
              </i>
            </a>
          </li>
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            v-for="page in totalPages"
            :key="page"
          >
            <a
              href="javascript:void(0);"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border transition-all"
              :class="
                currentPage === page
                  ? 'border-primary-500 bg-primary-500 text-white'
                  : 'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500'
              "
              @click="goToPage(page)"
            >
              {{ page }}
            </a>
          </li>
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <a
              href="javascript:void(0);"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click="nextPage"
            >
              <span class="opacity-0"> 0 </span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_right
              </i>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

  <div
    class="add-new-popup z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px]"
    :class="{
      '': !showAddPopup,
      active: showAddPopup,
    }"
  >
    <div
      class="popup-dialog flex transition-all max-w-[550px] min-h-full items-center mx-auto"
    >
      <div
        class="trezo-card w-full bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
      >
        <div
          class="trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md"
        >
          <div class="trezo-card-title">
            <h5 class="!mb-0">
              {{
                editingTransaction ? "Edit Transaction" : "Add New Transaction"
              }}
            </h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              type="button"
              class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
              @click="closePopup"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>

        <div class="trezo-card-content">
          <form @submit.prevent="saveTransaction">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[25px]"
            >
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Transaction ID
                </label>
                <input
                  type="text"
                  v-model="formData.id"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Transaction ID"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Date
                </label>
                <input
                  type="date"
                  v-model="formData.date"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Description
                </label>
                <input
                  type="text"
                  v-model="formData.description"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Transaction Description"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Amount
                </label>
                <input
                  type="text"
                  v-model="formData.amount"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Enter Amount"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Type
                </label>
                <select
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                  v-model="formData.type"
                >
                  <option>Select</option>
                  <option>Income</option>
                  <option>Expense</option>
                </select>
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Category
                </label>
                <select
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                  v-model="formData.category"
                >
                  <option>Select</option>
                  <option>Marketing</option>
                  <option>Payroll</option>
                  <option>Office Supplies</option>
                  <option>Software</option>
                </select>
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Payment Method
                </label>
                <select
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                  v-model="formData.paymentMethod"
                >
                  <option>Select</option>
                  <option>Bank Transfer</option>
                  <option>Cash</option>
                  <option>Card</option>
                </select>
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Status
                </label>
                <select
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                  v-model="formData.status"
                >
                  <option>Select</option>
                  <option>Completed</option>
                  <option>Pending</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Notes [Optional Notes]
                </label>
                <textarea
                  class="h-[140px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] p-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Write any additional note here..."
                  v-model="formData.notes"
                ></textarea>
              </div>
            </div>
            <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
              <button
                type="button"
                class="rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[12px] bg-danger-500 text-white hover:bg-danger-400"
                @click="closePopup"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="inline-block bg-primary-500 text-white py-[12px] px-[26.5px] transition-all rounded-md hover:bg-primary-400"
              >
                <span class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]">
                  <i
                    class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
                  >
                    {{ editingTransaction ? "edit" : "add" }}
                  </i>
                  {{ editingTransaction ? "Update" : "Create" }}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: string;
  status: string;
  category?: string;
  paymentMethod?: string;
  notes?: string;
  selected?: boolean;
}

export default defineComponent({
  name: "CryptoTransactions",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const showAddPopup = ref(false);
    const showDateFilter = ref(false);
    const searchQuery = ref("");
    const selectedDateFilter = ref(2);
    const currentPage = ref(1);
    const itemsPerPage = 10;
    const editingTransaction = ref<Transaction | null>(null);

    const dateFilterOptions = ["Last 7 Days", "Last 15 Days", "Last 30 Days"];

    const formData = reactive({
      id: "",
      date: "",
      description: "",
      amount: "",
      type: "",
      category: "",
      paymentMethod: "",
      status: "",
      notes: "",
    });

    const transactions = ref<Transaction[]>([
      {
        id: "#TID0015",
        date: "2025-04-30",
        description: "Payment from Client",
        amount: 5000,
        type: "Income",
        status: "Completed",
        category: "Client Payment",
        paymentMethod: "Bank Transfer",
        notes: "Project completion payment",
        selected: false,
      },
      {
        id: "#TID0099",
        date: "2025-04-29",
        description: "Office Supplies",
        amount: 10000,
        type: "Expense",
        status: "Pending",
        category: "Office",
        paymentMethod: "Card",
        notes: "Monthly office supplies",
        selected: false,
      },
      {
        id: "#TID0145",
        date: "2025-04-28",
        description: "Website Maintenance",
        amount: 35000,
        type: "Expense",
        status: "Pending",
        category: "IT Services",
        paymentMethod: "Bank Transfer",
        notes: "Monthly maintenance contract",
        selected: false,
      },
      {
        id: "#TID0247",
        date: "2025-04-27",
        description: "Payment from Client",
        amount: 2000,
        type: "Income",
        status: "Completed",
        category: "Client Payment",
        paymentMethod: "Cash",
        notes: "Initial project deposit",
        selected: false,
      },
      {
        id: "#TID0299",
        date: "2025-04-26",
        description: "Advertising Campaign",
        amount: 15500,
        type: "Expense",
        status: "Completed",
        category: "Marketing",
        paymentMethod: "Bank Transfer",
        notes: "Q2 marketing campaign",
        selected: false,
      },
      {
        id: "#TID0312",
        date: "2025-04-25",
        description: "Office Renovation",
        amount: 4000,
        type: "Expense",
        status: "Completed",
        category: "Office",
        paymentMethod: "Bank Transfer",
        notes: "Reception area renovation",
        selected: false,
      },
      {
        id: "#TID0320",
        date: "2025-04-24",
        description: "Payment from Client",
        amount: 3000,
        type: "Income",
        status: "Completed",
        category: "Client Payment",
        paymentMethod: "Card",
        notes: "Additional project features",
        selected: false,
      },
      {
        id: "#TID0351",
        date: "2025-04-23",
        description: "Marketing Campaign",
        amount: 1500,
        type: "Expense",
        status: "Pending",
        category: "Marketing",
        paymentMethod: "Card",
        notes: "Social media ads",
        selected: false,
      },
      {
        id: "#TID0360",
        date: "2025-04-22",
        description: "Payment from Client",
        amount: 6500,
        type: "Income",
        status: "Completed",
        category: "Client Payment",
        paymentMethod: "Bank Transfer",
        notes: "Final project payment",
        selected: false,
      },
      {
        id: "#TID0365",
        date: "2025-04-21",
        description: "Software Subscription",
        amount: 400,
        type: "Expense",
        status: "Completed",
        category: "IT Services",
        paymentMethod: "Card",
        notes: "Annual software license",
        selected: false,
      },
      {
        id: "#TID0320",
        date: "2025-04-24",
        description: "Payment from Client",
        amount: 3000,
        type: "Income",
        status: "Completed",
        category: "Client Payment",
        paymentMethod: "Card",
        notes: "Additional project features",
        selected: false,
      },
      {
        id: "#TID0351",
        date: "2025-04-23",
        description: "Marketing Campaign",
        amount: 1500,
        type: "Expense",
        status: "Pending",
        category: "Marketing",
        paymentMethod: "Card",
        notes: "Social media ads",
        selected: false,
      },
      {
        id: "#TID0360",
        date: "2025-04-22",
        description: "Payment from Client",
        amount: 6500,
        type: "Income",
        status: "Completed",
        category: "Client Payment",
        paymentMethod: "Bank Transfer",
        notes: "Final project payment",
        selected: false,
      },
      {
        id: "#TID0365",
        date: "2025-04-21",
        description: "Software Subscription",
        amount: 400,
        type: "Expense",
        status: "Completed",
        category: "IT Services",
        paymentMethod: "Card",
        notes: "Annual software license",
        selected: false,
      },
      {
        id: "#TID0015",
        date: "2025-04-30",
        description: "Payment from Client",
        amount: 5000,
        type: "Income",
        status: "Completed",
        category: "Client Payment",
        paymentMethod: "Bank Transfer",
        notes: "Project completion payment",
        selected: false,
      },
      {
        id: "#TID0099",
        date: "2025-04-29",
        description: "Office Supplies",
        amount: 10000,
        type: "Expense",
        status: "Pending",
        category: "Office",
        paymentMethod: "Card",
        notes: "Monthly office supplies",
        selected: false,
      },
      {
        id: "#TID0145",
        date: "2025-04-28",
        description: "Website Maintenance",
        amount: 35000,
        type: "Expense",
        status: "Pending",
        category: "IT Services",
        paymentMethod: "Bank Transfer",
        notes: "Monthly maintenance contract",
        selected: false,
      },
      {
        id: "#TID0247",
        date: "2025-04-27",
        description: "Payment from Client",
        amount: 2000,
        type: "Income",
        status: "Completed",
        category: "Client Payment",
        paymentMethod: "Cash",
        notes: "Initial project deposit",
        selected: false,
      },
      {
        id: "#TID0299",
        date: "2025-04-26",
        description: "Advertising Campaign",
        amount: 15500,
        type: "Expense",
        status: "Completed",
        category: "Marketing",
        paymentMethod: "Bank Transfer",
        notes: "Q2 marketing campaign",
        selected: false,
      },
      {
        id: "#TID0312",
        date: "2025-04-25",
        description: "Office Renovation",
        amount: 4000,
        type: "Expense",
        status: "Completed",
        category: "Office",
        paymentMethod: "Bank Transfer",
        notes: "Reception area renovation",
        selected: false,
      },
    ]);

    const filteredTransactions = computed(() => {
      let filtered = [...transactions.value];

      // Apply search filter
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (t) =>
            t.id.toLowerCase().includes(query) ||
            t.description.toLowerCase().includes(query) ||
            t.amount.toString().includes(query)
        );
      }

      // Apply date filter
      const now = new Date();
      let cutoffDate = new Date();

      switch (selectedDateFilter.value) {
        case 0: // Last 7 Days
          cutoffDate.setDate(now.getDate() - 7);
          break;
        case 1: // Last 15 Days
          cutoffDate.setDate(now.getDate() - 15);
          break;
        case 2: // Last 30 Days
          cutoffDate.setDate(now.getDate() - 30);
          break;
      }

      filtered = filtered.filter((t) => {
        const transactionDate = new Date(t.date);
        return transactionDate >= cutoffDate;
      });

      // Pagination
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filtered.slice(start, end);
    });

    const totalTransactions = computed(() => transactions.value.length);
    const totalPages = computed(() =>
      Math.ceil(transactions.value.length / itemsPerPage)
    );

    const statusClasses = (status: string) => {
      return {
        "bg-success-50 dark:bg-[#15203c] text-success-600":
          status === "Completed",
        "bg-secondary-50 dark:bg-[#15203c] text-secondary-600":
          status === "Pending",
      };
    };

    const formatDate = (dateString: string) => {
      const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
      };
      return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const selectDateFilter = (index: number) => {
      selectedDateFilter.value = index;
      showDateFilter.value = false;
      currentPage.value = 1;
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
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

    const openAddPopup = () => {
      showAddPopup.value = true;
    };

    const closePopup = () => {
      showAddPopup.value = false;
      editingTransaction.value = null;
      resetForm();
    };

    const resetForm = () => {
      Object.assign(formData, {
        id: "",
        date: "",
        description: "",
        amount: "",
        type: "",
        category: "",
        paymentMethod: "",
        status: "",
        notes: "",
      });
    };

    const saveTransaction = () => {
      if (editingTransaction.value) {
        // Update existing transaction
        const index = transactions.value.findIndex(
          (t) => t.id === editingTransaction.value?.id
        );
        if (index !== -1) {
          transactions.value[index] = {
            ...transactions.value[index],
            ...formData,
            amount: Number(formData.amount),
          };
        }
      } else {
        // Add new transaction
        transactions.value.unshift({
          id: formData.id,
          date: formData.date,
          description: formData.description,
          amount: Number(formData.amount),
          type: formData.type,
          status: formData.status,
          category: formData.category,
          paymentMethod: formData.paymentMethod,
          notes: formData.notes,
          selected: false,
        });
      }
      closePopup();
    };

    const viewTransaction = (transaction: Transaction) => {
      // In a real app, you might navigate to a detail view
      console.log("Viewing transaction:", transaction);
    };

    const editTransaction = (transaction: Transaction) => {
      editingTransaction.value = transaction;
      Object.assign(formData, {
        id: transaction.id,
        date: transaction.date,
        description: transaction.description,
        amount: transaction.amount.toString(),
        type: transaction.type,
        category: transaction.category || "",
        paymentMethod: transaction.paymentMethod || "",
        status: transaction.status,
        notes: transaction.notes || "",
      });
      showAddPopup.value = true;
    };

    const deleteTransaction = (id: string) => {
      if (confirm("Are you sure you want to delete this transaction?")) {
        transactions.value = transactions.value.filter((t) => t.id !== id);
      }
    };

    return {
      isActive,
      toggleActive,
      showAddPopup,
      showDateFilter,
      searchQuery,
      selectedDateFilter,
      currentPage,
      dateFilterOptions,
      formData,
      transactions,
      filteredTransactions,
      totalTransactions,
      totalPages,
      editingTransaction,
      statusClasses,
      formatDate,
      selectDateFilter,
      goToPage,
      prevPage,
      nextPage,
      openAddPopup,
      closePopup,
      saveTransaction,
      viewTransaction,
      editTransaction,
      deleteTransaction,
    };
  },
});
</script>
