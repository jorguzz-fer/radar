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
            <i class="material-symbols-outlined !text-[20px]">search</i>
          </label>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search here....."
            @input="filterDishes"
            class="bg-gray-50 border border-gray-50 h-[36px] text-xs rounded-md w-full block text-black pt-[11px] pb-[12px] ltr:pl-[38px] rtl:pr-[38px] ltr:pr-[13px] ltr:md:pr-[16px] rtl:pl-[13px] rtl:md:pl-[16px] placeholder:text-gray-500 outline-0 dark:bg-[#15203c] dark:text-white dark:border-[#15203c] dark:placeholder:text-gray-400"
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
            Add New Dish
          </span>
        </button>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[14px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="form-check relative top-[1.2px]">
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
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[14px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                Item
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[14px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                Price
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1 whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[14px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                Ingredients
              </th>
              <th
                class="whitespace-nowrap uppercase text-[10px] font-bold tracking-[1px] ltr:text-left rtl:text-right pt-0 pb-[14px] px-[20px] text-gray-500 dark:text-gray-400 ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:first:pl-0"
              >
                Action
              </th>
            </tr>
          </thead>

          <tbody class="text-black dark:text-white">
            <tr v-for="dish in paginatedDishes" :key="dish.code">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="form-check relative top-[1.2px]">
                    <input
                      type="checkbox"
                      class="cursor-pointer"
                      v-model="dish.isChecked"
                      @change="updateSelectAll"
                    />
                  </div>
                  <span
                    class="block text-xs font-semibold text-gray-600 dark:text-gray-400"
                  >
                    {{ dish.code }}
                  </span>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="rounded-full w-[30px]">
                    <img
                      :src="dish.image"
                      class="inline-block rounded-full"
                      alt="dish-image"
                    />
                  </div>
                  <a
                    href="dish-details.html"
                    class="font-semibold inline-block transition-all hover:text-primary-500"
                  >
                    {{ dish.name }}
                  </a>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-500 dark:text-gray-400"
                >
                  {{ dish.price }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
              >
                <span
                  class="block text-xs font-semibold text-gray-500 dark:text-gray-400"
                >
                  {{ dish.ingredients }}
                </span>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[14px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0"
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
                    @click="editDish(dish)"
                  >
                    <i class="material-symbols-outlined !text-md">edit</i>
                  </button>
                  <button
                    type="button"
                    class="text-danger-500 leading-none custom-tooltip"
                    data-text="Delete"
                    @click="deleteDish(dish.code)"
                  >
                    <i class="material-symbols-outlined !text-md">delete</i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="pt-[14px] sm:flex sm:items-center justify-between">
        <p class="!mb-0 text-xs">
          Showing {{ paginatedDishes.length }} of
          {{ filteredDishes.length }} results
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

  <!-- Add/Edit Dish Popup -->
  <div
    class="add-new-popup z-[999] fixed transition-all inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px]"
    :class="{
      'opacity-100 pointer-events-auto active': showPopup,
      'opacity-0 pointer-events-none': !showPopup,
    }"
  >
    <div
      class="popup-dialog flex transition-all max-w-[550px] md:max-w-[800px] min-h-full items-center mx-auto"
    >
      <div
        class="trezo-card w-full bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
      >
        <div
          class="trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md"
        >
          <div class="trezo-card-title">
            <h5 class="!mb-0">
              {{ isEditing ? "Edit Dish" : "Add New Dish" }}
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
          <form @submit.prevent="saveDish">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] md:gap-[25px]"
            >
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Dish Code
                </label>
                <input
                  v-model="newDish.code"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. #3215"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Name
                </label>
                <input
                  v-model="newDish.name"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. Parsley Chicken"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Price
                </label>
                <input
                  v-model="newDish.price"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. $12.50"
                  required
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Calorie
                </label>
                <input
                  v-model="newDish.calorie"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. 3215 Kcal"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Carbs
                </label>
                <input
                  v-model="newDish.carbs"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. 525 gm"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Protein
                </label>
                <input
                  v-model="newDish.protein"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. 125 gm"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Fibres
                </label>
                <input
                  v-model="newDish.fibres"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. 15 gm"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Fat
                </label>
                <input
                  v-model="newDish.fat"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. 25 gm"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Vitamins
                </label>
                <input
                  v-model="newDish.vitamins"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. 13 gm"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Sugar
                </label>
                <input
                  v-model="newDish.sugar"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. 214 gm"
                />
              </div>
              <div>
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Minerals
                </label>
                <input
                  v-model="newDish.minerals"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. 5 gm"
                />
              </div>
              <div class="sm:col-span-1">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Order In Queue
                </label>
                <input
                  v-model="newDish.orderInQueue"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. 17"
                />
              </div>
              <div class="sm:col-span-3">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Ingredients Details
                </label>
                <input
                  v-model="newDish.ingredients"
                  type="text"
                  class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder="E.g. Parsley, chicken, mozzarella, buffalo sauce"
                  required
                />
              </div>
              <div class="sm:col-span-3">
                <label
                  class="mb-[10px] text-black dark:text-white font-medium block"
                >
                  Upload Item Images
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
                      @change="handleFileUpload"
                      class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
                    />
                  </div>
                  <ul id="fileList">
                    <li v-for="(file, index) in newDish.files" :key="index">
                      {{ file.name }}
                      <button
                        @click="removeFile(index)"
                        class="text-danger-500"
                      >
                        Remove
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
                    add
                  </i>
                  {{ isEditing ? "Update Dish" : "Add Dish" }}
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

import image1 from "@/assets/images/restaurant/menu1.png";
import image2 from "@/assets/images/restaurant/menu2.png";
import image3 from "@/assets/images/restaurant/menu3.png";
import image4 from "@/assets/images/restaurant/menu4.png";
import image5 from "@/assets/images/restaurant/menu5.png";
import image6 from "@/assets/images/restaurant/menu6.png";
import image7 from "@/assets/images/restaurant/menu7.png";
import image8 from "@/assets/images/restaurant/menu8.png";
import image9 from "@/assets/images/restaurant/menu9.png";
import image10 from "@/assets/images/restaurant/menu10.png";

export default defineComponent({
  name: "Menus",
  setup() {
    const dishes = ref([
      {
        code: "#001",
        name: "Fish Cutlet",
        price: "$16.00",
        ingredients: "pan-seared chicken, lemon zest, garlic butter, parsley",
        image: image1,
        calorie: "500 Kcal",
        carbs: "30 gm",
        protein: "25 gm",
        fibres: "5 gm",
        fat: "20 gm",
        vitamins: "10 gm",
        sugar: "5 gm",
        minerals: "3 gm",
        orderInQueue: "1",
        isChecked: false,
      },
      {
        code: "#002",
        name: "Chicken Carbonara Spaghetti",
        price: "$15.50",
        ingredients: "grilled chicken, honey mustard glaze, spinach, garlic",
        image: image2,
        calorie: "600 Kcal",
        carbs: "40 gm",
        protein: "30 gm",
        fibres: "6 gm",
        fat: "22 gm",
        vitamins: "12 gm",
        sugar: "6 gm",
        minerals: "4 gm",
        orderInQueue: "2",
        isChecked: false,
      },
      {
        code: "#003",
        name: "Chicken Piccata Spaghetti",
        price: "$14.50",
        ingredients: "shredded chicken, buffalo sauce, ranch dressing",
        image: image3,
        calorie: "550 Kcal",
        carbs: "35 gm",
        protein: "28 gm",
        fibres: "5 gm",
        fat: "21 gm",
        vitamins: "11 gm",
        sugar: "5 gm",
        minerals: "3 gm",
        orderInQueue: "3",
        isChecked: false,
      },
      {
        code: "#004",
        name: "Thai Peanut Chicken Spaghetti",
        price: "$13.99",
        ingredients:
          "spaghetti, chicken, crispy bacon, egg yolk, Parmesan, cream",
        image: image4,
        calorie: "620 Kcal",
        carbs: "45 gm",
        protein: "32 gm",
        fibres: "7 gm",
        fat: "25 gm",
        vitamins: "13 gm",
        sugar: "7 gm",
        minerals: "5 gm",
        orderInQueue: "4",
        isChecked: false,
      },
      {
        code: "#005",
        name: "Chicken Bolognese Spaghetti",
        price: "$14.75",
        ingredients: "pan-fried chicken, capers, white wine sauce, lemon",
        image: image5,
        calorie: "580 Kcal",
        carbs: "38 gm",
        protein: "29 gm",
        fibres: "6 gm",
        fat: "23 gm",
        vitamins: "12 gm",
        sugar: "6 gm",
        minerals: "4 gm",
        orderInQueue: "5",
        isChecked: false,
      },
      {
        code: "#006",
        name: "Mediterranean Chicken Spaghetti",
        price: "$15.99",
        ingredients: "grilled chicken, olives, sun-dried tomatoes, feta",
        image: image6,
        calorie: "590 Kcal",
        carbs: "37 gm",
        protein: "30 gm",
        fibres: "6 gm",
        fat: "24 gm",
        vitamins: "14 gm",
        sugar: "5 gm",
        minerals: "4 gm",
        orderInQueue: "6",
        isChecked: false,
      },
      {
        code: "#007",
        name: "Chicken Parmesan Spaghetti",
        price: "$16.50",
        ingredients: "breaded chicken cutlets, marinara sauce, spaghetti",
        image: image7,
        calorie: "650 Kcal",
        carbs: "50 gm",
        protein: "35 gm",
        fibres: "8 gm",
        fat: "28 gm",
        vitamins: "15 gm",
        sugar: "8 gm",
        minerals: "6 gm",
        orderInQueue: "7",
        isChecked: false,
      },
      {
        code: "#008",
        name: "Chicken and Mushroom Spaghetti",
        price: "$12.99",
        ingredients: "spaghetti, chicken slices, sautéed mushrooms, garlic",
        image: image8,
        calorie: "540 Kcal",
        carbs: "36 gm",
        protein: "27 gm",
        fibres: "5 gm",
        fat: "20 gm",
        vitamins: "11 gm",
        sugar: "5 gm",
        minerals: "3 gm",
        orderInQueue: "8",
        isChecked: false,
      },
      {
        code: "#009",
        name: "Teriyaki Chicken Spaghetti Stir-Fry",
        price: "$13.50",
        ingredients:
          "chicken strips, teriyaki sauce, bell peppers, sesame seeds",
        image: image9,
        calorie: "570 Kcal",
        carbs: "39 gm",
        protein: "28 gm",
        fibres: "6 gm",
        fat: "22 gm",
        vitamins: "12 gm",
        sugar: "6 gm",
        minerals: "4 gm",
        orderInQueue: "9",
        isChecked: false,
      },
      {
        code: "#010",
        name: "Chicken Fajita Spaghetti",
        price: "$15.25",
        ingredients: "chicken, fajita seasoning, bell peppers",
        image: image10,
        calorie: "560 Kcal",
        carbs: "38 gm",
        protein: "29 gm",
        fibres: "6 gm",
        fat: "21 gm",
        vitamins: "13 gm",
        sugar: "5 gm",
        minerals: "4 gm",
        orderInQueue: "10",
        isChecked: false,
      },

      {
        code: "#011",
        name: "Thai Peanut Chicken Spaghetti",
        price: "$13.99",
        ingredients:
          "spaghetti, chicken, crispy bacon, egg yolk, Parmesan, cream",
        image: image4,
        calorie: "620 Kcal",
        carbs: "45 gm",
        protein: "32 gm",
        fibres: "7 gm",
        fat: "25 gm",
        vitamins: "13 gm",
        sugar: "7 gm",
        minerals: "5 gm",
        orderInQueue: "11",
        isChecked: false,
      },
      {
        code: "#012",
        name: "Chicken Bolognese Spaghetti",
        price: "$14.75",
        ingredients: "pan-fried chicken, capers, white wine sauce, lemon",
        image: image5,
        calorie: "580 Kcal",
        carbs: "38 gm",
        protein: "29 gm",
        fibres: "6 gm",
        fat: "23 gm",
        vitamins: "12 gm",
        sugar: "6 gm",
        minerals: "4 gm",
        orderInQueue: "12",
        isChecked: false,
      },
      {
        code: "#013",
        name: "Teriyaki Chicken Spaghetti Stir-Fry",
        price: "$13.50",
        ingredients:
          "chicken strips, teriyaki sauce, bell peppers, sesame seeds",
        image: image9,
        calorie: "570 Kcal",
        carbs: "39 gm",
        protein: "28 gm",
        fibres: "6 gm",
        fat: "22 gm",
        vitamins: "12 gm",
        sugar: "6 gm",
        minerals: "4 gm",
        orderInQueue: "13",
        isChecked: false,
      },
      {
        code: "#014",
        name: "Chicken Fajita Spaghetti",
        price: "$15.25",
        ingredients: "chicken, fajita seasoning, bell peppers",
        image: image10,
        calorie: "560 Kcal",
        carbs: "38 gm",
        protein: "29 gm",
        fibres: "6 gm",
        fat: "21 gm",
        vitamins: "13 gm",
        sugar: "5 gm",
        minerals: "4 gm",
        orderInQueue: "14",
        isChecked: false,
      },
      {
        code: "#015",
        name: "Fish Cutlet",
        price: "$16.00",
        ingredients: "pan-seared chicken, lemon zest, garlic butter, parsley",
        image: image1,
        calorie: "500 Kcal",
        carbs: "30 gm",
        protein: "25 gm",
        fibres: "5 gm",
        fat: "20 gm",
        vitamins: "10 gm",
        sugar: "5 gm",
        minerals: "3 gm",
        orderInQueue: "15",
        isChecked: false,
      },
      {
        code: "#016",
        name: "Chicken Carbonara Spaghetti",
        price: "$15.50",
        ingredients: "grilled chicken, honey mustard glaze, spinach, garlic",
        image: image2,
        calorie: "600 Kcal",
        carbs: "40 gm",
        protein: "30 gm",
        fibres: "6 gm",
        fat: "22 gm",
        vitamins: "12 gm",
        sugar: "6 gm",
        minerals: "4 gm",
        orderInQueue: "16",
        isChecked: false,
      },
      {
        code: "#017",
        name: "Chicken Piccata Spaghetti",
        price: "$14.50",
        ingredients: "shredded chicken, buffalo sauce, ranch dressing",
        image: image3,
        calorie: "550 Kcal",
        carbs: "35 gm",
        protein: "28 gm",
        fibres: "5 gm",
        fat: "21 gm",
        vitamins: "11 gm",
        sugar: "5 gm",
        minerals: "3 gm",
        orderInQueue: "3",
        isChecked: false,
      },
      {
        code: "#018",
        name: "Mediterranean Chicken Spaghetti",
        price: "$15.99",
        ingredients: "grilled chicken, olives, sun-dried tomatoes, feta",
        image: image6,
        calorie: "590 Kcal",
        carbs: "37 gm",
        protein: "30 gm",
        fibres: "6 gm",
        fat: "24 gm",
        vitamins: "14 gm",
        sugar: "5 gm",
        minerals: "4 gm",
        orderInQueue: "6",
        isChecked: false,
      },
      {
        code: "#019",
        name: "Chicken Parmesan Spaghetti",
        price: "$16.50",
        ingredients: "breaded chicken cutlets, marinara sauce, spaghetti",
        image: image7,
        calorie: "650 Kcal",
        carbs: "50 gm",
        protein: "35 gm",
        fibres: "8 gm",
        fat: "28 gm",
        vitamins: "15 gm",
        sugar: "8 gm",
        minerals: "6 gm",
        orderInQueue: "7",
        isChecked: false,
      },
      {
        code: "#020",
        name: "Chicken and Mushroom Spaghetti",
        price: "$12.99",
        ingredients: "spaghetti, chicken slices, sautéed mushrooms, garlic",
        image: image8,
        calorie: "540 Kcal",
        carbs: "36 gm",
        protein: "27 gm",
        fibres: "5 gm",
        fat: "20 gm",
        vitamins: "11 gm",
        sugar: "5 gm",
        minerals: "3 gm",
        orderInQueue: "8",
        isChecked: false,
      },
    ]);

    const newDish = ref({
      code: "",
      name: "",
      price: "",
      ingredients: "",
      image: "",
      calorie: "",
      carbs: "",
      protein: "",
      fibres: "",
      fat: "",
      vitamins: "",
      sugar: "",
      minerals: "",
      orderInQueue: "",
      files: [] as File[],
    });

    const showPopup = ref(false);
    const isEditing = ref(false);
    const editingDishCode = ref("");
    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = 10;
    const selectAll = ref(false);

    const selectedDishes = computed(() =>
      dishes.value.filter((dish: { isChecked: any }) => dish.isChecked)
    );

    const filteredDishes = computed(() => {
      if (!searchQuery.value) return dishes.value;
      const query = searchQuery.value.toLowerCase();
      return dishes.value.filter(
        (dish: { name: string; code: string; ingredients: string }) =>
          dish.name.toLowerCase().includes(query) ||
          dish.code.toLowerCase().includes(query) ||
          dish.ingredients.toLowerCase().includes(query)
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredDishes.value.length / itemsPerPage)
    );

    const paginatedDishes = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredDishes.value.slice(start, end);
    });

    const toggleSelectAll = () => {
      dishes.value.forEach((dish: { isChecked: any }) => {
        dish.isChecked = selectAll.value;
      });
    };

    const updateSelectAll = () => {
      selectAll.value =
        paginatedDishes.value.length > 0 &&
        paginatedDishes.value.every(
          (dish: { isChecked: any }) => dish.isChecked
        );
    };

    const deleteSelectedDishes = () => {
      if (
        confirm(
          `Are you sure you want to delete ${selectedDishes.value.length} dish(es)?`
        )
      ) {
        dishes.value = dishes.value.filter(
          (dish: { isChecked: any }) => !dish.isChecked
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
      newDish.value = {
        code: "",
        name: "",
        price: "",
        ingredients: "",
        image: "",
        calorie: "",
        carbs: "",
        protein: "",
        fibres: "",
        fat: "",
        vitamins: "",
        sugar: "",
        minerals: "",
        orderInQueue: "",
        files: [],
      };
      isEditing.value = false;
      editingDishCode.value = "";
    };

    const saveDish = () => {
      if (isEditing.value) {
        const index = dishes.value.findIndex(
          (dish: { code: any }) => dish.code === editingDishCode.value
        );
        if (index !== -1) {
          dishes.value[index] = {
            ...newDish.value,
            image: newDish.value.files[0]
              ? URL.createObjectURL(newDish.value.files[0])
              : dishes.value[index].image,
            isChecked: false,
          };
        }
      } else {
        dishes.value.push({
          ...newDish.value,
          image: newDish.value.files[0]
            ? URL.createObjectURL(newDish.value.files[0])
            : image1,
          isChecked: false,
        });
      }
      togglePopup(false);
    };

    const editDish = (dish: (typeof dishes.value)[0]) => {
      newDish.value = { ...dish, files: [] };
      isEditing.value = true;
      editingDishCode.value = dish.code;
      togglePopup(true);
    };

    const deleteDish = (code: string) => {
      if (confirm("Are you sure you want to delete this dish?")) {
        dishes.value = dishes.value.filter(
          (dish: { code: string }) => dish.code !== code
        );
      }
    };

    const filterDishes = () => {
      currentPage.value = 1; // Reset to first page on search
    };

    const changePage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    const handleFileUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files) {
        newDish.value.files = Array.from(input.files);
      }
    };

    const removeFile = (index: number) => {
      newDish.value.files.splice(index, 1);
    };

    return {
      dishes,
      newDish,
      showPopup,
      isEditing,
      searchQuery,
      currentPage,
      itemsPerPage,
      filteredDishes,
      totalPages,
      paginatedDishes,
      selectAll,
      selectedDishes,
      togglePopup,
      saveDish,
      editDish,
      deleteDish,
      filterDishes,
      changePage,
      handleFileUpload,
      removeFile,
      toggleSelectAll,
      updateSelectAll,
      deleteSelectedDishes,
    };
  },
});
</script>
