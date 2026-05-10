<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Recent Transactions</h5>
      </div>
      <div class="trezo-card-subtitle">
        <div class="trezo-card-dropdown relative">
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
    <div class="trezo-card-content">
      <ul>
        <li
          class="flex items-center justify-between mb-[15px] md:mb-[18px] lg:mb-[21.5px] last:mb-0"
          v-for="(transaction, index) in transactions"
          :key="index"
        >
          <div class="flex items-center">
            <div
              :class="[
                'w-[41px] h-[41px] ltr:mr-[12px] rtl:ml-[12px] dark:bg-[#15203c] rounded-full flex items-center justify-center',
                transaction.iconColor,
                transaction.iconBgColor,
              ]"
            >
              <i class="material-symbols-outlined">
                {{ transaction.icon }}
              </i>
            </div>
            <div>
              <span
                class="block font-medium text-black dark:text-white text-base md:text-[16px] mb-[3px] md:mb-px font-medium"
              >
                {{ transaction.name }}
              </span>
              <span class="block text-sm">
                {{ transaction.date }}
              </span>
            </div>
          </div>
          <span
            :class="[
              'block',
              transaction.amount > 0 ? 'text-success-600' : 'text-danger-500',
            ]"
          >
            {{
              transaction.amount > 0
                ? `+${transaction.amount}`
                : transaction.amount
            }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

export default defineComponent({
  name: "RecentTransactions",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const transactions = [
      {
        name: "Master Card",
        date: "16 Jun 2025 - 7:12 pm",
        amount: 1520,
        icon: "credit_card",
        iconColor: "text-primary-500",
        iconBgColor: "bg-primary-100",
      },
      {
        name: "Paypal",
        date: "15 Jun 2025 - 1:42 am",
        amount: -2250,
        icon: "redeem",
        iconColor: "text-danger-500",
        iconBgColor: "bg-danger-100",
      },
      {
        name: "Wise",
        date: "14 Jun 2025 - 4:21 pm",
        amount: 3560,
        icon: "account_balance",
        iconColor: "text-purple-500",
        iconBgColor: "bg-purple-100",
      },
      {
        name: "Payoneer",
        date: "13 Jun 2025 - 2:42 am",
        amount: 6500,
        icon: "currency_ruble",
        iconColor: "text-secondary-500",
        iconBgColor: "bg-secondary-100",
      },
      {
        name: "Credit Card",
        date: "12 Jun 2025 - 3:20 pm",
        amount: -4320,
        icon: "credit_score",
        iconColor: "text-success-600",
        iconBgColor: "bg-success-100",
      },
    ];

    return {
      isActive,
      toggleActive,
      transactions,
    };
  },
});
</script>
