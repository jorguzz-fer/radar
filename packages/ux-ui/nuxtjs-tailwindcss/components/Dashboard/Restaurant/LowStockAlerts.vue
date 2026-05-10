<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Low Stock Alerts</h5>
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
            v-if="isActive"
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
            <tr v-for="item in stockItems" :key="item.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 font-semibold"
              >
                {{ item.name }}
              </td>
              <td
                class="ltr:text-right rtl:text-left whitespace-nowrap px-[20px] py-[11.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 font-bold"
                :class="getStockClass(item.quantity)"
              >
                {{ item.quantity }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

interface StockItem {
  id: number;
  name: string;
  quantity: number;
  alertThreshold: number;
  lastUpdated: Date;
}

export default defineComponent({
  name: "LowStockAlerts",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const stockItems = ref<StockItem[]>([
      {
        id: 1,
        name: "Thai Bean Soup",
        quantity: 1,
        alertThreshold: 5,
        lastUpdated: new Date(2023, 5, 15),
      },
      {
        id: 2,
        name: "Banana Shake",
        quantity: 3,
        alertThreshold: 5,
        lastUpdated: new Date(2023, 5, 14),
      },
      {
        id: 3,
        name: "Chicken Tandoori",
        quantity: 5,
        alertThreshold: 10,
        lastUpdated: new Date(2023, 5, 15),
      },
      {
        id: 4,
        name: "Thai Chicken Masala",
        quantity: 5,
        alertThreshold: 10,
        lastUpdated: new Date(2023, 5, 13),
      },
      {
        id: 5,
        name: "Chicken Club Sandwich",
        quantity: 6,
        alertThreshold: 10,
        lastUpdated: new Date(2023, 5, 15),
      },
      {
        id: 6,
        name: "Shrimp Fried Rice",
        quantity: 2,
        alertThreshold: 5,
        lastUpdated: new Date(2023, 5, 14),
      },
      {
        id: 7,
        name: "Grilled Salmon",
        quantity: 4,
        alertThreshold: 5,
        lastUpdated: new Date(2023, 5, 15),
      },
    ]);

    // Determine stock level color
    const getStockClass = (quantity: number) => {
      if (quantity <= 2) return "text-danger-500";
      if (quantity <= 5) return "text-warning-500";
      return "text-success-500";
    };

    // Action to restock an item (could be connected to API)
    const restockItem = (item: StockItem) => {
      console.log("Restocking:", item.name);
      // In a real app, this would trigger a restock API call
      // For demo, we'll just increase the quantity
      const index = stockItems.value.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        stockItems.value[index].quantity += 10;
        stockItems.value[index].lastUpdated = new Date();
      }
    };

    return {
      isActive,
      toggleActive,
      getStockClass,
      restockItem,
      stockItems,
    };
  },
});
</script>
