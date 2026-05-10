<template>
  <div
    class="trezo-card mb-[25px] p-[20px] md:p-[25px] text-center rounded-md"
    style="background: linear-gradient(180deg, #757dff 0%, #605dff 100%)"
  >
    <div class="trezo-card-content">
      <h5 class="!text-white !mb-[5px] mx-auto max-w-[250px] !leading-[1.5]">
        Shipment to top countries around the world
      </h5>
      <div class="flex items-center justify-center min-h-[180px] mb-[8px]">
        <div class="text-center">
          <img src="@/assets/images/map.svg" alt="map" />
        </div>
      </div>
      <div class="max-w-[310px] mx-auto w-full">
        <div class="grid grid-cols-2 gap-[12px]">
          <div class="flex items-center gap-[8px]">
            <img
              src="@/assets/images/flags/usa.svg"
              class="inline-block w-[16px]"
              alt="usa"
            />
            <span class="block text-white font-medium text-sm"> USA 85% </span>
          </div>
          <div class="flex items-center gap-[8px]">
            <img
              src="@/assets/images/flags/germany.svg"
              class="inline-block w-[16px]"
              alt="germany"
            />
            <span class="block text-white font-medium text-sm">
              Germany 75%
            </span>
          </div>
          <div class="flex items-center gap-[8px]">
            <img
              src="@/assets/images/flags/brazil.svg"
              class="inline-block w-[16px]"
              alt="brazil"
            />
            <span class="block text-white font-medium text-sm">
              Brazil 40%
            </span>
          </div>
          <div class="flex items-center gap-[8px]">
            <img
              src="@/assets/images/flags/canada.svg"
              class="inline-block w-[16px]"
              alt="canada"
            />
            <span class="block text-white font-medium text-sm">
              Canada 10%
            </span>
          </div>
          <div class="flex items-center gap-[8px]">
            <img
              src="@/assets/images/flags/portugal.svg"
              class="inline-block w-[16px]"
              alt="portugal"
            />
            <span class="block text-white font-medium text-sm">
              Portugal 05%
            </span>
          </div>
          <div class="flex items-center gap-[8px]">
            <img
              src="@/assets/images/flags/spain.svg"
              class="inline-block w-[16px]"
              alt="spain"
            />
            <span class="block text-white font-medium text-sm">
              Spain 15%
            </span>
          </div>
          <div class="flex items-center gap-[8px]">
            <img
              src="@/assets/images/flags/france.svg"
              class="inline-block w-[16px]"
              alt="france"
            />
            <span class="block text-white font-medium text-sm">
              France 25%
            </span>
          </div>
          <div class="flex items-center gap-[8px]">
            <img
              src="@/assets/images/flags/australia.svg"
              class="inline-block w-[16px]"
              alt="australia"
            />
            <span class="block text-white font-medium text-sm">
              Australia 55%
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShipmentToTopCountries",
});
</script>
