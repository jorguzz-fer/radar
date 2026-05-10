<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md relative z-[1]"
  >
    <!-- Card Header -->
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">My Cards</h5>
      </div>
      <div class="trezo-card-subtitle">
        <button
          type="button"
          class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
          @click="showAddCardPopup = true"
        >
          <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
            <i
              class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add Card
          </span>
        </button>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
        <div
          v-for="card in cards"
          :key="card.id"
          class="p-[20px] md:p-[25px] rounded-md bg-center bg-no-repeat bg-cover relative overflow-hidden"
          :style="{ backgroundImage: `url(${card.backgroundImage})` }"
        >
          <div class="flex justify-between">
            <div>
              <span class="block text-white font-medium text-xs mb-[10px]">
                {{ card.type }}
              </span>
              <img :src="card.frameImage" alt="card-frame" />
            </div>
            <span class="text-[35px] text-white leading-none">
              <i :class="card.brandIcon"></i>
            </span>
          </div>
          <h5 class="!text-white !font-semibold !mb-[7px] mt-[37px]">
            {{ formatCardNumber(card.cardNumber) }}
          </h5>
          <div class="flex items-center justify-between">
            <span class="block text-white">{{ card.cardHolder }}</span>
            <span class="text-white block font-medium text-xs">
              EXP : {{ card.expiryDate }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute top-0 left-0 w-full h-full rounded-md -z-[1] dark:hidden bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${cardBg})` }"
    ></div>
  </div>

  <transition name="fade">
    <div
      v-if="showAddCardPopup"
      class="add-new-popup z-[999999999] fixed inset-0 overflow-x-hidden overflow-y-auto lg:py-[20px] bg-black/50 flex items-center justify-center"
      :class="{ active: showAddCardPopup }"
    >
      <div
        class="popup-dialog transition-all duration-300 w-full max-w-[550px]"
        :class="{
          'scale-100 opacity-100': showAddCardPopup,
          'scale-95 opacity-0': !showAddCardPopup,
        }"
      >
        <div
          class="trezo-card w-full bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
        >
          <div
            class="trezo-card-header bg-gray-50 dark:bg-[#15203c] mb-[20px] md:mb-[25px] flex items-center justify-between -mx-[20px] md:-mx-[25px] -mt-[20px] md:-mt-[25px] p-[20px] md:p-[25px] rounded-t-md"
          >
            <div class="trezo-card-title">
              <h5 class="!mb-0">Add New Card</h5>
            </div>
            <div class="trezo-card-subtitle">
              <button
                type="button"
                class="text-[23px] transition-all leading-none text-black dark:text-white hover:text-primary-500"
                @click="showAddCardPopup = false"
              >
                <i class="ri-close-fill"></i>
              </button>
            </div>
          </div>
          <div class="trezo-card-content">
            <form @submit.prevent="addNewCard">
              <div
                class="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[25px]"
              >
                <div>
                  <label
                    class="mb-[10px] text-black dark:text-white font-medium block"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    v-model="newCard.cardHolder"
                    class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div>
                  <label
                    class="mb-[10px] text-black dark:text-white font-medium block"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    v-model="newCard.cardNumber"
                    class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                    placeholder="Enter card number"
                    required
                    @input="formatCardNumberInput"
                  />
                </div>
                <div>
                  <label
                    class="mb-[10px] text-black dark:text-white font-medium block"
                  >
                    Card Type
                  </label>
                  <select
                    v-model="newCard.type"
                    class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                    required
                  >
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Prepaid Card">Prepaid Card</option>
                  </select>
                </div>
                <div>
                  <label
                    class="mb-[10px] text-black dark:text-white font-medium block"
                  >
                    Card Brand
                  </label>
                  <select
                    v-model="newCard.brand"
                    class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                    required
                  >
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="American Express">American Express</option>
                    <option value="Discover">Discover</option>
                  </select>
                </div>
                <div>
                  <label
                    class="mb-[10px] text-black dark:text-white font-medium block"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    v-model="newCard.expiryDate"
                    class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                    placeholder="MM/YY"
                    required
                    @input="formatExpiryDate"
                  />
                </div>
                <div>
                  <label
                    class="mb-[10px] text-black dark:text-white font-medium block"
                  >
                    CVV
                  </label>
                  <input
                    type="password"
                    v-model="newCard.cvv"
                    class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                    placeholder="123"
                    maxlength="4"
                    required
                  />
                </div>
              </div>
              <div class="mt-[20px] md:mt-[25px] ltr:text-right rtl:text-left">
                <button
                  type="button"
                  class="rounded-md inline-block transition-all font-medium ltr:mr-[15px] rtl:ml-[15px] px-[26.5px] py-[12px] bg-danger-500 text-white hover:bg-danger-400"
                  @click="showAddCardPopup = false"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="inline-block bg-primary-500 text-white py-[12px] px-[26.5px] transition-all rounded-md hover:bg-primary-400"
                >
                  <span
                    class="inline-block relative ltr:pl-[25px] rtl:pr-[25px]"
                  >
                    <i
                      class="material-symbols-outlined !text-[20px] absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2"
                    >
                      add
                    </i>
                    Add Card
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import bgImage1 from "@/assets/images/wallet/card3.jpg";
import bgImage2 from "@/assets/images/wallet/card4.jpg";
import frameImage from "@/assets/images/icons/card-frame.png";

import cardBg from "@/assets/images/cards-bg.jpg";

interface Card {
  id: number;
  type: string;
  brand: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv?: string;
  backgroundImage: string;
  frameImage: string;
  brandIcon: string;
}

export default defineComponent({
  name: "MyCards",
  setup() {
    const showAddCardPopup = ref(false);

    const cards = ref<Card[]>([
      {
        id: 1,
        type: "Credit Card",
        brand: "Visa",
        cardNumber: "4532876512341784",
        cardHolder: "Russell McCray",
        expiryDate: "12/30",
        backgroundImage: bgImage1,
        frameImage: frameImage,
        brandIcon: "ri-visa-fill",
      },
      {
        id: 2,
        type: "Credit Card",
        brand: "Mastercard",
        cardNumber: "5123456789011794",
        cardHolder: "Russell McCray",
        expiryDate: "12/30",
        backgroundImage: bgImage2,
        frameImage: frameImage,
        brandIcon: "ri-mastercard-fill",
      },
    ]);

    // New card form data
    const newCard = ref({
      type: "Credit Card",
      brand: "Visa",
      cardNumber: "",
      cardHolder: "",
      expiryDate: "",
      cvv: "",
    });

    // Format card number for display
    const formatCardNumber = (cardNumber: string) => {
      if (!cardNumber) return "**** **** **** ****";
      const lastFour = cardNumber.slice(-4);
      return `**** **** **** ${lastFour}`;
    };

    // Format card number input with spaces
    const formatCardNumberInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let value = input.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

      // Add space after every 4 digits
      value = value.replace(/(\d{4})/g, "$1 ").trim();

      // Limit to 16 digits (4 groups of 4)
      if (value.length > 19) {
        value = value.substring(0, 19);
      }

      input.value = value;
      newCard.value.cardNumber = value.replace(/\s+/g, "");
    };

    // Format expiry date input
    const formatExpiryDate = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let value = input.value.replace(/\D/g, "");

      // Add slash after 2 digits
      if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4);
      }

      // Limit to MM/YY format
      if (value.length > 5) {
        value = value.substring(0, 5);
      }

      input.value = value;
      newCard.value.expiryDate = value;
    };

    // Add new card
    const addNewCard = () => {
      const brandIconMap: Record<string, string> = {
        Visa: "ri-visa-fill",
        Mastercard: "ri-mastercard-fill",
        // "American Express": "ri-american-express-fill",
        // Discover: "ri-bank-card-fill",
      };

      const backgroundImageMap: Record<string, string> = {
        Visa: bgImage1,
        Mastercard: bgImage2,
        // "American Express": "@/assets/images/wallet/card1.jpg",
        // Discover: "@/assets/images/wallet/card2.jpg",
      };

      const newCardData: Card = {
        id: cards.value.length + 1,
        type: newCard.value.type,
        brand: newCard.value.brand,
        cardNumber: newCard.value.cardNumber,
        cardHolder: newCard.value.cardHolder,
        expiryDate: newCard.value.expiryDate,
        backgroundImage: backgroundImageMap[newCard.value.brand] || bgImage1,
        frameImage: frameImage,
        brandIcon: brandIconMap[newCard.value.brand] || "ri-bank-card-fill",
      };

      cards.value.push(newCardData);
      showAddCardPopup.value = false;
      resetNewCardForm();
    };

    const resetNewCardForm = () => {
      newCard.value = {
        type: "Credit Card",
        brand: "Visa",
        cardNumber: "",
        cardHolder: "",
        expiryDate: "",
        cvv: "",
      };
    };

    return {
      showAddCardPopup,
      cards,
      newCard,
      formatCardNumber,
      formatCardNumberInput,
      formatExpiryDate,
      addNewCard,
      cardBg,
    };
  },
});
</script>
