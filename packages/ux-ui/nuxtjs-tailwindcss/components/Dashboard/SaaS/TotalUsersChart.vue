<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div class="trezo-card-content relative">
      <span class="block mb-[5px]"> Total Users </span>
      <h3 class="!leading-none !text-lg md:!text-xl !mb-[8px]">241K</h3>
      <span
        class="inline-block text-xs px-[9px] text-success-700 border border-success-300 bg-success-100 dark:bg-[#15203c] dark:border-[#172036] text-sm rounded-[100px]"
      >
        +5.4%
      </span>
      <div
        class="absolute mt-[5px] ltr:-right-[110px] rtl:-left-[110px] top-1/2 -translate-y-1/2"
      >
        <apexchart
          v-if="isClient"
          type="donut"
          height="85"
          :options="activeUser"
          :series="users"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalUsersChart",
  setup() {
    const isClient = ref(false);
    const users = ref([60, 40, 50]);
    const activeUser = ref({
      chart: {
        height: 85,
        type: "donut",
      },
      labels: ["Online User", "Offline User", "None"],
      colors: ["#757DFF", "#58F229", "#5DA8FF"],
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 6,
          offsetX: -2,
          offsetY: -0.5,
          shape: "circle",
        },
      },
      dataLabels: {
        enabled: false,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      users,
      activeUser,
    };
  },
});
</script>
