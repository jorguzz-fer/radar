<template>
  <div
    class="trezo-card py-[20px] md:py-[18.5px] px-[20px] md:px-[25px] rounded-md mb-[25px]"
    style="background: linear-gradient(90deg, #4936f5 0%, #4737d6 100%)"
  >
    <div class="trezo-card-content">
      <div class="grid grid-cols-1 sm:grid-cols-2 items-center gap-[15px]">
        <div class="text-center ltr:sm:text-left rtl:sm:text-right">
          <h3
            class="!mb-0 !text-white !font-semibold max-w-[250px] !leading-[1.5] !text-lg md:!text-[20px]"
          >
            Upgrade Plan To Manage 20K+ Patients
          </h3>
        </div>

        <div class="text-center ltr:sm:text-right rtl:sm:text-left">
          <img
            src="@/assets/images/users.png"
            class="inline-block"
            alt="users-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UpgradePlan",
});
</script>
