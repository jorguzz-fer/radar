<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <span class="block"> On-Time Delivery </span>
      </div>
    </div>
    <div class="trezo-card-content">
      <div class="max-w-[310px] mx-auto -mt-[5px] -mb-[8px]">
        <apexchart
          v-if="isClient"
          type="pie"
          height="180"
          :options="onTimeDelivery"
          :series="delivery"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "OnTimeDeliveryChart",
  setup() {
    const isClient = ref(false);
    const delivery = ref([85, 15]);
    const onTimeDelivery = ref({
      chart: {
        height: 180,
        type: "pie",
      },
      labels: ["Delivered", "Canceled"],
      colors: ["#37D80A", "#FF4023"],
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
        position: "left",
        fontSize: "12px",
        horizontalAlign: "bottom",
        offsetX: -25,
        offsetY: 109,
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
      delivery,
      onTimeDelivery,
    };
  },
});
</script>
