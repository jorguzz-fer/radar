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
            v-model="searchQuery"
            placeholder="Search here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
            @input="filterRooms"
          />
        </form>
      </div>

      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <button
          type="button"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          @click="togglePopup(true)"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add New Room
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
                    <input
                      type="checkbox"
                      class="cursor-pointer"
                      v-model="selectAll"
                      @change="toggleSelectAll"
                    />
                  </div>
                  Code
                </div>
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Room Name
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Bed Type
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Floor
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Facilities
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tl-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Rate
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tr-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              >
                Status
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap ltr:first:rounded-tr-md ltr:last:rounded-tr-md rtl:first:rounded-tr-md rtl:last:rounded-tl-md"
              ></th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="room in paginatedRooms" :key="room.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="form-check relative top-[2px]">
                    <input
                      type="checkbox"
                      class="cursor-pointer"
                      v-model="selectedRooms"
                      :value="room.id"
                    />
                  </div>
                  {{ room.code }}
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[13px]">
                  <div class="rounded-md w-[60px]">
                    <img
                      :src="room.image"
                      class="inline-block rounded-md"
                      alt="room-image"
                    />
                  </div>
                  <div>
                    <a
                      href="room-details.html"
                      class="font-medium inline-block text-[14px] md:text-[15px] transition-all hover:text-primary-500 mb-[2px]"
                    >
                      {{ room.name }}
                    </a>
                    <span
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      {{ room.hotel }}
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                {{ room.bedType }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                {{ room.floor }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <p
                  class="w-[300px] whitespace-normal text-gray-500 dark:text-gray-400"
                >
                  {{ room.facilities.join(", ") }}
                </p>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                ${{ room.rate }}/night
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  class="inline-block text-xs font-medium px-[8px] text-sm rounded-[100px] dark:bg-[#15203c] dark:border-[#15203c]"
                  :class="
                    room.available
                      ? 'text-success-600 border border-success-600 bg-success-100'
                      : 'text-danger-600 border border-danger-600 bg-danger-100'
                  "
                >
                  {{ room.available ? "Available" : "Not Available" }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[9px]">
                  <NuxtLink
                    to="/hotel/room-details"
                    class="text-primary-500 leading-none custom-tooltip"
                    id="customTooltip"
                    data-text="View"
                  >
                    <i class="material-symbols-outlined !text-md">
                      visibility
                    </i>
                  </NuxtLink>
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
                    @click="deleteRoom(room.id.toString())"
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
        class="px-[20px] py-[12px] md:py-[15px] rounded-b-md border-l border-r border-b border-gray-100 dark:border-[#172036] sm:flex sm:items-center justify-between"
      >
        <p class="!mb-0 text-sm">
          Showing {{ showingStart }} to {{ showingEnd }} of
          {{ filteredRooms.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li
            class="inline-block mx-[1px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0"
          >
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              @click="changePage(currentPage - 1)"
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
              :class="[
                'w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border transition-all',
                currentPage === page
                  ? 'border-primary-500 bg-primary-500 text-white'
                  : 'border-gray-100 dark:border-[#172036] hover:bg-primary-500 hover:text-white hover:border-primary-500',
              ]"
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
    :class="{ active: showPopup }"
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
              {{ isEditing ? "Edit Room" : "Add New Room" }}
            </h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              type="button"
              class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
              @click="togglePopup(false)"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>
        <div class="trezo-card-content">
          <form @submit.prevent="saveRoom">
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
                  v-model="newRoom.code"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="TRZ-32"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Room Name
                </label>
                <input
                  type="text"
                  v-model="newRoom.name"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Golden Sun Room"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Level
                </label>
                <input
                  type="text"
                  v-model="newRoom.floor"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="L2-24"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Rate
                </label>
                <input
                  type="number"
                  v-model.number="newRoom.rate"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="157"
                  required
                  min="0"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Facilities
                </label>
                <input
                  type="text"
                  v-model="facilitiesInput"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="High-speed Wi-Fi, Comfortable bedding"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Status
                </label>
                <select
                  v-model="newRoom.available"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                  required
                >
                  <option :value="true">Available</option>
                  <option :value="false">Not Available</option>
                </select>
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Bed Type
                </label>
                <select
                  v-model="newRoom.bedType"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                  required
                >
                  <option value="Double Bed">Double Bed</option>
                  <option value="Single Bed">Single Bed</option>
                  <option value="Master Bed">Master Bed</option>
                </select>
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Hotel
                </label>
                <input
                  type="text"
                  v-model="newRoom.hotel"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Elysian Grand"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Upload Room Images
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
                      id="fileInput"
                      multiple
                      accept="image/*"
                      class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
                      @change="handleFileUpload"
                    />
                  </div>
                  <ul id="fileList" class="mt-2">
                    <li
                      v-for="(file, index) in newRoom.files"
                      :key="index"
                      class="text-sm text-gray-500 flex items-center"
                    >
                      {{ file.name }}
                      <button
                        type="button"
                        class="ml-2 text-danger-500"
                        @click="removeFile(index)"
                      >
                        <i class="ri-close-fill"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
              <button
                type="button"
                class="rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[12px] bg-danger-500 text-white hover:bg-danger-400"
                @click="togglePopup(false)"
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
                    {{ isEditing ? "edit" : "add" }}
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

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { RouterLink } from "vue-router";

import image1 from "@/assets/images/rooms/room1.jpg";
import image2 from "@/assets/images/rooms/room2.jpg";
import image3 from "@/assets/images/rooms/room3.jpg";
import image4 from "@/assets/images/rooms/room4.jpg";
import image5 from "@/assets/images/rooms/room5.jpg";
import image6 from "@/assets/images/rooms/room6.jpg";
import image7 from "@/assets/images/rooms/room7.jpg";
import image8 from "@/assets/images/rooms/room8.jpg";
import image9 from "@/assets/images/rooms/room9.jpg";

interface Room {
  id: number;
  code: string;
  name: string;
  hotel: string;
  image: string;
  bedType: string;
  floor: string;
  facilities: string[];
  rate: number;
  available: boolean;
  isChecked: boolean; // For checkbox selection
}

const rooms = ref<Room[]>([
  {
    id: 1,
    code: "TRZ-32",
    name: "Serenity Suite",
    hotel: "Elysian Grand",
    image: image1,
    bedType: "Double Bed",
    floor: "G-02",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 157,
    available: true,
    isChecked: false,
  },
  {
    id: 2,
    code: "TRZ-35",
    name: "Cozy Book Nook",
    hotel: "Celestial Haven",
    image: image2,
    bedType: "Single Bed",
    floor: "G-01",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 146,
    available: true,
    isChecked: false,
  },
  {
    id: 3,
    code: "TRZ-36",
    name: "Velvet Orchid",
    hotel: "Opulent Orchid",
    image: image3,
    bedType: "Master Bed",
    floor: "L1-15",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 125,
    available: true,
    isChecked: false,
  },
  {
    id: 4,
    code: "TRZ-37",
    name: "Vintage Studio",
    hotel: "The Aurelia",
    image: image4,
    bedType: "Double Bed",
    floor: "L1-17",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 159,
    available: false,
    isChecked: false,
  },
  {
    id: 5,
    code: "TRZ-39",
    name: "Blissful Dream",
    hotel: "Regal Horizon",
    image: image5,
    bedType: "Master Bed",
    floor: "L2-22",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 120,
    available: true,
    isChecked: false,
  },
  {
    id: 6,
    code: "TRZ-42",
    name: "Rustic Hearth",
    hotel: "Velvet Vista",
    image: image6,
    bedType: "Single Bed",
    floor: "L2-24",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 100,
    available: true,
    isChecked: false,
  },
  {
    id: 7,
    code: "TRZ-99",
    name: "Enchanted Forest",
    hotel: "The Ember Nest",
    image: image7,
    bedType: "Double Bed",
    floor: "L2-28",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 145,
    available: false,
    isChecked: false,
  },
  {
    id: 8,
    code: "TRZ-21",
    name: "Velvet Orchid",
    hotel: "Azure Retreat",
    image: image8,
    bedType: "Double Bed",
    floor: "G-12",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 122,
    available: true,
    isChecked: false,
  },
  {
    id: 9,
    code: "TRZ-32",
    name: "Cozy Book Nook",
    hotel: "Nocturne Haven",
    image: image9,
    bedType: "Double Bed",
    floor: "G-03",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 99,
    available: true,
    isChecked: false,
  },
  {
    id: 10,
    code: "TRZ-32",
    name: "Serenity Suite",
    hotel: "Elysian Grand",
    image: image1,
    bedType: "Double Bed",
    floor: "G-02",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 17,
    available: true,
    isChecked: false,
  },
  {
    id: 11,
    code: "TRZ-35",
    name: "Cozy Book Nook",
    hotel: "Celestial Haven",
    image: image2,
    bedType: "Single Bed",
    floor: "G-01",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 146,
    available: true,
    isChecked: false,
  },
  {
    id: 12,
    code: "TRZ-36",
    name: "Velvet Orchid",
    hotel: "Opulent Orchid",
    image: image3,
    bedType: "Master Bed",
    floor: "L1-15",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 125,
    available: true,
    isChecked: false,
  },
  {
    id: 13,
    code: "TRZ-37",
    name: "Vintage Studio",
    hotel: "The Aurelia",
    image: image4,
    bedType: "Double Bed",
    floor: "L1-17",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 159,
    available: false,
    isChecked: false,
  },
  {
    id: 14,
    code: "TRZ-39",
    name: "Blissful Dream",
    hotel: "Regal Horizon",
    image: image5,
    bedType: "Master Bed",
    floor: "L2-22",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 120,
    available: true,
    isChecked: false,
  },
  {
    id: 15,
    code: "TRZ-42",
    name: "Rustic Hearth",
    hotel: "Velvet Vista",
    image: image6,
    bedType: "Single Bed",
    floor: "L2-24",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 100,
    available: true,
    isChecked: false,
  },
  {
    id: 16,
    code: "TRZ-99",
    name: "Enchanted Forest",
    hotel: "The Ember Nest",
    image: image7,
    bedType: "Double Bed",
    floor: "L2-28",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 145,
    available: false,
    isChecked: false,
  },
  {
    id: 17,
    code: "TRZ-21",
    name: "Velvet Orchid",
    hotel: "Azure Retreat",
    image: image8,
    bedType: "Double Bed",
    floor: "G-12",
    facilities: [
      "High-speed Wi-Fi",
      "Comfortable bedding and pillows",
      "Temperature control (AC/heating)",
    ],
    rate: 122,
    available: true,
    isChecked: false,
  },
]);

const showPopup = ref(false);
const isEditing = ref(false);
const editingRoomCode = ref("");
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 10;
const selectAll = ref(false);

const newRoom = ref({
  code: "",
  name: "",
  hotel: "",
  image: "",
  bedType: "",
  floor: "",
  facilities: [] as string[],
  rate: 0,
  available: true,
  files: [] as File[],
});

const facilitiesInput = ref("");

const selectedRooms = computed(() =>
  rooms.value.filter((room: { isChecked: any }) => room.isChecked)
);

const filteredRooms = computed(() => {
  if (!searchQuery.value) return rooms.value;
  const query = searchQuery.value.toLowerCase();
  return rooms.value.filter(
    (room: {
      name: string;
      code: string;
      hotel: string;
      bedType: string;
      floor: string;
      facilities: any[];
    }) =>
      room.name.toLowerCase().includes(query) ||
      room.code.toLowerCase().includes(query) ||
      room.hotel.toLowerCase().includes(query) ||
      room.bedType.toLowerCase().includes(query) ||
      room.floor.toLowerCase().includes(query) ||
      room.facilities.some((facility) => facility.toLowerCase().includes(query))
  );
});

const totalPages = computed(() =>
  Math.ceil(filteredRooms.value.length / itemsPerPage)
);

const paginatedRooms = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredRooms.value.slice(start, end);
});

const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1);

const showingEnd = computed(() => {
  const end = currentPage.value * itemsPerPage;
  return end > filteredRooms.value.length ? filteredRooms.value.length : end;
});

const toggleSelectAll = () => {
  rooms.value.forEach((room: { isChecked: any }) => {
    room.isChecked = selectAll.value;
  });
};

const updateSelectAll = () => {
  selectAll.value =
    paginatedRooms.value.length > 0 &&
    paginatedRooms.value.every((room: { isChecked: any }) => room.isChecked);
};

const deleteSelectedRooms = () => {
  if (
    confirm(
      `Are you sure you want to delete ${selectedRooms.value.length} room(s)?`
    )
  ) {
    rooms.value = rooms.value.filter(
      (room: { isChecked: any }) => !room.isChecked
    );
    selectAll.value = false;
  }
};

const togglePopup = (show: boolean) => {
  showPopup.value = show;
  if (!show) {
    resetForm();
  }
};

const resetForm = () => {
  newRoom.value = {
    code: "",
    name: "",
    hotel: "",
    image: "",
    bedType: "",
    floor: "",
    facilities: [],
    rate: 0,
    available: true,
    files: [],
  };
  facilitiesInput.value = "";
  isEditing.value = false;
  editingRoomCode.value = "";
};

const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    newRoom.value.files = Array.from(input.files);
  }
};

const removeFile = (index: number) => {
  newRoom.value.files.splice(index, 1);
};

const saveRoom = () => {
  // Validation
  if (
    !newRoom.value.code ||
    !newRoom.value.name ||
    !newRoom.value.floor ||
    !newRoom.value.hotel ||
    !newRoom.value.bedType
  ) {
    alert(
      "Please fill in all required fields (Code, Room Name, Level, Hotel, Bed Type)."
    );
    return;
  }
  if (isNaN(newRoom.value.rate) || newRoom.value.rate <= 0) {
    alert("Please enter a valid rate.");
    return;
  }

  // Parse facilities
  newRoom.value.facilities = facilitiesInput.value
    .split(",")
    .map((f: string) => f.trim())
    .filter((f: any) => f);

  if (isEditing.value) {
    const index = rooms.value.findIndex(
      (room: { code: any }) => room.code === editingRoomCode.value
    );
    if (index !== -1) {
      rooms.value[index] = {
        ...rooms.value[index],
        code: newRoom.value.code,
        name: newRoom.value.name,
        hotel: newRoom.value.hotel,
        bedType: newRoom.value.bedType,
        floor: newRoom.value.floor,
        facilities: newRoom.value.facilities,
        rate: newRoom.value.rate,
        available: newRoom.value.available,
        image: newRoom.value.files[0]
          ? URL.createObjectURL(newRoom.value.files[0])
          : rooms.value[index].image,
        isChecked: false,
      };
    }
  } else {
    rooms.value.push({
      id: rooms.value.length
        ? Math.max(...rooms.value.map((r: { id: any }) => r.id)) + 1
        : 1,
      code: newRoom.value.code,
      name: newRoom.value.name,
      hotel: newRoom.value.hotel,
      image: newRoom.value.files[0]
        ? URL.createObjectURL(newRoom.value.files[0])
        : image1,
      bedType: newRoom.value.bedType,
      floor: newRoom.value.floor,
      facilities: newRoom.value.facilities,
      rate: newRoom.value.rate,
      available: newRoom.value.available,
      isChecked: false,
    });
  }
  togglePopup(false);
};

const editRoom = (room: Room) => {
  newRoom.value = {
    ...room,
    files: [],
  };
  facilitiesInput.value = room.facilities.join(", ");
  isEditing.value = true;
  editingRoomCode.value = room.code;
  togglePopup(true);
};

const deleteRoom = (code: string) => {
  if (confirm("Are you sure you want to delete this room?")) {
    rooms.value = rooms.value.filter(
      (room: { code: string }) => room.code !== code
    );
  }
};

const filterRooms = () => {
  currentPage.value = 1; // Reset to first page on search
};

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

onMounted(() => {
  filterRooms();
});
</script>
