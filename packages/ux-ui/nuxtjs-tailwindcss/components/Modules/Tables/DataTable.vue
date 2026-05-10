<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex sm:items-center sm:justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Data Table</h5>
      </div>
      <div class="trezo-card-subtitle sm:flex sm:items-center">
        <form class="relative sm:w-[320px] mt-[13px] sm:mt-0">
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2"
          >
            <i class="material-symbols-outlined !text-[20px]">search</i>
          </label>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                v-for="header in tableHeaders"
                :key="header.key"
                @click="sortTable(header.key)"
                class="font-medium px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] text-left cursor-pointer"
              >
                {{ header.label }}
                <i
                  class="ri-expand-up-down-fill text-gray-500 dark:text-gray-400"
                ></i>
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="(row, index) in filteredRows" :key="index">
              <td
                v-for="(value, key) in row"
                :key="key"
                class="whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036]"
              >
                {{ value }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const tableHeaders = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "city", label: "City" },
  { key: "country", label: "Country" },
];
const rows = ref([
  { id: 1, name: "John Doe", age: 25, city: "New York", country: "USA" },
  { id: 2, name: "Jane Smith", age: 30, city: "London", country: "UK" },
  { id: 3, name: "Samuel Green", age: 22, city: "Toronto", country: "Canada" },
  { id: 4, name: "Emily Brown", age: 27, city: "Sydney", country: "Australia" },
  {
    id: 5,
    name: "Michael Johnson",
    age: 29,
    city: "Auckland",
    country: "New Zealand",
  },
  { id: 6, name: "Sarah White", age: 24, city: "Chicago", country: "USA" },
  {
    id: 7,
    name: "William Black",
    age: 35,
    city: "Vancouver",
    country: "Canada",
  },
  { id: 8, name: "Olivia Green", age: 31, city: "Manchester", country: "UK" },
  { id: 9, name: "Sophia Brown", age: 28, city: "Paris", country: "France" },
]);

// Sort state
const sortKey = ref(null);
const sortDirection = ref("asc");

// Filtered rows with search and sort functionality
const filteredRows = computed(() => {
  let filtered = rows.value;

  // Filter by search query
  if (searchQuery.value) {
    filtered = filtered.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );
  }

  // Sort rows
  if (sortKey.value) {
    filtered.sort((a, b) => {
      if (a[sortKey.value] < b[sortKey.value]) {
        return sortDirection.value === "asc" ? -1 : 1;
      }
      if (a[sortKey.value] > b[sortKey.value]) {
        return sortDirection.value === "asc" ? 1 : -1;
      }
      return 0;
    });
  }

  return filtered;
});

// Sort table by key
const sortTable = (key) => {
  if (sortKey.value === key) {
    sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortDirection.value = "asc";
  }
};
</script>
