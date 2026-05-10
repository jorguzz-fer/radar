<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <form class="relative sm:w-[265px]" @submit.prevent="searchProperties">
          <label
            class="leading-none absolute ltr:left-[13px] rtl:right-[13px] text-black dark:text-white mt-px top-1/2 -translate-y-1/2"
          >
            <i class="material-symbols-outlined !text-[20px]">search</i>
          </label>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search here....."
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
          />
        </form>
      </div>
      <div class="trezo-card-subtitle mt-[15px] sm:mt-0">
        <button
          type="button"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          @click="showAddPopup = true"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
              >add</i
            >
            Add New Property
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
                Property Name
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Address
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Views
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Date
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap"
              >
                Status
              </th>
              <th
                class="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap"
              ></th>
            </tr>
          </thead>
          <tbody class="text-black dark:text-white">
            <tr v-for="property in paginatedProperties" :key="property.id">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="form-check relative top-[2px]">
                    <input type="checkbox" class="cursor-pointer" />
                  </div>
                  {{ property.code }}
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[13px]">
                  <div class="rounded-md w-[60px]">
                    <img
                      :src="property.image"
                      class="inline-block rounded-md"
                      alt="property-image"
                    />
                  </div>
                  <div>
                    <span
                      class="block text-sm text-gray-500 dark:text-gray-400"
                      >{{ property.type }}</span
                    >
                    <a
                      href="rea-property-details.html"
                      class="font-medium inline-block text-[14px] md:text-[15px] transition-all hover:text-primary-500 mt-[3px]"
                      >{{ property.name }}</a
                    >
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                {{ property.address }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                {{ property.views.toLocaleString() }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                {{ property.date }}
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <span
                  :class="{
                    'inline-block text-xs font-medium px-[8px] text-success-600 border border-success-600 bg-success-100 text-sm rounded-[100px] dark:bg-[#15203c] dark:border-[#15203c]':
                      property.status === 'Active',
                    'inline-block text-xs font-medium px-[8px] text-danger-600 border border-danger-600 bg-danger-100 text-sm rounded-[100px] dark:bg-[#15203c] dark:border-[#15203c]':
                      property.status === 'Inactive',
                  }"
                  >{{ property.status }}</span
                >
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] border-b border-gray-100 dark:border-[#172036] ltr:first:border-l ltr:last:border-r rtl:first:border-r rtl:last:border-l"
              >
                <div class="flex items-center gap-[9px]">
                  <a
                    href="rea-property-details.html"
                    class="text-primary-500 leading-none custom-tooltip"
                    data-text="View"
                  >
                    <i class="material-symbols-outlined !text-md">visibility</i>
                  </a>
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
                    @click="deleteProperty(property.id)"
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
          Showing {{ paginatedProperties.length }} of
          {{ filteredProperties.length }} results
        </p>
        <ol class="mt-[10px] sm:mt-0">
          <li class="inline-block mx-[1px]">
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              :disabled="currentPage === 1"
              @click="currentPage--"
            >
              <span class="opacity-0">0</span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
                >chevron_left</i
              >
            </button>
          </li>
          <li
            v-for="page in totalPages"
            :key="page"
            class="inline-block mx-[4px]"
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
              @click="currentPage = page"
            >
              {{ page }}
            </button>
          </li>
          <li class="inline-block mx-[1px]">
            <button
              type="button"
              class="w-[31px] h-[31px] block leading-[29px] relative text-center rounded-md border border-gray-100 dark:border-[#172036] transition-all hover:bg-primary-500 hover:text-white hover:border-primary-500"
              :disabled="currentPage === totalPages"
              @click="currentPage++"
            >
              <span class="opacity-0">0</span>
              <i
                class="material-symbols-outlined left-0 right-0 absolute top-1/2 -translate-y-1/2"
                >chevron_right</i
              >
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
            <h5 class="!mb-0">Add New Property</h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              type="button"
              class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
              @click="showAddPopup = false"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>
        <div class="trezo-card-content">
          <form @submit.prevent="addProperty">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px] md:gap-[25px]"
            >
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                  >Code</label
                >
                <input
                  type="text"
                  v-model="newProperty.code"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="TRZ-32"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                  >Property Name</label
                >
                <input
                  type="text"
                  v-model="newProperty.name"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Golden Sun Room"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                  >Type</label
                >
                <input
                  type="text"
                  v-model="newProperty.type"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="Luxury Apartment"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                  >Address</label
                >
                <input
                  type="text"
                  v-model="newProperty.address"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="789 Northern Lights Drive, Calgary, AB"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                  >Views</label
                >
                <input
                  type="number"
                  v-model.number="newProperty.views"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="2012"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                  >Date</label
                >
                <input
                  type="date"
                  v-model="newProperty.date"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                  >Status</label
                >
                <select
                  v-model="newProperty.status"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[14px] block w-full outline-0 cursor-pointer transition-all focus:border-primary-500"
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                  >Upload Property Images</label
                >
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
                      accept="image/*"
                      @change="handleImageUpload"
                      class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
                    />
                  </div>
                  <ul id="fileList" v-if="newProperty.image">
                    <li>{{ newProperty.image }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
              <button
                type="button"
                class="rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[12px] bg-danger-500 text-white hover:bg-danger-400"
                @click="showAddPopup = false"
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
                    >add</i
                  >
                  Create
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

import image1 from "@/assets/images/properties/property15.jpg";
import image2 from "@/assets/images/properties/property16.jpg";
import image3 from "@/assets/images/properties/property17.jpg";
import image4 from "@/assets/images/properties/property18.jpg";
import image5 from "@/assets/images/properties/property19.jpg";
import image6 from "@/assets/images/properties/property20.jpg";
import image7 from "@/assets/images/properties/property21.jpg";
import image8 from "@/assets/images/properties/property22.jpg";
import image9 from "@/assets/images/properties/property23.jpg";
import image10 from "@/assets/images/properties/property24.jpg";

interface Property {
  id: string;
  code: string;
  name: string;
  type: string;
  address: string;
  views: number;
  date: string;
  status: "Active" | "Inactive";
  image: string;
}

export default defineComponent({
  name: "Properties",
  setup() {
    const properties = ref<Property[]>([
      {
        id: "1",
        code: "TRZ-32",
        name: "The Golden Haven",
        type: "Luxury Apartment",
        address: "123 Sunshine Boulevard, Vancouver, BC",
        views: 1450,
        date: "2025-11-12",
        status: "Active",
        image: image1,
      },
      {
        id: "2",
        code: "TRZ-35",
        name: "The Golden Haven",
        type: "High-End Villa",
        address: "456 Whispering Pines Lane, Toronto, ON",
        views: 1890,
        date: "2025-11-10",
        status: "Active",
        image: image2,
      },
      {
        id: "3",
        code: "TRZ-36",
        name: "The Golden Haven",
        type: "Beachfront House",
        address: "789 Northern Lights Drive, Calgary, AB",
        views: 1320,
        date: "2025-11-08",
        status: "Active",
        image: image3,
      },
      {
        id: "4",
        code: "TRZ-37",
        name: "The Golden Haven",
        type: "Mountain Cabin",
        address: "234 Seaside Avenue, Halifax, NS",
        views: 1124,
        date: "2025-11-10",
        status: "Inactive",
        image: image4,
      },
      {
        id: "5",
        code: "TRZ-39",
        name: "The GoldenQX Haven",
        type: "Business Center",
        address: "567 Greenfield Circle, Winnipeg, MB",
        views: 1532,
        date: "2025-10-18",
        status: "Active",
        image: image5,
      },
      {
        id: "6",
        code: "TRZ-42",
        name: "The Golden Haven",
        type: "Conference & Event Venue",
        address: "890 Innovation Street, Ottawa, ON",
        views: 7721,
        date: "2025-10-17",
        status: "Active",
        image: image6,
      },
      {
        id: "7",
        code: "TRZ-46",
        name: "The Golden Haven",
        type: "Luxury Resort",
        address: "345 Cityscape Road, Edmonton, AB",
        views: 5214,
        date: "2025-10-13",
        status: "Inactive",
        image: image7,
      },
      {
        id: "8",
        code: "TRZ-48",
        name: "The Golden Haven",
        type: "Beachfront Resort",
        address: "123 Sunshine Boulevard, Vancouver, BC",
        views: 1450,
        date: "2025-11-12",
        status: "Active",
        image: image8,
      },
      {
        id: "9",
        code: "TRZ-50",
        name: "The Golden Haven",
        type: "Eco-Friendly Hotel",
        address: "456 Whispering Pines Lane, Toronto, ON",
        views: 1890,
        date: "2025-11-10",
        status: "Active",
        image: image9,
      },
      {
        id: "10",
        code: "TRZ-52",
        name: "The Golden Haven",
        type: "Boutique Hotel",
        address: "789 Northern Lights Drive, Calgary, AB",
        views: 1320,
        date: "2025-11-08",
        status: "Active",
        image: image10,
      },
      {
        id: "11",
        code: "TRZ-39",
        name: "The GoldenQX Haven",
        type: "Business Center",
        address: "567 Greenfield Circle, Winnipeg, MB",
        views: 1532,
        date: "2025-10-18",
        status: "Active",
        image: image5,
      },
      {
        id: "12",
        code: "TRZ-42",
        name: "The Golden Haven",
        type: "Conference & Event Venue",
        address: "890 Innovation Street, Ottawa, ON",
        views: 7721,
        date: "2025-10-17",
        status: "Active",
        image: image6,
      },
      {
        id: "13",
        code: "TRZ-46",
        name: "The Golden Haven",
        type: "Luxury Resort",
        address: "345 Cityscape Road, Edmonton, AB",
        views: 5214,
        date: "2025-10-13",
        status: "Inactive",
        image: image7,
      },
      {
        id: "14",
        code: "TRZ-48",
        name: "The Golden Haven",
        type: "Beachfront Resort",
        address: "123 Sunshine Boulevard, Vancouver, BC",
        views: 1450,
        date: "2025-11-12",
        status: "Active",
        image: image8,
      },
      {
        id: "15",
        code: "TRZ-50",
        name: "The Golden Haven",
        type: "Eco-Friendly Hotel",
        address: "456 Whispering Pines Lane, Toronto, ON",
        views: 1890,
        date: "2025-11-10",
        status: "Active",
        image: image9,
      },
      {
        id: "16",
        code: "TRZ-52",
        name: "The Golden Haven",
        type: "Boutique Hotel",
        address: "789 Northern Lights Drive, Calgary, AB",
        views: 1320,
        date: "2025-11-08",
        status: "Active",
        image: image10,
      },
      {
        id: "17",
        code: "TRZ-32",
        name: "The Golden Haven",
        type: "Luxury Apartment",
        address: "123 Sunshine Boulevard, Vancouver, BC",
        views: 1450,
        date: "2025-11-12",
        status: "Active",
        image: image1,
      },
      {
        id: "18",
        code: "TRZ-35",
        name: "The Golden Haven",
        type: "High-End Villa",
        address: "456 Whispering Pines Lane, Toronto, ON",
        views: 1890,
        date: "2025-11-10",
        status: "Active",
        image: image2,
      },
      {
        id: "19",
        code: "TRZ-36",
        name: "The Golden Haven",
        type: "Beachfront House",
        address: "789 Northern Lights Drive, Calgary, AB",
        views: 1320,
        date: "2025-11-08",
        status: "Active",
        image: image3,
      },
      {
        id: "20",
        code: "TRZ-37",
        name: "The Golden Haven",
        type: "Mountain Cabin",
        address: "234 Seaside Avenue, Halifax, NS",
        views: 1124,
        date: "2025-11-10",
        status: "Inactive",
        image: image4,
      },
    ]);

    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = 10;
    const showAddPopup = ref(false);
    const newProperty = ref<Omit<Property, "id">>({
      code: "",
      name: "",
      type: "",
      address: "",
      views: 0,
      date: "",
      status: "Active",
      image: "",
    });

    const filteredProperties = computed(() => {
      if (!searchQuery.value) return properties.value;
      const query = searchQuery.value.toLowerCase();
      return properties.value.filter(
        (prop: { code: string; name: string; type: string; address: string }) =>
          prop.code.toLowerCase().includes(query) ||
          prop.name.toLowerCase().includes(query) ||
          prop.type.toLowerCase().includes(query) ||
          prop.address.toLowerCase().includes(query)
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredProperties.value.length / itemsPerPage)
    );

    const paginatedProperties = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredProperties.value.slice(start, end);
    });

    const searchProperties = () => {
      currentPage.value = 1;
    };

    const addProperty = () => {
      const id = `prop-${Date.now()}`;
      properties.value.push({
        id,
        ...newProperty.value,
      });
      newProperty.value = {
        code: "",
        name: "",
        type: "",
        address: "",
        views: 0,
        date: "",
        status: "Active",
        image: "",
      };
      showAddPopup.value = false;
    };

    const deleteProperty = (id: string) => {
      properties.value = properties.value.filter(
        (prop: { id: string }) => prop.id !== id
      );
      if (paginatedProperties.value.length === 0 && currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const handleImageUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          newProperty.value.image = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      }
    };

    return {
      properties,
      searchQuery,
      currentPage,
      itemsPerPage,
      showAddPopup,
      newProperty,
      filteredProperties,
      paginatedProperties,
      totalPages,
      searchProperties,
      addProperty,
      deleteProperty,
      handleImageUpload,
    };
  },
});
</script>
