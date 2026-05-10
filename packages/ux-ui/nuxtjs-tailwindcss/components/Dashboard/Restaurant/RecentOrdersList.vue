<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md mb-[25px]"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Recent Orders List</h5>
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
              Weekly
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
                :key="header.key"
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[13px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                {{ header.label }}
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="order in paginatedOrders" :key="order.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  #{{ order.id.toString().padStart(3, "0") }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[30px]">
                    <img
                      :src="order.item.image"
                      class="inline-block rounded-full"
                      :alt="order.item.name"
                    />
                  </div>
                  <NuxtLink
                    to="/restaurant/dish-details"
                    class="font-semibold inline-block transition-all hover:text-primary-500"
                  >
                    {{ order.item.name }}
                  </NuxtLink>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-500 dark:text-gray-400"
                >
                  {{ order.quantity }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-500 dark:text-gray-400"
                >
                  {{ order.customer.name }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-500 dark:text-gray-400"
                >
                  {{ order.customer.location }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-500 dark:text-gray-400"
                >
                  {{ formatTime(order.deliveryTime) }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-500 dark:text-gray-400"
                >
                  ${{ order.price.toFixed(2) }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12.5px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span :class="getStatusClasses(order.status)">
                  {{ order.status }}
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
                    class="text-danger-500 leading-none custom-tooltip"
                    data-text="Delete"
                    @click="deleteOrder(order)"
                  >
                    <i class="material-symbols-outlined !text-md">delete</i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pt-[13px] sm:flex sm:items-center justify-between">
        <p class="!mb-0 text-xs">
          Showing {{ showingRange }} of {{ orders.length }} results
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
              <span class="opacity-0">0</span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
              >
                chevron_left
              </i>
            </button>
          </li>
          <li
            v-for="page in visiblePages"
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
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/restaurant/order1.jpg";
import image2 from "@/assets/images/restaurant/order2.jpg";
import image3 from "@/assets/images/restaurant/order3.jpg";
import image4 from "@/assets/images/restaurant/order4.jpg";
import image5 from "@/assets/images/restaurant/order5.jpg";

interface OrderItem {
  id: number;
  name: string;
  image: string;
}

interface Customer {
  name: string;
  location: string;
}

interface Order {
  id: number;
  item: OrderItem;
  quantity: number;
  customer: Customer;
  deliveryTime: string;
  price: number;
  status: "Delivered" | "Processing" | "Cancelled";
  date: Date;
}

export default defineComponent({
  name: "RecentOrdersList",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    // Table headers
    const headers = [
      { key: "code", label: "Code" },
      { key: "item", label: "Item" },
      { key: "quantity", label: "Quantity" },
      { key: "customer", label: "Customer" },
      { key: "location", label: "Location" },
      { key: "deliveryTime", label: "Delivery Time" },
      { key: "price", label: "Price" },
      { key: "status", label: "Status" },
      { key: "actions", label: "" },
    ];

    const orders = ref<Order[]>([
      {
        id: 1,
        item: {
          id: 1,
          name: "Fish Cutlet",
          image: image1,
        },
        quantity: 5,
        customer: {
          name: "Johnna Loren",
          location: "Washington, D.C.",
        },
        deliveryTime: "10:05 AM",
        price: 35.75,
        status: "Delivered",
        date: new Date(2023, 5, 15),
      },
      {
        id: 2,
        item: {
          id: 2,
          name: "Pea Creamy Soup",
          image: image2,
        },
        quantity: 1,
        customer: {
          name: "Skyler White",
          location: "Los Angeles, CA",
        },
        deliveryTime: "11:15 AM",
        price: 24.3,
        status: "Processing",
        date: new Date(2023, 5, 15),
      },
      {
        id: 3,
        item: {
          id: 3,
          name: "Macaroon 02",
          image: image3,
        },
        quantity: 2,
        customer: {
          name: "Jonathon Watson",
          location: "New York, NY",
        },
        deliveryTime: "11:30 AM",
        price: 21.15,
        status: "Cancelled",
        date: new Date(2023, 5, 15),
      },
      {
        id: 4,
        item: {
          id: 4,
          name: "Healthy Salad Bowl",
          image: image4,
        },
        quantity: 1,
        customer: {
          name: "Walter White",
          location: "San Jose, CA",
        },
        deliveryTime: "11:52 AM",
        price: 12.2,
        status: "Delivered",
        date: new Date(2023, 5, 15),
      },
      {
        id: 5,
        item: {
          id: 5,
          name: "Macaroon",
          image: image5,
        },
        quantity: 1,
        customer: {
          name: "David Carlen",
          location: "Redmond, WA",
        },
        deliveryTime: "12:05 PM",
        price: 21.5,
        status: "Processing",
        date: new Date(2023, 5, 15),
      },
      {
        id: 6,
        item: {
          id: 1,
          name: "Fish Cutlet",
          image: image1,
        },
        quantity: 5,
        customer: {
          name: "Johnna Loren",
          location: "Washington, D.C.",
        },
        deliveryTime: "10:05 AM",
        price: 35.75,
        status: "Delivered",
        date: new Date(2023, 5, 15),
      },
      {
        id: 7,
        item: {
          id: 2,
          name: "Pea Creamy Soup",
          image: image2,
        },
        quantity: 1,
        customer: {
          name: "Skyler White",
          location: "Los Angeles, CA",
        },
        deliveryTime: "11:15 AM",
        price: 24.3,
        status: "Processing",
        date: new Date(2023, 5, 15),
      },
      {
        id: 8,
        item: {
          id: 3,
          name: "Macaroon 02",
          image: image3,
        },
        quantity: 2,
        customer: {
          name: "Jonathon Watson",
          location: "New York, NY",
        },
        deliveryTime: "11:30 AM",
        price: 21.15,
        status: "Cancelled",
        date: new Date(2023, 5, 15),
      },
      {
        id: 9,
        item: {
          id: 4,
          name: "Healthy Salad Bowl",
          image: image4,
        },
        quantity: 1,
        customer: {
          name: "Walter White",
          location: "San Jose, CA",
        },
        deliveryTime: "11:52 AM",
        price: 12.2,
        status: "Delivered",
        date: new Date(2023, 5, 15),
      },
      {
        id: 10,
        item: {
          id: 5,
          name: "Macaroon",
          image: image5,
        },
        quantity: 1,
        customer: {
          name: "David Carlen",
          location: "Redmond, WA",
        },
        deliveryTime: "12:05 PM",
        price: 21.5,
        status: "Processing",
        date: new Date(2023, 5, 15),
      },
    ]);

    // Pagination
    const itemsPerPage = 5;
    const currentPage = ref(1);
    const totalPages = computed(() =>
      Math.ceil(orders.value.length / itemsPerPage)
    );

    const paginatedOrders = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return orders.value.slice(start, end);
    });

    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage,
        orders.value.length
      );
      return `${start}-${end}`;
    });

    // Only show relevant page numbers (max 5)
    const visiblePages = computed(() => {
      const pages = [];
      const maxVisible = 5;
      let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2));
      let end = Math.min(totalPages.value, start + maxVisible - 1);

      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
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
    const formatTime = (time: string) => {
      return time;
    };

    const getStatusClasses = (status: string) => {
      const baseClasses =
        "inline-block text-xs px-[9px] border text-sm rounded-[100px] dark:bg-[#15203c] dark:border-[#15203c]";

      switch (status) {
        case "Delivered":
          return `${baseClasses} text-success-700 border-success-300 bg-success-100`;
        case "Processing":
          return `${baseClasses} text-info-700 border-info-300 bg-info-100`;
        case "Cancelled":
          return `${baseClasses} text-danger-700 border-danger-300 bg-danger-100`;
        default:
          return `${baseClasses} text-gray-700 border-gray-300 bg-gray-100`;
      }
    };

    const deleteOrder = (order: Order) => {
      console.log("Delete order:", order);
      // Implement delete logic
      orders.value = orders.value.filter(
        (o: { id: number }) => o.id !== order.id
      );
    };

    return {
      isActive,
      toggleActive,

      // Table
      headers,
      paginatedOrders,
      orders,

      // Pagination
      currentPage,
      totalPages,
      showingRange,
      visiblePages,
      prevPage,
      nextPage,
      goToPage,

      // Helpers
      formatTime,
      getStatusClasses,

      // Actions
      deleteOrder,
    };
  },
});
</script>
