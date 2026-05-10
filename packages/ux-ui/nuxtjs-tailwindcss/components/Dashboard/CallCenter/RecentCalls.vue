<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex sm:items-center sm:justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !font-semibold">Recent Calls</h5>
      </div>
      <div class="trezo-card-subtitle flex items-center mt-[15px] sm:mt-0">
        <form
          class="relative w-[225px] sm:w-[265px] ltr:mr-[10px] rtl:ml-[10px] ltr:sm:mr-[15px] rtl:sm:ml-[15px]"
        >
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2"
          >
            <i class="material-symbols-outlined !text-[20px]"> search </i>
          </label>
          <input
            type="text"
            placeholder="Search for a name...."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
            v-model="searchQuery"
          />
        </form>
        <div class="trezo-card-dropdown relative ltr:-mr-[7px] rtl:-ml-[7px]">
          <button
            type="button"
            class="trezo-card-dropdown-btn inline-block transition-all text-[22px] text-gray-500 dark:text-gray-400 leading-none hover:text-primary-500"
            :class="{
              'trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500': true,
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
    <div class="trezo-card-content -mx-[20px] md:-mx-[25px]" id="dataTable">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                v-for="header in headers"
                :key="header.key"
                @click="sortTable(header.key)"
                style="cursor: pointer"
                :class="[
                  'font-normal border-t border-gray-100 dark:border-[#172036] ltr:text-left rtl:text-right px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] ltr:first:pr-0 rtl:first:pl-0 whitespace-nowrap cursor-pointer relative',
                  header.className,
                ]"
              >
                {{ header.label }}
                <i
                  class="ri-expand-up-down-fill text-gray-500 dark:text-gray-400"
                ></i>
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="call in paginatedItems" :key="call.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[12px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[40px]">
                    <img
                      :src="call.image"
                      class="inline-block rounded-full"
                      alt="product-image"
                    />
                  </div>
                  <div>
                    <span class="font-medium inline-block mb-px">
                      {{ call.name }}
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      {{ call.number }}
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="text-primary-500 font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
                v-if="call.type === 'Inbound'"
              >
                Inbound
              </td>
              <td
                class="text-orange-500 font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
                v-if="call.type === 'Outbound'"
              >
                Outbound
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ call.duration }}
              </td>
              <td
                class="text-success-700 font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036] ltr:text-right rtl:text-left"
                v-if="call.status === 'Resolved'"
              >
                Resolved
              </td>
              <td
                class="text-orange-600 font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036] ltr:text-right rtl:text-left"
                v-if="call.status === 'Pending'"
              >
                Pending
              </td>
              <td
                class="text-purple-600 font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036] ltr:text-right rtl:text-left"
                v-if="call.status === 'Dropped'"
              >
                Dropped
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036] ltr:text-right rtl:text-left"
              >
                {{ call.time }}
              </td>
              <td
                class="font-medium ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[17px] md:ltr:first:pl-[25px] md:rtl:first:pr-[25px] border-b border-gray-100 dark:border-[#172036] ltr:text-right rtl:text-left"
              >
                {{ call.csat }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        id="noResultsMessage"
        class="hidden my-[10px] px-[20px] md:px-[25px]"
      >
        No results found.
      </div>

      <div
        class="px-[20px] md:px-[25px] pt-[12px] md:pt-[14px] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ startItem + 1 }} to {{ endItem }} of
          {{ filteredCalls.length }} Results
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

import image1 from "@/assets/images/users/user58.jpg";
import image2 from "@/assets/images/users/user59.jpg";
import image3 from "@/assets/images/users/user60.jpg";
import image4 from "@/assets/images/users/user7.jpg";

export default defineComponent({
  name: "RecentCalls",
  setup() {
    const { isActive, toggleActive } = useClickOutside("dropdownToggle");
    const calls = ref([
      {
        id: "1",
        image: image1,
        name: "Emily Johnson",
        number: "+1 555-123-4567",
        type: "Inbound",
        duration: "5 mins",
        status: "Resolved",
        time: "10:30 AM",
        csat: "90%",
      },
      {
        id: "2",
        image: image2,
        name: "Sarah Green",
        number: "+44 20 7946 0958",
        type: "Outbound",
        duration: "3 mins",
        status: "Pending",
        time: "10:35 AM",
        csat: "85%",
      },
      {
        id: "3",
        image: image3,
        name: "Adam Smith",
        number: "+1 555-234-5678",
        type: "Inbound",
        duration: "7 mins",
        status: "Resolved",
        time: "10:40 AM",
        csat: "83%",
      },
      {
        id: "4",
        image: image4,
        name: "Laura Martin",
        number: "+61 2 1234 5678",
        type: "Inbound",
        duration: "4 mins",
        status: "Dropped",
        time: "10:45 AM",
        csat: "87%",
      },
      {
        id: "5",
        image: image1,
        name: "Laura Martin",
        number: "+61 2 1234 5678",
        type: "Inbound",
        duration: "4 mins",
        status: "Dropped",
        time: "10:45 AM",
        csat: "87%",
      },
      {
        id: "6",
        image: image2,
        name: "Adam Smith",
        number: "+1 555-234-5678",
        type: "Inbound",
        duration: "7 mins",
        status: "Resolved",
        time: "10:40 AM",
        csat: "83%",
      },
      {
        id: "7",
        image: image3,
        name: "Sarah Green",
        number: "+44 20 7946 0958",
        type: "Outbound",
        duration: "3 mins",
        status: "Pending",
        time: "10:35 AM",
        csat: "85%",
      },
    ]);

    const headers = ref([
      { key: "name", label: "Caller Name", className: "" },
      { key: "type", label: "Call Type", className: "" },
      { key: "duration", label: "Duration", className: "" },
      {
        key: "status",
        label: "Status",
        className: "ltr:text-right rtl:text-left",
      },
      { key: "time", label: "Time", className: "ltr:text-right rtl:text-left" },
      { key: "csat", label: "CSAT", className: "ltr:text-right rtl:text-left" },
    ]);

    const sortedColumn = ref<string | null>(null);
    const sortOrder = ref<"asc" | "desc">("asc");
    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = ref(4);

    const totalPages = computed(() =>
      Math.ceil(filteredCalls.value.length / itemsPerPage.value)
    );

    const startItem = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endItem = computed(() =>
      Math.min(startItem.value + itemsPerPage.value, filteredCalls.value.length)
    );

    const paginatedItems = computed(() => {
      return filteredCalls.value.slice(startItem.value, endItem.value);
    });

    const filteredCalls = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return calls.value.filter(
        (employee: { [s: string]: unknown } | ArrayLike<unknown>) =>
          Object.values(employee).some((value) =>
            String(value).toLowerCase().includes(query)
          )
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

    const sortTable = (key: string) => {
      if (sortedColumn.value === key) {
        sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
      } else {
        sortedColumn.value = key;
        sortOrder.value = "asc";
      }
      calls.value.sort(
        (a: { [x: string]: unknown }, b: { [x: string]: unknown }) => {
          const collator = new Intl.Collator("en", {
            numeric: true,
            sensitivity: "base",
          });
          return sortOrder.value === "asc"
            ? collator.compare(String(a[key]), String(b[key]))
            : collator.compare(String(b[key]), String(a[key]));
        }
      );
      filteredCalls.value.sort(
        (a: { [x: string]: string }, b: { [x: string]: string }) => {
          const collator = new Intl.Collator("en", { numeric: true });
          return sortOrder.value === "asc"
            ? collator.compare(a[key], b[key])
            : collator.compare(b[key], a[key]);
        }
      );
    };

    return {
      calls,
      headers,
      sortedColumn,
      sortOrder,
      sortTable,
      searchQuery,
      filteredCalls,
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
