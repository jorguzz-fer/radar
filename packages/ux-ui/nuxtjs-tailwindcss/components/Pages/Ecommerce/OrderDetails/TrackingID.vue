<template>
  <div
    class="trezo-card bg-primary-500 mb-[25px] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[5px] md:mb-[25px] sm:flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0 !text-white">Tracking ID: 000346798254</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="relative z-[1] sm:flex items-center justify-between">
        <span
          class="block absolute left-0 right-0 top-[25px] -z-[1] border-t border-dashed border-white hidden md:inline-block"
        ></span>
        <div
          class="inline-block md:block ltr:mr-[25px] rtl:ml-[25px] md:ltr:mr-0 md:rtl:ml-0 mt-[15px] md:mt-0"
        >
          <div
            class="rounded-full bg-primary-500 text-center text-white font-semibold w-[50px] h-[50px] leading-[48px] border border-dashed border-white"
          >
            01
          </div>
          <span class="block text-white font-semibold mt-[13px]">
            Order Placed
          </span>
        </div>
        <div
          class="inline-block md:block ltr:mr-[25px] rtl:ml-[25px] md:ltr:mr-0 md:rtl:ml-0 mt-[15px] md:mt-0"
        >
          <div
            class="rounded-full bg-primary-500 text-center text-white font-semibold w-[50px] h-[50px] leading-[48px] border border-dashed border-white"
          >
            02
          </div>
          <span class="block text-white font-semibold mt-[13px]"> Packed </span>
        </div>
        <div
          class="inline-block md:block ltr:mr-[25px] rtl:ml-[25px] md:ltr:mr-0 md:rtl:ml-0 mt-[15px] md:mt-0"
        >
          <div
            class="rounded-full bg-info-400 text-center text-white font-semibold w-[50px] h-[50px] leading-[48px] border border-dashed border-white"
          >
            03
          </div>
          <span class="block text-white font-semibold mt-[13px]">
            Shipped
          </span>
        </div>
        <div
          class="inline-block md:block ltr:mr-[25px] rtl:ml-[25px] md:ltr:mr-0 md:rtl:ml-0 mt-[15px] md:mt-0"
        >
          <div
            class="rounded-full bg-primary-500 text-center text-white font-semibold w-[50px] h-[50px] leading-[48px] border border-dashed border-white ltr:ml-auto rtl:mr-auto"
          >
            04
          </div>
          <span class="block text-white font-semibold mt-[13px]">
            Delivered
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TrackingID",
});
</script>
