<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Basic RadialBar Chart</h5>
      </div>
    </div>
    <div class="trezo-card-content">
      <apexchart
        v-if="isClient"
        type="radialBar"
        height="350"
        :options="basicRadialBar"
        :series="basic"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "BasicRadialBarChart",
  setup() {
    const isClient = ref(false);
    const basic = ref([70]);
    const basicRadialBar = ref({
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
        },
      },
      labels: ["Cricket"],
      colors: ["#605DFF"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      basic,
      basicRadialBar,
    };
  },
});
</script>
