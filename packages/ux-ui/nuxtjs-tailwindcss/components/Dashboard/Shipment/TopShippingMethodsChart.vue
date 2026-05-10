<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <span class="block"> Top Shipping Methods </span>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="max-w-[310px] mx-auto -mt-[5px] -mb-[8px]">
        <apexchart
          v-if="isClient"
          type="pie"
          height="180"
          :options="topShippingMethods"
          :series="methods"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TopShippingMethodsChart",
  setup() {
    const isClient = ref(false);
    const methods = ref([45, 30, 15, 10]);
    const topShippingMethods = ref({
      chart: {
        height: 180,
        type: "pie",
      },
      labels: ["Air", "Road", "Sea", "Rail"],
      colors: ["#3584FC", "#FD5812", "#605DFF", "#37D80A"],
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "10px",
          fontFamily: "Inter",
          colors: ["#fff"],
        },
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 0,
          color: "#000",
          opacity: 0,
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: true,
        position: "right",
        fontSize: "12px",
        horizontalAlign: "bottom",
        offsetX: -12,
        offsetY: 0,
        itemMargin: {
          horizontal: 0,
          vertical: 4,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          height: 9,
          shape: "diamond",
          offsetX: -1,
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      methods,
      topShippingMethods,
    };
  },
});
</script>
