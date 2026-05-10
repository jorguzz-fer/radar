<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <form class="relative sm:w-[265px]" @submit.prevent>
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

      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <button
          type="button"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          @click="toggleAddPopup"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add New Guest
          </span>
        </button>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead class="text-black dark:text-white">
            <tr>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="form-check relative top-[2px]">
                    <input type="checkbox" class="cursor-pointer" />
                  </div>
                  Code
                </div>
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Guest Name
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Check In
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Check Out
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Room
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Total Bill
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Payment Status
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tr-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="guest in paginatedGuests" :key="guest.code">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="form-check relative top-[2px]">
                    <input type="checkbox" class="cursor-pointer" />
                  </div>
                  {{ guest.code }}
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[12px]">
                  <img
                    :src="guest.avatar"
                    class="inline-block rounded-full w-[40px]"
                    alt="user-image"
                  />
                  <span class="block font-semibold">{{ guest.name }}</span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                {{ formatDate(guest.checkIn) }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                {{ formatDate(guest.checkOut) }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                {{ guest.room }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                ${{ guest.totalBill.toFixed(2) }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  :class="{
                    'text-success-600 border-success-600 bg-success-100':
                      guest.paymentStatus === 'Completed',
                    'text-warning-600 border-warning-600 bg-warning-50':
                      guest.paymentStatus === 'Pending',
                    'text-danger-600 border-danger-600 bg-danger-100':
                      guest.paymentStatus === 'Failed',
                  }"
                  class="inline-block text-xs font-medium px-[8px] border text-sm rounded-[100px] dark:bg-[#15203c] dark:border-[#15203c]"
                >
                  {{ guest.paymentStatus }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
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
                    @click="deleteGuest(guest.code)"
                  >
                    <i class="material-symbols-outlined !text-md">delete</i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="px-[20px] py-[12px] md:py-[15px] rounded-b-md border-l border-r border-b border-gray-100 dark:border-[#172036] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ paginatedGuests.length }} of
          {{ filteredGuests.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click="changePage(currentPage - 1)"
              :disabled="currentPage === 1"
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
            v-for="page in totalPages"
            :key="page"
            class="inline-block mx-[3px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border transition-all"
              :class="{
                'border-primary-500 bg-primary-500 text-white':
                  currentPage === page,
                'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500':
                  currentPage !== page,
              }"
              @click="changePage(page)"
            >
              {{ page }}
            </button>
          </li>
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click="changePage(currentPage + 1)"
              :disabled="currentPage === totalPages"
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

  <div
    class="add-new-popup z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px]"
    :class="{ active: showAddPopup, hidden: !showAddPopup }"
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
              {{ isEditing ? "Edit Guest" : "Add New Guest" }}
            </h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              type="button"
              class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
              @click="toggleAddPopup"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>
        <div class="trezo-card-content">
          <form @submit.prevent="submitGuest">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px] md:gap-[25px]"
            >
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Code
                </label>
                <input
                  type="text"
                  v-model="newGuest.code"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="#001"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Guest Name
                </label>
                <input
                  type="text"
                  v-model="newGuest.name"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Check In
                </label>
                <input
                  type="date"
                  v-model="newGuest.checkIn"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Check Out
                </label>
                <input
                  type="date"
                  v-model="newGuest.checkOut"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Room
                </label>
                <input
                  type="text"
                  v-model="newGuest.room"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="G0-12"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Total Bill
                </label>
                <input
                  type="number"
                  v-model="newGuest.totalBill"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="$250.00"
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Payment Status
                </label>
                <select
                  v-model="newGuest.paymentStatus"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                >
                  <option value="" disabled>Select</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                  <option value="Failed">Failed</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Avatar
                </label>
                <div id="fileUploader">
                  <div
                    class="relative flex items-center justify-center overflow-hidden rounded-md py-[48px] px-[20px] border border-gray-200 dark:border-[#172036]"
                  >
                    <div class="flex items-center justify-center">
                      <div
                        class="w-[35px] h-[35px] border border-gray-100 dark:border-[#15203c] flex items-center justify-center rounded-md text-primary-500 text-lg ltr:mr-[12px] rtl:ml-[12px]"
                      >
                        <i class="ri-upload-2-line"></i>
                      </div>
                      <p class="!leading-[1.5]">
                        <strong class="text-black dark:text-white"
                          >Click to upload</strong
                        ><br />
                        you file here
                      </p>
                    </div>
                    <input
                      type="file"
                      @change="handleFileUpload"
                      class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
                      accept="image/*"
                    />
                  </div>
                  <ul v-if="newGuest.avatar" class="mt-2">
                    <li>{{ newGuest.avatar.name || "Selected Image" }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
              <button
                type="button"
                class="rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[12px] bg-danger-500 text-white hover:bg-danger-400"
                @click="toggleAddPopup"
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
                    add
                  </i>
                  {{ isEditing ? "Update" : "Create" }}
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
import { defineComponent, ref, computed } from "vue";

import image1 from "@/assets/images/users/user1.jpg";
import image2 from "@/assets/images/users/user2.jpg";
import image3 from "@/assets/images/users/user3.jpg";
import image4 from "@/assets/images/users/user4.jpg";
import image5 from "@/assets/images/users/user5.jpg";
import image6 from "@/assets/images/users/user32.jpg";
import image7 from "@/assets/images/users/user33.jpg";
import image8 from "@/assets/images/users/user34.jpg";
import image9 from "@/assets/images/users/user35.jpg";
import image10 from "@/assets/images/users/user36.jpg";

export default defineComponent({
  name: "GuestsList",
  setup() {
    const guests = ref([
      {
        code: "#001",
        name: "Joanna Watson",
        avatar: image1,
        checkIn: "2025-11-01T09:42:00",
        checkOut: "2025-11-03T09:42:00",
        room: "G0-12",
        totalBill: 166.0,
        paymentStatus: "Completed",
      },
      {
        code: "#002",
        name: "Orion Vale",
        avatar: image2,
        checkIn: "2025-11-02T10:08:00",
        checkOut: "2025-11-05T10:08:00",
        room: "L1-15",
        totalBill: 158.5,
        paymentStatus: "Pending",
      },
      {
        code: "#003",
        name: "Seraphina Nyx",
        avatar: image3,
        checkIn: "2025-11-03T11:12:00",
        checkOut: "2025-11-07T11:12:00",
        room: "L2-27",
        totalBill: 250.5,
        paymentStatus: "Failed",
      },
      {
        code: "#004",
        name: "Cassian Rhys",
        avatar: image4,
        checkIn: "2025-10-30T10:32:00",
        checkOut: "2025-11-01T10:32:00",
        room: "G0-15",
        totalBill: 313.99,
        paymentStatus: "Completed",
      },
      {
        code: "#005",
        name: "Aurelia Dawn",
        avatar: image5,
        checkIn: "2025-10-27T13:15:00",
        checkOut: "2025-10-30T13:15:00",
        room: "L3-32",
        totalBill: 514.75,
        paymentStatus: "Completed",
      },
      {
        code: "#006",
        name: "Lucien Drake",
        avatar: image6,
        checkIn: "2025-10-18T00:18:00",
        checkOut: "2025-10-21T00:18:00",
        room: "G0-17",
        totalBill: 215.99,
        paymentStatus: "Completed",
      },
      {
        code: "#007",
        name: "Elara Quinn",
        avatar: image7,
        checkIn: "2025-10-15T20:23:00",
        checkOut: "2025-10-20T20:23:00",
        room: "L1-19",
        totalBill: 216.5,
        paymentStatus: "Pending",
      },
      {
        code: "#008",
        name: "Evander Cole",
        avatar: image8,
        checkIn: "2025-10-14T21:14:00",
        checkOut: "2025-10-18T21:14:00",
        room: "G0-11",
        totalBill: 112.99,
        paymentStatus: "Failed",
      },
      {
        code: "#009",
        name: "Isolde Faye",
        avatar: image9,
        checkIn: "2025-09-05T19:37:00",
        checkOut: "2025-09-10T19:37:00",
        room: "L2-24",
        totalBill: 513.5,
        paymentStatus: "Completed",
      },
      {
        code: "#010",
        name: "Theo Alistair",
        avatar: image10,
        checkIn: "2025-09-01T09:42:00",
        checkOut: "2025-09-02T09:42:00",
        room: "L3-30",
        totalBill: 115.25,
        paymentStatus: "Completed",
      },
      {
        code: "#011",
        name: "Cassian Rhys",
        avatar: image4,
        checkIn: "2025-10-30T10:32:00",
        checkOut: "2025-11-01T10:32:00",
        room: "G0-15",
        totalBill: 313.99,
        paymentStatus: "Completed",
      },
      {
        code: "#012",
        name: "Aurelia Dawn",
        avatar: image5,
        checkIn: "2025-10-27T13:15:00",
        checkOut: "2025-10-30T13:15:00",
        room: "L3-32",
        totalBill: 514.75,
        paymentStatus: "Completed",
      },
      {
        code: "#013",
        name: "Lucien Drake",
        avatar: image6,
        checkIn: "2025-10-18T00:18:00",
        checkOut: "2025-10-21T00:18:00",
        room: "G0-17",
        totalBill: 215.99,
        paymentStatus: "Completed",
      },
      {
        code: "#014",
        name: "Elara Quinn",
        avatar: image7,
        checkIn: "2025-10-15T20:23:00",
        checkOut: "2025-10-20T20:23:00",
        room: "L1-19",
        totalBill: 216.5,
        paymentStatus: "Pending",
      },
      {
        code: "#015",
        name: "Evander Cole",
        avatar: image8,
        checkIn: "2025-10-14T21:14:00",
        checkOut: "2025-10-18T21:14:00",
        room: "G0-11",
        totalBill: 112.99,
        paymentStatus: "Failed",
      },
      {
        code: "#016",
        name: "Isolde Faye",
        avatar: image9,
        checkIn: "2025-09-05T19:37:00",
        checkOut: "2025-09-10T19:37:00",
        room: "L2-24",
        totalBill: 513.5,
        paymentStatus: "Completed",
      },
      {
        code: "#017",
        name: "Theo Alistair",
        avatar: image10,
        checkIn: "2025-09-01T09:42:00",
        checkOut: "2025-09-02T09:42:00",
        room: "L3-30",
        totalBill: 115.25,
        paymentStatus: "Completed",
      },
      {
        code: "#018",
        name: "Joanna Watson",
        avatar: image1,
        checkIn: "2025-11-01T09:42:00",
        checkOut: "2025-11-03T09:42:00",
        room: "G0-12",
        totalBill: 166.0,
        paymentStatus: "Completed",
      },
      {
        code: "#019",
        name: "Orion Vale",
        avatar: image2,
        checkIn: "2025-11-02T10:08:00",
        checkOut: "2025-11-05T10:08:00",
        room: "L1-15",
        totalBill: 158.5,
        paymentStatus: "Pending",
      },
      {
        code: "#020",
        name: "Seraphina Nyx",
        avatar: image3,
        checkIn: "2025-11-03T11:12:00",
        checkOut: "2025-11-07T11:12:00",
        room: "L2-27",
        totalBill: 250.5,
        paymentStatus: "Failed",
      },
    ]);

    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = 10;
    const showAddPopup = ref(false);
    const isEditing = ref(false);
    const newGuest = ref({
      code: "",
      name: "",
      avatar: null as File | null,
      checkIn: "",
      checkOut: "",
      room: "",
      totalBill: 0,
      paymentStatus: "",
    });

    const filteredGuests = computed(() => {
      if (!searchQuery.value) return guests.value;
      const query = searchQuery.value.toLowerCase();
      return guests.value.filter(
        (guest: { code: string; name: string; room: string }) =>
          guest.code.toLowerCase().includes(query) ||
          guest.name.toLowerCase().includes(query) ||
          guest.room.toLowerCase().includes(query)
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredGuests.value.length / itemsPerPage)
    );

    const paginatedGuests = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredGuests.value.slice(start, end);
    });

    const toggleAddPopup = () => {
      showAddPopup.value = !showAddPopup.value;
      if (!showAddPopup.value) {
        resetForm();
        isEditing.value = false;
      }
    };

    const resetForm = () => {
      newGuest.value = {
        code: "",
        name: "",
        avatar: null,
        checkIn: "",
        checkOut: "",
        room: "",
        totalBill: 0,
        paymentStatus: "",
      };
    };

    const handleFileUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        newGuest.value.avatar = input.files[0];
      }
    };

    const submitGuest = async () => {
      if (isEditing.value) {
        const index = guests.value.findIndex(
          (g: { code: any }) => g.code === newGuest.value.code
        );
        if (index !== -1) {
          guests.value[index] = {
            ...newGuest.value,
            avatar: newGuest.value.avatar
              ? URL.createObjectURL(newGuest.value.avatar)
              : guests.value[index].avatar,
            totalBill: parseFloat(newGuest.value.totalBill.toString()),
          };
        }
      } else {
        const newGuestData = {
          ...newGuest.value,
          avatar: newGuest.value.avatar
            ? URL.createObjectURL(newGuest.value.avatar)
            : "@/assets/images/users/default.jpg",
          totalBill: parseFloat(newGuest.value.totalBill.toString()),
        };
        guests.value.push(newGuestData);
      }
      toggleAddPopup();
    };

    const deleteGuest = (code: string) => {
      if (confirm("Are you sure you want to delete this guest?")) {
        guests.value = guests.value.filter(
          (guest: { code: string }) => guest.code !== code
        );
      }
    };

    const changePage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    const formatDate = (date: string) => {
      const d = new Date(date);
      return d.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    // Optional: Fetch guests from an API
    /*
    const fetchGuests = async () => {
      try {
        const response = await fetch('https://api.example.com/guests');
        guests.value = await response.json();
      } catch (error) {
        console.error('Error fetching guests:', error);
      }
    };
    onMounted(fetchGuests);
    */

    return {
      guests,
      searchQuery,
      currentPage,
      itemsPerPage,
      showAddPopup,
      isEditing,
      newGuest,
      filteredGuests,
      totalPages,
      paginatedGuests,
      toggleAddPopup,
      handleFileUpload,
      submitGuest,
      deleteGuest,
      changePage,
      formatDate,
    };
  },
});
</script>
