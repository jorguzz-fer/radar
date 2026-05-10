<template>
  <div class="counter-container relative w-[100px]" id="inputCounter">
    <button
      class="decrease-btn top-1/2 -translate-y-1/2 absolute text-[20px] ltr:left-[15px] rtl:right-[15px] text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
      @click="decrement"
    >
      -
    </button>
    <input
      type="text"
      class="counter text-[15px] h-[42px] rounded-md text-center block w-full bg-[#f6f7f9] dark:bg-[#15203c] text-black outline-0 font-medium dark:text-white"
      v-model="internalValue"
      readonly
    />
    <button
      class="increase-btn top-1/2 -translate-y-1/2 absolute text-[20px] ltr:right-[15px] rtl:left-[15px] text-gray-500 dark:text-gray-400 transition-all hover:text-primary-500"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const internalValue = ref<number>(1);

const increment = () => {
  internalValue.value++;
};

const decrement = () => {
  if (internalValue.value > 0) {
    internalValue.value--;
  }
};
</script>
