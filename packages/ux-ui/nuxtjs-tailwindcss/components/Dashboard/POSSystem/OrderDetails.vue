<template>
  <div
    class="trezo-card bg-gray-50 dark:bg-[#0c1427] rounded-md border border-gray-100 dark:border-[#172036]"
  >
    <div
      class="trezo-card-header py-[15px] px-[20px] md:px-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !text-md md:!text-[20px] !font-medium">
          Order Details
        </h5>
      </div>
      <div class="trezo-card-subtitle">
        <button
          type="button"
          class="block leading-none text-primary-500 transition-all hover:rotate-90"
        >
          <i class="material-symbols-outlined"> autorenew </i>
        </button>
      </div>
    </div>

    <div
      class="trezo-card-content bg-white dark:bg-dark p-[20px] md:p-[25px] rounded-md border-t border-gray-100 dark:border-[#172036]"
    >
      <div
        v-for="(product, index) in products"
        :key="product.id"
        class="sm:flex items-center justify-between border-t border-gray-100 dark:border-[#172036] first:border-t-0 pt-[17px] first:pt-0 mt-[17px] first:mt-0"
      >
        <a
          href="#"
          class="flex items-center gap-[10px] text-black dark:text-white transition-all hover:text-primary-500"
        >
          <img
            :src="product.image"
            class="w-[40px] rounded-md"
            :alt="product.name + '-image'"
          />
          <span class="block font-medium leading-[1.2] lg:max-w-[80px]">
            {{ product.name }}
          </span>
        </a>
        <!-- Product info -->
        <div class="mt-[12px] sm:mt-0 flex items-center gap-[15px]">
          <div class="counter-container relative w-[90px]">
            <button
              @click="decreaseQuantity(index)"
              class="decrease-btn top-1/2 -translate-y-1/2 absolute text-[20px] ltr:left-[12px] rtl:right-[12px] text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
            >
              -
            </button>
            <input
              type="text"
              class="counter text-base h-[34px] rounded-md text-center block w-full bg-gray-50 dark:bg-[#15203c] text-black outline-0 font-medium dark:text-white"
              :value="product.quantity"
              readonly
            />
            <button
              @click="increaseQuantity(index)"
              class="increase-btn top-1/2 -translate-y-1/2 absolute text-[20px] ltr:right-[12px] rtl:left-[12px] text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
            >
              +
            </button>
          </div>
          <div
            class="leading-none font-medium sm:w-[45px] text-lg text-primary-500"
          >
            {{ formatCurrency(product.price * product.quantity) }}
          </div>
        </div>
      </div>

      <div
        class="bg-gray-50 dark:bg-dark rounded-md mt-[20px] md:mt-[25px] p-[15px] md:p-[20px]"
      >
        <div class="flex items-center justify-between mb-[5px]">
          <span class="block"> Total: </span>
          <span class="block"> {{ totalItems }} Items </span>
        </div>
        <div class="flex items-center justify-between mb-[5px]">
          <span class="block text-black dark:text-white font-medium">
            Subtotal:
          </span>
          <span class="block text-black dark:text-white font-medium">
            {{ formatCurrency(subtotal) }}
          </span>
        </div>
        <div class="flex items-center justify-between mb-[5px]">
          <span class="block text-black dark:text-white font-medium">
            Shipping:
          </span>
          <span class="block text-black dark:text-white font-medium">
            $0.00
          </span>
        </div>
        <div class="flex items-center justify-between mb-[5px]">
          <span class="block text-black dark:text-white font-medium">
            Tax (10%):
          </span>
          <span class="block text-black dark:text-white font-medium">
            {{ formatCurrency(tax) }}
          </span>
        </div>
        <div class="flex items-center justify-between mt-[18px]">
          <span
            class="block text-lg md:text-[20px] text-black dark:text-white font-medium"
          >
            Payble Total:
          </span>
          <span
            class="block text-lg md:text-[20px] text-black dark:text-white font-medium"
          >
            {{ formatCurrency(total) }}
          </span>
        </div>
      </div>
      <h4 class="!font-medium !mb-[15px] !text-[20px] mt-[25px]">
        Payment Method
      </h4>
      <div class="payment-method flex items-center gap-[20px] md:gap-[25px]">
        <div
          class="text-center relative w-[82px] h-[66px] pt-[4px] rounded-md bg-gray-50 dark:bg-dark border border-primary-100 dark:border-[#172036] transition-all"
        >
          <i class="material-symbols-outlined !text-2xl text-primary-500">
            paid
          </i>
          <span class="block -mt-[2px] md:-mt-[4px]"> Cash </span>
          <input
            type="radio"
            name="paymentMethod"
            id="cashType"
            class="top-0 left-0 z-[1] w-full h-full m-0 absolute cursor-pointer opacity-0"
          />
        </div>
        <div
          class="text-center relative w-[82px] h-[66px] pt-[4px] rounded-md bg-gray-50 dark:bg-dark border border-primary-100 dark:border-[#172036] transition-all"
        >
          <i class="material-symbols-outlined !text-2xl text-primary-500">
            credit_card
          </i>
          <span class="block -mt-[2px] md:-mt-[4px]"> Card </span>
          <input
            type="radio"
            name="paymentMethod"
            checked
            id="cardType"
            class="top-0 left-0 z-[1] w-full h-full m-0 absolute cursor-pointer opacity-0"
          />
        </div>
        <div
          class="text-center relative w-[82px] h-[66px] pt-[4px] rounded-md bg-gray-50 dark:bg-dark border border-primary-100 dark:border-[#172036] transition-all"
        >
          <i class="material-symbols-outlined !text-2xl text-primary-500">
            wallet
          </i>
          <span class="block -mt-[2px] md:-mt-[4px]"> E-Wallet </span>
          <input
            type="radio"
            name="paymentMethod"
            id="eWalletType"
            class="top-0 left-0 z-[1] w-full h-full m-0 absolute cursor-pointer opacity-0"
          />
        </div>
      </div>
      <button
        type="button"
        class="mt-[20px] md:mt-[25px] font-medium block w-full transition-all rounded-md md:text-md py-[10px] md:py-[11px] px-[20px] md:px-[22px] bg-primary-500 text-white hover:bg-primary-400"
      >
        Place Order
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "@/assets/images/products/product15.jpg";
import image2 from "@/assets/images/products/product16.jpg";
import image3 from "@/assets/images/products/product17.jpg";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default defineComponent({
  name: "OrderDetails",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Maybelline Lash",
          image: image1,
          price: 29,
          quantity: 1,
        },
        {
          id: 2,
          name: "Apple iPhone 16",
          image: image2,
          price: 799,
          quantity: 2,
        },
        {
          id: 3,
          name: "Adidas Woman",
          image: image3,
          price: 85,
          quantity: 1,
        },
      ] as Product[],
      shipping: 0,
      taxRate: 0.1,
    };
  },
  computed: {
    totalItems(): number {
      return this.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
    },
    subtotal(): number {
      return this.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    tax(): number {
      return this.subtotal * this.taxRate;
    },
    total(): number {
      return this.subtotal + this.tax + this.shipping;
    },
  },
  methods: {
    increaseQuantity(index: number): void {
      this.products[index].quantity++;
    },
    decreaseQuantity(index: number): void {
      if (this.products[index].quantity > 1) {
        this.products[index].quantity--;
      }
    },
    formatCurrency(value: number): string {
      return `$${value.toFixed()}`;
    },
  },
});
</script>
