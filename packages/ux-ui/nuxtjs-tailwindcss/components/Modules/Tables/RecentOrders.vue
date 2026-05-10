<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex sm:items-center sm:justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Recent Orders</h5>
      </div>
      <div class="trezo-card-subtitle sm:flex sm:items-center">
        <form
          class="relative sm:w-[240px] ltr:sm:mr-[20px] rtl:sm:ml-[20px] my-[13px] sm:my-0"
          @submit.prevent
        >
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2"
          >
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input
            type="text"
            placeholder="Search here....."
            v-model="searchTerm"
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
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
              Show All
              <i
                class="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"
              ></i>
            </span>
          </button>
          <ul
            class="trezo-card-dropdown-menu transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:left-0 sm:ltr:right-0 rtl:right-0 sm:rtl:left-0 w-[195px] z-[5] dark:bg-dark dark:shadow-none"
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
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tl-md"
              >
                Order ID
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tl-md"
              >
                Customer
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tl-md"
              >
                Created
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tl-md"
              >
                Total
              </th>
              <th
                class="font-medium text-left px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tr-md"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="item in paginatedItems" :key="item.orderID">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                {{ item.orderID }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center">
                  <div class="rounded-md w-[40px]">
                    <img
                      :src="item.customer.image"
                      class="inline-block rounded-md"
                      alt="product-image"
                    />
                  </div>
                  <div class="ltr:ml-[12px] rtl:mr-[12px]">
                    <span class="block font-medium">
                      {{ item.customer.name }}
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                {{ item.created }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                ${{ item.total }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  class="px-[8px] py-[3px] inline-block bg-success-100 dark:bg-[#15203c] text-success-600 rounded-sm font-medium text-xs"
                  v-if="item.status === 'Shipped'"
                >
                  {{ item.status }}
                </span>
                <span
                  class="px-[8px] py-[3px] inline-block bg-primary-50 dark:bg-[#15203c] text-primary-500 rounded-sm font-medium text-xs"
                  v-if="item.status === 'Confirmed'"
                >
                  {{ item.status }}
                </span>
                <span
                  class="px-[8px] py-[3px] inline-block bg-warning-50 dark:bg-[#15203c] text-warning-500 rounded-sm font-medium text-xs"
                  v-if="item.status === 'Pending'"
                >
                  {{ item.status }}
                </span>
                <span
                  class="px-[8px] py-[3px] inline-block bg-danger-100 dark:bg-[#15203c] text-danger-500 rounded-sm font-medium text-xs"
                  v-if="item.status === 'Rejected'"
                >
                  {{ item.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="px-[20px] py-[12px] md:py-[14px] rounded-b-md border-l border-r border-b border-gray-100 dark:border-[#172036] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ startItem + 1 }} to {{ endItem }} of
          {{ filteredItems.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            :class="{ disabled: currentPage === 1 }"
          >
            <a
              href="#"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click.prevent="prevPage"
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
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <a
              href="#"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click.prevent="goToPage(page)"
            >
              {{ page }}
            </a>
          </li>
          <li
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
            :class="{ disabled: currentPage === totalPages }"
          >
            <a
              href="#"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click.prevent="nextPage"
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
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useClickOutside } from "@/utils/useClickOutside";

import image1 from "@/assets/images/users/user1.jpg";
import image2 from "@/assets/images/users/user2.jpg";
import image3 from "@/assets/images/users/user3.jpg";
import image4 from "@/assets/images/users/user4.jpg";
import image5 from "@/assets/images/users/user5.jpg";

interface Customer {
  image: string;
  name: string;
}

interface Item {
  orderID: string;
  customer: Customer;
  created: string;
  total: string;
  status: string;
}

export default defineComponent({
  name: "RecentOrders",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");

    const items = ref<Item[]>([
      {
        orderID: "#JAN-2345",
        customer: {
          image: image1,
          name: "Sarah Johnson",
        },
        created: "20 Jun, 2025",
        total: "10,490",
        status: "Shipped",
      },
      {
        orderID: "#JAN-1323",
        customer: {
          image: image2,
          name: "Michael Smith",
        },
        created: "19 Jun, 2025",
        total: "6,575",
        status: "Confirmed",
      },
      {
        orderID: "#DEC-1234",
        customer: {
          image: image3,
          name: "Emily Brown",
        },
        created: "18 Jun, 2025",
        total: "12,870",
        status: "Pending",
      },
      {
        orderID: "#DEC-3567",
        customer: {
          image: image4,
          name: "Jason Lee",
        },
        created: "17 Jun, 2025",
        total: "7,895",
        status: "Shipped",
      },
      {
        orderID: "#DEC-1098",
        customer: {
          image: image5,
          name: "Ashley Davis",
        },
        created: "16 Jun, 2025",
        total: "4,680",
        status: "Rejected",
      },
      {
        orderID: "#DEC-3567",
        customer: {
          image: image4,
          name: "Jason Lee",
        },
        created: "17 Jun, 2025",
        total: "7,895",
        status: "Shipped",
      },
      {
        orderID: "#DEC-1098",
        customer: {
          image: image5,
          name: "Ashley Davis",
        },
        created: "16 Jun, 2025",
        total: "4,680",
        status: "Rejected",
      },
      {
        orderID: "#JAN-2345",
        customer: {
          image: image3,
          name: "Sarah Johnson",
        },
        created: "20 Jun, 2025",
        total: "10,490",
        status: "Shipped",
      },
      {
        orderID: "#JAN-1323",
        customer: {
          image: image4,
          name: "Michael Smith",
        },
        created: "19 Jun, 2025",
        total: "6,575",
        status: "Confirmed",
      },
      {
        orderID: "#DEC-1234",
        customer: {
          image: image1,
          name: "Emily Brown",
        },
        created: "18 Jun, 2025",
        total: "12,870",
        status: "Pending",
      },
      {
        orderID: "#DEC-3567",
        customer: {
          image: image2,
          name: "Jason Lee",
        },
        created: "17 Jun, 2025",
        total: "7,895",
        status: "Shipped",
      },
      {
        orderID: "#DEC-1098",
        customer: {
          image: image3,
          name: "Ashley Davis",
        },
        created: "16 Jun, 2025",
        total: "4,680",
        status: "Rejected",
      },
    ]);

    const searchTerm = ref("");
    const currentPage = ref(1);
    const itemsPerPage = ref(5);

    const totalPages = computed(() =>
      Math.ceil(filteredItems.value.length / itemsPerPage.value)
    );

    const startItem = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endItem = computed(() =>
      Math.min(startItem.value + itemsPerPage.value, filteredItems.value.length)
    );

    const paginatedItems = computed(() => {
      return filteredItems.value.slice(startItem.value, endItem.value);
    });

    const filteredItems = computed(() => {
      return items.value.filter(
        (item: {
          orderID: string;
          customer: { name: string };
          created: string;
          total: string;
          status: string;
        }) =>
          item.orderID.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.customer.name
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ||
          item.created.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.total.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          item.status.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    return {
      searchTerm,
      filteredItems,
      paginatedItems,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      goToPage,
      startItem,
      endItem,
      isActive,
      toggleActive,
    };
  },
});
</script>

<style lang="scss" scoped>
ol {
  li {
    &.active {
      a {
        background-color: #605dff;
        color: #fff;
        border-color: #605dff;
      }
    }
  }
}
</style>
